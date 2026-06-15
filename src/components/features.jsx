function Features() {
  return (
    <section className="py-20 px-8">

      <h2 className="text-4xl font-bold text-center mb-12">
        Features
      </h2>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">

        <div className="border rounded-lg p-6 shadow-md">
          <h3 className="text-xl font-bold">
            Voice Input
          </h3>

          <p className="mt-2">
            Ask questions using your voice.
          </p>
        </div>

        <div className="border rounded-lg p-6 shadow-md">
          <h3 className="text-xl font-bold">
            Disease Detection
          </h3>

          <p className="mt-2">
            Upload crop images and detect diseases.
          </p>
        </div>

        <div className="border rounded-lg p-6 shadow-md">
          <h3 className="text-xl font-bold">
            Hindi Support
          </h3>

          <p className="mt-2">
            Input and output available in Hindi.
          </p>
        </div>

        <div className="border rounded-lg p-6 shadow-md">
          <h3 className="text-xl font-bold">
            Crop History
          </h3>

          <p className="mt-2">
            Access previous crop-related records.
          </p>
        </div>

        <div className="border rounded-lg p-6 shadow-md">
          <h3 className="text-xl font-bold">
            AI Crop Advisory
          </h3>

          <p className="mt-2">
            Get recommendations for better yields.
          </p>
        </div>

        <div className="border rounded-lg p-6 shadow-md">
          <h3 className="text-xl font-bold">
            Voice Output
          </h3>

          <p className="mt-2">
            Listen to answers in Hindi.
          </p>
        </div>

      </div>

    </section>
  );
}

export default Features;