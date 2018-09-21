import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import CharacterList from './components/CharacterList'; 

class App extends Component {
  render() {
    return (
      <div>
        <CharacterList />
      </div>
    );
  }
}

export default App;
