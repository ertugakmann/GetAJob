import { Box } from "@mui/material";
import "./App.css";
import Navbar from "./components/Navbar";
import Feed from "./components/Feed";

function App() {
  return (
    <Box>
      <Navbar />
      <Feed />
    </Box>
  );
}

export default App;
