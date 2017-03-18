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
    rightIconButton={ <IconButton><Delete color={ red500 } /></IconButton> }
  />
);

const PurchaseList = props => {
  const { purchases } = props;
  return (
    <List>
      { purchases.map(buildTableRow) }
    </List>
  );
}

PurchaseList.defaultProps = {
  purchases: [],
};

PurchaseList.propTypes = {
  purchases: PropTypes.array,
};

export default PurchaseList;
