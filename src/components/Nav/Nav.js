import React, { PropTypes } from 'react';
import { navList } from '../../constants/routes';
// import Drawer from 'material-ui/Drawer';
import Paper from 'material-ui/Paper';
import NavItem from '../NavItem';
import './Nav.css';

const buildNavItem = (route, key) => (
  <NavItem
    key={ key }
    path={ route.path }
    text={ route.name }
  />
);

const Nav = (props) => {
  const { navOpen } = props;
  const classNames = ['nav'];
  navOpen ? classNames.push('open') : classNames.push('closed');

  return (
    <Paper
      className={ classNames.join(' ') }
    >
      { navList.map(buildNavItem) }
    </Paper>
  );
};

Nav.propTypes = {
  navOpen: PropTypes.bool,
};

export default Nav;
