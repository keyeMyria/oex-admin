
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
  const result = GET(URL.getCoinListPath, params);
  AsyncFetchHandler(
    GET_CURRENCYLIST,
    result,
    dispatch
  );
};

// 获取币种详情
export const GET_COIN_INFO = 'GET_COIN_INFO';
export const getCoinInfo = (params: Object) => (dispatch) => {
  const result = GET(URL.getCoinInfoPath, params);
  AsyncFetchHandler(
    GET_COIN_INFO,
    result,
    dispatch
  );
};

// 新增币种详情
export const ADD_COIN_INFO = 'ADD_COIN_INFO';
export const addCoinInfo = (params: Object) => (dispatch) => {
  const result = GET(URL.addCoinInfoPath, params);
  AsyncFetchHandler(
    ADD_COIN_INFO,
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

// 修改币种详情
export const UPDATE_COIN_INFO = 'UPDATE_COIN_INFO';
export const updateCoinInfo = (params: Object) => (dispatch) => {
  const result = GET(URL.updateCoinInfoPath, params);
  AsyncFetchHandler(
    UPDATE_COIN_INFO,
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

// 删除币种详情
export const DELETE_COIN_INFO = 'DELETE_COIN_INFO';
export const deleteCoinInfo = (params: Object) => (dispatch) => {
  const result = GET(URL.deleteCoinInfoPath, params);
  AsyncFetchHandler(
    DELETE_COIN_INFO,
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
      dispatch(getCurrencyList(params))
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




// 获取币种配置列表
export const GET_COIN_CONFIG_LIST = 'GET_COIN_CONFIG_LIST';
export const getCoinConfigList = (params: Object) => (dispatch) => {
  const result = GET(URL.getCoinConfigListPath, params);
  AsyncFetchHandler(
    GET_COIN_CONFIG_LIST,
    result,
    dispatch
  );
};

// 获取币种配置详情
export const GET_COIN_CONFIG_INFO = 'GET_COIN_CONFIG_INFO';
export const getCoinConfigInfo = (params: Object) => (dispatch) => {
  const result = GET(URL.getCoinConfigInfoPath, params);
  AsyncFetchHandler(
    GET_COIN_CONFIG_INFO,
    result,
    dispatch
  );
};

// 获取币种列表
export const ADD_COIN_CONFIG_INFO = 'ADD_COIN_CONFIG_INFO';
export const addCoinConfig = (params: Object) => (dispatch) => {
  const result = GET(URL.addCoinConfigPath, params);
  AsyncFetchHandler(
    ADD_COIN_CONFIG_INFO,
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

// 获取币种列表
export const UPDATE_COIN_CONFIG_INFO = 'UPDATE_COIN_CONFIG_INFO';
export const updateCoinConfig = (params: Object) => (dispatch) => {
  const result = GET(URL.updateCoinConfigPath, params);
  AsyncFetchHandler(
    UPDATE_COIN_CONFIG_INFO,
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

// 删除币种配置
export const DELETE_COIN_CONFIG_INFO = 'DELETE_COIN_CONFIG_INFO';
export const deleteCoinConfig = (params: Object) => (dispatch) => {
  const result = GET(URL.deleteCoinConfigPath, params);
  AsyncFetchHandler(
    DELETE_COIN_CONFIG_INFO,
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
      dispatch(getCoinConfigList(params))
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
//
// // 获取币种内容
// export const GET_EXPERIENCEINFO = 'GET_EXPERIENCEINFO';
// export const getCurrencyInfo = (params: Object) => (dispatch) => {
//   const result = GET(URL.getCurrencyInfoPath, params);
//   result.then((data) => {
//     if(data.code === '0') {
//       dispatch(getCurrencyConetnt({url: data.data.contentOss}));
//     }
//   })
//   AsyncFetchHandler(
//     GET_EXPERIENCEINFO,
//     result,
//     dispatch
//   );
// };
// // 获取币种内容
// export const getCurrencyMobileInfo = (params: Object) => (dispatch) => {
//   const result = GET(URL.getCurrencyMobileInfoPath, params);
//   result.then((data) => {
//     if(data.code === '0') {
//       dispatch(getCurrencyConetnt({url: data.data.contentOss}));
//     }
//   })
//   AsyncFetchHandler(
//     GET_EXPERIENCEINFO,
//     result,
//     dispatch
//   );
// };
//
//
// // 保存或更新币种
// export const UPDATE_EXPERIENCEINFO = 'UPDATE_EXPERIENCEINFO';
// export const updateCurrencyInfo = (params: Object) => (dispatch) => {
//   const result = POSTJSON(URL.updateCurrencyInfoPath, params);
//   AsyncFetchHandler(
//     UPDATE_EXPERIENCEINFO,
//     result,
//     dispatch
//   );
//   result.then(data => {
//     if (data.code === '0') {
//       NotificationCenter.NotificationCard(
//         '保存成功',
//         '',
//         'success',
//         2,
//       );
//       if (params.style === 1) {
//         dispatch(push(RoutingURL.CurrencyList()));
//       } else if (params.style === 2) {
//         dispatch(push(RoutingURL.CurrencyListDoctor()));
//       } else if (params.style === 3) {
//         dispatch(push(RoutingURL.CurrencyListMedicine()));
//       }
//     } else {
//       NotificationCenter.NotificationCard(
//         '保存失败',
//         '请填写正确的题目信息',
//         'error',
//         3,
//       );
//     }
//   });
// };
// // 删除题目
// export const DELETE_EXPERIENCEINFO = 'DELETE_EXPERIENCEINFO';
// export const deleteCurrencyInfo = (params: Object) => (dispatch) => {
//   const result = GET(URL.deleteCurrencyInfoPath, { id: params.deleteId });
//   AsyncFetchHandler(
//     DELETE_EXPERIENCEINFO,
//     result,
//     dispatch
//   );
//   result.then(data => {
//     if (data.code === '0') {
//       NotificationCenter.NotificationCard(
//         '删除成功',
//         '',
//         'success',
//         2,
//       );
//       dispatch(getCurrencyList(params));
//     } else {
//       NotificationCenter.NotificationCard(
//         '删除失败',
//         data.message,
//         'error',
//         3,
//       );
//     }
//   });
// };
//
// export const GET_EXPERIENCECONTENT = 'GET_EXPERIENCECONTENT';
// export const getCurrencyConetnt = (params) => (dispatch) => {
//   dispatch({
//     type: 'GET_EXPERIENCECONTENT_REQUEST',
//   });
//   const result = fetch(params.url, {
//     method: 'GET',
//     mode: 'cors',
//     headers: {
//       "Access-Control-Allow-Origin": "*",
//     }
//   }).then(data => {
//       if(data.ok) {
//         data.json().then(result => {
//           dispatch({
//             type: 'GET_EXPERIENCECONTENT_SUCCESS',
//             data: result,
//           });
//         })
//       } else {
//         dispatch({
//           type: 'GET_EXPERIENCECONTENT_FAILURE',
//         });
//       }
//     }, (err) => console.log(err));
// };
