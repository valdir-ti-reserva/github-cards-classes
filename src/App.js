import React, { useState } from 'react';
import axios from 'axios';
import './App.css';

const CardList = (props) => {
  
  function getUnique(arr, comp) {

    // store the comparison  values in array
    const unique =  arr.map(e => e[comp])

    //   store the indexes of the unique objects
    .map((e, i, final) => final.indexOf(e) === i && i)

    // eliminate the false indexes & return unique objects
    .filter((e) => arr[e]).map(e => arr[e]);

    return unique;
  }

  const uniqueProfile = getUnique(props.profiles,'id');

  return (
    <div>
      {uniqueProfile.map(profile => <Card key={profile.id} {...profile}/>)}
    </div>
  )
}

const Card = (props) => {

  const profile = props;
  return(
    <div className="github-profile">
      <img src={profile.avatar_url} alt="Logo"/>
      <div className="info">
        <div className="name">{profile.name}</div>
        <div className="company">{profile.company}</div>
      </div>
    </div>
  );
  
}

const Form = (props) => {

  const [userName, setUserName] = useState('');
  
  const handleSubmit = async (e) => {
    e.preventDefault();
    const resp = await axios.get(`https://api.github.com/users/${userName}`);    
    props.onSubmit(resp.data);
    setUserName('');
  }
  
  return (
    <form 
      onSubmit={handleSubmit} 
      className="form"
    >
      <input 
        type="text" 
        placeholder="GitHub username"
        required
        value={userName}
        onChange={e => setUserName(e.target.value)}
      />
      <button>Add User</button>
    </form>
  )
  
}

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
