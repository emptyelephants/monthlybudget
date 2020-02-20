import React from 'react';
import { useMonthHook } from './hooks/useMonthHook';
import { CalendarDays } from './CalendarDays';
import { MONTH_NAMES as monthNames } from '../Constants';

import './CalendarContainer.css';


export const CalendarContainerHooks = () => {
  // const [totalBudget, setTotalBudget] = useState(0);
  const [displayMonth, setDisplayMonth] = useMonthHook(new Date());

  // const [firstSunday, setFirstSunday] = useState();

  // setFirstSunday();
  return (

    <>
      <h1>
        { monthNames[displayMonth.getMonth()] }
      </h1>
      <div className="calendar-controller">
        <button
          type="button"
          onClick={() => setDisplayMonth(-1)}
        >
          Previous Month
        </button>
        <button
          type="button"
          onClick={() => setDisplayMonth(1)}
        >
          Next Month
        </button>
      </div>
      <div className="calendar-container">
        {/* <CalendarDays
          firstSunday={firstSunday}
          currentMonth={displayMonth}
          // budgetEntries={fakeBudgetCall}
        /> */}
      </div>
    </>
  );
};
