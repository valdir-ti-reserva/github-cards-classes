import React from 'react';
import './App.css';

const testData = [
  {name: "Valdir Silva", avatar_url: "https://avatars0.githubusercontent.com/u/11434239?v=4", company: "Avanade"},
  {name: "Valdir Silva", avatar_url: "https://avatars0.githubusercontent.com/u/11434239?v=4", company: "Avanade"},
  {name: "Valdir Silva", avatar_url: "https://avatars0.githubusercontent.com/u/11434239?v=4", company: "Avanade"},
]

const CardList = (props) => (
  <div>
    {props.profiles.map(profile => <Card {...profile}/>)}
  </div>
)

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

  handleSubmit = (e) => {
    e.preventDefault();
    console.log(this.state.userName)
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
    profiles: testData
  }

  render(){
    return (
      <div className="App">
        <div className="title">{this.props.title}</div>
        <Form />
        <CardList profiles={this.state.profiles} />
      </div>
    );
  }
} 


export default App;
