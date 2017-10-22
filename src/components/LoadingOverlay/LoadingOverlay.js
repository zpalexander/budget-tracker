import React from 'react';
import PropTypes from 'prop-types';
import CircularProgress from 'material-ui/CircularProgress';
import './LoadingOverlay.css';

const LoadingOverlay = ({ show }) => {
  if (!show) return null;

  return (
    <section className="container">
      <CircularProgress
        size={ 100 }
        thickness={ 5 }
      />
    </section>
  );
};

LoadingOverlay.defaultProps = {
  show: false,
};

LoadingOverlay.propTypes = {
  show: PropTypes.bool,
};

export default LoadingOverlay;
