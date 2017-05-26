import React from 'react';
import PropTypes from 'prop-types';
import { reduxForm } from 'redux-form'
import RaisedButton from 'material-ui/RaisedButton';
// import validate from './validate';
import buildSettingsSection from './util/buildSettingsSection';
import formSections from './formSections';
import './ProfileForm.css';

const ProfileForm = props => {
  const { handleSubmit } = props;

  return (
    <form onSubmit={ handleSubmit } className="profile-form-wrapper">
      <div className="form-content">
        { formSections.map(buildSettingsSection) }
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
