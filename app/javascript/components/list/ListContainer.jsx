import React from "react";
import ExistingListsContainer from "./ExistingListsContainer";
import { connect } from "react-redux";
import * as actions from "../../actions/BoardActions";

/*
ListContainer
  ListWrapper
    List (presentational)
      CardsContainer
        Card (presentational)
*/

const ListContainer = props => (
  <div id="list-container" className="list-container">
    <div id="existing-lists" className="existing-lists">
      <ExistingListsContainer boardId={props.boardId} />
    </div>
    <div id="new-list" className="new-list">
      <span>Add a list...</span>
      <input type="text" placeholder="Add a list..." />
      <div>
        <input type="submit" className="button" value="Save" />
        <i className="x-icon icon"></i>
      </div>
    </div>
  </div>
);

export default ListContainer;
