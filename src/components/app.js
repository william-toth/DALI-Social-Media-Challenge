import React, { Component } from 'react';
import { connect } from 'react-redux';
import {
  BrowserRouter as Router, Route, NavLink, Switch,
} from 'react-router-dom';
import '../style.scss';
import Posts from './posts';
import Post from './post';
// import Post from './post';
import NewPost from './newpost';
import { fetchPosts } from '../actions';

const Nav = (props) => {
  return (
    <nav>
      <div className="nav-div">
        <div className="title">POSTS</div>
        <div className="link-div">
          <NavLink className="nav-link" to="/">All Posts</NavLink>
          <NavLink className="nav-link" to="/posts/new">New Post</NavLink>
        </div>
      </div>
    </nav>
  );
};

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
    };
  }

  componentDidMount() {
    this.props.fetchPosts();
  }

  // Render these components
  render() {
    return (
      <div>
        <Router>
          <div>
            <Nav />
            <Switch>
              <Route exact path="/" component={Posts} />
              <Route exact path="/posts/new" component={NewPost} />
              <Route path="/posts/:id" component={Post} />
            </Switch>
          </div>
        </Router>
      </div>
    );
  }
}

const mapStateToProps = (reduxState) => ({
  posts: reduxState.post.all,
});

export default connect(mapStateToProps, { fetchPosts })(App);
