import { TOGGLE_NAV } from '../actions/ui';

const initialState = { navOpen: false };

export default function user(state = initialState, action) {
  switch (action.type) {
    case TOGGLE_NAV:
      return { ...state, navOpen: !state.navOpen };
    default:
      return state;
  }
};
