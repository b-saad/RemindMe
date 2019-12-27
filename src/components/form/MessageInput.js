import React, { Component } from 'react';

const CHARACTER_LIMIT = 160;
const NO_MESSAGE_ERROR = 'Please enter a message to be sent';
const EXCEED_CHARACTER_LIMIT = `Your message must be under ${CHARACTER_LIMIT} characters`
class MessageInput extends Component {
    constructor (props) {
        super(props);
        this.state = {
            characterCount: CHARACTER_LIMIT,
            errorMessage: NO_MESSAGE_ERROR,
            error: false
        };
        this.handleMessageChange = this.handleMessageChange.bind(this);
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
            characterCount: CHARACTER_LIMIT - e.target.value.length,
            errorMessage: errorMessage,
            error: error
        });
        this.props.handleMessageChange(e);
    }

    render() {
        return (
            <div className={this.constructor.name }>
                <p className='fieldLabel'>Enter your reminder below</p>
                <p className='characterCount'>{`(${this.state.characterCount})`}</p>
                <textarea className={this.state.error ? 'inputError' : ''} value={this.props.message} onChange={this.handleMessageChange}>
                </textarea>
                <p className='errorLabel' hidden={!this.state.error}>{this.state.errorMessage}</p>
            </div>
        )
    }
}

export default MessageInput;
