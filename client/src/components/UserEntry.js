import React from "react";
import { Typography } from "@mui/material";
import { Link } from "react-router-dom";
import { Stack } from "@mui/material";
const UserEntry = ({ username }) => {
  return (
    <Stack justifyContent="space-between" key={username}>
      <Stack>
        <Typography>{username}</Typography>
      </Stack>
      <Link to={"/users/" + username}>View</Link>
    </Stack>
  );
};

export default UserEntry;
