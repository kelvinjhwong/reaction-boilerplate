import React from "react";

class NewCardForm extends React.Component {
  state = {
    title: this.props.title || "",
  };

  handleChange = e => {
    this.setState({
      title: e.target.value,
    });
  };

  handleAddCard = _ => {
    if (this.state.title !== "") {
      this.props.onAddCard(this.state.title, () => this.setState({title: "", }));
      this.props.onToggleNewCardForm(this.props.listId);
    }
  }

  render() {
    return (
      <React.Fragment>
        <div className={this.props.addingCard ? "add-dropdown add-bottom active-card" : "add-dropdown add-bottom"}>
          <div className="card">
            <div className="card-info"></div>
            <textarea name="add-card" onChange={this.handleChange} value={this.state.title}></textarea><div className="members"></div>
          </div>
          <a className="button" onClick={this.handleAddCard}>Add</a><i className="x-icon icon" onClick={this.props.onToggleNewCardForm}></i>
          <div className="add-options"><span>...</span>
          </div>
        </div>
        <div 
          className='add-card-toggle'
          data-position='bottom' 
          onClick={() => { this.props.onToggleNewCardForm(this.props.listId) }}>
          Add a card...
        </div>
      </React.Fragment>
    )
  };
};

// ### 1.1.3. New Card Form
// The new card form is active when the parent `.list-wrapper` has the `add-dropdown-active` class and the `.add-dropdown.add-bottom` element has the `active-card` class.

// Since only one list should have the form active at a time, only one list should  have the `add-dropdown-active` class at a time.

// <textarea name="add-card" onChange={this.handleChange}>{this.state.title}</textarea><div className="members"></div>

/*
list_id
title
due_date
description
*/

export default NewCardForm;

// const NewBoardForm = props => (
//   <div>
//     <header>
//       <span>Create Board</span>
//       <a
//         href="#"
//         className="icon-sm icon-close"
//         onClick={props.onCloseClick}
//       ></a>
//     </header>
//     <div className="content">
//       <form onSubmit={props.onSubmit}>
//         <dl>
//           <dt>Title</dt>
//           <dd>
//             <input
//               type="text"
//               placeholder='Like "Publishing Calendar"...'
//               value={props.title}
//               onChange={props.onTextChange}
//             />
//           </dd>
//         </dl>
//         <button className="button" type="submit">
//           Create
//         </button>
//       </form>
//     </div>
//   </div>
// );

// export default NewBoardForm;