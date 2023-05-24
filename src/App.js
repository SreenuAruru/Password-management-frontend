import React, { useState, useEffect } from "react";
import Home from "./components/Home/Home";
import Registration from "./components/LoginAndRegistration/Registration";
import Login from "./components/LoginAndRegistration/Login";
import { Routes, Route, useNavigate } from "react-router-dom";
import "./App.css";

function App() {
  const navigate = useNavigate();

  const [isLoggedIn, setIsLoggedIn] = useState();
  useEffect(() => {
    const username = localStorage.getItem("username");
    const password = localStorage.getItem("password");
    if (!username || !password) {
      navigate("/login");
    }
  }, []);
  return (
    <div>
      <Routes>
        <Route path="/login" element={<Login />}></Route>
        <Route path="/" element={<Home />}></Route>
        <Route path="/register" element={<Registration />}></Route>
      </Routes>
    </div>
  );
}

export default App;
