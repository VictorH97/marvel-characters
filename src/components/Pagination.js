import React, { Component } from 'react';
import ArrowLeft from '../img/arrow-left.svg';
import ArrowRight from '../img/arrow-right.svg';
import CharacterCard from './CharacterCard';

class Pagination extends Component {
    constructor() {
        super();
        this.state = {
            pageOffset: 0
        }
    }

    getPreviousChars = () => {
        this.setState({pageOffset: this.state.pageOffset - 12});
        this.props.getCharacters(this.state.pageOffset);
    }

    getNextChars = () => {
        this.setState({pageOffset: this.state.pageOffset + 12});
        this.props.getCharacters(this.state.pageOffset);
    }    

    render() {
        return (
            <div id="gallery-pagination" aria-label="Page navigation">
                <ul className="pagination justify-content-center">
                    <li className="page-item">
                        <a className="page-link" aria-label="Previous" onClick={this.getPreviousChars}>
                            <span aria-hidden="true"><img src={ArrowLeft} /></span>
                            <span className="sr-only">Anterior</span>
                        </a>
                    </li>
                    <li className="page-item"><a className="page-link" href="#">1</a></li>
                    <li className="page-item"><a className="page-link" href="#">2</a></li>
                    <li className="page-item"><a className="page-link" href="#">3</a></li>
                    <li className="page-item">
                        <a className="page-link" aria-label="Previous" onClick={this.getNextChars}>
                            <span aria-hidden="true"><img src={ArrowRight} /></span>
                            <span className="sr-only">Próximo</span>
                        </a>
                    </li>
                </ul>
            </div>
        );
    }
}

export default Pagination;
