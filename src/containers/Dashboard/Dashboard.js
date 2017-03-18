import React, {Component} from 'react';
// import { bindActionCreators } from 'redux';
import { connect } from 'react-redux'
import PurchaseList from '../../components/PurchaseList';

class Dashboard extends Component {
  render() {
    const { purchases } = this.props;

    return (
      <div>
        <PurchaseList purchases={ purchases } />
      </div>
    );
  }
}

const mapStateToProps = state => ({
  purchases: state.purchases,
});

const mapDispatchToProps = dispatch => ({
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Dashboard);
