import { connect } from 'react-redux';
import NewList from './NewList';
import * as actions from '../../actions/BoardActions';

const mapDispatchToProps = (dispatch, ownProps) => {
  return {
    onCreateNewList: (newListTitle, callback) => {
      dispatch(
        actions.createList(
          {
            board_id: ownProps.boardId,
            list: {
              title: newListTitle,
            },
          },
          callback,
        ),
      );
    },
  };
};

export default connect(null, mapDispatchToProps)(NewList);
