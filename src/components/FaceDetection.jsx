/* eslint-disable react/prop-types */
import "./componentStyles.css";

function FaceDetection({ imageUrl, box }) {
  const { leftCol, topRow, rightCol, bottomRow } = box;
  return (
    <div className="img-data">
      <div className="img-container">
        <img
          id="input-img"
          width="100%"
          height="auto"
          src={imageUrl}
          alt="img-data"
        />
        <div
          className="bounding-box"
          style={{
            top: topRow,
            right: rightCol,
            bottom: bottomRow,
            left: leftCol,
          }}
        ></div>
      </div>
    </div>
  );
}
export default FaceDetection;
