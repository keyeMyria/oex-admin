
import { connect } from 'react-redux';
import Statistics from './Statistics';

const mapStateToProps = (state) => ({
  dispatch: state.dispatch,
  errMsg: state.StatisticsReducer.get('errMsg'),
  isFetching: state.StatisticsReducer.get('isFetching'),
  statistics: state.StatisticsReducer.get('statistics'),
});

export default connect(mapStateToProps)(Statistics);
