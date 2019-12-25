import React, { Component } from 'react';

class DateInput extends Component {
    render() {
        return (
            <div className={this.constructor.name}>
                Date: 
                <input type='date'></input>
            </div>
        )
    }
}

export default DateInput;
