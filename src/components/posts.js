/* eslint-disable eqeqeq */
/* eslint-disable no-param-reassign */
/* eslint-disable jsx-a11y/no-static-element-interactions */
/* eslint-disable react/button-has-type */
import React, { Component } from 'react';
import { connect } from 'react-redux';
import { deletePost, fetchPost } from '../actions';
import deleteImg from '../img/delete.png';
import imgError from '../img/no-img.png';

class Posts extends Component {
  constructor(props) {
    super(props);
    this.state = {

    };
  }

  delete = (post) => {
    this.props.deletePost(post.id, this.props.history);
    console.log(`Deleting post ${post.title}`);
  }

  setView = (id) => {
    this.props.history.push(`/posts/${id}`);
  }

  renderImg = (url) => {
    if (url == '') {
      return (
        <img src={imgError} className="cover-img" />
      );
    } else {
      return (
        <img src={url} className="cover-img" />
      );
    }
  }

  render() {
    return (
      <div className="all-posts">
        {this.props.posts.map((post) => {
          return (
            <div className="posts-post" onClick={() => { this.setView(post.id); }}>
              {this.renderImg(post.coverUrl)}
              <div className="words-div">
                <div className="small-post-title">{post.title}</div>
                <div className="tags">{post.tags}</div>
                <img src={deleteImg} className="delete" onClick={() => { this.delete(post); }} />
              </div>
            </div>
          );
        })}
      </div>
    );
  }
}

const mapStateToProps = (reduxState) => ({
  posts: reduxState.post.all,
  current: reduxState.post.current,
});

export default connect(mapStateToProps, { deletePost, fetchPost })(Posts);
