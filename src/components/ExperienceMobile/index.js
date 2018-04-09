import { connect } from 'react-redux';
import ExperienceMobile from './ExperienceMobile';

const _mapStateToProps = (state) => ({
  dispatch: state.dispatch,
  errMsg: state.ExperienceReducer.get('errMsg'),
  isFetching: state.ExperienceReducer.get('isFetching'),
  experienceInfo: state.ExperienceReducer.get('experienceInfo'),
})

export default connect(_mapStateToProps)(ExperienceMobile);
