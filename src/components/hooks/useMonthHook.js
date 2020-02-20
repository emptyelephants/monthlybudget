import { useState } from 'react';

// used to display current month and navigate months
export const useMonthHook = (initialValue) => {
  const [displayMonth, setDisplayMonth] = useState(initialValue);
  return [
    displayMonth,
    (num) => {
      setDisplayMonth(new Date(displayMonth.getFullYear(), displayMonth.getMonth() + num, 1));
    },
  ];
};
