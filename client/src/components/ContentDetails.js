import { Avatar, Typography } from "@mui/material";
import React from "react";
import Moment from "react-moment";
import { Link } from "react-router-dom";
import { Stack } from "@mui/material";
const ContentDetails = ({ username, createdAt, edited, preview }) => {
  return (
    <Stack sx={{}}>
      <Typography variant="subtitle2" color="text.secondary" gutterBottom>
        <Link
          color="inherit"
          underline="hover"
          onClick={(e) => {
            e.stopPropagation();
          }}
          to={"/users/" + username}
        >
          {username}
        </Link>
        {!preview && (
          <>
            {" "}
            · <Moment fromNow>{createdAt}</Moment> {edited && <>(Edited)</>}
          </>
        )}
      </Typography>
    </Stack>
  );
};

export default ContentDetails;
