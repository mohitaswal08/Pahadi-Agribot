import Navbar from "./components/navbar";
import Hero from "./components/Hero";
import Card from "./components/Card";
import Footer from "./components/Footer";
function App() {
  return (
    <>
      <Navbar />
      <Hero />
      <div className="grid grid-cols-3 gap-6 p-8">
  <Card
    title="Disease Detection"
    description="Identify common crop diseases."
  />

  <Card
    title="Pest Management"
    description="Get advice on pest control."
  />

  <Card
    title="Crop Advisory"
    description="Receive AI-based crop recommendations."
  />
</div>
<Footer />
    </>
  );
}

export default App;