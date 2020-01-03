import React, { Component } from 'react';

const VALID_TIME_ERROR = 'Please choose a valid future time - HH:MM - 24h format';

class TimeInput extends Component {
    constructor(props) {
        super(props);
        this.state = {
            errorMessage: VALID_TIME_ERROR,
        };
    }

    render() {       
        const { time, error, handleTimeChange } = this.props;
        return (
            <div className='TimeInput'>
                <p className='fieldLabel'>Time: </p>
                <input  type='time'
                        className={error ? 'inputError' : ''}
                        value={time}
                        onChange={handleTimeChange}>
                </input>
                <p className='errorLabel' hidden={!error}>{this.state.errorMessage}</p>
            </div>
        )
    }
}

export default TimeInput;
