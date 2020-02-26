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
      {/* <div class="list-wrapper">
        <div class="list-background">
          <div class="list">
            <a class="more-icon sm-icon" href=""></a>
            <div>
              <input
                type="text"
                class="list-title"
                value="List title during editing"
                autofocus="true"
              />
            </div>
            <div class="add-dropdown add-top">
              <div class="card"></div>
              <a class="button">Add</a>
              <i class="x-icon icon"></i>
              <div class="add-options">
                <span>...</span>
              </div>
            </div>
            <div id="cards-container" data-id="list-2-cards">
              <div class="card-background">
                <div class="card ">
                  <i class="edit-toggle edit-icon sm-icon"></i>
                  <div class="cover-image"></div>
                  <div class="card-info">
                    <p>
                      Add members to a board (via the sidebar to collaborate,
                      share and discuss.
                    </p>
                  </div>
                  <div class="card-icons">
                    <i class="clock-icon sm-icon due-soon ">Sep 5</i>
                  </div>
                </div>
              </div>
              <div class="card-background">
                <div class="card ">
                  <i class="edit-toggle edit-icon sm-icon"></i>
                  <div class="cover-image"></div>
                  <div class="card-info">
                    <p>You can also change the background and more.</p>
                  </div>
                  <div class="card-icons"></div>
                </div>
              </div>
            </div>
            <div class="add-dropdown add-bottom">
              <div class="card">
                <div class="card-info"></div>
                <textarea name="add-card"></textarea>
                <div class="members"></div>
              </div>
              <a class="button">Add</a>
              <i class="x-icon icon"></i>
              <div class="add-options">
                <span>...</span>
              </div>
            </div>
            <div class="add-card-toggle" data-position="bottom">
              Add a card...
            </div>
          </div>
        </div>
      </div>
      <div class="list-wrapper add-dropdown-active">
        <div class="list-background">
          <div class="list">
            <a class="more-icon sm-icon" href=""></a>
            <div>
              <p class="list-title">Third List</p>
            </div>
            <div class="add-dropdown add-top">
              <div class="card"></div>
              <a class="button">Add</a>
              <i class="x-icon icon"></i>
              <div class="add-options">
                <span>...</span>
              </div>
            </div>
            <div id="cards-container" data-id="list-3-cards">
              <div class="card-background">
                <div class="card ">
                  <i class="edit-toggle edit-icon sm-icon"></i>
                  <div class="cover-image"></div>
                  <div class="card-info">
                    <p>
                      This is a card. Drag it onto "Tried it" to show it's done.
                    </p>
                  </div>
                  <div class="card-icons"></div>
                </div>
              </div>
              <div class="card-background">
                <div class="card ">
                  <i class="edit-toggle edit-icon sm-icon"></i>
                  <div class="cover-image"></div>
                  <div class="card-info">
                    <div class="card-label yellow colorblindable"></div>
                    <p>Add all the cards and lists you need</p>
                  </div>
                  <div class="card-icons">
                    <i class="description-icon sm-icon"></i>
                  </div>
                </div>
              </div>
            </div>
            <div class="add-dropdown add-bottom active-card">
              <div class="card">
                <div class="card-info"></div>
                <textarea name="add-card"></textarea>
                <div class="members"></div>
              </div>
              <a class="button">Add</a>
              <i class="x-icon icon"></i>
              <div class="add-options">
                <span>...</span>
              </div>
            </div>
            <div class="add-card-toggle" data-position="bottom">
              Add a card...
            </div>
          </div>
        </div>
      </div> */}
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
