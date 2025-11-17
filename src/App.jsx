import React, { useState } from "react";

import Navbar from "./components/Navbar";
import HomePage from "./pages/HomePage";
import KalkulatorPage from "./pages/KalkulatorPage";
import NutrisiPage from "./pages/NutrisiPage";
import DetailNutrisiPage from "./pages/DetailNutrisiPage";
import ProfilePage from "./pages/ProfilPage";

function App() {
  const [halamanAktif, setHalamanAktif] = useState("beranda");
  const [makananDipilih, setMakananDipilih] = useState(null);

  const handlePilihMakanan = (makanan) => {
    console.log("Klik makanan:", makanan); // CEK KONSOL
    setMakananDipilih(makanan);
    setHalamanAktif("detailMakanan");
  };

  const tampilkanHalaman = () => {
    switch (halamanAktif) {
      case "beranda":
        return <HomePage />;

      case "kalkulator":
        return <KalkulatorPage />;

      case "nutrisi":
        return <NutrisiPage onPilihMakanan={handlePilihMakanan} />;

      case "detailMakanan":
        return (
          <DetailNutrisiPage
            data={makananDipilih}
            onKembali={() => setHalamanAktif("nutrisi")}
          />
        );

      case "profil":
        return <ProfilePage />;

      default:
        return <HomePage />;
    }
  };

  return (
    <div className="min-h-screen bg-white">
      <Navbar halamanAktif={halamanAktif} onNavigasi={setHalamanAktif} />
      <main className="max-w-5xl mx-auto px-6 py-8">
        {tampilkanHalaman()}
      </main>
    </div>
  );
}

export default App;
