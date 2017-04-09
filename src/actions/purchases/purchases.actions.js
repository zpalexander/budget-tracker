import { round } from 'lodash';

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
