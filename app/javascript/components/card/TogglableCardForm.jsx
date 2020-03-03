import React, { Component } from "react";
import NewCardForm from "./NewCardForm";

/*
- handlers
	- name input
*/

class TogglableCardForm extends Component {
  state = {
    visible: false
  };

  handleToggleForm = e => {
    this.setState(prevState => {
      return {
        visible: !prevState.visible
      };
    });
  };

  render() {
    return this.state.visible ? (
      <NewCardForm
        onToggleForm={this.handleToggleForm}
        listId={this.props.listId}
        onAddForm={this.props.onAddCard}
      />
    ) : (
      <div 
        className='add-card-toggle' 
        data-position='bottom' 
        onClick={this.handleToggleForm}>
        Add a card...
      </div>
  )}
}

export default TogglableCardForm;
