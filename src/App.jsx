import { Route, Routes } from "react-router-dom"
import LandingPage from "./pages/LandingPage"
import "./index.css"
function App() {
  return (
    <div>
      <Routes>
        <Route index path="/" element={<LandingPage />} />

      </Routes>
    </div>
  )
}

export default App
