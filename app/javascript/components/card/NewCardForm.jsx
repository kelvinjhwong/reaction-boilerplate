import React from "react";

class NewCardForm extends React.Component {
  state = {
    title: this.props.title || "",
  };

  handleChange = e => {
    this.setState({
      [e.target.name]: e.target.value
    });
  };

  render() {
    return (
      <div className="add-dropdown add-bottom active-card">
        <div className="card">
          <div className="card-info"></div>
          <textarea name="add-card" onChange={this.handleChange}>{this.state.title}</textarea><div className="members"></div>
        </div>
        <a className="button" onClick={this.props.handleAddCard}>Add</a><i className="x-icon icon"></i>
        <div className="add-options"><span>...</span>
        </div>
      </div>
    );
  }
};

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