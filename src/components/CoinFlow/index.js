
import { connect } from 'react-redux';
import CoinFlow from './CoinFlow';

const mapStateToProps = (state) => ({
  dispatch: state.dispatch,
  errMsg: state.FlowReducer.get('errMsg'),
  isFetching: state.FlowReducer.get('isFetching'),
  coinFlow: state.FlowReducer.get('coinFlow'),
  searchData: state.FlowReducer.get('coinSearchData'),
});

export default connect(mapStateToProps)(CoinFlow);
