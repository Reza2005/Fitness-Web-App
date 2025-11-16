import React from 'react';

// Styling sederhana
const styles = {
  container: {
    padding: '20px',
    fontFamily: 'Arial, sans-serif',
    backgroundColor: '#f4f4f4',
    minHeight: '100vh',
  },
  title: {
    textAlign: 'center',
    color: '#333',
  },
  profileCard: {
    backgroundColor: 'white',
    maxWidth: '500px',
    margin: '20px auto',
    padding: '30px',
    borderRadius: '10px',
    boxShadow: '0 4px 8px rgba(0,0,0,0.1)',
  },
  infoRow: {
    fontSize: '1.1em',
    marginBottom: '15px',
  },
  label: {
    fontWeight: 'bold',
    color: '#555',
  }
};

const ProfilePage = () => {
  // Data pengguna (contoh)
  const user = {
    nama: 'Pengguna Demo',
    email: 'user@example.com',
    bergabung: '16 November 2025',
  };

  return (
    <div style={styles.container}>
      <h1 style={styles.title}>Profil Saya</h1>
      
      <div style={styles.profileCard}>
        <div style={styles.infoRow}>
          <span style={styles.label}>Nama: </span>
          <span>{user.nama}</span>
        </div>
        
        <div style={styles.infoRow}>
          <span style={styles.label}>Email: </span>
          <span>{user.email}</span>
        </div>
        
        <div style={styles.infoRow}>
          <span style={styles.label}>Bergabung Sejak: </span>
          <span>{user.bergabung}</span>
        </div>
      </div>
    </div>
  );
};

export default ProfilePage;