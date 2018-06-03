
import { POSTJSON, GET } from '../core/WS/WSHandler';
import * as URL from '../core/WS/URL';
import { push } from 'react-router-redux';
import * as RoutingURL from '../core/RoutingURL/RoutingURL';
import AsyncFetchHandler from '../core/AsyncFetchHandler';
import NotificationAction from '../common/NotificationAction';
import NotificationCenter from '../common/NotificationCenter';

// 获取UserList
export const GET_USERLIST = 'GET_USERLIST';
export const getUserList = (params: Object) => (dispatch) => {
  const result = GET(URL.getUserListPath, params);
  AsyncFetchHandler(
    GET_USERLIST,
    result,
    dispatch
  );
};

// 删除账号
export const SELETE_USERINFO = 'SELETE_USERINFO';
export const deleteUserInfo = (params: Object) => (dispatch) => {
  const result = GET(URL.deleteUserInfoPath, { id: params.deleteId });
  AsyncFetchHandler(
    SELETE_USERINFO,
    result,
    dispatch
  );
  result.then(data => {
    if (data.status == '200') {
      NotificationCenter.NotificationCard(
        '删除成功',
        '',
        'success',
        2,
      );
      dispatch(getUserList(params));
    } else {
      NotificationCenter.NotificationCard(
        '删除失败',
        data.message,
        'error',
        3,
      );
    }
  });
};

// 添加账号
export const ADD_USERINFO = 'ADD_USERINFO';
export const addUserInfo = (params: Object) => (dispatch) => {
  const result = GET(URL.addUserInfoPath, params);
  AsyncFetchHandler(
    SELETE_USERINFO,
    result,
    dispatch
  );
  result.then(data => {
    if (data.status == '200') {
      NotificationCenter.NotificationCard(
        '添加成功',
        '',
        'success',
        2,
      );
      dispatch(goBack())
    } else {
      NotificationCenter.NotificationCard(
        '添加失败',
        data.message,
        'error',
        3,
      );
    }
  });
};

// 修改账号
export const UPDATE_USERINFO = 'UPDATE_USERINFO';
export const updateUserInfo = (params: Object) => (dispatch) => {
  const result = GET(URL.updateUserInfoPath, params);
  AsyncFetchHandler(
    SELETE_USERINFO,
    result,
    dispatch
  );
  result.then(data => {
    if (data.status == '200') {
      NotificationCenter.NotificationCard(
        '修改成功',
        '',
        'success',
        2,
      );
      dispatch(getUserList(params));
    } else {
      NotificationCenter.NotificationCard(
        '修改失败',
        data.message,
        'error',
        3,
      );
    }
  });
};

// 获取UserInfo
export const GET_USERINFO = 'GET_USERINFO';
export const getUserInfo = (params: Object) => (dispatch) => {
  dispatch({
    type: GET_USERINFO,
    data: params,
  });
};



// 获取c端UserList
export const GET_C_USERLIST = 'GET_C_USERLIST';
export const getCUserList = (params: Object) => (dispatch) => {
  const result = GET(URL.getCuserListPath, params);
  AsyncFetchHandler(
    GET_C_USERLIST,
    result,
    dispatch
  );
};

// c端用户
export const UPDATE_LOCKING = 'UPDATE_LOCKING';
export const updateLocking = (params: Object) => (dispatch) => {
  const result = GET(URL.updateLockingPath, params);
  AsyncFetchHandler(
    UPDATE_LOCKING,
    result,
    dispatch
  );
  result.then(data => {
    if (data.status == '200') {
      NotificationCenter.NotificationCard(
        '修改成功',
        '',
        'success',
        2,
      );
      dispatch(getUserList(params));
    } else {
      NotificationCenter.NotificationCard(
        '修改失败',
        data.message,
        'error',
        3,
      );
    }
  });
};
