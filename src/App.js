import React from "react";
import "./App.css";
import "./style.css";
import srcimage from "./imageInSrc.jpg";

function App() {
  return (
    <React.Fragment>
      <div style={{ border: "solid 1px black", maxWidth: "100vw" }}>
        <h1 className="title-red">My name : Fatma Zahra</h1>

        <br />

        <img src={srcimage} alt="srcimg" />

        <br />
        <img src="/imageInPublic.jpg" alt="pubimg" />

      </div>

      <video style={{ width: "320", height: "660" }} controls>
        <source src="/myVideo.mp4" type="video/mp4" />
      </video>
    </React.Fragment>
  );
}

export default App;
