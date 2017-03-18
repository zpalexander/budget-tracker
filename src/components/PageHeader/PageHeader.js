import React, {Component, PropTypes} from 'react';
import {Link} from 'react-router';
import { HOME, DASHBOARD } from '../../constants/routes';
import logo from './logo.svg';
import './PageHeader.css';

class PageHeader extends Component {
  render() {
    return (
      <div className="page-header">
        <ul>
          <li><img src={logo} className="App-logo" alt="logo" /></li>
          <li>Budget Tracker</li>
          <li><Link to={HOME}>Home</Link></li>
          <li><Link to={DASHBOARD}>Dashboard</Link></li>
        </ul>
      </div>
    );
  };
}

PageHeader.propTypes = {
  title: PropTypes.string.isRequired,
};

export default PageHeader;
