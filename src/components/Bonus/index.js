
import { connect } from 'react-redux';
import Bonus from './Bonus';

const mapStateToProps = (state) => ({
  dispatch: state.dispatch,
  errMsg: state.BonusReducer.get('errMsg'),
  isFetching: state.BonusReducer.get('isFetching'),
  bonusInfo: state.BonusReducer.get('bonusInfo'),
});

export default connect(mapStateToProps)(Bonus);
