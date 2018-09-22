import React, { Component } from 'react';
import FilterImg from '../img/filter.svg'
import ArrowUp from '../img/arrow-up.svg'
import ArrowDown from '../img/arrow-down.svg'

class SearchFilter extends Component {
    constructor() {
        super();
        this.state = {
            value: '',
            order: 'name',
            filterAz: true
        }
    }

    handleChange = (e) => {
        this.setState({ value: e.target.value });
    }

    verifyEnter = (e) => {
        if(e.keyCode == 13){
            this.props.getCharacterByName(e.target.value);
         }
    }

    filter = () => {
        this.state.order = this.state.order == "name" ? "-name" : "name" ;
        this.state.filterAz = this.state.filterAz == true ? false : true ;
        this.props.filter(this.state.order);
    }

    render() {
        return (
            <div id="search-group">
                <div className="row">
                    <div className="col-md-4">
                        <div className="form-group">
                            <input id="searchTextBox" type="text" value={this.state.value} className="form-control" placeholder="Character" onKeyDown={this.verifyEnter} onChange={this.handleChange} />
                        </div>
                    </div>
                    <div className="col-md-2">
                        <div>
                            <a id="btn-filter" onClick={this.filter}><img src={FilterImg} />&nbsp;{this.state.filterAz ? 'A-Z' : 'Z-A'}&nbsp;<img src={this.state.filterAz ? ArrowDown : ArrowUp} /></a>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

export default SearchFilter;
