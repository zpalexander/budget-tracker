import React from 'react';
import PropTypes from 'prop-types';
import AppBar from 'material-ui/AppBar';
import './PageHeader.css';

const PageHeader = props => {
  const { title, toggleNav } = props;
  return (
    <AppBar
      onLeftIconButtonTouchTap={ toggleNav }
      title={ title }
    />
  );
}

PageHeader.propTypes = {
  title: PropTypes.string.isRequired,
  toggleNav: PropTypes.func.isRequired,
};

export default PageHeader;
