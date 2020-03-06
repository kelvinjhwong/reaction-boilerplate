import React from 'react';
import List from './List';

class ExistingLists extends React.Component {
	state = {
	  addingCardToList: null,
	}

	handleToggleNewCardForm = (listId) => {
	  this.setState(prevState => ({
	    addingCardToList: prevState.addingCardToList === listId ? null : listId,
	  }));
	}

	render() {
		return (
		  <div id='existing-lists' className='existing-lists'>
		    {this.props.lists.map((list) => (
		      <List key={list.id} list={list} addingCard={list.id === this.state.addingCardToList} onToggleNewCardForm={this.handleToggleNewCardForm}/>
		    ))}
		  </div>
		);
	}
};

export default ExistingLists;
