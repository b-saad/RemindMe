import React, { Component } from 'react';
import '../../css/SubmitButton.css';

class SubmitButton extends Component {
    render() {
        const { handleClick, loading } = this.props; 
        return (
            <button className='SubmitButton' type='button' onClick={handleClick}>
                <div className="loader" hidden={!loading}></div> 
                <div className="buttonText" hidden={loading}>Remind Me</div>
            </button>
        )
    }
}

export default SubmitButton;
