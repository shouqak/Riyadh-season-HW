import React from 'react'

function About() {
  return (
    <section className=" text-white py-5" style={{backgroundColor:"black"}}>
      <div className="container">
        <div className="row g-4">

          <div className="col-12 col-lg-6 d-flex flex-column gap-4">
            
            <div className="d-flex flex-column ">
              <div className="d-none d-sm-flex justify-content-center align-items-center" >
                <img
                  src="https://images.ctfassets.net/vy53kjqs34an/3Psaka2Ja20ebl34oSkWs5/2a7e698f9f5d84ff29351ad9eb39bde5/Logo_icon.svg?fm=webp&w=150&h=150 "
                  alt="Riyadh Season Logo"
                  className="img-fluid "
                  loading="lazy"
                  style={{ width: "160px", height: "160px" }}
                />
                
              </div>


              <div className="bg-gray-800 bg-opacity-25  p-4 rounded-3 h-100 d-flex justify-content-between">
                <div className='bg-secondary rounded-3 bg-opacity-25'>
                  <h2 className="fs-4 fw-bold mb-3">About Riyadh Season</h2>
                  <p className="fs-6 text-white-50 ">
                    Riyadh Season is one of the world’s largest winter entertainment events.
                    A variety of food from around the world, courtesy of exclusive restaurants —
                    plus countless exciting surprises. The festivities capture the essence of Saudi,
                    from its Najdi heritage to its present-day dynamism.
                  </p>
                </div>
                 <div className="bg-secondary bg-opacity-25 rounded-3 p-4 ms-5 text-center d-flex align-items-center justify-content-center">
                <div>
                  <p className="text-uppercase fw-semibold mb-1">Starts</p>
                  <p className="display-5 fw-bold mb-0">12</p>
                  <small className="text-white-50">October</small>
                </div>
              </div>
              </div>
            </div>
          </div>

         
          <div className="col-12 col-lg-6 d-flex flex-column gap-3">
            <div className="position-relative ratio ratio-16x9 rounded-3 overflow-hidden shadow-lg">
              <iframe
                src="https://www.youtube.com/embed/g8-NjAOWhME?autoplay=1 "
                title="Riyadh Season 2023 New Identity"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
                className="w-100 h-100"
              ></iframe>
            
              </div>
            </div>
          </div>

        </div>
      
    </section>
  )
}

export default About