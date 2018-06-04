
import { connect } from 'react-redux';
import NoticeTypeList from './NoticeTypeList';

const mapStateToProps = (state) => ({
  dispatch: state.dispatch,
  errMsg: state.OperateReducer.get('errMsg'),
  isFetching: state.OperateReducer.get('isFetching'),
  noticeTypeList: state.OperateReducer.get('noticeTypeList'),
  noticeTypeSearchData: state.OperateReducer.get('noticeTypeSearchData'),
});

export default connect(mapStateToProps)(NoticeTypeList);
