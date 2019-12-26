import React, { Component } from 'react';

const CHARACTER_LIMIT = 140;
const NO_MESSAGE_ERROR = 'Please enter a message to be sent';
const EXCEED_CHARACTER_LIMIT = `Your message must be under ${CHARACTER_LIMIT} characters`
class MessageInput extends Component {
    constructor () {
        super();
        this.state = {
            characterCount: CHARACTER_LIMIT,
            errorMessage: NO_MESSAGE_ERROR
        }
    }
    render() {
        return (
            <div className={this.constructor.name}>
                <p className='fieldLabel'>Enter your reminder below</p>
                <p className='characterCount'>{this.state.characterCount}</p>
                <textarea>
                </textarea>
                <p className='errorLabel'>{this.state.errorMessage}</p>
            </div>
        )
    }
}

export default MessageInput;
