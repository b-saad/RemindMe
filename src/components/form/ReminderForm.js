import React, { Component } from 'react';
import '../../css/ReminderForm.css';

import PhoneInputField from './PhoneInputField';
import DateInput from './DateInput';
import TimeInput from './TimeInput';
import MessageInput from './MessageInput'
import SubmitButton from './SubmitButton'

class ReminderForm extends Component {
    render() {
        return (
            <form className={this.constructor.name}>
                <PhoneInputField />
                <DateInput />
                <TimeInput />
                <MessageInput />
                <SubmitButton />
            </form>
        )
    }
}

export default ReminderForm;
