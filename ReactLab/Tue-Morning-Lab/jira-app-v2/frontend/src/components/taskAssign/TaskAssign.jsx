import "./TaskAssign.styles.css";

export const TaskAssign = ({team_list}) => {

    const assignTask = () => {

    }

    return (
        <div className="task-wrapper">
            <h2>Assign Task</h2>
            <div className="form-group">
                <div className="input-group">
                    <label>Enter Task Title</label>
                    <input
                        type="text"
                        placeholder="Enter Task Title"
                    />
                </div>
                
                <div className="input-group">
                    <label>Enter Task Description</label>
                    <textarea
                        placeholder="Enter task description"
                    />
                </div>

                <div className="input-group">
                    <label>Select Team</label>
                    <select>
                        <option value="">Select Team</option>
                        {team_list.map(obj => (
                            <option value={obj.teamName}>
                                {obj.team_name}
                            </option>
                        ))}
                    </select>
                </div>

                <div className="input-group">
                    <label>Select Employee</label>
                    <select>
                        <option value="">Select Employee</option>
                        {team_list.map(obj => (
                            <option value={obj.teamName}>
                                {obj.team_name}
                            </option>
                        ))}
                    </select>
                </div>

                <div className="btn-group">
                    <button onClick={assignTask}>Assign Task</button>
                </div>
            </div>
        </div>
    )
}