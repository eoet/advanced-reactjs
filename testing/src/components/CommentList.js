import React, { Component } from 'react';
import { connect } from 'react-redux'

class CommentList extends Component {
  renderComments = () => {
    return this.props.comments.map(comment => {
      return <li key={comment}>{comment}</li>
    });
  }
  render() {
    return (
      <div>
        <ul>
          {this.renderComments()}
        </ul>
      </div>
    );
  }
}

const mapStateToProps = ({comments}) => {
  return {comments: comments};
}

export default connect(mapStateToProps)(CommentList);