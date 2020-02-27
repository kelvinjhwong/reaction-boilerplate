import React from 'react';
import Card from './Card';

const Cards = (props) => {
	return (
	  <div id="cards-container" data-id="list-1-cards">
	  	{ props.cards.map(card => <Card key={card.id} card={card}/>)}
	  </div>
	);
}

export default Cards;