import React from 'react';
import './App.css';
import UserData from './components/UserData';
import Followers from './components/Followers';

function App() {

  return (
    <div className="App">
      <UserData/>
      <h1 style={{fontSize:'2rem',fontWeight:'10px'}}>Followers</h1>
      <Followers/>
    </div>
  );
}

export default App;
