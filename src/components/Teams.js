import React from "react";

const Teams = props => {
    return (
        <div className="team-list">
            {props.teams.map(team => (
                <div className="team" key={team.id}>
                    <h2>Name: {team.name}</h2>
                    <p>Email: {team.email}</p>
                    <p>Role: {team.role}</p>
                    <button>Edit Member</button>
                </div>
            ))}
        </div>
    );
};

export default Teams;