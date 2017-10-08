import React from 'react';
import TextField from 'material-ui/TextField';

export default function buildSettingsItem(settingsItem, index) {
    return (
        <div key={ index }>
            <TextField
                name={ settingsItem.name }
                floatingLabelText={ settingsItem.placeholder }
                defaultValue={ settingsItem.value }
                style={{ width: '100%' }}
                type="number"
            />
        </div>
    );
}
