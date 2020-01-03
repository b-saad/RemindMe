import React, { Component } from 'react';
import { formatDate } from '../../util/DateUtil';

const VALID_DATE_ERROR = 'Please choose a date in the future - YYYY-MM-DD';

class DateInput extends Component {
    constructor () {
        super();
        this.state = {
            errorMessage: VALID_DATE_ERROR,
        };
    }

    render() {
        const { date, handleDateChange, error } = this.props;
        return (
            <div className='DateInput'>
                <p className='fieldLabel'>Date: </p>
                <input  type='date' 
                        min={formatDate(new Date())}
                        className={error ? 'inputError' : ''} 
                        value={date}
                        onChange={handleDateChange}>
                </input>
                <p className='errorLabel' hidden={!error}>{this.state.errorMessage}</p>
            </div>
        )
    }
}

export default DateInput;
