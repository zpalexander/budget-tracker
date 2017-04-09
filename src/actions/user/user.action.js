export const SET_DAILY_BUDGET = 'SET_DAILY_BUDGET';
export const setDailyBudget = value => ({
    type: SET_DAILY_BUDGET,
    value
});

export const updateProfile = values => {
    console.log('values: ', values);
    fetch('https://google.com')
        .then(console.log);
};
