
import { connect } from 'react-redux';
import NoticeList from './NoticeList';

const mapStateToProps = (state) => ({
  dispatch: state.dispatch,
  errMsg: state.OperateReducer.get('errMsg'),
  isFetching: state.OperateReducer.get('isFetching'),
  noticeList: state.OperateReducer.get('noticeList'),
  searchData: state.OperateReducer.get('searchData'),
});

export default connect(mapStateToProps)(NoticeList);
