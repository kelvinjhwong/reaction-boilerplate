import React, { Component } from 'react';

class ListTitle extends Component {
  state = {
    editingListTitle: false,
    newListTitle: this.props.listTitle,
  };

  handleTitleClick = () => {
    this.setState({
      editingListTitle: true,
    });
  };

  handleInput = (e) => {
    this.setState({
      newListTitle: e.target.value,
    });
  };

  handleUpdateListTitle = () => {
    const newListTitle = this.state.newListTitle;
    if (newListTitle === '') {
      this.setState({
        newListTitle: this.props.listTitle,
      });
    } else if (newListTitle !== this.props.listTitle) {
      this.props.onUpdateListTitle(newListTitle, () => {
        this.setState({
          newListTitle: this.props.listTitle,
        });
      });
    }
  };

  render() {
    return (
      <div>
        <input
          type='text'
          className='list-title'
          value={this.state.newListTitle}
          autoFocus={this.state.editingListTitle}
          onChange={this.handleInput}
          onBlur={this.handleUpdateListTitle}
        />
      </div>
    );
  }
}

export default ListTitle;
