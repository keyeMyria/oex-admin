
import { POSTJSON, GET } from '../core/WS/WSHandler';
import * as URL from '../core/WS/URL';
import { push, replace } from 'react-router-redux';
import * as RoutingURL from '../core/RoutingURL/RoutingURL';
import AsyncFetchHandler from '../core/AsyncFetchHandler';
import NotificationAction from '../common/NotificationAction';
import NotificationCenter from '../common/NotificationCenter';

// 获取币种列表
export const GET_CURRENCYLIST = 'GET_CURRENCYLIST';
export const getCurrencyList = (params: Object) => (dispatch) => {
  const result = GET(URL.getCurrencyListPath, params);
  AsyncFetchHandler(
    GET_CURRENCYLIST,
    result,
    dispatch
  );
};

// 获取币种内容
export const GET_EXPERIENCEINFO = 'GET_EXPERIENCEINFO';
export const getCurrencyInfo = (params: Object) => (dispatch) => {
  const result = GET(URL.getCurrencyInfoPath, params);
  result.then((data) => {
    if(data.code === '0') {
      dispatch(getCurrencyConetnt({url: data.data.contentOss}));
    }
  })
  AsyncFetchHandler(
    GET_EXPERIENCEINFO,
    result,
    dispatch
  );
};
// 获取币种内容
export const getCurrencyMobileInfo = (params: Object) => (dispatch) => {
  const result = GET(URL.getCurrencyMobileInfoPath, params);
  result.then((data) => {
    if(data.code === '0') {
      dispatch(getCurrencyConetnt({url: data.data.contentOss}));
    }
  })
  AsyncFetchHandler(
    GET_EXPERIENCEINFO,
    result,
    dispatch
  );
};


// 保存或更新币种
export const UPDATE_EXPERIENCEINFO = 'UPDATE_EXPERIENCEINFO';
export const updateCurrencyInfo = (params: Object) => (dispatch) => {
  const result = POSTJSON(URL.updateCurrencyInfoPath, params);
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
        dispatch(push(RoutingURL.CurrencyList()));
      } else if (params.style === 2) {
        dispatch(push(RoutingURL.CurrencyListDoctor()));
      } else if (params.style === 3) {
        dispatch(push(RoutingURL.CurrencyListMedicine()));
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
export const deleteCurrencyInfo = (params: Object) => (dispatch) => {
  const result = GET(URL.deleteCurrencyInfoPath, { id: params.deleteId });
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
      dispatch(getCurrencyList(params));
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
export const getCurrencyConetnt = (params) => (dispatch) => {
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
