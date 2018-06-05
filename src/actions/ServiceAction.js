
import { POSTJSON, GET } from '../core/WS/WSHandler';
import * as URL from '../core/WS/URL';
import { push, replace } from 'react-router-redux';
import * as RoutingURL from '../core/RoutingURL/RoutingURL';
import AsyncFetchHandler from '../core/AsyncFetchHandler';
import NotificationAction from '../common/NotificationAction';
import NotificationCenter from '../common/NotificationCenter';

// 获取工单列表
export const GET_WORK_ORDERS = 'GET_WORK_ORDERS';
export const getWorkOrders = (params: Object) => (dispatch) => {
  const result = GET(URL.getWorkOrdersPath, params);
  AsyncFetchHandler(
    GET_WORK_ORDERS,
    result,
    dispatch
  );
};

// 获取工单详情
export const GET_WORK_ORDER_INFO = 'GET_WORK_ORDER_INFO';
export const getWorkOrderInfo = (params) => (dispatch) => {
  const result = GET(URL.getWorkOrderInfoPath, params);
  AsyncFetchHandler(
    GET_WORK_ORDER_INFO,
    result,
    dispatch
  );
}

// 回复工单详情
export const REPLY_ORDER_INFO = 'REPLY_ORDER_INFO';
export const replyWorkOrder = (params) => (dispatch) => {
  const result = GET(URL.replyWorkOrderInfoPath, params);
  AsyncFetchHandler(
    REPLY_ORDER_INFO,
    result,
    dispatch
  );
}
