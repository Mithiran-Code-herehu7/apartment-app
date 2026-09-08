import React from 'react';
import { Navbar } from '@/components/layout/navbar';
import { ProviderSubnav } from '@/components/layout/provider-subnav';

export default function ProviderLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div style={{ display: 'flex', flexDirection: 'column', minHeight: '100vh' }}>
      <Navbar />
      <ProviderSubnav />
      <main style={{ flexGrow: 1, maxWidth: '1200px', width: '100%', margin: '0 auto', padding: '0 var(--space-4, 16px) var(--space-8, 32px)' }}>
        {children}
      </main>
    </div>
  );
}
