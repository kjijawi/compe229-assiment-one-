import { useState } from "react";

export default function ContactMePage() {
  const [formData, setFormData] = useState({
    firstName: "",
    email: "",
    description: ""
  });
  const [submitted, setSubmitted] = useState(false);
  const [showForm, setShowForm] = useState(false);

  const handleChange = (event) => {
    const { name, value } = event.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    setSubmitted(true);
    // Add form submission logic here (e.g., send email)
  };

  const toggleForm = () => {
    setShowForm(!showForm);
    setSubmitted(false); // Reset submission status when toggling form
  };

  return (
    <div style={styles.container}>
      <h1 style={styles.header}>Contact Me</h1>
      <button onClick={toggleForm} style={styles.button}>
        {showForm ? 'Hide Form' : 'Show Contact Form'}
      </button>
      {showForm && (
        <form onSubmit={handleSubmit} style={styles.form}>
          <div style={styles.formGroup}>
            <label htmlFor="firstName" style={styles.label}>First Name:</label>
            <input
              type="text"
              id="firstName"
              name="firstName"
              value={formData.firstName}
              onChange={handleChange}
              required
              style={styles.input}
            />
          </div>
          <div style={styles.formGroup}>
            <label htmlFor="email" style={styles.label}>Email:</label>
            <input
              type="email"
              id="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              required
              style={styles.input}
            />
          </div>
          <div style={styles.formGroup}>
            <label htmlFor="description" style={styles.label}>Description:</label>
            <textarea
              id="description"
              name="description"
              value={formData.description}
              onChange={handleChange}
              required
              style={{ ...styles.input, ...styles.textarea }}
            />
          </div>
          <div style={styles.formGroup}>
            <button type="submit" style={styles.button}>Submit</button>
          </div>
        </form>
      )}
      {submitted && (
        <p style={styles.thankYouMessage}>
          Thank you, {formData.firstName}. We will reach out to you within 24 hours.
        </p>
      )}
    </div>
  );
}

const styles = {
  container: {
    padding: '20px',
    maxWidth: '600px',
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
  form: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center'
  },
  formGroup: {
    marginBottom: '15px',
    width: '100%'
  },
  label: {
    marginBottom: '5px',
    fontWeight: 'bold',
    color: '#333',
    display: 'block',
    textAlign: 'left'
  },
  input: {
    padding: '10px',
    fontSize: '16px',
    borderRadius: '5px',
    border: '1px solid #ccc',
    width: '100%',
    boxSizing: 'border-box'
  },
  textarea: {
    height: '100px',
    resize: 'vertical'
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
  thankYouMessage: {
    marginTop: '20px',
    color: '#28a745',
    fontWeight: 'bold'
  }
};

