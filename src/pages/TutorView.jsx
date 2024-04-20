import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import "./styles/TutorView.scss"; // Custom SCSS for TutorView
import Post from "../components/Post.jsx"; // Assuming Post component for each posting
import NewPosting from "./NewPosting.jsx";
import { useNavigate } from "react-router-dom";
import { getPostings } from "../Database";
import Navbar from "../components/Navbar.jsx";

function TutorView() {
  const navigate = useNavigate();
  const testName = "Enzo"; // Assuming this is the name you want to filter by
  const [posts, setPosts] = useState([]);

  useEffect(() => {
    const fetchPostings = async () => {
      const fetchedPostings = await getPostings();
      setPosts(fetchedPostings);
    };

    fetchPostings();
  }, []);

  // Filter posts by testName
  const filteredPosts = posts.filter((post) => post.name === testName);

  return (
    <>
      <Navbar />
      <div className="tutor-view-container">
        <h1>Tutor View</h1>
        <div className="new-post-button">
          <button
            className="new-posting"
            onClick={() => navigate("/new-posting")}
          >
            New Posting
          </button>
        </div>
        <div className="post-list">
          {filteredPosts.map((post) => (
            <Post key={post.id} post={post} />
          ))}
        </div>
      </div>
    </>
  );
}

export default TutorView;
