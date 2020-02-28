import { connect } from 'react-redux';
import * as actions from '../../actions/BoardActions';
import NewList from './NewList';

const mapDispatchToProps = (dispatch, ownProps) => {
  return {
    onCreateNewList: (newListTitle) => {
      dispatch(
        actions.createList({
          board_id: ownProps.boardId,
          list: {
            title: newListTitle,
          },
        }),
      );
    },
  };
};

export default connect(null, mapDispatchToProps)(NewList);
