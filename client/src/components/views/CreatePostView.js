import { Container } from "@mui/material";
import React from "react";
import Navbar from "../Navbar";
import PostEditor from "../PostEditor";
import Sidebar from "../Sidebar";

const CreatePostView = () => {
  return (
    <Container>
      <Navbar />
      {<PostEditor />}
      {<Sidebar />}
    </Container>
  );
};

export default CreatePostView;
