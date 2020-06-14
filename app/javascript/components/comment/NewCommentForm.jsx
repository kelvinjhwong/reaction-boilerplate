import React, { Component } from 'react';

class NewCommentForm extends Component {
  state = {
    comment: '',
  };

  handleChange = (e) => {
    this.setState({
      comment: e.target.value,
    });
  };

  handleCreateComment = (e) => {
    this.props.onCreateComment(
      this.props.card.id,
      {
        card_id: this.props.card.id,
        comment: {
          text: this.state.comment,
        },
      },
      () => {
        this.setState({
          comment: '',
        });
      },
    );
  };

  render() {
    return (
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
                value={this.state.comment}
                onChange={this.handleChange}
                required
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
                  className={this.state.comment === '' ? 'button not-implemented' : 'button'}
                  value='Save'
                  onClick={this.handleCreateComment}
                  disabled={this.state.comment === ''}
                />
              </div>
            </label>
          </div>
        </div>
      </li>
    );
  }
}

export default NewCommentForm;
