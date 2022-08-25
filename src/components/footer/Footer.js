import React from 'react';
import styles from './index.module.css';

const Footer = () => {
  return (
    <footer className={styles.Footer}>
      <div
        className={`${styles['content']} App-background`}
        style={{
          backgroundImage: 'url(/pictures/dyno.jpg)',
          backgroundRepeat: 'no-repeat',
          backgroundSize: 'cover',
          height: '70px',
        }}
      >
        Footer
      </div>
    </footer>
  );
};

export default Footer;
