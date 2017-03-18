import {
  TOGGLE_NAV,
  TOGGLE_ADD_NEW_PURCHASE_DIALOG
} from '../actions/ui';

const initialState = {
  navOpen: false,
  newPurchaseDialogOpen: false,
};

export default function user(state = initialState, action) {
  switch (action.type) {
    case TOGGLE_NAV:
      return { ...state, navOpen: !state.navOpen };
    case TOGGLE_ADD_NEW_PURCHASE_DIALOG:
      return { ...state, newPurchaseDialogOpen: !state.newPurchaseDialogOpen };
    default:
      return state;
  }
};
