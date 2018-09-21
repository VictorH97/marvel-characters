import React, { Component } from 'react';
import MarvelLogo from '../img/marvelLogo.png'
import CharacterCard from './CharacterCard';

export default class CharacterList extends Component {
    render() {
        return (
        <div>
            <nav className="navbar navbar-expand-lg bg-red">
            <a className="navbar-brand">
                <img src={MarvelLogo} alt="Marvel's logo" width={200} />
            </a>
            </nav>
            <section id="heroes-gallery">
            <div className="container">
                <h1 id="title">Character</h1>
                <CharacterCard />
            </div>
            </section>
            <footer>
            <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed id elit tortor. 
                Praesent at magna sit amet erat viverra euismod et non urna. Fusce a mauris 
                eget ex maximus aliquam id sit amet dolor.
            </p>
            </footer>
        </div>
        )
    }
}

