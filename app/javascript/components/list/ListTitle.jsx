import React, { Component } from 'react';

class ListTitle extends Component {
  state = {
    editingListTitle: false,
    newListTitle: this.props.currentListTitle,
  };

  render() {
    return (
      <div>
        <p className='list-title'>{this.props.currentListTitle}</p>
        {/* <input
          type='text'
          class='list-title'
          value='List title during editing'
          autofocus='true'
        /> */}
      </div>
    );
  }
}

export default ListTitle;
