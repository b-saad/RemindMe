import React, { Component } from 'react';

class TimeInput extends Component {
    render() {
        return (
            <div className={this.constructor.name}>
                Time: 
                <input type='time'></input>
            </div>
        )
    }
}

export default TimeInput;
