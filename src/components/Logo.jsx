import Tilt from "react-parallax-tilt";
import "./componentStyles.css";
import brainLogo from "./../assets/icons8-brain-100.png";

function Logo() {
  return (
    <div className="logo-container">
      <Tilt
        style={{
          height: "100px",
          width: "100px",
          boxShadow:
            "0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19)",
          borderRadius: "10px",
        }}
        className="tilt"
      >
        <img src={brainLogo} width={80} height={80} alt="brain-logo" />
      </Tilt>
    </div>
  );
}
export default Logo;
