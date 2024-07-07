// React aur useState import karna
import React, { useState } from "react";
import "./signup.css";
import { Form, Button } from "react-bootstrap";
import { useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import { handleSignup } from "../../Redux/Auth/signup/signupAction";
   

// SignupPage functional component define karna jo signup page ko render karega
export const SignupPage = () => {
  // useNavigate hook use karna different routes par navigation ke liye
  const navigate = useNavigate();

  // Redux mein dispatch function ko use karne ke liye useDispatch hook ka use karna
  const dispatch = useDispatch();

  // Sign Up form ke sample data ko define karna
  const signUpSample = {
    firstName: "",
    lastName: "",
    email: "",
    password: "",
    phone: "",
    bio: "",
  };

  // Sign up input values ko manage karne ke liye useState hook ka use karna
  const [signupData, setSignupData] = useState(signUpSample);

  // Input element ki change ko handle karne ke liye handleChange function define karna
  const handleChange = ({ name, value }) => {
    setSignupData((prev) => ({ ...prev, [name]: value }));
  };

  // Signup form ko submit karne ke liye submitSignup function define karna
  const submitSignup = () => {
    dispatch(handleSignup(dispatch, signupData));
  };

  // signupData se firstName, lastName, email, phone, password aur bio ko extract karna
  const { firstName, lastName, email, phone, password, bio } = signupData;

  // Main HTML page ko return karna
  return (
    <div id="signup">
      <div id="signup-main-form">
        <div>
          <h1>Sign Up</h1>
          <Form>
            <div id="user-fullName">
              <Form.Group>
                <Form.Label className="signup-form-label">
                  First Name
                </Form.Label>
                <Form.Control
                  defaultValue={firstName}
                  name="firstName"
                  onChange={({ target }) => handleChange(target)}
                  className="signup-form-input"
                  type="text"
                  placeholder="Enter First name"
                />
              </Form.Group>
              <Form.Group>
                <Form.Label className="signup-form-label">Last Name</Form.Label>
                <Form.Control
                  defaultValue={lastName}
                  name="lastName"
                  onChange={({ target }) => handleChange(target)}
                  className="signup-form-input"
                  type="text"
                  placeholder="Enter last name"
                />
              </Form.Group>
            </div>
            <Form.Group>
              <Form.Label className="signup-form-label">
                Email Address
              </Form.Label>
              <Form.Control
                defaultValue={email}
                name="email"
                onChange={({ target }) => handleChange(target)}
                className="signup-form-input"
                type="email"
                placeholder="Enter email address"
              />
            </Form.Group>
            <Form.Group>
              <Form.Label className="signup-form-label">
                Mobile Number
              </Form.Label>
              <br />
              <Form.Control
                defaultValue={phone}
                name="phone"
                onChange={({ target }) => handleChange(target)}
                className="signup-form-input"
                type="text"
                placeholder="Enter mobile number"
              />
            </Form.Group>
            <Form.Group>
              <Form.Label className="signup-form-label">Bio</Form.Label>
              <Form.Control
                defaultValue={bio}
                name="bio"
                onChange={({ target }) => handleChange(target)}
                className="signup-form-input"
                type="text"
                placeholder="Enter bio"
              />
            </Form.Group>
            <Form.Group>
              <Form.Label className="signup-form-label">Password</Form.Label>
              <Form.Control
                defaultValue={password}
                name="password"
                onChange={({ target }) => handleChange(target)}
                className="signup-form-input"
                type="password"
                placeholder="Enter password"
              />
            </Form.Group>
            <p id="page-navigate" onClick={() => navigate("/")}>
              Already have account
            </p>
            <Button onClick={() => submitSignup()} id="signup-form-button">
              Signup
            </Button>
          </Form>
        </div>
      </div>
    </div>
  );
};
