import React, { useState } from 'react'; // 1. Import useState

// 2. Import Navbar dan SEMUA halaman
import Navbar from './components/Navbar';
import HomePage from './pages/HomePage';
import KalkulatorPage from './pages/KalkulatorPage';
import NutrisiPage from './pages/NutrisiPage';
import ProfilePage from './pages/ProfilePage';

// Styling (opsional)
const appStyle = {
  maxWidth: '1200px',
  margin: '0 auto',
  padding: '0 20px'
};

function App() {
  // 3. Buat STATE untuk melacak halaman mana yang aktif.
  //    'beranda' adalah nilai default saat aplikasi pertama dimuat.
  const [halamanAktif, setHalamanAktif] = useState('beranda');

  // 4. Buat fungsi untuk menampilkan halaman yang benar
  //    Ini adalah pengganti <Routes>
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
        // Jika terjadi error, kembali ke beranda
        return <HomePage />;
    }
  };

  return (
    <div style={appStyle}>
      {/* 5. Tampilkan Navbar.
           Kirim 'setHalamanAktif' sebagai prop 'onNavigasi'.
           Saat 'onNavigasi' dipanggil di Navbar, state di App akan berubah.
      */}
      <Navbar onNavigasi={setHalamanAktif} />

      {/* 6. Panggil fungsi untuk me-render halaman yang sesuai.
           Setiap kali state 'halamanAktif' berubah, 
           fungsi ini akan berjalan lagi dan menampilkan halaman yang baru.
      */}
      <main>
        {tampilkanHalaman()}
      </main>
    </div>
  );
}

export default App;