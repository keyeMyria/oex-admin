
import { connect } from 'react-redux';
import NoticeInfo from './NoticeInfo';

const mapStateToProps = (state) => ({
  dispatch: state.dispatch,
  errMsg: state.OperateReducer.get('errMsg'),
  isFetching: state.OperateReducer.get('isFetching'),
  noticeInfo: state.OperateReducer.get('noticeInfo'),
  noticeList: state.OperateReducer.get('noticeList'),
  noticeTypeSearchData: state.OperateReducer.get('noticeTypeSearchData'),
  noticeTypeList: state.OperateReducer.get('noticeTypeList'),
});

export default connect(mapStateToProps)(NoticeInfo);
