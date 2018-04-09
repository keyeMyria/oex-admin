
import { POSTJSON, GET } from '../core/WS/WSHandler';
import * as URL from '../core/WS/URL';
import { push, replace } from 'react-router-redux';
import * as RoutingURL from '../core/RoutingURL/RoutingURL';
import AsyncFetchHandler from '../core/AsyncFetchHandler';
import NotificationAction from '../common/NotificationAction';
import NotificationCenter from '../common/NotificationCenter';

// 获取c端用户列表
export const GET_PEOPLE_LIST = 'GET_PEOPLE_LIST';
export const getPeopleList = (params: Object) => (dispatch) => {
  const result = GET(URL.getPeopleListPath, params);
  AsyncFetchHandler(
    GET_PEOPLE_LIST,
    result,
    dispatch
  );
};

export const GET_PEOPLE_INFO = 'GET_PEOPLE_INFO';
export const getPeopleInfo = (params) => (dispatch) => {
  const result = GET(URL.getPeopleInfoPath, params);
  AsyncFetchHandler(
    GET_PEOPLE_INFO,
    result,
    dispatch
  );
}
