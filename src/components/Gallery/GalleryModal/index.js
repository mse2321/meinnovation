import { connect } from 'react-redux';
import * as actions from '../../../actions';
import GalleryModal from './GalleryModal';

var mapStateToProps = state => {
    return {
      modalDisplay: state.modalDisplay
    };
}
  
var mapDispatchToProps = dispatch => {
    return {
      hideModal: () => dispatch(actions.hideModalAction())
    };
}
  
export default connect(mapStateToProps, mapDispatchToProps)(GalleryModal);