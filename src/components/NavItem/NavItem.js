import React, { PropTypes } from 'react';
import { Link } from 'react-router';
import MenuItem from 'material-ui/MenuItem';
import './NavItem.css';

const NavItem = (props) => {
  const {
    icon,
    path,
    text,
  } = props;

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
