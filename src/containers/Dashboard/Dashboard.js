/* React */
import React, { Component } from 'react';
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux';
/* Components */
import PageHeader from '../../components/PageHeader';
import PageContainer from '../../components/PageContainer';
import Nav from '../../components/Nav';
import LoadingOverlay from '../../components/LoadingOverlay';
/* Actions */
import { toggleNav } from '../../actions/ui';
import './Dashboard.css';

class Dashboard extends Component {
  render() {
    const {
      children,
      siteTitle,
      ui,
      uiActions,
    } = this.props;

    return (
      <div className="dashboard">
        <Nav
          navOpen={ ui.navOpen }
          toggleNav={ uiActions.toggleNav }
        />
        <div className="content">
          <PageHeader
            toggleNav={ uiActions.toggleNav }
            title={ siteTitle }
          />
          <PageContainer>{ children }</PageContainer>
        </div>
        <LoadingOverlay show={ ui.isLoading } />
      </div>
    );
  }
}


const mapStateToProps = state => ({
  siteTitle: `${state.user.name}'s Budget`,
  ui: state.ui,
});

const mapDispatchToProps = dispatch => ({
  uiActions: bindActionCreators({ toggleNav }, dispatch),
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Dashboard);
