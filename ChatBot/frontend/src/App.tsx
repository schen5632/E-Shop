import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import HeaderBar from "./components/HeaderBar";
import ChatField from "./components/ChatField";
import ChatContainer from "./containers/ChatContainer";

function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      <ChatContainer />
    </>
  );
}

export default App;
