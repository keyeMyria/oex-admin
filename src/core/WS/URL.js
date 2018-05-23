/* @flow */
let rootURL: string = '/api/';
if(process.env.NODE_ENV === 'production') {
  rootURL = 'http://54.255.206.178:8080/api/';
}


// 获取OSS签名
export const GetOSSSignature: string = `${rootURL}oss/web/sign`;

/**
 * 登录地址
 * @type {string}
 */
export const LoginPath: string = `${rootURL}user/admin/user/login`;
/**
 * 登出地址
 * @type {string}
 */
export const LogoutPath: string = `${rootURL}user/admin/user/exit`;
/**
 * 获取题目列表
 * @type {string}
 */
export const getArticleListPath: string = `${rootURL}admin/subject/list`;
/**
 * 获取题目内容
 * @type {string}
 */
export const getArticleInfoPath: string = `${rootURL}admin/subject/getById`;
/**
 * 保存题目
 * @type {string}
 */
export const updateArticleInfoPath: string = `${rootURL}admin/subject/addOrUpdate`;
/**
/**
 * 删除题目
 * @type {string}
 */
export const deleteArticleInfoPath: string = `${rootURL}admin/subject/deleteById`;
/**
 * 获取用户列表
 * @type {string}
 */
export const getUserListPath: string = `${rootURL}admin/listUser`;
// /**
//  * 获取用户内容
//  * @type {string}
//  */
// export const getUserInfoPath: string = `${rootURL}admin/subject/getById`;
/**
 * 保存用户
 * @type {string}
 */
export const updateUserInfoPath: string = `${rootURL}admin/addUser`;
/**
/**
 * 删除用户
 * @type {string}
 */
export const deleteUserInfoPath: string = `${rootURL}admin/deleteUser`;

/**
 * 获取经验列表
 * @type {string}
 */
export const getExperienceListPath: string = `${rootURL}admin/experience/list`;
/**
 * 获取经验详情
 * @type {string}
 */
export const getExperienceInfoPath: string = `${rootURL}admin/experience/detail`;
export const getExperienceMobileInfoPath: string = `${rootURL}common/detail`;
/**
 * 删除经验
 * @type {string}
 */
export const deleteExperienceInfoPath: string = `${rootURL}admin/experience/deleteById`;
/**
 * 保存或更新经验
 * @type {string}
 */
export const updateExperienceInfoPath: string = `${rootURL}admin/experience/addOrUpdate`;

/**
 * 获取c端用户列表
 * @type {[type]}
 */
export const getPeopleListPath = `${rootURL}admin/user/list`;
/**
 * 获取c端用户详情
 * @type {[type]}
 */
export const getPeopleInfoPath = `${rootURL}admin/user/detail`;


// 配置页面
/**
 * 设置经验推荐
 * @type {[type]}
 */
export const setExperienceRecommendPath = `${rootURL}admin/experience/recommend`;
/**
 * 获取经验推荐
 * @type {[type]}
 */
export const getExperienceRecommendPath = `${rootURL}admin/experience/ids`;

export const getCourseListPath = `${rootURL}course/list`;
export const getAdviceListPath = `${rootURL}common/list`;

export const getBannerListPath = `${rootURL}admin/banner/list`;
export const updateBannerPath = `${rootURL}admin/banner/addOrUpdate`;

export const getYearListPath = `${rootURL}common/list`;
