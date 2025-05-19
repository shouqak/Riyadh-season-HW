import React from "react"
import BackgroundVideo from "./BackgroundVideo"
function Hero() {
  return (
    <>
    <BackgroundVideo/>
       <div 
      className="d-flex flex-column flex-lg-row align-items-lg-end align-items-center justify-content-between px-3 px-md-4 px-lg-5 py-5 py-lg-5"
      style={{ height: "90vh" }}
    >
      <div className="col-12 col-lg-6 text-center text-lg-start mb-4 mb-lg-0">
        <h1 className="fw-bold text-white display-4 display-lg-3">
          Welcome to Riyadh Season 2024
        </h1>
      </div>

      <div className="col-12 col-lg-6">
        <div className="d-flex flex-column flex-sm-row gap-3 justify-content-center justify-content-lg-end align-items-center">
          <a
            href="#explore"
            className="text-white py-2 fs-5 text-decoration-none hover-underline"
          >
            Explore
          </a>
          <button
            type="button"
            className="btn btn-primary btn-lg rounded-pill px-4 d-flex align-items-center gap-2"
          >
            <img
              src="https://images.ctfassets.net/vy53kjqs34an/70gUZ6vDCLCNWIW9wIFxrS/e92d2395ea2faf07034dd41074ea7aa9/Ticket.svg?fm=webp&fit=pad&w=20&h=20"
              width="20"
              height="20"
              alt="Ticket White Icon"
              className="img-fluid"
            />
            Book Tickets
          </button>
        </div>
      </div>
    </div>
    </>
  )
}

export default Hero
