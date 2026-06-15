import { Routes, Route } from "react-router-dom";

import Navbar from "./components/navbar";
import Footer from "./components/Footer";

import Home from "./pages/Home";
import About from "./pages/About";
import Contact from "./pages/Contact";
import Chat from "./pages/Chat";
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