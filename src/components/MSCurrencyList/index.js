
import { connect } from 'react-redux';
import MSCurrencyList from './MSCurrencyList';

const mapStateToProps = (state) => ({
  dispatch: state.dispatch,
  errMsg: state.UserReducer.get('errMsg'),
  isFetching: state.ExperienceReducer.get('isFetching'),
  experienceList: state.ExperienceReducer.get('experienceList'),
  searchData: state.ExperienceReducer.get('searchData'),
});

export default connect(mapStateToProps)(MSCurrencyList);
