import * as CurrencyAction from '../actions/CurrencyAction';
import * as Authentication from '../core/Authentication';
import Immutable from 'immutable';
import userInfoStorage from '../core/UserInfoStorage';
import { redux } from 'amumu';
const ActionHandler = redux.ActionHandler;
import { datas } from './course';

const defaultState = Immutable.Map({
  isFetching: false,
  errMsg: '',
  currencyList: Immutable.Map({
    list: Immutable.List([
      ]),
      total: 0,
      currentPage: 1,
  }),
  currencyInfo: Immutable.Map({
  }),
  searchData: Immutable.Map({
    order: '',
    type: '',
    pageNum: 1,
    pageSize: 10,
  }),
});

const getCurrencyListHandler = new ActionHandler.handleAction(CurrencyAction.GET_CURRENCYLIST)
  .success((state, action) => {
    return state.setIn(['currencyList', 'list'], Immutable.fromJS(action.data.pageInfo))
      // .setIn(['currencyList', 'total'], Immutable.fromJS(action.data.total))
      // .setIn(['searchData', 'pageSize'], Immutable.fromJS(action.data.pageSize))
      // .setIn(['searchData', 'pageNum'], Immutable.fromJS(action.data.pageNum))
      .set('isFetching', false).set('errMsg', '');
  });


const getCoinInfoHandler = new ActionHandler.handleAction(CurrencyAction.GET_COIN_INFO)
    .success((state, action) => {
      return state.set('currencyInfo', Immutable.fromJS(action.data))
        .set('isFetching', false).set('errMsg', '');
    });

const getCurrencyContentHandler = new ActionHandler.handleAction(CurrencyAction.GET_EXPERIENCECONTENT)
  .success((state, action) => {
    return state.setIn(['experienceInfo', 'content'], Immutable.fromJS(action.data))
      .set('isFetching', false).set('errMsg', '');
    });
// const updateArticleHandler = new ActionHandler.handleAction(ArticleAction.UPDATE_ARTICLEINFO);
// const deleteArticleHandler = new ActionHandler.handleAction(ArticleAction.DELETE_ARTICLEINFO);

export default ActionHandler.handleActions(
  [
    getCurrencyListHandler,
    getCoinInfoHandler,
    getCurrencyContentHandler,
  ],
  defaultState,
  /^CurrencyReducer\//
);
