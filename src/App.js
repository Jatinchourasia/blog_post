import { Routes, Route, BrowserRouter } from "react-router-dom";
import "./App.css";
import { Home } from "./Components/Home";
import Post from "./Components/Post";
import Nav from "./Components/Nav";
import Form from "./Components/CreatePost";

function App() {
  return (
    <BrowserRouter>
      <Nav />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/post/:id" element={<Post />} />
        <Route path="/create" element={<Form />} />
        <Route path="/post/update/:id" element={<Form />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
