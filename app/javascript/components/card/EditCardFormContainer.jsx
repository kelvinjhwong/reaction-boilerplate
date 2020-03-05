import { connect } from 'react-redux';
import EditCardForm from './EditCardForm';
import * as actions from '../../actions/CardActions';

const mapStateToProps = (state, ownProps) => ({ ...ownProps });

const mapDispatchToProps = (dispatch, ownProps) => {
  //
};

export default connect(mapStateToProps, null)(EditCardForm);
