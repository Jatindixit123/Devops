import "./Team.styles.css";
import React, { useState } from "react";

export const Team = ({teamList}) => {

    return (
        <div className="team-list">
            <h2>Teams</h2>
            <ul>
                {teamList.map(obj => (
                    <li>
                        <h4>{obj.team_name}</h4>
                        <ul>
                            {obj.emp_data.map(emp => (
                                <li>
                                    <p>Emp ID : {emp.emp_id}</p>
                                    <p>Emp Name : {emp.emp_name}</p>
                                    <p>Emp Skills : {emp.emp_skills.join(", ")}</p>
                                </li>
                            ))}
                        </ul>
                    </li>
                ))}
            </ul>

            
        </div>
    )
}