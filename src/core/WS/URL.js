/* @flow */
let rootURL: string = '/api/';
if(process.env.NODE_ENV === 'production') {
  rootURL = 'https://admin-test.oex.com/api/';
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
 * 获取用户列表
 * @type {string}
 */
export const getUserListPath: string = `${rootURL}user/admin/user/listAdminUser`;

/**
 * 保存用户
 * @type {string}
 */
export const addUserInfoPath: string = `${rootURL}user/admin/user/addUser`;
/**
 * 更新用户
 * @type {string}
 */
export const updateUserInfoPath: string = `${rootURL}user/admin/user/updateUser`;
/**
/**
 * 删除用户
 * @type {string}
 */
export const deleteUserInfoPath: string = `${rootURL}user/admin/user/delUser`;


/**
 * 获取角色列表
 * @type {string}
 */
export const getRoleListPath: string = `${rootURL}user/admin/user/listRole`;

/**
 * 保存角色
 * @type {string}
 */
export const addRolePath: string = `${rootURL}user/admin/user/addRole`;
/**
 * 更新角色
 * @type {string}
 */
export const updateRolePath: string = `${rootURL}user/admin/user/updateRole`;
/**
/**
 * 删除角色
 * @type {string}
 */
export const deleteRolePath: string = `${rootURL}user/admin/user/delRole`;
/**
 * 获取权限列表
 * @type {string}
 */
export const getListPrivilegePath: string = `${rootURL}user/admin/user/listPrivilege`;



/**
 * C端用户列表
 * @type {string}
 */
export const getCuserListPath: string = `${rootURL}user/admin/user/c/listUser`;
/**
 * C端用户锁定/解锁用户
 * @type {string}
 */
export const cuserLockingPath: string = `${rootURL}user/admin/user/c/locking`;
/**
 * 获取c端用户详情
 * @type {[type]}
 */
// export const getPeopleInfoPath = `${rootURL}admin/user/detail`;



/**
 * 获取交易区列表
 * @type {string}
 */
export const getAreaListPath: string = `${rootURL}user/admin/trade_zone/list`;

/**
 * 获取交易区详情
 * @type {string}
 */
export const getAreaInfoPath: string = `${rootURL}user/admin/trade_zone/info`;

/**
 * 交易区修改
 * @type {string}
 */
export const updateAreaInfoPath: string = `${rootURL}user/admin/trade_zone/update`;
/**
 * 交易区添加
 * @type {string}
 */
export const addAreaInfoPath: string = `${rootURL}user/admin/trade_zone/add`;
/**
 * 交易区删除
 * @type {string}
 */
export const deleteAreaInfoPath: string = `${rootURL}user/admin/trade_zone/delete`;


/**
 * 获取交易对列表
 * @type {[type]}
 */
export const getPairListPath = `${rootURL}user/admin/trade_coin_pair/list`;

/**
 * 获取交易对详情
 * @type {[type]}
 */
export const getPairInfoPath = `${rootURL}user/admin/trade_coin_pair/info`;
/**
 * 交易对新增
 * @type {[type]}
 */
export const addPairInfoPath = `${rootURL}user/admin/trade_coin_pair/add`;
/**
 * 交易对修改
 * @type {[type]}
 */
export const updatePairInfoPath = `${rootURL}user/admin/trade_coin_pair/update`;
/**
 * 交易对删除
 * @type {[type]}
 */
export const deletePairPath = `${rootURL}user/admin/trade_coin_pair/delete`;



/**
 * 获取公告类型列表
 * @type {string}
 */
export const getNoticeTypeListPath: string = `${rootURL}user/admin/noticeType/list`;
/**
 * 修改公告类型
 * @type {string}
 */
export const updateNoticeTypePath: string = `${rootURL}user/admin/noticeType/update`;
/**
 * 新增公告类型
 * @type {string}
 */
export const addNoticeTypePath: string = `${rootURL}user/admin/noticeType/add`;
/**
 * 删除公告类型
 * @type {string}
 */
export const deleteNoticeTypePath: string = `${rootURL}user/admin/noticeType/del`;

/**
 * 获取公告列表
 * @type {string}
 */
export const getNoticeListPath: string = `${rootURL}user/admin/notice/list`;
/**
 * 获取公告详情
 * @type {string}
 */
export const getNoticeInfoPath: string = `${rootURL}user/admin/notice/info`;
/**
 * 新增公告
 * @type {string}
 */
export const addNoticePath: string = `${rootURL}user/admin/notice/add`;
/**
 * 修改公告
 * @type {string}
 */
export const updateNoticePath: string = `${rootURL}user/admin/notice/update`;
/**
 * 删除公告
 * @type {string}
 */
export const deleteNoticePath: string = `${rootURL}user/admin/notice/del`;



/**
 * 获取币种信息列表
 * @type {string}
 */
export const getCoinListPath: string = `${rootURL}user/admin/coin/list`;
/**
 * 获取币种信息详情
 * @type {string}
 */
export const getCoinInfoPath: string = `${rootURL}user/admin/coin/info`;
/**
 * 修改币种信息
 * @type {string}
 */
export const updateCoinInfoPath: string = `${rootURL}user/admin/coin/update`;
/**
 * 新增币种信息
 * @type {string}
 */
export const addCoinInfoPath: string = `${rootURL}user/admin/coin/add`;
/**
 * 删除币种信息
 * @type {string}
 */
export const deleteCoinInfoPath: string = `${rootURL}user/admin/coin/delete`;

/**
 * 获取币种配置列表
 * @type {string}
 */
export const getCoinConfigListPath: string = `${rootURL}user/admin/coin_config/list`;
/**
 * 获取币种配置信息
 * @type {string}
 */
export const getCoinConfigInfoPath: string = `${rootURL}user/admin/coin_config/info`;
/**
 * 新增币种配置
 * @type {string}
 */
export const addCoinConfigPath: string = `${rootURL}user/admin/coin_config/add`;
/**
 * 修改币种配置
 * @type {string}
 */
export const updateCoinConfigPath: string = `${rootURL}user/admin/coin_config/update`;
/**
 * 删除币种配置
 * @type {string}
 */
export const deleteCoinConfigPath: string = `${rootURL}user/admin/coin_config/delete`;



/**
 * 获取工单列表
 * @type {string}
 */
export const getWorkOrdersPath: string = `${rootURL}user/admin/workOrder/listWorkOrder`;
/**
 * 获取工单详情
 * @type {string}
 */
export const getWorkOrderInfoPath: string = `${rootURL}user/admin/workOrder/info`;
/**
 * 回复或关闭工单详情
 * @type {string}
 */
export const replyWorkOrderInfoPath: string = `${rootURL}user/admin/user/workOrder`;


/**
 * 交易手续费统计
 * @type {string}
 */
export const dealOrderTotalPath: string = `${rootURL}user/admin/dealOrder/total`;
/**
 * 获取充币流水-根据提取币种查询
 * @type {string}
 */
export const getRechargeRecordByCoinPath: string = `${rootURL}user/admin/rechargeRecord/listByCoinId`;
/**
 * 获取提币流水-根据提取币种查询
 * @type {string}
 */
export const getWithdrawRecordByCoinPath: string = `${rootURL}user/admin/withdrawRecord/listByCoinId`;
/**
 * 获取充币流水-根据uid查询
 * @type {string}
 */
export const getRechargeRecordByUserPath: string = `${rootURL}user/admin/rechargeRecord/listByUserId`;
/**
 * 获取提币流水-根据uid查询
 * @type {string}
 */
export const getWithdrawRecordByUserPath: string = `${rootURL}user/admin/withdrawRecord/listByUserId`;
/**
 * 获取资产列表
 * @type {string}
 */
export const getUserAssetsPath: string = `${rootURL}user/admin/userProperty/listByCoinId`;
/**
 * 获取用户货币列表
 * @type {string}
 */
export const getUserCoinsPath: string = `${rootURL}user/admin/userProperty/listByUserId`;
/**
 * 用户资产导出_根据币种查询
 * @type {string}
 */
export const exportEcxelByCoinIdPath: string = `${rootURL}user/admin/userProperty/exportEcxelByCoinId`;
/**
 * 用户资产导出_根据用户查询
 * @type {string}
 */
export const exportEcxelByUserIdPath: string = `${rootURL}user/admin/userProperty/exportEcxelByUserId`;
/**
 * 虚拟币充币汇总
 * @type {string}
 */
export const rechargeRecordTotalPath: string = `${rootURL}user/admin/rechargeRecord/total`;
/**
 * 虚拟币总量接口
 * @type {string}
 */
export const userPropertyTotalPath: string = `${rootURL}user/admin/userProperty/total`;
/**
 * 虚拟币提币汇总
 * @type {string}
 */
export const withdrawRecordTotalPath: string = `${rootURL}user/admin/withdrawRecord/total`;











/**
 * 获取统计列表
 * @type {string}
 */
export const getStatisticsInfoPath: string = `${rootURL}user/admin/noticeType/list`;
/**
 * 获取详情
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
