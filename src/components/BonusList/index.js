
import { connect } from 'react-redux';
import BonusList from './BonusList';

const mapStateToProps = (state) => ({
  dispatch: state.dispatch,
  errMsg: state.BonusReducer.get('errMsg'),
  isFetching: state.BonusReducer.get('isFetching'),
  bonusList: state.BonusReducer.get('bonusList'),
  searchData: state.BonusReducer.get('searchData'),
});

export default connect(mapStateToProps)(BonusList);
