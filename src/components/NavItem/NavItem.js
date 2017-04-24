import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router';
import MenuItem from 'material-ui/MenuItem';
import './NavItem.css';

const NavItem = (props) => {
  const { path, icon, text } = props;

  return (
    <Link to={ path }>
      <MenuItem
        leftIcon={ icon }
        primaryText={ text }
      />
    </Link>
  );
};

NavItem.propTypes = {
  icon: PropTypes.element,
  path: PropTypes.string,
  text: PropTypes.string,
};

export default NavItem;
