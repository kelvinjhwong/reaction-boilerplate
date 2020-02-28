import React from 'react';
import CardsContainer from '../card/CardsContainer';
import ListTitleContainer from './ListTitleContainer';

const List = (props) => (
  <div className='list-wrapper'>
    <div className='list-background'>
      <div className='list'>
        <a className='more-icon sm-icon' href=''></a>
        <ListTitleContainer currentListTitle={props.list.title} />
        <div className='add-dropdown add-top'>
          <div className='card'></div>
          <a className='button'>Add</a>
          <i className='x-icon icon'></i>
          <div className='add-options'>
            <span>...</span>
          </div>
        </div>
        <CardsContainer listId={props.list.id} />
        <div className='add-dropdown add-bottom'>
          <div className='card'>
            <div className='card-info'></div>
            <textarea name='add-card'></textarea>
            <div className='members'></div>
          </div>
          <a className='button'>Add</a>
          <i className='x-icon icon'></i>
          <div className='add-options'>
            <span>...</span>
          </div>
        </div>
        <div className='add-card-toggle' data-position='bottom'>
          Add a card...
        </div>
      </div>
    </div>
  </div>
);

export default List;
