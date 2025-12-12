import React, { useState } from 'react';
import { FiX } from 'react-icons/fi';
import './Certificate.css';

import cert1 from '../../assets/cert1.jpeg';
import cert2 from '../../assets/cert2.jpeg';
import cert3 from '../../assets/cert3.jpeg';
import cert4 from '../../assets/cert4.jpeg';
import cert5 from '../../assets/cert5.jpeg';

function Certificate() {
  const [selectedCert, setSelectedCert] = useState(null);

  const certificates = [
    { title: "Full Stack Development", image: cert1 },
    { title: "Internship", image: cert2 },
    { title: "C Programming", image: cert3 },
    { title: "C++ Programming", image: cert4 },
    { title: "Java Core", image: cert5 },
  ];

  return (
    <div className="certificate-section">

      <h2 className="certificate-title">My Certificates</h2>

      {/* Marquee Scroll */}
      <div className="marquee">
        <div className="marquee-content">
          {[...certificates, ...certificates].map((cert, index) => (
            <div
              className="certificate-card"
              key={index}
              onClick={() => setSelectedCert(cert)}
            >
              <img src={cert.image} alt={cert.title} />
            </div>
          ))}
        </div>
      </div>

      {/* Modal */}
      {selectedCert && (
        <div className="cert-modal" onClick={() => setSelectedCert(null)}>
          <div className="cert-modal-content" onClick={(e) => e.stopPropagation()}>
            <button className="cert-close-btn" onClick={() => setSelectedCert(null)}>
              <FiX />
            </button>

            <h2 className="cert-modal-title">{selectedCert.title}</h2>

            <img src={selectedCert.image} alt={selectedCert.title} className="cert-modal-img" />
          </div>
        </div>
      )}
    </div>
  );
}

export default Certificate;
