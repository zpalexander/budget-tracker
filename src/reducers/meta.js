import {SITE_TITLE} from '../constants/strings';

const initialState = {
    siteTitle: SITE_TITLE
};

export default function meta(state = initialState, action) {
    switch (action.type) {
        default:
            return state;
    }
};
