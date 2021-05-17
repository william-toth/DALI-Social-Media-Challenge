/* eslint-disable no-unused-vars */
import React, { Component } from 'react';
import { connect } from 'react-redux';
import {
  BrowserRouter as Router, Route, NavLink, Switch,
} from 'react-router-dom';
import '../style.scss';
import Posts from './posts';
// import Post from './post';
import NewPost from './newpost';
import { fetchPosts } from '../actions';
import Profiles from './profiles';
import NavigationBar from './nav';
import Profile from './profile';

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
      <div className="everything">
        <Router>
          {/* <div>
            <Nav /> */}
          <NavigationBar />
          <Switch>
            <Route exact path="/profiles" component={Profiles} />
            <Route exact path="/" component={Posts} />
            <Route exact path="/posts/new" component={NewPost} />
            <Route exact path="/profiles/:profile" component={Profile} />
            {/* <Route path="/posts/:id" component={Post} /> */}
          </Switch>
          {/* </div> */}
        </Router>
      </div>
    );
  }
}

const mapStateToProps = (reduxState) => ({
  posts: reduxState.post.all,
});

export default connect(mapStateToProps, { fetchPosts })(App);
