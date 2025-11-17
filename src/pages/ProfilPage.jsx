import React from 'react';

const ProfilePage = () => {
  const user = {
    nama: 'Muhamad Reswara Suryawan',
    NIM: '21120123140126',
    bergabung: '10 November 2005',
  };

  return (
    <div className="p-5 font-sans">
      <h1 className="text-3xl font-bold text-center text-gray-800 mb-10">
        Profil Saya
      </h1>

      <div className="bg-white max-w-lg mx-auto p-8 rounded-2xl shadow-md border border-gray-100">
        
        {/* Nama */}
        <div className="mb-6">
          <p className="text-sm text-gray-500 mb-1">Nama</p>
          <p className="text-xl font-semibold text-gray-800">{user.nama}</p>
        </div>

        {/* Email */}
        <div className="mb-6">
          <p className="text-sm text-gray-500 mb-1">NIM</p>
          <p className="text-xl text-gray-800">{user.NIM}</p>
        </div>

        {/* Tanggal Bergabung */}
        <div>
          <p className="text-sm text-gray-500 mb-1">Bergabung Sejak</p>
          <p className="text-xl text-gray-800">{user.bergabung}</p>
        </div>

      </div>
    </div>
  );
};

export default ProfilePage;
