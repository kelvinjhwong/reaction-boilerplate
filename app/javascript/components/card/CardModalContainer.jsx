import { connect } from 'react-redux';
import CardModal from './CardModal';
import * as cardActions from '../../actions/CardActions';
import * as boardActions from '../../actions/BoardActions';

const mapStateToProps = (state, ownProps) => {
  const cardId = Number(ownProps.match.params.id);
  const card = state.cards.find((card) => card.id === cardId);
  let list;

  if (card !== undefined) {
    list = state.lists.find((list) => list.id === card.list_id);
  }

  return {
    card: card || {},
    listTitle: list === undefined ? '' : list.title,
  };
};

const mapDispatchToProps = (dispatch, ownProps) => {
  const cardId = Number(ownProps.match.params.id);

  return {
    onFetchCard: () => {
      dispatch(
        cardActions.fetchCard(cardId, (card) => {
          dispatch(boardActions.fetchBoard(card.board_id));
        }),
      );
    },

    onUpdateCard: (cardId, attrs, callback) => {
      dispatch(cardActions.updateCard(cardId, attrs, callback));
    },

    onCreateComment: (cardId, attrs, callback) => {
      dispatch(cardActions.createComment(cardId, attrs, callback));
    },
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(CardModal);
