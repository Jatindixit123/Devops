import { Header } from "./components/header/Header";
import "./App.css";
import { useState } from "react";
import { TeamManagement } from "./components/teams/TeamManagement";
import { EmployeeManagement } from "./components/employees/EmployeeManagament";

function App() {
  
  const [teamData, setTeamData] = useState([]);

  const TEAMS_URL = "http://localhost:9999/teams";
  fetch(TEAMS_URL)
  .then((response) => {
    if(!response.ok) throw new Error("Failed to get teams data");
    return response.json();
  })
  .then((data) => {
    setTeamData(data);
  })
  .catch((err) => {
    console.log(err);
  })

  const addEmp = (empId, empName, empSkills, teamName) => {
    if(!empId || !empName || !empSkills || !teamName) {
      alert("All fields are required...");
      return;
    }
    const newEmp = {emp_id: empId, emp_name: empName, emp_skills: empSkills};
    setTeamData((prevTeam) => 
        prevTeam.map((team) => 
          team.team_name === teamName
          ? {
              ...team,
              emp_data : [...team.emp_data, newEmp],
              no_of_emp: team.no_of_emp + 1
          } : team 
        )
    )
  }

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
                addEmp={addEmp}
              />
          </div>
        </div>
      </main>
    </>
  )
}

export default App;