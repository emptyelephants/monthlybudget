import { useState, useEffect } from 'react';
// TODO: add first day of month logic here, make it listen to display month change

const getFirstDayOfMonth = (date) => new Date(
  date.getFullYear(),
  date.getMonth(),
  1,
);

const getFirstsundayHelper = (day) => {
  const firstDay = getFirstDayOfMonth(day);
  return new Date(
    firstDay.getFullYear(),
    firstDay.getMonth(),
    firstDay.getDate() - firstDay.getDay(),
  );
};

// used to display current month and navigate months
export const useMonthHook = (initialValue) => {
  const [displayMonth, setDisplayMonth] = useState({
    currentMonth: initialValue,
    firstSunday: getFirstsundayHelper(initialValue),
  });

  useEffect(() => {
    displayMonth.firstSunday = getFirstsundayHelper(displayMonth.currentMonth);
  }, [displayMonth]);

  return [
    displayMonth,
    (num) => {
      setDisplayMonth({
        ...displayMonth,
        currentMonth: new Date(
          displayMonth.currentMonth.getFullYear(),
          displayMonth.currentMonth.getMonth() + num, 1,
        ),
      });
    },
  ];
};
