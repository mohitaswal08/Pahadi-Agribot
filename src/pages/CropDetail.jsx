function CropDetail() {
  return (
    <div className="p-10">

      <h1 className="text-4xl font-bold mb-8">
        Rice
      </h1>

      <div className="space-y-6">

        <div className="border p-5 rounded-lg">
          <h2 className="font-bold">Best Season</h2>
          <p>June - July</p>
        </div>

        <div className="border p-5 rounded-lg">
          <h2 className="font-bold">Common Diseases</h2>
          <ul>
            <li>Blast</li>
            <li>Brown Spot</li>
          </ul>
        </div>

        <div className="border p-5 rounded-lg">
          <h2 className="font-bold">Recommended Fertilizer</h2>
          <p>NPK Fertilizer</p>
        </div>

      </div>

    </div>
  );
}

export default CropDetail;