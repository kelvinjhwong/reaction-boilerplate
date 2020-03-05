import React, { Component } from 'react';

// {
// "id": 6,
// "list_id": 5,
// "title": "Card 1",
// "due_date": "2020-03-03T16:50:48.436Z",
// "labels": [],
// "description": "I like this card",
// "position": null,
// "created_at": "2020-03-03T16:50:48.438Z",
// "updated_at": "2020-03-03T16:50:48.438Z",
// "archived": false,
// "completed": false,
// "board_id": 2,
// "comments_count": 0,
// "comments": [],
// "actions": []
// }

class EditCardForm extends Component {
  state = {
    card: {},
  };

  componentDidUpdate(prevProps) {
    if (prevProps.card !== this.props.card) {
      this.setState({
        card: this.props.card,
      });
    }
  }

  render() {
    return (
      <React.Fragment>
        <header>
          <i className='card-icon icon .close-modal'></i>
          <textarea
            className='list-title'
            style={{ height: 45 + 'px' }}
            value={this.state.card.title}
          ></textarea>
          <p>
            in list <a className='link'>{this.props.listTitle}</a>
            <i className='sub-icon sm-icon'></i>
          </p>
        </header>
        <section className='modal-main'>
          <ul className='modal-outer-list'>
            <li className='details-section'>
              <ul className='modal-details-list'>
                <li className='labels-section'>
                  <h3>Labels</h3>
                  {/* this.state.labels.map((label) => (
                    <div className='member-container'>
                      <div className={`${label} label colorblindable`}></div>
                    </div>
                  )) */}
                </li>
                <li className='due-date-section'>
                  <h3>Due Date</h3>
                  <div id='dueDateDisplay' className='overdue completed'>
                    <input
                      id='dueDateCheckbox'
                      type='checkbox'
                      className='checkbox'
                    />
                    {this.state.due_date}{' '}
                    <span>{/* compare due date to current date */}</span>
                  </div>
                </li>
              </ul>
              <form className='description'>
                <p>Description</p>
                <textarea
                  className='textarea-toggle'
                  rows='1'
                  autoFocus
                  value={this.state.description}
                ></textarea>
                <div>
                  <div className='button' value='Save'>
                    Save
                  </div>
                  <i className='x-icon icon'></i>
                </div>
              </form>
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
                <li>
                  <div className='member-container'>
                    <div className='card-member'>TP</div>
                  </div>
                  <h3>Taylor Peat</h3>
                  <div className='comment static-comment'>
                    <span>The activities are not functional.</span>
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
                        value='The activities have not been implemented yet.'
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
                </li>
                <li>
                  <div className='member-container'>
                    <div className='card-member small-size'>VR</div>
                  </div>
                  <p>
                    <span className='member-name'>Victor Reyes</span> changed
                    the background of this board{' '}
                    <small>yesterday at 4:53 PM</small>
                  </p>
                </li>
                <li className='activity-comment'>
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
                        value='Example of a comment.'
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
                </li>
              </ul>
            </li>
          </ul>
        </section>
      </React.Fragment>
    );
  }
}

export default EditCardForm;
