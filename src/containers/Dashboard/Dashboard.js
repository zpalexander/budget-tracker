import React, {Component} from 'react';
// import { bindActionCreators } from 'redux';
import { connect } from 'react-redux'
import Card from 'material-ui/Card';
import FloatingActionButton from 'material-ui/FloatingActionButton';
import ContentAdd from 'material-ui/svg-icons/content/add';
import ContentRemove from 'material-ui/svg-icons/content/remove';
import PurchaseList from '../../components/PurchaseList';
import './Dashboard.css';

class Dashboard extends Component {
  render() {
    const { purchases } = this.props;

    return (
      <div>
        <Card>
          <PurchaseList purchases={ purchases } />
        </Card>
        <div className="add-purchase-wrapper">
          <FloatingActionButton>
            <ContentAdd />
          </FloatingActionButton>
        </div>
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
