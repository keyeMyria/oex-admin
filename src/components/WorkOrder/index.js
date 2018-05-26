
import { connect } from 'react-redux';
import WorkOrder from './WorkOrder';

const mapStateToProps = (state) => ({
  dispatch: state.dispatch,
  errMsg: state.UserReducer.get('errMsg'),
  isFetching: state.ServiceReducer.get('isFetching'),
  workOrder: state.ServiceReducer.get('workOrder'),
  workOrders: state.ServiceReducer.get('workOrders'),
});

export default connect(mapStateToProps)(WorkOrder);
