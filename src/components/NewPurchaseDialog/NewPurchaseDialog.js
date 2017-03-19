import React, { PropTypes } from 'react';
import Dialog from 'material-ui/Dialog';
import NewPurchaseForm from './components/NewPurchaseForm';

const customContentStyle = {
  width: '90%',
  textAlign: 'center',
};

const NewPurchaseDialog = props => {
  const { saveNewPurchase, isOpen, toggleVisibility } = props;

  const handleSubmit = formValues => {
    const { name, amount } = formValues;
    saveNewPurchase(name, parseFloat(amount).toFixed(2));
    toggleVisibility();
  }

  return (
    <Dialog
      contentStyle={ customContentStyle }
      modal
      open={ isOpen }
    >
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
