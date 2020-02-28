import React from 'react';
import List from './List';

const ExistingLists = (props) => {
  return (
    <div id='existing-lists' className='existing-lists'>
      {props.lists.map((list) => (
        <List key={list.id} list={list} />
      ))}
    </div>
  );
};

export default ExistingLists;
