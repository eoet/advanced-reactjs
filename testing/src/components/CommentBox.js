import React, { Component } from 'react';
import { connect } from 'react-redux';
import { fetchComments, saveComment } from 'actions';

class CommentBox extends Component {
  state = { comment: '' };

  handleChange = (evt) => {
    this.setState({
      comment: evt.target.value,
    });
  };

  handleSubmit = (evt) => {
    evt.preventDefault();

    this.props.saveComment(this.state.comment);

    this.setState({ comment: '' });
  };

  render() {
    return (
      <div>
        <form onSubmit={this.handleSubmit}>
        <h4>Add a Comment</h4>
        <textarea
          onChange={this.handleChange}
          value={this.state.comment}
          cols='30'
          rows='4'
        ></textarea>
        <div>
          <button>Submit Comment</button>
        </div>
      </form>
      <button className="fetch-comments" onClick={this.props.fetchComments}>Fetch Comments</button>
      </div>
    );
  }
}

const mapStateToProps = (state) => {};

export default connect(null, {
  saveComment,
  fetchComments
})(CommentBox);
