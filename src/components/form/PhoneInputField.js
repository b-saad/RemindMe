import React, { Component } from 'react';
import PhoneInput from 'react-phone-input-2'
import 'react-phone-input-2/lib/high-res.css'

class PhoneInputField extends Component {
    constructor () {
        super();
        this.state = {
            phone: ''
        };
    }

    render() {
        return (
            <div className={this.constructor.name}>
                <p className='fieldLabel'>Phone Number: </p>
                <PhoneInput
                    className='PhoneInput'
                    country={'us'}
                    enableAreaCodes={false}
                    value={this.state.phone}
                    onChange={phone => this.setState({ phone })}
                />
            </div>
        )
    }
}

export default PhoneInputField;
