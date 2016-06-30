import { connect } from 'react-redux';
import * as actionCreators from '../actions/action';
import Main from './Main';

function mapStateToProps(state) {
  return {
    user: state.user,
    repo: state.repo,
    searchBy:state.searchBy,
    showError:state.showError
  }
}
const App = connect(mapStateToProps)(Main);

export default App;