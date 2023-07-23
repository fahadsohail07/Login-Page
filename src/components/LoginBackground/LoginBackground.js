import "./LoginBackground.css";
import { ReactComponent as TopLeft } from "../../assets/Top Left.svg";
import { ReactComponent as TopRight } from "../../assets/Top Right.svg";
import { ReactComponent as BottomRight } from "../../assets/Bottom Right.svg";
import illustration from "../../assets/illustration 1.png";

const LoginBackground = (props) => {
  return (
    <div
      className={
        props.isDarkMode
          ? "background background-dark"
          : "background background-light"
      }
    >
      <div className="flex">
        <div className="fixed">
          <TopLeft />
        </div>
        <div className="top-right fixed">
          <TopRight />
        </div>
      </div>
      <div className="flex">
        <div className="bottom-left fixed">
          <TopRight />
        </div>
        <div className="bottom-right fixed">
          <BottomRight />
        </div>
      </div>

      <div className="content">
        <p className="background-title">One Stop, Many Solution</p>
        <p className="background-text">
          One Solution that Speed up your Device Reports and Make Efficient way
          to organize your data.
        </p>
        <img src={illustration} />
      </div>
    </div>
  );
};

export default LoginBackground;
