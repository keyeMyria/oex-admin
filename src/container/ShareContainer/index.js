
import { connect } from 'react-redux';
import Share from './Share';

const mapStateToProps = (state) => ({
  dispatch: state.dispatch,
  errMsg: state.ShareReducer.get('errMsg'),
  isFetching: state.ShareReducer.get('isFetching'),
  articleInfo: state.ShareReducer.get('articleInfo'),
});

export default connect(mapStateToProps)(Share);
