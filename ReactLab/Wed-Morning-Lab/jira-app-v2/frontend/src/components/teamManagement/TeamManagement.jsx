import "./TeamManagement.styles.css";

export const TeamManagement = ({teamList}) => {
    return (
        <div className="team-wrapper">
            <h2>Teams</h2>
            <ul className="team-list">
                {
                    teamList.map((item) => (
                        <li key={item.teamId}>
                            <span className="team-name">{item.teamName} | {item.noOfEmp}</span>
                            <ul className="emp-list">
                                {
                                    item.emp_data.map((emp) => (
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
    )
}