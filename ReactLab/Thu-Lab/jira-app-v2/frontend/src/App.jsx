import { Header } from "./components/header/Header";
import "./App.css";
import { useEffect, useState } from "react";
import { TeamManagement } from "./components/teamManagement/TeamManagement";
import { EmployeeManagement } from "./components/empManagement/EmployeeManagement";
import { AssignTask } from "./components/taskManagement/AssignTask";

function App() {

    const [teamData, setTeamData] = useState([]);
    const TEAMS_URL = "http://localhost:5656/api/teams";

    useEffect(() => {
        fetch(TEAMS_URL)
        .then((response) => {
            if(!response.ok) throw new Error("Error while fetching teams data");
            return response.json()
        })
        .then((data) => {
            setTeamData(data);
        })
        .catch((err) => {
            console.log("Error :",err);
        })
    }, []);


    const addEmp = (empId, empName, empSkills, teamName) => {
        if(!empId || !empName || !empSkills || !teamName) {
            alert("All fields are required");
            return;
        }

        setTeamData((prevTeam) => 
            prevTeam.map((team) => 
                team.teamName === teamName
                ? {
                    ...team,
                    emp_data: [...team.emp_data, 
                        {
                            emp_id: empId, 
                            emp_name:empName, 
                            emp_skills:empSkills.split(",")
                        }],
                    noOfEmp: team.noOfEmp+1
                }
                :team
            )
        )

    }

    return (
        <>
            <Header/>
            <div className="container">
                <div className="row">
                    <TeamManagement
                        teamList={teamData}
                    />

                    <EmployeeManagement
                        teamList={teamData}
                        addEmp={addEmp}
                    />

                    <AssignTask
                        teamList={teamData}
                    />
                </div>
            </div>
        </>
        
    )
}

export default App;