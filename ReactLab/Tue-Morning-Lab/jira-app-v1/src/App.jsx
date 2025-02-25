import { useState } from "react";
import "./App.css";
import { Employee } from "./components/employees/Employee";
import { Header } from "./components/header/Header";
import { Team } from "./components/teams/Team";
import { TaskAssign } from "./components/taskAssign/TaskAssign";

function App() {
  const [teamList, setTeamList] = useState([
    {
        team_id: 101,
        team_name: "CSK",
        no_of_emp: 2,
        emp_data: [
            {emp_id: "EMP_01", emp_name: "John", emp_skills: ["Java", "Python"]},
            {emp_id: "EMP_02", emp_name: "Max", emp_skills: ["Python"]},
        ]
    },
  
    {
        team_id: 102,
        team_name: "RCB",
        no_of_emp: 3,
        emp_data: [
            {emp_id: "EMP_03", emp_name: "Virat", emp_skills: ["Java", "MySQL"]},
            {emp_id: "EMP_04", emp_name: "Maxwell", emp_skills: ["Python", "ML"]},
            {emp_id: "EMP_05", emp_name: "ABD", emp_skills: ["Python", "ML", "Java"]}
        ]
    }
  ]);

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