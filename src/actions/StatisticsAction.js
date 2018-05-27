
import { POSTJSON, GET } from '../core/WS/WSHandler';
import * as URL from '../core/WS/URL';
import { push, replace } from 'react-router-redux';
import * as RoutingURL from '../core/RoutingURL/RoutingURL';
import AsyncFetchHandler from '../core/AsyncFetchHandler';
import NotificationAction from '../common/NotificationAction';
import NotificationCenter from '../common/NotificationCenter';

export const GET_STATISTICS_INFO = 'GET_STATISTICS_INFO';
export const getStatisticsInfo = (params: Object) => (dispatch) => {
  const result = GET(URL.getStatisticsInfoPath, params);
  AsyncFetchHandler(
    GET_STATISTICS_INFO,
    result,
    dispatch
  );
};
