
import { POSTJSON, GET } from '../core/WS/WSHandler';
import * as URL from '../core/WS/URL';
import { push, replace } from 'react-router-redux';
import * as RoutingURL from '../core/RoutingURL/RoutingURL';
import AsyncFetchHandler from '../core/AsyncFetchHandler';
import NotificationAction from '../common/NotificationAction';
import NotificationCenter from '../common/NotificationCenter';

// 获取意见反馈列表
export const GET_ADVICE_LIST = 'GET_ADVICE_LIST';
export const getAdviceList = (params) => (dispatch) => {
  const result = GET(URL.getAdviceListPath, params);
  AsyncFetchHandler(
    GET_ADVICE_LIST,
    result,
    dispatch
  );
};
