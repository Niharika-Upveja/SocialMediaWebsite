import { Box, Divider, List, Stack, Typography } from "@mui/material";
import React from "react";
import Loading from "./Loading";
import UserMessengerEntry from "./UserMessengerEntry";
import "react-icons/bi";

const UserMessengerEntries = (props) => {
  return !props.loading ? (
    <>
      {props.conversations.length > 0 ? (
        <Stack>
            <div>
              <b>Conversations</b>
            </div>
          <Box>
            <Box>
              <List>
                {props.conversations.map((conversation) => (
                  <UserMessengerEntry
                    conservant={props.conservant}
                    conversation={conversation}
                    key={conversation.recipient.username}
                    setConservant={props.setConservant}
                  />
                ))}
              </List>
            </Box>
          </Box>
        </Stack>
      ) : (
        <Stack>
          <div>
            Click 'Message' on another user's profile to start a conversation
          </div>
        </Stack>
      )}
    </>
  ) : (
    <Stack>
      <Loading />
    </Stack>
  );
};

export default UserMessengerEntries;
