import React, { useEffect } from 'react';
import { useMonthHook } from './hooks/useMonthHook';
import { CalendarDays } from './CalendarDays';
import { MONTH_NAMES as monthNames } from '../Constants';

import './CalendarContainer.css';

export const CalendarContainerHooks = () => {
  const [displayMonth, setDisplayMonth] = useMonthHook(new Date());

  useEffect(() => {
    console.log('mount');
    console.log(displayMonth.currentMonth);
    console.log(displayMonth.firstSunday);

  }, [displayMonth.currentMonth]);

  return (
    <>
      <h1>
        { monthNames[displayMonth.currentMonth.getMonth()] }
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
        <CalendarDays
          firstSunday={displayMonth.firstSunday}
          currentMonth={displayMonth.currentMonth}
        />
      </div>
    </>
  );
};
