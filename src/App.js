import { Routes, Route, BrowserRouter } from "react-router-dom";
import "./App.css";
import { Home } from "./Components/Home";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/users/:id" element={<Home />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
