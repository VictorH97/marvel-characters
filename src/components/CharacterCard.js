import React, { Component } from 'react';

class CharacterCard extends Component {
    constructor() {
        super();
        this.state = {
            characters: []
        };
    }

    componentDidMount() {
        fetch('https://gateway.marvel.com:443/v1/public/characters?orderBy=name&limit=12&apikey=4dc1619d8f4a59de37a1aa43942a5a2d')
        .then((results) => results.json())
        .then((response) => {
            let characters = response.data.results.map((ch) => {
                return(
                    <div key={ch.id} className="col-md-3">
                        <div className="card">
                            <div className="card-body">
                                <img src={ch.thumbnail.path + "/standard_medium." + ch.thumbnail.extension}/>
                                <h5 className="text-center">{ch.name}</h5>
                                <br />
                                <a href="#" className="text-center">{ch.name}</a>
                                <hr />
                                <p className="text-center">{ch.description}</p>
                            </div>
                        </div>
                    </div>
                )
            })
            this.setState({characters: characters});
        })
    }

    render() {
        return (
            <div id="characters">
                <div className="row">
                    {this.state.characters}
                </div>
            </div>
        );
    }
}

export default CharacterCard;
