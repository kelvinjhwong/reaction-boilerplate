import { connect } from 'react-redux';
import EditCardForm from './EditCardForm';
import * as actions from '../../actions/CardActions';

const mapStateToProps = (state, ownProps) => {
	console.log('ownProps: ', ownProps);
	console.log('state.lists: ', state.lists);
	
	const list = state.lists.find((list) => list.id === ownProps.card.list_id);

  return {
  	card: ownProps.card,
  	listTitle: list.title || "",
  };
};

const mapDispatchToProps = (dispatch, ownProps) => {
  //
};

export default connect(mapStateToProps, null)(EditCardForm);
