import React from 'react';
import test from 'ava';
import { shallow } from 'enzyme';

import SettingsSection from './SettingsSection';

test('should render without throwing', t => {
    t.truthy(shallow(<SettingsSection />));
});
