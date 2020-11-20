import React, { Component } from 'react';
import { Link, Route } from 'react-router-dom';
import { connect } from 'react-redux';
import CommentBox from './CommentBox';
import CommentList from './CommentList';
import { changeAuth } from 'actions';

class App extends Component {
  renderButton() {
    if (this.props.auth) {
      return <button onClick={() => this.props.changeAuth(false)}>Sign Out</button>;
    }
    return <button onClick={() => this.props.changeAuth(true)}>Sign In</button>;
  }
  renderHeader() {
    return (
      <ul>
        <li>
          <Link to='/'>Home</Link>
        </li>
        <li>
          <Link to='/post'>Post A Comment</Link>
        </li>
        <li>{this.renderButton()}</li>
      </ul>
    );
  }
  render() {
    return (
      <div>
        {this.renderHeader()}
        <Route path='/post' component={CommentBox} />
        <Route path='/' exact component={CommentList} />
      </div>
    );
  }
}

const mapStateToProps = ({ auth }) => {
  return { auth: auth };
};

export default connect(mapStateToProps, {
  changeAuth,
})(App);
