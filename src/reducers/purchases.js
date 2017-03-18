const initialState = [
    {
        name: 'Groceries',
        amount: 20.25,
    },
    {
        name: 'Beer',
        amount: 10.25,
    },
    {
        name: 'Lyft ride',
        amount: 9.19,
    },
    {
        name: 'Dinner with friends',
        amount: 25.17,
    },
];

export default function user(state = initialState, action) {
  switch (action.type) {
    default:
      return state;
  }
};
