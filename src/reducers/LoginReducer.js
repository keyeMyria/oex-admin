/**
 * Created by leiyouwho on 15/4/2016.
 */

import * as LoginAction from '../actions/LoginAction';
import * as Authentication from '../core/Authentication';
import Immutable from 'immutable';
import userInfoStorage from '../core/UserInfoStorage';
import { redux } from 'amumu';
import AppInfo from '../../AppInfo';
const prod = AppInfo.prod;
const ActionHandler = redux.ActionHandler;

const apiToken = userInfoStorage.getItem('apiToken');
const userId = Number(userInfoStorage.getItem('userId'));
const userName = userInfoStorage.getItem('userName');

const defaultState = Immutable.Map({
  isFetching: false,
  errMsg: '',
  id: '',
  userName: '',
  role: '',
  login: false,
});

const getLoginHandler = new ActionHandler.handleAction(LoginAction.GET_LOGIN)
  .request((state) => {
    return state.set('isFetching', true).set('errMsg', '');
  }).success((state, action) => {
    userInfoStorage.setItem('role', action.data.role);
    userInfoStorage.setItem('id', action.data.id);
    userInfoStorage.setItem('userName', action.data.userName);
    return Immutable.fromJS(action.data).set('login', true)
      .set('isFetching', false)
      .set('id', action.data.id)
      .set('userName', action.data.userName)
      .set('role', action.data.role)
      .set('errMsg', '');
  }).failure((state, action) => {
    return state.set('login', false)
      .set('isFetching', false).set('errMsg', action.errMsg);
  });

const getLogoutHandler = new ActionHandler.handleAction(LoginAction.GET_LOGOUT)
  .request((state) => {
    return state.set('isFetching', true).set('errMsg', '');
  }).success((state, action) => {
    userInfoStorage.removeItem('role');
    userInfoStorage.removeItem('id');
    userInfoStorage.removeItem('userName');
    return Immutable.fromJS(action.data).set('login', false)
  }).failure((state, action) => {
    return state.set('login', true)
      .set('isFetching', false).set('errMsg', action.errMsg);
  });

export default ActionHandler.handleActions(
  [getLoginHandler, getLogoutHandler],
  defaultState,
  /^LoginReducer\//
);
