import { SET_PROFILE, SET_DAILY_BUDGET } from '../actions/user';

const initialState = {
  name: '',
  dailyBudget: 0,
  categories: [],
};

export default function user(state = initialState, action) {
  switch (action.type) {
    case SET_DAILY_BUDGET:
        return { ...state, dailyBudget: action.value };
      case SET_PROFILE:
        const { name, dailyBudget, categories } = action.profile;
        return {
          ...state,
          name,
          dailyBudget,
          categories,
        };
    default:
      return state;
  }
};
