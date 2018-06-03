
import { connect } from 'react-redux';
import UserInfo from './UserInfo';

const mapStateToProps = (state) => ({
  dispatch: state.dispatch,
  errMsg: state.AdminReducer.get('errMsg'),
  isFetching: state.AdminReducer.get('isFetching'),
  userInfo: state.AdminReducer.get('userInfo'),
  userList: state.AdminReducer.get('userList'),
});

export default connect(mapStateToProps)(UserInfo);
