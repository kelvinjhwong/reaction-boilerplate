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

export default connect(mapStateToProps, null)(Cards);
