'use client'; // Menandakan komponen ini sebagai Client Component

import React, { useState, useEffect } from 'react';

function Rating() {
  const [name, setName] = useState('');
  const [comment, setComment] = useState('');
  const [rating, setRating] = useState<number>(0);
  const [allRatings, setAllRatings] = useState<number[]>([]);
  const [feedbacks, setFeedbacks] = useState<{ name: string; comment: string }[]>([]);

  useEffect(() => {
    const savedRatings = JSON.parse(localStorage.getItem('allRatings') || '[]');
    const savedFeedbacks = JSON.parse(localStorage.getItem('feedbacks') || '[]');
    setAllRatings(savedRatings);
    setFeedbacks(savedFeedbacks);
  }, []);

  const averageRating = allRatings.length
    ? (allRatings.reduce((a, b) => a + b, 0) / allRatings.length).toFixed(1)
    : '0';
  const ratingPercentage = allRatings.length
    ? ((Number(averageRating) / 5) * 100).toFixed(1)
    : '0';

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (name && comment && rating) {
      const newRatings = [...allRatings, rating];
      const newFeedbacks = [...feedbacks, { name, comment }];
      setAllRatings(newRatings);
      setFeedbacks(newFeedbacks);
      localStorage.setItem('allRatings', JSON.stringify(newRatings)); // Simpan di localStorage
      localStorage.setItem('feedbacks', JSON.stringify(newFeedbacks)); // Simpan di localStorage
      alert('Komentar dan rating berhasil dikirim!');
      setName('');
      setComment('');
      setRating(0);
    } else {
      alert('Mohon isi semua kolom dan pilih rating.');
    }
  };

  const handleDelete = (index: number) => {
    // Menghapus feedback dari state tetapi tidak dari localStorage
    const newFeedbacks = feedbacks.filter((_, i) => i !== index);
    setFeedbacks(newFeedbacks);
    alert('Komentar berhasil dihapus! (permanen dari tampilan, tetapi masih di localStorage)');
  };

  return (
    <div style={{ maxWidth: '500px', margin: '0 auto', color: 'white' }}>
      <h2
        style={{
          color: '#ADD8E6', // Light Blue
          textShadow: '0 0 5px #ADD8E6, 0 0 10px #ADD8E6',
        }}
      >
        Formulir Komentar
      </h2>

      <form onSubmit={handleSubmit}>
        <div style={{ marginBottom: '1em' }}>
          <label htmlFor="name" style={{ color: '#ADD8E6', fontWeight: 'bold' }}>
            Nama:
          </label>
          <input
            type="text"
            id="name"
            value={name}
            onChange={(e) => setName(e.target.value)}
            required
            style={{
              width: '100%',
              padding: '8px',
              color: '#ADD8E6',
              backgroundColor: 'black',
              border: '1px solid #ADD8E6',
            }}
          />
        </div>

        <div style={{ marginBottom: '1em' }}>
          <label htmlFor="comment" style={{ color: '#ADD8E6', fontWeight: 'bold' }}>
            Komentar:
          </label>
          <textarea
            id="comment"
            value={comment}
            onChange={(e) => setComment(e.target.value)}
            required
            rows={4}
            style={{
              width: '100%',
              padding: '8px',
              color: '#ADD8E6',
              backgroundColor: '#fff', // Box komentar putih
              border: '1px solid #ADD8E6', // Border biru muda
              borderRadius: '5px', // Rounded corners untuk tampilan lebih halus
            }}
          />
        </div>

        <div style={{ marginBottom: '1em' }}>
          <label style={{ color: '#ADD8E6', fontWeight: 'bold' }}>Rating:</label>
          <div style={{ display: 'flex', gap: '5px', marginTop: '5px' }}>
            {[1, 2, 3, 4, 5].map((star) => (
              <span
                key={star}
                style={{
                  fontSize: '24px',
                  cursor: 'pointer',
                  color: star <= rating ? '#FFD700' : 'gray', // Emas
                }}
                onClick={() => setRating(star)}
              >
                ★
              </span>
            ))}
          </div>
        </div>

        <button
          type="submit"
          style={{
            padding: '10px 15px',
            backgroundColor: '#ADD8E6', // Light Blue
            color: '#fff',
            border: 'none',
            cursor: 'pointer',
          }}
        >
          Kirim Komentar
        </button>
      </form>

      <div style={{ marginTop: '2em' }}>
        <h3 style={{ color: '#FFD700' }}>Rata-Rata Rating: {averageRating} dari 5 bintang</h3>
        <div
          style={{
            width: '100%',
            backgroundColor: '#ddd',
            borderRadius: '5px',
            height: '20px',
          }}
        >
          <div
            style={{
              width: `${ratingPercentage}%`,
              backgroundColor: '#32CD32', // Green
              height: '100%',
              borderRadius: '5px',
            }}
          />
        </div>
        <div style={{ textAlign: 'center', color: '#ADD8E6' }}>
          {ratingPercentage}% / 100%
        </div>
      </div>

      <div style={{ marginTop: '2em' }}>
        <h3 style={{ color: '#ADD8E6' }}>Daftar Komentar</h3>
        <table style={{ width: '100%', borderCollapse: 'collapse' }}>
          <thead>
            <tr>
              <th
                style={{
                  border: '1px solid #ddd',
                  padding: '8px',
                  color: '#ADD8E6',
                }}
              >
                Nama
              </th>
              <th
                style={{
                  border: '1px solid #ddd',
                  padding: '8px',
                  color: '#ADD8E6',
                }}
              >
                Komentar
              </th>
              <th
                style={{
                  border: '1px solid #ddd',
                  padding: '8px',
                }}
              >
                Aksi
              </th>
            </tr>
          </thead>
          <tbody>
            {feedbacks.map((feedback, index) => (
              <tr key={index}>
                <td
                  style={{
                    border: '1px solid #ddd',
                    padding: '8px',
                    color: '#ADD8E6',
                  }}
                >
                  {feedback.name}
                </td>
                <td
                  style={{
                    border: '1px solid #ddd',
                    padding: '8px',
                    color: '#ADD8E6',
                  }}
                >
                  {feedback.comment}
                </td>
                <td
                  style={{
                    border: '1px solid #ddd',
                    padding: '8px',
                  }}
                >
                  <button
                    onClick={() => handleDelete(index)}
                    style={{
                      backgroundColor: '#FF6347', // Tomato
                      color: 'white',
                      border: 'none',
                      padding: '5px 10px',
                      cursor: 'pointer',
                    }}
                  >
                    Hapus
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}

export default Rating;
