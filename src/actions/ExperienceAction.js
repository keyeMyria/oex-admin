
import { POSTJSON, GET } from '../core/WS/WSHandler';
import * as URL from '../core/WS/URL';
import { push, replace } from 'react-router-redux';
import * as RoutingURL from '../core/RoutingURL/RoutingURL';
import AsyncFetchHandler from '../core/AsyncFetchHandler';
import NotificationAction from '../common/NotificationAction';
import NotificationCenter from '../common/NotificationCenter';

// 获取经验列表
export const GET_EXPERIENCELIST = 'GET_EXPERIENCELIST';
export const getExperienceList = (params: Object) => (dispatch) => {
  const result = GET(URL.getExperienceListPath, params);
  AsyncFetchHandler(
    GET_EXPERIENCELIST,
    result,
    dispatch
  );
};

// 获取经验内容
export const GET_EXPERIENCEINFO = 'GET_EXPERIENCEINFO';
export const getExperienceInfo = (params: Object) => (dispatch) => {
  const result = GET(URL.getExperienceInfoPath, params);
  result.then((data) => {
    if(data.code === '0') {
      dispatch(getExperienceConetnt({url: data.data.contentOss}));
    }
  })
  AsyncFetchHandler(
    GET_EXPERIENCEINFO,
    result,
    dispatch
  );
};
// 获取经验内容
export const getExperienceMobileInfo = (params: Object) => (dispatch) => {
  const result = GET(URL.getExperienceMobileInfoPath, params);
  result.then((data) => {
    if(data.code === '0') {
      dispatch(getExperienceConetnt({url: data.data.contentOss}));
    }
  })
  AsyncFetchHandler(
    GET_EXPERIENCEINFO,
    result,
    dispatch
  );
};


// 保存或更新经验
export const UPDATE_EXPERIENCEINFO = 'UPDATE_EXPERIENCEINFO';
export const updateExperienceInfo = (params: Object) => (dispatch) => {
  const result = POSTJSON(URL.updateExperienceInfoPath, params);
  AsyncFetchHandler(
    UPDATE_EXPERIENCEINFO,
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
      if (params.style === 1) {
        dispatch(push(RoutingURL.ExperienceList()));
      } else if (params.style === 2) {
        dispatch(push(RoutingURL.ExperienceListDoctor()));
      } else if (params.style === 3) {
        dispatch(push(RoutingURL.ExperienceListMedicine()));
      }
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
export const DELETE_EXPERIENCEINFO = 'DELETE_EXPERIENCEINFO';
export const deleteExperienceInfo = (params: Object) => (dispatch) => {
  const result = GET(URL.deleteExperienceInfoPath, { id: params.deleteId });
  AsyncFetchHandler(
    DELETE_EXPERIENCEINFO,
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
      dispatch(getExperienceList(params));
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

export const GET_EXPERIENCECONTENT = 'GET_EXPERIENCECONTENT';
export const getExperienceConetnt = (params) => (dispatch) => {
  dispatch({
    type: 'GET_EXPERIENCECONTENT_REQUEST',
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
            type: 'GET_EXPERIENCECONTENT_SUCCESS',
            data: result,
          });
        })
      } else {
        dispatch({
          type: 'GET_EXPERIENCECONTENT_FAILURE',
        });
      }
    }, (err) => console.log(err));
};
