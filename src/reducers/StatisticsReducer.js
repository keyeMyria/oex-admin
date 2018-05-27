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
  statistics: Immutable.Map({
  }),
});


const getStatisticsInfoHandler = new ActionHandler.handleAction(RewardAction.GET_AREA_INFO)
    .success((state, action) => {
      return state.set('statistics', Immutable.fromJS(action.data))
        .set('isFetching', false).set('errMsg', '');
    });


export default ActionHandler.handleActions(
  [
    getStatisticsInfoHandler,
  ],
  defaultState,
  /^StatisticsReducer\//
);
