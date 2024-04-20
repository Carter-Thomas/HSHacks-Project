import React, { useState, useEffect } from "react";
import "./styles/StudentView.scss"; // Custom SCSS for StudentView
import Post from "../components/Post"; // Import Post component
import { useParams } from "react-router-dom";
import { getPostings } from "../Database";
import Navbar from "../components/Navbar";

function StudentView() {
  // Dummy data for existing posts
  const [posts, setPosts] = useState([]);

  // State for search query and filtered posts
  const [searchQuery, setSearchQuery] = useState("");
  const [filteredPosts, setFilteredPosts] = useState([]);

  // State for selected post
  const [selectedPost, setSelectedPost] = useState(null);

  // Get the selected post ID from the URL params
  const { postId } = useParams();

  // Function to handle search input change
  const handleSearchChange = (event) => {
    const query = event.target.value;
    setSearchQuery(query);

    // Filter posts based on search query
    const filtered = posts.filter((post) =>
      post.title.toLowerCase().includes(query.toLowerCase())
    );
    setFilteredPosts(filtered);
  };

  // Function to handle selecting a post
  const handleSelectPost = (post) => {
    setSelectedPost(post);
  };

  useEffect(() => {
    const fetchPostings = async () => {
      const fetchedPostings = await getPostings();
      setPosts(fetchedPostings);
    };

    fetchPostings();
  }, []);

  return (
    <>
      <Navbar />
      <div className="student-view-container">
        <div className="search-filters">
          <input
            type="text"
            placeholder="Search..."
            value={searchQuery}
            onChange={handleSearchChange}
          />
        </div>
        <div className="post-list">
          <h3>Tutoring Options</h3>
          <ul>
            {searchQuery.length > 0
              ? filteredPosts.map((post) => (
                  <li key={post.id} onClick={() => handleSelectPost(post)}>
                    <Post post={post} isSelected={postId === String(post.id)} />
                  </li>
                ))
              : posts.map((post) => (
                  <li key={post.id} onClick={() => handleSelectPost(post)}>
                    <Post post={post} isSelected={postId === String(post.id)} />
                  </li>
                ))}
          </ul>
        </div>
        <div className="post-details">
          <h3>Selected Post</h3>
          {selectedPost && (
            <div className="post-description">
              <h4>{selectedPost.title}</h4>
              <p>{selectedPost.description}</p>
              <p>
                <strong>Tutor:</strong> {selectedPost.name}
              </p>
              {/* Add more details as needed */}
            </div>
          )}
        </div>
      </div>
    </>
  );
}

export default StudentView;
