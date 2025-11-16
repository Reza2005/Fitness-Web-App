import React, { useState } from 'react'; 

// 2. Import Navbar dan SEMUA halaman
import Navbar from './components/Navbar';
import HomePage from './pages/HomePage';
import KalkulatorPage from './pages/KalkulatorPage';
import NutrisiPage from './pages/NutrisiPage';
import ProfilePage from './pages/ProfilPage'; 

// HAPUS 'const appStyle' DARI SINI

function App() {
  const [halamanAktif, setHalamanAktif] = useState('beranda');

  const tampilkanHalaman = () => {
    switch (halamanAktif) {
      case 'beranda':
        return <HomePage />;
      case 'kalkulator':
        return <KalkulatorPage />;
      case 'nutrisi':
        return <NutrisiPage />;
      case 'profil':
        return <ProfilePage />;
      default:
        return <HomePage />;
    }
  };

  return (
    // GANTI baris ini menjadi 'className'
    <div className="max-w-6xl mx-auto px-5 font-sans"> 
      
      <Navbar onNavigasi={setHalamanAktif} />

      <main>
        {tampilkanHalaman()}
      </main>
    </div>
  );
}

export default App;