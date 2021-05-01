import './style.scss';
import {
  BrowserRouter as Router, Route, NavLink, Switch,
} from 'react-router-dom';
import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware, compose } from 'redux';
import Controls from './components/controls';

import reducers from './reducers';

const About = (props) => {
  return <div> Hi my name is Will. I am a 23 at Dartmouth and very excited about web dev!!  </div>;
};
const Welcome = (props) => {
  return (
    <div>
      <div>Welcome</div>
      <Controls />
    </div>
  );
};

const Nav = (props) => {
  return (
    <nav>
      <ul>
        <li><NavLink to="/">Home</NavLink></li>
        <li><NavLink to="/about">About</NavLink></li>
        <li><NavLink to="/test/id1">test id1</NavLink></li>
        <li><NavLink to="/test/id2">test id2</NavLink></li>
      </ul>
    </nav>
  );
};

const FallBack = (props) => {
  return <div>URL Not Found</div>;
};

const Test = (props) => {
  return <div> ID: {props.match.params.id} </div>;
};

// this creates the store with the reducers, and does some other stuff to initialize devtools
// boilerplate to copy, don't have to know
const store = createStore(reducers, {}, compose(
  applyMiddleware(),
  window.__REDUX_DEVTOOLS_EXTENSION__ ? window.__REDUX_DEVTOOLS_EXTENSION__() : (f) => f,
));

const App = (props) => {
  return (
    <div>
      <h1>Front End Routing!!</h1>
      <Router>
        <div>
          <Nav />
          <Switch>
            <Route exact path="/" component={Welcome} />
            <Route path="/about" component={About} />
            <Route exact path="/test/:id" component={Test} />
            <Route component={FallBack} />
          </Switch>
        </div>
      </Router>
    </div>
  );
};

ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById('main'),
);
