
import { POSTJSON } from '../core/WS/WSHandler';
import * as URL from '../core/WS/URL';
import { push } from 'react-router-redux';
import * as RoutingURL from '../core/RoutingURL/RoutingURL';
import AsyncFetchHandler from '../core/AsyncFetchHandler';
import NotificationAction from '../common/NotificationAction';
import userInfoStorage from '../core/UserInfoStorage';

// action define
export const GET_LOGIN = 'GET_LOGIN';

export const getLOGIN = (params: Object) => (dispatch) => {
  const result = POSTJSON(URL.LoginPath, params);
  AsyncFetchHandler(GET_LOGIN, result, dispatch);
  result.then(data => {
    console.log(data)
    if (data.status === 200) {
      dispatch(NotificationAction(
        { type: 'SUCCESS',
          device: 'pc',
          title: '登录成功',
          icon: 'smile-circle',
        }));
      dispatch(push(RoutingURL.App()));
    } else {
      dispatch(NotificationAction({ type: 'FAIL', device: 'pc', title: `${data.message}` }));
    }
  }).catch((err) => {
    console.warn('登录 -> 网络请求失败 ', err);
  });
};

// action define
export const GET_LOGOUT = 'GET_LOGOUT';

export const getLOGOUT = (params: Object) => (dispatch) => {
  userInfoStorage.removeItem('codes');
  userInfoStorage.removeItem('userId');
  userInfoStorage.removeItem('adminToken');
  dispatch(NotificationAction(
    { type: 'SUCCESS',
      device: 'pc',
      title: '退出成功',
      icon: 'smile-circle',
    }));
  dispatch(push(RoutingURL.Login()));
};
