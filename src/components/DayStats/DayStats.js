import React, { PropTypes } from 'react';
import Card from 'material-ui/Card';
import calculateAmountSpent from './calculateAmountSpent';
import './DayStats.css';

const DayStats = (props) => {
  const { dailyBudget, purchases } = props;
  const amountSpent = calculateAmountSpent(purchases);

  return (
    <Card className="day-stats">
      <div>
        <span className="label">Daily Budget:</span>
        <span className="value">{ `$${dailyBudget}`}</span>
      </div>
      <div>
        <span className="label">Amount Spent:</span>
        <span className="value">{ `$${amountSpent}` }</span>
      </div>
      <div>
        <span className="label">Amount Left:</span>
        <span className="value">{ `$${(dailyBudget - amountSpent)}` }</span>
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
