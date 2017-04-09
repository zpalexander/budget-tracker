import { SET_DAILY_BUDGET } from '../actions/user';

const initialState = {
  name: 'Zach',
  dailyBudget: 300,
};

export default function user(state = initialState, action) {
  switch (action.type) {
    case SET_DAILY_BUDGET:
        return {
            ...state,
            dailyBudget: action.value,
        };
    default:
      return state;
  }
};
