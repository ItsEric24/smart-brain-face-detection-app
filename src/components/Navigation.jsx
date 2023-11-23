/* eslint-disable react/prop-types */
import "./componentStyles.css";

function Navigation({ onSignOut, onRouteChange }) {
  const handleClick = () => {
    onRouteChange("signin");
    onSignOut();
  };
  return (
    <>
      <nav className="nav-bar">
        <a href="#" className="links" onClick={handleClick}>
          <p>SignOut</p>
        </a>
      </nav>
    </>
  );
}
export default Navigation;
