import React from "react";
import PropTypes from "prop-types";

import "./styles/Post.scss";

function Post({ post }) {
  const { title, description, name, date } = post;

  return (
    <div className="post">
      <div>
        <p>Title</p>
        <h2>{title}</h2>
      </div>
      <div>
        <p>Tutor</p>
        <h3>{name}</h3>
      </div>
      <div>
        <p>Description</p>
        <h3>{description}</h3>
      </div>
    </div>
  );
}

Post.propTypes = {
  post: PropTypes.shape({
    id: PropTypes.number.isRequired,
    title: PropTypes.string.isRequired,
    description: PropTypes.string.isRequired,
    date: PropTypes.string.isRequired,
  }).isRequired,
};

export default Post;
