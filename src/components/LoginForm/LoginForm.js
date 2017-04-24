import React from 'react';
import PropTypes from 'prop-types';
import { Field, reduxForm } from 'redux-form'
import RaisedButton from 'material-ui/RaisedButton';
import { TextField } from 'redux-form-material-ui';
//import validate from './validate';
import './LoginForm.css';

const LoginForm = props => {
  const { handleSubmit } = props;

  return (
    <form onSubmit={ handleSubmit } className="form-wrapper">
      <div className="form-content">
        <div>
          <Field
            name="username"
            component={ TextField }
            placeholder="Email Address"
          />
        </div>
        <div>
          <Field
            name="password"
            component={ TextField }
            placeholder="Password"
            type="password"
          />
        </div>
      </div>
      <div className="button-group">
        <RaisedButton
          type="submit"
          label="Log In"
          primary
        />
      </div>
    </form>
  );
};

LoginForm.propTypes = {
  handleSubmit: PropTypes.func.isRequired,
};

export default reduxForm({
  form: 'login',
  //validate
})(LoginForm);
