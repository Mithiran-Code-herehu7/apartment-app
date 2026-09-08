'use client';

import React, { useState } from 'react';
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { useResidentBookings } from '@/hooks/api/use-bookings';
import { api } from '@/lib/api';

export default function MyBookingsPage() {
  const [activeTab, setActiveTab] = useState<'upcoming' | 'past'>('upcoming');
  const { data: bookings, isLoading, isError, refetch } = useResidentBookings();
  const [cancellingId, setCancellingId] = useState<string | null>(null);

  const handleCancel = async (bookingId: string) => {
    if (!confirm('Are you sure you want to cancel this booking?')) return;
    setCancellingId(bookingId);
    try {
      await api.patch(`/bookings/${bookingId}/status`, { status: 'cancelled' });
      refetch();
    } catch (err: any) {
      alert(err.response?.data?.message || 'Failed to cancel booking');
    } finally {
      setCancellingId(null);
    }
  };

  const activeBookings = bookings?.filter(b => b.status === 'pending' || b.status === 'confirmed') || [];
  const pastBookings = bookings?.filter(b => b.status === 'completed' || b.status === 'cancelled') || [];
  const displayedBookings = activeTab === 'upcoming' ? activeBookings : pastBookings;

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
          Active ({activeBookings.length})
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
          Past ({pastBookings.length})
        </button>
      </div>

      <div style={{ display: 'flex', flexDirection: 'column', gap: 'var(--space-4)' }}>
        {isLoading ? (
          <p>Loading bookings...</p>
        ) : isError ? (
          <p>Error loading bookings.</p>
        ) : displayedBookings.length > 0 ? (
          displayedBookings.map((booking) => (
            <Card key={booking.id}>
              <CardHeader>
                <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start' }}>
                  <div>
                    <CardTitle>{booking.listings?.title || 'Unknown Listing'}</CardTitle>
                    <CardDescription>Created: {new Date(booking.created_at).toLocaleDateString()}</CardDescription>
                  </div>
                  <span style={{ 
                    backgroundColor: booking.status === 'confirmed' ? 'var(--color-primary-light)' : booking.status === 'cancelled' ? 'var(--color-bg-subtle)' : 'var(--color-warning)', 
                    color: booking.status === 'confirmed' ? 'var(--color-primary-hover)' : 'var(--color-text-muted)', 
                    padding: '2px 8px', 
                    borderRadius: 'var(--radius-full)', 
                    fontSize: '0.75rem', 
                    fontWeight: 600 
                  }}>
                    {booking.status.toUpperCase()}
                  </span>
                </div>
              </CardHeader>
              <CardContent>
                <div style={{ display: 'flex', gap: 'var(--space-2)' }}>
                  {booking.status !== 'completed' && booking.status !== 'cancelled' && (
                    <Button 
                      variant="ghost" 
                      size="sm" 
                      style={{ color: 'var(--color-danger)' }}
                      onClick={() => handleCancel(booking.id)}
                      disabled={cancellingId === booking.id}
                    >
                      {cancellingId === booking.id ? 'Cancelling...' : 'Cancel Booking'}
                    </Button>
                  )}
                </div>
              </CardContent>
            </Card>
          ))
        ) : (
          <p>No bookings found for this section.</p>
        )}
      </div>
    </div>
  );
}
