import { Header } from "./components/header/Header";
import "./App.css";
import { useState } from "react";
import { TeamManagement } from "./components/teamManagement/TeamManagement";
import { Employee } from "./components/empManagement/EmpManagement";
import { AssignTask } from "./components/taskManagement/AssignTask";

function App() {

  const [teamList, setTeamList] = useState([]);

  const TEAMS_URL = "http://localhost:3333/teams";
  fetch(TEAMS_URL)
  .then((response) => {
    if(!response.ok) throw new Error("Failed to load teams data");
    return response.json();
  })
  .then((data) => {
    setTeamList(data);
  })
  .catch((error) => {
    console.log(error);
  })

  const addEmployee = (empId, empName, teamName, empSkills) => {
    if(!empId || !empName || !empSkills || !teamName) {
      alert("All fields are mandatory...");
      return;
    }

    console.log("Updating Emp to:",teamName);

    setTeamList((oldTeams) =>
      oldTeams.map((team) =>
        team.teamName === teamName
      ? {
        ...team,
        emp_data: [...team.emp_data, 
          {emp_id: empId, emp_name:empName, emp_skills: empSkills.split(",")}],
          noOfEmp: team.noOfEmp+1
      } :team
    ))

    console.log(teamList);
  }

  return (
    <>
      <Header/>
      <div className="container">
        <div className="row">
          <TeamManagement
            teamList={teamList}
          />

          <Employee 
            teamList={teamList}
            addEmp={addEmployee}
          />

          <AssignTask
            teamList={teamList}
          />
        </div>
      </div>
    </>
  )
}

export default App;