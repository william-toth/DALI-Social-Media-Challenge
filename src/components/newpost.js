/* eslint-disable no-alert */
/* eslint-disable eqeqeq */
/* eslint-disable react/button-has-type */
import React, { Component } from 'react';
import { connect } from 'react-redux';
import { withRouter } from 'react-router';
import { newPost } from '../actions';

class NewPost extends Component {
  constructor(props) {
    super(props);
    this.state = {
      title: '', content: '', coverUrl: '', tags: '',
    };
  }

  changeTitle = (event) => {
    this.setState({ title: event.target.value });
  }

  changeTags = (event) => {
    this.setState({ tags: event.target.value });
  }

  changeContent = (event) => {
    this.setState({ content: event.target.value });
  }

  changeIMGURL = (event) => {
    this.setState({ coverUrl: event.target.value });
  }

  addNote = () => {
    if (this.state.title != '' && this.state.content != '') {
      const fields = {
        title: this.state.title, tags: this.state.tags, content: this.state.content, coverUrl: this.state.coverUrl,
      };
      this.props.newPost(fields, this.props.history);
      console.log(`Added post ${fields.title}`);
      this.setState({
        title: '', content: '', coverUrl: '', tags: '',
      });
    } else {
      alert('To create a new post, you must at least fill out the title and content fields. Thanks!!');
    }
  }

  // Render these components
  render() {
    return (
      <div className="post">
        <div className="new-post-div">
          <div className="new-post-title">Post</div>
          <div className="field">Title</div>
          <textarea onChange={this.changeTitle} />
          <div className="field">Tags</div>
          <textarea onChange={this.changeTags} />
          <div className="field">Content</div>
          <textarea onChange={this.changeContent} className="content-input" />
          <div className="field">Cover Image URL</div>
          <textarea onChange={this.changeIMGURL} />
          <div>
            <button className="add-post" onClick={this.addNote}>Add Post</button>
          </div>
        </div>
      </div>
    );
  }
}

export default withRouter(connect(null, { newPost })(NewPost));
