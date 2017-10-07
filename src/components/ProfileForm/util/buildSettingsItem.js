import React from 'react';
import { Field } from 'redux-form'
import { TextField } from 'redux-form-material-ui';

export default function buildSettingsItem(settingsItem, index) {
    return (
        <div key={ index }>
            <Field
                component={ TextField }
                name={ settingsItem.name }
                floatingLabelText={ settingsItem.placeholder }
                defaultValue={ settingsItem.value || 0 }
            />
        </div>
    );
}
