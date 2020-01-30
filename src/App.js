import React from 'react';
import logo from './logo.svg';
import './App.css';

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
    </div>
  )
}

export default App;
