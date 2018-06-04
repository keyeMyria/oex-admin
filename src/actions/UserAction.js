
import { POSTJSON, GET } from '../core/WS/WSHandler';
import * as URL from '../core/WS/URL';
import { push, goBack } from 'react-router-redux';
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
  const result = GET(URL.deleteUserInfoPath, params);
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
  delete params.create_time;
  delete params.update_time;
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
      dispatch(goBack())
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



// 获取角色列表
export const GET_ROLELIST = 'GET_ROLELIST';
export const getRoleList = (params: Object) => (dispatch) => {
  const result = GET(URL.getRoleListPath, params);
  AsyncFetchHandler(
    GET_ROLELIST,
    result,
    dispatch
  );
};

// 删除账号
export const DELETE_ROLE = 'DELETE_ROLE';
export const deleteRole = (params: Object) => (dispatch) => {
  const result = GET(URL.deleteRolePath, params);
  AsyncFetchHandler(
    DELETE_ROLE,
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
      dispatch(getRoleList(params));
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
export const ADD_ROLE = 'ADD_ROLE';
export const addRole = (params: Object) => (dispatch) => {
  const result = GET(URL.addRolePath, params);
  AsyncFetchHandler(
    ADD_ROLE,
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
export const UPDATE_ROLE = 'UPDATE_ROLE';
export const updateRole = (params: Object) => (dispatch) => {
  delete params.create_time;
  delete params.update_time;
  const result = GET(URL.updateRolePath, params);
  AsyncFetchHandler(
    UPDATE_ROLE,
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
      dispatch(goBack())
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
// 获取roleInfo
export const GET_ROLEINFO = 'GET_ROLEINFO';
export const getRoleInfo = (params: Object) => (dispatch) => {
  dispatch({
    type: GET_ROLEINFO,
    data: params,
  });
};

// 获取权限列表
export const GET_QXLIST = 'GET_QXLIST';
export const getListPrivilege = (params: Object) => (dispatch) => {
  const result = GET(URL.getListPrivilegePath, params);
  AsyncFetchHandler(
    GET_QXLIST,
    result,
    dispatch
  );
};
