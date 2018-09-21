import React, { Component } from 'react';
import CharacterCard from './CharacterCard';
import Pagination from './Pagination';

export default class CharacterGallery extends Component {
    render() {
        return (
        <div>
            <section id="heroes-gallery">
                <div className="container">
                    <h1 id="title">Character</h1>
                    <CharacterCard />
                    <Pagination />
                </div>
            </section>
        </div>
        )
    }
}

