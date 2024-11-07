import React from 'react';

const PersonalInfo = () => {
  const personalData = {
    name: 'Desty Maharani',
    birthDate: '15 Desember 2003',
    email: 'destymhrn15@gmail.com',
    phone: '085759609950',
    address: 'Kp. Pinggirwangi RT01/RW06 Kec. Cicalengka Kab. Bandung',
    occupation: 'Web Depelopment',
  };

  return (
    <div style={styles.container}>
      <h2 style={styles.title}>Informasi Pribadi</h2>
      <ul style={styles.list}>
        {Object.entries(personalData).map(([key, value]) => (
          <li key={key} style={styles.listItem}>
            <strong>{key.charAt(0).toUpperCase() + key.slice(1)}:</strong> {value}
          </li>
        ))}
      </ul>
    </div>
  );
};

const styles = {
    container: {
      border: '1px solid #ccc',
      borderRadius: '5px',
      padding: '20px',
      maxWidth: '400px',
      margin: '20px auto',
      backgroundColor: '#f9f9f9',
      fontFamily: 'Roboto, sans-serif', // Ganti font di sini
    },
    title: {
      color: 'teal',
      fontFamily: 'Roboto, sans-serif', // Ganti font judul di sini
      fontWeight: '700', // Menggunakan berat font yang lebih tebal
    },
    list: {
      listStyleType: 'none',
      padding: 0,
    },
    listItem: {
      marginBottom: '10px',
      color: 'black',
    },
  };

export default PersonalInfo;