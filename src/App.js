import React from 'react';
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

class Card extends React.Component {
  render(){
    const profile = this.props;
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
}

class Form extends React.Component {

  state = { userName: '' }
  
  handleSubmit = async (e) => {
    e.preventDefault();
    const resp = await axios.get(`https://api.github.com/users/${this.state.userName}`);
    this.props.onSubmit(resp.data);
    this.setState({ userName: '' });

  }
  render(){
    return (
      <form 
        onSubmit={this.handleSubmit} 
        className="form"
      >
        <input 
          type="text" 
          placeholder="GitHub username"
          required
          value={this.state.userName}
          onChange={e => this.setState({ userName: e.target.value })}
        />
        <button>Add User</button>
      </form>
    )
  }
}

class App extends React.Component {

  state = {
    profiles: []
  }

  addNewProfile = (profileData) => {
    this.setState(prevState => ({
      profiles: [...prevState.profiles, profileData]
    }));
  }

  render(){
    return (
      <div className="App">
        <div className="title">{this.props.title}</div>
        <Form onSubmit={this.addNewProfile} />
        <CardList profiles={this.state.profiles} />
      </div>
    );
  }
} 


export default App;
