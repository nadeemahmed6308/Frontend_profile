import React, { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { Allroutes } from "./Components/router";
import { useNavigate } from "react-router";
import { handleUserData } from "./Components/Redux/User/userData/userDataAction";
import "./App.css";

function App() {
  // redux se isAuth ko lena, yeh ek boolean value hai
  const { isAuth, token } = useSelector((state) => state.login);

  // useNavigate hook pages ke beech navigate karne ke liye aur dispatch redux action functions use karne ke liye
  const navigate = useNavigate();
  const dispatch = useDispatch();

  // check karna agar isAuth true hai to user profile page par navigate karna, warna login page par
  useEffect(() => {
    if (isAuth === true) {
      dispatch(handleUserData(dispatch, token));
      navigate("/user");
    } else navigate("/");
  }, [isAuth]);

  // routes ke mutabiq pages return karna
  return (
    <div className="App">
      <Allroutes />
    </div>
  );
}

export default App;
