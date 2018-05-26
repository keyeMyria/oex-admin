
import { connect } from 'react-redux';
import BonusList from './BonusList';

const mapStateToProps = (state) => ({
  dispatch: state.dispatch,
  errMsg: state.PeopleReducer.get('errMsg'),
  isFetching: state.PeopleReducer.get('isFetching'),
  bonusList: state.PeopleReducer.get('bonusList'),
  searchData: state.PeopleReducer.get('searchData'),
});

export default connect(mapStateToProps)(BonusList);
