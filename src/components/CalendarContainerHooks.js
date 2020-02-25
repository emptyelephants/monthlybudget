import React, { useEffect } from 'react';
import { useMonthHook } from './hooks/useMonthHook';
import { CalendarDays } from './CalendarDays';

import { MONTH_NAMES as monthNames } from '../Constants';

import './CalendarContainer.css';
import './CalendarDays.css';

export const CalendarContainerHooks = () => {
  const [displayMonth, setDisplayMonth] = useMonthHook(new Date());
  const [calendarDays, setCalendarDays] = React.useState([]);

  useEffect(() => {
    const currentCalendar = [];
    const tempDay = new Date(displayMonth.firstSunday);
    // const test = { test: 1 };
    for (let i = 0; i < 35; i += 1) {
      currentCalendar.push({
        calendarDay: new Date(tempDay),
        items: [],
      });
      tempDay.setDate(tempDay.getDate() + 1);
      // console.log(test);


    }
    console.log(currentCalendar);
    setCalendarDays(currentCalendar);
  }, [displayMonth]);

  return (
    <>
      <h1>
        {/* { monthNames[displayMonth.currentMonth.getMonth()] } */}
      </h1>
      <div className="calendar-controller">
        <button
          type="button"
          onClick={() => setDisplayMonth(-1)}
        >
          {'<'}
        </button>
        <button
          type="button"
          onClick={() => setDisplayMonth(1)}
        >
          {'>'}
        </button>
      </div>
      <div className="calendar-container">
        {calendarDays.length && calendarDays.map((day) => (
          <div
            className={
              `day${
                displayMonth.currentMonth.getMonth() === day.calendarDay.getMonth() ? '-current-month' : ''
              }`
            }
            id={day.calendarDay.getTime()}
            key={day.calendarDay.getTime()}
          >
            <p>
              {day.calendarDay.getDate()}
            </p>
          </div>
        ))}
      </div>
    </>
  );
};
