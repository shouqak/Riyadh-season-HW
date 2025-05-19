import React from "react"
import myVideo from "../assets/bg-video.mp4"
function BackgroundVideo() {
  return (
    <div>
      <video
        src={myVideo}
        autoPlay
        muted
        loop
        style={{
          objectFit: "cover",
          width: "100%",
          height: "100vh",
          position: "fixed",
          top: 0,
          left: 0,
          zIndex: -1,
        }}
      ></video>
    </div>
  )
}

export default BackgroundVideo
