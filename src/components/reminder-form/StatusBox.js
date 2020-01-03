import React, { Component } from 'react';
import '../../css/StatusBox.css';

class StatusBox extends Component {
    render() {
        const { text, style } = this.props;
        return (
            <div className={`StatusBox ${style}`}>{text}</div>
        )
    }
}

export default StatusBox;
