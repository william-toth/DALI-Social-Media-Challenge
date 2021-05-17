/* eslint-disable no-unused-vars */
/* eslint-disable no-alert */
/* eslint-disable eqeqeq */
/* eslint-disable react/button-has-type */
import React, { Component } from 'react';
import { Button, BreadCrumb, Card } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import { connect } from 'react-redux';
import { withRouter } from 'react-router';
import { newPost } from '../actions';

class NewPost extends Component {
  constructor(props) {
    super(props);
    this.state = {
      title: '',
      author: '',
      content: '',
      // coverUrl: '',
      // tags: '',
    };
  }

  changeTitle = (event) => {
    this.setState({ title: event.target.value });
  }

  // changeTags = (event) => {
  //   this.setState({ tags: event.target.value });
  // }

  changeContent = (event) => {
    this.setState({ content: event.target.value });
  }

  changeAuthor = (event) => {
    this.setState({ author: event.target.value });
  }

  addNote = () => {
    if (this.state.title != '' && this.state.content != '' && this.state.author != '') {
      const fields = {
        title: this.state.title,
        content: this.state.content,
        author: this.state.author,
      };
      console.log(fields);
      this.props.newPost(fields, this.props.history);
      console.log(`Added post ${fields.title}`);
      this.setState({
        title: '', content: '', author: '',
      });
    } else {
      alert('To create a new post, you must fill out all fields. Thanks!!');
    }
  }

  // Render these components
  render() {
    return (
      <div>
        <h2>NEW POST</h2>
        <Card className="new-post" style={{ background: 'linear-gradient(135deg, rgba(200,255,220,1) 10%, white 90%)' }}>
          <Card.Body>
            <Card.Text style={{ fontSize: '1.5rem' }}>Title</Card.Text>
            <textarea onChange={this.changeTitle} />
            <Card.Text style={{ fontSize: '1.5rem' }}>Author</Card.Text>
            <textarea onChange={this.changeAuthor} className="content-input" />
            <Card.Text style={{ fontSize: '1.5rem' }}>Content</Card.Text>
            <textarea onChange={this.changeContent} />
            <div style={{ marginTop: '10px' }}>
              <Button onClick={this.addNote}>Add Post</Button>
            </div>
          </Card.Body>
        </Card>
        <div className="blank-space" />
      </div>
    );
  }
}

export default withRouter(connect(null, { newPost })(NewPost));
