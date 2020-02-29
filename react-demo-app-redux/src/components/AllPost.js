import React, { Component } from "react";
import { connect } from "react-redux";

// The most important thing to remember here is that even though you are importing from
// ./Post you are NOT using the component that you wrote directly.
// You are actually using the component that connect created: ConnectedComponent.
import Post from "./Post";
import EditPostForm from "./EditPostForm";

class AllPost extends Component {
  render() {
    return (
      <div className="post-container">
        <h1 className="post_heading">All Posts</h1>
        {this.props.posts.map(post => (
          <div key={post.id}>
            {post.editing ? (
              <EditPostForm key={post.id} post={post} />
            ) : (
              <Post key={post.id} post={post} />
            )}
          </div>
        ))}
      </div>
    );
  }
}

const postsData = state => state.postReducer;

const mapStateToProps = state => {
  return {
    posts: postsData(state)
  };
};

//connect() creates a new React Component which is the one exported.
// connect() is a function that injects Redux-related props into your component.
// You can inject data and callbacks that change that data by dispatching actions.
export default connect(mapStateToProps)(AllPost);

// ConnectedComponent we have access to a couple of things:
// store: The Redux store. Which means, we have access to getState.
// mapStateToProps: Your function you used when creating ConnectedComponent.
