import React from 'react';

export default function ProjectsPage() {
  return (
    <div style={styles.container}>
      <h1 style={styles.header}>My Projects</h1>
      <div style={styles.projectList}>
        <div style={styles.projectItem}>
          <h2 style={styles.projectTitle}>General Marketing with Waters</h2>
          <p style={styles.projectDescription}>
            Developed and implemented a comprehensive marketing strategy for Waters, increasing their online presence and customer engagement.
          </p>
        </div>
        <div style={styles.projectItem}>
          <h2 style={styles.projectTitle}>MDUs Project</h2>
          <p style={styles.projectDescription}>
            Worked on multiple-dwelling units (MDUs) projects, enhancing network connectivity and infrastructure.
          </p>
        </div>
        <div style={styles.projectItem}>
          <h2 style={styles.projectTitle}>E-commerce Website Development</h2>
          <p style={styles.projectDescription}>
            Built a full-featured e-commerce website using React and Node.js, integrating payment systems and enhancing user experience.
          </p>
        </div>
        <div style={styles.projectItem}>
          <h2 style={styles.projectTitle}>Machine Learning Model</h2>
          <p style={styles.projectDescription}>
            Created a machine learning model for predicting customer churn, using Python and scikit-learn.
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
  projectList: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center'
  },
  projectItem: {
    marginBottom: '20px',
    padding: '20px',
    width: '100%',
    backgroundColor: '#f9f9f9',
    borderRadius: '5px',
    boxShadow: '0 0 5px rgba(0, 0, 0, 0.1)',
    textAlign: 'left'
  },
  projectTitle: {
    fontSize: '1.5em',
    marginBottom: '10px',
    color: '#333'
  },
  projectDescription: {
    fontSize: '1.2em',
    color: '#555'
  }
};




 
