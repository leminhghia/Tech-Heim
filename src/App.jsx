import { Route, Routes } from "react-router-dom"
import LandingPage from "./pages/LandingPage"
import Navbar from "./components/navbar"
import Footer from "./components/footer"
import "./index.css"
function App() {
  return (
 <div>
     <div className='px-4 sm:px-[5vw] md:px-[7vw] lg:px-[9vw]'>
      <Navbar />
      <hr />
      <Routes>
        <Route index path="/" element={<LandingPage />} />
      </Routes>
    </div>
     <Footer />
 </div>
  )
}

export default App
