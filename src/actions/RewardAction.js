
import { POSTJSON, GET } from '../core/WS/WSHandler';
import * as URL from '../core/WS/URL';
import { push, replace } from 'react-router-redux';
import * as RoutingURL from '../core/RoutingURL/RoutingURL';
import AsyncFetchHandler from '../core/AsyncFetchHandler';
import NotificationAction from '../common/NotificationAction';
import NotificationCenter from '../common/NotificationCenter';

export const GET_REWARD_LIST = 'GET_REWARD_LIST';
export const getRewardList = (params: Object) => (dispatch) => {
  const result = GET(URL.getRewardListPath, params);
  AsyncFetchHandler(
    GET_AREA_LIST,
    result,
    dispatch
  );
};

// export const GET_REWARD_INFO = 'GET_REWARD_INFO';
// export const getRewardInfo = (params: Object) => (dispatch) => {
//   const result = GET(URL.getRewardInfoPath, params);
//   AsyncFetchHandler(
//     GET_REWARD_INFO,
//     result,
//     dispatch
//   );
// };
