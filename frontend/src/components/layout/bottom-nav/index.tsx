import React from 'react';
import Link from 'next/link';
import { Home, Search, Calendar, User } from 'lucide-react';
import clsx from 'clsx';
import styles from './bottom-nav.module.css';

export const BottomNav = () => {
  return (
    <nav className={styles.bottomNav}>
      <Link href="/" className={clsx(styles.navItem, styles.navItemActive)}>
        <Home size={24} />
        <span>Home</span>
      </Link>
      <Link href="/search" className={styles.navItem}>
        <Search size={24} />
        <span>Explore</span>
      </Link>
      <Link href="/bookings" className={styles.navItem}>
        <Calendar size={24} />
        <span>Bookings</span>
      </Link>
      <Link href="/profile" className={styles.navItem}>
        <User size={24} />
        <span>Profile</span>
      </Link>
    </nav>
  );
};
