import "./Team.styles.css";
import React, { useState } from "react";

export const Team = ({teamList}) => {
    const [openAccordion, setOpenAccordion] = useState(null);

    const toggleAccordion = (team_id) => {
        setOpenAccordion(openAccordion === team_id ? null : team_id);
    };

    return (
        <div className="team-list">
            <h2>Teams</h2>
            {/* <ul>
                {team_list.map(obj => (
                    <li>
                        {obj.team_name}
                        <ul>
                            {obj.emp_data.map(emp => (
                                <li>
                                    {emp.emp_name}
                                </li>
                            ))}
                        </ul>
                    </li>
                ))}
            </ul> */}

            {teamList.map((team) => (
                <div key={team.team_id} className="accordion">
                    {/* Accordion Header */}
                    <button
                        className={`accordion-header ${openAccordion === team.team_id ? "active" : ""}`}
                        onClick={() => toggleAccordion(team.team_id)}
                    >
                        <span>{team.team_name} (Employees: {team.no_of_emp})</span>
                        <span className="arrow">{openAccordion === team.team_id ? "▲" : "▼"}</span>
                    </button>

                    {/* Accordion Body */}
                    {openAccordion === team.team_id && (
                        <div className="accordion-body">
                            <ul>
                                {team.emp_data.map((emp) => (
                                    <li key={emp.emp_id} className="employee">
                                        <strong>{emp.emp_id}</strong> - {emp.emp_name} <br />
                                        <span className="skills">
                                            Skills: {emp.emp_skills.join(", ")}
                                        </span>
                                    </li>
                                ))}
                            </ul>
                        </div>
                    )}
                </div>
            ))}
        </div>
    )
}