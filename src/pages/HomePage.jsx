import React from 'react';

const styles = {
  container: {
    padding: '20px',
    textAlign: 'center',
    fontFamily: 'Arial, sans-serif',
  },
  title: {
    fontSize: '2.5em',
    color: '#333',
  }
}

const HomePage = () => {
  return (
    <div style={styles.container}>
      <h1 style={styles.title}>Selamat Datang di Health App!</h1>
      <p>Aplikasi untuk memantau kesehatan, nutrisi, dan profil Anda.</p>
      <p>Silakan gunakan navigasi di atas untuk menjelajah.</p>
    </div>
  );
};

export default HomePage;