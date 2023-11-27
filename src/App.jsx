import React from "react";

function App() {
  return (
    <nav className="bg-blue-500">
      <ul className="flex justify-center space-x-4 p-4">
        <li>
          <a href="#" className="text-white hover:text-gray-200">
            Home
          </a>
        </li>

        <li>
          <a href="#" className="text-white hover:text-gray-200">
            Contact
          </a>
        </li>

        <li>
          <a href="#" className="text-white hover:text-gray-200">
            About
          </a>
        </li>

        <li>
          <a href="#" className="text-white hover:text-gray-200">
            Blog
          </a>
        </li>
      </ul>
    </nav>
  );
}

export default App;
