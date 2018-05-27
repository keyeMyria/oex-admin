
import { connect } from 'react-redux';
import AreaList from './AreaList';

const mapStateToProps = (state) => ({
  dispatch: state.dispatch,
  errMsg: state.TradeReducer.get('errMsg'),
  isFetching: state.TradeReducer.get('isFetching'),
  areaList: state.TradeReducer.get('areaList'),
  searchData: state.TradeReducer.get('areaSearchData'),
});

export default connect(mapStateToProps)(AreaList);
