
import { connect } from 'react-redux';
import UserAssets from './UserAssets';

const mapStateToProps = (state) => ({
  dispatch: state.dispatch,
  errMsg: state.UserAssetsReducer.get('errMsg'),
  isFetching: state.UserAssetsReducer.get('isFetching'),
  assetsList: state.UserAssetsReducer.get('assetsList'),
  searchData: state.UserAssetsReducer.get('searchData'),
});

export default connect(mapStateToProps)(UserAssets);
