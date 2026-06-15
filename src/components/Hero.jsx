import { Link } from "react-router-dom";
function Hero() {
  return (
    <section className="bg-green-50 py-20 px-8 text-center">

      <h1 className="text-5xl font-bold mb-6 text-green-700">
        AI Farming Assistant for Uttarakhand
      </h1>

      <p className="text-xl mb-8 max-w-3xl mx-auto">
        Get crop advice, pest detection, disease diagnosis,
        farming techniques, and agricultural recommendations
        in Hindi and English using AI.
      </p>

      <div className="flex justify-center gap-4">
        <Link to="/chat">
  <button className="bg-green-600 text-white px-8 py-4 rounded-lg">
    Start Chatting
  </button>
</Link>

        <Link to="/crops">
  <button className="border border-green-600 px-8 py-4 rounded-lg">
    Explore Crops
  </button>
</Link>
      </div>

    </section>
  );
}

export default Hero;