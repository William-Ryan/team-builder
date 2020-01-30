import React, { useState } from 'react';
import ReactDom from "react-dom";

import Teams from "./components/Teams";
import TeamForm from "./components/TeamForm"

function App() {
  const [teams, setTeams] = useState([
    {
      id: 1,
      name: "William",
      email: "DetDet@Gg.com",
      role: "Team Captain"
    }
  ]);

  const [memberToEdit] = useState([]);

  const addNewMember = team => {
    const newMember = {
      id: Date.now(),
      name: team.name,
      email: team.email,
      role: team.role
    };
    setTeams([...teams, newMember]);
  };
  
  return(
    <div className="App">
      <h1>My Team</h1>
      <TeamForm addNewMember={addNewMember} memberToEdit={memberToEdit} />
      <Teams teams={teams} />
    </div>
  )
}

export default App;
