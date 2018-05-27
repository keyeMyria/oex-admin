
import { POSTJSON, GET } from '../core/WS/WSHandler';
import * as URL from '../core/WS/URL';
import { push, replace } from 'react-router-redux';
import * as RoutingURL from '../core/RoutingURL/RoutingURL';
import AsyncFetchHandler from '../core/AsyncFetchHandler';
import NotificationAction from '../common/NotificationAction';
import NotificationCenter from '../common/NotificationCenter';

export const GET_RECHARGE_BY_COIN = 'GET_RECHARGE_BY_COIN';
export const getRechargeRecordByCoin = (params: Object) => (dispatch) => {
  const result = GET(URL.getRechargeRecordByCoinPath, params);
  AsyncFetchHandler(
    GET_RECHARGE_BY_COIN,
    result,
    dispatch
  );
};

export const GET_WITHDRAW_BY_COIN = 'GET_WITHDRAW_BY_COIN';
export const getWithdrawRecordByCoin = (params: Object) => (dispatch) => {
  const result = GET(URL.getWithdrawRecordByCoinPath, params);
  AsyncFetchHandler(
    GET_WITHDRAW_BY_COIN,
    result,
    dispatch
  );
};

export const GET_RECHARGE_BY_USER = 'GET_RECHARGE_BY_USER';
export const getRechargeRecordByUser = (params: Object) => (dispatch) => {
  const result = GET(URL.getRechargeRecordByUserPath, params);
  AsyncFetchHandler(
    GET_RECHARGE_BY_USER,
    result,
    dispatch
  );
};

export const GET_WITHDRAW_BY_USER = 'GET_WITHDRAW_BY_USER';
export const getWithdrawRecordByUser = (params: Object) => (dispatch) => {
  const result = GET(URL.getWithdrawRecordByUserPath, params);
  AsyncFetchHandler(
    GET_WITHDRAW_BY_USER,
    result,
    dispatch
  );
};
