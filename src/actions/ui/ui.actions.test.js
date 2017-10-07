import test from 'ava';

import {
    TOGGLE_NAV,
    toggleNav,
    TOGGLE_ADD_NEW_PURCHASE_DIALOG,
    toggleAddNewPurchaseDialog
} from './ui.actions';

test('should create an action to toggle the nav', t => {
    t.deepEqual(toggleNav(), { type: TOGGLE_NAV })
});

test('should create an action to toggle the new purchase dialog', t => {
    t.deepEqual(toggleAddNewPurchaseDialog(), { type: TOGGLE_ADD_NEW_PURCHASE_DIALOG });
});
