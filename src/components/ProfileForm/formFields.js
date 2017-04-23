import SettingsItem from '../../models/SettingsItem';

function buildSettingsItem(item) {
    const { name, placeholder, iconName } = item;
    return SettingsItem(name, placeholder, iconName);
}

const incomeSectionData = [
    {
        name: 'salary',
        placeholder: 'Salary',
        iconName: 'money',
    },
    {
        name: 'additionalIncome',
        placeholder: 'Additional Income',
        iconName: 'money',
    },
];

export const incomeSection = incomeSectionData.map(buildSettingsItem);

const homeSectionData = [
    {
        name: 'rent',
        placeholder: 'Rent / Mortgage',
        iconName: 'home',
    },
    {
        name: 'homeInsurance',
        placeholder: 'Insurance',
        iconName: 'lock',
    },
];
export const homeSection = homeSectionData.map(buildSettingsItem);

const utilitiesSectionData = [
    {
        name: 'electricity',
        placeholder: 'Electricity',
        iconName: 'electricity',
    },
    {
        name: 'water',
        placeholder: 'Water',
        iconName: 'water',
    },
    {
        name: 'heat',
        placeholder: 'Heat',
        iconName: 'heat',
    },
    {
        name: 'phone',
        placeholder: 'Phone',
        iconName: 'phone',
    },
    {
        name: 'internet',
        placeholder: 'Internet',
        iconName: 'internet',
    },
];

export const utilitiesSection = utilitiesSectionData.map(buildSettingsItem);

const subscriptionSectionData = [
    {
        name: 'gym',
        placeholder: 'Gym',
        iconName: 'gym',
    },
    {
        name: 'netflix',
        placeholder: 'Netflix',
        iconName: 'shoppingcart',
    },
    {
        name: 'amazonPrime',
        placeholder: 'Amazon Prime',
        iconName: 'shoppingcart',
    },
];

export const subscriptionSection = subscriptionSectionData.map(buildSettingsItem);

const autoSectionData = [
    {
        name: 'carInsurance',
        placeholder: 'Insurance',
        iconName: 'lock',
    },
    {
        name: 'gasoline',
        placeholder: 'Gas',
        iconName: 'gas',
    },
]

export const autoSection = autoSectionData.map(buildSettingsItem);

const debtSectionData = [
    {
        name: 'ccInterest',
        placeholder: 'Credit Card Interest',
        iconName: 'creditcard',
    },
    {
        name: 'tuition',
        placeholder: 'Tuition',
        iconName: 'school',
    },
];

export const debtSection = debtSectionData.map(buildSettingsItem);
