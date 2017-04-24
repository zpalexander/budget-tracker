import React from 'react';
import PropTypes from 'prop-types';
import { List } from 'material-ui/List';
import Card from 'material-ui/Card';
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

  if (!purchases.length) {
    return null;
  }

  return (
    <Card>
      <List>
        { purchasesWithDelete.map(buildPurchase) }
      </List>
    </Card>
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
