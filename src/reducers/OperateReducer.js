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
  noticeTypeList: Immutable.Map({
    list: Immutable.List([]),
    total: 0,
    currentPage: 1,
  }),
  noticeTypeInfo: Immutable.Map({
    img: '',
    n_language: '',
    name: '',
    url: ''
  }),
  noticeTypeSearchData: Immutable.Map({
    id: '',
    phone: '',
    realName: '',
    pageNum: 1,
    pageSize: 10,
  }),
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
    return state.setIn(['noticeList', 'list'], Immutable.fromJS(action.data.list))
      .setIn(['noticeList', 'total'], Immutable.fromJS(action.data.total))
      .setIn(['searchData', 'pageSize'], Immutable.fromJS(action.data.pageSize))
      .setIn(['searchData', 'pageNum'], Immutable.fromJS(action.data.pageNum))
      .set('isFetching', false).set('errMsg', '');
  });
  const getNoticeInfoHandler = new ActionHandler.handleAction(OperateAction.GET_AREA_INFO)
      .success((state, action) => {
        return state.set('noticeInfo', Immutable.fromJS(action.data))
          .set('isFetching', false).set('errMsg', '');
      });

      const getNoticeTypeListHandler = new ActionHandler.handleAction(OperateAction.GET_NOTICE_TYPE_LIST)
        .success((state, action) => {
          return state.setIn(['noticeTypeList', 'list'], Immutable.fromJS(action.data))
            // .setIn(['noticeTypeList', 'total'], Immutable.fromJS(action.data.total))
            // .setIn(['noticeTypeSearchData', 'pageSize'], Immutable.fromJS(action.data.pageSize))
            // .setIn(['noticeTypeSearchData', 'pageNum'], Immutable.fromJS(action.data.pageNum))
            .set('isFetching', false).set('errMsg', '');
        });
        const getNoticeTypeInfoHandler = new ActionHandler.handleAction(OperateAction.GET_NOTICE_TYPE_INFO)
            .success((state, action) => {
              return state.set('noticeTypeInfo', Immutable.fromJS(action.data))
                .set('isFetching', false).set('errMsg', '');
            });

export default ActionHandler.handleActions(
  [
    getNoticeListHandler,
    getNoticeInfoHandler,
    getNoticeTypeListHandler,
    getNoticeTypeInfoHandler
  ],
  defaultState,
  /^OperateReducer\//
);
