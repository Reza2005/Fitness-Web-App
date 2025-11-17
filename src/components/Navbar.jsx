import React from "react";
import logo from "../assets/logo.png";

const Navbar = ({ halamanAktif, onNavigasi }) => {
  return (
    <nav className="w-full bg-white shadow-md sticky top-0 z-50">
      <div className="max-w-5xl mx-auto flex items-center justify-between px-5 py-4">

        {/* Logo */}
        <div className="flex items-center space-x-3">
          <img src={logo} className="w-12 h-12" alt="Logo" />
          <h1 className="text-xl font-bold text-slate-800">Fitness One</h1>
        </div>

        {/* Menu */}
        <div className="flex space-x-8 text-slate-700 font-medium">
          
          <button
            onClick={() => onNavigasi("beranda")}
            className={`nav-item ${halamanAktif === "beranda" ? "active-nav" : ""}`}
          >
            Beranda
          </button>

          <button
            onClick={() => onNavigasi("kalkulator")}
            className={`nav-item ${halamanAktif === "kalkulator" ? "active-nav" : ""}`}
          >
            Kalkulator
          </button>

          <button
            onClick={() => onNavigasi("nutrisi")}
            className={`nav-item ${halamanAktif === "nutrisi" ? "active-nav" : ""}`}
          >
            Nutrisi
          </button>

          <button
            onClick={() => onNavigasi("profil")}
            className={`nav-item ${halamanAktif === "profil" ? "active-nav" : ""}`}
          >
            Profil
          </button>

        </div>

      </div>
    </nav>
  );
};

export default Navbar;
