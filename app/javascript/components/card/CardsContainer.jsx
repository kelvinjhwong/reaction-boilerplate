import React from "react";
import Cards from "./Cards";
import { connect } from 'react-redux';

const mapStateToProps = (state, ownProps) => {
	console.log("state.cards[0]: " + state.cards[0])
  return {
    cards: state.cards.filter(card => card.list_id === Number(ownProps.listId)),
  };
};

export default connect(mapStateToProps, null)(Cards);
