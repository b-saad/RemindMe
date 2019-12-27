import React, { Component } from 'react';
import '../../css/ReminderForm.css';

import PhoneInputField from './PhoneInputField';
import { DateInput, formatDate } from './DateInput';
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
    }

    handleSubmit() {
        console.log(getCurrentTime());
    }

    render() {
        const { phone, date, time, message } = this.state;
        return (
            <form className={this.constructor.name}>
                <PhoneInputField phone={phone} handlePhoneChange={phone => this.setState({phone: phone})}/>
                <DateInput date={date} handleDateChange={e => this.setState({date: e.target.value})}/>
                <TimeInput time={time} handleTimeChange={e => this.setState({time: e.target.value})}/>
                <MessageInput message={message} handleMessageChange={e => this.setState({message: e.target.value})}/>
                <SubmitButton handleClick={this.handleSubmit}/>
            </form>
        )
    }
}

export default ReminderForm;
