/*
  for example lets say that we are already logged in
  the fetch grabbed all budget items where it matched the user name, in the order of date time.
  the API returned us an array of budjet objects
*/

export const fakeBudgetCall = [
  {
    entryTitle: 'Very Good Building LLC Payroll',
    cost: 1000,
    doesReoccur: false,
    budgetDate: 1578384000000,
  },
  {
    entryTitle: 'Burger',
    cost: -10,
    doesReoccur: false,
    budgetDate: 1578988800000,
  },
  {
    entryTitle: 'Gas',
    cost: -20,
    doesReoccur: false,
    budgetDate: 1579852800000,
  },
  {
    entryTitle: 'Feb Burger',
    cost: -20,
    doesReoccur: false,
    budgetDate: 1580889600000,
  },
];
