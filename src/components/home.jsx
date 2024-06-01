import React from 'react';
import { Link } from 'react-router-dom';

export default function HomePage() {
  return (
    <div style={styles.container}>
      <div style={styles.heroSection}>
        <h1 style={styles.heroTitle}>Welcome to Karim Jijawi's Portfolio</h1>
        <p style={styles.heroSubtitle}>Software AI Student | Developer | Tech Enthusiast</p>
        <Link to="/contact" style={styles.ctaButton}>Get In Touch</Link>
      </div>
      <div style={styles.aboutSection}>
        <h2 style={styles.sectionTitle}>About Me</h2>
        <p style={styles.aboutText}>
          Hi, I'm Karim Jijawi, a software artificial intelligence student at Centennial College. 
          I have a passion for technology and have worked in various roles including marketing, data entry, and programming.
        </p>
        <Link to="/about" style={styles.moreLink}>Learn More</Link>
      </div>
      <div style={styles.servicesSection}>
        <h2 style={styles.sectionTitle}>Services I Offer</h2>
        <div style={styles.serviceList}>
          <div style={styles.serviceItem}>
            <h3 style={styles.serviceTitle}>General Marketing</h3>
            <p style={styles.serviceDescription}>
              Comprehensive marketing services to boost your online presence and engagement.
            </p>
          </div>
          <div style={styles.serviceItem}>
            <h3 style={styles.serviceTitle}>Data Entry</h3>
            <p style={styles.serviceDescription}>
              Accurate and efficient data entry services to keep your information organized.
            </p>
          </div>
          <div style={styles.serviceItem}>
            <h3 style={styles.serviceTitle}>General Programming</h3>
            <p style={styles.serviceDescription}>
              Web development, software development, and automation solutions tailored to your needs.
            </p>
          </div>
        </div>
        <Link to="/services" style={styles.moreLink}>View All Services</Link>
      </div>
    </div>
  );
}

const styles = {
  container: {
    fontFamily: 'Arial, sans-serif',
    color: '#333'
  },
  heroSection: {
    backgroundColor: '#007BFF',
    color: '#fff',
    padding: '60px 20px',
    textAlign: 'center',
    borderRadius: '10px',
    boxShadow: '0 0 10px rgba(0, 0, 0, 0.1)',
    margin: '20px auto',
    maxWidth: '800px'
  },
  heroTitle: {
    fontSize: '3em',
    marginBottom: '10px'
  },
  heroSubtitle: {
    fontSize: '1.5em',
    marginBottom: '20px'
  },
  ctaButton: {
    padding: '10px 20px',
    fontSize: '1.2em',
    color: '#007BFF',
    backgroundColor: '#fff',
    border: 'none',
    borderRadius: '5px',
    textDecoration: 'none',
    cursor: 'pointer'
  },
  aboutSection: {
    padding: '40px 20px',
    textAlign: 'center',
    backgroundColor: '#f4f4f4',
    borderRadius: '10px',
    boxShadow: '0 0 10px rgba(0, 0, 0, 0.1)',
    margin: '20px auto',
    maxWidth: '800px'
  },
  sectionTitle: {
    fontSize: '2.5em',
    marginBottom: '20px'
  },
  aboutText: {
    fontSize: '1.2em',
    color: '#555',
    maxWidth: '600px',
    margin: '0 auto 20px'
  },
  moreLink: {
    padding: '10px 20px',
    fontSize: '1em',
    color: '#007BFF',
    backgroundColor: '#fff',
    border: '1px solid #007BFF',
    borderRadius: '5px',
    textDecoration: 'none',
    cursor: 'pointer'
  },
  servicesSection: {
    padding: '40px 20px',
    textAlign: 'center',
    backgroundColor: '#fff',
    borderRadius: '10px',
    boxShadow: '0 0 10px rgba(0, 0, 0, 0.1)',
    margin: '20px auto',
    maxWidth: '800px'
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
    borderRadius: '5px',
    boxShadow: '0 0 5px rgba(0, 0, 0, 0.1)',
    textAlign: 'left'
  },
  serviceTitle: {
    fontSize: '1.5em',
    marginBottom: '10px',
    color: '#333'
  },
  serviceDescription: {
    fontSize: '1.2em',
    color: '#555'
  }
};
