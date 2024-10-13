// Header.tsx
import React from 'react';
import styles from './Header.module.css';

const Header: React.FC = () => {
  return (
    <header className={styles.header}>
      <div className={styles.logo}>
        <h1>Muhammad Asad</h1>
      </div>
      <nav>
        <ul className={styles.nav}>
          <li><a href="#">Home</a></li>
          <li><a href="#">About</a></li>
          <li><a href="#">Contact</a></li>
          <li><a href="#">Services</a></li>
          <li><a href="#">Blog</a></li>
          <li><a href="#">Portfolio</a></li>
        </ul>
      </nav>
    </header>
  );
};

export default Header;
