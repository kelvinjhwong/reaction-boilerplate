import React from 'react';
import List from './List';

const ExistingLists = (props) => {
	return (
		<React.Fragment>
			<div id="existing-lists" className="existing-lists">
				{ props.lists.map(list => <List key={list.id} list={list} />)}
			</div>
			<div id="new-list" className="new-list">
			  <span>Add a list...</span>
			  <input type="text" placeholder="Add a list..." />
			  <div>
			    <input type="submit" className="button" value="Save" />
			    <i className="x-icon icon"></i>
			  </div>
			</div>
		</React.Fragment>
	);
}

export default ExistingLists;