import test from 'ava';
import fetchMock from 'fetch-mock';
import configureMockStore from 'redux-mock-store';
import { stub } from 'sinon';
import thunk from 'redux-thunk';
import * as reactRouter from 'react-router';
import { LOGIN, PROFILE } from '../../../constants/routes/api';
import {
    SET_PROFILE,
    setProfile,
    getProfile,
    SET_DAILY_BUDGET,
    setDailyBudget,
    updateProfile,
    loginFail,
    login
} from './user.actions';

/* Mock Values */
const middlewares = [thunk]
const mockStore = configureMockStore(middlewares)

const mockDailyBudget = 100.12;
const mockProfileData = {
    name: 'Joe',
    money: 1122334455.19,
};

/* Test Suite */
test('should create an action to set the user\'s profile info', t => {
    t.deepEqual(setProfile(mockProfileData), {
        type: SET_PROFILE,
        profile: mockProfileData,
    });
});

test('should fetch the user\'s profile from the server and dispatch the set action', t => {
    fetchMock.get(PROFILE, mockProfileData);

    const store = mockStore({ profile: {} })

    return store.dispatch(getProfile()).then(() => {
        t.deepEqual(store.getActions(), [{
            type: SET_PROFILE,
            profile: mockProfileData,
        }]);
        fetchMock.reset();
    });
});

test('should create an action to set the user\'s daily budget', t => {
    t.deepEqual(setDailyBudget(mockDailyBudget), {
        type: SET_DAILY_BUDGET,
        value: mockDailyBudget,
    });
});

// test('should validate the user\'s login with the server and admit valid credentials', t => {
//     const browserHistory = [];

//     const browserHistoryStub = stub(reactRouter, 'browserHistory').returns();

//     fetchMock.post(LOGIN, mockProfileData);

//     const mockUsername = 'test-name';
//     const mockPassword = 'test-pass';

//     const store = mockStore({ profile: [] });
//     return store.dispatch(login(mockUsername, mockPassword)).then(() => {
//         console.log('actions dispatched: ', store.getActions());
//         t.deepEqual(store.getActions(), [{
//         type: SET_PROFILE,
//         profile: mockProfileData,
//     }])});
// });
