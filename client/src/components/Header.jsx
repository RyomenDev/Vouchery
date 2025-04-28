import HeaderData from "../Data/HeaderData.jsx";
import { useState } from "react";
import { Link } from "react-router-dom";
import { Menu, X } from "lucide-react";

const Header = () => {
  const { Logo, AppName, HeaderOptions } = HeaderData;
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <header className="z-50 flex items-center justify-between px-6 py-4 shadow-lg bg-gradient-to-b from-[#4E342E] via-[#3B2F2F] to-[#212121] text-white">
      {/* Logo and App Name */}
      <div className="flex items-center gap-3 cursor-pointer transition-transform duration-300 hover:scale-105">
        <img src={Logo} alt={AppName} className="h-12 md:h-14 w-auto" />
        <span className="text-xl font-bold md:text-2xl hover:text-indigo-400">
          {AppName}
        </span>
      </div>

      {/* Desktop Navigation */}
      <nav className="hidden md:flex gap-8 font-[Poppins] text-white text-lg md:text-xl">
        {HeaderOptions.map((option) => (
          <NavItem key={option.key} option={option} />
        ))}
      </nav>

      {/* Mobile Menu Toggle */}
      <button
        className="md:hidden text-white focus:outline-none"
        onClick={() => setMenuOpen((prev) => !prev)}
        aria-label="Toggle menu"
      >
        {menuOpen ? <X size={28} /> : <Menu size={28} />}
      </button>

      {/* Mobile Menu */}
      {menuOpen && (
        <div className="absolute top-20 left-0 right-0 bg-emerald-100 rounded-b-xl shadow-md px-6 py-4 font-[Poppins] text-gray-800 space-y-4 md:hidden">
          {HeaderOptions.map((option) => (
            <NavItem
              key={option.key}
              option={option}
              onClick={() => setMenuOpen(false)}
            />
          ))}
        </div>
      )}
    </header>
  );
};

const NavItem = ({ option, onClick }) => {
  const { key, path } = option;

  return path.startsWith("#") ? (
    <a
      href={path}
      onClick={onClick}
      className="block px-4 py-2 rounded hover:bg-blue-100 transition-all duration-200"
    >
      {key}
    </a>
  ) : (
    <Link
      to={path}
      onClick={onClick}
      className="block px-4 py-2 rounded hover:bg-blue-100 transition-all duration-200"
    >
      {key}
    </Link>
  );
};

export default Header;
