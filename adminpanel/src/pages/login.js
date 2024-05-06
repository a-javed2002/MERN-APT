import React, { useState } from "react";
import {ToastContainer,toast} from 'react-toastify';

const LoginPage = () => {
  const [username, setUserName] = useState("");
  const [password, setPassword] = useState("");

  const handleUserNameChange = (event) => {
    setUserName(event.target.value);
  };

  const handlePasswordChange = (event) => {
    setPassword(event.target.value);
  };

  const handleFormSubmit = (event) => {
    event.preventDefault();
    // Perform login authentication here using username and password
    console.log("User Name:", username);
    console.log("Password:", password);
    // Reset form fields after submission
    toast.success('Login Successfully');
    setUserName("");
    setPassword("");
  };
  return (
    <>
          {/* <ToastContainer/> */}
      <div id="login-page">
        <div className="container">
          <form className="form-login" onSubmit={handleFormSubmit}>
            <h2 className="form-login-heading">sign in now</h2>
            <div className="login-wrap">
              <input
                type="text"
                className="form-control"
                placeholder="User Name"
                autoFocus
                value={username}
                onChange={handleUserNameChange}
              />
              <br />
              <input
                type="password"
                className="form-control"
                placeholder="Password"
                value={password}
                onChange={handlePasswordChange}
              />
              <label className="checkbox">
                <input type="checkbox" defaultValue="remember-me" /> Remember me
                <span className="pull-right">
                  <a data-toggle="modal" href="login.html#myModal">
                    {" "}
                    Forgot Password?
                  </a>
                </span>
              </label>
              <button className="btn btn-theme btn-block" type="submit">
                <i className="fa fa-lock" /> SIGN IN
              </button>
              <hr />
              <div className="login-social-link centered">
                <p>or you can sign in via your social network</p>
                <button className="btn btn-facebook" type="submit">
                  <i className="fa fa-facebook" /> Facebook
                </button>
                <button className="btn btn-twitter" type="submit">
                  <i className="fa fa-twitter" /> Twitter
                </button>
              </div>
              <div className="registration">
                Don't have an account yet?
                <br />
                <a className href="#">
                  Create an account
                </a>
              </div>
            </div>
          </form>
        </div>
      </div>
      {/* js placed at the end of the document so the pages load faster 
<script src="lib/jquery/jquery.min.js"></script>
  <script src="lib/bootstrap/js/bootstrap.min.js"></script>
*/}
      {/*BACKSTRETCH*/}
      {/* You can use an image of whatever size. This script will stretch to fit in any screen size.
<script type="text/javascript" src="lib/jquery.backstretch.min.js"></script>
  <script>
    $.backstretch("img/login-bg.jpg", {
      speed: 500
    });
  </script>

*/}
    </>
  );
};

export default LoginPage;
