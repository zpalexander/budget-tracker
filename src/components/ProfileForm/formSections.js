import SettingsSection from '../../models/SettingsSection';
import {
    income,
    home,
    utilities,
    subscriptions,
    auto,
    debt
} from './formFields';
import buildSettingsItem from './util/buildSettingsItem';

export const incomeSection = SettingsSection(
    'Income',
    'money',
    income.map(buildSettingsItem)
);

export const homeSection = SettingsSection(
    'Home',
    'home',
    home.map(buildSettingsItem)
);

export const utilitiesSection = SettingsSection(
    'Utilities',
    'electricity',
    utilities.map(buildSettingsItem)
);

export const subscriptionsSection = SettingsSection(
    'Subscriptions',
    '',//'shoppingcart',
    subscriptions.map(buildSettingsItem)
);

export const autoSection = SettingsSection(
    'Auto',
    'gas',
    auto.map(buildSettingsItem)
);

export const debtSection = SettingsSection(
    'Debt',
    'creditcard',
    debt.map(buildSettingsItem)
);

export default [
   incomeSection,
   homeSection,
   utilitiesSection,
   subscriptionsSection,
   autoSection,
   debtSection
];
