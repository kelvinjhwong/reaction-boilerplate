import { connect } from 'react-redux';
import TogglableCardForm from './TogglableCardForm';
import * as actions from '../../actions/BoardActions';

const mapStateToProps = (state, ownProps) => ({
  listId: ownProps.listId,
});

const mapDispatchToProps = (dispatch, ownProps) => {
  return {
    onAddCard: (newCard, callback) => {
      dispatch(
        actions.createCard(
          ownProps.listId,
          {
            title: newListTitle,
          },
          callback,
        ),
      );
    },
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(TogglableCardForm);