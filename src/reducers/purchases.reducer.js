import {
    DELETE_PURCHASE,
    SAVE_NEW_PURCHASE
} from '../actions/purchases';

import Purchase from '../models/Purchase';

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

let id = 4;

export default function purchases(state = initialState, action) {
  switch (action.type) {
    case DELETE_PURCHASE:
        return state.filter(purchase => purchase.id !== action.id);
    case SAVE_NEW_PURCHASE:
        return [...state, Purchase(id++, action.name, action.amount)];
    default:
      return state;
  }
};
