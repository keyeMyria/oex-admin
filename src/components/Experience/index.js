
import { connect } from 'react-redux';
import Experience from './Experience';

const mapStateToProps = (state) => ({
  dispatch: state.dispatch,
  errMsg: state.ExperienceReducer.get('errMsg'),
  isFetching: state.ExperienceReducer.get('isFetching'),
  experienceInfo: state.ExperienceReducer.get('experienceInfo'),
});

export default connect(mapStateToProps)(Experience);
