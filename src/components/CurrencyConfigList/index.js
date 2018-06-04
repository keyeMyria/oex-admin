
import { connect } from 'react-redux';
import CurrencyConfigList from './CurrencyConfigList';

const mapStateToProps = (state) => ({
  dispatch: state.dispatch,
  errMsg: state.UserReducer.get('errMsg'),
  isFetching: state.CurrencyReducer.get('isFetching'),
  coinConfigList: state.CurrencyReducer.get('coinConfigList'),
  searchData: state.CurrencyReducer.get('coinConfigSearchData'),
});

export default connect(mapStateToProps)(CurrencyConfigList);
