import { connect } from 'react-redux';
import * as actions from '../../actions/BoardActions';
import Board from './Board';

const mapStateToProps = (state, ownProps) => {
  return {
    board: state.boards.find(
      (board) => Number(ownProps.match.params.id) === board.id,
    ),
  };
};

const mapDispatchToProps = (dispatch, ownProps) => {
  return {
    onFetchBoard: () => {
      dispatch(actions.fetchBoard(Number(ownProps.match.params.id)));
    },
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Board);
