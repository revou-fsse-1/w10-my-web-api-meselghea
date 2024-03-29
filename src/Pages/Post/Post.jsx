
 

import config from "../../config.json";
import { useEffect, useState } from "react";
import axios from "axios";
import "./Post.css";
import { useParams, useNavigate } from "react-router-dom";
const Post = () => {
  const navigate = useNavigate();
  const { id } = useParams();
  const [post, setPost] = useState({
    title: "",
    content: "",
  });
  const fetchPost = async () => {
    console.log(post)
    console.log(id)
    const res = await axios.get(`${config.apiUrl}/posts/${id}`)
  setPost(res.data);
  };

useEffect(()=> {
  fetchPost();
}, []);

  const handleChange = (e) => {
    const postClone = { ...post };
    postClone[e.target.name] = e.target.value;
    setPost(postClone);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    console.log(post);
    if (id === "new") {
      await axios.post(`${config.apiUrl}/posts`, post);
      return navigate("/Posts");
    } else {
      await axios.put(`${config.apiUrl}/posts/${id}`, post);
      return navigate("/Posts");
    }
  };

  return (
    <div className="post__wrapper">
      <div className="container">
        <form className="post">
          <input
            type="text"
            placeholder="Title..."
            name="title"
            value={post.title}
            onChange={handleChange}
          />
          <input
            type="text"
            placeholder="Content..."
            name="content"
            value={post.content}
            onChange={handleChange}
          />
          <button onClick={handleSubmit} className="btn btn-primary">
            {id === "new" ? "Post" : "Update"}
          </button>
        </form>
      </div>
    </div>
  );
};

export default Post;
