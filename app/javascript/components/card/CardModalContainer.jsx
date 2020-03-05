import { connect } from 'react-redux';
import CardModal from './CardModal';
import * as cardActions from '../../actions/CardActions';
import * as boardActions from '../../actions/BoardActions';

const mapStateToProps = (state, ownProps) => {
  const cardId = Number(ownProps.match.params.id);
  let list;

  if (ownProps.card !== undefined) {
    list = state.lists.find((list) => list.id === ownProps.card.list_id);
  }

  return {
    card: state.cards.find((card) => card.id === cardId) || {},
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
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(CardModal);
