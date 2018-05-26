import * as TradeAction from '../actions/TradeAction';
import * as Authentication from '../core/Authentication';
import Immutable from 'immutable';
import userInfoStorage from '../core/UserInfoStorage';
import { redux } from 'amumu';
const ActionHandler = redux.ActionHandler;
import { datas } from './course';

const defaultState = Immutable.Map({
  isFetching: false,
  errMsg: '',
  areaList: Immutable.Map({
    list: Immutable.List([
      ]),
      total: 0,
      currentPage: 1,
  }),
  pairList: Immutable.Map({
    list: Immutable.List([
      ]),
      total: 0,
      currentPage: 1,
  }),
  areaInfo: Immutable.Map({
  }),
  pairInfo: Immutable.Map({
  }),
  areaSearchData: Immutable.Map({
    id: '',
    phone: '',
    realName: '',
    pageNum: 1,
    pageSize: 10,
  }),
  pairSearchData: Immutable.Map({
    id: '',
    phone: '',
    realName: '',
    pageNum: 1,
    pageSize: 10,
  }),
});

const getAreaListHandler = new ActionHandler.handleAction(TradeAction.GET_AREA_LIST)
  .success((state, action) => {
    return state.setIn(['areaList', 'list'], Immutable.fromJS(action.data.list))
      .setIn(['areaList', 'total'], Immutable.fromJS(action.data.totalRow))
      .setIn(['areaSearchData', 'pageSize'], Immutable.fromJS(action.data.pageSize))
      .setIn(['areaSearchData', 'pageNum'], Immutable.fromJS(action.data.pageNumber))
      .set('isFetching', false).set('errMsg', '');
  });
const getPairListHandler = new ActionHandler.handleAction(TradeAction.GET_AREA_LIST)
  .success((state, action) => {
    return state.setIn(['pairList', 'list'], Immutable.fromJS(action.data.list))
      .setIn(['pairList', 'total'], Immutable.fromJS(action.data.totalRow))
      .setIn(['pairSearchData', 'pageSize'], Immutable.fromJS(action.data.pageSize))
      .setIn(['pairSearchData', 'pageNum'], Immutable.fromJS(action.data.pageNumber))
      .set('isFetching', false).set('errMsg', '');
  });

const getAreaInfoHandler = new ActionHandler.handleAction(TradeAction.GET_AREA_INFO)
    .success((state, action) => {
      return state.set('areaInfo', Immutable.fromJS(action.data))
        .set('isFetching', false).set('errMsg', '');
    });
const getPairInfoHandler = new ActionHandler.handleAction(TradeAction.GET_PAIR_INFO)
    .success((state, action) => {
      return state.set('pairInfo', Immutable.fromJS(action.data))
        .set('isFetching', false).set('errMsg', '');
    });

export default ActionHandler.handleActions(
  [
    getAreaListHandler,
    getPairListHandler,
    getAreaInfoHandler,
    getPairInfoHandler,
  ],
  defaultState,
  /^TradeReducer\//
);
