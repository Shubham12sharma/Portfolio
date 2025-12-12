import React, { useState } from 'react';
import { FiMail, FiMessageSquare, FiLinkedin, FiGithub, FiSend, FiCheck } from 'react-icons/fi';
import './Contact.css';

function Contact() {

  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });

  const [submitted, setSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setLoading(true);

    const body = encodeURIComponent(
      `Name: ${formData.name}\nEmail: ${formData.email}\n\nMessage:\n${formData.message}`
    );

    window.location.href = `mailto:shubhamsharma68653@gmail.com?body=${body}`;

    setSubmitted(true);
    setFormData({ name: '', email: '', message: '' });

    setTimeout(() => {
      setSubmitted(false);
      setLoading(false);
    }, 3000);
  };

  return (
    <div id="contact" className="contact-section">
      <div className="contact-container">

        <div className="contact-header">
          <h1>Get In Touch</h1>
          <p>I'd love to hear from you. Let's connect and create something amazing together!</p>
        </div>

        

          {/* Contact Form */}
          <div className="contact-form">

            {submitted && (
              <div className="success-message">
                <FiCheck />
                Opening email client... Check your mail!
              </div>
            )}

            <div className="form-group">
              <label htmlFor="name">Full Name</label>
              <input
                type="text"
                id="name"
                name="name"
                value={formData.name}
                onChange={handleChange}
                required
                placeholder="Your name"
              />
            </div>

            <div className="form-group">
              <label htmlFor="email">Email Address</label>
              <input
                type="email"
                id="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                required
                placeholder="your@email.com"
              />
            </div>

            {/* SUBJECT REMOVED */}

            <div className="form-group">
              <label htmlFor="message">Message</label>
              <textarea
                id="message"
                name="message"
                value={formData.message}
                onChange={handleChange}
                required
                placeholder="Tell me more..."
              />
            </div>

            <button
              type="button"
              onClick={handleSubmit}
              className="submit-btn"
              disabled={loading}
            >
              <FiSend />
              {loading ? 'Opening...' : 'Send Message'}
            </button>

          </div>

        </div>

      </div>
    
  );
}

export default Contact;
