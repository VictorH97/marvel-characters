import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import MarvelLogo from './img/marvelLogo.png';
import CharacterGallery from './components/CharacterGallery'; 

class App extends Component {
  render() {
    return (
      <div>
        <nav className="navbar navbar-expand-lg bg-red">
          <a className="navbar-brand">
              <img src={MarvelLogo} alt="Marvel's logo" width={200} />
          </a>
        </nav>
        <CharacterGallery />
        <footer>
            <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed id elit tortor. 
                Praesent at magna sit amet erat viverra euismod et non urna. Fusce a mauris 
                eget ex maximus aliquam id sit amet dolor.
            </p>
          </footer>
      </div>
    );
  }
}

export default App;
