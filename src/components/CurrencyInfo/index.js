
import { connect } from 'react-redux';
import CurrencyInfo from './CurrencyInfo';

const mapStateToProps = (state) => ({
  dispatch: state.dispatch,
  errMsg: state.CurrencyReducer.get('errMsg'),
  isFetching: state.CurrencyReducer.get('isFetching'),
  currencyInfo: state.CurrencyReducer.get('currencyInfo'),
});

export default connect(mapStateToProps)(CurrencyInfo);
