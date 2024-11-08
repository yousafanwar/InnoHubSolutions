//import './App.css'
import NavBar from "./Views/NavBar"
import { BrowserRouter, Routes, Route } from "react-router-dom";
// @ts-ignore
import { router } from "./routes";
import HomePage from "./pages/HomePage"
import Contact from "./pages/Contact"
import Insights from "./pages/Insights"
import Solutions from "./pages/Solutions"

function App() {

  return (
    <>
    <BrowserRouter >
      <NavBar />
      <Routes>
      <Route path="/home" element={<HomePage />} />
      <Route path="/contact" element={<Contact />} />
      <Route path="/insights" element={<Insights />} />
      <Route path="/solutions" element={<Solutions />} />

      </Routes>
      </BrowserRouter>
    </>
  )
}

export default App
