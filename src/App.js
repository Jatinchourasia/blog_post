import { Routes, Route, BrowserRouter } from "react-router-dom";
import "./App.css";
import { Home } from "./Components/Home";
import Post from "./Components/Post";
import Nav from "./Components/Nav";

function App() {
  return (
    <BrowserRouter>
      <Nav />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/post" element={<Post />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
