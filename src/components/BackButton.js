import React, {Component} from 'react';
import './Back.css';
import logo from './logo.png';

class backButton extends Component {

    constructor(){
        super();

        this.onClick = this.onClick.bind(this);
    }

    onClick(){
        window.location="http://siga-fisi.herokuapp.com";
    }

    render(){
        return(
            <button onClick={this.onClick}>
                <img className="back-logo" src = {logo} alt="ATRAS"/>
            </button>
        );
    }
}

export default backButton;