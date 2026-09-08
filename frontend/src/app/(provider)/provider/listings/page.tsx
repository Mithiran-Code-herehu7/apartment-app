'use client';

import React, { useState, useEffect } from 'react';
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { api } from '@/lib/api';
import { useAuth } from '@/contexts/auth-context';
import { useRouter } from 'next/navigation';
import { getListingImage } from '@/lib/get-listing-image';
import Link from 'next/link';

export default function ManageListingsPage() {
  const { isAuthenticated, isLoading: isAuthLoading } = useAuth();
  const router = useRouter();
  const [listings, setListings] = useState<any[]>([]);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    if (isAuthLoading) return;
    if (!isAuthenticated) {
      router.push('/login');
      return;
    }

    const fetchListings = async () => {
      try {
        const res = await api.get('/listings/my-listings');
        setListings(res.data || []);
      } catch (error) {
        console.error('Failed to load listings', error);
      } finally {
        setIsLoading(false);
      }
    };
    fetchListings();
  }, [isAuthenticated, isAuthLoading, router]);

  if (isAuthLoading || isLoading) {
    return <div style={{ padding: 'var(--space-4)' }}>Loading listings...</div>;
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
            <Card key={listing.id} style={{ overflow: 'hidden' }}>
              <div style={{ display: 'flex', flexWrap: 'wrap' }}>
                <div style={{ width: '160px', height: '140px', backgroundColor: '#f1f5f9', flexShrink: 0 }}>
                  <img 
                    src={getListingImage(listing)} 
                    alt={listing.title} 
                    style={{ width: '100%', height: '100%', objectFit: 'cover' }} 
                  />
                </div>
                <div style={{ flex: 1, minWidth: '240px' }}>
                  <CardHeader>
                    <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start' }}>
                      <div>
                        <CardTitle>{listing.title}</CardTitle>
                        <CardDescription>
                          {listing.status === 'approved' ? 'Published' : 'Draft'} • 
                          {listing.pricing_plans?.[0] ? ` ₹${listing.pricing_plans[0].price_amount}/session` : ' Custom Pricing'}
                        </CardDescription>
                      </div>
                      <Link href={`/provider/listings/${listing.id}/edit`}>
                        <Button variant="secondary" size="sm">Edit</Button>
                      </Link>
                    </div>
                  </CardHeader>
                  <CardContent>
                    <p style={{ fontSize: '0.875rem', color: 'var(--color-text-muted)', display: '-webkit-box', WebkitLineClamp: 2, WebkitBoxOrient: 'vertical', overflow: 'hidden' }}>
                      {listing.description}
                    </p>
                  </CardContent>
                </div>
              </div>
            </Card>
          ))
        )}
      </div>
    </div>
  );
}
