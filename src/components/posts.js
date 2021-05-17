/* eslint-disable no-unused-vars */
/* eslint-disable eqeqeq */
/* eslint-disable no-param-reassign */
/* eslint-disable jsx-a11y/no-static-element-interactions */
/* eslint-disable react/button-has-type */
import React, { Component } from 'react';
import { Button, Card } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import { connect } from 'react-redux';
import { deletePost, fetchPost } from '../actions';
import deleteImg from '../img/delete.png';
import data from '../constant/DALI_Data.json';

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

  renderActivityItems = (responses) => {
    let render = 0;
    return (
      <div>
        {data.map((profile) => {
          if (render % 3 == 0) {
            render += 1;
            return <Card.Text className="activity-item"><span className="activity-name">{profile.name}</span> {responses[Math.floor(Math.random() * 3)]}</Card.Text>;
          } else {
            render += 1;
            return <></>;
          }
        })}
      </div>
    );
  }

  renderActivity = () => {
    const responses = ['liked your post', 'started following you', 'tagged you in a post'];
    return (
      <Card.Body>
        <Card.Title style={{
          textAlign: 'center', fontSize: '1.5rem', letterSpacing: '7.5px', color: 'grey',
        }}
        >ACTIVITY
        </Card.Title>
        {this.renderActivityItems(responses)}
      </Card.Body>

    );
  }

  render() {
    return (
      <div className="everything-div">
        <Card className="activity" style={{ background: 'linear-gradient(180deg, rgba(200,255,220,1) 30%, white 90%)' }}>
          {this.renderActivity()}
        </Card>
        <div className="all-posts-title">
          <h2 style={{ fontSize: '2.5rem' }}>FEED</h2>
          <br />
          <div className="all-posts">
            {this.props.posts.map((post) => {
              console.log(post);
              return (
                <Card className="post" style={{ background: 'linear-gradient(135deg, rgba(200,255,220,1) 10%, white 90%)' }}>
                  <Card.Body>
                    <Card.Title style={{ fontSize: '2rem', letterSpacing: '2px' }}>{post.title}</Card.Title>
                    <Card.Text style={{ color: 'grey', marginTop: '-10px' }}>by {post.author} {post.year}</Card.Text>
                    <Card.Text style={{ fontSize: '1.2rem' }}>{post.content}</Card.Text>
                    <img src={deleteImg} className="delete" onClick={() => { this.delete(post); }} />
                  </Card.Body>
                </Card>
              // <div className="posts-post" onClick={() => { this.setView(post.id); }}>
              //   {this.renderImg(post.coverUrl)}
              //   <div className="words-div">
              //     <div className="small-post-title">{post.title}</div>
              //     {/* <div className="tags">{post.tags.map((tag) => {
              //       return <span>{tag} </span>;
              //     })}
              //     </div> */}
              //   </div>
              // </div>
              );
            })}
          </div>
        </div>
      </div>
    );
  }
}

const mapStateToProps = (reduxState) => ({
  posts: reduxState.post.all,
  current: reduxState.post.current,
});

export default connect(mapStateToProps, { deletePost, fetchPost })(Posts);
