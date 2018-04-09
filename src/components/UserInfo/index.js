
import { connect } from 'react-redux';
import UserInfo from './UserInfo';

const mapStateToProps = (state) => ({
  dispatch: state.dispatch,
  errMsg: state.UserReducer.get('errMsg'),
  isFetching: state.UserReducer.get('isFetching'),
  userInfo: state.UserReducer.get('userInfo'),
  userList: state.UserReducer.get('userList'),
});

export default connect(mapStateToProps)(UserInfo);
