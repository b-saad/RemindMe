import React, { Component } from 'react';

class StatusBox extends Component {
    render() {
        const { text, style } = this.props;
        return (
            <div className={`${this.constructor.name} ${style}`}>{text}</div>
        )
    }
}

export default StatusBox;
