import React, { useRef } from "react"

function Nav() {

  return (
    <>
      <nav className="navbar navbar-dark" aria-label="First navbar example">
        <div className="container-fluid">
          <div>
            <button
              className="navbar-toggler"
              type="button"
              aria-label="Toggle navigation"
            >
              <span className="navbar-toggler-icon"></span>
            </button>
          </div>

          <img
            className="navbar-brand"
            src="https://images.ctfassets.net/vy53kjqs34an/3b6vBa9H4jGNZQvpCDV9sm/ca9a29433c61e153eaa123f7fb59ec15/website_RiyadhSeason_w.png?fm=webp&w=85&h=110"
            alt=""
            height={100}
          />

          <div>
            <button className="btn btn-primary">العربية</button>
          </div>
        </div>
      </nav>

    
    </>
  )
}

export default Nav