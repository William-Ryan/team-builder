import React, { useState } from "react";

const TeamForm = props => {
    const [team, setTeam] = useState({
        name: "",
        role: "",
    });

    const handleChanges = e => {
        setTeam({
            ...team,
            [e.target.name]: e.target.value
        });
    };

    const submitForm = e => {
        e.preventDefault();
        props.addNewMember(team);
        setTeam({ name: "", role: "" });
    };

    return (
        <form onSubmit={submitForm}>
            <label htmlFor="name">Member's Name</label>
            <input
            id="name"
            type="text"
            name="name"
            onChange={handleChanges}
            value={team.name}
            />
            <label htmlFor="role">Member's Role</label>
            <input
            id="role"
            name="role"
            onChange={handleChanges}
            value={team.role}
            />
            <button type="submit">Add Member</button>
        </form>
    );
};

export default TeamForm;