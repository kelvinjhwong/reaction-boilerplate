import { connect } from 'react-redux';
import ListTitle from './ListTitle';
import * as actions from '../../actions/BoardActions';

const mapStateToProps = (state, ownProps) => ({
  listTitle: ownProps.listTitle,
});

const mapDispatchToProps = (dispatch, ownProps) => {
  return {
    onUpdateListTitle: (newListTitle, callback) => {
      dispatch(
        actions.updateList(
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

export default connect(mapStateToProps, mapDispatchToProps)(ListTitle);
