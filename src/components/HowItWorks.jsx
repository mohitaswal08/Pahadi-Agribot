function HowItWorks() {
  const steps = [
    "Ask your farming question",
    "Upload a crop image if needed",
    "AI analyzes the problem",
    "Get recommendations in Hindi or English",
  ];

  return (
    <section className="py-20 px-8 bg-gray-50">
      <h2 className="text-4xl font-bold text-center mb-12">
        How It Works
      </h2>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        {steps.map((step, index) => (
          <div
            key={index}
            className="bg-white p-6 rounded-lg shadow-md text-center"
          >
            <div className="text-3xl font-bold text-green-600 mb-4">
              {index + 1}
            </div>

            <p>{step}</p>
          </div>
        ))}
      </div>
    </section>
  );
}

export default HowItWorks;