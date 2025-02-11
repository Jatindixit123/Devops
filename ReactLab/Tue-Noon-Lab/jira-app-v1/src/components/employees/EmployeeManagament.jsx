import "./EmployeeManagement.styles.css";

export const EmployeeManagement = ({teamList}) => {
    return (
        <div className="emp-wrapper">
            <h2>Add Employee</h2>
            <div className="input-group">
                <label>Enter Emp ID</label>
                <input 
                    type="text" 
                    placeholder="Enter Emp ID"/>
            </div>

            <div className="input-group">
                <label>Enter Emp Name</label>
                <input 
                    type="text" 
                    placeholder="Enter Emp Name"/>
            </div>

            <div className="input-group">
                <label>Enter Emp Skills</label>
                <input 
                    type="text" 
                    placeholder="Enter Emp skills"/>
            </div>

            <div className="input-group">
                <label>Select Team</label>
                <select>
                    <option value="">Select Team</option>
                    {
                        teamList.map(team => (
                            <option value={team.team_name}>
                                {team.team_name}
                            </option>
                        ))
                    }
                </select>
            </div>

            <button>Add Employee</button>
        </div>
    )
}