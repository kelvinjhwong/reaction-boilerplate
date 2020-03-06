import React, { Component } from 'react';
import { Link } from 'react-router-dom';

import CardHeader from './CardHeader';
import CardLabels from './CardLabels';
import CardDueDate from './CardDueDate';
import CardDescription from './CardDescription';
import Comment from '../comment/Comment';

class CardModal extends Component {
  componentDidMount() {
    this.props.onFetchCard();
  }

  render() {
    console.log('in CardModal', this.props.card);
    if (this.props.card.title && this.props.listTitle) {
      console.log('actually rendering CardModal', this.props.card);
      return (
        <div id='modal-container'>
          <div className='screen'></div>
          <div id='modal'>
            <Link to={`/boards/${this.props.card.board_id}`}>
              <i className='x-icon icon close-modal'></i>
            </Link>
            <CardHeader {...this.props} />
            <section className='modal-main'>
              <ul className='modal-outer-list'>
                <li className='details-section'>
                  <ul className='modal-details-list'>
                    <CardLabels {...this.props} />
                    <CardDueDate {...this.props} />
                  </ul>
                  <CardDescription {...this.props} />
                </li>
                <li className='comment-section'>
                  <h2 className='comment-icon icon'>Add Comment</h2>
                  <div>
                    <div className='member-container'>
                      <div className='card-member'>TP</div>
                    </div>
                    <div className='comment'>
                      <label>
                        <textarea
                          required=''
                          rows='1'
                          placeholder='Write a comment...'
                        ></textarea>
                        <div>
                          <a className='light-button card-icon sm-icon'></a>
                          <a className='light-button smiley-icon sm-icon'></a>
                          <a className='light-button email-icon sm-icon'></a>
                          <a className='light-button attachment-icon sm-icon'></a>
                        </div>
                        <div>
                          <input
                            type='submit'
                            className='button not-implemented'
                            value='Save'
                          />
                        </div>
                      </label>
                    </div>
                  </div>
                </li>
                <li className='activity-section'>
                  <h2 className='activity-icon icon'>Activity</h2>
                  <ul className='horiz-list'>
                    <li className='not-implemented'>Show Details</li>
                  </ul>
                  <ul className='modal-activity-list'>
                    {this.props.card.comments_count > 0
                      ? this.props.card.comments.map((comment) => (
                          <Comment key={comment.id} comment={comment} />
                        ))
                      : null}
                    {/* <li>
                      <div className='member-container'>
                        <div className='card-member small-size'>VR</div>
                      </div>
                      <p>
                        <span className='member-name'>Victor Reyes</span>{' '}
                        changed the background of this board{' '}
                        <small>yesterday at 4:53 PM</small>
                      </p>
                    </li> */}
                    {/* <li className='activity-comment'>
                      <div className='member-container'>
                        <div className='card-member'>VR</div>
                      </div>
                      <h3>Victor Reyes</h3>
                      <div className='comment static-comment'>
                        <span>Example of a comment.</span>
                      </div>
                      <small>
                        22 minutes ago - <span className='link'>Edit</span> -{' '}
                        <span className='link'>Delete</span>
                      </small>
                      <div className='comment'>
                        <label>
                          <textarea
                            required=''
                            rows='1'
                            // value='Example of a comment.'
                          ></textarea>
                          <div>
                            <a className='light-button card-icon sm-icon'></a>
                            <a className='light-button smiley-icon sm-icon'></a>
                            <a className='light-button email-icon sm-icon'></a>
                          </div>
                          <div>
                            <p>You haven't typed anything!</p>
                            <input
                              type='submit'
                              className='button not-implemented'
                              value='Save'
                            />
                            <i className='x-icon icon'></i>
                          </div>
                        </label>
                      </div>
                    </li> */}
                  </ul>
                </li>
              </ul>
            </section>
            <aside className='modal-buttons'>
              <h2>Add</h2>
              <ul>
                <li className='member-button'>
                  <i className='person-icon sm-icon'></i>Members
                </li>
                <li className='label-button'>
                  <i className='label-icon sm-icon'></i>Labels
                </li>
                <li className='checklist-button'>
                  <i className='checklist-icon sm-icon'></i>Checklist
                </li>
                <li className='date-button not-implemented'>
                  <i className='clock-icon sm-icon'></i>Due Date
                </li>
                <li className='attachment-button not-implemented'>
                  <i className='attachment-icon sm-icon'></i>Attachment
                </li>
              </ul>
              <h2>Actions</h2>
              <ul>
                <li className='move-button'>
                  <i className='forward-icon sm-icon'></i>Move
                </li>
                <li className='copy-button'>
                  <i className='card-icon sm-icon'></i>Copy
                </li>
                <li className='subscribe-button'>
                  <i className='sub-icon sm-icon'></i>Subscribe
                  <i className='check-icon sm-icon'></i>
                </li>
                <hr />
                <li className='archive-button'>
                  <i className='file-icon sm-icon '></i>Archive
                </li>
              </ul>
              <ul className='light-list'>
                <li className='not-implemented'>Share and more...</li>
              </ul>
            </aside>
          </div>
        </div>
      );
    } else {
      return null;
    }
  }
}

export default CardModal;
