import React from 'react';
import '../styles/relatedModal.css';

export default function CompareModal({ children }) {
  return (
    <div className="modal-background">
      {children}
    </div>
  );
}
