import React, { PropTypes } from 'react';
import { Field, reduxForm } from 'redux-form'
import RaisedButton from 'material-ui/RaisedButton';
import { TextField } from 'redux-form-material-ui';
import validate from './validate';
import './NewPurchaseForm.css';

const NewPurchaseForm = props => {
  const { handleSubmit, toggleVisibility } = props;

  return (
    <form onSubmit={ handleSubmit }>
      <div>
        <Field
          name="name"
          component={ TextField }
          placeholder="Name"
        />
        <Field
          name="amount"
          component={ TextField }
          placeholder="Amount"
          type="number"
        />
      </div>
      <div className="button-group">
        <RaisedButton
          label="Cancel"
          secondary
          onTouchTap={ toggleVisibility }
        />
        <span className="spacer" />
        <RaisedButton
          label="Create"
          type="submit"
          primary
        />
      </div>
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
