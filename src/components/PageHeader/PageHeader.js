import React, { PropTypes } from 'react';
// import logo from './logo.svg';
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
