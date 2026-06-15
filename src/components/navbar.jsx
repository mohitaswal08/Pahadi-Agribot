import { Link } from "react-router-dom";
function Navbar() {
  return (
    <nav className="bg-green-600 text-white p-4 flex flex-col md:flex-row justify-between items-center">
      <h2 className="text-2xl font-bold">
        Pahadi AgriBot
      </h2>

      <ul className="flex flex-wrap gap-6 mt-4 md:mt-0">
  <li>
    <Link to="/">Home</Link>
  </li>

  <li>
    <Link to="/chat">Chat</Link>
  </li>

  <li>
    <Link to="/about">About</Link>
  </li>

  <li>
    <Link to="/contact">Contact</Link>
  </li>
  <li>
  <Link to="/crops">Crops</Link>
</li>
</ul>
    </nav>
  );
}

export default Navbar;