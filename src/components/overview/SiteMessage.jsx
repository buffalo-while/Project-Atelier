import React from 'react';
import overviewStyles from './styles/Overview.module.css';

const SiteMessage = () => (
  <div className={overviewStyles.siteMessage}>
    <h3 className={overviewStyles.messageDiv} style={{ fontStyle: 'italic' }}>Site-wide Announcement Message</h3>
    <h3 className={overviewStyles.messageDiv}>Sale/Discount</h3>
    <h3 className={overviewStyles.messageDiv} style={{ fontWeight: 'bold' }}>Offer</h3>
    <h3 className={overviewStyles.messageDiv} style={{ textDecoration: 'underline' }}>New Product Highlight</h3>
  </div>
);

export default SiteMessage;
