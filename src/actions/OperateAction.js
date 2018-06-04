
import { POSTJSON, GET } from '../core/WS/WSHandler';
import * as URL from '../core/WS/URL';
import { push, replace, goBack } from 'react-router-redux';
import * as RoutingURL from '../core/RoutingURL/RoutingURL';
import AsyncFetchHandler from '../core/AsyncFetchHandler';
import NotificationAction from '../common/NotificationAction';
import NotificationCenter from '../common/NotificationCenter';

// 获取公告列表
export const GET_NOTICE_LIST = 'GET_NOTICE_LIST';
export const getNoticeList = (params: Object) => (dispatch) => {
  const result = GET(URL.getNoticeListPath, params);
  AsyncFetchHandler(
    GET_NOTICE_LIST,
    result,
    dispatch
  );
};

// 获取公告详情
export const GET_NOTICE_INFO = 'GET_NOTICE_INFO';
export const getNoticeInfo = (params: Object) => (dispatch) => {
  const result = GET(URL.getNoticeInfoPath, params);
  AsyncFetchHandler(
    GET_NOTICE_INFO,
    result,
    dispatch
  );
};

// 新增公告
export const ADD_NOTICE_INFO = 'ADD_NOTICE_INFO';
export const addNoticeInfo = (params: Object) => (dispatch) => {
  const result = GET(URL.addNoticePath, params);
  AsyncFetchHandler(
    ADD_NOTICE_INFO,
    result,
    dispatch
  );
  result.then(data => {
    if (data.status == '200') {
      NotificationCenter.NotificationCard(
        '添加成功',
        '',
        'success',
        2,
      );
      dispatch(goBack())
    } else {
      NotificationCenter.NotificationCard(
        '添加失败',
        data.message,
        'error',
        3,
      );
    }
  });
};
// 修改公告
export const UPDATE_NOTICE_INFO = 'UPDATE_NOTICE_INFO';
export const updateNoticeInfo = (params: Object) => (dispatch) => {
  delete params.create_time;
  delete params.update_time;
  const result = GET(URL.updateNoticePath, params);
  AsyncFetchHandler(
    UPDATE_NOTICE_INFO,
    result,
    dispatch
  );
  result.then(data => {
    if (data.status == '200') {
      NotificationCenter.NotificationCard(
        '修改成功',
        '',
        'success',
        2,
      );
      dispatch(goBack())
    } else {
      NotificationCenter.NotificationCard(
        '修改失败',
        data.message,
        'error',
        3,
      );
    }
  });
};

// 删除公告
export const DELETE_NOTICE_INFO = 'DELETE_NOTICE_INFO';
export const deleteNoticeInfo = (params: Object) => (dispatch) => {
  const result = GET(URL.deleteNoticePath, params);
  AsyncFetchHandler(
    DELETE_NOTICE_INFO,
    result,
    dispatch
  );
  result.then(data => {
    if (data.status == '200') {
      NotificationCenter.NotificationCard(
        '删除成功',
        '',
        'success',
        2,
      );
      delete params.id;
      dispatch(getNoticeList(params));
    } else {
      NotificationCenter.NotificationCard(
        '删除失败',
        data.message,
        'error',
        3,
      );
    }
  });
};




// 获取公告类型列表
export const GET_NOTICE_TYPE_LIST = 'GET_NOTICE_TYPE_LIST';
export const getNoticeTypeList = (params: Object) => (dispatch) => {
  const result = GET(URL.getNoticeTypeListPath, params);
  AsyncFetchHandler(
    GET_NOTICE_TYPE_LIST,
    result,
    dispatch
  );
};

// 获取公告类型详情
export const GET_NOTICE_TYPE_INFO = 'GET_NOTICE_TYPE_INFO';
export const getNoticeTypeInfo = (params: Object) => (dispatch) => {
  dispatch({
    type: GET_NOTICE_TYPE_INFO,
    data: params,
  });
};

// 新增公告类型
export const ADD_NOTICE_TYPE_INFO = 'ADD_NOTICE_TYPE_INFO';
export const addNoticeTypeInfo = (params: Object) => (dispatch) => {
  const result = GET(URL.addNoticeTypePath, params);
  AsyncFetchHandler(
    ADD_NOTICE_TYPE_INFO,
    result,
    dispatch
  );
  result.then(data => {
    if (data.status == '200') {
      NotificationCenter.NotificationCard(
        '添加成功',
        '',
        'success',
        2,
      );
      dispatch(goBack())
    } else {
      NotificationCenter.NotificationCard(
        '添加失败',
        data.message,
        'error',
        3,
      );
    }
  });
};
// 修改公告类型
export const UPDATE_NOTICE_TYPE_INFO = 'UPDATE_NOTICE_TYPE_INFO';
export const updateNoticeTypeInfo = (params: Object) => (dispatch) => {
  delete params.create_time;
  delete params.update_time;
  const result = GET(URL.updateNoticeTypePath, params);
  AsyncFetchHandler(
    UPDATE_NOTICE_TYPE_INFO,
    result,
    dispatch
  );
  result.then(data => {
    if (data.status == '200') {
      NotificationCenter.NotificationCard(
        '修改成功',
        '',
        'success',
        2,
      );
      dispatch(goBack())
    } else {
      NotificationCenter.NotificationCard(
        '修改失败',
        data.message,
        'error',
        3,
      );
    }
  });
};

// 删除公告类型
export const DELETE_NOTICE_TYPE_INFO = 'DELETE_NOTICE_TYPE_INFO';
export const deleteNoticeTypeInfo = (params: Object) => (dispatch) => {
  const result = GET(URL.deleteNoticeTypePath, params);
  AsyncFetchHandler(
    DELETE_NOTICE_TYPE_INFO,
    result,
    dispatch
  );
  result.then(data => {
    if (data.status == '200') {
      NotificationCenter.NotificationCard(
        '删除成功',
        '',
        'success',
        2,
      );
      delete params.id;
      dispatch(getNoticeTypeList(params));
    } else {
      NotificationCenter.NotificationCard(
        '删除失败',
        data.message,
        'error',
        3,
      );
    }
  });
};
