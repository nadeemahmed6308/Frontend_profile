import axios from "axios";
import React, { useEffect, useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { Form, Button } from "react-bootstrap";
import { useNavigate } from "react-router";

import { handleUserEdit } from "../../Redux/Auth/login/loginAction";

export const UserEditPage = () => {
  // useNavigate hook ko use kar ke different routes pe jane ke liye
  const navigate = useNavigate();

  // redux istemal ke liye dispatch
  const dispatch = useDispatch();

  // user data state variable
  const [userData, setUserData] = useState(null);

  // token ke through redux se user data hasil karna
  const { token } = useSelector((state) => state.login);

  useEffect(() => {
    axios
      .get("http://localhost:3000/auth/user/details", {
        headers: {
          authorization: token,
          "Content-Type": "application/json",
        },
      })
      .then(({ data }) => {
        let userSampleData = { firstName: data.firstName, lastName: data.lastName, email: data.email, phone: data.phone, bio: data.bio };
        setUserData(() => userSampleData);
      });
  }, [token]);

  // input boxes se user data changes handle karne ke liye
  const handleChange = ({ name, value }) => {
    setUserData((prev) => ({ ...prev, [name]: value }));
  };

  // user edit submit ke liye
  const submitUserEdit = () => {
    dispatch(handleUserEdit(dispatch, userData, token));
  };

  // agar userData hai to edit form dikhao warna loading text dikhao
  if (userData) {
    // signUp data se input lena aur default value set karna
    const { firstName, lastName, email, phone, bio } = userData;
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
                    placeholder="First name dalein"
                  />
                </Form.Group>
                <Form.Group>
                  <Form.Label className="signup-form-label">
                    Last Name
                  </Form.Label>
                  <Form.Control
                    defaultValue={lastName}
                    name="lastName"
                    onChange={({ target }) => handleChange(target)}
                    className="signup-form-input"
                    type="text"
                    placeholder="Last name dalein"
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
                  placeholder="Email address dalein"
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
                  placeholder="Mobile number dalein"
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
                  placeholder="Bio dalein"
                />
              </Form.Group>
              <Button onClick={() => submitUserEdit()} id="signup-form-button">
                Edit
              </Button>
              <br />
              <Button onClick={() => navigate("/user")} id="signup-form-button">
                Back
              </Button>
            </Form>
          </div>
        </div>
      </div>
    );
  } else {
    return (
      <div>
        <h1>Loading...</h1>
      </div>
    );
  }
};