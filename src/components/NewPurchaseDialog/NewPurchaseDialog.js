import React, { PropTypes } from 'react';
import Dialog from 'material-ui/Dialog';
import NewPurchaseForm from './components/NewPurchaseForm';

const NewPurchaseDialog = props => {
  const { saveNewPurchase, isOpen, toggleVisibility } = props;

  const handleSubmit = formValues => {
    const { name, amount } = formValues;
    saveNewPurchase(name, parseFloat(amount));
    toggleVisibility();
  }

  return (
    <Dialog open={ isOpen }>
      <NewPurchaseForm
        onSubmit={ handleSubmit }
        toggleVisibility={ toggleVisibility }
      />
    </Dialog>
  );
};

NewPurchaseDialog.defaultProps = {
  open: false,
};

NewPurchaseDialog.propTypes = {
  saveNewPurchase: PropTypes.func,
  isOpen: PropTypes.bool,
  toggleVisibility: PropTypes.func,
};

export default NewPurchaseDialog;
