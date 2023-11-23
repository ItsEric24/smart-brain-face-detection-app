/* eslint-disable react/prop-types */
import "./componentStyles.css";

function Rank({ user }) {
  const [name] = user;
  return (
    <div className="rank-text">
      <p>Welcome, {name.name}</p>
    </div>
  );
}
export default Rank;
