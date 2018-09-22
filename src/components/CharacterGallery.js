import React, { Component } from 'react';
import CharacterCard from './CharacterCard';
import Pagination from './Pagination';
import SearchFilter from './SearchFilter';

export default class CharacterGallery extends Component {
    constructor() {
        super();
        this.state = {
            characters: []
        };
    }

    getCharacters = (listOffset) => {
        listOffset = listOffset >= 0 ? listOffset : 0 ;
        fetch('https://gateway.marvel.com:443/v1/public/characters?orderBy=name&offset=' + listOffset + '&limit=12&apikey=4dc1619d8f4a59de37a1aa43942a5a2d')
        .then((results) => results.json())
        .then((response) => {
            this.setState({characters: response.data.results});
        })
    }

    getCharacterByName = (characterName) => {
        if(characterName.length == 0) this.getCharacters();
        else {
            fetch('https://gateway.marvel.com:443/v1/public/characters?name=' + characterName + '&apikey=4dc1619d8f4a59de37a1aa43942a5a2d')
            .then((results) => results.json())
            .then((response) => {
                this.setState({characters: response.data.results});
            })
        }
    }

    filterCharactersByName = (order) => {
        fetch('https://gateway.marvel.com:443/v1/public/characters?orderBy=' + order + '&apikey=4dc1619d8f4a59de37a1aa43942a5a2d')
        .then((results) => results.json())
        .then((response) => {
            this.setState({characters: response.data.results});
        })
    }

    render() {
        return (
        <div>
            <section id="heroes-gallery">
                <div className="container">
                    <h1 id="title">Character</h1>
                    <SearchFilter getCharacterByName={this.getCharacterByName} filter={this.filterCharactersByName} />
                    <CharacterCard getCharacters={this.getCharacters} listCharacters={this.state.characters} />
                    <Pagination getCharacters={this.getCharacters} />
                </div>
            </section>
        </div>
        )
    }
}

