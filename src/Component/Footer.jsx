import React from "react"

function Footer() {
  const socialMediaLinks = [
    {
      href: "https://www.facebook.com/webookfun/",
      icon: "https://images.ctfassets.net/vy53kjqs34an/12dxmhGOwDp0O60rGkGaoU/2316038e3becb17702597cf2782052f1/Button-1.png?fit=pad&w=55&h=55",
    },
    {
      href: "https://x.com/RiyadhSeason",
      icon: "https://images.ctfassets.net/vy53kjqs34an/7FPODYVihpzuYzN2hoDlD2/1e889247bc73807bd4844d210f91e2db/Button.png?fit=pad&w=55&h=55",
    },
    {
      href: "https://www.instagram.com/riyadhseason",
      icon: "https://images.ctfassets.net/vy53kjqs34an/6vlq9w8miTqnUyvaPVTGlt/c7098a6a02a829656ad0150412caa439/Button-2.png?fit=pad&w=55&h=55",
    },
  ]

  const footerLinks = [
    {
      text: "العربية",
      testId: "lang-switcher",
    },
    {
      text: "PRIVACY POLICY",
      href: "#",
    },
    {
      text: "TERMS & CONDITIONS",
      href: "#",
    },
  ]

  return (
    <footer className="border-top border-white-20 pt-4" style={{backgroundColor:"black"}}>
      <div className="container px-4 pb-4">
        <div className="text-center mb-4"></div>

        <div className="d-flex flex-column align-items-center py-3 gap-4 xl-flex-row xl-justify-between">
          <div className="d-flex align-items-center gap-3 grow lg-flex-row lg-gap-5">
            <figure className="">
              <img
                src="https://images.ctfassets.net/vy53kjqs34an/3b6vBa9H4jGNZQvpCDV9sm/ca9a29433c61e153eaa123f7fb59ec15/website_RiyadhSeason_w.png"
                width="85"
                height="110"
                alt="Global config"
                className="img-fluid"
              />
            </figure>

            <ul className="d-flex flex-shrink-0 align-items-center gap-2 list-unstyled p-0 m-0">
              {socialMediaLinks.map((social, index) => (
                <li
                  key={index}
                  className="rounded"
                >
                  <a
                    href={social.href}
                    rel="noreferrer noopener"
                    aria-label={social.alt}
                    target="_blank"
                    className="d-inline-flex align-items-center justify-content-center p-1 rounded hover-bg-light transition"
                  >
                    <img
                      src={social.icon}
                      width="55"
                      height="55"
                    
                      className="img-fluid"
                    />
                  </a>
                </li>
              ))}
            </ul>
          </div>

         
        </div>

        <div className="d-flex flex-column justify-content-between  pt-3 lg-flex-row">
          <nav className="d-flex flex-wrap align-items-center justify-content-around py-2 pb-4">
            <ul className="d-flex flex-row flex-wrap align-items-center justify-content-center gap-2 m-0 p-0 md-gap-5" style={{listStyleType: "none"}}>
              {footerLinks.map((link, index) => (
                <li key={index}>
                    <a
                      className="text-white p-1 list-unstyled"
                      href={link.href}
style={{textDecoration: "none" }}
>
                      {link.text}
                    </a>
                  
                </li>
              ))}
            </ul>
          

            <span className="text-white">
              Copyright © 2024 RIYADH SEASON. All rights reserved.
            </span>
          </nav>
        </div>
      </div>
    </footer>
  )
}

export default Footer
