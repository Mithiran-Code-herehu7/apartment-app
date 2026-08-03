import React from 'react';
import Link from 'next/link';
import { User } from 'lucide-react';
import styles from './navbar.module.css';

export const Navbar = () => {
  return (
    <header className={styles.header}>
      <div className={styles.container}>
        <Link href="/" className={styles.logo}>
          ApartmentSkills
        </Link>
        
        <nav className={styles.desktopNav}>
          <Link href="/" className={styles.navLinkActive}>Explore</Link>
          <Link href="/provider/dashboard" className={styles.navLink}>Switch to Provider</Link>
        </nav>

        <div className={styles.actions}>

          <Link href="/profile" className="icon-btn" aria-label="Profile">
            <User size={20} />
          </Link>
        </div>
      </div>
    </header>
  );
};
