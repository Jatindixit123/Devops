import { useEffect, useState } from "react";
import "./App.css";
import { Employee } from "./components/employees/Employee";
import { Header } from "./components/header/Header";
import { Team } from "./components/teams/Team";
import { TaskAssign } from "./components/taskAssign/TaskAssign";

function App() {
  const [teamList, setTeamList] = useState([]);

  const TEAMS_URL = "http://localhost:9898/teams";
  useEffect(() => {
    fetch(TEAMS_URL)
    .then((response) => {
      if(!response.ok) throw new Error("Error while fetching teams...");
      return response.json();
    })
    .then((data) => {
      setTeamList(data);
    })
    .catch((err) => {
      console.log(err);
    })
  }, []);

  const addEmployee = (emp) => {
    console.log("Employee :",emp);
    if (!emp.empId || !emp.empName || !emp.teamName || !emp.empSkills) {
        alert("All fields are required!");
        return;
    }

    setTeamList((prevTeams) =>
        prevTeams.map((team) =>
            team.team_name === emp.teamName
                ? {
                    ...team,
                    emp_data: [...team.emp_data, { emp_id: emp.empId, emp_name: emp.empName, emp_skills: emp.empSkills.split(",")}],
                    no_of_emp: team.no_of_emp + 1
                }
                : team
        )
    );
  };


  return (
    <>
      <Header/>
      <main id="main">
        <div className="container">
          <div className="row">
            <Team teamList={teamList}/>
            <Employee team_list={teamList} addEmp={addEmployee}/>
            <TaskAssign team_list={teamList} />
          </div>
        </div>
      </main>
    </>
  )
}

export default App;