import React from 'react';
import Link from 'next/link';
import { Settings, List, Calendar, Home } from 'lucide-react';
import styles from './provider-layout.module.css';

export default function ProviderLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className={styles.layout}>
      <aside className={styles.sidebar}>
        <div className={styles.sidebarHeader}>
          <Link href="/" className={styles.logo}>
            ApartmentSkills
          </Link>
          <span className={styles.badge}>Provider</span>
        </div>
        
        <nav className={styles.nav}>
          <Link href="/provider/dashboard" className={styles.navItem}>
            <Home size={20} /> Dashboard
          </Link>
          <Link href="/provider/listings" className={styles.navItem}>
            <List size={20} /> My Listings
          </Link>
          <Link href="/provider/bookings" className={styles.navItem}>
            <Calendar size={20} /> Bookings
          </Link>
          <Link href="/provider/settings" className={styles.navItem}>
            <Settings size={20} /> Settings
          </Link>
        </nav>

        <div className={styles.sidebarFooter}>
          <Link href="/" className={styles.switchLink}>
            &larr; Back to Resident View
          </Link>
        </div>
      </aside>
      
      <main className={styles.main}>
        {children}
      </main>
    </div>
  );
}
