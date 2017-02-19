import {USER_SELECTED} from './types';

export function selectUser(user) {
    return {
        type: USER_SELECTED,
        payload: user
    }
};
