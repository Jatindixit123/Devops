import { Header } from "./components/header/headerComponent";
import "./App.css";
import { useState } from "react";
import EmployeeList from "./components/employee/EmployeeList";
import AssignTask from "./components/taskList/AssignTask";
import { Teams } from "./components/teamManagement/Team";

function App() {
  const [employees, setEmployees] = useState([]);
  const [tasks, setTasks] = useState([]);

  const [teamsData, setTeamData] = useState([
    {
      team_id: "team_001",
      team_name: "RCB",
      team_emp_count: 2,
      emp_data: [
        {emp_id: "EMP_01", emp_name: "Virat Kohli", emp_skills: ["Python", "Java"]},
        {emp_id: "EMP_02", emp_name: "ABD", emp_skills: ["Spring Boot", "Java", "SQL"]}
      ]
    },
    {
      team_id: "team_002",
      team_name: "CSK",
      team_emp_count: 3,
      emp_data: [
        {emp_id: "EMP_07", emp_name: "MS Dhoni", emp_skills: ["Java", "MySQL", "Oracle"]},
        {emp_id: "EMP_25", emp_name: "Suresh Raina", emp_skills: ["Python", "Django"]},
        {emp_id: "EMP_27", emp_name: "R Ashwin", emp_skills: ["AI", "ML", "Deep Learning"]},
      ]
    }
  ])

  const addEmployee = (emp) => {
    console.log(emp);
    // TODO - Add emp object to particular team
  }

  return (
    <>
      <Header/>
      <div className="container">
        <div className="row">
          <Teams
            teamData={teamsData}
          />
          <EmployeeList
          teamList={teamsData}
            empList={employees}
            addEmp={addEmployee}
          />
          <AssignTask
            empList={employees}
          />
        </div>
      </div>
    </>
  )
}

export default App;