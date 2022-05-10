import React from "react";
import "./App.css";
import "./style.css";
import srcimage from "./imageInSrc.jpg";
import srcvideo from "./myVideo.mp4";
function App() {
  return (
    <React.Fragment>
      <div style={{ border: "solid 2px rgb(66, 57, 100)", maxWidth: "100vw" }}>
        <h1 className="title-red">My favorites : Fatma Zahra </h1>
        <h2>Images : favorites pets</h2>
        <div className="image">
          <br />
          <figure>
            <img src={srcimage} alt="srcimg" />
            <b>
              <figcaption>First image</figcaption>
            </b>
          </figure>
          <br />
          <figure>
            <img src="/imageInPublic.jpg" alt="pubimg" />
            <b>
              <figcaption>Second image</figcaption>
            </b>
          </figure>
        </div>
      </div>
      <div
        style={{
          border: "solid 2px rgb(66, 57, 100)",
          maxWidth: "100vw",
        }}
      >
        <h2>Video : favorite place</h2>
        <div style={{ backgroundColor: "rgb(218, 214, 214)" }}>
        <video
          style={{
            border: "solid 2px rgb(66, 57, 100)",
            width: "430px",
            height: "240px",
          }}
          controls
        >
          <source className="vid" src={srcvideo} type="video/mp4" />
        </video>
        </div>
      </div>
    </React.Fragment>
  );
}

export default App;
