
import { POSTJSON, GET } from '../core/WS/WSHandler';
import * as URL from '../core/WS/URL';
import { push, replace } from 'react-router-redux';
import * as RoutingURL from '../core/RoutingURL/RoutingURL';
import AsyncFetchHandler from '../core/AsyncFetchHandler';
import NotificationAction from '../common/NotificationAction';
import NotificationCenter from '../common/NotificationCenter';

export const GET_USER_ASSETS = 'GET_USER_ASSETS';
export const getUserAssets = (params: Object) => (dispatch) => {
  const result = GET(URL.getUserAssetsPath, params);
  AsyncFetchHandler(
    GET_USER_ASSETS,
    result,
    dispatch
  );
};

export const GET_USER_COIN = 'GET_USER_COIN';
export const getUserCoins = (params: Object) => (dispatch) => {
  const result = GET(URL.getUserCoinsPath, params);
  AsyncFetchHandler(
    GET_USER_COIN,
    result,
    dispatch
  );
};
