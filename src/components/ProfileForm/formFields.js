import React from 'react';
import {
  ActionCreditCard,
  ActionHome,
  ActionLockOutline,
  ActionPowerSettingsNew,
  ActionShoppingCart,
  ActionOpacity,
  CommunicationPhone,
  EditorAttachMoney,
  MapsLocalGasStation,
  NotificationWifi,
  PlacesFitnessCenter,
  SocialSchool,
  SocialWhatshot,
} from 'material-ui/svg-icons'
import SettingsItem from '../../models/SettingsItem';

export const incomeSection = [
    SettingsItem(
        'salary',
        'Salary',
        (<EditorAttachMoney />)
    ),
    SettingsItem(
        'additionalIncome',
        'Additional Income',
        (<EditorAttachMoney />)
    ),
];

export const homeSection = [
    SettingsItem(
        'rent',
        'Rent / Mortgage',
        (<ActionHome />)
    ),
    SettingsItem(
        'homeInsurance',
        'Insurance',
        (<ActionLockOutline />)
    )
];

export const utilitiesSection = [
     SettingsItem(
        'electricity',
        'Electricity',
        (<ActionPowerSettingsNew />)
    ),
    SettingsItem(
        'water',
        'Water',
        (<ActionOpacity />)
    ),
    SettingsItem(
        'gas',
        'Gas',
        (<SocialWhatshot />)
    ),
    SettingsItem(
        'phone',
        'Phone',
        (<CommunicationPhone />)
    ),
    SettingsItem(
        'internet',
        'Internet',
        (<NotificationWifi />)
    )
];

export const subscriptionSection = [
    SettingsItem(
        'gym',
        'Gym Membership',
        (<PlacesFitnessCenter />)
    ),
    SettingsItem(
        'netflix',
        'Netflix',
        (<ActionShoppingCart />)
    ),
    SettingsItem(
        'amazonPrime',
        'Amazon Prime',
        (<ActionShoppingCart />)
    ),
];

export const autoSection = [
    SettingsItem(
        'carInsurance',
        'Insurance',
        (<ActionLockOutline />)
    ),
    SettingsItem(
        'gasoline',
        'Gas',
        (<MapsLocalGasStation />)
    ),
];

export const debtSection = [
    SettingsItem(
        'ccInterest',
        'Credit Card Interest',
        (<ActionCreditCard / >)
    ),
    SettingsItem(
        'tuition',
        'Tuition',
        (<SocialSchool />)
    ),
];
