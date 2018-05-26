
import { POSTJSON, GET } from '../core/WS/WSHandler';
import * as URL from '../core/WS/URL';
import { push, replace } from 'react-router-redux';
import * as RoutingURL from '../core/RoutingURL/RoutingURL';
import AsyncFetchHandler from '../core/AsyncFetchHandler';
import NotificationAction from '../common/NotificationAction';
import NotificationCenter from '../common/NotificationCenter';

// 获取c端用户列表
export const GET_BONUS_LIST = 'GET_BONUS_LIST';
export const getBonusList = (params: Object) => (dispatch) => {
  const result = GET(URL.getBonusListPath, params);
  AsyncFetchHandler(
    GET_BONUS_LIST,
    result,
    dispatch
  );
};

export const GET_BONUS_INFO = 'GET_BONUS_INFO';
export const getBonusInfo = (params) => (dispatch) => {
  const result = GET(URL.getBonusInfoPath, params);
  AsyncFetchHandler(
    GET_BONUS_INFO,
    result,
    dispatch
  );
}
