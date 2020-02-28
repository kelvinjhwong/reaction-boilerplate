import React from 'react';
import ExistingListsContainer from './ExistingListsContainer';
import NewListContainer from './NewListContainer';
import { connect } from 'react-redux';
import * as actions from '../../actions/BoardActions';

/*
ListContainer
  ListWrapper
    List (presentational)
      CardsContainer
        Card (presentational)
*/

const ListContainer = (props) => (
  <div id='list-container' className='list-container'>
    <ExistingListsContainer boardId={props.boardId} />
    <NewListContainer />
  </div>
);

export default ListContainer;
