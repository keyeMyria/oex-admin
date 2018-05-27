
import { connect } from 'react-redux';
import UserFlow from './UserFlow';

const mapStateToProps = (state) => ({
  dispatch: state.dispatch,
  errMsg: state.FlowReducer.get('errMsg'),
  isFetching: state.FlowReducer.get('isFetching'),
  userFlow: state.FlowReducer.get('userFlow'),
  searchData: state.FlowReducer.get('userSearchData'),
});

export default connect(mapStateToProps)(UserFlow);
