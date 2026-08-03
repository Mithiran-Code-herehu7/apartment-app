'use client';

import React, { useState, useEffect } from 'react';
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { api } from '@/lib/api';
import Link from 'next/link';

export default function ManageListingsPage() {
  const [listings, setListings] = useState<any[]>([]);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const fetchListings = async () => {
      try {
        const res = await api.get('/listings/my-listings');
        setListings(res.data);
      } catch (error) {
        console.error('Failed to load listings', error);
      } finally {
        setIsLoading(false);
      }
    };
    fetchListings();
  }, []);

  if (isLoading) {
    return <div>Loading listings...</div>;
  }

  return (
    <div>
      <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: 'var(--space-6)' }}>
        <h1 style={{ fontSize: '1.5rem', fontWeight: 600 }}>My Listings</h1>
        <Link href="/provider/listings/create">
          <Button>Create New Listing</Button>
        </Link>
      </div>

      <div style={{ display: 'flex', flexDirection: 'column', gap: 'var(--space-4)' }}>
        {listings.length === 0 ? (
          <Card>
            <CardContent style={{ padding: 'var(--space-6)', textAlign: 'center' }}>
              <p style={{ color: 'var(--color-text-muted)' }}>You haven't created any listings yet.</p>
            </CardContent>
          </Card>
        ) : (
          listings.map(listing => (
            <Card key={listing.id}>
              <CardHeader>
                <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start' }}>
                  <div>
                    <CardTitle>{listing.title}</CardTitle>
                    <CardDescription>
                      {listing.status === 'approved' ? 'Published' : 'Draft'} • 
                      {listing.pricing_plans?.[0] ? ` ₹${listing.pricing_plans[0].price}/session` : ' Custom Pricing'}
                    </CardDescription>
                  </div>
                  <Link href={`/provider/listings/${listing.id}/edit`}>
                    <Button variant="secondary" size="sm">Edit</Button>
                  </Link>
                </div>
              </CardHeader>
              <CardContent>
                <p style={{ fontSize: '0.875rem', color: 'var(--color-text-muted)' }}>
                  {listing.description}
                </p>
              </CardContent>
            </Card>
          ))
        )}
      </div>
    </div>
  );
}
