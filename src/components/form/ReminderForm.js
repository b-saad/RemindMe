import React, { Component } from 'react';
import { formatDate, checkDateFormat } from '../../util/DateUtil';
import '../../css/ReminderForm.css';

import PhoneInputField from './PhoneInputField';
import DateInput from './DateInput';
import { TimeInput, getCurrentTime } from './TimeInput';
import MessageInput from './MessageInput'
import SubmitButton from './SubmitButton'

const CHARACTER_LIMIT = 160;
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
    }

    handleSubmit() {
        console.log(getCurrentTime());
    }

    handleDateChange(e) {
        const error = !checkDateFormat(e.target.value);
        this.setState({
            date: e.target.value,
            dateError: error
        })
    }

    render() {
        const { phone, date, dateError, time, message } = this.state;
        return (
            <form className={this.constructor.name}>
                <PhoneInputField phone={phone} handlePhoneChange={phone => this.setState({phone: phone})}/>
                <DateInput date={date} error={dateError} handleDateChange={this.handleDateChange} />
                <TimeInput time={time} handleTimeChange={e => this.setState({time: e.target.value})}/>
                <MessageInput message={message} handleMessageChange={e => this.setState({message: e.target.value})}/>
                <SubmitButton handleClick={this.handleSubmit}/>
            </form>
        )
    }
}

export default ReminderForm;
