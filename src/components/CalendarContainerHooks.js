import React, { useEffect } from 'react';
import { useMonthHook } from './hooks/useMonthHook';
import { CalendarDays } from './CalendarDays';

import { MONTH_NAMES as monthNames } from '../Constants';
import { DAY_NAMES as dayNames } from '../Constants';

import './CalendarContainer.css';
import './CalendarDays.css';

export const CalendarContainerHooks = () => {
  const [displayMonth, setDisplayMonth] = useMonthHook(new Date());
  const [calendarDays, setCalendarDays] = React.useState([]);

  useEffect(() => {
    fetch('/api/users')
      .then((res) => res.json())
      .then((json) => console.log(json))
      .catch((error) => {
        throw (error);
      });
  }, []);

  useEffect(() => {
    const currentCalendar = [];
    const tempDay = new Date(displayMonth.firstSunday);
    for (let i = 0; i < 35; i += 1) {
      currentCalendar.push({
        calendarDay: new Date(tempDay),
        items: [],
      });
      tempDay.setDate(tempDay.getDate() + 1);
    }
    setCalendarDays(currentCalendar);
  }, [displayMonth]);

  return (
    <>
      <h1>
        { monthNames[displayMonth.currentMonth.getMonth()] }
      </h1>
      <div className="calendar-controller">
        <button
          type="button"
          onClick={() => setTimeout(() => setDisplayMonth(-1), 100)}
        >
          {'<'}
        </button>
        <button
          type="button"
          onClick={() => setTimeout(() => setDisplayMonth(1), 100)}
        >
          {'>'}
        </button>
      </div>
      <div className="calendar-grid">
        {dayNames.map((dayName) => (
          <div key={dayName}>
            {dayName}
          </div>
        ))}
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
