export const Teams = ({teamData}) => {
    return (
        <div className="team-wrapper">
            <h2>Teams</h2>
            <ul>
                {
                    teamData.map((team) => (
                        <li key={team.team_id}>
                            <span>{team.team_name}</span>
                            <ul>
                                {
                                    team.emp_data.map((emp) => (
                                        <li key={emp.emp_id}>
                                            <p>Emp ID: {emp.emp_id}</p>
                                            <p>Emp Name: {emp.emp_name}</p>
                                            <p>Emp Skills: {emp.emp_skills.join(", ")}</p>
                                        </li>
                                    ))
                                }
                            </ul>
                        </li>
                    ))
                }
            </ul>
        </div>
    )
}