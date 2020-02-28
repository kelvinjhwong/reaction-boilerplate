import React, { Component } from 'react';

class NewList extends Component {
  state = {
    editingListName: false,
    newListTitle: '',
  };

  handleToggleForm = () => {
    this.setState((prevState) => ({
      editingListName: !prevState.editingListName,
    }));
  };

  handleInput = (e) => {
    this.setState({
      newListTitle: e.target.value,
    });
  };

  handleCreateNewList = () => {
    const newListTitle = this.state.newListTitle;

    if (newListTitle !== '') {
      this.props.onCreateNewList(newListTitle);

      this.setState({
        editingListName: false,
        newListTitle: '',
      });
    }
  };

  render() {
    return (
      <div
        id='new-list'
        className={
          this.state.editingListName ? 'new-list selected' : 'new-list'
        }
      >
        <input
          type='text'
          placeholder='Add a list...'
          value={this.state.newListTitle}
          onChange={this.handleInput}
        />
        <div>
          <input
            type='submit'
            className='button'
            value='Save'
            onClick={this.handleCreateNewList}
          />
          <i className='x-icon icon' onClick={this.handleToggleForm}></i>
        </div>
        <span onClick={this.handleToggleForm}>Add a list...</span>
      </div>
    );
  }
}

export default NewList;
