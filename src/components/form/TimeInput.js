import React, { Component } from 'react';

const VALID_TIME_ERROR = 'Please choose a valid time - 24h format - HH:MM';

/* Returns 24 hour time as HH:MM */
function getCurrentTime() {
    const today = new Date();
    var hour = today.getHours();
    var min = today.getMinutes();
    if (hour <= 9) {
        hour = `0${hour}`;
    }
    if (min <= 9) {
        min = `0${min}`;
    }
    return `${hour}:${min}`;
}
class TimeInput extends Component {
    constructor(props) {
        super(props);
        this.state = {
            errorMessage: VALID_TIME_ERROR,
            error: false
        };
    }

    render() {       
        const { time, handleTimeChange } = this.props;
        return (
            <div className={this.constructor.name}>
                <p className='fieldLabel'>Time: </p>
                <input  type='time'
                        className={this.state.error ? 'inputError' : ''}
                        value={time}
                        onChange={handleTimeChange}>
                </input>
                <p className='errorLabel' hidden={!this.state.error}>{this.state.errorMessage}</p>
            </div>
        )
    }
}

export {
    TimeInput,
    getCurrentTime
} 
