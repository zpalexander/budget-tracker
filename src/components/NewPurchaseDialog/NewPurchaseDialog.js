import React, { PropTypes } from 'react';
import Dialog from 'material-ui/Dialog';
import FlatButton from 'material-ui/FlatButton';
import RaisedButton from 'material-ui/RaisedButton';

const NewPurchaseDialog = props => {
  const { saveNewPurchase, open, toggleVisibility } = props;

  const actions = [
    <FlatButton
      label="Cancel"
      primary
      onTouchTap={ toggleVisibility }
    />,
    <RaisedButton
      label="Create"
      primary
      onTouchTap={ saveNewPurchase }
    />,
  ];

  return (
    <Dialog
      actions={ actions }
      open={ open }
    >
      The form will go here
    </Dialog>
  );
};

NewPurchaseDialog.defaultProps = {
  open: false,
};

NewPurchaseDialog.propTypes = {
  saveNewPurchase: PropTypes.func,
  open: PropTypes.bool,
  toggleVisibility: PropTypes.func,
};

export default NewPurchaseDialog;
