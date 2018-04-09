
import { POSTJSON, GET } from '../core/WS/WSHandler';
import * as URL from '../core/WS/URL';
import { push, replace } from 'react-router-redux';
import * as RoutingURL from '../core/RoutingURL/RoutingURL';
import AsyncFetchHandler from '../core/AsyncFetchHandler';
import NotificationAction from '../common/NotificationAction';
import NotificationCenter from '../common/NotificationCenter';

// 获取题目列表
export const GET_ARTICLELIST = 'GET_ARTICLELIST';
export const getArticleList = (params: Object) => (dispatch) => {
  const result = GET(URL.getArticleListPath, params);
  AsyncFetchHandler(
    GET_ARTICLELIST,
    result,
    dispatch
  );
};

// 获取题目内容
export const GET_ARTICLEINFO = 'GET_ARTICLEINFO';
export const getArticleInfo = (params: Object) => (dispatch) => {
  const result = GET(URL.getArticleInfoPath, params);
  result.then((data) => {
    if(data.code === '0') {
      dispatch(getArticleConetnt({
        url: data.data.ossUrl, id: data.data.id, updateTime: data.data.updateTime}));
    }
  })
  AsyncFetchHandler(
    GET_ARTICLEINFO,
    result,
    dispatch
  );
};

// 保存题目
export const UPDATE_ARTICLEINFO = 'UPDATE_ARTICLEINFO';
export const updateArticleInfo = (params: Object) => (dispatch) => {
  const result = POSTJSON(URL.updateArticleInfoPath, params);
  AsyncFetchHandler(
    UPDATE_ARTICLEINFO,
    result,
    dispatch
  );
  result.then(data => {
    if (data.code === '0') {
      NotificationCenter.NotificationCard(
        '保存成功',
        '',
        'success',
        2,
      );
      dispatch(push(RoutingURL.ArticleList()));
    } else {
      NotificationCenter.NotificationCard(
        '保存失败',
        '请填写正确的题目信息',
        'error',
        3,
      );
    }
  });
};
// 删除题目
export const SELETE_ARTICLEINFO = 'SELETE_ARTICLEINFO';
export const deleteArticleInfo = (params: Object) => (dispatch) => {
  const result = GET(URL.deleteArticleInfoPath, { id: params.deleteId });
  AsyncFetchHandler(
    SELETE_ARTICLEINFO,
    result,
    dispatch
  );
  result.then(data => {
    if (data.code === '0') {
      NotificationCenter.NotificationCard(
        '删除成功',
        '',
        'success',
        2,
      );
      dispatch(getArticleList(params));
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

// 从oss读取题目正文
export const GET_ARTICLECONTENT = 'GET_ARTICLECONTENT';

export const getArticleConetnt = (params) => (dispatch) => {
  dispatch({
    type: 'GET_ARTICLECONTENT_REQUEST',
  });
  const result = fetch(params.url, {
    method: 'GET',
    mode: 'cors',
    headers: {
      "Access-Control-Allow-Origin": "*",
    }
  }).then(data => {
      if(data.ok) {
        data.json().then(result => {
          dispatch({
            type: 'GET_ARTICLECONTENT_SUCCESS',
            data: result,
            param: params,
          });
        })
      } else {
        dispatch({
          type: 'GET_ARTICLECONTENT_FAILURE',
        });
      }
    }, (err) => console.log(err));
};

export const GET_COURSE_LIST = 'GET_COURSE_LIST';
export const getCourseList = params => dispatch => {
  const result = GET(URL.getCourseListPath, params);
  AsyncFetchHandler(
    GET_COURSE_LIST,
    result,
    dispatch
  );
}

// 年份列表
export const GET_YEAR_LIST = 'GET_YEAR_LIST';
export const getYearList = params => dispatch => {
  const result = GET(URL.getYearListPath, params);
  AsyncFetchHandler(
    GET_YEAR_LIST,
    result,
    dispatch
  );
}
