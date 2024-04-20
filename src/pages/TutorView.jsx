import React, { useState } from "react";
import { Link } from "react-router-dom";
import "./styles/App.scss";
import "./styles/TutorView.scss"; // Custom SCSS for TutorView
import Post from "../components/Post.jsx"; // Assuming Post component for each posting

function TutorView() {
    // Dummy data for existing posts
    const [posts, setPosts] = useState([
        { id: 1, title: "Math", name: "Enzo", description: "Help with Algebra", date: "2024-04-20" },
        { id: 2, title: "English", name: "Bao", description: "Essay Writing Assistance", date: "2024-04-21" },
        // Add more posts as needed
    ]);

    return (
        <div className="tutor-view-container">
            <header className="page-header">
                <h1>Tutor View</h1>
            </header>
            <div className="new-post-button">
                <Link to="/new-posting" className="btn-primary btn">New Posting</Link>
            </div>
            <div className="post-list">
                {posts.map(post => (
                    <Post key={post.id} post={post} />
                ))}
            </div>
        </div>
    );
}

export default TutorView;
