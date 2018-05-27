import * as FlowAction from '../actions/FlowAction';
import * as Authentication from '../core/Authentication';
import Immutable from 'immutable';
import userInfoStorage from '../core/UserInfoStorage';
import { redux } from 'amumu';
const ActionHandler = redux.ActionHandler;
import { datas } from './course';

const defaultState = Immutable.Map({
  isFetching: false,
  errMsg: '',
  coinFlow: Immutable.Map({
    list: Immutable.List([]),
    total: 0,
    currentPage: 1,
  }),
  userFlow: Immutable.Map({
    list: Immutable.List([]),
    total: 0,
    currentPage: 1,
  }),
  coinSearchData: Immutable.Map({
    coin_id: '',
    type: '',
    pageNum: 1,
    pageSize: 10,
  }),
  userSearchData: Immutable.Map({
    userId: '',
    type: '',
    pageNum: 1,
    pageSize: 10,
  }),
});

const getRechargeRecordByCoinHandler = new ActionHandler.handleAction(FlowAction.GET_RECHARGE_BY_COIN)
  .success((state, action) => {
    return state.setIn(['coinFlow', 'list'], Immutable.fromJS(action.data.list))
      .setIn(['coinFlow', 'total'], Immutable.fromJS(action.data.total))
      .setIn(['coinSearchData', 'pageSize'], Immutable.fromJS(action.data.pageSize))
      .setIn(['coinSearchData', 'pageNum'], Immutable.fromJS(action.data.pageNum))
      .set('isFetching', false).set('errMsg', '');
  });
const getWithdrawRecordByCoinHandler = new ActionHandler.handleAction(FlowAction.GET_WITHDRAW_BY_COIN)
  .success((state, action) => {
    return state.setIn(['coinFlow', 'list'], Immutable.fromJS(action.data.list))
      .setIn(['coinFlow', 'total'], Immutable.fromJS(action.data.total))
      .setIn(['coinSearchData', 'pageSize'], Immutable.fromJS(action.data.pageSize))
      .setIn(['coinSearchData', 'pageNum'], Immutable.fromJS(action.data.pageNum))
      .set('isFetching', false).set('errMsg', '');
  });
const getRechargeRecordByUserHandler = new ActionHandler.handleAction(FlowAction.GET_RECHARGE_BY_USER)
  .success((state, action) => {
    console.log(action);
    return state.setIn(['userFlow', 'list'], Immutable.fromJS(action.data.list))
      .setIn(['userFlow', 'total'], Immutable.fromJS(action.data.total))
      .setIn(['userSearchData', 'pageSize'], Immutable.fromJS(action.data.pageSize))
      .setIn(['userSearchData', 'pageNum'], Immutable.fromJS(action.data.pageNum))
      .set('isFetching', false).set('errMsg', '');
  });
const getWithdrawRecordByUserHandler = new ActionHandler.handleAction(FlowAction.GET_WITHDRAW_BY_USER)
  .success((state, action) => {
    return state.setIn(['userFlow', 'list'], Immutable.fromJS(action.data.list))
      .setIn(['userFlow', 'total'], Immutable.fromJS(action.data.total))
      .setIn(['userSearchData', 'pageSize'], Immutable.fromJS(action.data.pageSize))
      .setIn(['userSearchData', 'pageNum'], Immutable.fromJS(action.data.pageNum))
      .set('isFetching', false).set('errMsg', '');
  });


export default ActionHandler.handleActions(
  [
    getRechargeRecordByCoinHandler,
    getWithdrawRecordByCoinHandler,
    getRechargeRecordByUserHandler,
    getWithdrawRecordByUserHandler,
  ],
  defaultState,
  /^FlowReducer\//
);
