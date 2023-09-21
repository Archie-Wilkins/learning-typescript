import React, { useState } from 'react';
import './App.css';
import { User } from './dtos/user';

function App() {
  const [firstName, setFirstName] = useState<string>("");
  const [lastName, setLastName] = useState<string>("");
  const [description, setDescription] = useState<string>("");
  const [city, setCity] = useState<string>("");

  const activateLasers = () => {
    console.log("Pew Pew");
    let user: User = new User(
      firstName,
      lastName,
      description,
      city
    );

    console.log(user.toString());
  }

  return (
    <div className="App">
      <header className="App-header">
        <p>Hello</p>
        
        {/* Text Input For First Name */}
        <input 
          type="text" 
          placeholder="First Name" 
          value={firstName} 
          onChange={(e) => setFirstName(e.target.value)}
        />
        
        {/* Text Input For Last Name */}
        <input 
          type="text" 
          placeholder="Last Name" 
          value={lastName} 
          onChange={(e) => setLastName(e.target.value)}
        />

        {/* Text Input For Description */}
        <input 
          type="text" 
          placeholder="Description" 
          value={description} 
          onChange={(e) => setDescription(e.target.value)}
        />

        {/* Text Input For City */}
        <input 
          type="text" 
          placeholder="City" 
          value={city} 
          onChange={(e) => setCity(e.target.value)}
        />
        
        <button onClick={activateLasers}>
          Activate Lasers
        </button>
      </header>
    </div>
  );
}

export default App;
