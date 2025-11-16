import React from 'react';
// 1. Import data yang sudah kita pisah
import { dataMakanan } from '../data/nutrisi.js'; 

// Styling (bisa dipindah ke file .css jika mau)
const styles = {
  container: { padding: '20px', fontFamily: 'Arial, sans-serif' },
  title: { color: '#28a745' },
  foodItem: { border: '1px solid #ccc', borderRadius: '5px', padding: '15px', marginBottom: '10px' },
  foodName: { fontSize: '1.5em', margin: '0 0 10px 0' }
};

const NutrisiPage = () => {
  return (
    <div style={styles.container}>
      <h1 style={styles.title}>Informasi Nutrisi</h1>
      <p>Cari tahu kalori dan nutrisi makanan Anda.</p>
      
      <div>
        {/* 2. Gunakan data yang di-import */}
        {dataMakanan.map((makanan) => (
          <div key={makanan.id} style={styles.foodItem}>
            <h3 style={styles.foodName}>{makanan.nama}</h3>
            <p>Kalori: {makanan.kalori} kkal</p>
            <p>Protein: {makanan.protein} g</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default NutrisiPage;