
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

// // 获取UserInfo
// export const GET_USERINFO = 'GET_USERINFO';
// export const getUserInfo = (params: Object) => (dispatch) => {
//   const result = GET(URL.getUserInfoPath, params);
//   AsyncFetchHandler(
//     GET_USERINFO,
//     result,
//     dispatch
//   );
// };

// 修改user
export const UPDATE_USER = 'UPDATE_USER';
export const updateUser = (params: Object) => (dispatch) => {
  const result = GET(URL.updateUserInfoPath, params);
  AsyncFetchHandler(
    UPDATE_USER,
    result,
    dispatch
  );
  result.then(data => {
    if (data.code === '0') {
      NotificationCenter.NotificationCard(
        '保存成功',
        '',
        'success',
        2,
      );
      dispatch(push(RoutingURL.UserList()));
    } else {
      NotificationCenter.NotificationCard(
        '保存失败',
        data.code === '017' ? '用户名已存在' : '请填写正确的账号信息',
        'error',
        3,
      );
    }
  });
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
    if (data.code === '0') {
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
