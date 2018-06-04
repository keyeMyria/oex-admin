
import { connect } from 'react-redux';
import AuthList from './AuthList';

const mapStateToProps = (state) => ({
  dispatch: state.dispatch,
  errMsg: state.UserReducer.get('errMsg'),
  isFetching: state.UserReducer.get('isFetching'),
  roleList: state.UserReducer.get('roleList'),
  searchData: state.UserReducer.get('roleSearchData'),
});

export default connect(mapStateToProps)(AuthList);
