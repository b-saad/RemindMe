import React, { Component } from 'react';
import '../css/App.css';

import Info from './Info'
import ReminderForm from './form/ReminderForm'

class App extends Component{
  render() {
    return (
      <div className='main-flex-container'>
        <div className='InfoContainer main-flex-item'>
          <Info />
        </div>
        <div className='ReminderFormContainer main-flex-item'>
          <ReminderForm />
        </div>
      </div>
    )
   }
}

export default App;
