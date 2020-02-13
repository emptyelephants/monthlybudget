import React from 'react';
import { DAY_NAMES as dayNames } from '../Constants';

import './CalendarDays.css';

export const CalendarDays = (props) => {
  const { firstDay, currentMonth } = props;
  const allDays = [];
  let firstSundayFirstWeek;

  if (firstDay) {
    firstSundayFirstWeek = new Date(
      firstDay.getFullYear(),
      firstDay.getMonth(),
      firstDay.getDate() - firstDay.getDay(),
    );
    for (let i = 0; i < 35; i += 1) {
      allDays.push({
        calendarDay: new Date(firstSundayFirstWeek),
        items: [],
      });
      firstSundayFirstWeek.setDate(firstSundayFirstWeek.getDate() + 1);
    }
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
