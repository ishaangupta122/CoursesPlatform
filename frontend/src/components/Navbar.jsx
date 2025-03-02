import React, { useState, useEffect, useRef } from "react";
import { Link, useNavigate } from "react-router-dom";
import { Menu, X } from "lucide-react";

const Navbar = ({ token, setToken }) => {
  const navigate = useNavigate();
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const menuRef = useRef(null);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const closeMenu = () => {
    setIsMenuOpen(false);
  };

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (menuRef.current && !menuRef.current.contains(event.target)) {
        closeMenu();
      }
    };

    if (isMenuOpen) {
      document.addEventListener("mousedown", handleClickOutside);
    }

    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [isMenuOpen]);

  const NavLinks = () => (
    <>
      <Link
        to="/"
        className="block py-2 mr-5 font-medium leading-6 text-gray-600 hover:text-gray-900"
        onClick={closeMenu}
      >
        Home
      </Link>
      <Link
        to="/courses"
        className="block py-2 mr-5 font-medium leading-6 text-gray-600 hover:text-gray-900"
        onClick={closeMenu}
      >
        Courses
      </Link>
      <Link
        to="/trainings"
        className="block py-2 mr-5 font-medium leading-6 text-gray-600 hover:text-gray-900"
        onClick={closeMenu}
      >
        Trainings
      </Link>
      <Link
        to="/alumnis"
        className="block py-2 mr-5 font-medium leading-6 text-gray-600 hover:text-gray-900"
        onClick={closeMenu}
      >
        Alumni Directory
      </Link>
      <Link
        to="/hiringPartners"
        className="block py-2 mr-5 font-medium leading-6 text-gray-600 hover:text-gray-900"
        onClick={closeMenu}
      >
        Hiring Partners
      </Link>
    </>
  );

  return (
    <>
      <section className="w-full px-4 md:px-8 text-gray-700 bg-white">
        <div className="container flex flex-wrap items-center justify-between py-5 mx-auto max-w-7xl">
          <div className="flex items-center">
            <Link
              to="/"
              className="flex items-center font-medium text-gray-900"
            >
              <span className="text-xl font-black leading-none text-gray-900 select-none">
                Courses
                <span className="text-indigo-600">.</span>
              </span>
            </Link>
          </div>

          {/* Mobile menu button */}
          <div className="flex lg:hidden">
            <button
              onClick={toggleMenu}
              className="text-gray-500 hover:text-gray-600 focus:outline-none focus:text-gray-600"
            >
              {isMenuOpen ? (
                <X className="w-6 h-6" />
              ) : (
                <Menu className="w-6 h-6" />
              )}
            </button>
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden lg:flex lg:items-center">
            <NavLinks />
          </nav>

          {/* Desktop Auth Buttons */}
          <div className="hidden lg:flex items-center ml-5 space-x-6">
            {token !== "" ? (
              <>
                <Link
                  to="/profile"
                  className="inline-flex items-center justify-center px-4 py-2 text-base font-medium leading-6 text-white whitespace-no-wrap bg-indigo-600 border border-transparent rounded-md shadow-sm hover:bg-indigo-500 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-600"
                >
                  Profile
                </Link>
                <Link
                  to="/dashboard"
                  className="text-base font-medium leading-6 text-gray-600 whitespace-no-wrap transition duration-150 ease-in-out hover:text-gray-900"
                >
                  Dashboard
                </Link>
                <Link
                  to="/signin"
                  className="text-base font-medium leading-6 text-gray-600 whitespace-no-wrap transition duration-150 ease-in-out hover:text-gray-900"
                  onClick={() => {
                    localStorage.removeItem("token");
                    localStorage.removeItem("id");
                    localStorage.removeItem("name");
                    localStorage.removeItem("email");
                    setToken("");
                    navigate("/");
                  }}
                >
                  Logout
                </Link>
              </>
            ) : (
              <>
                <Link
                  to="/signin"
                  className="text-base font-medium leading-6 text-gray-600 whitespace-no-wrap transition duration-150 ease-in-out hover:text-gray-900"
                >
                  Sign in
                </Link>
                <Link
                  to="/signup"
                  className="inline-flex items-center justify-center px-4 py-2 text-base font-medium leading-6 text-white whitespace-no-wrap bg-indigo-600 border border-transparent rounded-md shadow-sm hover:bg-indigo-500 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-600"
                >
                  Sign up
                </Link>
              </>
            )}
          </div>
        </div>

        {/* Overlay */}
        {isMenuOpen && (
          <div className="fixed inset-0 z-40" onClick={closeMenu}></div>
        )}

        {/* Mobile Side Menu */}
        <div
          className={`fixed inset-y-0 left-0 z-50 w-64 bg-white shadow-lg transform ease-in-out transition-all duration-300 ${
            isMenuOpen ? "translate-x-0" : "-translate-x-full"
          }`}
          ref={menuRef}
        >
          <div className="p-6">
            <Link
              to="/"
              className="flex items-center font-medium text-gray-900"
              onClick={closeMenu}
            >
              <span className="text-xl font-black leading-none text-gray-900 select-none">
                Courses
                <span className="text-indigo-600">.</span>
              </span>
            </Link>
            <nav className="mt-8">
              <NavLinks />
            </nav>
            <div className="mt-8 space-y-4">
              {token !== "" ? (
                <>
                  <Link
                    to="/profile"
                    className="block w-full px-4 py-2 text-center text-white bg-indigo-600 rounded-md hover:bg-indigo-500 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-600"
                    onClick={closeMenu}
                  >
                    Profile
                  </Link>
                  <Link
                    to="/dashboard"
                    className="block w-full px-4 py-2 text-center text-gray-600 hover:text-gray-900 rounded-md border border-indigo-600"
                    onClick={closeMenu}
                  >
                    Dashboard
                  </Link>
                  <Link
                    to="/signin"
                    className="block w-full px-4 py-2 text-center text-gray-600 hover:text-gray-900"
                    onClick={() => {
                      localStorage.removeItem("token");
                      localStorage.removeItem("id");
                      localStorage.removeItem("name");
                      localStorage.removeItem("email");
                      setToken("");
                      navigate("/");
                      toggleMenu();
                    }}
                  >
                    Logout
                  </Link>
                </>
              ) : (
                <>
                  <Link
                    to="/signin"
                    className="block w-full px-4 py-2 text-center text-gray-600 hover:text-gray-900 rounded-md border border-indigo-600"
                    onClick={toggleMenu}
                  >
                    Sign in
                  </Link>
                  <Link
                    to="/signup"
                    className="block w-full px-4 py-2 text-center text-white bg-indigo-600 rounded-md hover:bg-indigo-500 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-600"
                    onClick={toggleMenu}
                  >
                    Sign up
                  </Link>
                </>
              )}
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Navbar;
