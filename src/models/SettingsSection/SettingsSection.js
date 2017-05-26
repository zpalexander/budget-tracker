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
} from 'material-ui/svg-icons';

const iconNameComponentMap = {
    creditcard:   (<ActionCreditCard />),
    home:         (<ActionHome />),
    lock:         (<ActionLockOutline />),
    electricity:  (<ActionPowerSettingsNew />),
    shoppingcart: (<ActionShoppingCart />),
    water:        (<ActionOpacity />),
    phone:        (<CommunicationPhone />),
    money:        (<EditorAttachMoney />),
    gas:          (<MapsLocalGasStation />),
    internet:     (<NotificationWifi />),
    gym:          (<PlacesFitnessCenter />),
    school:       (<SocialSchool />),
    heat:         (<SocialWhatshot />),
};

function mapIconNameToComponent(name) {
    return iconNameComponentMap[name];
}

function SettingsSection(title, iconName, fields) {
    return {
        icon: mapIconNameToComponent(iconName),
        title,
        fields
    };
}

export default SettingsSection;
