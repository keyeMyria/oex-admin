/**
 * Created by wl on 16/7/11.
 * @flow
 */

export const PrefixURL = (): string => '/';
export const Login = (): string => '/Login';
export const App = (): string => '/App';

export const prefix = (prefixs: string): string => `${PrefixURL()}${prefixs}`;

/* **************************  币种管理模块  ******************************************** */
export const CoinList = (): string => prefix('coin-list');
export const CoinInfo = (id : string = '', editing : boolean = false): string => {
  if (editing) {
    return prefix(`coin/${id}?editing=true`);
  }
  return prefix(`coin/${id}`);
};

export const MSCurrencyList = () => prefix('ms-currency-list');
export const CurrencyConfigList = () => prefix('currency-config-list');

export const Experience = (id : string = '', editing : boolean = false): string => {
  if (editing) {
    return prefix(`currency-info/${id}?editing=true`);
  }
  return prefix(`currency-info/${id}`);
};
export const ExperienceDoctor = (id : string = '', editing : boolean = false): string => {
  if (editing) {
    return prefix(`ms-currency/${id}?editing=true`);
  }
  return prefix(`ms-currency/${id}`);
};
export const ExperienceMedicine = (id : string = '', editing : boolean = false): string => {
  if (editing) {
    return prefix(`currency-config/${id}?editing=true`);
  }
  return prefix(`currency-config/${id}`);
};

/* **************************  交易管理模块  ******************************************** */
export const AreaList = () => prefix('area-list');
export const AreaInfo = (id : string = '', editing : boolean = false): string => {
  if (editing) {
    return prefix(`area/${id}?editing=true`);
  }
  return prefix(`area/${id}`);
};

export const PairList = () => prefix('pair-list');
export const PairInfo = (id : string = '', editing : boolean = false): string => {
  if (editing) {
    return prefix(`pair/${id}?editing=true`);
  }
  return prefix(`pair/${id}`);
};

/* **************************  banner管理模块  ******************************************** */
export const BannerList = (): string => prefix('banner-list');

export const Banner = (id : string = '', editing : boolean = false): string => {
  if (editing) {
    return prefix(`banner/${id}?editing=true`);
  }
  return prefix(`banner/${id}`);
};
/* **************************  活动管理模块  ******************************************** */
export const DashList = (): string => prefix('dash-list');

export const ActivityList = ():string =>  prefix('activity-list');

export const DashInfo = (id : string = '', editing : boolean = false): string => {
  if (editing) {
    return prefix(`dash/${id}?editing=true`);
  }
  return prefix(`dash/${id}`);
};
/* **************************  用户管理模块  ******************************************** */
export const UserList = (): string => prefix('user-list');

export const UserInfo = (id : string = '', editing : boolean = false): string => {
  if (editing) {
    return prefix(`user/${id}?editing=true`);
  }
  return prefix(`user/${id}`);
};
/* **************************  后台用户管理模块  ******************************************** */
export const AdminList = (): string => prefix('admin-list');

export const AdminInfo = (id : string = '', editing : boolean = false): string => {
  if (editing) {
    return prefix(`admin/${id}?editing=true`);
  }
  return prefix(`admin/${id}`);
};
/* **************************  权限管理模块  ******************************************** */
export const AuthList = (): string => prefix('auth-list');

export const AuthInfo = (id : string = '', editing : boolean = false): string => {
  if (editing) {
    return prefix(`auth/${id}?editing=true`);
  }
  return prefix(`auth/${id}`);
};
/* **************************  充币提币  ******************************************** */
export const CoinFlow = (): string => prefix('coin-flow');
export const UserFlow = (): string => prefix('user-flow');
export const UserAssets = (): string => prefix('user-assets');

/* **************************  持股分红模块  ******************************************** */
export const BonusList = (): string => prefix('bonus-list');

export const Bonus = (id : string = '', editing : boolean = false): string => {
  if (editing) {
    return prefix(`bonus/${id}?editing=true`);
  }
  return prefix(`bonus/${id}`);
};
/* ************************** 工单管理  ******************************************** */
export const WorkOrders = (): string => prefix('work-orders');

export const WorkOrder = (id : string = '', editing : boolean = false): string => {
  if (editing) {
    return prefix(`work-order/${id}?editing=true`);
  }
  return prefix(`work-order/${id}`);
};
/* ************************** 运营管理  ******************************************** */
export const NoticeList = (): string => prefix('notice-list');

export const NoticeInfo = (id : string = '', editing : boolean = false): string => {
  if (editing) {
    return prefix(`notice/${id}?editing=true`);
  }
  return prefix(`notice/${id}`);
};

export const NoticeTypeList = (): string => prefix('notice-type-list');

export const NoticeTypeInfo = (id : string = '', editing : boolean = false): string => {
  if (editing) {
    return prefix(`notice-type/${id}?editing=true`);
  }
  return prefix(`notice-type/${id}`);
};

export const RewardList = (): string => prefix('reward-list');
export const Statistics = (): string => prefix('statistics');


export const Share = (): string => prefix('share');

/**
 * 地址池
 * @type {[type]}
 */
export const AddressList = (): string => prefix('address-list');
