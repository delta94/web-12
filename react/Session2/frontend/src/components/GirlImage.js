import React, { Component } from "react";
import { Link } from "react-router-dom";
import config from "../config";

class GirlImage extends Component {
  render() {
    const comments = this.props.img.comment ? this.props.img.comment.map(comment => (
      <p>
        <span class="font-weight-bold" >{comment.createdBy.username}</span>:{" "}
        {comment.content}
      </p>
    ))
    : "";

    return (
      <div className="col-3">
        <div className="girl_image">
          <Link to={`/girl/${this.props.img._id}`}>
            <img
              className="img-fluid"
              src={config.rootPath + this.props.img.imageUrl}
              alt={this.props.img.title}
            />
          </Link>

          <h5>{this.props.img.title}</h5>
          <p>{this.props.img.description}</p>
          {comments}
        </div>
      </div>
    );
  }
}

export default GirlImage;
