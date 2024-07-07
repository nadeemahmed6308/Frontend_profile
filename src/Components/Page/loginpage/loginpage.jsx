// React aur useState import karna
import React, { useState } from "react";
import "./loginpage.css";
import { Form, Button } from "react-bootstrap";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import { handleLogin } from "../../Redux/Auth/login/loginAction";

// Authpage functional component define karna jo login page ko render karega
export const Authpage = () => {
  // useNavigate hook use karna different routes par navigation ke liye
  const navigate = useNavigate();

  // Redux mein dispatch function ko use karne ke liye useDispatch hook ka use karna
  const dispatch = useDispatch();

  // Log in form ke sample data ko define karna
  const logInSample = {
    email: "",
    password: "",
  }; 

  // Log in input values ko manage karne ke liye useState hook ka use karna
  const [logInData, setlogInData] = useState(logInSample);

  // Input element ki change ko handle karne ke liye handleChange function define karna
  const handleChange = ({ name, value }) => {
    setlogInData((prev) => ({ ...prev, [name]: value }));
  };

  // Login form ko submit karne ke liye submitLogin function define karna
  const submitLogin = () => {
    dispatch(handleLogin(dispatch, logInData));
  };

  // logInData se email aur password ko extract karna
  const { email, password } = logInData;

  // Main HTML page ko return karna
  return (
    <div id="login">
      <div id="login-main-div">
        <div>
          <h1>Log in</h1>
          <Form>
            <Form.Group className="mb-3" controlId="formBasicEmail">
              <Form.Label className="login-form-label">
                Email Address
              </Form.Label>
              <Form.Control
                defaultValue={email}
                name="email"
                onChange={({ target }) => handleChange(target)}
                type="email"
                className="login-form-input"
                placeholder="Enter email address"
              />
            </Form.Group>
            <Form.Group className="mb-3" controlId="formBasicPassword">
              <Form.Label className="login-form-label">Password</Form.Label>
              <Form.Control
                defaultValue={password}
                name="password"
                onChange={({ target }) => handleChange(target)}
                type="password"
                className="login-form-input"
                placeholder="Enter password"
              />
            </Form.Group>
            <p id="page-navigate" onClick={() => navigate("/signup")}>
              Don't have account
            </p>
            <Button onClick={() => submitLogin()} id="login-button">
              Log In
            </Button>
          </Form>
        </div>
      </div>
    </div>
  );
};



