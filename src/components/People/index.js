
import { connect } from 'react-redux';
import People from './People';

const mapStateToProps = (state) => ({
  dispatch: state.dispatch,
  errMsg: state.PeopleReducer.get('errMsg'),
  isFetching: state.PeopleReducer.get('isFetching'),
  peopleInfo: state.PeopleReducer.get('peopleInfo'),
});

export default connect(mapStateToProps)(People);
