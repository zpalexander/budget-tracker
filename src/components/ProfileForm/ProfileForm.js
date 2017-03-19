import React, { PropTypes } from 'react';
import { Field, reduxForm } from 'redux-form'
import RaisedButton from 'material-ui/RaisedButton';
import Avatar from 'material-ui/Avatar';
//import validate from './validate';
import SettingsItem from './components/SettingsItem';
import { TextField } from 'redux-form-material-ui';
import {
  autoSection,
  debtSection,
  incomeSection,
  homeSection,
  utilitiesSection,
  subscriptionSection,
} from './formFields';
import './ProfileForm.css';

const buildSettingsItem = settingsItem => (
  <SettingsItem avatar={ <Avatar icon={ settingsItem.icon } /> }>
    <Field
      component={ TextField }
      name={ settingsItem.name }
      placeholder={ settingsItem.placeholder }
    />
  </SettingsItem>
);

const ProfileForm = props => {
  const { handleSubmit } = props;

  return (
    <form onSubmit={ handleSubmit } className="profile-form-wrapper">
      <div className="form-content">
        <section className="income">
          <h1>Income</h1>
          { incomeSection.map(buildSettingsItem) }
        </section>
        <section>
          <h1>Home</h1>
          { homeSection.map(buildSettingsItem) }
        </section>
        <section>
          <h1>Utilities</h1>
          { utilitiesSection.map(buildSettingsItem) }
        </section>
        <section>
          <h1>Subscriptions</h1>
          { subscriptionSection.map(buildSettingsItem) }
        </section>
        <section>
          <h1>Debt</h1>
          { debtSection.map(buildSettingsItem) }
        </section>
        <section>
          <h1>Auto</h1>
          { autoSection.map(buildSettingsItem) }
        </section>
      </div>
      <div className="button-group">
        <RaisedButton
          label="Save"
          type="submit"
          primary
        />
      </div>
    </form>
  );
};

ProfileForm.propTypes = {
  handleSubmit: PropTypes.func.isRequired,
};

export default reduxForm({
  form: 'profile',
  //validate
})(ProfileForm);
