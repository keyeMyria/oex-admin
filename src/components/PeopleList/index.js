
import { connect } from 'react-redux';
import PeopleList from './PeopleList';

const mapStateToProps = (state) => ({
  dispatch: state.dispatch,
  errMsg: state.PeopleReducer.get('errMsg'),
  isFetching: state.PeopleReducer.get('isFetching'),
  peopleList: state.PeopleReducer.get('peopleList'),
  searchData: state.PeopleReducer.get('searchData'),
});

export default connect(mapStateToProps)(PeopleList);
