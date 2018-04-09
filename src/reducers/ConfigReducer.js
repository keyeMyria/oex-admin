import * as ArticleAction from '../actions/ArticleAction';
import * as Authentication from '../core/Authentication';
import * as ConfigAction from '../actions/ConfigAction';
import Immutable from 'immutable';
import { redux } from 'amumu';
const ActionHandler = redux.ActionHandler;

const defaultState = Immutable.Map({
  isFetching: false,
  errMsg: '',
  ids: '',
  idsDoctor: '',
  idsMedicine: '',
  img1: Immutable.fromJS({
    url: '',
    img: '',
  }),
  img2: Immutable.fromJS({
    url: '',
    img: '',
  }),
});

const getExperienceRecommendHandler = new ActionHandler.handleAction(ConfigAction.GET_EXPERIENCE_RECOMMEND)
  .success((state, action) => {
    return state.set('ids', action.data).set('isFetching', false).set('errMsg', '');
  });
  const getExperienceRecommendDoctorHandler = new ActionHandler.handleAction(ConfigAction.GET_EXPERIENCE_RECOMMEND_DOCTOR)
    .success((state, action) => {
      return state.set('idsDoctor', action.data).set('isFetching', false).set('errMsg', '');
    });
    const getExperienceRecommendMedicineHandler = new ActionHandler.handleAction(ConfigAction.GET_EXPERIENCE_RECOMMEND_MEDICINE)
      .success((state, action) => {
        return state.set('idsMedicine', action.data).set('isFetching', false).set('errMsg', '');
      });

const getBannerListHandler = new ActionHandler.handleAction(ConfigAction.GET_BANNER_LIST)
  .success((state, action) => {
    // console.warn(action);
    const data = action.data;
    let originState = state;
    let img1 = data.filter(img => img.type === 1);
    let img2 = data.filter(img => img.type === 2);
    if (img1) {
      originState = originState.set('img1', Immutable.fromJS(img1[0]));
    }
    if (img2) {
      originState = originState.set('img2', Immutable.fromJS(img2[0]));
    }
    return originState;
  });


export default ActionHandler.handleActions(
  [
    getExperienceRecommendHandler,
    getExperienceRecommendDoctorHandler,
    getExperienceRecommendMedicineHandler,
    getBannerListHandler,
  ],
  defaultState,
  /^ConfigReducer\//
);
