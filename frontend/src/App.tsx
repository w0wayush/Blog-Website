import "./App.css";
import Signin from "./pages/Signin";
import Signup from "./pages/Signup";
import { Blog } from "./pages/Blog";
import { Route, Routes } from "react-router-dom";
import { Blogs } from "./pages/Blogs";
import { Publish } from "./pages/Publish";

function App() {
  return (
    <div>
      <Routes>
        <Route path="/signup" element={<Signup />} />
        <Route path="/signin" element={<Signin />} />
        <Route path="/blog/:id" element={<Blog />} />
        <Route path="/blogs" element={<Blogs />} />
        <Route path="/publish" element={<Publish />} />
      </Routes>
    </div>
  );
}

export default App;
