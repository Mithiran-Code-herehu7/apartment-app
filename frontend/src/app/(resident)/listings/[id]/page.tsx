'use client';

import React from 'react';
import { useParams, useRouter } from 'next/navigation';
import { Card, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { useListing } from '@/hooks/api/use-listings';

export default function ListingDetailsPage() {
  const params = useParams();
  const router = useRouter();
  const { id } = params;
  
  const { data: listing, isLoading, isError } = useListing(id as string);

  if (isLoading) return <div style={{ padding: 'var(--space-4)' }}>Loading...</div>;
  if (isError || !listing) return <div style={{ padding: 'var(--space-4)' }}>Failed to load listing.</div>;

  return (
    <div style={{ padding: 'var(--space-4)', maxWidth: '800px', margin: '0 auto' }}>
      <div style={{ display: 'flex', gap: 'var(--space-2)', marginBottom: 'var(--space-4)' }}>
        <Button variant="ghost" onClick={() => router.back()}>&larr; Back</Button>
      </div>

      <div style={{ height: '300px', backgroundColor: 'var(--color-bg-subtle)', borderRadius: 'var(--radius-lg)', marginBottom: 'var(--space-6)' }} />

      <div style={{ display: 'flex', flexDirection: 'column', gap: 'var(--space-6)' }}>
        <div>
          <h1 style={{ fontSize: '2rem', fontWeight: 700, marginBottom: 'var(--space-2)' }}>
            {listing.title}
          </h1>
          <p style={{ color: 'var(--color-primary)', fontWeight: 600, fontSize: '1.25rem' }}>
            ₹{listing.pricing_plans?.[0]?.price_amount || listing.price} / session
          </p>
        </div>

        <div style={{ display: 'flex', alignItems: 'center', gap: 'var(--space-4)' }}>
          <div style={{ width: '48px', height: '48px', borderRadius: '50%', backgroundColor: 'var(--color-bg-subtle)' }} />
          <div>
            <h3 style={{ fontWeight: 600 }}>Provider</h3>
            <p style={{ fontSize: '0.875rem', color: 'var(--color-text-muted)' }}>ID: {listing.provider_id}</p>
          </div>
        </div>

        <section>
          <h2 style={{ fontSize: '1.25rem', fontWeight: 600, marginBottom: 'var(--space-2)' }}>About this service</h2>
          <p style={{ color: 'var(--color-text-muted)', lineHeight: 1.6 }}>
            {listing.description}
          </p>
        </section>

        <Card>
          <CardContent style={{ padding: 'var(--space-4)' }}>
            <h3 style={{ fontWeight: 600, marginBottom: 'var(--space-4)' }}>Ready to book?</h3>
            <Button size="lg" fullWidth onClick={() => router.push(`/listings/${id}/book`)}>
              Request Booking
            </Button>
          </CardContent>
        </Card>
      </div>
    </div>
  );
}
