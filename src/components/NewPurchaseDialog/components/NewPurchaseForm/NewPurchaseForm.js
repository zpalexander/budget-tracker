import React, { PropTypes } from 'react';
import { Field, reduxForm } from 'redux-form'
import FlatButton from 'material-ui/FlatButton';
import RaisedButton from 'material-ui/RaisedButton';
import { TextField } from 'redux-form-material-ui';
import validate from './validate';

const NewPurchaseForm = props => {
  const { handleSubmit, toggleVisibility } = props;

  return (
    <form onSubmit={ handleSubmit }>
      <Field
        name="name"
        component={ TextField }
        placeholder="Name"
      />
      <Field
        name="amount"
        component={ TextField }
        placeholder="Amount"
      />
      <FlatButton
        label="Cancel"
        primary
        onTouchTap={ toggleVisibility }
      />
      <RaisedButton
        label="Create"
        type="submit"
        primary
      />
    </form>
  );
};

NewPurchaseForm.propTypes = {
    toggleVisibility: PropTypes.func.isRequired,
};

export default reduxForm({
  form: 'newPurchase',
  validate
})(NewPurchaseForm);
