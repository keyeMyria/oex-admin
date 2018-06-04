
import { POSTJSON, GET } from '../core/WS/WSHandler';
import * as URL from '../core/WS/URL';
import { push, replace, goBack } from 'react-router-redux';
import * as RoutingURL from '../core/RoutingURL/RoutingURL';
import AsyncFetchHandler from '../core/AsyncFetchHandler';
import NotificationAction from '../common/NotificationAction';
import NotificationCenter from '../common/NotificationCenter';

// 交易区列表
export const GET_AREA_LIST = 'GET_AREA_LIST';
export const getAreaList = (params: Object) => (dispatch) => {
  const result = GET(URL.getAreaListPath, params);
  AsyncFetchHandler(
    GET_AREA_LIST,
    result,
    dispatch
  );
};

// 交易区详情
export const GET_AREA_INFO = 'GET_AREA_INFO';
export const getAreaInfo = (params: Object) => (dispatch) => {
  const result = GET(URL.getAreaInfoPath, params);
  AsyncFetchHandler(
    GET_AREA_INFO,
    result,
    dispatch
  );
};

// 交易区修改
export const UPDATE_AREA_INFO = 'UPDATE_AREA_INFO';
export const updateAreaInfo = (params: Object) => (dispatch) => {
  const result = GET(URL.updateAreaInfoPath, params);
  AsyncFetchHandler(
    UPDATE_AREA_INFO,
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

// 交易区添加
export const ADD_AREA_INFO = 'ADD_AREA_INFO';
export const addAreaInfo = (params: Object) => (dispatch) => {
  const result = GET(URL.addAreaInfoPath, params);
  AsyncFetchHandler(
    ADD_AREA_INFO,
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

// 交易区删除
export const DELETE_AREA = 'DELETE_AREA';
export const deleteAreaInfo = (params: Object) => (dispatch) => {
  const result = GET(URL.deleteAreaInfoPath, params);
  AsyncFetchHandler(
    DELETE_AREA,
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
      dispatch(getAreaList(params));
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

// 交易对列表
export const GET_PAIR_LIST = 'GET_PAIR_LIST';
export const getPairList = (params) => (dispatch) => {
  const result = GET(URL.getPairListPath, params);
  AsyncFetchHandler(
    GET_PAIR_LIST,
    result,
    dispatch
  );
}


// 交易对详情
export const GET_PAIR_INFO = 'GET_PAIR_INFO';
export const getPairInfo = (params) => (dispatch) => {
  const result = GET(URL.getPairInfoPath, params);
  AsyncFetchHandler(
    GET_PAIR_INFO,
    result,
    dispatch
  );
}

// 交易对添加
export const ADD_PAIR_INFO = 'ADD_PAIR_INFO';
export const addPairInfo = (params) => (dispatch) => {
  const result = GET(URL.addPairInfoPath, params);
  AsyncFetchHandler(
    ADD_PAIR_INFO,
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
}


// 交易对修改
export const UPDATE_PAIR_INFO = 'UPDATE_PAIR_INFO';
export const updatePairInfo = (params) => (dispatch) => {
  const result = GET(URL.updatePairInfoPath, params);
  AsyncFetchHandler(
    UPDATE_PAIR_INFO,
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
}


// 交易对删除
export const DELETE_PAIR_INFO = 'DELETE_PAIR_INFO';
export const deletePairInfo = (params) => (dispatch) => {
  const result = GET(URL.deletePairPath, params);
  AsyncFetchHandler(
    DELETE_PAIR_INFO,
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
      dispatch(getPairList(params));
    } else {
      NotificationCenter.NotificationCard(
        '删除失败',
        data.message,
        'error',
        3,
      );
    }
  });
}
