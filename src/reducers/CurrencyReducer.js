import * as CurrencyAction from '../actions/CurrencyAction';
import * as Authentication from '../core/Authentication';
import Immutable from 'immutable';
import userInfoStorage from '../core/UserInfoStorage';
import { redux } from 'amumu';
const ActionHandler = redux.ActionHandler;
import { datas } from './course';

const defaultState = Immutable.Map({
  isFetching: false,
  errMsg: '',
  currencyList: Immutable.Map({
    list: Immutable.List([
      ]),
      total: 0,
      currentPage: 1,
  }),
  currencyInfo: Immutable.Map({
  }),
  searchData: Immutable.Map({
    order: '',
    type: '',
    pageNum: 1,
    pageSize: 10,
  }),
  coinConfigList: Immutable.Map({
    list: Immutable.List([
    ]),
    total: 0,
    currentPage: 1,
  }),
  coinConfigInfo: Immutable.Map({
  }),
  coinConfigSearchData: Immutable.Map({
    order: '',
    type: '',
    pageNum: 1,
    pageSize: 10,
  }),
});

const getCurrencyListHandler = new ActionHandler.handleAction(CurrencyAction.GET_CURRENCYLIST)
  .success((state, action) => {
    return state.setIn(['currencyList', 'list'], Immutable.fromJS(action.data.pageInfo))
      // .setIn(['currencyList', 'total'], Immutable.fromJS(action.data.total))
      // .setIn(['searchData', 'pageSize'], Immutable.fromJS(action.data.pageSize))
      // .setIn(['searchData', 'pageNum'], Immutable.fromJS(action.data.pageNum))
      .set('isFetching', false).set('errMsg', '');
  });


const getCoinInfoHandler = new ActionHandler.handleAction(CurrencyAction.GET_COIN_INFO)
    .success((state, action) => {
      return state.set('currencyInfo', Immutable.fromJS(action.data))
        .set('isFetching', false).set('errMsg', '');
    });

    const getCoinConfigListHandler = new ActionHandler.handleAction(CurrencyAction.GET_COIN_CONFIG_LIST)
      .success((state, action) => {
        return state.setIn(['coinConfigList', 'list'], Immutable.fromJS(action.data.pageInfo))
          // .setIn(['currencyList', 'total'], Immutable.fromJS(action.data.total))
          // .setIn(['searchData', 'pageSize'], Immutable.fromJS(action.data.pageSize))
          // .setIn(['searchData', 'pageNum'], Immutable.fromJS(action.data.pageNum))
          .set('isFetching', false).set('errMsg', '');
      });


    const getCoinConfigInfoHandler = new ActionHandler.handleAction(CurrencyAction.GET_COIN_CONFIG_INFO)
        .success((state, action) => {
          return state.set('coinConfigInfo', Immutable.fromJS(action.data))
            .set('isFetching', false).set('errMsg', '');
        });
export default ActionHandler.handleActions(
  [
    getCurrencyListHandler,
    getCoinInfoHandler,
    getCoinConfigListHandler,
    getCoinConfigInfoHandler
  ],
  defaultState,
  /^CurrencyReducer\//
);
