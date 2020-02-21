import React from 'react';
import { DAY_NAMES as dayNames } from '../Constants';

import './CalendarDays.css';

export const CalendarDays = (props) => {
  const { firstSunday, currentMonth } = props;
  const allDays = [];
  console.log(firstSunday);
  console.log(currentMonth);

  for (let i = 0; i < 35; i += 1) {
    allDays.push({
      calendarDay: new Date(firstSunday),
    });
    firstSunday.setDate(firstSunday.getDate() + 1);
  }

  return (
    <div className="calendar-grid">
      {dayNames.map((dayName) => (
        <div key={dayName}>
          {dayName}
        </div>
      ))}
      {allDays.length && allDays.map((day) => (
        <div
          className={
            `day${
              currentMonth.getMonth() === day.calendarDay.getMonth() ? '-current-month' : ''
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
  );
};

// each tile to be class component ?
// connect to redux before moving forward !
