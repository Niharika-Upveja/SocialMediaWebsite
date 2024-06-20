import {Container} from "@mui/material";
import React, { useEffect, useState } from "react";
import GridLayout from "../GridLayout";
import Navbar from "../Navbar";
import Sidebar from "../Sidebar";
import PostBrowser from "../PostBrowser";

const ExploreView = () => {
  return (
    <Container>
      <Navbar />
      <div>POSTS</div>
      {<PostBrowser createPost contentType="posts" />}
      {<Sidebar />}
    </Container>
  );
};

export default ExploreView;
