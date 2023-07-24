import { useState } from "react";
import "./LoginForm.css";
import { ReactComponent as Logo } from "../../assets/Montex Logo 1.svg";
import { ReactComponent as DarkModeLogo } from "../../assets/Montex Logo 1-Dark Mode.svg";
import { ReactComponent as User } from "../../assets/user.svg";
import { ReactComponent as UserDarkMode } from "../../assets/user-dark-mode.svg";
import { ReactComponent as Eye } from "../../assets/eye.svg";
import { ReactComponent as EyeDarkMode } from "../../assets/eye-dark-mode.svg";

const LoginForm = (props) => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [isPasswordVisible, setIsPasswordVisible] = useState(false);
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [isButtonClicked, setIsButtonClicked] = useState(false);

  const userData = {
    email: "user@gmail.com",
    password: "123456",
  };

  const Login = (email, password) => {
    return email === userData.email && password === userData.password;
  };

  const emailButtonHandler = (event) => {
    setEmail(event.target.value);
  };

  const passwordButtonHandler = (event) => {
    setPassword(event.target.value);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    setIsLoggedIn(Login(email, password));
  };

  const handleButtonClick = () => {
    setIsButtonClicked(true);
    setTimeout(() => {
      setIsButtonClicked(false);
    }, 500);
  };

  const handleLogoutButtonClick = () => {
    setIsLoggedIn(false);
    setIsButtonClicked(true);
  };

  const togglePasswordVisibility = () => {
    setIsPasswordVisible(!isPasswordVisible);
  };

  const userName = email.split("@")[0];

  return (
    <div>
      {!isLoggedIn && (
        <form onSubmit={handleSubmit}>
          <div className="logo">
            {props.isDarkMode ? <DarkModeLogo /> : <Logo />}
          </div>

          <p
            className={
              props.isDarkMode
                ? "sign-in sign-in-dark"
                : "sign-in sign-in-light"
            }
          >
            Sign in to your account
          </p>

          <div
            className={
              props.isDarkMode
                ? "input-container input-container-dark"
                : "input-container input-container-light"
            }
          >
            <input
              type="name"
              placeholder="Username"
              value={email}
              onChange={emailButtonHandler}
              className={
                props.isDarkMode ? "input input-dark" : "input input-light"
              }
            />
            {props.isDarkMode ? <UserDarkMode /> : <User />}
          </div>

          <div
            className={
              props.isDarkMode
                ? "input-container input-container-dark"
                : "input-container input-container-light"
            }
          >
            <input
              type={isPasswordVisible ? "text" : "password"}
              placeholder="Password"
              value={password}
              onChange={passwordButtonHandler}
              className={
                props.isDarkMode ? "input input-dark" : "input input-light"
              }
            />
            {props.isDarkMode ? (
              <EyeDarkMode onClick={togglePasswordVisibility} className="eye" />
            ) : (
              <Eye onClick={togglePasswordVisibility} className="eye"/>
            )}
          </div>

          <div className="checkbox-container">
            <div className="checkbox-items">
              <input type="checkbox" />
              <label
                className={
                  props.isDarkMode
                    ? "checkbox-remember-me checkbox-dark"
                    : "checkbox-remember-me checkbox-light"
                }
              >
                Remember me
              </label>
            </div>
            <p className="checkbox-forgot-password">Forgot Password?</p>
          </div>

          <button
            type="submit"
            className={`button ${
              props.isDarkMode ? "button-dark" : "button-light"
            } ${isButtonClicked ? "button-transition" : ""}`}
            onClick={handleButtonClick}
          >
            Login
          </button>
        </form>
      )}

      {isLoggedIn && (
        <div className="post-login-layout">
          <p className={props.isDarkMode ? "text-dark" : "text-light"}>
            Hi {userName}, you are logged in.
          </p>
          <button
            className={`button ${
              props.isDarkMode ? "button-dark" : "button-light"
            } ${isButtonClicked ? "button-transition" : ""}`}
            onClick={handleLogoutButtonClick}
          >
            Logout
          </button>
        </div>
      )}
    </div>
  );
};

export default LoginForm;
