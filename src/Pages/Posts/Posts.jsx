import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import config from "../../config.json";
import axios from "axios";
import "./Posts.css";


const Posts = () => {
  const navigate = useNavigate();
  const [posts, setPosts] = useState([]);

  const fetchPosts = async () => {
    const res = await axios.get(`${config.apiUrl}/posts`);
    setPosts(res.data);
  };

  useEffect(() => {
    fetchPosts();
  }, []);

  const handleDelete = async (post) => {
    const myJSON = JSON.stringify(post);
    setPosts(posts.filter((p) => p.id !== post.id));
    await axios.delete(`${config.apiUrl}/posts/${post.id}`);
  };

  return (
    <div className="posts">
      <div className="container">
        <button
          onClick={() => navigate("/post/new")}
          className="btn btn-primary mb-4"
        >
          New Post
        </button>
        <table className="table">
          <thead>
            <tr>
              <th>Title</th>
              <th>Body</th>
              <th>Update</th>
              <th>Delete</th>
            </tr>
          </thead>
          <tbody>
            {posts.map((post) => (
              <tr key={post._id}>
                <td> {post.title} </td>
                <td> {post.content} </td>
                <td>
                  <button
                    onClick={() => navigate(`/post/${post.id}`)}
                    className="btn btn-primary"
                  >
                    Update
                  </button>
                </td>
                <td>
                  <button
                    onClick={() => handleDelete(post)}
                    className="btn btn-danger"
                  >
                    Delete
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      <div>
      <a onClick={()=>navigate("/")}>
        <button className="btn btn-secondary">Logout</button>
      </a>
    </div>
      </div>
    </div>
  );
};

export default Posts;
