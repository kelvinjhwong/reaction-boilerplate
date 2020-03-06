import React, { Component } from 'react';

import { Link } from 'react-router-dom';

class Card extends Component {
  render() {
    return (
      <div className='card-background'>
        <Link to={`/cards/${this.props.card.id}`}>
          <div className='card' onClick={this.handleCardClick}>
            <i className='edit-toggle edit-icon sm-icon'></i>
            <div className='card-info'>
              <div className='card-label green colorblindable'></div>
              <div className='card-label yellow colorblindable'></div>
              <div className='card-label red colorblindable'></div>
              <div className='card-label orange colorblindable'></div>
              <div className='card-label blue colorblindable'></div>
              <div className='card-label purple colorblindable'></div>
              <p>{this.props.card.title}</p>
            </div>
            <div className='card-icons'>
              <i className='clock-icon sm-icon overdue-recent completed'>
                {this.props.card.due_date}
              </i>
              <i className='description-icon sm-icon'></i>
              <i className='comment-icon sm-icon'></i>
            </div>
          </div>
        </Link>
      </div>
    );
  }
}

export default Card;
