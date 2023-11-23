/* eslint-disable react/prop-types */
import "./componentStyles.css";

function ImageLinkForm({ inputChange, onSubmit }) {
  return (
    <div className="form-container">
      <input
        className="input-field"
        type="text"
        placeholder="Enter image link"
        onChange={inputChange}
      />
      <button className="detect-btn" onClick={onSubmit}>
        Detect
      </button>
    </div>
  );
}
export default ImageLinkForm;
