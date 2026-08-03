import React from 'react';
import Link from 'next/link';

export default function AuthLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div style={{ minHeight: '100vh', display: 'flex', flexDirection: 'column', backgroundColor: 'var(--color-bg-subtle)' }}>
      <header style={{ padding: 'var(--space-4)', textAlign: 'center' }}>
        <Link href="/" style={{ fontSize: '1.25rem', fontWeight: 700, color: 'var(--color-primary)' }}>
          ApartmentSkills
        </Link>
      </header>
      <main style={{ flexGrow: 1, display: 'flex', alignItems: 'center', justifyContent: 'center', padding: 'var(--space-4)' }}>
        <div style={{ width: '100%', maxWidth: '400px' }}>
          {children}
        </div>
      </main>
    </div>
  );
}
