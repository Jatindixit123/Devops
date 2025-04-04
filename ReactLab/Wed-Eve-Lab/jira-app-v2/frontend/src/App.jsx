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
  const [errorMsg, setErrorMsg] = useState("");

  useEffect(() => {
    fetch("http://localhost:8989/teams")
    .then((response) => {
      console.log("Response :",response);
      if(!response.ok) throw new Error("Failed to fetch teams data");
      return response.json();
    })
    .then((data) => {
      setTeamData(data);
      console.log(data);
    })
    .catch((err) => {
      setErrorMsg(err.message);
    })
  }, []);

  const addEmployee = (empId, empName, empSkills, teamName) => {
    if(!empId || !empName || !empSkills || !teamName) {
        alert("All fields are required");
        return;
    }
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
            teamList={teamsData}
          />
        </div>
      </div>
    </>
  )
}

export default App;