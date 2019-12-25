import React, { Component } from 'react';

class Button extends Component {
    render() {
        return (
            <button className={this.constructor.name} type='button'>Remind Me</button>
        )
    }
}

export default Button;
