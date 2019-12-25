import React, { Component } from 'react';

class MessageInput extends Component {
    render() {
        return (
            <div className={this.constructor.name}>
                Enter your reminder below (140 characters limit)
                <textarea>
                </textarea>
            </div>
        )
    }
}

export default MessageInput;
