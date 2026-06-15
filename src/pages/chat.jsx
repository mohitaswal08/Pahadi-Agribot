function Chat() {
  return (
    <div className="max-w-4xl mx-auto p-8">

      <h1 className="text-4xl font-bold text-center mb-8 text-green-700">
        Pahadi AgriBot Chat
      </h1>

      {/* Language Selector */}
      <div className="flex justify-end mb-4">
        <select className="border p-2 rounded-lg">
          <option>English</option>
          <option>हिन्दी</option>
        </select>
      </div>

      {/* Chat Area */}
      <div className="border rounded-lg h-96 p-4 bg-gray-50 overflow-y-auto">

        <div className="mb-4">
          <div className="bg-green-100 p-3 rounded-lg inline-block">
            नमस्ते! मैं Pahadi AgriBot हूँ। आपकी खेती से जुड़ी समस्याओं में मदद कर सकता हूँ।
          </div>
        </div>

        <div className="flex justify-end">
          <div className="bg-green-600 text-white p-3 rounded-lg inline-block">
            My wheat crop has yellow leaves.
          </div>
        </div>

      </div>

      {/* Input Section */}
      <div className="mt-6 flex gap-4">

        <input
          type="text"
          placeholder="Ask your farming question..."
          className="flex-1 border rounded-lg p-3"
        />

        <button className="bg-green-600 text-white px-6 py-3 rounded-lg hover:bg-green-700">
          Send
        </button>

      </div>

      {/* Voice and Image Buttons */}
      <div className="flex gap-4 mt-4">

        <button className="border px-4 py-2 rounded-lg hover:bg-gray-100">
          🎤 Voice Input
        </button>

        <button className="border px-4 py-2 rounded-lg hover:bg-gray-100">
          📸 Upload Image
        </button>

      </div>

      {/* Example Questions */}
      <div className="mt-8">

        <h3 className="font-semibold mb-3 text-lg">
          Try Asking:
        </h3>

        <div className="grid gap-3">

          <div className="border rounded-lg p-3 cursor-pointer hover:bg-gray-50">
            🌾 How can I increase rice yield?
          </div>

          <div className="border rounded-lg p-3 cursor-pointer hover:bg-gray-50">
            🍅 My tomato plant leaves are turning yellow.
          </div>

          <div className="border rounded-lg p-3 cursor-pointer hover:bg-gray-50">
            🐛 Identify pest from crop image.
          </div>

          <div className="border rounded-lg p-3 cursor-pointer hover:bg-gray-50">
            🥔 Best fertilizer for potato farming?
          </div>

        </div>

      </div>

    </div>
  );
}

export default Chat;