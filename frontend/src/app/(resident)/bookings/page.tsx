'use client';

import React, { useState } from 'react';
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { useResidentBookings } from '@/hooks/api/use-bookings';

export default function MyBookingsPage() {
  const [activeTab, setActiveTab] = useState('upcoming');
  const { data: bookings, isLoading, isError } = useResidentBookings();

  return (
    <div style={{ padding: 'var(--space-4)', maxWidth: '800px', margin: '0 auto' }}>
      <h1 style={{ fontSize: '1.5rem', fontWeight: 600, marginBottom: 'var(--space-6)' }}>
        My Bookings
      </h1>

      <div style={{ display: 'flex', gap: 'var(--space-4)', borderBottom: '1px solid var(--color-border)', marginBottom: 'var(--space-6)' }}>
        <button 
          onClick={() => setActiveTab('upcoming')}
          style={{ 
            padding: 'var(--space-2) 0', 
            fontWeight: 500, 
            color: activeTab === 'upcoming' ? 'var(--color-primary)' : 'var(--color-text-muted)',
            borderBottom: activeTab === 'upcoming' ? '2px solid var(--color-primary)' : '2px solid transparent',
            marginBottom: '-1px'
          }}
        >
          Active
        </button>
        <button 
          onClick={() => setActiveTab('past')}
          style={{ 
            padding: 'var(--space-2) 0', 
            fontWeight: 500, 
            color: activeTab === 'past' ? 'var(--color-primary)' : 'var(--color-text-muted)',
            borderBottom: activeTab === 'past' ? '2px solid var(--color-primary)' : '2px solid transparent',
            marginBottom: '-1px'
          }}
        >
          Past
        </button>
      </div>

      <div style={{ display: 'flex', flexDirection: 'column', gap: 'var(--space-4)' }}>
        {isLoading ? (
          <p>Loading bookings...</p>
        ) : isError ? (
          <p>Error loading bookings.</p>
        ) : bookings && bookings.length > 0 ? (
          bookings.map((booking) => (
            <Card key={booking.id}>
              <CardHeader>
                <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start' }}>
                  <div>
                    <CardTitle>{booking.listings?.title || 'Unknown Listing'}</CardTitle>
                    <CardDescription>Created: {new Date(booking.created_at).toLocaleDateString()}</CardDescription>
                  </div>
                  <span style={{ 
                    backgroundColor: booking.status === 'confirmed' ? 'var(--color-primary-light)' : 'var(--color-bg-subtle)', 
                    color: booking.status === 'confirmed' ? 'var(--color-primary-hover)' : 'var(--color-text-muted)', 
                    padding: '2px 8px', 
                    borderRadius: 'var(--radius-full)', 
                    fontSize: '0.75rem', 
                    fontWeight: 600 
                  }}>
                    {booking.status}
                  </span>
                </div>
              </CardHeader>
              <CardContent>
                <div style={{ display: 'flex', gap: 'var(--space-2)' }}>
                  <Button variant="secondary" size="sm">Message Provider</Button>
                  {booking.status !== 'completed' && booking.status !== 'cancelled' && (
                    <Button variant="ghost" size="sm" style={{ color: 'var(--color-danger)' }}>Cancel</Button>
                  )}
                </div>
              </CardContent>
            </Card>
          ))
        ) : (
          <p>No bookings found.</p>
        )}
      </div>
    </div>
  );
}
