import React, { Component } from 'react';
import PageHeader from '../../components/PageHeader';
import PageContainer from '../../components/PageContainer';
import { connect } from 'react-redux'
import './App.css';

class App extends Component {
  render() {
    const {pageMeta} = this.props;

    return (
      <div>
        <PageHeader title={pageMeta.siteTitle} />
        <PageContainer>
          {this.props.children}
        </PageContainer>
      </div>
    );
  }
}

const mapStateToProps = state => ({
  pageMeta: state.meta
});

export default connect(
  mapStateToProps
)(App)
