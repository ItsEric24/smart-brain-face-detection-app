import "./App.css";
import Navigation from "./components/Navigation";
import Logo from "./components/Logo";
import ImageLinkForm from "./components/ImageLinkForm";
import Rank from "./components/Rank";
import ParticlesBg from "particles-bg";
import { useState } from "react";
import FaceDetection from "./components/FaceDetection";
import SignIn from "./components/SignIn";
import Register from "./components/Register";

function faceDetectionCall(imageURL) {
  // Your PAT (Personal Access Token) can be found in the portal under Authentification
  const PAT = "e279e4241acf47da96cb10437d4a93c7";
  // Specify the correct user_id/app_id pairings
  // Since you're making inferences outside your app's scope
  const USER_ID = "254the-coder";
  const APP_ID = "smart-brain";
  // Change these to whatever model and image URL you want to use
  const IMAGE_URL = imageURL;

  const raw = JSON.stringify({
    user_app_id: {
      user_id: USER_ID,
      app_id: APP_ID,
    },
    inputs: [
      {
        data: {
          image: {
            url: IMAGE_URL,
          },
        },
      },
    ],
  });

  const requestOptions = {
    method: "POST",
    headers: {
      Accept: "application/json",
      Authorization: "Key " + PAT,
    },
    body: raw,
  };

  return requestOptions;
}

function App() {
  const [userInput, setInput] = useState("");
  const [imageUrl, setImageUrl] = useState("");
  const [box, setBox] = useState({});
  const [isSignIn, setIsSignIn] = useState("signin");
  const [user, setUser] = useState({});

  const handleInput = (event) => {
    setInput(event.target.value);
  };

  const calculateData = (data) => {
    const faceData = data.outputs[0].data.regions[0].region_info.bounding_box;
    const image = document.getElementById("input-img");
    const width = Number(image.width);
    const height = Number(image.height);

    return {
      leftCol: faceData.left_col * width,
      topRow: faceData.top_row * height,
      rightCol: width - faceData.right_col * width,
      bottomRow: height - faceData.bottom_row * height,
    };
  };

  const displayFaceBox = (box) => {
    setBox(box);
  };

  const handleSubmit = () => {
    setImageUrl(userInput);
    fetch(
      "https://api.clarifai.com/v2/models/" + "face-detection" + "/outputs",
      faceDetectionCall(userInput)
    )
      .then((response) => response.json())
      .then((response) => displayFaceBox(calculateData(response)))
      .catch((err) => console.log(err));
  };

  const loadUser = (user) => {
    setUser(user);
  };

  const onSubmit = () => {
    setIsSignIn("home");
  };

  const onRouteChange = (route) => {
    setIsSignIn(route);
  };

  const onSignOut = () => {
    setUser("");
    setImageUrl("");
    setInput("");
    setBox("");
  };

  return (
    <div className="app">
      <ParticlesBg type="cobweb" bg={true} />
      <header className="nav">
        <Navigation onRouteChange={onRouteChange} onSignOut={onSignOut} />
      </header>
      <Logo />
      {isSignIn === "home" ? (
        <div>
          <h2 className="title">
            Enter a Image link Below and it will detect the face from image
          </h2>
          <Rank user={user} />
          <ImageLinkForm inputChange={handleInput} onSubmit={handleSubmit} />
          <FaceDetection imageUrl={imageUrl} box={box} />
        </div>
      ) : isSignIn === "signin" ? (
        <SignIn
          onSubmit={onSubmit}
          onRouteChange={onRouteChange}
          loadUser={loadUser}
        />
      ) : (
        <Register onSubmit={onRouteChange} loadUser={loadUser} />
      )}
    </div>
  );
}

export default App;
