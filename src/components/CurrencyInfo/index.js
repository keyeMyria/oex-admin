
import { connect } from 'react-redux';
import CurrencyInfo from './CurrencyInfo';

const mapStateToProps = (state) => ({
  dispatch: state.dispatch,
  errMsg: state.TradeReducer.get('errMsg'),
  isFetching: state.TradeReducer.get('isFetching'),
  areaInfo: state.TradeReducer.get('areaInfo'),
  areaList: state.TradeReducer.get('areaList'),
});

export default connect(mapStateToProps)(CurrencyInfo);
