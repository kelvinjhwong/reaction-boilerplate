import { connect } from 'react-redux';
import NewCardForm from './NewCardForm';
import * as actions from '../../actions/CardActions';

const mapStateToProps = (state, ownProps) => ownProps;

const mapDispatchToProps = (dispatch, ownProps) => {
  return {
    onAddCard: (newCardTitle, callback) => {
      dispatch(
        actions.createCard(
          ownProps.listId,
          {
            title: newCardTitle,
          },
          callback,
        ),
      );
    },
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(NewCardForm);
