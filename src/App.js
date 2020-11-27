import React from 'react';
import './App.css';

const testData = [
  {name: "Valdir Silva", avatar_url: "https://avatars0.githubusercontent.com/u/11434239?v=4", company: "Avanade"},
  {name: "Valdir Silva", avatar_url: "https://avatars0.githubusercontent.com/u/11434239?v=4", company: "Avanade"},
  {name: "Valdir Silva", avatar_url: "https://avatars0.githubusercontent.com/u/11434239?v=4", company: "Avanade"},
]

const CardList = (props) => (
  <div>
    {testData.map(profile => <Card {...profile}/>)}
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

class App extends React.Component {
  render(){
    return (
      <div className="App">
        <div className="title">{this.props.title}</div>
        <CardList />
      </div>
    );
  }
} 


export default App;
