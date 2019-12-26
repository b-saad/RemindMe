import React, { Component } from 'react';

class DateInput extends Component {
    render() {
        return (
            <div className={this.constructor.name}>
                <p className='fieldLabel'>Date: </p>
                <input type='date'></input>
                <p className='errorLabel'>Please choose a date in the future</p>
            </div>
        )
    }
}

export default DateInput;
