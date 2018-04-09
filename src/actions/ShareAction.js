
import { POSTJSON, GET } from '../core/WS/WSHandler';
import * as URL from '../core/WS/URL';
import { push } from 'react-router-redux';
import * as RoutingURL from '../core/RoutingURL/RoutingURL';
import AsyncFetchHandler from '../core/AsyncFetchHandler';
import NotificationAction from '../common/NotificationAction';
import NotificationCenter from '../common/NotificationCenter';


// 获取分享的文章内容
export const GET_SHARE_ARTICLEINFO = 'GET_SHARE_ARTICLEINFO';
export const getShareArticleInfo = (params: Object) => (dispatch) => {
  const result = GET(URL.getShareArticleInfoPath, params);
  AsyncFetchHandler(
    GET_SHARE_ARTICLEINFO,
    result,
    dispatch
  );
};
