import React from "react";
import { Stack } from "@mui/material";
const Message = (props) => {
  const username = props.conservant.username;
  const message = props.message;

  let styles = {};
  if (message.direction === "to") {
    styles = {
      justifyContent: "flex-start",
    };
  } else if (message.direction === "from") {
    styles = {
      justifyContent: "flex-end",
    };
  }

  return (
    <Stack
      justifyContent={styles.justifyContent}
    >
      {message.direction === "to" && (
        <button>{username}</button>
      )}

      <div>
        {message.content}
      </div>
    </Stack>
  );
};

export default Message;
