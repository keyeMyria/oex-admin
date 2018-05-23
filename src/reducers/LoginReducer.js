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

const adminToken = userInfoStorage.getItem('adminToken');
const userId = Number(userInfoStorage.getItem('userId'));
// const userName = userInfoStorage.getItem('userName');

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
    console.log(action);
    userInfoStorage.setItem('codes', action.data.codes);
    userInfoStorage.setItem('userId', action.data.id);
    userInfoStorage.setItem('adminToken', action.data.admin_token);
    return Immutable.fromJS(action.data).set('login', true)
      .set('isFetching', false)
      .set('userId', action.data.id)
      .set('adminToken', action.data.admin_token)
      .set('errMsg', '');
  }).failure((state, action) => {
    return state.set('login', false)
      .set('isFetching', false).set('errMsg', action.errMsg);
  });

const getLogoutHandler = new ActionHandler.handleAction(LoginAction.GET_LOGOUT)
  .request((state) => {
    return state.set('isFetching', true).set('errMsg', '');
  }).success((state, action) => {
    userInfoStorage.removeItem('codes');
    userInfoStorage.removeItem('userId');
    userInfoStorage.removeItem('adminToken');
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
