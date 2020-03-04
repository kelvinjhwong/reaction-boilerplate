import { connect } from 'react-redux';
import CardModal from './CardModal';
import * as cardActions from '../../actions/CardActions';
import * as boardActions from '../../actions/BoardActions';

const mapStateToProps = (state, ownProps) => {
  const cardId = Number(ownProps.match.params.id);
  return {
    card: state.cards.find((card) => card.id === cardId) || {},
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
