
import { connect } from 'react-redux';
import AuthInfo from './AuthInfo';

const mapStateToProps = (state) => ({
  dispatch: state.dispatch,
  errMsg: state.UserReducer.get('errMsg'),
  isFetching: state.UserReducer.get('isFetching'),
  roleInfo: state.UserReducer.get('roleInfo'),
  qxList: state.UserReducer.get('qxList'),
});

export default connect(mapStateToProps)(AuthInfo);
