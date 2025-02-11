import "./TeamManagement.styles.css";

export const TeamManagement = ({teamList}) => {
    return (
        <div className="team-wrapper">
            <h2>Teams</h2>
            <ul className="teamList">
                {
                    teamList.map(item => (
                        <li>
                            {item.team_name} | {item.no_of_emp}
                            <hr />
                            <ul className="empList">
                                { item.emp_data.map(emp => (<li>{emp.emp_name}</li>)) }
                            </ul>
                        
                        </li>
                    ))
                }
            </ul>
        </div>
    )
}