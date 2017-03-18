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
    const { children, pageMeta, uiActions, ui } = this.props;

    return (
      <MuiThemeProvider>
        <div style={{display:'flex'}}>
          <Nav navOpen={ ui.navOpen } />
          <div style={{flex: '1 1 0%', minHeight: '100vh'}}>
            <PageHeader
              toggleNav={ uiActions.toggleNav }
              title={ pageMeta.siteTitle }
            />
            <PageContainer>{ children }</PageContainer>
          </div>
        </div>
      </MuiThemeProvider>
    );
  }
}

const mapStateToProps = state => ({
  pageMeta: state.meta,
  ui: state.ui,
});

const mapDispatchToProps = dispatch => ({
  uiActions: bindActionCreators({ toggleNav }, dispatch),
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(App)
