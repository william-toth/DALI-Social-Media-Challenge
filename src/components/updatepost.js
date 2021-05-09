/* eslint-disable react/button-has-type */
import React, { Component } from 'react';
import { connect } from 'react-redux';
import { withRouter } from 'react-router';
import { newPost } from '../actions';

class UpdatePost extends Component {
  constructor(props) {
    super(props);
    this.state = {
      id: '', title: '', content: '', coverUrl: '', tags: '',
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

  updateNote = () => {
    const fields = {
      id: this.state.id, title: this.state.title, tags: this.state.tags, content: this.state.content, coverUrl: this.state.coverUrl,
    };
    this.props.updatePost(fields, this.props.history);
    this.setState({
      title: '', content: '', coverUrl: '', tags: '',
    });
  }

  // Render these components
  render() {
    return (
      <div>
        <h2>Title</h2>
        <textarea onChange={this.changeTitle} />
        <h2>Tags</h2>
        <textarea onChange={this.changeTags} />
        <h2>Content</h2>
        <textarea onChange={this.changeContent} />
        <h2>Cover Image URL</h2>
        <textarea onChange={this.changeIMGURL} />
        <button onClick={this.updateNote}>Add Note</button>
      </div>
    );
  }
}

const mapStateToProps = (reduxState) => ({
  post: reduxState.post.current,
});

export default withRouter(connect(mapStateToProps, { newPost })(UpdatePost));
