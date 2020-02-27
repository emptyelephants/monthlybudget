import React, { useEffect, useState } from 'react';
import axios from 'axios';

import { useMonthHook } from './hooks/useMonthHook';
import { CalendarDaysHooks } from './CalendarDaysHooks';

import { MONTH_NAMES as monthNames, DAY_NAMES as dayNames } from '../Constants';

import './CalendarContainer.css';

export const CalendarContainerHooks = () => {
  const [displayMonth, setDisplayMonth] = useMonthHook(new Date());
  const [currentCalendarBlocks, setCurrentCalndarBlocks] = useState([]);
  const [userBudgetEntries, setUserBudgetEntries] = useState({
    wasFetched: false,
    budgetEntries: [],
  });

  // temporary, need to refactor the mirage backend to split up users and budget entries
  useEffect(() => {
    const fetchData = async () => {
      const result = await axios('/api/users');
      console.log(result.data.users[0]);
    };
    fetchData();
  }, []);

  useEffect(() => {
    const tempCalendarBlocks = [];
    const tempDay = new Date(displayMonth.firstSunday);
    for (let i = 0; i < 35; i += 1) {
      tempCalendarBlocks.push({
        calendarDay: new Date(tempDay),
        // expenses: [userBudgetEntries.filter((entry) => entry.budgetDate === tempDay.getTime())],
      });
      tempDay.setDate(tempDay.getDate() + 1);
    }
    setCurrentCalndarBlocks(tempCalendarBlocks);
  }, [displayMonth, userBudgetEntries]);

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
      {/* <CalendarDaysHooks
        dayNames={dayNames}
        currentMonth={displayMonth.currentMonth}
        calendarBlocks={currentCalendarBlocks}
      /> */}
    </>
  );
};
