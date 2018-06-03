
import { connect } from 'react-redux';
import AdminList from './AdminList';

const mapStateToProps = (state) => ({
  dispatch: state.dispatch,
  errMsg: state.AdminReducer.get('errMsg'),
  isFetching: state.AdminReducer.get('isFetching'),
  userList: state.AdminReducer.get('userList'),
  searchData: state.AdminReducer.get('searchData'),
});

export default connect(mapStateToProps)(AdminList);
