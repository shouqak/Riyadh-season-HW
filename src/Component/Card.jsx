import React from 'react'
import "./style.css"

function Card({ zone }) {
  return (
    <div >
     <div className="zone-card">
        <div className="zone-image-container">
          <img 
            src={zone.backgroundImage} 
            alt={zone.name}
            className="zone-background"
          />
          <div className="zone-overlay"></div>
          <div className="zone-content">
            <div className="zone-logo-container">
              <img 
                src={zone.logo} 
                alt={`${zone.name} Logo`}
                className="zone-logo"
              />
              {zone.sponsor && (
                <img 
                  src={zone.sponsor} 
                  alt={`${zone.name} Sponsor`}
                  className="zone-sponsor"
                />
              )}
            </div>
          </div>
          {zone.new && <span className="new-badge">NEW</span>}
        </div>
      
    </div></div>
  )
}

export default Card