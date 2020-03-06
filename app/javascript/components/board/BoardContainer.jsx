import { connect } from 'react-redux';
import * as boardActions from '../../actions/BoardActions';
import Board from './Board';

const mapStateToProps = (state, ownProps) => {
  let boardId;

  if (ownProps.match.params[0] === 'boards') {
    boardId = Number(ownProps.match.params.id);
    return {
      board: state.boards.find((board) => board.id === boardId),
    };
  } else if (ownProps.match.params[0] === 'cards') {
    const cardId = Number(ownProps.match.params.id);
    const card = state.cards.find((card) => card.id === cardId);

    if (card !== undefined) {
      boardId = card.board_id;
    }
  }

  return { board: state.boards.find((board) => board.id === boardId) };
};

const mapDispatchToProps = (dispatch, ownProps) => {
  let boardId;

  if (ownProps.match.params[0] === 'boards') {
    boardId = Number(ownProps.match.params.id);
  }

  return {
    onFetchBoard: () => {
      if (boardId !== undefined) {
        dispatch(boardActions.fetchBoard(boardId));
      }
    },
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Board);
