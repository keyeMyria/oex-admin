
import * as UserAction from '../actions/UserAction';
import * as Authentication from '../core/Authentication';
import Immutable from 'immutable';
import userInfoStorage from '../core/UserInfoStorage';
import { redux } from 'amumu';
const ActionHandler = redux.ActionHandler;

const defaultState = Immutable.Map({
  isFetching: false,
  errMsg: '',
  userList: Immutable.Map({
    list: Immutable.List([
      ]),
      total: 0,
      currentPage: 1,
  }),
  searchData: Immutable.Map({
    id: '',
    user_mobile: '',
    user_email: '',
    pageNum: 1,
    pageSize: 10,
  }),
  roleList: Immutable.Map({
    list: Immutable.List([
      ]),
      total: 0,
      currentPage: 1,
  }),
  roleInfo: Immutable.Map({

  }),
  roleSearchData: Immutable.Map({
    id: '',
    user_mobile: '',
    user_email: '',
    pageNum: 1,
    pageSize: 10,
  }),
  qxList: Immutable.Map({
    list: Immutable.List([
      ]),
      total: 0,
      currentPage: 1,
  })
});

const getUserListHandler = new ActionHandler.handleAction(UserAction.GET_C_USERLIST)
  .success((state, action) => {
    return state.setIn(['userList', 'list'], Immutable.fromJS(action.data.list))
      .setIn(['userList', 'total'], Immutable.fromJS(action.data.total))
      .setIn(['searchData', 'pageSize'], Immutable.fromJS(action.data.pageSize))
      .setIn(['searchData', 'pageNum'], Immutable.fromJS(action.data.pageNum))
      .set('isFetching', false).set('errMsg', '');
  });


  const getRoleListHandler = new ActionHandler.handleAction(UserAction.GET_ROLELIST)
    .success((state, action) => {
      return state.setIn(['roleList', 'list'], Immutable.fromJS(action.data))
        // .setIn(['userList', 'total'], Immutable.fromJS(action.data.total))
        // .setIn(['searchData', 'pageSize'], Immutable.fromJS(action.data.pageSize))
        // .setIn(['searchData', 'pageNum'], Immutable.fromJS(action.data.pageNum))
        .set('isFetching', false).set('errMsg', '');
    });

    const getRoleInfoHandler = new ActionHandler.handleAction(UserAction.GET_ROLEINFO)
      .success((state, action) => {
        return state.set('roleInfo', Immutable.fromJS(action.data))
          .set('isFetching', false).set('errMsg', '');
      });

      const getListPrivilegeHandler = new ActionHandler.handleAction(UserAction.GET_QXLIST)
        .success((state, action) => {
          return state.setIn(['qxList', 'list'], Immutable.fromJS(action.data))
            // .setIn(['userList', 'total'], Immutable.fromJS(action.data.total))
            // .setIn(['searchData', 'pageSize'], Immutable.fromJS(action.data.pageSize))
            // .setIn(['searchData', 'pageNum'], Immutable.fromJS(action.data.pageNum))
            .set('isFetching', false).set('errMsg', '');
        });



export default ActionHandler.handleActions(
  [
    getUserListHandler,
    getRoleListHandler,
    getRoleInfoHandler,
    getListPrivilegeHandler
  ],
  defaultState,
  /^UserReducer\//
);
