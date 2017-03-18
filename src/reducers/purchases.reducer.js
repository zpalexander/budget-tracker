import { DELETE_PURCHASE } from '../actions/purchases';

const initialState = [
    {
        id: 0,
        name: 'Groceries',
        amount: 20.25,
    },
    {
        id: 1,
        name: 'Beer',
        amount: 10.25,
    },
    {
        id: 2,
        name: 'Lyft ride',
        amount: 9.19,
    },
    {
        id: 3,
        name: 'Dinner with friends',
        amount: 25.17,
    },
];

export default function purchases(state = initialState, action) {
  switch (action.type) {
    case DELETE_PURCHASE:
        return state.filter(purchase => purchase.id !== action.id);
    default:
      return state;
  }
};
