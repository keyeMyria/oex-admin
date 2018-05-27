import * as RewardAction from '../actions/RewardAction';
import * as Authentication from '../core/Authentication';
import Immutable from 'immutable';
import userInfoStorage from '../core/UserInfoStorage';
import { redux } from 'amumu';
const ActionHandler = redux.ActionHandler;
import { datas } from './course';

const defaultState = Immutable.Map({
  isFetching: false,
  errMsg: '',
  rewardList: Immutable.Map({
    list: Immutable.List([
      ]),
      total: 0,
      currentPage: 1,
  }),
  // pairList: Immutable.Map({
  //   list: Immutable.List([
  //     ]),
  //     total: 0,
  //     currentPage: 1,
  // }),
  rewardInfo: Immutable.Map({
  }),
  // pairInfo: Immutable.Map({
  // }),
  searchData: Immutable.Map({
    id: '',
    phone: '',
    realName: '',
    pageNum: 1,
    pageSize: 10,
  }),
  // pairSearchData: Immutable.Map({
  //   id: '',
  //   phone: '',
  //   realName: '',
  //   pageNum: 1,
  //   pageSize: 10,
  // }),
});

const getRewardListHandler = new ActionHandler.handleAction(RewardAction.GET_REWARD_LIST)
  .success((state, action) => {
    return state.setIn(['rewardList', 'list'], Immutable.fromJS(action.data.list))
      .setIn(['rewardList', 'total'], Immutable.fromJS(action.data.total))
      .setIn(['searchData', 'pageSize'], Immutable.fromJS(action.data.pageSize))
      .setIn(['searchData', 'pageNum'], Immutable.fromJS(action.data.pageNum))
      .set('isFetching', false).set('errMsg', '');
  });

// const getRewardInfoHandler = new ActionHandler.handleAction(RewardAction.GET_AREA_INFO)
//     .success((state, action) => {
//       return state.set('rewardInfo', Immutable.fromJS(action.data))
//         .set('isFetching', false).set('errMsg', '');
//     });


export default ActionHandler.handleActions(
  [
    getRewardListHandler,
    // getRewardInfoHandler,
  ],
  defaultState,
  /^RewardReducer\//
);
