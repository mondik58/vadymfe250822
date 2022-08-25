import React from 'react';
import styles from './index.module.css';

const Header = () => {
  return (
    <header className={styles.Header}>
      <div
        className={`${styles['content']} App-background`}
        style={{
          backgroundImage: 'url(/pictures/chubaka.jpg)',
          backgroundRepeat: 'no-repeat',
          backgroundSize: 'cover',
        }}
      >
        Header
      </div>
    </header>
  );
};

export default Header;
