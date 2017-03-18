import React, { PropTypes } from 'react';
import { List } from 'material-ui/List';
import Purchase from './components/Purchase';
import './PurchaseList.css';

const buildPurchase = purchase => (
  <Purchase
    key={ purchase.id }
    amount={ purchase.amount }
    name={ purchase.name }
    deletePurchase={ purchase.delete }
  />
);

const PurchaseList = props => {
  const { deletePurchase , purchases } = props;
  const purchasesWithDelete = purchases.map(purchase => ({
    ...purchase,
    delete: deletePurchase.bind(null, purchase.id),
  }));

  return (
    <List>
      { purchasesWithDelete.map(buildPurchase) }
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
