import React, { useState } from 'react';

export default function AboutPage() {
  const [showInfo, setShowInfo] = useState(false);

  const toggleInfo = () => {
    setShowInfo(!showInfo);
  };

  return (
    <div style={styles.container}>
      <h1 style={styles.header}>About Me</h1>
      <p style={styles.paragraph}>
        Hi, I'm Karim Jijawi, a software artificial intelligence student at Centennial College. 
        I have a background in various roles, including Produce Department at Fresco, Sales 
        Representative at Marshalls, Smart Home Security Specialist at Telus, and Assistant 
        Account Manager at Rogers. I'm passionate about technology and constantly learning 
        new skills to advance my career.
      </p>
      <button onClick={toggleInfo} style={styles.button}>
        {showInfo ? 'Hide Information' : 'Show More Information'}
      </button>
      {showInfo && (
        <div style={styles.additionalInfo}>
          <h2 style={styles.subHeader}>Detailed Biography</h2>
          <p>
            Throughout my career, I have developed a keen interest in software development and artificial intelligence. 
            My journey began in the retail industry where I honed my skills in customer service and sales. Transitioning 
            into the tech industry, I have focused on developing solutions that leverage AI to solve real-world problems.
          </p>
          <h2 style={styles.subHeader}>Skills</h2>
          <ul style={styles.skillList}>
            <li>Programming Languages: JavaScript, Python, C++</li>
            <li>Web Development: React, Node.js, HTML, CSS</li>
            <li>Data Analysis: SQL, Pandas, NumPy</li>
            <li>Artificial Intelligence: Machine Learning, Deep Learning</li>
          </ul>
          <h2 style={styles.subHeader}>Personal Interests</h2>
          <p>
            In my free time, I enjoy exploring new technologies, working on personal projects, and staying active through various sports.
            I'm also an avid reader and enjoy learning about the latest advancements in AI and software development.
          </p>
        </div>
      )}
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
    textAlign: 'center'
  },
  header: {
    textAlign: 'center',
    marginBottom: '20px',
    color: '#333',
    fontSize: '2.5em'
  },
  paragraph: {
    fontSize: '1.2em',
    color: '#555',
    maxWidth: '600px',
    margin: '0 auto 20px'
  },
  button: {
    padding: '10px 20px',
    fontSize: '16px',
    color: '#fff',
    backgroundColor: '#007BFF',
    border: 'none',
    borderRadius: '5px',
    cursor: 'pointer',
    margin: '20px 0'
  },
  additionalInfo: {
    marginTop: '20px',
    padding: '20px',
    backgroundColor: '#f9f9f9',
    borderRadius: '5px',
    boxShadow: '0 0 5px rgba(0, 0, 0, 0.1)',
    textAlign: 'left'
  },
  subHeader: {
    fontSize: '1.8em',
    marginBottom: '10px',
    color: '#333'
  },
  skillList: {
    listStyleType: 'disc',
    paddingLeft: '20px',
    fontSize: '1.2em',
    color: '#555'
  }
};
