import React from 'react';
import PropTypes from 'prop-types';
import RaisedButton from 'material-ui/RaisedButton';
import SettingsSection from '../../models/SettingsSection';
import buildSettingsSection from './util/buildSettingsSection';
import './ProfileForm.css';

const ProfileForm = props => {
  const { budgetCategories, handleSubmit } = props;

  const settingSections = budgetCategories.map((category) => {
    const { title, iconName, fields } = category;
    return SettingsSection(title, iconName, fields);
  });

  return (
    <form onSubmit={ handleSubmit } className="profile-form-wrapper">
      <div className="form-content">
        { settingSections.map(buildSettingsSection) }
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
  budgetCategories: PropTypes.array.isRequired,
  handleSubmit: PropTypes.func.isRequired,
};

export default ProfileForm;
