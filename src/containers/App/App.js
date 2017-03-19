/* React */
import React, { Component } from 'react';
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux';
/* Components */
import PageHeader from '../../components/PageHeader';
import PageContainer from '../../components/PageContainer';
import Nav from '../../components/Nav';
/* Actions */
import { toggleNav } from '../../actions/ui';
/* Styles */
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import './App.css';

class App extends Component {
  render() {
    const {
      children,
      siteTitle,
      uiActions,
      ui,
    } = this.props;

    return (
      <MuiThemeProvider>
        <div className="app">
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
        </div>
      </MuiThemeProvider>
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
)(App);
