import { useState } from "react";
import "./App.css";
import LoginForm from "./components/LoginForm/LoginForm";
import LoginBackground from "./components/LoginBackground/LoginBackground";
import { ReactComponent as Sun } from "./assets/sun.svg";
import { ReactComponent as SunDarkMode } from "./assets/sun-dark-mode.svg";

function App() {
  const [isDarkMode, setIsDarkMode] = useState(false);

  const themeChangeHandler = () => {
    setIsDarkMode(!isDarkMode);
  };

  const themeClass = isDarkMode ? "dark-theme" : "light-theme";

  return (
    <div className={`layout ${themeClass}`}>
      <LoginBackground isDarkMode={isDarkMode} />
      <div className="form-layout">
        <div className="theme">
          <div
            className={
              isDarkMode
                ? "theme-icon theme-icon-dark"
                : "theme-icon theme-icon-light"
            }
            onClick={themeChangeHandler}
          >
            {isDarkMode ? <SunDarkMode /> : <Sun />}
          </div>
        </div>
        <div className="login-form-position">
          <LoginForm isDarkMode={isDarkMode} />
        </div>
        <div className="footer">
          <p>2023 All rights reserved</p>
          <p>Privacy Policy</p>
          <p>Terms & Conditions</p>
        </div>
      </div>
    </div>
  );
}

export default App;
