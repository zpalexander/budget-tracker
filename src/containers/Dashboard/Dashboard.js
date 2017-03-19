import React, { Component } from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux'
import Card from 'material-ui/Card';
import FloatingActionButton from 'material-ui/FloatingActionButton';
import ContentAdd from 'material-ui/svg-icons/content/add';
import PurchaseList from '../../components/PurchaseList';
import NewPurchaseDialog from '../../components/NewPurchaseDialog';
import { addNewPurchase, saveNewPurchase, deletePurchase } from '../../actions/purchases';
import { toggleAddNewPurchaseDialog } from '../../actions/ui';
import './Dashboard.css';

class Dashboard extends Component {
  render() {
    const {
      newPurchaseDialogOpen,
      purchases,
      purchaseActions,
      uiActions,
    } = this.props;

    return (
      <div>
        <Card>
          <PurchaseList
            deletePurchase={ purchaseActions.deletePurchase }
            purchases={ purchases }
          />
        </Card>
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
  purchases: state.purchases,
  newPurchaseDialogOpen: state.ui.newPurchaseDialogOpen,
});

const mapDispatchToProps = dispatch => ({
  purchaseActions: bindActionCreators({
    addNewPurchase,
    saveNewPurchase,
    deletePurchase,
  }, dispatch),
  uiActions: bindActionCreators({
    toggleAddNewPurchaseDialog
  }, dispatch),
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Dashboard);
