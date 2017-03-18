import React, { PropTypes } from 'react';
import { List, ListItem } from 'material-ui/List';
import Delete from 'material-ui/svg-icons/action/delete';
import IconButton from 'material-ui/IconButton';
import { red500 } from 'material-ui/styles/colors';
import './PurchaseList.css';

const buildTableRow = purchase => (
  <ListItem
    primaryText={ purchase.name }
    secondaryText={ `$${purchase.amount}` }
    rightIconButton={ <IconButton onTouchTap={ purchase.delete }><Delete color={ red500 } /></IconButton> }
  />
);

const PurchaseList = props => {
  const { deletePurchase , purchases } = props;
  const purchasesWithDelete = purchases.map(purchase => ({
    ...purchase,
    delete: deletePurchase.bind(null, purchase.id)
  }));

  return (
    <List>
      { purchasesWithDelete.map(buildTableRow) }
    </List>
  );
}

PurchaseList.defaultProps = {
  purchases: [],
};

PurchaseList.propTypes = {
  deletePurchase: PropTypes.func.isRequired,
  purchases: PropTypes.array,
};

export default PurchaseList;
