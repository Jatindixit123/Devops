import { useState } from "react";
import "./Employee.css";

const EmployeeList = ({empList, addEmp}) => {
    const [newEmployee, setNewEmployee] = useState({
        "empId": 0,
        "empName" : "",
    });
    const [empId, setEmpId] = useState(0);

    const changeHandler = (event) => {
        const empName = event.target.value;
        setEmpId(empId + 1);
        setNewEmployee({...newEmployee, ["empName"]:empName, ["empId"]:empId});
    }

    const handleAddEmp = () => {
        addEmp(newEmployee);
    }

    return (
        <div className="emp-wrapper">
            <div className="add-emp">
                <h2>Add Employee</h2>
                <input 
                    type="text"
                    placeholder="Enter Emp Name"
                    onChange={changeHandler}
                />
                <button onClick={handleAddEmp}>Add Employee</button>
            </div>
            <div className="employee-list">
                <h2>Employee List</h2>
                <ul>
                    {
                        empList.map((emp, index) => (
                            <li key={index}>
                                {emp.empName}
                            </li>
                        ))
                    }
                </ul>
            </div>
        </div>

    )
}

export default EmployeeList;