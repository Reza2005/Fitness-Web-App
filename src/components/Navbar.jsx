import React from 'react';

// Styling (saya tambahkan cursor: pointer)
const navStyle = {
  backgroundColor: '#f0f0f0',
  padding: '20px',
  marginBottom: '20px',
  borderRadius: '5px',
  textAlign: 'center',
};
const linkStyle = {
  margin: '0 15px',
  textDecoration: 'none',
  fontWeight: 'bold',
  color: '#007bff',
  fontSize: '1.2em',
  cursor: 'pointer' // Penting: Menandakan ini bisa diklik
};

// 1. Terima prop 'onNavigasi' (nama bebas) dari App.jsx
const Navbar = ({ onNavigasi }) => {
  return (
    <nav style={navStyle}>
      {/* 2. Ganti <Link> dengan tag biasa (span/button/a) 
           Gunakan onClick untuk memanggil fungsi 'onNavigasi'
           dengan membawa nama halaman yang dituju.
      */}
      <span style={linkStyle} onClick={() => onNavigasi('beranda')}>
        Beranda
      </span>
      <span style={linkStyle} onClick={() => onNavigasi('kalkulator')}>
        Kalkulator
      </span>
      <span style={linkStyle} onClick={() => onNavigasi('nutrisi')}>
        Nutrisi
      </span>
      <span style={linkStyle} onClick={() => onNavigasi('profil')}>
        Profil
      </span>
    </nav>
  );
};

export default Navbar;