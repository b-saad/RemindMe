import React, { Component } from 'react';
import { formatDate, isToday, validDate } from '../../util/DateUtil';
import { getCurrentTime, validFutureTime } from '../../util/TimeUtil';
import '../../css/ReminderForm.css';

import PhoneInputField from './PhoneInputField';
import DateInput from './DateInput';
import TimeInput from './TimeInput';
import MessageInput from './MessageInput'
import SubmitButton from './SubmitButton'

const CHARACTER_LIMIT = 160;
const NO_MESSAGE_ERROR = 'Please enter a message to be sent';
const EXCEED_CHARACTER_LIMIT = `Your message must be under ${CHARACTER_LIMIT} characters`
class ReminderForm extends Component {
    constructor () {
        super();
        this.state = {
            phone: '',
            date: formatDate(new Date()),
            time: getCurrentTime(),
            message: '',
            messageCharLimit: CHARACTER_LIMIT,
            dateError: false,
            timeError: false,
            messageError: false,
            messageErrorMessage: ''
        };
        this.handleSubmit = this.handleSubmit.bind(this);
        this.handleDateChange = this.handleDateChange.bind(this);
        this.handleTimeChange = this.handleTimeChange.bind(this);
        this.handleMessageChange = this.handleMessageChange.bind(this);
    }

    handleSubmit() {
        // TODO: update phone validation;
        const phoneError = this.state.phone === '';
        const dateError = !validDate(this.state.date);
        const timeError = !dateError && isToday(this.state.date) && !validFutureTime(this.state.time);
        const messageError = this.state.message === '' || this.state.messageError;
        if (phoneError || dateError || timeError || messageError) {
            this.setState({
                dateError: dateError,
                timeError: timeError
            });
            return;
        }
        const date = new Date(`${this.state.date}T${this.state.time}:00`).toISOString();
        const phone = this.state.phone.replace(/[()]/g, '').replace(/\s/g, '').replace(/[-]/g, '');
        const reqBody = {
            "phoneNumber" : phone,
            "message": this.state.message,
            "date": date
        };
        console.log(reqBody);
    }

    handleDateChange(e) {
        const dateError = !validDate(e.target.value);
        const timeError = !dateError && isToday(e.target.value) && !validFutureTime(this.state.time);
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

    handleMessageChange(e) {
        const length = e.target.value.length;
        let errorMessage = '';
        let error = false;
        if (length === 0) {
            errorMessage = NO_MESSAGE_ERROR;
            error = true;
        } else if (length > CHARACTER_LIMIT) {
            errorMessage = EXCEED_CHARACTER_LIMIT;
            error = true;
        }
        this.setState({
            message: e.target.value,
            messageError: error,
            messageErrorMessage: errorMessage
        })
    }

    render() {
        const { phone, date, dateError, time, timeError, message, messageCharLimit, messageError, messageErrorMessage } = this.state;
        return (
            <form className={this.constructor.name}>
                <PhoneInputField phone={phone} handlePhoneChange={phone => this.setState({phone: phone})}/>
                <DateInput date={date} error={dateError} handleDateChange={this.handleDateChange} />
                <TimeInput time={time} error={timeError} handleTimeChange={this.handleTimeChange}/>
                <MessageInput 
                    message={message} 
                    charLimit={messageCharLimit}
                    error={messageError} 
                    errorMessage={messageErrorMessage} 
                    handleMessageChange={this.handleMessageChange}
                />
                <SubmitButton handleClick={this.handleSubmit}/>
            </form>
        )
    }
}

export default ReminderForm;
