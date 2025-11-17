import { StrictMode, useState } from 'react';
import { createRoot } from 'react-dom/client';
import './index.css';

import Navbar from './components/Navbar';
import HomePage from './pages/HomePage';
import KalkulatorPage from './pages/KalkulatorPage';
import NutrisiPage from './pages/NutrisiPage';
import ProfilePage from './pages/ProfilPage';
import PWABadge from './PWABadge';

function AppRoot() {
  const [halamanAktif, setHalamanAktif] = useState('beranda');

  const tampilkanHalaman = () => {
    switch (halamanAktif) {
      case 'beranda': return <HomePage />;
      case 'kalkulator': return <KalkulatorPage />;
      case 'nutrisi': return <NutrisiPage />;
      case 'profil': return <ProfilePage />;
      default: return <HomePage />;
    }
  };

  return (
    <div className="min-h-screen bg-gray-100 font-sans">

      {/* 🔥 NAVBAR FIXED - FULL WIDTH */}
      <div className="fixed top-0 left-0 w-full bg-white z-50 shadow">
        <Navbar onNavigasi={setHalamanAktif} />
      </div>

      {/* 🔥 KONTEN UTAMA STARTS HERE */}
      <main className="max-w-4xl mx-auto px-6 pt-32 pb-20">
        {tampilkanHalaman()}
      </main>

      <PWABadge />
    </div>
  );
}

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <AppRoot />
  </StrictMode>,
);
