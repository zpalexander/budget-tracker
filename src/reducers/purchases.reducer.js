import {
    DELETE_PURCHASE,
    SAVE_NEW_PURCHASE,
    SET_PURCHASES,
} from '../actions/purchases';

import Purchase from '../models/Purchase';

let id = 4;

export default function purchases(state = [], action) {
  switch (action.type) {
    case SET_PURCHASES:
        return action.purchases;
    case DELETE_PURCHASE:
        return state.filter(purchase => purchase.id !== action.id);
    case SAVE_NEW_PURCHASE:
        return [...state, Purchase(id++, action.name, action.amount)];
    default:
      return state;
  }
};
