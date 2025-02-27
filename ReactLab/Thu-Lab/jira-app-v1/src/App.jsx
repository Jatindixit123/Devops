import { Header } from "./components/header/Header";
import "./App.css";
import { useState } from "react";
import { TeamManagement } from "./components/teamManagement/TeamManagement";
import { EmployeeManagement } from "./components/empManagement/EmployeeManagement";
import { AssignTask } from "./components/taskManagement/AssignTask";

function App() {

    const [teamData, setTeamData] = useState([
        {
            teamId: "Team_01",
            teamName: "CSK",
            noOfEmp: 2,
            emp_data: [
                {emp_id: "emp_07", emp_name: "MS Dhoni", emp_skills: ["Python", "Java"]},
                {emp_id: "emp_11", emp_name: "R Ashwin", emp_skills: ["MySQL", "Oracle"]}
            ]
        },

        {
            teamId: "Team_02",
            teamName: "RCB",
            noOfEmp: 3,
            emp_data: [
                {emp_id: "emp_18", emp_name: "Virat Kohli", emp_skills: ["Spring", "Java", "SQL"]},
                {emp_id: "emp_05", emp_name: "ABD", emp_skills: ["Python", "MySQL", "Java"]},
                {emp_id: "emp_15", emp_name: "Faf Du Plesis", emp_skills: ["Python", "Django", "MySQL"]}
            ]
        }
    ]);

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