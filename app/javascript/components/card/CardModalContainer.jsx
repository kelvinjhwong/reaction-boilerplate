import { connect } from 'react-redux';
import CardModal from './CardModal';
import * as actions from '../../actions/CardActions';

const mapStateToProps = (state, ownProps) => {
  return {
    card:
      state.cards.find(
        (card) => Number(ownProps.match.params.id) === card.id,
      ) || {},
  };
};

const mapDispatchToProps = (dispatch, ownProps) => {
  return {
    onFetchCard: () => {
      dispatch(actions.fetchCard(Number(ownProps.match.params.id)));
    },
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(CardModal);
