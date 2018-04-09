import { POSTJSON, GET } from '../core/WS/WSHandler';
import * as URL from '../core/WS/URL';
import { push, replace } from 'react-router-redux';
import * as RoutingURL from '../core/RoutingURL/RoutingURL';
import AsyncFetchHandler from '../core/AsyncFetchHandler';
import NotificationAction from '../common/NotificationAction';
import NotificationCenter from '../common/NotificationCenter';

// 获取banner列表
export const GET_BANNER_LIST = 'GET_BANNER_LIST';
export const getBannerList = (params) => (dispatch) => {
  const result = GET(URL.getBannerListPath, params);
  AsyncFetchHandler(
    GET_BANNER_LIST,
    result,
    dispatch
  );
};

// 设置开屏页广告
export const UPDATE_BANNER = 'UPDATE_BANNER';
export const updateBanner = (params) => (dispatch) => {
  const result = POSTJSON(URL.updateBannerPath, params);
  AsyncFetchHandler(
    UPDATE_BANNER,
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
    } else {
      NotificationCenter.NotificationCard(
        '保存失败',
        'error',
        3,
      );
    }
  });
}

// 设置经验推荐
export const SET_EXPERIENCE_RECOMMEND = 'SET_EXPERIENCE_RECOMMEND';
export const setExperienceRecommend = (params) => (dispatch) => {
  const result = POSTJSON(URL.setExperienceRecommendPath, params);
  AsyncFetchHandler(
    SET_EXPERIENCE_RECOMMEND,
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
    } else {
      NotificationCenter.NotificationCard(
        '保存失败',
        '请填写正确的id',
        'error',
        3,
      );
    }
  });
}
// 获取西医综合-经验推荐
export const GET_EXPERIENCE_RECOMMEND = 'GET_EXPERIENCE_RECOMMEND';
export const getExperienceRecommend = (params) => (dispatch) => {
  const result = GET(URL.getExperienceRecommendPath, params);
  AsyncFetchHandler(
    GET_EXPERIENCE_RECOMMEND,
    result,
    dispatch
  );
};
// 获取执业医师-经验推荐
export const GET_EXPERIENCE_RECOMMEND_DOCTOR = 'GET_EXPERIENCE_RECOMMEND_DOCTOR';
export const getExperienceRecommendDoctor = (params) => (dispatch) => {
  const result = GET(URL.getExperienceRecommendPath, params);
  AsyncFetchHandler(
    GET_EXPERIENCE_RECOMMEND_DOCTOR,
    result,
    dispatch
  );
};
// 获取经验推荐
export const GET_EXPERIENCE_RECOMMEND_MEDICINE = 'GET_EXPERIENCE_RECOMMEND_MEDICINE';
export const getExperienceRecommendMedicine = (params) => (dispatch) => {
  const result = GET(URL.getExperienceRecommendPath, params);
  AsyncFetchHandler(
    GET_EXPERIENCE_RECOMMEND_MEDICINE,
    result,
    dispatch
  );
};
