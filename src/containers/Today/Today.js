import React, { Component } from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux'
import FloatingActionButton from 'material-ui/FloatingActionButton';
import ContentAdd from 'material-ui/svg-icons/content/add';
import PurchaseList from '../../components/PurchaseList';
import NewPurchaseDialog from '../../components/NewPurchaseDialog';
import DayStats from '../../components/DayStats';
import * as purchaseActionFunctions from '../../actions/purchases';
import { toggleAddNewPurchaseDialog } from '../../actions/ui';
import './Today.css';

class Today extends Component {
  componentDidMount() {
    this.props.purchaseActions.getPurchases();
  }

  render() {
    const {
      dailyBudget,
      newPurchaseDialogOpen,
      purchases,
      purchaseActions,
      uiActions,
    } = this.props;

    return (
      <div>
        <DayStats
          dailyBudget={ dailyBudget }
          purchases={ purchases }
        />
        <PurchaseList
          deletePurchase={ purchaseActions.deletePurchase }
          purchases={ purchases }
        />
        <div className="add-purchase-wrapper">
          <FloatingActionButton onTouchTap={ uiActions.toggleAddNewPurchaseDialog }>
            <ContentAdd />
          </FloatingActionButton>
        </div>
        <NewPurchaseDialog
          isOpen={ newPurchaseDialogOpen }
          saveNewPurchase={ purchaseActions.saveNewPurchase }
          toggleVisibility={ uiActions.toggleAddNewPurchaseDialog }
        />
      </div>
    );
  }
}

const mapStateToProps = state => ({
  dailyBudget: state.user.dailyBudget,
  purchases: state.purchases,
  newPurchaseDialogOpen: state.ui.newPurchaseDialogOpen,
});

const mapDispatchToProps = dispatch => ({
  purchaseActions: bindActionCreators(purchaseActionFunctions, dispatch),
  uiActions: bindActionCreators({ toggleAddNewPurchaseDialog }, dispatch),
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Today);
