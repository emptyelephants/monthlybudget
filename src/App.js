import React from 'react';
import { CalendarContainer } from './components/CalendarContainer';

import { CalendarContainerHooks } from './components/CalendarContainerHooks';

const App = () => (
  <div className="App">
    {/* <CalendarContainer /> */}
    <CalendarContainerHooks />
  </div>
);

export default App;


/*
  First Stretch
  get the calendar with day numnbers
  navigate between months
  hook up redux
  add a budget total and display it
  adding expenses
  adding income

  Second Stretch
  Adding Login
  Set and Fetch Totals

*/
