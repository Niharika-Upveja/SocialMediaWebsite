import {
  Stack,
  TextField,
} from "@mui/material";
import React, {useState } from "react";
const SendMessage = (props) => {
  const [content, setContent] = useState("");

  const handleSendMessage = () => {
    props.onSendMessage(content);
    setContent("");
  };

  return (
    <Stack
      sx={{
        m: 2,
        height: "40px",
      }}
      justifyContent="center"
    >
      <Stack>
        <TextField
          onChange={(e) => setContent(e.target.value)}
          label="Send a message..."
          value={content}
          onKeyPress={(e) => {
            if (e.key === "Enter" && content.length > 0) {
              handleSendMessage();
            }
          }}
        />
      </Stack>
    </Stack>
  );
};

export default SendMessage;
