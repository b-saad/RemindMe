import React, { Component } from 'react';

class TimeInput extends Component {
    render() {
        return (
            <div className={this.constructor.name}>
                <p className='fieldLabel'>Time: </p>
                <input type='time'></input>
                <p className='errorLabel'>Please choose a valid time</p>
            </div>
        )
    }
}

export default TimeInput;
