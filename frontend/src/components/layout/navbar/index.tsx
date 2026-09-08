'use client';

import React, { useState, useRef, useEffect } from 'react';
import Link from 'next/link';
import { usePathname, useRouter } from 'next/navigation';
import { 
  Search, 
  Calendar, 
  PlusCircle, 
  LayoutDashboard, 
  Settings, 
  LogOut, 
  LogIn, 
  UserPlus,
  ChevronDown,
  User as UserIcon,
  List
} from 'lucide-react';
import { useAuth } from '@/contexts/auth-context';
import { Button } from '@/components/ui/button';
import styles from './navbar.module.css';

export const Navbar = () => {
  const pathname = usePathname();
  const router = useRouter();
  const { user, isAuthenticated, logout } = useAuth();
  const [dropdownOpen, setDropdownOpen] = useState(false);
  const dropdownRef = useRef<HTMLDivElement>(null);

  const isActive = (path: string) => pathname === path;

  // Close dropdown on outside click
  useEffect(() => {
    const handleClickOutside = (e: MouseEvent) => {
      if (dropdownRef.current && !dropdownRef.current.contains(e.target as Node)) {
        setDropdownOpen(false);
      }
    };
    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, []);

  const handleLogout = async () => {
    setDropdownOpen(false);
    await logout();
  };

  const displayName = user?.displayName || user?.email?.split('@')[0] || 'User';
  const initial = displayName[0].toUpperCase();

  return (
    <header className={styles.header}>
      <div className={styles.container}>
        {/* Brand Logo */}
        <Link href="/" className={styles.logo}>
          ApartmentSkills
        </Link>
        
        {/* Main Desktop Navigation Links */}
        <nav className={styles.desktopNav}>
          <Link 
            href="/search" 
            className={isActive('/search') ? styles.navLinkActive : styles.navLink}
            style={{ display: 'flex', alignItems: 'center', gap: '6px' }}
          >
            <Search size={16} />
            <span>Explore Services</span>
          </Link>

          {isAuthenticated && (
            <Link 
              href="/bookings" 
              className={isActive('/bookings') ? styles.navLinkActive : styles.navLink}
              style={{ display: 'flex', alignItems: 'center', gap: '6px' }}
            >
              <Calendar size={16} />
              <span>My Bookings</span>
            </Link>
          )}

          <Link 
            href="/provider/dashboard" 
            className={pathname.startsWith('/provider') ? styles.navLinkActive : styles.navLink}
            style={{ display: 'flex', alignItems: 'center', gap: '6px' }}
          >
            <LayoutDashboard size={16} />
            <span>Provider Dashboard</span>
          </Link>
        </nav>

        {/* User Action Controls */}
        <div className={styles.actions}>
          {isAuthenticated ? (
            <div style={{ display: 'flex', alignItems: 'center', gap: 'var(--space-3)', position: 'relative' }} ref={dropdownRef}>
              {/* Clean + Create Listing Button */}
              <Link href="/provider/listings/create">
                <Button 
                  size="sm" 
                  style={{ 
                    display: 'inline-flex', 
                    alignItems: 'center', 
                    justifyContent: 'center', 
                    gap: '6px', 
                    padding: '0.45rem 0.9rem',
                    fontWeight: 600
                  }}
                >
                  <PlusCircle size={16} />
                  <span>Create Listing</span>
                </Button>
              </Link>

              {/* Profile Avatar Button */}
              <button
                onClick={() => setDropdownOpen(!dropdownOpen)}
                style={{
                  display: 'flex',
                  alignItems: 'center',
                  gap: '6px',
                  background: 'none',
                  border: 'none',
                  cursor: 'pointer',
                  padding: '4px',
                  borderRadius: 'var(--radius-full, 9999px)'
                }}
                aria-label="User Menu"
              >
                <div style={{
                  width: '36px',
                  height: '36px',
                  borderRadius: '50%',
                  backgroundColor: 'var(--color-primary, #0d9488)',
                  color: '#ffffff',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  fontWeight: 700,
                  fontSize: '0.9375rem',
                  boxShadow: '0 1px 3px rgba(0,0,0,0.1)'
                }}>
                  {initial}
                </div>
                <ChevronDown size={14} style={{ color: 'var(--color-text-muted)', transition: 'transform 0.2s', transform: dropdownOpen ? 'rotate(180deg)' : 'none' }} />
              </button>

              {/* Original Profile Dropdown Menu */}
              {dropdownOpen && (
                <div style={{
                  position: 'absolute',
                  top: 'calc(100% + 8px)',
                  right: 0,
                  width: '240px',
                  backgroundColor: 'var(--color-bg-surface, #ffffff)',
                  border: '1px solid var(--color-border, #e2e8f0)',
                  borderRadius: 'var(--radius-lg, 12px)',
                  boxShadow: '0 10px 25px -5px rgba(0,0,0,0.1), 0 8px 10px -6px rgba(0,0,0,0.1)',
                  zIndex: 100,
                  overflow: 'hidden',
                  animation: 'fadeIn 0.15s ease-out'
                }}>
                  {/* User Profile Summary Header */}
                  <div style={{ padding: '12px 16px', borderBottom: '1px solid var(--color-border, #e2e8f0)', backgroundColor: 'var(--color-bg-subtle, #f8fafc)' }}>
                    <p style={{ fontWeight: 600, fontSize: '0.9375rem', color: 'var(--color-text-base)', margin: 0, overflow: 'hidden', textOverflow: 'ellipsis', whiteSpace: 'nowrap' }}>
                      {displayName}
                    </p>
                    <p style={{ fontSize: '0.75rem', color: 'var(--color-text-muted)', margin: '2px 0 0', overflow: 'hidden', textOverflow: 'ellipsis', whiteSpace: 'nowrap' }}>
                      {user?.email}
                    </p>
                  </div>

                  {/* Dropdown Items */}
                  <div style={{ padding: '6px 0' }}>
                    <Link
                      href="/profile"
                      onClick={() => setDropdownOpen(false)}
                      style={{
                        display: 'flex',
                        alignItems: 'center',
                        gap: '10px',
                        padding: '10px 16px',
                        fontSize: '0.875rem',
                        color: 'var(--color-text-base)',
                        textDecoration: 'none',
                        transition: 'background-color 0.15s'
                      }}
                      onMouseEnter={(e) => (e.currentTarget.style.backgroundColor = 'var(--color-bg-subtle, #f1f5f9)')}
                      onMouseLeave={(e) => (e.currentTarget.style.backgroundColor = 'transparent')}
                    >
                      <Settings size={16} style={{ color: 'var(--color-text-muted)' }} />
                      <span>Account Settings</span>
                    </Link>

                    <Link
                      href="/bookings"
                      onClick={() => setDropdownOpen(false)}
                      style={{
                        display: 'flex',
                        alignItems: 'center',
                        gap: '10px',
                        padding: '10px 16px',
                        fontSize: '0.875rem',
                        color: 'var(--color-text-base)',
                        textDecoration: 'none',
                        transition: 'background-color 0.15s'
                      }}
                      onMouseEnter={(e) => (e.currentTarget.style.backgroundColor = 'var(--color-bg-subtle, #f1f5f9)')}
                      onMouseLeave={(e) => (e.currentTarget.style.backgroundColor = 'transparent')}
                    >
                      <Calendar size={16} style={{ color: 'var(--color-text-muted)' }} />
                      <span>My Bookings</span>
                    </Link>

                    <Link
                      href="/provider/dashboard"
                      onClick={() => setDropdownOpen(false)}
                      style={{
                        display: 'flex',
                        alignItems: 'center',
                        gap: '10px',
                        padding: '10px 16px',
                        fontSize: '0.875rem',
                        color: 'var(--color-text-base)',
                        textDecoration: 'none',
                        transition: 'background-color 0.15s'
                      }}
                      onMouseEnter={(e) => (e.currentTarget.style.backgroundColor = 'var(--color-bg-subtle, #f1f5f9)')}
                      onMouseLeave={(e) => (e.currentTarget.style.backgroundColor = 'transparent')}
                    >
                      <LayoutDashboard size={16} style={{ color: 'var(--color-text-muted)' }} />
                      <span>Provider Dashboard</span>
                    </Link>

                    <Link
                      href="/provider/listings"
                      onClick={() => setDropdownOpen(false)}
                      style={{
                        display: 'flex',
                        alignItems: 'center',
                        gap: '10px',
                        padding: '10px 16px',
                        fontSize: '0.875rem',
                        color: 'var(--color-text-base)',
                        textDecoration: 'none',
                        transition: 'background-color 0.15s'
                      }}
                      onMouseEnter={(e) => (e.currentTarget.style.backgroundColor = 'var(--color-bg-subtle, #f1f5f9)')}
                      onMouseLeave={(e) => (e.currentTarget.style.backgroundColor = 'transparent')}
                    >
                      <List size={16} style={{ color: 'var(--color-text-muted)' }} />
                      <span>My Listings</span>
                    </Link>

                    <div style={{ height: '1px', backgroundColor: 'var(--color-border, #e2e8f0)', margin: '6px 0' }} />

                    <button
                      onClick={handleLogout}
                      style={{
                        display: 'flex',
                        alignItems: 'center',
                        gap: '10px',
                        width: '100%',
                        padding: '10px 16px',
                        fontSize: '0.875rem',
                        color: '#ef4444',
                        backgroundColor: 'transparent',
                        border: 'none',
                        textAlign: 'left',
                        cursor: 'pointer',
                        fontWeight: 500,
                        transition: 'background-color 0.15s'
                      }}
                      onMouseEnter={(e) => (e.currentTarget.style.backgroundColor = '#fee2e2')}
                      onMouseLeave={(e) => (e.currentTarget.style.backgroundColor = 'transparent')}
                    >
                      <LogOut size={16} />
                      <span>Log Out</span>
                    </button>
                  </div>
                </div>
              )}
            </div>
          ) : (
            <div style={{ display: 'flex', alignItems: 'center', gap: 'var(--space-2)' }}>
              <Link href="/login">
                <Button variant="ghost" size="sm" style={{ display: 'inline-flex', alignItems: 'center', gap: '6px' }}>
                  <LogIn size={16} />
                  <span>Log In</span>
                </Button>
              </Link>
              <Link href="/signup">
                <Button size="sm" style={{ display: 'inline-flex', alignItems: 'center', gap: '6px' }}>
                  <UserPlus size={16} />
                  <span>Sign Up</span>
                </Button>
              </Link>
            </div>
          )}
        </div>
      </div>
    </header>
  );
};
