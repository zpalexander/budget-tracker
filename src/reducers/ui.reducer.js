import {
  TOGGLE_ADD_NEW_PURCHASE_DIALOG,
  TOGGLE_NAV,
  TOGGLE_IS_LOADING
} from '../actions/ui';

const initialState = {
  navOpen: false,
  newPurchaseDialogOpen: false,
  isLoading: false,
};

export default function user(state = initialState, action) {
  switch (action.type) {
    case TOGGLE_ADD_NEW_PURCHASE_DIALOG:
      return {
        ...state,
        newPurchaseDialogOpen: !state.newPurchaseDialogOpen,
      };
    case TOGGLE_IS_LOADING:
      return {
        ...state,
        isLoading: !state.isLoading,
      }
    case TOGGLE_NAV:
      return {
        ...state,
        navOpen: !state.navOpen,
      };
    default:
      return state;
  }
};
