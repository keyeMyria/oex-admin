import { connect } from 'react-redux';
import PairInfo from './PairInfo';

const mapStateToProps = (state) => ({
  dispatch: state.dispatch,
  errMsg: state.TradeReducer.get('errMsg'),
  isFetching: state.TradeReducer.get('isFetching'),
  pairInfo: state.TradeReducer.get('pairInfo'),
  pairList: state.TradeReducer.get('pairList'),
});

export default connect(mapStateToProps)(PairInfo);
