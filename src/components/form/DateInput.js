import React, { Component } from 'react';

const VALID_DATE_ERROR = 'Please choose a date in the future - YYYY-MM-DD';

function formatDate(date) {
    var d = new Date(date),
        month = '' + (d.getMonth() + 1),
        day = '' + d.getDate(),
        year = d.getFullYear();

    if (month.length < 2) 
        month = '0' + month;
    if (day.length < 2) 
        day = '0' + day;

    return [year, month, day].join('-');
}

class DateInput extends Component {
    constructor () {
        super();
        this.state = {
            errorMessage: VALID_DATE_ERROR,
            error: false
        };
    }

    render() {
        const { date, handleDateChange } = this.props;
        return (
            <div className={this.constructor.name}>
                <p className='fieldLabel'>Date: </p>
                <input  type='date' 
                        min={formatDate(new Date())}
                        className={this.state.error ? 'inputError' : ''} 
                        value={date}
                        onChange={handleDateChange}>
                </input>
                <p className='errorLabel' hidden={!this.state.error}>{this.state.errorMessage}</p>
            </div>
        )
    }
}

export {
    DateInput,
    formatDate
} 
