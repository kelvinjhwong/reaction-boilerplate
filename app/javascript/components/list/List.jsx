import React from 'react';
import CardsContainer from '../card/CardsContainer';
import ListTitleContainer from './ListTitleContainer';
import NewCardFormContainer from '../card/NewCardFormContainer';

const List = (props) => {
  return (
    <div
      className={
        props.addingCard ? 'list-wrapper add-dropdown-active' : 'list-wrapper'
      }
    >
      <div className='list-background'>
        <div className='list'>
          <a className='more-icon sm-icon' href=''></a>
          <ListTitleContainer
            listId={props.list.id}
            listTitle={props.list.title}
          />
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
          <NewCardFormContainer
            listId={props.list.id}
            onToggleNewCardForm={props.onToggleNewCardForm}
            addingCard={props.addingCard}
          />
        </div>
      </div>
    </div>
  );
};

export default List;
