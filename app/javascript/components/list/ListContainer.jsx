import React from "react";
import ListWrapper from "./ListWrapper";
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
  <div id="list-container" class="list-container">
    <div id="existing-lists" class="existing-lists">
      <ListWrapper />
      <ListWrapper />
      <ListWrapper />
    </div>
    <div id="new-list" class="new-list">
      <span>Add a list...</span>
      <input type="text" placeholder="Add a list..." />
      <div>
        <input type="submit" class="button" value="Save" />
        <i class="x-icon icon"></i>
      </div>
    </div>
  </div>
);

export default ListContainer;
