import React from 'react';
import PropTypes from 'prop-types';
import './SettingsSection.css';

const SettingsSection = props => {
    const { avatar, children, title } = props;

    return (
        <div
            className="settings-section"
            id={ title }
        >
            <div className="settings-section-header">
                <div className="avatar-wrapper">{ avatar }</div>
                <div className="field-title">{ title }</div>
            </div>
            <div className="field-wrapper">{ children }</div>
        </div>
    );
};

SettingsSection.propTypes = {
    avatar: PropTypes.element,
    title: PropTypes.string,
};

export default SettingsSection;
