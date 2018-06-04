
import { connect } from 'react-redux';
import NoticeTypeInfo from './NoticeTypeInfo';

const mapStateToProps = (state) => ({
  dispatch: state.dispatch,
  errMsg: state.OperateReducer.get('errMsg'),
  isFetching: state.OperateReducer.get('isFetching'),
  noticeTypeInfo: state.OperateReducer.get('noticeTypeInfo'),
});

export default connect(mapStateToProps)(NoticeTypeInfo);
