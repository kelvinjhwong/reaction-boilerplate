import React from 'react';
import Cards from './Cards';
import { connect } from 'react-redux';

const mapStateToProps = (state, ownProps) => {
  return {
    cards: state.cards.filter(
      (card) => card.list_id === Number(ownProps.listId),
    ),
  };
};

const mapDispatchToProps = (dispatch, ownProps) => {
  return {
    onAddForm: (newListTitle, callback) => {
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

export default connect(mapStateToProps, null)(Cards);
