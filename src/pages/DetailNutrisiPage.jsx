import React from "react";

const DetailNutrisiPage = ({ data, onKembali }) => {
  if (!data) return <p>Data tidak ditemukan.</p>;

  return (
    <div className="p-5 font-sans max-w-2xl mx-auto">
      <button 
        onClick={onKembali} 
        className="text-blue-600 mb-4 underline"
      >
        ← Kembali
      </button>

      <h1 className="text-3xl font-bold text-green-600 mb-4">
        {data.nama}
      </h1>

      <div className="border rounded-lg p-4 shadow">
        <p className="text-gray-700 text-lg mb-2">
          <span className="font-semibold">Kalori:</span> {data.kalori} kkal
        </p>
        <p className="text-gray-700 text-lg">
          <span className="font-semibold">Protein:</span> {data.protein} g
        </p>
      </div>
    </div>
  );
};

export default DetailNutrisiPage;
