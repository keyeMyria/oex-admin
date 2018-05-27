
import { POSTJSON, GET } from '../core/WS/WSHandler';
import * as URL from '../core/WS/URL';
import { push, replace } from 'react-router-redux';
import * as RoutingURL from '../core/RoutingURL/RoutingURL';
import AsyncFetchHandler from '../core/AsyncFetchHandler';
import NotificationAction from '../common/NotificationAction';
import NotificationCenter from '../common/NotificationCenter';

export const GET_NOTICE_LIST = 'GET_NOTICE_LIST';
export const getNoticeList = (params: Object) => (dispatch) => {
  const result = GET(URL.getNoticeLisPath, params);
  AsyncFetchHandler(
    GET_NOTICE_LIST,
    result,
    dispatch
  );
};

export const GET_NOTICE_INFO = 'GET_NOTICE_INFO';
export const getNoticeInfo = (params: Object) => (dispatch) => {
  const result = GET(URL.getNoticeInfoPath, params);
  AsyncFetchHandler(
    GET_NOTICE_INFO,
    result,
    dispatch
  );
};

// export const GET_PAIR_LIST = 'GET_PAIR_LIST';
// export const getPairList = (params) => (dispatch) => {
//   const result = GET(URL.getPairListPath, params);
//   AsyncFetchHandler(
//     GET_PAIR_LIST,
//     result,
//     dispatch
//   );
// }
//
// export const GET_PAIR_INFO = 'GET_PAIR_INFO';
// export const getPairInfo = (params) => (dispatch) => {
//   const result = GET(URL.getPairInfoPath, params);
//   AsyncFetchHandler(
//     GET_PAIR_INFO,
//     result,
//     dispatch
//   );
// }
