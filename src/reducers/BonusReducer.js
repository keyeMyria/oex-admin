import * as BonusAction from '../actions/BonusAction';
import * as ExperienceAction from '../actions/ExperienceAction';
import * as Authentication from '../core/Authentication';
import Immutable from 'immutable';
import userInfoStorage from '../core/UserInfoStorage';
import { redux } from 'amumu';
const ActionHandler = redux.ActionHandler;
import { datas } from './course';

const defaultState = Immutable.Map({
  isFetching: false,
  errMsg: '',
  bonusList: Immutable.Map({
    list: Immutable.List([
      ]),
      total: 0,
      currentPage: 1,
  }),
  bonusInfo: Immutable.Map({
  }),
  searchData: Immutable.Map({
    id: '',
    phone: '',
    realName: '',
    pageNum: 1,
    pageSize: 10,
  }),
});

const getBonusListHandler = new ActionHandler.handleAction(BonusAction.GET_BOUNS_LIST)
  .success((state, action) => {
    return state.setIn(['bonusList', 'list'], Immutable.fromJS(action.data.list))
      .setIn(['bonusList', 'total'], Immutable.fromJS(action.data.totalRow))
      .setIn(['searchData', 'pageSize'], Immutable.fromJS(action.data.pageSize))
      .setIn(['searchData', 'pageNum'], Immutable.fromJS(action.data.pageNumber))
      .set('isFetching', false).set('errMsg', '');
  });



const getBonusInfoHandler = new ActionHandler.handleAction(BonusAction.GET_BOUNS_INFO)
    .success((state, action) => {
      return state.set('bonusInfo', Immutable.fromJS(action.data))
        .set('isFetching', false).set('errMsg', '');
    });

const getExperienceContentHandler = new ActionHandler.handleAction(ExperienceAction.GET_EXPERIENCECONTENT)
  .success((state, action) => {
    return state.setIn(['experienceInfo', 'content'], Immutable.fromJS(action.data))
      .set('isFetching', false).set('errMsg', '');
    });
// const updateArticleHandler = new ActionHandler.handleAction(ArticleAction.UPDATE_ARTICLEINFO);
// const deleteArticleHandler = new ActionHandler.handleAction(ArticleAction.DELETE_ARTICLEINFO);

export default ActionHandler.handleActions(
  [
    getBonusListHandler,
    getBonusInfoHandler,
  ],
  defaultState,
  /^BonusReducer\//
);
