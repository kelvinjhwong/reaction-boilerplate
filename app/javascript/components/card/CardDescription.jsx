import React, { Component } from 'react';

class CardDescription extends Component {
  state = {
    editingDescription: false,
    description: this.props.card.description,
  };

  handleInput = (e) => {
    this.setState({
      description: e.target.value,
    });
  };

  handleToggleEditingDescription = () => {
    this.setState((prevState) => ({
      editingDescription: !prevState.editingDescription,
    }));
  };

  handleCloseEditForm = () => {
    this.setState({
      description: this.props.card.description,
    });
    this.handleToggleEditingDescription();
  };

  handleUpdateDescription = () => {
    this.props.onUpdateCard(
      this.props.card.id,
      {
        description: this.state.description,
      },
      this.handleToggleEditingDescription,
    );
  };

  render() {
    return this.state.editingDescription ? (
      <form className='description'>
        <p>Description</p>
        <textarea
          className='textarea-toggle'
          rows='1'
          autoFocus
          value={this.state.description}
          onChange={this.handleInput}
        ></textarea>
        <div>
          <div
            className='button'
            value='Save'
            onClick={this.handleUpdateDescription}
          >
            Save
          </div>
          <i className='x-icon icon' onClick={this.handleCloseEditForm}></i>
        </div>
      </form>
    ) : (
      <form className='description'>
        <p>Description</p>
        <span
          id='description-edit'
          className='link'
          onClick={this.handleToggleEditingDescription}
        >
          Edit
        </span>
        <p className='textarea-overlay'>{this.state.description}</p>
        <p id='description-edit-options' className='hidden'>
          You have unsaved edits on this field.{' '}
          <span className='link'>View edits</span> -{' '}
          <span className='link'>Discard</span>
        </p>
      </form>
    );
  }
}

export default CardDescription;
