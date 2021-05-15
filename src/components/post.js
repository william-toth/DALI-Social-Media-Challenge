/* eslint-disable eqeqeq */
/* eslint-disable react/button-has-type */
/* eslint-disable jsx-a11y/no-static-element-interactions */
/* eslint-disable react/no-access-state-in-setstate */
import React, { Component } from 'react';
import { connect } from 'react-redux';
import '../style.scss';
import ReactMarkdown from 'react-markdown';
import { fetchPost, updatePost } from '../actions';
import editImg from '../img/edit.png';

class Post extends Component {
  constructor(props) {
    super(props);
    this.state = {
    //   editingTitle: false,
    //   editingTags: false,
    //   editingContent: false,
    //   tempTitle: this.props.current.title,
    //   tempTags: this.props.current.tags,
    //   tempContent: this.props.current.Content,
      editing: false,
      title: this.props.current.title,
      tags: this.props.current.tags,
      content: this.props.current.content,
      firstRender: true,
    };
  }

  componentDidMount() {
    this.props.fetchPost(this.props.match.params.id);
  }

  renderPost = () => {
    if (this.state.firstRender) {
      return (
        <div className="post">
          <div className="post-header">
            <div className="post-title">{this.props.current.title}</div>
            <img className="post-change" src={editImg} onClick={this.toggleEdit} />
          </div>
          <div className="post-tags">
            { this.props.current.tags != null
              && this.props.current.tags.map((tag) => {
                return <span>{tag} </span>;
              })}
          </div>
          <ReactMarkdown className="content">{this.props.current.content}</ReactMarkdown>
        </div>
      );
    } else {
      return (
        <div className="post">
          <div className="post-title">{this.state.title}</div>
          <div className="post-tags">{this.state.tags.map((tag) => {
            return <span>{tag} </span>;
          })}
          </div>
          <ReactMarkdown className="content">{this.state.content}</ReactMarkdown>
          <button onClick={this.toggleEdit}>edit</button>
        </div>
      );
    }
  }

  toggleEdit = () => {
    if (this.state.editing) {
      this.setState({ title: this.state.title, tags: this.state.tags, content: this.state.content });
      this.updatePost();
    }
    this.setState({ firstRender: false });
    this.setState({ editing: !this.state.editing });
  }

  changeTitle = (event) => {
    this.setState({ title: event.target.value });
  }

  changeTags = (event) => {
    const tagStr = event.target.value;
    let currWord = '';
    const arr = [];
    for (let i = 0; i < tagStr.length; i += 1) {
      const letter = tagStr[i];
      if (letter == ' ' || i == tagStr.length - 1) {
        if (i == tagStr.length - 1) {
          currWord += letter;
        }
        arr.push(currWord);
        currWord = '';
      } else {
        currWord += letter;
      }
    }
    this.setState({ tags: arr });
  }

  changeContent = (event) => {
    this.setState({ content: event.target.value });
  }

  tagsToString = (tags) => {
    if (tags != null) {
      let str = '';
      for (const tag of tags) {
        str += tag;
        str += ' ';
      }
      return str;
    } else {
      return '';
    }
  }

  renderEdit = () => {
    return (
      <div className="post">
        <div className="new-post-div">
          <div className="new-post-title">Edit Post</div>
          <div className="field">Title</div>
          <textarea onChange={this.changeTitle} defaultValue={this.props.current.title} />
          <div className="field">Tags</div>
          <textarea onChange={this.changeTags} defaultValue={this.tagsToString(this.props.current.tags)} />
          <div className="field">Content</div>
          <textarea onChange={this.changeContent} className="content-input" defaultValue={this.props.current.content} />
          <div>
            <button className="add-post" onClick={this.toggleEdit}>done</button>
          </div>
        </div>
      </div>
    );
  }

    updatePost = () => {
      const fields = {
        id: this.props.current.id, title: this.state.title, tags: this.tagsToString(this.state.tags), content: this.state.content, coverUrl: this.props.current.coverUrl,
      };
      this.props.updatePost(fields);
    }

    // Render these components
    render() {
      return (
        <div>
          {!this.state.editing && this.renderPost()}
          {this.state.editing && this.renderEdit()}
          {/* {this.props.current.title} */}
        </div>
      );
    }
}

const mapStateToProps = (reduxState) => ({
  posts: reduxState.post.all,
  current: reduxState.post.current,
});

export default connect(mapStateToProps, { fetchPost, updatePost })(Post);
