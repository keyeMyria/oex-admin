
import { connect } from 'react-redux';
import PairList from './PairList';

const mapStateToProps = (state) => ({
  dispatch: state.dispatch,
  errMsg: state.TradeReducer.get('errMsg'),
  isFetching: state.TradeReducer.get('isFetching'),
  pairList: state.TradeReducer.get('pairList'),
  searchData: state.TradeReducer.get('pairSearchData'),
});

export default connect(mapStateToProps)(PairList);
