import * as React from "react";
import AppBar from "@mui/material/AppBar";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import Avatar from "@mui/material/Avatar";
import SmartToySharpIcon from "@mui/icons-material/SmartToySharp";
import { TextField } from "@mui/material";

export default function HeaderBar() {
  return (
    <AppBar position="fixed" sx={{ width: "100%", backgroundColor: "white" }}>
      <Toolbar>
        <Avatar sx={{ bgcolor: "light gray", mr: 2 }}>
          <SmartToySharpIcon />
        </Avatar>
        <Typography
          variant="h6"
          component="div"
          sx={{ flexGrow: 1, color: "black" }}
        >
          E-Shop Chatbot
        </Typography>
      </Toolbar>
    </AppBar>
  );
}
