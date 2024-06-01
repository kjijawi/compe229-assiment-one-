import React from 'react';

export default function ServicesPage() {
  return (
    <div style={styles.container}>
      <h1 style={styles.header}>Services I Offer</h1>
      <div style={styles.serviceList}>
        <div style={styles.serviceItem}>
          <div style={styles.icon}>📈</div>
          <h2 style={styles.serviceTitle}>General Marketing</h2>
          <p style={styles.serviceDescription}>
            Comprehensive marketing services to boost your online presence and engagement. I help businesses grow by creating effective marketing strategies.
          </p>
        </div>
        <div style={styles.serviceItem}>
          <div style={styles.icon}>🗃️</div>
          <h2 style={styles.serviceTitle}>Data Entry</h2>
          <p style={styles.serviceDescription}>
            Accurate and efficient data entry services to keep your information organized. I ensure your data is well-maintained and easily accessible.
          </p>
        </div>
        <div style={styles.serviceItem}>
          <div style={styles.icon}>💻</div>
          <h2 style={styles.serviceTitle}>General Programming</h2>
          <p style={styles.serviceDescription}>
            Web development, software development, and automation solutions tailored to your needs. I provide robust programming services for various applications.
          </p>
        </div>
      </div>
    </div>
  );
}

const styles = {
  container: {
    padding: '20px',
    maxWidth: '800px',
    margin: '0 auto',
    backgroundColor: '#fff',
    borderRadius: '10px',
    boxShadow: '0 0 10px rgba(0, 0, 0, 0.1)',
    marginTop: '20px',
    textAlign: 'center',
    fontFamily: 'Arial, sans-serif'
  },
  header: {
    textAlign: 'center',
    marginBottom: '20px',
    color: '#333',
    fontSize: '2.5em'
  },
  serviceList: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center'
  },
  serviceItem: {
    marginBottom: '20px',
    padding: '20px',
    width: '100%',
    backgroundColor: '#f9f9f9',
    borderRadius: '10px',
    boxShadow: '0 0 5px rgba(0, 0, 0, 0.1)',
    textAlign: 'left',
    transition: 'transform 0.3s, box-shadow 0.3s',
  },
  serviceItemHover: {
    transform: 'scale(1.02)',
    boxShadow: '0 0 10px rgba(0, 0, 0, 0.2)',
  },
  icon: {
    fontSize: '3em',
    marginBottom: '10px',
    color: '#007BFF'
  },
  serviceTitle: {
    fontSize: '1.5em',
    marginBottom: '10px',
    color: '#333'
  },
  serviceDescription: {
    fontSize: '1.2em',
    color: '#555',
    lineHeight: '1.6'
  }
};
