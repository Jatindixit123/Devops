import { Header } from "./components/header/headerComponent";
import "./App.css";
import { useEffect, useState } from "react";
import EmployeeList from "./components/employee/EmployeeList";
import AssignTask from "./components/taskList/AssignTask";
import { Teams } from "./components/teamManagement/Team";

function App() {
  const [employees, setEmployees] = useState([]);
  const [tasks, setTasks] = useState([]);

  const [teamsData, setTeamData] = useState([]);

  const TEAMS_URL = "http://localhost:9898/teams";
  useEffect(() => {
    fetch(TEAMS_URL)
    .then((response) => {
      if(!response.ok) throw new Error("Error while fetching teams data...");
      return response.json();
    })
    .then((data) => {
      setTeamData(data);
    })
    .catch((error) => {
      console.log(error.message);
    });
  }, []);

  const addEmployee = (empId, empName, empSkills, teamName) => {
    if(!empId || !empName || !empSkills || !teamName) {
        alert("All fields are required");
        return;
    }

    setTeamData((prevTeam) => 
        prevTeam.map((team) => 
            team.team_name === teamName
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
      <div className="container mx-auto px-4">
        <div className="flex">
          <Teams
            teamData={teamsData}
          />
          <EmployeeList
            teamList={teamsData}
            empList={employees}
            addEmp={addEmployee}
          />
          <AssignTask
            teamList={teamsData}
          />
        </div>
      </div>
    </>
  )
}

export default App;