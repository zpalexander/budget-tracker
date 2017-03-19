import React, { PropTypes } from 'react';
import './SettingsItem.css';

const SettingsItem = props => {
    const { avatar, children } = props;

    return (
        <div className="settings-item">
            <div className="avatar-wrapper">{ avatar }</div>
            <div className="field-wrapper">{ children }</div>
        </div>
    );
};

SettingsItem.propTypes = {
    avatar: PropTypes.element,
};

export default SettingsItem;
