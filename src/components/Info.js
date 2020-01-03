import React, { Component } from 'react';
import '../css/Info.css';

import LargeTitle from './LargeTitle';
import DescriptionBox from './DescriptionBox';

class Info extends Component {
    render() {
        return (
            <div className='Info'>
                <LargeTitle />
                <br></br>
                <DescriptionBox />
            </div>
        )
    }
}

export default Info;
