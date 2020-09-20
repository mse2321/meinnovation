import { connect } from 'react-redux';
import Gallery from './Gallery';
import * as actions from '../../actions';

var mapStateToProps = state => {
    return {
      display: state.display
    };
  }
  
var mapDispatchToProps = dispatch => {
    return {
      showModal: () => dispatch(actions.showModalAction())
    };
}
  
export default connect(mapStateToProps, mapDispatchToProps)(Gallery);