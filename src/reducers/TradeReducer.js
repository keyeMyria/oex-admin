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
    id: '',
    zoneName: '',
    zoneSort: '',
    zoneSwitch: '',
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
    maxAmountLimit: '',
    minAmountLimit: '',
    rate: '',
    remark: '',
    sortId: '',
    status: '',
    tradeCoinId: '',
    tradeCoinName: '',
    unitCoinId: '',
    unitCoinName: '',
    zoneId: '',
  }),
});

const getAreaListHandler = new ActionHandler.handleAction(TradeAction.GET_AREA_LIST)
  .success((state, action) => {
    return state.setIn(['areaList', 'list'], Immutable.fromJS(action.data))
      .set('isFetching', false).set('errMsg', '');
  });
const getPairListHandler = new ActionHandler.handleAction(TradeAction.GET_PAIR_LIST)
  .success((state, action) => {
    console.log(action);
    return state.setIn(['pairList', 'list'], Immutable.fromJS(action.data))
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
