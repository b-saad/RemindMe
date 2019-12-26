import React, { Component } from 'react';
import '../css/App.css';

import Info from './Info'
import ReminderForm from './form/ReminderForm'

class App extends Component{
  render() {
    return (
      <div>
        <div className='InfoContainer'>
          <Info />
        </div>
        <div className='ReminderFormContainer'>
          <ReminderForm />
        </div>
      </div>
    )
   }
}

export default App;
