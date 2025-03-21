import { useEffect, useState } from 'react'
import './App.css'
import { Header } from './components/Header/Header'
import { TeamManagement } from './components/TeamManagement/TeamManagement'
import { EmployeeManagement } from './components/EmployeeManagement/EmployeeManagement'
import { AssignTask } from './components/TaskManagement/AssignTask'

function App() {
  
  const [teamData, setTeamData] = useState([]);

  const URL = "http://localhost:8989/teams";
  useEffect(() => {
    fetch(URL)
    .then((response) => {
      if (!response.ok) throw new Error("Failed to load teams data");
      return response.json();
    })
    .then((data) => {
      setTeamData(data);
    })
    .catch((err) => {
      console.log("Error while fetching teams data",err);
    })
  }, []);

  const addEmp = (empId, empName, empSkills, teamName) => {
    if(!empId || !empName || !empSkills || !teamName) {
      alert("Please fill all the fields");
      return;
    }

    // Send Emp data to back-end
    

  }

  return (
    <>
      <div id='container'>
        <Header/>
        <main>
          <div className='container'>
            <div className='row'>
                <TeamManagement
                  teamData={teamData}
                />

                <EmployeeManagement
                  teamData={teamData}
                  addEmp={addEmp}
                />

                <AssignTask
                  teamData={teamData}
                />
            </div>
          </div>
        </main>
      </div>
    </>
  )
}

export default App
