import React, { useState } from 'react';

// Styling sederhana (CSS-in-JS) agar terlihat lebih rapi
const styles = {
  container: {
    padding: '20px',
    fontFamily: 'Arial, sans-serif',
    maxWidth: '400px',
    margin: '0 auto',
  },
  title: {
    textAlign: 'center',
    color: '#333',
  },
  inputGroup: {
    marginBottom: '15px',
  },
  label: {
    display: 'block',
    marginBottom: '5px',
  },
  input: {
    width: '100%',
    padding: '8px',
    boxSizing: 'border-box', // Agar padding tidak merusak layout
  },
  button: {
    width: '100%',
    padding: '10px',
    backgroundColor: '#007bff',
    color: 'white',
    border: 'none',
    cursor: 'pointer',
  },
  result: {
    marginTop: '20px',
    fontSize: '1.2em',
    fontWeight: 'bold',
  }
};

const KalkulatorPage = () => {
  // State untuk menyimpan nilai input
  const [angka1, setAngka1] = useState(0);
  const [angka2, setAngka2] = useState(0);
  const [hasil, setHasil] = useState(0);

  // Fungsi untuk menghitung (contoh sederhana: tambah)
  const handleHitung = () => {
    setHasil(Number(angka1) + Number(angka2));
  };

  return (
    <div style={styles.container}>
      <h1 style={styles.title}>Kalkulator Sederhana</h1>
      
      <div style={styles.inputGroup}>
        <label htmlFor="angka1" style={styles.label}>Angka 1:</label>
        <input 
          type="number" 
          id="angka1"
          style={styles.input}
          value={angka1}
          onChange={(e) => setAngka1(e.target.value)}
        />
      </div>
      
      <div style={styles.inputGroup}>
        <label htmlFor="angka2" style={styles.label}>Angka 2:</label>
        <input 
          type="number" 
          id="angka2"
          style={styles.input}
          value={angka2}
          onChange={(e) => setAngka2(e.target.value)}
        />
      </div>
      
      <button style={styles.button} onClick={handleHitung}>
        Hitung (Tambah)
      </button>

      <div style={styles.result}>
        Hasil: {hasil}
      </div>
    </div>
  );
};

export default KalkulatorPage;