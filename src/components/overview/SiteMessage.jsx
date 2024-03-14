import React from 'react';
import overviewStyles from './styles/Overview.module.css';

const SiteMessage = () => (
  <div className={overviewStyles.siteMessage}>
    <p className={overviewStyles.messageDiv} style={{ fontStyle: 'italic' }}>Site-wide Announcement Message</p>
    <p className={overviewStyles.messageDiv}>Sale/Discount</p>
    <p className={overviewStyles.messageDiv} style={{ fontWeight: 'bold' }}>Offer</p>
    <p className={overviewStyles.messageDiv} style={{ textDecoration: 'underline' }}>New Product Highlight</p>
  </div>
);

export default SiteMessage;
