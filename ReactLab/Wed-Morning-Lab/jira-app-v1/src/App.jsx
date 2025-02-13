import { Header } from "./components/header/Header";
import "./App.css";
import { useState } from "react";
import { TeamManagement } from "./components/teamManagement/TeamManagement";
import { Employee } from "./components/empManagement/EmpManagement";

function App() {

  const [teamList, setTeamList] = useState([
    {
      teamId: "Team_01",
      teamName: "CSK",
      noOfEmp: 3,
      emp_data: [
        {emp_id: "EMP_07", emp_name: "MS Dhoni", emp_skills: ["Python", "Java"]},
        {emp_id: "EMP_48", emp_name: "Suresh Raina", emp_skills: ["MySQL", "Snowflake"]},
        {emp_id: "EMP_06", emp_name: "R Ashwin", emp_skills: ["Python", "Django", "SQL"]}
      ]
    },
    {
      teamId: "Team_02",
      teamName: "RCB",
      noOfEmp: 2,
      emp_data: [
        {emp_id: "EMP_18", emp_name: "Virat Kohli", emp_skills: ["Java", "Spring", "SQL"]},
        {emp_id: "EMP_09", emp_name: "ABD", emp_skills: ["MySQL", "Java", "AWS", "Docker"]}
      ]
    }
  ])

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
        </div>
      </div>
    </>
  )
}

export default App;