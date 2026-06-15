import { Routes, Route } from "react-router-dom";

import Navbar from "./components/navbar";
import Footer from "./components/Footer";

import Home from "./pages/home";
import About from "./pages/about";
import Contact from "./pages/contact";
import Chat from "./pages/chat";
import Crops from "./pages/Crops";
import CropDetail from "./pages/CropDetail";

function App() {
  return (
    <>
      <Navbar />

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/chat" element={<Chat />} />
        <Route path="/crops" element={<Crops />} />
        <Route path="/crop/:name" element={<CropDetail />} />
      </Routes>

      <Footer />
    </>
  );
}

export default App;