import React from 'react';
import CardsContainer from '../card/CardsContainer';
import ListTitleContainer from './ListTitleContainer';
import TogglableCardFormContainer from '../card/TogglableCardFormContainer';

class List extends React.Component {
  state = {
    addingCard: false,
  }

  handleToggleNewCardForm = () => {
    this.setState(prevState => ({
      addingCard: !prevState.addingCard,
    }));
  }

  render() {
    return (
      <div className={ this.state.addingCard ? 'list-wrapper add-dropdown-active' : 'list-wrapper' }>
        <div className='list-background'>
          <div className='list'>
            <a className='more-icon sm-icon' href=''></a>
            <ListTitleContainer
              listId={this.props.list.id}
              listTitle={this.props.list.title}
            />
            <div className='add-dropdown add-top'>
              <div className='card'></div>
              <a className='button'>Add</a>
              <i className='x-icon icon'></i>
              <div className='add-options'>
                <span>...</span>
              </div>
            </div>
            <CardsContainer listId={this.props.list.id} />
            <div className='add-dropdown add-bottom'>
              <div className='card'>
                <div className='card-info'></div>
                <textarea name='add-card'></textarea>
                <div className='members'></div>
              </div>
              <a className='button'>Add</a>
              <i className='x-icon icon'></i>
              <div className='add-options'>
                <span>...</span>
              </div>
            </div>
            <TogglableCardFormContainer listId={this.props.list.id} onToggleNewCardForm={this.handleToggleNewCardForm} addingCard={this.state.addingCard} />
          </div>
        </div>
      </div>
    );
  }
} 


export default List;
