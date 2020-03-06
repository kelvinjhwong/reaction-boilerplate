import React, { Component } from 'react';

class CardDueDate extends Component {
  render() {
    return (
      <li className='due-date-section'>
        <h3>Due Date</h3>
        <div id='dueDateDisplay' className='overdue completed'>
          <input id='dueDateCheckbox' type='checkbox' className='checkbox' />
          {this.props.card.due_date}{' '}
          <span>{/* compare due date to current date */}</span>
        </div>
      </li>
    );
  }
}

export default CardDueDate;
