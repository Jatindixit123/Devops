import { Header } from "./components/header/headerComponent";
import "./App.css";
import { useState } from "react";
import EmployeeList from "./components/employee/EmployeeList";
import AssignTask from "./components/taskList/AssignTask";

function App() {
  const [employees, setEmployees] = useState([]);
  const [tasks, setTasks] = useState([]);

  const addEmployee = (emp) => {
    setEmployees([...employees, emp]);
    console.log(employees);
  }

  return (
    <>
      <Header/>
      <div className="container">
        <div className="row">
          <EmployeeList
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