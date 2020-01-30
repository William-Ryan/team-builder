import React, { useState } from 'react';
import ReactDom from "react-dom";

import Teams from "./components/Teams";
import TeamForm from "./components/TeamForm"

function App() {
  const [teams, setTeams] = useState([
    {
      id: 1,
      name: "William",
      role: "Team Captain"
    }
  ]);

  const addNewMember = team => {
    const newMember = {
      id: Date.now(),
      name: team.name,
      role: team.role
    };
    setTeams([...teams, newMember]);
  };
  
  return(
    <div className="App">
      <h1>My Team</h1>
      <TeamForm addNewMember={addNewMember} />
      <Teams teams={teams} />
    </div>
  )
}

export default App;
