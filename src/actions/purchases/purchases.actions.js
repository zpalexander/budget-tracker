import { round } from 'lodash';

export const SET_PURCHASES = 'SET_PURCHASES';
export const setPurchases = (purchases) => ({
    type: SET_PURCHASES,
    purchases,
});

export const GET_PURCHASES = 'GET_PURCHASES';
export const getPurchases = () => {
    return (dispatch) => {
        fetch('/api/purchases')
            .then(response => response.json())
            .then(purchases => dispatch(setPurchases(purchases)));
    }
};

export const SAVE_NEW_PURCHASE = 'SAVE_NEW_PURCHASE';
export const saveNewPurchase = (name, amount) => ({
  type: SAVE_NEW_PURCHASE,
  name,
  amount: round(amount, 2),
});

export const CREATE_NEW_PURCHASE = 'CREATE_NEW_PURCHASE';
export const createNewPurchase = () => ({ type: CREATE_NEW_PURCHASE });

export const DELETE_PURCHASE = 'DELETE_PURCHASE';
export const deletePurchase = id => ({
    type: DELETE_PURCHASE,
    id,
});
