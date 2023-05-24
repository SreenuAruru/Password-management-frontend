import React, { useState, useContext } from "react";
import { Link } from "react-router-dom";
import { FaRegEye, FaRegEyeSlash } from "react-icons/fa";
import axios from "axios";
import { useNavigate } from "react-router-dom";

const LoginPage = () => {
  const navigate = useNavigate();
  const [showPassword, setShowPassword] = useState(false);
  const [formData, setFormData] = useState({
    username: "",
    password: "",
  });

  const handleInputChange = (event) => {
    const { name, value } = event.target;

    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleSubmit = async (event) => {
    event.preventDefault();

    await axios
      .post(`http://localhost:1234/login`, formData)
      .then((response) => {
        console.log(response.data);
        window.localStorage.setItem("username", response.data.username);
        window.localStorage.setItem("password", response.data.password);
        navigate("/");
      })
      .catch((error) => {
        console.log(error.response.data);
      });
  };

  return (
    <section className="login-page">
      {console.log("login page")}
      <div className="login-form">
        <h2>Login Form</h2>
        <form onSubmit={handleSubmit}>
          <div className="form-group">
            <label htmlFor="username">Username</label>
            <input
              type="text"
              id="username"
              name="username"
              value={formData.username}
              onChange={handleInputChange}
              required
            />
          </div>
          <div className="form-group">
            <label htmlFor="password">Password</label>
            <div className="password-wrapper">
              <input
                type={showPassword ? "text" : "password"}
                id="password"
                name="password"
                value={formData.password}
                onChange={handleInputChange}
                required
              />
              <p
                className="eye"
                onClick={() => {
                  setShowPassword(!showPassword);
                }}
              >
                {showPassword ? <FaRegEye></FaRegEye> : <FaRegEyeSlash />}
              </p>
            </div>
          </div>
          <button type="submit">Login</button>
        </form>
        <div className="register-link">
          Don't have an account? <Link to="/register">Register</Link>
        </div>
      </div>
    </section>
  );
};

export default LoginPage;
