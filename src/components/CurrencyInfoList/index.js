
import { connect } from 'react-redux';
import CurrencyInfoList from './CurrencyInfoList';

const mapStateToProps = (state) => ({
  dispatch: state.dispatch,
  errMsg: state.CurrencyReducer.get('errMsg'),
  isFetching: state.CurrencyReducer.get('isFetching'),
  currencyList: state.CurrencyReducer.get('currencyList'),
  searchData: state.CurrencyReducer.get('searchData'),
});

export default connect(mapStateToProps)(CurrencyInfoList);
