import * as UserAssetsAction from '../actions/UserAssetsAction';
import * as Authentication from '../core/Authentication';
import Immutable from 'immutable';
import userInfoStorage from '../core/UserInfoStorage';
import { redux } from 'amumu';
const ActionHandler = redux.ActionHandler;
import { datas } from './course';

const defaultState = Immutable.Map({
  isFetching: false,
  errMsg: '',
  coinList: Immutable.Map({
    list: Immutable.List([]),
    total: 0,
    currentPage: 1,
  }),
  assetsList: Immutable.Map({
    list: Immutable.List([]),
    total: 0,
    currentPage: 1,
  }),
  searchData: Immutable.Map({
    user_id: '',
    type: '',
    pageNum: 1,
    pageSize: 10,
  }),
});

const getUserAssetsHandler = new ActionHandler.handleAction(UserAssetsAction.GET_USER_ASSETS)
  .success((state, action) => {
    return state.setIn(['coinList', 'list'], Immutable.fromJS(action.data.list))
      .setIn(['coinList', 'total'], Immutable.fromJS(action.data.total))
      .setIn(['searchData', 'pageSize'], Immutable.fromJS(action.data.pageSize))
      .setIn(['searchData', 'pageNum'], Immutable.fromJS(action.data.pageNum))
      .set('isFetching', false).set('errMsg', '');
  });
const getUserCoinsHandler = new ActionHandler.handleAction(UserAssetsAction.GET_USER_COIN)
  .success((state, action) => {
    return state.setIn(['assetsList', 'list'], Immutable.fromJS(action.data.list))
      .setIn(['assetsList', 'total'], Immutable.fromJS(action.data.total))
      .setIn(['searchData', 'pageSize'], Immutable.fromJS(action.data.pageSize))
      .setIn(['searchData', 'pageNum'], Immutable.fromJS(action.data.pageNum))
      .set('isFetching', false).set('errMsg', '');
  });


export default ActionHandler.handleActions(
  [
    getUserAssetsHandler,
    getUserCoinsHandler,
  ],
  defaultState,
  /^UserAssetsReducer\//
);
