import React from 'react';
import ReactDOM from 'react-dom';
import './css/index.css';

class Message extends React.Component {
    render() {
        return (
            <div>
                <h1 id='IDlol'>Hello World</h1>
                <p>paragraph tag</p>
            </div>
        )
    }
}

ReactDOM.render (
    <Message />,
    document.getElementById('root')
)
