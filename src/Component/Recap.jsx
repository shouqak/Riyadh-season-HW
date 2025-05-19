import React from "react"
import "./style.css"

function Recap() {
  return (
    <>
      <div
        className="container-fluid"
        style={{ backgroundColor: "black" }}
      >
       <svg
            width="812"
            height="705"
            viewBox="0 0 812 705"
            fill="none"
            style={{
              position: "absolute",
              left: "-3rem",
              top: 0,
              maxHeight: "100%",
              maxWidth: "100%",
              zIndex: -1,
            }}
            xmlns="http://www.w3.org/2000/svg"
            class="absolute top-0 -z-10 max-h-full max-w-full ltr:-left-12 rtl:-right-12 rtl:-rotate-180 rtl:-scale-y-100"
          >
            <path
              fill-rule="evenodd"
              clip-rule="evenodd"
              d="M811.5 705H596.5H401.5L309.092 648.995L-36 449.991C81.9193 271.136 235.461 117.778 414.53 0L811.5 705Z"
              fill="#987BFF"
            ></path>
          </svg>
        <div className="row align-items-center gap-4 mb-6">
          <div className="col-md-6">
            <img
              src="https://images.ctfassets.net/vy53kjqs34an/1gbFl4Q7C1bI7YyssruI2V/637b666df8a9d2330d6e6ea81b7fe307/Button-3.png?fm=webp&w=70&h=70 "
              alt="Watch Riyadh Season 2023 Recap"
              className="w-16 h-16 object-contain mb-4"
            />
            <h3 className="text-white">Watch Riyadh Season 2023 Recap</h3>
            <div className="mt-4">
              <a
                href="https://www.youtube.com/c/riyadhseason "
                rel="noopener noreferrer"
                target="_blank"
                className="btn btn-outline-light"
              >
                Watch more moments
              </a>
            </div>
          </div>
          <div className="col-md-6">
            <video
              poster="https://images.ctfassets.net/vy53kjqs34an/5PcL5NRQvrljV31YLYi2UE/738df0fc1368a14eaec969afc8eb555a/Screenshot_2024-09-02_192441.png "
              playsinline
              disablepictureinpicture
              className="w-100 aspect-ratio"
              controls
            >
              <source
                src="https://videos.ctfassets.net/vy53kjqs34an/6Bq1C6PdoQXs4MSQWZS2tp/9eab192d3c853c6d0a156255a57143e6/Revision_3.mp4 "
                type="video/mp4"
              />
            </video>
          </div>
        </div>

        <div className="text-center">
          <a
            href="https://www.youtube.com/c/riyadhseason "
            rel="noopener noreferrer"
            target="_blank"
            className="btn btn-outline-light"
          >
            Watch more moments
          </a>
        </div>
      </div>
    </>
  )
}

export default Recap
