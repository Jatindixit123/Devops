import "./TeamManagement.styles.css";

export const TeamManagement = ({teamList}) => {
    return (
        <div className="team-wrapper">
            <h2>Teams</h2>
            <div className="team-list">
                <ul>
                    {
                        teamList.map((team) => (
                            <li>
                                <p>{team.teamName} | {team.noOfEmp}</p>
                                <ul className="emp-list">
                                    {
                                        team.emp_data.map((emp) => (
                                            <li>
                                                <p>Emp ID : {emp.emp_id}</p>
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