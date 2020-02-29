import React, { Component } from "react";
import { connect } from "react-redux";

class Post extends Component {
  handleDelete = () => {
    this.props.dispatch({
      type: "DELETE_POST",
      id: this.props.post.id
    });
  };

  handleEdit = () => {
    this.props.dispatch({
      type: "EDIT_POST",
      id: this.props.post.id
    });
  };

  render() {
    return (
      <div className="post">
        <h2 className="post_title">{this.props.post.title}</h2>
        <p className="post_message">{this.props.post.message}</p>
        <div className="control-buttons">
          <button className="edit" onClick={this.handleEdit}>
            Edit
          </button>
          <button className="delete" onClick={this.handleDelete}>
            Delete
          </button>
        </div>
      </div>
    );
  }
}
export default connect()(Post);
