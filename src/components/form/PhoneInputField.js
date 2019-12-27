import React, { Component } from 'react';
import PhoneInput from 'react-phone-input-2'
import 'react-phone-input-2/lib/high-res.css'

class PhoneInputField extends Component {
    render() {
        const { phone, handlePhoneChange } = this.props;
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
            </div>
        )
    }
}

export default PhoneInputField;
