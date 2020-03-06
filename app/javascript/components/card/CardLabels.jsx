import React, { Component } from 'react';

class CardLabels extends Component {
  // state = {
  //   labels: this.props.card.labels,
  // };

  render() {
    return (
      <li className='labels-section'>
        <h3>Labels</h3>
        {this.props.card.labels.map((labelColor) => (
          <div className='member-container'>
            <div className={`${labelColor} label colorblindable`}></div>
          </div>
        ))}
      </li>
    );
  }
}

export default CardLabels;
