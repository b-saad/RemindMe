import React, { Component } from 'react';
import { formatDate, isToday, validDate } from '../../util/DateUtil';
import { getCurrentTime, validFutureTime } from '../../util/TimeUtil';
import { createReminder } from '../../util/ReminderUtil';
import '../../css/ReminderForm.css';

import PhoneInputField from './PhoneInputField';
import DateInput from './DateInput';
import TimeInput from './TimeInput';
import MessageInput from './MessageInput'
import SubmitButton from './SubmitButton'
import StatusBox from './StatusBox';

const CHARACTER_LIMIT = 160;
const NO_MESSAGE_ERROR = 'Please enter a message to be sent';
const EXCEED_CHARACTER_LIMIT = `Your message must be under ${CHARACTER_LIMIT} characters`
const STATUS_BOX_STYLE_SUCCESS = 'status_success';
const STATUS_BOX_STYLE_ERROR = 'status_error';

class ReminderForm extends Component {
    constructor () {
        super();
        this.state = {
            phone: '',
            date: formatDate(new Date()),
            time: getCurrentTime(),
            message: '',
            messageCharLimit: CHARACTER_LIMIT,
            loading: false,
            phoneError: false,
            dateError: false,
            timeError: false,
            messageError: false,
            messageErrorMessage: '',
            statusMessage: '',
            statusStyle: ''
        };
        this.handleSubmit = this.handleSubmit.bind(this);
        this.handlePhoneChange = this.handlePhoneChange.bind(this);
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
        const messageErrorMessage = messageError ? NO_MESSAGE_ERROR : this.state.messageErrorMessage;
        if (phoneError || dateError || timeError || messageError) {
            this.setState({
                phoneError: phoneError,
                dateError: dateError,
                timeError: timeError,
                messageError: messageError,
                messageErrorMessage: messageErrorMessage,
                statusMessage: '',
                statusStyle: ''
            });
            return;
        }
        var date = new Date(`${this.state.date}T${this.state.time}:00`);
        date.setSeconds(date.getSeconds() - 10); // subtract 10 seconds from time to account for delays
        date = Math.floor(date / 1000)   // Convert to unix time stamp
        const phone = this.state.phone.replace(/[()]/g, '').replace(/\s/g, '').replace(/[-]/g, '');
        this.setState({ loading: true });
        createReminder(phone, this.state.message, date, (error) => {
            const status_message_success = `Your reminder will be sent to you on ${this.state.date} at ${this.state.time}`;
            const STATUS_MESSAGE_ERROR = error;
            this.setState({
                phoneError: phoneError,
                dateError: dateError,
                timeError: timeError,
                loading: false,
                messageError: messageError,
                messageErrorMessage: messageErrorMessage,
                statusMessage: error === null ? status_message_success : STATUS_MESSAGE_ERROR,
                statusStyle: error === null ? STATUS_BOX_STYLE_SUCCESS : STATUS_BOX_STYLE_ERROR
            });
        });
    }

    handlePhoneChange(phone) {
        const error = this.state.phone === '';
        this.setState({
            phone: phone,
            phoneError: error
        });
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
        const { phone, phoneError, date, dateError, time, timeError } = this.state;
        const { message, messageCharLimit, messageError, messageErrorMessage, loading } = this.state
        const { statusMessage, statusStyle } = this.state;
        const statusBox = statusMessage !== '' ? <StatusBox text={statusMessage} style={statusStyle}/> : null;
        return (
            <div>
                <form className='ReminderForm'>
                    <PhoneInputField phone={phone} error={phoneError} handlePhoneChange={this.handlePhoneChange}/>
                    <DateInput date={date} error={dateError} handleDateChange={this.handleDateChange} />
                    <TimeInput time={time} error={timeError} handleTimeChange={this.handleTimeChange}/>
                    <MessageInput 
                        message={message} 
                        charLimit={messageCharLimit}
                        error={messageError} 
                        errorMessage={messageErrorMessage} 
                        handleMessageChange={this.handleMessageChange}
                    />
                    <SubmitButton loading={loading} handleClick={this.handleSubmit}/>
                </form>
                {statusBox}
            </div>
        )
    }
}

export default ReminderForm;
