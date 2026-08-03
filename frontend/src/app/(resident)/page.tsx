'use client';

import React from 'react';
import { useRouter } from 'next/navigation';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { useListings } from '@/hooks/api/use-listings';

export default function ResidentHome() {
  const router = useRouter();
  const { data: listings, isLoading, isError } = useListings();

  return (
    <div style={{ padding: 'var(--space-4)', maxWidth: '1200px', margin: '0 auto' }}>
      <section style={{ marginBottom: 'var(--space-8)' }}>
        <h1 style={{ fontSize: '1.5rem', fontWeight: 600, marginBottom: 'var(--space-2)' }}>
          Welcome to your Community
        </h1>
        <p style={{ color: 'var(--color-text-muted)' }}>
          Discover local skills and services from your neighbors.
        </p>
      </section>

      {isLoading ? (
        <p>Loading listings...</p>
      ) : isError ? (
        <p>Error loading listings. Please try again later.</p>
      ) : listings && listings.length > 0 ? (
        <section style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(300px, 1fr))', gap: 'var(--space-4)' }}>
          {listings.map((listing) => (
            <Card key={listing.id}>
              <div style={{ height: '160px', backgroundColor: 'var(--color-bg-subtle)' }} />
              <CardHeader>
                <CardTitle>{listing.title}</CardTitle>
                <CardDescription>₹{listing.pricing_plans?.[0]?.price_amount || listing.price}/session</CardDescription>
              </CardHeader>
              <CardContent>
                <p style={{ fontSize: '0.875rem', color: 'var(--color-text-muted)', marginBottom: 'var(--space-4)' }}>
                  {listing.description}
                </p>
                <Button fullWidth onClick={() => router.push(`/listings/${listing.id}`)}>
                  View Details
                </Button>
              </CardContent>
            </Card>
          ))}
        </section>
      ) : (
        <p>No listings available right now. Check back later!</p>
      )}
    </div>
  );
}
