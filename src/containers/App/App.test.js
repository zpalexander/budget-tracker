import React from 'react';
import test from 'ava';
import { shallow } from 'enzyme';

import App from './App';

test('should render without throwing', t => {
    t.truthy(shallow(<App />))
});

