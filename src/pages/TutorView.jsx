import React, { useState } from "react";
import { Link } from "react-router-dom";
import "./styles/TutorView.scss"; // Custom SCSS for TutorView
import Post from "../components/Post.jsx"; // Assuming Post component for each posting
import NewPosting from "./NewPosting.jsx";
import { useNavigate } from "react-router-dom";
import Navbar from "../components/Navbar.jsx";

function TutorView() {
  // Dummy data for existing posts
  const navigate = useNavigate();
  const [posts, setPosts] = useState([

    {
      id: 1,
      title: "Math",
      name: "Enzo",
      description: "Help with Algebra",
      date: "2024-04-20",
    },
    {
      id: 2,
      title: "English",
      name: "Bao",
      description: "Essay Writing Assistance",
      date: "2024-04-21",
    },
    // Add more posts as needed
  ]);

  return (
    <>
    <Navbar />
    <div className="tutor-view-container">
        <h1>Tutor View</h1>
      <div className="new-post-button">
      <button className="new-posting" onClick={() => navigate("/new-posting")}>New Posting</button>
      </div>
      <div className="post-list">
        {posts.map((post) => (
          <Post key={post.id} post={post} />
        ))}
      </div>
    </div>
    </>
  );
}

export default TutorView;
