import { Stack } from "@mui/material";
import { Box } from "@mui/system";
import React, { useState } from "react";
import { getPosts } from "../api/posts";
import { isLoggedIn } from "../helpers/authHelper";
import FindUsers from "./FindUsers";

const Sidebar = () => {
  return (
    <Stack>
      <FindUsers />
    </Stack>
  );
};

export default Sidebar;
