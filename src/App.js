import React, { Component } from 'react';
import './App.css';
import ValidationComponent from './ValidationComponent/ValidationComponent';
import CharComponent from './CharComponent/CharComponent';

class App extends Component {

  state = {
    name: ''
  };

  inputChangeHandler = (event) => {
    this.setState({
      name: event.target.value
    });
  };

  deleteCharHandler = (index) => {
    let name = this.state.name.split('');
    name.splice(index, 1);
    this.setState({
      name: name.join('')
    });
  };

  render() {
    let charMap = this.state.name.split('');
    let char = charMap.map((character, index) => {
      return <CharComponent
       handler={() => this.deleteCharHandler(index)}
       char={character}
       key={index} />
    });

    return (
    <div style={this.style}>
      <input onChange={(event)=>this.inputChangeHandler(event)} value={this.state.name}/>
      <p>Length : {this.state.name.length}</p>
      <ValidationComponent textLength={this.state.name.length} />
      {char}
    </div>
    );
  };
}

export default App;
