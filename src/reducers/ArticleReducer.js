
import * as ArticleAction from '../actions/ArticleAction';
import * as Authentication from '../core/Authentication';
import Immutable from 'immutable';
import userInfoStorage from '../core/UserInfoStorage';
import { redux } from 'amumu';
const ActionHandler = redux.ActionHandler;
// import { datas } from './course';

const defaultState = Immutable.Map({
  isFetching: false,
  errMsg: '',
  yearList: Immutable.fromJS([]),
  articleList: Immutable.Map({
    list: Immutable.List([
        // Immutable.Map({
        //   id: 1,
        //   content: '题干',
        //   ossUrl: '',
        //   rightCount: 10,
        //   subjectId: '题目编号001',
        //   totalCount: 20,
        //   type: 0, // 0真题1教材同步
        //   updateTime: '2017-10-21 12:34:00',
        // }),
        // Immutable.Map({
        //   id: 2,
        //   content: '题干2',
        //   ossUrl: '',
        //   rightCount: 30,
        //   subjectId: '题目编号002',
        //   totalCount: 30,
        //   type: 1, // 0真题1教材同步
        //   updateTime: '2017-10-21 12:34:00',
        // }),
      ]),
      total: 2,
      currentPage: 1,
  }),
  articleInfo: Immutable.Map({
    type: '', // 1真题2教材同步
    id: '',
    year: '', // 年份 类型1专有
    chapter: '', // 章节 类型2专有
    course: '', // 学科 类型2专有
    content: '',
    hasVedio: '', // 是否有视频 1有0没有
    option: '', // 选项 json 格式前端定义	string	@mock={A,B,C,D}
    ossUrl: '',
    rightCount: '',
    rightDesc: '', //解析
    rightOption: Immutable.List([]), // 正确选项 多个逗号隔开
    sort: '', // 顺序
    status: '', // 0无效1有效
    subjectId: '', // 题目id
    subjectTypes: '', // 题型 ABX	string	@mock=A
    totalCount: '', // 答题总数
    updateTime: '',
    vedioId: '', // 视频id
    score: '', // 分值
  }),
  searchData: Immutable.Map({
    id: '',
    content: '',
    subjectId: '',
    type: '',
    pageNum: 1,
    pageSize: 10,
  }),
  courseList: Immutable.fromJS([]),
});

const getArticleListHandler = new ActionHandler.handleAction(ArticleAction.GET_ARTICLELIST)
  .success((state, action) => {
    return state.setIn(['articleList', 'list'], Immutable.fromJS(action.data.list))
      .setIn(['articleList', 'total'], Immutable.fromJS(action.data.total))
      .setIn(['searchData', 'pageSize'], Immutable.fromJS(action.data.pageSize))
      .setIn(['searchData', 'pageNum'], Immutable.fromJS(action.data.pageNum))
      .set('isFetching', false).set('errMsg', '');
  });

const getArticleInfoHandler = new ActionHandler.handleAction(ArticleAction.GET_ARTICLEINFO)
    .success((state, action) => {
      // console.log(action.data, Immutable.fromJS(action.data));
      const data = action.data;
      data.rightOption = data.rightOption.split(',');
      const option = action.data.option ? JSON.parse(action.data.option) : '';
      console.warn(action, data);
      return state.set('articleInfo', Immutable.fromJS(data))
        .setIn(['articleInfo', 'A'], Immutable.fromJS(option.A))
        .setIn(['articleInfo', 'B'], Immutable.fromJS(option.B))
        .setIn(['articleInfo', 'C'], Immutable.fromJS(option.C))
        .setIn(['articleInfo', 'D'], Immutable.fromJS(option.D))
        .setIn(['articleInfo', 'E'], Immutable.fromJS(option.E))
        .set('isFetching', false).set('errMsg', '');
    });
const getArticleContentHandler = new ActionHandler.handleAction(ArticleAction.GET_ARTICLECONTENT)
    .success((state, action) => {
      const data = action.data;
      // data.rightOption = data.rightOption.split(',');
      return state
        // .setIn(['articleInfo'], Immutable.fromJS(data))
        .setIn(['articleInfo', 'id'], Immutable.fromJS(action.param.id))
        .setIn(['articleInfo', 'updateTime'], Immutable.fromJS(action.param.updateTime))
        .setIn(['articleInfo', 'ossUrl'], Immutable.fromJS(action.param.url))
        .set('isFetching', false).set('errMsg', '');
    });
const getCourseListHandeler = new ActionHandler.handleAction(ArticleAction.GET_COURSE_LIST)
  .success((state, action) => {
    return state.set('courseList', Immutable.fromJS(action.data))
                .set('isFetching', false).set('errMsg', '');
  });

const updateArticleHandler = new ActionHandler.handleAction(ArticleAction.UPDATE_ARTICLEINFO);
const deleteArticleHandler = new ActionHandler.handleAction(ArticleAction.DELETE_ARTICLEINFO);

const getYearListHandler = new ActionHandler.handleAction(ArticleAction.GET_YEAR_LIST)
  .success((state, action) => {
    return state.set('yearList', Immutable.fromJS(action.data))
      .set('isFetching', false).set('errMsg', '');
  });

export default ActionHandler.handleActions(
  [
    getArticleListHandler,
    getArticleInfoHandler,
    updateArticleHandler,
    getArticleContentHandler,
    deleteArticleHandler,
    getCourseListHandeler,
    getYearListHandler,
  ],
  defaultState,
  /^ArticleReducer\//
);
