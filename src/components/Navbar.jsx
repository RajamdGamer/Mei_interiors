import React from 'react';
const Navbar = () => {
  return (
    <nav className="bg-gray-800 text-white drop-shadow-md">
      <div className="container mx-auto flex justify-between items-center p-4">
        {/* Logo Section */}
        <div className="text-xl font-bold">
          <a href="/">MEIInteriors</a>
        </div>

        {/* Links Section */}
        <ul className="flex space-x-6">
          <li>
            <a
              href="#home"
              className="hover:text-yellow-500 transition duration-300"
            >
              Home
            </a>
          </li>
          <li>
            <a
              href="#about"
              className="hover:text-yellow-500 transition duration-300"
            >
              About
            </a>
          </li>
          <li>
            <a
              href="#services"
              className="hover:text-yellow-500 transition duration-300"
            >
              Services
            </a>
          </li>
          <li>
            <a
              href="#contact"
              className="hover:text-yellow-500 transition duration-300"
            >
              Contact
            </a>
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
