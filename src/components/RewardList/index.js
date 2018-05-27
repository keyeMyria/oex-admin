
import { connect } from 'react-redux';
import RewardList from './RewardList';

const mapStateToProps = (state) => ({
  dispatch: state.dispatch,
  errMsg: state.RewardReducer.get('errMsg'),
  isFetching: state.RewardReducer.get('isFetching'),
  rewardList: state.RewardReducer.get('rewardList'),
  searchData: state.RewardReducer.get('searchData'),
});

export default connect(mapStateToProps)(RewardList);
