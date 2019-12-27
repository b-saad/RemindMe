import React, { Component } from 'react';
import { formatDate, isToday, validDate } from '../../util/DateUtil';
import { getCurrentTime, validFutureTime } from '../../util/TimeUtil';
import '../../css/ReminderForm.css';

import PhoneInputField from './PhoneInputField';
import DateInput from './DateInput';
import TimeInput from './TimeInput';
import MessageInput from './MessageInput'
import SubmitButton from './SubmitButton'

// const CHARACTER_LIMIT = 160;
class ReminderForm extends Component {
    constructor () {
        super();
        this.state = {
            phone: '',
            date: formatDate(new Date()),
            time: getCurrentTime(),
            message: '',
            dateError: false,
            timeError: false
        };
        this.handleSubmit = this.handleSubmit.bind(this);
        this.handleDateChange = this.handleDateChange.bind(this);
        this.handleTimeChange = this.handleTimeChange.bind(this);
    }

    handleSubmit() {
        console.log(getCurrentTime());
    }

    handleDateChange(e) {
        const dateError = !validDate(e.target.value);
        const timeError = validDate(e.target.value) && isToday(e.target.value) && !validFutureTime(this.state.time);
        this.setState({
            date: e.target.value,
            dateError: dateError,
            timeError: timeError
        })
    }

    handleTimeChange(e) {
        var error = false;
        if (isToday(this.state.date)) {
            error = !validFutureTime(e.target.value);
        }
        this.setState({
            time: e.target.value,
            timeError: error
        })
    }

    render() {
        const { phone, date, dateError, time, timeError, message } = this.state;
        return (
            <form className={this.constructor.name}>
                <PhoneInputField phone={phone} handlePhoneChange={phone => this.setState({phone: phone})}/>
                <DateInput date={date} error={dateError} handleDateChange={this.handleDateChange} />
                <TimeInput time={time} error={timeError} handleTimeChange={this.handleTimeChange}/>
                <MessageInput message={message} handleMessageChange={e => this.setState({message: e.target.value})}/>
                <SubmitButton handleClick={this.handleSubmit}/>
            </form>
        )
    }
}

export default ReminderForm;
