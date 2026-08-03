'use client';

import React, { useState, useEffect } from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { api } from '@/lib/api';
import Link from 'next/link';

export default function ProviderDashboardPage() {
  const [listings, setListings] = useState<any[]>([]);
  const [bookings, setBookings] = useState<any[]>([]);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const fetchDashboardData = async () => {
      try {
        const [listingsRes, bookingsRes] = await Promise.all([
          api.get('/listings/my-listings'),
          api.get('/bookings/my-teaching')
        ]);
        setListings(listingsRes.data);
        setBookings(bookingsRes.data);
      } catch (error) {
        console.error('Failed to load dashboard data', error);
      } finally {
        setIsLoading(false);
      }
    };
    fetchDashboardData();
  }, []);

  if (isLoading) {
    return <div>Loading dashboard...</div>;
  }

  const activeListingsCount = listings.filter(l => l.status === 'approved').length;
  const pendingBookingsCount = bookings.filter(b => b.status === 'pending').length;
  // Calculate total earnings from completed/paid bookings (mock calculation based on pricing plans if any)
  const totalEarnings = bookings.reduce((acc, b) => {
    if (b.status === 'completed' || b.status === 'confirmed') {
       // Just a dummy calc for demo based on associated listing price if available
       const price = b.listings?.pricing_plans?.[0]?.price || 0;
       return acc + price;
    }
    return acc;
  }, 0);

  const recentBookings = [...bookings].sort((a, b) => new Date(b.created_at).getTime() - new Date(a.created_at).getTime()).slice(0, 3);

  const handleApprove = async (id: string) => {
    try {
      await api.patch(`/bookings/${id}/status`, { status: 'confirmed' });
      // Refresh logic would ideally go here, but for demo we can just reload
      window.location.reload();
    } catch (e) {
      alert('Failed to approve');
    }
  };

  return (
    <div>
      <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: 'var(--space-6)' }}>
        <h1 style={{ fontSize: '1.5rem', fontWeight: 600 }}>Provider Dashboard</h1>
        <Link href="/provider/listings/create">
          <Button>+ New Listing</Button>
        </Link>
      </div>

      <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))', gap: 'var(--space-4)', marginBottom: 'var(--space-8)' }}>
        <Card>
          <CardHeader style={{ paddingBottom: 'var(--space-2)' }}>
            <CardTitle style={{ fontSize: '0.875rem', color: 'var(--color-text-muted)' }}>Active Listings</CardTitle>
          </CardHeader>
          <CardContent>
            <div style={{ fontSize: '2rem', fontWeight: 700 }}>{activeListingsCount}</div>
          </CardContent>
        </Card>
        <Card>
          <CardHeader style={{ paddingBottom: 'var(--space-2)' }}>
            <CardTitle style={{ fontSize: '0.875rem', color: 'var(--color-text-muted)' }}>Pending Bookings</CardTitle>
          </CardHeader>
          <CardContent>
            <div style={{ fontSize: '2rem', fontWeight: 700 }}>{pendingBookingsCount}</div>
          </CardContent>
        </Card>
        <Card>
          <CardHeader style={{ paddingBottom: 'var(--space-2)' }}>
            <CardTitle style={{ fontSize: '0.875rem', color: 'var(--color-text-muted)' }}>Total Earnings</CardTitle>
          </CardHeader>
          <CardContent>
            <div style={{ fontSize: '2rem', fontWeight: 700 }}>₹{totalEarnings}</div>
          </CardContent>
        </Card>
      </div>

      <section>
        <h2 style={{ fontSize: '1.25rem', fontWeight: 600, marginBottom: 'var(--space-4)' }}>Recent Activity</h2>
        <Card>
          <div style={{ padding: 'var(--space-4)', display: 'flex', flexDirection: 'column', gap: 'var(--space-4)' }}>
            {recentBookings.length === 0 ? (
              <p style={{ color: 'var(--color-text-muted)' }}>No recent activity.</p>
            ) : (
              recentBookings.map((booking, i) => (
                <div key={booking.id} style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', borderBottom: i === recentBookings.length - 1 ? 'none' : '1px solid var(--color-border)', paddingBottom: i === recentBookings.length - 1 ? 0 : 'var(--space-4)' }}>
                  <div>
                    <p style={{ fontWeight: 500 }}>
                      Booking {booking.status === 'pending' ? 'request' : booking.status} from {booking.users_bookings_learner_idTousers?.user_profiles?.display_name || 'Resident'}
                    </p>
                    <p style={{ fontSize: '0.875rem', color: 'var(--color-text-muted)' }}>
                      {booking.listings?.title || 'Unknown'} - {new Date(booking.created_at).toLocaleDateString()}
                    </p>
                  </div>
                  <div style={{ display: 'flex', gap: 'var(--space-2)' }}>
                    {booking.status === 'pending' ? (
                      <Button size="sm" onClick={() => handleApprove(booking.id)}>Approve</Button>
                    ) : (
                      <span style={{ fontSize: '0.875rem', color: 'var(--color-success)', fontWeight: 500 }}>{booking.status.toUpperCase()}</span>
                    )}
                  </div>
                </div>
              ))
            )}
          </div>
        </Card>
      </section>
    </div>
  );
}
