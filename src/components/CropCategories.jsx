function CropCategories() {
  const crops = [
    "Rice",
    "Wheat",
    "Maize",
    "Millets",
    "Potato",
    "Tomato",
    "Apple",
    "Rajma"
  ];

  return (
    <section className="py-20 px-8">
      <h2 className="text-4xl font-bold text-center mb-12">
        Supported Crops
      </h2>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        {crops.map((crop) => (
          <div
            key={crop}
            className="border rounded-lg p-6 text-center shadow-md hover:shadow-lg"
          >
            <h3 className="text-xl font-semibold">
              {crop}
            </h3>
          </div>
        ))}
      </div>
    </section>
  );
}

export default CropCategories;