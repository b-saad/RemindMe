import React, { Component } from 'react';
import '../../css/SubmitButton.css';

class SubmitButton extends Component {

    render() {
        const { handleClick } = this.props; 
        return (
            <button className={this.constructor.name} type='button' onClick={handleClick}>Remind Me</button>
        )
    }
}

export default SubmitButton;
