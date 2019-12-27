import React, { Component } from 'react';

class DescriptionBox extends Component {
    render() {
        return (
            <p className={this.constructor.name}>
                Never miss another reminder - send yourself a text reminder
                <br></br>
                <br></br>
                How to use:<br></br>
                - Enter your phone number <br></br>
                - Set the date and time  <br></br>
                - Enter the message for your reminder and click remind <br></br>
            </p>
        )
    }
}

export default DescriptionBox;
