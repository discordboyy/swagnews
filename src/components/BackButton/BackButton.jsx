// src/components/BackButton/BackButton.jsx
import React from 'react';
import { useNavigate } from 'react-router-dom';
import './BackButton.css'; // We'll create this next

const BackButton = () => {
  const navigate = useNavigate();

  return (
    <button className="back-button" onClick={() => navigate('/')}>
      <div className="back-button-bar">
        <svg className='arrow' xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1024 1024" width="25" height="25">
          <path d="M224 480h640a32 32 0 1 1 0 64H224a32 32 0 0 1 0-64z" fill="#000000" />
          <path d="m237.248 512 265.408 265.344a32 32 0 0 1-45.312 45.312l-288-288a32 32 0 0 1 0-45.312l288-288a32 32 0 1 1 45.312 45.312L237.248 512z" fill="#000000" />
        </svg>
      </div>
      <span className="back-button-text">Go Back</span>
    </button>
  );
};

export default BackButton;