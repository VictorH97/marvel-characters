import React, { Component } from 'react';

class CharacterCard extends Component {
    constructor() {
        super();
    }

    componentDidMount() {
        this.props.getCharacters();
    }

    render() {
        return (
            <div id="characters">
                <div className="row">
                {
                    this.props.listCharacters.map((ch) => {
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
                }
                </div>
            </div>
        );
    }
}

export default CharacterCard;
