import React from 'react';
import ExistingListsContainer from './ExistingListsContainer';
import NewListContainer from './NewListContainer';

/*
ListContainer
  ListWrapper
    List (presentational)
      CardsContainer
        Card (presentational)
*/

const ListsContainer = (props) => (
  <div id='list-container' className='list-container'>
    <ExistingListsContainer boardId={props.boardId} />
    <NewListContainer boardId={props.boardId} />
  </div>
);

export default ListsContainer;
