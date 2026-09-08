'use client';

import React from 'react';
import { useParams, useRouter } from 'next/navigation';
import { Card, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { useListing } from '@/hooks/api/use-listings';
import { getListingImage } from '@/lib/get-listing-image';

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

      <div style={{ height: '320px', width: '100%', borderRadius: 'var(--radius-lg, 12px)', overflow: 'hidden', marginBottom: 'var(--space-6)', backgroundColor: '#f1f5f9' }}>
        <img 
          src={getListingImage(listing)} 
          alt={listing.title} 
          style={{ width: '100%', height: '100%', objectFit: 'cover' }} 
        />
      </div>

      <div style={{ display: 'flex', flexDirection: 'column', gap: 'var(--space-6)' }}>
        <div>
          <h1 style={{ fontSize: '2rem', fontWeight: 700, marginBottom: 'var(--space-2)' }}>
            {listing.title}
          </h1>
          <p style={{ color: 'var(--color-primary)', fontWeight: 600, fontSize: '1.25rem' }}>
            ₹{listing.pricing_plans?.[0]?.price_amount || listing.price || 500} / session
          </p>
        </div>

        <div style={{ display: 'flex', alignItems: 'center', gap: 'var(--space-4)' }}>
          <div style={{ width: '48px', height: '48px', borderRadius: '50%', backgroundColor: 'var(--color-primary-light, #e0f2fe)', display: 'flex', alignItems: 'center', justifyContent: 'center', fontWeight: 700, color: 'var(--color-primary)' }}>
            {(listing.users?.user_profiles?.display_name || 'C')[0].toUpperCase()}
          </div>
          <div>
            <h3 style={{ fontWeight: 600 }}>{listing.users?.user_profiles?.display_name || 'Community Member'}</h3>
            <p style={{ fontSize: '0.875rem', color: 'var(--color-text-muted)' }}>Verified Resident Provider</p>
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
