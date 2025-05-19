import React from 'react'
import "./style.css"

function Sponsers() {
   const sponsorGroups = [
    {
      title: "OFFICIAL PLATINUM PARTNERS",
      logos: [
        { src: "https://images.ctfassets.net/vy53kjqs34an/2v0oFZlxcMalLIE0yb6NuY/5f9b1ddfbd74868bb175809c3a6007d7/snb_1.png", alt: "rs24-snb 1", width: 97, height: 48 },
        { src: "https://images.ctfassets.net/vy53kjqs34an/4z3pZgx4uAU5XwNVSzImpN/22edbf783f65aa08df39dcee856691d6/stc_1.png", alt: "rs24-stc 1", width: 97, height: 50 },
        { src: "https://images.ctfassets.net/vy53kjqs34an/22h6g8kWFRKA8rov0GoxfH/cb66d205c0c1553fed6adfd12692e6cc/suliman_1.png", alt: "rs24-suliman 1", width: 153, height: 32 },
        { src: "https://images.ctfassets.net/vy53kjqs34an/2vHGQxcYKx9QTKoARtAcaD/4036d5e02d0168e8d7b55f2b37356b14/aramco_1.png", alt: "rs24-aramco", width: 146, height: 33 }
      ]
    },
    {
      title: "OFFICIAL PREMIUM PARTNERS",
      logos: [
        { src: "https://images.ctfassets.net/vy53kjqs34an/5o7ItFebjHJDxonjRkpl9j/e5427d940d8a54acfef2ab14c116b167/new_muraba_1.png", alt: "rs24-new muraba 1", width: 97, height: 74 },
        { src: "https://images.ctfassets.net/vy53kjqs34an/7z1eAJ3KMw3F00pJoavPmA/b478a91858a940e84afd9edfcc9ae2d8/tawinia_1.png", alt: "rs24-tawinia 1", width: 125, height: 39 },
        { src: "https://images.ctfassets.net/vy53kjqs34an/5h6UgHNQj9L4XlGWMQrX43/16cf8eae40973885e980c3bcfd1f09c1/hunger_station_1.png", alt: "rs24-hunger station 1", width: 97, height: 50 }
      ]
    },
    {
      title: "OFFICIAL STRATEGIC PARTNERS",
      logos: [
        { src: "https://images.ctfassets.net/vy53kjqs34an/169bBl3VuU4SE3tCwlByKh/1ed943a28d7a69f33415f7d17c8445ad/maestro_1.png", alt: "Maystro", width: 75, height: 82 },
        { src: "https://images.ctfassets.net/vy53kjqs34an/3A0kFwc3oDeN4cdXhe0lBS/e7afc87e61890c618e47dce7e5c5af20/checkapp_1.png", alt: "rs24-checkapp", width: 169, height: 29 }
      ]
    },
    {
      title: "OFFICIAL MAIN PARTNERS",
      logos: [
        { src: "https://images.ctfassets.net/vy53kjqs34an/4Fgcy65TrVJ67lqKHWMoeS/adb046a53a0d4d074692f300c8ecc117/pepsi_1.png", alt: "rs24-pepsi 1", width: 70, height: 70 },
        { src: "https://images.ctfassets.net/vy53kjqs34an/7g5en9dnOLfuF2KVK7XRfh/c415227d2f6fc0e5b688d74e17686b80/lays_1.png", alt: "rs24-lays 1", width: 72, height: 68 },
        { src: "https://images.ctfassets.net/vy53kjqs34an/3XQt6ptrb032XBM3lEop35/ea55155a4d2f3a667d65b3ad8552253a/dunkin_en_1.png", alt: "rs24-dunkin en 1", width: 97, height: 20 },
        { src: "https://images.ctfassets.net/vy53kjqs34an/3TrWm5A6jx3iA7QcpOsAet/fe5cddc9bf85062306e16cd4dd0e87f9/dzrt_ar_1.png", alt: "rs24-dzrt ar 1", width: 97, height: 48 },
        { src: "https://images.ctfassets.net/vy53kjqs34an/2BGLMsQKWmOjrV7dvpi0Bb/dba8f3bd22c6c383bba4021ed1b38986/panda_1.png", alt: "rs24-panda 1", width: 53, height: 88 },
        { src: "https://images.ctfassets.net/vy53kjqs34an/5R17ITu3QMYvaYAqPbzcJB/2640f340993bbac752eb12c47197b9b4/tree_en_1.png", alt: "rs24-tree en 1", width: 97, height: 36 },
        { src: "https://images.ctfassets.net/vy53kjqs34an/50Bm0MctCwbcLLf7YpCvlN/f9a292d07cb384ea3e0cffcf7dbe3065/muc_1.png", alt: "rs24-muc 1", width: 112, height: 43 },
        { src: "https://images.ctfassets.net/vy53kjqs34an/SYWazlsp1JKK4dY0NcmN0/f23cd6651c3d656bc82b38be95e10528/parker_1.png", alt: "rs24-parker 1", width: 108, height: 45 }
      ]
    },
    {
      title: "OFFICIAL AIRLINE PARTNER",
      logos: [
        { src: "https://images.ctfassets.net/vy53kjqs34an/4mh59QOoN8xdffa6gfwCFl/5ac371ace53d8c9b307de4a9dadf724e/fly_sudia_1.png", alt: "rs24-fly sudia 1", width: 130, height: 37 }
      ]
    },
    {
      title: "OFFICIAL SOCIAL MEDIA PARTNER",
      logos: [
        { src: "https://images.ctfassets.net/vy53kjqs34an/7pdSQJUrf8PiOR9CWm7eUB/4e76d9dd56f8bdc9b0e3f10b5f72b180/jaco_1.png", alt: "rs24-jaco 1", width: 109, height: 44 }
      ]
    },
    {
      title: "OFFICIAL CO PARTNERS",
      logos: [
        { src: "https://images.ctfassets.net/vy53kjqs34an/5kzmnqhF92lh4FgV18amMj/45b18f5b518d2f617e60b9d0d420da3e/sirc_1.png", alt: "rs24-sirc 1", width: 108, height: 45 },
        { src: "https://images.ctfassets.net/vy53kjqs34an/4SGEHf68cVakA7QgBRHo8d/a94db47e134c170b2aace44da418abb9/kudo_2.png", alt: "rs24-kudo 2", width: 105, height: 46 },
        { src: "https://images.ctfassets.net/vy53kjqs34an/58HQDyJobfphL2aaj8ELHF/a43af5e4ec682379aaa950fa5769361f/byd_en.png", alt: "byd", width: 208, height: 29 }
      ]
    }
  ];

  return (
    <div 
      className="container-fluid p-3" 
      style={{backgroundColor:"black" , width:"100%"}}
    >
      <div className="pb-4">
        <h2 className="text-center text-white">Our Sponsors</h2>
      </div>
      
      <div className="text-center">
        {sponsorGroups.map((group, index) => (
          <div key={index} className="mb-5">
            <p className="text-xl font-semibold mb-3 text-white">{group.title}</p>
            <div className="d-flex flex-wrap justify-content-center align-items-center gap-4">
              {group.logos.map((logo, logoIndex) => (
                <img
                  key={logoIndex}
                  src={logo.src}
                  alt={logo.alt}
                  width={logo.width}
                  height={logo.height}
                  className="img-fluid"
                  style={{ maxHeight: '80px' }}
                />
              ))}
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}

export default Sponsers