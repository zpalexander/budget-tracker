import { browserHistory } from 'react-router';
import { LOGIN, PROFILE } from '../../../constants/routes/api';

export const SET_PROFILE = 'SET_PROFILE';
export const setProfile = (profile) => ({
    type: SET_PROFILE,
    profile,
});

export const getProfile = () => {
    return (dispatch) => {
        return fetch(PROFILE)
            .then(response => response.json())
            .then(profile => dispatch(setProfile(profile)))
    };
};

export const SET_DAILY_BUDGET = 'SET_DAILY_BUDGET';
export const setDailyBudget = (value) => ({
    type: SET_DAILY_BUDGET,
    value
});

export const updateProfile = (values) => {
    console.log('values: ', values);
    // fetch('https://google.com')
    //     .then(console.log);
};


export const loginFail = () => ({

});

export const login = (username, password) => {
    const options = {
        method: 'POST',
        headers: {
            'Accept': 'application/json',
            'Content-Type': 'application/json',
        },
        body: JSON.stringify({
            username: username,
            password: password,
        })
    };

    return (dispatch) => {
        fetch(LOGIN, options)
            .then(response => response.json())
            .then(data => {
                dispatch(setProfile(data.profile));
                browserHistory.push('/today');
            })
            .catch(dispatch(loginFail));
    };
};
