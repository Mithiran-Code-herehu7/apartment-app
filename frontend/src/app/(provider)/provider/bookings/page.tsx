'use client';

import React, { useState, useEffect } from 'react';
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { api } from '@/lib/api';

export default function ManageBookingsPage() {
  const [activeTab, setActiveTab] = useState('requests');
  const [bookings, setBookings] = useState<any[]>([]);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    fetchBookings();
  }, []);

  const fetchBookings = async () => {
    try {
      const res = await api.get('/bookings/my-teaching');
      setBookings(res.data);
    } catch (error) {
      console.error('Failed to fetch bookings', error);
    } finally {
      setIsLoading(false);
    }
  };

  const handleUpdateStatus = async (bookingId: string, status: string) => {
    try {
      await api.patch(`/bookings/${bookingId}/status`, { status });
      // Refresh
      fetchBookings();
    } catch (error) {
      console.error('Failed to update booking status', error);
      alert('Failed to update status');
    }
  };

  if (isLoading) {
    return <div>Loading bookings...</div>;
  }

  const pendingBookings = bookings.filter(b => b.status === 'pending');
  const upcomingBookings = bookings.filter(b => b.status === 'confirmed');

  const displayedBookings = activeTab === 'requests' ? pendingBookings : upcomingBookings;

  return (
    <div>
      <h1 style={{ fontSize: '1.5rem', fontWeight: 600, marginBottom: 'var(--space-6)' }}>
        Booking Requests
      </h1>

      <div style={{ display: 'flex', gap: 'var(--space-4)', borderBottom: '1px solid var(--color-border)', marginBottom: 'var(--space-6)' }}>
        <button 
          onClick={() => setActiveTab('requests')}
          style={{ 
            padding: 'var(--space-2) 0', 
            fontWeight: 500, 
            color: activeTab === 'requests' ? 'var(--color-primary)' : 'var(--color-text-muted)',
            borderBottom: activeTab === 'requests' ? '2px solid var(--color-primary)' : '2px solid transparent',
            marginBottom: '-1px'
          }}
        >
          Pending Requests ({pendingBookings.length})
        </button>
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
          Upcoming ({upcomingBookings.length})
        </button>
      </div>

      <div style={{ display: 'flex', flexDirection: 'column', gap: 'var(--space-4)' }}>
        {displayedBookings.length === 0 ? (
          <Card>
            <CardContent style={{ padding: 'var(--space-6)', textAlign: 'center' }}>
              <p style={{ color: 'var(--color-text-muted)' }}>No bookings found for this category.</p>
            </CardContent>
          </Card>
        ) : (
          displayedBookings.map(booking => (
            <Card key={booking.id}>
              <CardHeader>
                <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start' }}>
                  <div>
                    <CardTitle>{booking.listings?.title || 'Unknown Listing'}</CardTitle>
                    <CardDescription>
                      Requested by {booking.users_bookings_learner_idTousers?.user_profiles?.display_name || 'Resident'} • {new Date(booking.created_at).toLocaleDateString()}
                    </CardDescription>
                  </div>
                  <span style={{ 
                    backgroundColor: booking.status === 'pending' ? 'var(--color-warning)' : 'var(--color-primary-light)', 
                    color: booking.status === 'pending' ? 'white' : 'var(--color-primary-hover)', 
                    padding: '2px 8px', 
                    borderRadius: 'var(--radius-full)', 
                    fontSize: '0.75rem', 
                    fontWeight: 600 
                  }}>
                    {booking.status.charAt(0).toUpperCase() + booking.status.slice(1)}
                  </span>
                </div>
              </CardHeader>
              <CardContent>
                {booking.notes && (
                  <p style={{ fontSize: '0.875rem', color: 'var(--color-text-muted)', marginBottom: 'var(--space-4)', fontStyle: 'italic' }}>
                    "{booking.notes}"
                  </p>
                )}
                {booking.status === 'pending' && (
                  <div style={{ display: 'flex', gap: 'var(--space-2)' }}>
                    <Button size="sm" onClick={() => handleUpdateStatus(booking.id, 'confirmed')}>Approve</Button>
                    <Button variant="secondary" size="sm" onClick={() => handleUpdateStatus(booking.id, 'cancelled')}>Decline</Button>
                  </div>
                )}
              </CardContent>
            </Card>
          ))
        )}
      </div>
    </div>
  );
}
