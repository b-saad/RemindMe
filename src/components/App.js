import React, { Component } from 'react';
import '../css/App.css';

import Info from './Info'
import ReminderForm from './form/ReminderForm'

class App extends Component{
  render() {
    return (
      <div>
        <Info />
        <ReminderForm />
      </div>
    )
   }
}

export default App;
