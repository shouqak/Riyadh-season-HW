
//import './App.css'
import About from "./Component/About"
import Footer from "./Component/Footer"
import Hero from "./Component/Hero"
import Nav from "./Component/Nav"
import Recap from "./Component/Recap"
import Sponsers from "./Component/Sponsers"
import ZoneGrid from "./Component/ZoneGrid"
<link
  rel="stylesheet"
  href="https://stackpath.bootstrapcdn.com/bootstrap/5.3.2/css/bootstrap.min.css"
  integrity="sha384-GLhlTQ8iRABQYhWfXcQH87EoGdH6j2L04K17Qixxpa5zLx1W5TDBm7t0j1JbntcG"
  crossorigin="anonymous"
/>

function App() {
return (
    <>
     <Nav/>
     <Hero/>
     <ZoneGrid/>
     <About/>
     <Sponsers/>
     <Footer/>
    </>
  )
}

export default App
