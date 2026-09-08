'use client';

import React from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { LayoutDashboard, List, Calendar } from 'lucide-react';

export function ProviderSubnav() {
  const pathname = usePathname();

  const navItems = [
    { label: 'Dashboard Overview', href: '/provider/dashboard', icon: LayoutDashboard },
    { label: 'My Listings', href: '/provider/listings', icon: List },
    { label: 'Booking Requests', href: '/provider/bookings', icon: Calendar },
  ];

  return (
    <div style={{
      backgroundColor: 'var(--color-bg-surface, #ffffff)',
      borderBottom: '1px solid var(--color-border, #e2e8f0)',
      marginBottom: 'var(--space-6, 24px)',
      padding: '0 var(--space-4, 16px)'
    }}>
      <div style={{
        maxWidth: '1200px',
        margin: '0 auto',
        display: 'flex',
        gap: 'var(--space-6, 24px)',
        alignItems: 'center',
        overflowX: 'auto'
      }}>
        {navItems.map((item) => {
          const Icon = item.icon;
          const isActive = pathname === item.href || (item.href !== '/provider/dashboard' && pathname.startsWith(item.href));
          
          return (
            <Link
              key={item.href}
              href={item.href}
              style={{
                display: 'flex',
                alignItems: 'center',
                gap: '8px',
                padding: 'var(--space-4, 16px) 0',
                fontWeight: isActive ? 600 : 500,
                fontSize: '0.9375rem',
                color: isActive ? 'var(--color-primary, #0d9488)' : 'var(--color-text-muted, #64748b)',
                borderBottom: isActive ? '2.5px solid var(--color-primary, #0d9488)' : '2.5px solid transparent',
                textDecoration: 'none',
                transition: 'all 0.2s ease',
                whiteSpace: 'nowrap'
              }}
            >
              <Icon size={18} />
              <span>{item.label}</span>
            </Link>
          );
        })}
      </div>
    </div>
  );
}
