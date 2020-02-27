import React from 'react';
import './CalendarDays.css';

export const CalendarDaysHooks = (props) => {
  const {
    calendarBlocks,
    dayNames,
    currentMonth,
  } = props;

  return (
    <div className="calendar-grid">
      {dayNames.map((dayName) => (
        <div key={dayName}>
          {dayName}
        </div>
      ))}
      {calendarBlocks.length && calendarBlocks.map((block) => (
        <div
          className={
            `day${
              currentMonth.getMonth() === block.calendarDay.getMonth() ? '-current-month' : ''
            }`
          }
          id={block.calendarDay.getTime()}
          key={block.calendarDay.getTime()}
        >
          <p>
            {block.calendarDay.getDate()}
          </p>
          <ul>
            {block.budgetEntries.expenses && block.budgetEntries.expenses.map((entry) => (
              <li>{entry}</li>
            ))}
          </ul>
        </div>
      ))}
    </div>
  );
};
