import { useState } from 'react'
import './App.css'
import { Header } from './components/Header/Header'
import { TeamManagement } from './components/TeamManagement/TeamManagement'
import { EmployeeManagement } from './components/EmployeeManagement/EmployeeManagement'

function App() {
  
  const [teamData, setTeamData] = useState([
    {
      team_id: "Team_01",
      team_name: "CSK",
      team_no_of_emp: 3,
      emp_data: [
        {emp_id: "Emp_07", emp_name: "MS Dhoni", emp_skills: ["Python", "Java", "SQL"]},
        {emp_id: "Emp_02", emp_name: "R Ashwin", emp_skills: ["Oracle", "SQL", "Snowflake"]},
        {emp_id: "Emp_48", emp_name: "Suresh Raina", emp_skills: ["Java", "Spring Boot"]}
      ]
    },
    {
      team_id: "Team_02",
      team_name: "RCB",
      team_no_of_emp: 2,
      emp_data: [
        {emp_id: "Emp_18", emp_name: "Virat kohli", emp_skills: ["Python", "Django", "MySQL"]},
        {emp_id: "Emp_19", emp_name: "ABD", emp_skills: ["SQL", "Snowflake", "Python"]}        
      ]
    },
    {
      team_id: "Team_03",
      team_name: "MI",
      team_no_of_emp: 2,
      emp_data: [
        {emp_id: "Emp_45", emp_name: "Rohit Sharma", emp_skills: ["Java", "SQL", "Php"]},
        {emp_id: "Emp_15", emp_name: "Hardik Pandya", emp_skills: ["Oracle", "SQL", "Snowflake"]}
      ]
    }
  ])

  const addEmp = (empId, empName, empSkills, teamName) => {
    if(!empId || !empName || !empSkills || !teamName) {
      alert("Please fill all the fields");
      return;
    }

    setTeamData(prevTeam =>
      prevTeam.map(team => 
        team.team_name === teamName
        ? {
            ...team,
            emp_data: [...team.emp_data,
              {emp_id: empId, emp_name: empName, emp_skills: empSkills.split(",")}
            ],
            team_no_of_emp: team.team_no_of_emp + 1
        } : team
      )
    )

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
            </div>
          </div>
        </main>
      </div>
    </>
  )
}

export default App
