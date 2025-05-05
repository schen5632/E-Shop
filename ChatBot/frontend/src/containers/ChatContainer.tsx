import Grid from "@mui/material/Grid";
import React from "react";
import HeaderBar from "../components/HeaderBar";
import ChatField from "../components/ChatField";
import Box from "@mui/material/Box";
import { Stack } from "@mui/material";

const ChatContainer = () => {
  return (
    <Stack
      sx={
        {
          // display: "flex",
          // flexDirection: "column", // Stack vertically
          // alignItems: "center", // Center items horizontally
          // gap: 2, // Add space between the items (1 = 8px, 2 = 16px, etc.)
        }
      }
    >
      <HeaderBar />

      <div style={{ marginTop: "5%" }}>
        <ChatField />
      </div>
    </Stack>
  );
};

export default ChatContainer;
