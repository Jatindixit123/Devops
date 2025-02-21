import "./TeamManagement.styles.css";

export const TeamManagement = ({teamData}) => {
    return (
        <div className="team-wrapper">
            <h2>Teams</h2>
            <div className="team-list">
                <ul>
                    {
                        teamData.map((team) => (
                            <li key={team.team_id}>
                                <span>{team.team_name} | {team.team_no_of_emp}</span>

                                <ul className="emp-list">
                                    {
                                        team.emp_data.map((emp) => (
                                            <li key={emp.emp_id}>
                                                <p>EmpID : {emp.emp_id}</p>
                                                <p>Emp Name : {emp.emp_name}</p>
                                                <p>Emp Skills : {emp.emp_skills.join(", ")}</p>
                                            </li>
                                        ))
                                    }
                                </ul>
                            </li>
                        ))
                    }
                </ul>
            </div>
        </div>
    )
}