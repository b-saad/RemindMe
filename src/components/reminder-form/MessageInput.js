import React, { Component } from 'react';

class MessageInput extends Component {
    constructor (props) {
        super(props);
        this.state = {
            characterCount: this.props.charLimit
        };
        this.handleMessageChange = this.handleMessageChange.bind(this);
    }

    handleMessageChange(e) {
        this.setState({
            characterCount: this.props.charLimit - e.target.value.length
        });
        this.props.handleMessageChange(e);
    }

    render() {
        const { message, error, errorMessage } = this.props;
        return (
            <div className={this.constructor.name }>
                <p className='fieldLabel'>Enter your reminder below</p>
                <p className='characterCount'>{`(${this.state.characterCount})`}</p>
                <textarea className={error ? 'inputError' : ''} value={message} onChange={this.handleMessageChange}>
                </textarea>
                <p className='errorLabel' hidden={!error}>{errorMessage}</p>
            </div>
        )
    }
}

export default MessageInput;
