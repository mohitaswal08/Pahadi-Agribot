function Navbar() {
  return (
    <nav className="bg-green-600 text-white p-4 flex justify-between">
      <h2 className="text-2xl font-bold">
        Pahadi AgriBot
      </h2>

      <ul className="flex gap-6">
        <li>Home</li>
        <li>Chat</li>
        <li>About</li>
        <li>Contact</li>
      </ul>
    </nav>
  );
}

export default Navbar;