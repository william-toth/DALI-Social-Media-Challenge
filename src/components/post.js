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
    console.log(this.state.firstRender);
    if (this.state.firstRender) {
      return (
        <div className="post">
          <div className="post-header">
            <div className="post-title">{this.props.current.title}</div>
            <img className="post-change" src={editImg} onClick={this.toggleEdit} />
          </div>
          <div className="post-tags">{this.props.current.tags}</div>
          <ReactMarkdown className="content">{this.props.current.content}</ReactMarkdown>
        </div>
      );
    } else {
      return (
        <div className="post">
          <div className="post-title">{this.state.title}</div>
          <div className="post-tags">{this.state.tags}</div>
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
    this.setState({ tags: event.target.value });
  }

  changeContent = (event) => {
    this.setState({ content: event.target.value });
  }

  renderEdit = () => {
    return (
      <div className="post">
        <div className="new-post-div">
          <div className="new-post-title">Edit Post</div>
          <div className="field">Title</div>
          <textarea onChange={this.changeTitle}>{this.props.current.title}</textarea>
          <div className="field">Tags</div>
          <textarea onChange={this.changeTags}>{this.props.current.tags}</textarea>
          <div className="field">Content</div>
          <textarea onChange={this.changeContent} className="content-input">{this.props.current.content}</textarea>
          <div>
            <button className="add-post" onClick={this.toggleEdit}>done</button>
          </div>
        </div>
      </div>
    );
  }

  //   renderPost = () => {
  //     let titleToDisplay = null;
  //     if (this.state.editingTitle) {
  //       titleToDisplay = (
  //         <span>
  //           <textarea onChange={this.handleTitleChange} />
  //           <button onClick={this.toggleTitleEdit}>done</button>
  //         </span>
  //       );
  //     } else {
  //       titleToDisplay = <h2 onClick={this.toggleTitleEdit}>{this.state.tempTitle}</h2>;
  //     }

  //     let tagsToDisplay = null;
  //     if (this.state.editingTags) {
  //       tagsToDisplay = (
  //         <span>
  //           <textarea onChange={this.handleTagsChange} />
  //           <button onClick={this.toggleTagsEdit}>done</button>
  //         </span>
  //       );
  //     } else {
  //       tagsToDisplay = <div onClick={this.toggleTagsEdit}>{this.state.tempTags}</div>;
  //     }

  //     let contentToDisplay = null;
  //     if (this.state.editingContent) {
  //       contentToDisplay = (
  //         <span>
  //           <textarea onChange={this.handleContentChange} />
  //           <button onClick={this.toggleContentEdit}>done</button>
  //         </span>
  //       );
  //     } else {
  //       contentToDisplay = <div onClick={this.toggleContentEdit}>{this.state.tempContent}</div>;
  //     }

  //     return (
  //       <div className="post">
  //         {titleToDisplay}
  //         {tagsToDisplay}
  //         {contentToDisplay}
  //       </div>
  //     );
  //   }

  //   toggleTitleEdit = () => {
  //     if (this.state.editingTitle) {
  //     //   this.updatePost();
  //     }
  //     this.setState({ editingTitle: !this.state.editingTitle });
  //   }

  //   toggleTagsEdit = () => {
  //     if (this.state.editingTags) {
  //     //   this.updatePost();
  //     }
  //     this.setState({ editingTags: !this.state.editingTags });
  //   }

  //   toggleContentEdit = () => {
  //     if (this.state.editingContent) {
  //     //   this.updatePost();
  //     }
  //     this.setState({ editingContent: !this.state.editingContent });
  //   }

  //   handleTitleChange = (event) => {
  //     this.setState({ tempTitle: event.target.value });
  //   }

  //   handleTagsChange = (event) => {
  //     this.setState({ tempTags: event.target.value });
  //   }

  //   handleContentChange = (event) => {
  //     this.setState({ tempContent: event.target.value });
  //   }

    updatePost = () => {
      const fields = {
        id: this.props.current.id, title: this.state.title, tags: this.state.tags, content: this.state.content, coverUrl: this.props.current.coverUrl,
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
