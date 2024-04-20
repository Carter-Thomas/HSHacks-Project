import React from "react";
import PropTypes from "prop-types";

function Post({ post }) {
  const { title, description, name, date } = post;

  return (
    <div className="post">
      <div className="post-header">
        <h2>{title}</h2>
        <h3>{name}</h3>
      </div>
      <p>{date}</p>
      <p>{description}</p>
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
