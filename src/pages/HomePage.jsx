import React from 'react';

// Contoh data dengan gambar online (pastikan lisensi aman)
const dailyRecommended = [
  { 
    name: 'Push Up', 
    duration: '3 sets of 15 reps', 
    image: 'https://images.pexels.com/photos/176782/pexels-photo-176782.jpeg' 
  },
  { 
    name: 'Squat', 
    duration: '3 sets of 20 reps', 
    image: 'https://media.istockphoto.com/id/1917187221/id/foto/sekelompok-teman-sporty-melakukan-squat-dengan-instruktur-di-gym.jpg?s=2048x2048&w=is&k=20&c=zpmKDAl2AZA_rVskU1rgKUaAnjGCkh_jvvlWXYr-9zQ=' 
  },
  { 
    name: 'Plank', 
    duration: '3 sets of 60 sec', 
    image: 'https://gymnation.com/media/jpbjzofv/plank2.webp?width=956&height=675&v=1da85a0bb1f4060' 
  },
];

const popularExercises = [
  { 
    name: 'Jumping Jacks', 
    duration: '5 minutes', 
    image: 'https://media.istockphoto.com/id/842972604/photo/she-never-skips-a-warm-up.jpg?s=612x612&w=0&k=20&c=2vv_3TVZk1AVT4-2CjFrJDNfYPhktmC7pRrmdI4rbI8=' 
  },
  { 
    name: 'Burpees', 
    duration: '3 sets of 10 reps', 
    image: 'https://image.boxrox.com/2021/11/burpee-over-box-crossfit-open-e1637223343684-822x548.png' 
  },
  { 
    name: 'Lunges', 
    duration: '3 sets of 15 reps', 
    image: 'https://setptusa.com/wp-content/uploads/2018/10/Dynamic-Lunge.jpg' 
  },
];

const HomePage = () => {
  return (
    <div className="p-5 text-center">
      <h1 className="text-4xl font-bold text-gray-800 mb-4">
        Selamat Datang di Fitness One!
      </h1>
      <p className="text-lg text-gray-600 mb-8">
        Where Your Fitness Is Our Number One Priority
      </p>

      {/* Daily Recommended Exercise */}
      <div className="mb-8">
        <h2 className="text-2xl font-semibold text-gray-700 mb-4">
          Daily Recommended Exercise
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          {dailyRecommended.map((exercise, idx) => (
            <div key={idx} className="bg-gray-100 p-3 rounded shadow">
              <img
                src={exercise.image}
                alt={exercise.name}
                className="w-full h-40 object-cover mb-2 rounded"
              />
              <strong>{exercise.name}</strong>
              <p>{exercise.duration}</p>
            </div>
          ))}
        </div>
      </div>

      {/* Popular Exercises */}
      <div>
        <h2 className="text-2xl font-semibold text-gray-700 mb-4">
          Popular Exercises
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          {popularExercises.map((exercise, idx) => (
            <div key={idx} className="bg-gray-100 p-3 rounded shadow">
              <img
                src={exercise.image}
                alt={exercise.name}
                className="w-full h-40 object-cover mb-2 rounded"
              />
              <strong>{exercise.name}</strong>
              <p>{exercise.duration}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default HomePage;
