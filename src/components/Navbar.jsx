import { useState } from "react";
import profileImg from "../assets/Navpic.jpg";

export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);

  const linkBase =
    "text-sm font-medium transition-colors duration-200";

  const inactiveStyle = "text-gray-500 hover:text-black";

  const scrollToSection = (id) => {
    const section = document.getElementById(id);

    if (section) {
      section.scrollIntoView({
        behavior: "smooth"
      });
    }

    setMenuOpen(false);
  };

  return (
    <header className="sticky top-6 z-50 flex justify-center">
      <nav className="flex items-center justify-between 
                      w-[650px] max-w-[95%] 
                      px-8 py-3 
                      bg-white 
                      shadow-lg 
                      rounded-full 
                      border border-gray-200">

        {/* Logo */}
        <div className="text-sm font-semibold">
          The UI Lab
        </div>

        {/* Desktop Links */}
        <div className="hidden md:flex items-center gap-8">

          <button
            onClick={() => scrollToSection("home")}
            className={`${linkBase} ${inactiveStyle}`}
          >
            Home
          </button>

          <button
            onClick={() => scrollToSection("exhibition")}
            className={`${linkBase} ${inactiveStyle}`}
          >
            Exhibition
          </button>

          <button
            onClick={() => scrollToSection("about")}
            className={`${linkBase} ${inactiveStyle}`}
          >
            About
          </button>

        </div>

        {/* Right Section */}
        <div className="flex items-center gap-4">

          <button className="focus:outline-none">
            <img
              src={profileImg}
              alt="profile"
              className="w-9 h-9 rounded-full object-cover border border-gray-300"
            />
          </button>

          {/* Mobile Menu */}
          <button
            onClick={() => setMenuOpen(!menuOpen)}
            className="md:hidden text-gray-600 hover:text-black transition"
          >
            ☰
          </button>

        </div>
      </nav>

      {/* Mobile Dropdown */}
      {menuOpen && (
        <div className="absolute top-20 w-[90%] max-w-[400px] 
                        bg-white shadow-lg border border-gray-200 
                        rounded-2xl p-6 flex flex-col gap-4 md:hidden">

          <button
            onClick={() => scrollToSection("home")}
            className={`${linkBase} ${inactiveStyle}`}
          >
            Home
          </button>

          <button
            onClick={() => scrollToSection("exhibition")}
            className={`${linkBase} ${inactiveStyle}`}
          >
            Exhibition
          </button>

          <button
            onClick={() => scrollToSection("about")}
            className={`${linkBase} ${inactiveStyle}`}
          >
            About
          </button>

        </div>
      )}
    </header>
  );
}