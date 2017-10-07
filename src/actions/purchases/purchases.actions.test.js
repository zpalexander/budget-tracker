import test from 'ava';

import {
    SET_PURCHASES,
    setPurchases,
    GET_PURCHASES,
    getPurchases,
    SAVE_NEW_PURCHASE,
    saveNewPurchase,
    DELETE_PURCHASE,
    deletePurchase
} from './purchases.actions.js';

test('sets the list of purchases', t => {
    const mockPurchases = [0, 1, 2];
    t.deepEqual(setPurchases(mockPurchases), {
        type: SET_PURCHASES,
        purchases: mockPurchases,
    });
});

test('saves a new purchase', t => {
    const mockName = 'name';
    const mockAmount = 100;
    t.deepEqual(saveNewPurchase(mockName, mockAmount), {
        type: SAVE_NEW_PURCHASE,
        name: mockName,
        amount: mockAmount,
    });
});

test('rounds a new purchase amount to two decimal places', t => {
    const mockName = 'name';
    const mockAmount = 100.987;
    t.deepEqual(saveNewPurchase(mockName, mockAmount), {
        type: SAVE_NEW_PURCHASE,
        name: mockName,
        amount: 100.99,
    });
});

test('deletes a purchase with a specified id', t => {
    const mockId = 1;
    t.deepEqual(deletePurchase(mockId), {
        type: DELETE_PURCHASE,
        id: mockId,
    });
});


// it('deletes a purchase with a specified id', () => {

// });
