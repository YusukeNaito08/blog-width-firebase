import { useState } from "react";
import "./App.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./components/Home";
import CreatePost from "./components/CreatePost";
import Login from "./components/Login";
import Logout from "./components/Logout";
import Navbar from "./components/Navbar";
import IndexPost from "./components/indexPost";
import DetailPost from "./components/detailPost";
import Signup from "./components/signup";

function App() {
  const [isAuth, setIsAuth] = useState(false);

  return (
    <Router>
      <Navbar isAuth={isAuth} />
      <Routes>
        <Route path="/" element={<Home />}></Route>
        <Route path="/indexpost" element={<IndexPost />}></Route>
        <Route path="/detailpost/:postId" element={<DetailPost />}></Route>
        <Route path="/createpost" element={<CreatePost />}></Route>
        <Route path="/login" element={<Login setIsAuth={setIsAuth} />}></Route>
        <Route path="/logout" element={<Logout setIsAuth={setIsAuth} />}></Route>
        <Route path="/signup" element={<Signup setIsAuth={setIsAuth} />}></Route>
      </Routes>
    </Router>
  );
}

export default App;
