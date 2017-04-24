import React from 'react';
import PropTypes from 'prop-types';
import { ListItem } from 'material-ui/List';
import Delete from 'material-ui/svg-icons/action/delete';
import IconButton from 'material-ui/IconButton';
import { red500 } from 'material-ui/styles/colors';

const Purchase = props => {
  const { amount, name, deletePurchase } = props;

  return (
    <ListItem
      primaryText={ name }
      secondaryText={ `$${amount.toFixed(2)}` }
      rightIconButton={ <IconButton onTouchTap={ deletePurchase }>
        <Delete color={ red500 } />
        </IconButton>
      }
    />
  );
}

Purchase.propTypes = {
  amount: PropTypes.number.isRequired,
  name: PropTypes.string.isRequired,
  deletePurchase: PropTypes.func.isRequired,
};

export default Purchase;
