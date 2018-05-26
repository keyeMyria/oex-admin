
import { connect } from 'react-redux';
import Bonus from './Bonus';

const mapStateToProps = (state) => ({
  dispatch: state.dispatch,
  errMsg: state.PeopleReducer.get('errMsg'),
  isFetching: state.PeopleReducer.get('isFetching'),
  bonusInfo: state.PeopleReducer.get('bonusInfo'),
});

export default connect(mapStateToProps)(Bonus);
