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

it('sets the list of purchases', () => {
    const mockPurchases = [0, 1, 2];
    expect(setPurchases(mockPurchases)).toEqual({
        type: SET_PURCHASES,
        purchases: mockPurchases,
    });
});

it('saves a new purchase', () => {
    const mockName = 'name';
    const mockAmount = 100;
    expect(saveNewPurchase(mockName, mockAmount)).toEqual({
        type: SAVE_NEW_PURCHASE,
        name: mockName,
        amount: mockAmount,
    });
});

it('rounds a new purchase amount to two decimal places', () => {
    const mockName = 'name';
    const mockAmount = 100.987;
    expect(saveNewPurchase(mockName, mockAmount)).toEqual({
        type: SAVE_NEW_PURCHASE,
        name: mockName,
        amount: 100.99,
    });
});

it('deletes a purchase with a specified id', () => {
    const mockId = 1;
    expect(deletePurchase(mockId)).toEqual({
        type: DELETE_PURCHASE,
        id: mockId,
    })
});
