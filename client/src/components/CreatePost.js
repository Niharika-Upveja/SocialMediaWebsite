import React from "react";
import { useNavigate } from "react-router-dom";

const CreatePost = () => {
  const navigate = useNavigate();
  return (
    <button onClick={() => navigate("/posts/create")}>Post</button>
  );
};

export default CreatePost;
