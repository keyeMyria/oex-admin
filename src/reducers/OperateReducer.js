import * as OperateAction from '../actions/OperateAction';
import * as Authentication from '../core/Authentication';
import Immutable from 'immutable';
import userInfoStorage from '../core/UserInfoStorage';
import { redux } from 'amumu';
const ActionHandler = redux.ActionHandler;
import { datas } from './course';

const defaultState = Immutable.Map({
  isFetching: false,
  errMsg: '',
  noticeList: Immutable.Map({
    list: Immutable.List([]),
    total: 0,
    currentPage: 1,
  }),
  noticeInfo: Immutable.Map({
  }),
  searchData: Immutable.Map({
    id: '',
    phone: '',
    realName: '',
    pageNum: 1,
    pageSize: 10,
  }),
});

const getNoticeListHandler = new ActionHandler.handleAction(OperateAction.GET_NOTICE_LIST)
  .success((state, action) => {
    return state.setIn(['noticeList', 'list'], Immutable.fromJS(action.data))
      // .setIn(['noticeList', 'total'], Immutable.fromJS(action.data.total))
      // .setIn(['searchData', 'pageSize'], Immutable.fromJS(action.data.pageSize))
      // .setIn(['searchData', 'pageNum'], Immutable.fromJS(action.data.pageNum))
      .set('isFetching', false).set('errMsg', '');
  });
// const getPairListHandler = new ActionHandler.handleAction(OperateAction.GET_AREA_LIST)
//   .success((state, action) => {
//     return state.setIn(['pairList', 'list'], Immutable.fromJS(action.data.list))
//       .setIn(['pairList', 'total'], Immutable.fromJS(action.data.total))
//       .setIn(['pairSearchData', 'pageSize'], Immutable.fromJS(action.data.pageSize))
//       .setIn(['pairSearchData', 'pageNum'], Immutable.fromJS(action.data.pageNum))
//       .set('isFetching', false).set('errMsg', '');
//   });

const getNoticeInfoHandler = new ActionHandler.handleAction(OperateAction.GET_AREA_INFO)
    .success((state, action) => {
      return state.set('noticeInfo', Immutable.fromJS(action.data))
        .set('isFetching', false).set('errMsg', '');
    });
// const getPairInfoHandler = new ActionHandler.handleAction(OperateAction.GET_PAIR_INFO)
//     .success((state, action) => {
//       return state.set('pairInfo', Immutable.fromJS(action.data))
//         .set('isFetching', false).set('errMsg', '');
//     });

export default ActionHandler.handleActions(
  [
    getNoticeListHandler,
    // getPairListHandler,
    getNoticeInfoHandler,
    // getPairInfoHandler,
  ],
  defaultState,
  /^OperateReducer\//
);
