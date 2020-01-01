import React, { Component } from 'react';
import PhoneInput from 'react-phone-input-2'
import 'react-phone-input-2/lib/high-res.css'

const VALID_PHONE_ERROR = 'Please enter a valid phone number';
class PhoneInputField extends Component {
    render() {
        const { phone, error, handlePhoneChange } = this.props;
        return (
            <div className={this.constructor.name}>
                <p className='fieldLabel'>Phone Number: </p>
                <PhoneInput
                    className='PhoneInput'
                    country={'us'}
                    enableAreaCodes={false}
                    value={phone}
                    onChange={handlePhoneChange}
                />
                <p className='errorLabel' hidden={!error}>{VALID_PHONE_ERROR}</p>
            </div>
        )
    }
}

export default PhoneInputField;
