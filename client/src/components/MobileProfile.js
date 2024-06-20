import { useTheme } from "@emotion/react";
import {
  Avatar,
  Button,
  Card,
  Divider,
  IconButton,
  Stack,
  Typography,
} from "@mui/material";
import { Box } from "@mui/system";
import React, { useEffect, useState } from "react";
import { AiFillEdit } from "react-icons/ai";
import { MdCancel } from "react-icons/md";
import { isLoggedIn } from "../helpers/authHelper";
import ContentUpdateEditor from "./ContentUpdateEditor";

const MobileProfile = (props) => {
  const [user, setUser] = useState(null);
  const currentUser = isLoggedIn();
  const theme = useTheme();

  useEffect(() => {
    if (props.profile) {
      setUser(props.profile.user);
    }
  }, [props.profile]);

  return (
    <Card>
      {user ? (
        <Stack>
          <Stack>
              <button>
                {user.username}
              </button>

            <Box>
                <Stack>
                  <div>Likes</div>
                  <div>
                    <b>{props.profile.posts.likeCount}</b>
                  </div>
                </Stack>
                <Stack>
                  <div>Posts</div>
                  <div>
                    <b>{props.profile.posts.count}</b>
                  </div>
                </Stack>
            </Box>
          </Stack>
          <Divider />
          <Box>
            {currentUser && user._id === currentUser.userId && (
              <button onClick={props.handleEditing}>
                Bio
              </button>
            )}
            {user.biography ? (
              <>
                <div>
                  <b>Bio: </b>
                  {user.biography}
                </div>
              </>
            ) : (
              <div>
                  No Bio
                  {currentUser && user._id === currentUser.userId}
              </div>
            )}
            {currentUser && user._id !== currentUser.userId && (
              <Box>
                <button onClick={props.handleMessage}>
                  Message
                </button>
              </Box>
            )}
            {props.editing && (
              <Box>
                <ContentUpdateEditor
                  handleSubmit={props.handleSubmit}
                  originalContent={user.biography}
                  validate={props.validate}
                />
              </Box>
            )}
          </Box>
        </Stack>
      ) : (
        <>Loading...</>
      )}
    </Card>
  );
};

export default MobileProfile;
