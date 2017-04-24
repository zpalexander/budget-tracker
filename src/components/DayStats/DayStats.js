import React from 'react';
import PropTypes from 'prop-types';
import Card from 'material-ui/Card';
import calculateAmountSpent from './calculateAmountSpent';
import './DayStats.css';

const DayStats = (props) => {
  const { dailyBudget, purchases } = props;
  const amountSpent = calculateAmountSpent(purchases);
  const amountLeft = dailyBudget - amountSpent;
  const amountLeftClass = (amountLeft > 0) ? 'positive' : 'negative';

  return (
    <Card className="day-stats">
      <div>
        <span className="label">Daily Budget:</span>
        <span className="value">{ `$${dailyBudget.toFixed(2)}`}</span>
      </div>
      <div>
        <span className="label">Amount Spent:</span>
        <span className="value">{ `$${amountSpent.toFixed(2)}` }</span>
      </div>
      <div>
        <span className="label">Amount Left:</span>
        <span className={['value', amountLeftClass].join(' ')}>{ `$${amountLeft.toFixed(2)}` }</span>
      </div>
    </Card>
  );
};

DayStats.defaultProps = {
  purchases: [],
};

DayStats.propTypes = {
  dailyBudget: PropTypes.number.isRequired,
  purchases: PropTypes.array,
};

export default DayStats;
