import { connect } from 'react-redux';
import Config from './Config';

const mapStateToProps = (state) => ({
  dispatch: state.dispatch,
  errMsg: state.ConfigReducer.get('errMsg'),
  isFetching: state.ConfigReducer.get('isFetching'),
  ids: state.ConfigReducer.get('ids'),
  idsDoctor: state.ConfigReducer.get('idsDoctor'),
  idsMedicine: state.ConfigReducer.get('idsMedicine'),
  img1: state.ConfigReducer.get('img1'),
  img2: state.ConfigReducer.get('img2'),
});

export default connect(mapStateToProps)(Config);
