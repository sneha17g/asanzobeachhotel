import { BrowserRouter, Route, Routes } from "react-router-dom";
import ScrollAnimations from "./components/ScrollAnimations.jsx";
import ScrollToTop from "./components/ScrollToTop.jsx";
import Footer from "./layout/Footer.jsx";
import Navbar from "./layout/Navbar.jsx";
import "./App.css";
import About from "./pages/About.jsx";
import Contact from "./pages/Contact.jsx";
import Home from "./pages/Home.jsx";
import RoomDetails from "./pages/RoomDetails.jsx";
import Rooms from "./pages/Rooms.jsx";
import NotFound from "./pages/NotFound.jsx";

function App() {
  return (
    <BrowserRouter>
      <ScrollToTop />
      <div className="site-shell" id="top">
        <Navbar />
        <ScrollAnimations />
        <main className="site-content" aria-label="Page content">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="/rooms" element={<Rooms />} />
            <Route path="/roomDetails/:roomId" element={<RoomDetails />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="*" element={<NotFound />} />
          </Routes>
        </main>
        <Footer />
      </div>
    </BrowserRouter>
  );
}

export default App;
