import React, { useState } from 'react';

import Form from './components/Form';
import CardList from './components/CardList';

import './App.css';

const App = ({title}) => {

  const [profiles, setProfiles] = useState([]);

  const addNewProfile = (profileData) => {
    const newProfile = [...profiles];
    newProfile.push(profileData);
    setProfiles(newProfile);
  }

  return (
    <div className="App">
      <div className="title">{title}</div>
      <Form onSubmit={addNewProfile} />
      <CardList profiles={profiles} />
    </div>
  );
}

export default App;
