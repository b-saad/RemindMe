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
    constructor () {
        super();
        this.state = {
            time: getCurrentTime(),
            errorMessage: VALID_TIME_ERROR,
            error: false
        };
        this.handleTimeChange = this.handleTimeChange.bind(this);
    }

    handleTimeChange(e) {
        this.setState({ time : e.target.value });
    }

    render() {
        return (
            <div className={this.constructor.name}>
                <p className='fieldLabel'>Time: </p>
                <input  type='time'
                        className={this.state.error ? 'inputError' : ''}
                        value={this.state.time}
                        onChange={this.handleTimeChange}>
                </input>
                <p className='errorLabel' hidden={!this.state.error}>{this.state.errorMessage}</p>
            </div>
        )
    }
}

export default TimeInput;
