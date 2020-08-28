import React from 'react';
import logo from './logo.svg';
import './App.css';

import Calendar from './components/Calendar/Calendar'
import RangePickers from './components/Calendar/RangePickers'
import TimePickers from './components/Calendar/TimePickers'




function App() {
  return (
    <div>
      <Calendar/>

      <RangePickers/>
      <TimePickers/>
    </div>
  );
}

export default App;
