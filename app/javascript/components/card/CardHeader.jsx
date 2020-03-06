import React, { Component } from 'react';

class CardHeader extends Component {
  state = {
    title: this.props.card.title,
  };

  handleInput = (e) => {
    this.setState({
      title: e.target.value,
    });
  };

  handleUpdateTitle = () => {
    this.props.onUpdateCard(this.props.card.id, {
      title: this.state.title,
    });
  };

  render() {
    return (
      <header>
        <i className='card-icon icon .close-modal'></i>
        <textarea
          className='list-title'
          style={{ height: 45 + 'px' }}
          value={this.state.title}
          onChange={this.handleInput}
          onBlur={this.handleUpdateTitle}
        ></textarea>
        <p>
          in list <a className='link'>{this.props.listTitle}</a>
          <i className='sub-icon sm-icon'></i>
        </p>
      </header>
    );
  }
}

export default CardHeader;
