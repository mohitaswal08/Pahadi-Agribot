function Crops() {
  const crops = [
    "Rice",
    "Wheat",
    "Maize",
    "Millets",
    "Potato",
    "Tomato",
    "Apple",
    "Rajma",
  ];

  return (
    <div className="p-10">

      <h1 className="text-4xl font-bold text-center mb-10">
        Uttarakhand Crop Knowledge Base
      </h1>

      <div className="grid grid-cols-4 gap-6">

        {crops.map((crop) => (
          <div
            key={crop}
            className="border rounded-lg p-8 shadow-md hover:shadow-lg text-center"
          >
            <h2 className="text-2xl font-semibold">
              {crop}
            </h2>
          </div>
        ))}

      </div>

    </div>
  );
}

export default Crops;