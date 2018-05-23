/**
 * Created by wl on 16/7/11.
 * @flow
 */

export const PrefixURL = (): string => '/';
export const Login = (): string => '/Login';
export const App = (): string => '/App';

export const prefix = (prefixs: string): string => `${PrefixURL()}${prefixs}`;

/* **************************  文章管理模块  ******************************************** */
export const ArticleList = (): string => prefix('article-list');

export const Article = (id : string = '', editing : boolean = false): string => {
  if (editing) {
    return prefix(`article/${id}?editing=true`);
  }
  return prefix(`article/${id}`);
};

/* **************************  经验管理模块  ******************************************** */
export const ExperienceList = (): string => prefix('experience-list');
export const ExperienceListDoctor = () => prefix('experience-list-doctor');
export const ExperienceListMedicine = () => prefix('experience-list-medicine');

export const Experience = (id : string = '', editing : boolean = false): string => {
  if (editing) {
    return prefix(`experience/${id}?editing=true`);
  }
  return prefix(`experience/${id}`);
};
export const ExperienceDoctor = (id : string = '', editing : boolean = false): string => {
  if (editing) {
    return prefix(`experience-doctor/${id}?editing=true`);
  }
  return prefix(`experience-doctor/${id}`);
};
export const ExperienceMedicine = (id : string = '', editing : boolean = false): string => {
  if (editing) {
    return prefix(`experience-medicine/${id}?editing=true`);
  }
  return prefix(`experience-medicine/${id}`);
};

/* **************************  用户管理模块  ******************************************** */
export const PeopleList = () => prefix('people-list');
export const People = (id : string = '', editing : boolean = false): string => {
  if (editing) {
    return prefix(`people/${id}?editing=true`);
  }
  return prefix(`people/${id}`);
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

export const Share = (): string => prefix('share');

/**
 * 用户反馈
 * @type {[type]}
 */
export const AdviceList = (): string => prefix('advice');
