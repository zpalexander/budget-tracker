import {SITE_TITLE} from '../constants/strings';

const initialState = {
    siteTitle: SITE_TITLE,
    dailyBudget: 300,
};

export default function meta(state = initialState, action) {
  switch (action.type) {
    default:
      return state;
  }
};
