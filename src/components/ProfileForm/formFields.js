import SettingsItem from '../../models/SettingsItem';

export const income = [
    SettingsItem('salary', 'Salary'),
    SettingsItem('additionalIncome', 'Additional Income')
];

export const home = [
    SettingsItem('rent', 'Rent / Mortgage'),
    SettingsItem('homeInsurance', 'Insurance')
];

export const utilities = [
    SettingsItem('electricity', 'Electricity'),
    SettingsItem('water', 'Water'),
    SettingsItem('heat', 'Heat'),
    SettingsItem('phone', 'Phone'),
    SettingsItem('internet', 'Internet')
];

export const subscriptions = [
    SettingsItem('gym', 'Gym'),
    SettingsItem('netflix', 'Netflix'),
    SettingsItem('amazonPrime', 'Amazon Prime')
];

export const auto = [
    SettingsItem('carInsurance', 'Insurance'),
    SettingsItem('gasoline', 'Gas')
];


export const debt = [
    SettingsItem('ccInterest', 'Credit Card Interest'),
    SettingsItem('tuition', 'Tuition')
];
