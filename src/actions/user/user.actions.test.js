import test from 'ava';
import fetchMock from 'fetch-mock';
import configureMockStore from 'redux-mock-store';
import thunk from 'redux-thunk';
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
    });

    fetchMock.reset();
});
