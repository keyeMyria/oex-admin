
import { connect } from 'react-redux';
import WorkOrders from './WorkOrders';

const mapStateToProps = (state) => ({
  dispatch: state.dispatch,
  errMsg: state.ServiceReducer.get('errMsg'),
  isFetching: state.ServiceReducer.get('isFetching'),
  workOrders: state.ServiceReducer.get('workOrders'),
  searchData: state.ServiceReducer.get('searchData'),
});

export default connect(mapStateToProps)(WorkOrders);
