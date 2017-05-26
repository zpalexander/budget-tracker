import React from 'react'
import SettingsSection from '../components/SettingsSection';
import buildSettingsItem from './buildSettingsItem';

export default function buildSettingsSection(settingsSection, index) {
    return (
        <SettingsSection
            avatar={ settingsSection.icon }
            key={ index }
            title={ settingsSection.title }
        >
            { settingsSection.fields.map(buildSettingsItem) }
        </SettingsSection>
    );

};
