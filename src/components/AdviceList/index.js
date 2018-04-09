
import { connect } from 'react-redux';
import AdviceList from './AdviceList';

const mapStateToProps = (state) => ({
  dispatch: state.dispatch,
  errMsg: state.AdviceListReducer.get('errMsg'),
  isFetching: state.AdviceListReducer.get('isFetching'),
  adviceList: state.AdviceListReducer.get('adviceList'),
  searchData: state.AdviceListReducer.get('searchData'),
});

export default connect(mapStateToProps)(AdviceList);
