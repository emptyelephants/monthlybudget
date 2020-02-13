import React from 'react';
import { CalendarDays } from './CalendarDays';
import { MONTH_NAMES as monthNames } from '../Constants';
import { fakeBudgetCall } from '../FakeData';

import './CalendarContainer.css';

export class CalendarContainer extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      today: new Date(),
      displayMonth: {
        currentMonth: new Date(),
        firstDay: undefined,
        lastDay: undefined,
      },
      totalBudget: 0,
    };
  }

  componentDidMount() {
    this.setFirstLastDay();
  }

  setFirstLastDay() {
    this.setState((prevState) => ({
      ...prevState,
      displayMonth: {
        ...prevState.displayMonth,
        firstDay: new Date(
          prevState.displayMonth.currentMonth.getFullYear(),
          prevState.displayMonth.currentMonth.getMonth(),
          1,
        ),
        lastDay: new Date(
          prevState.displayMonth.currentMonth.getFullYear(),
          prevState.displayMonth.currentMonth.getMonth() + 1,
          0,
        ),
      },
    }));
  }

  navigateMonth(num) {
    this.setState((prevState) => ({
      ...prevState,
      displayMonth: {
        currentMonth: new Date(
          prevState.displayMonth.currentMonth.getFullYear(),
          prevState.displayMonth.currentMonth.getMonth() + num,
          1,
        ),
      },
    }));
    this.setFirstLastDay();
  }
  /*
    Fetch and clean that data
  */

  render() {
    const { displayMonth } = this.state;
    return (
      <>
        <h1>
          { monthNames[displayMonth.currentMonth.getMonth()] }
        </h1>
        <div className="calendar-controller">
          <button
            type="button"
            onClick={() => this.navigateMonth(-1)}
          >
            Previous Month
          </button>
          <button
            type="button"
            onClick={() => this.navigateMonth(1)}
          >
            Next Month
          </button>
        </div>
        <div className="calendar-container">
          <CalendarDays
            firstDay={displayMonth.firstDay}
            currentMonth={displayMonth.currentMonth}
            budgetEntries={fakeBudgetCall}
          />
        </div>
      </>
    );
  }
}
