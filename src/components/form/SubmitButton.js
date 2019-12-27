import React, { Component } from 'react';
import '../../css/SubmitButton.css';

class SubmitButton extends Component {
    render() {
        return (
            <button className={this.constructor.name} type='button'>REMIND ME</button>
        )
    }
}

export default SubmitButton;
