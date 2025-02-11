import { Header } from "./components/header/Header";
import "./App.css";
import { useState } from "react";
import { TeamManagement } from "./components/teams/TeamManagement";
import { EmployeeManagement } from "./components/employees/EmployeeManagament";

function App() {
  
  const [teamData, setTeamData] = useState([
    {
      team_id: "team_01",
      team_name: "RCB",
      no_of_emp: 2,
      emp_data: [
        {emp_id: "EMP_101", emp_name: "Virat Kohli", emp_skills: ["Python", "Java"]},
        {emp_id: "EMP_109", emp_name: "ABD", emp_skills: ["MySQL", "Java", "Spring"]}
      ]
    },
    {
      team_id: "team_02",
      team_name: "CSK",
      no_of_emp: 3,
      emp_data: [
        {emp_id: "EMP_102", emp_name: "MS Dhoni", emp_skills: ["Python", "Django", "SQL"]},
        {emp_id: "EMP_110", emp_name: "Suresh Raina", emp_skills: ["MySQL", "Java", "Angular"]},
        {emp_id: "EMP_108", emp_name: "R Ashwin", emp_skills: ["MySQL", "Angular"]}
      ]
    },
  ]);

  return (
    <>
      <Header/>
      <main id="main">
        <div className="container">
          <div className="row">
              <TeamManagement
                teamList={teamData}
              />

              <EmployeeManagement
                teamList={teamData}
              />
          </div>
        </div>
      </main>
    </>
  )
}

export default App;