'use client';

import React, { useState } from 'react';
import { useRouter } from 'next/navigation';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { useListings } from '@/hooks/api/use-listings';
import { getListingImage } from '@/lib/get-listing-image';
import { Search, ArrowRight } from 'lucide-react';
import Link from 'next/link';

export default function ResidentHome() {
  const router = useRouter();
  const [searchTerm, setSearchTerm] = useState('');
  const { data: listings, isLoading, isError } = useListings();

  const handleSearchSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (searchTerm.trim()) {
      router.push(`/search?q=${encodeURIComponent(searchTerm.trim())}`);
    } else {
      router.push('/search');
    }
  };

  return (
    <div style={{ padding: 'var(--space-4)', maxWidth: '1200px', margin: '0 auto' }}>
      {/* Hero Section */}
      <section style={{ 
        textAlign: 'center', 
        padding: 'var(--space-8) var(--space-4)', 
        backgroundColor: 'var(--color-bg-subtle, #f8fafc)',
        borderRadius: 'var(--radius-xl, 16px)',
        marginBottom: 'var(--space-8)',
        border: '1px solid var(--color-border)'
      }}>
        <h1 style={{ fontSize: '2.25rem', fontWeight: 700, marginBottom: 'var(--space-3)', color: 'var(--color-text-base)' }}>
          Discover Skills & Services in Your Community
        </h1>
        <p style={{ color: 'var(--color-text-muted)', fontSize: '1.125rem', maxWidth: '600px', margin: '0 auto var(--space-6)' }}>
          Learn guitar, practice yoga, get coding help, or order homemade meals directly from verified neighbors.
        </p>

        {/* Hero Search Bar */}
        <form onSubmit={handleSearchSubmit} style={{ maxWidth: '600px', margin: '0 auto', display: 'flex', gap: 'var(--space-2)' }}>
          <div style={{ flex: 1 }}>
            <Input 
              placeholder="Search for guitar, yoga, coding, math tutoring..." 
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
            />
          </div>
          <Button type="submit" style={{ display: 'flex', alignItems: 'center', gap: '6px' }}>
            <Search size={18} />
            <span>Search</span>
          </Button>
        </form>
      </section>

      {/* Services Grid Header */}
      <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: 'var(--space-6)' }}>
        <div>
          <h2 style={{ fontSize: '1.5rem', fontWeight: 600 }}>Featured Services</h2>
          <p style={{ fontSize: '0.875rem', color: 'var(--color-text-muted)' }}>Popular skills offered by residents in your apartment complex</p>
        </div>
        <Link href="/search">
          <Button variant="secondary" style={{ display: 'flex', alignItems: 'center', gap: '6px' }}>
            <span>Explore All Services</span>
            <ArrowRight size={16} />
          </Button>
        </Link>
      </div>

      {isLoading ? (
        <p>Loading listings...</p>
      ) : isError ? (
        <p>Error loading listings. Please try again later.</p>
      ) : listings && listings.length > 0 ? (
        <section style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(300px, 1fr))', gap: 'var(--space-6)' }}>
          {listings.map((listing) => (
            <Card key={listing.id} style={{ overflow: 'hidden', display: 'flex', flexDirection: 'column', justifyContent: 'space-between' }}>
              <div>
                <div style={{ height: '180px', width: '100%', overflow: 'hidden', backgroundColor: '#f1f5f9' }}>
                  <img 
                    src={getListingImage(listing)} 
                    alt={listing.title} 
                    style={{ width: '100%', height: '100%', objectFit: 'cover' }} 
                  />
                </div>
                <CardHeader>
                  <CardTitle>{listing.title}</CardTitle>
                  <CardDescription style={{ color: 'var(--color-primary)', fontWeight: 600, fontSize: '1rem' }}>
                    ₹{listing.pricing_plans?.[0]?.price_amount || listing.price || 500}/session
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <p style={{ fontSize: '0.875rem', color: 'var(--color-text-muted)', marginBottom: 'var(--space-4)', display: '-webkit-box', WebkitLineClamp: 3, WebkitBoxOrient: 'vertical', overflow: 'hidden' }}>
                    {listing.description}
                  </p>
                </CardContent>
              </div>
              <CardContent style={{ paddingTop: 0 }}>
                <Button fullWidth onClick={() => router.push(`/listings/${listing.id}`)}>
                  View Details
                </Button>
              </CardContent>
            </Card>
          ))}
        </section>
      ) : (
        <Card style={{ padding: 'var(--space-8)', textAlign: 'center' }}>
          <p style={{ color: 'var(--color-text-muted)', marginBottom: 'var(--space-4)' }}>No listings available right now.</p>
          <Link href="/provider/listings/create">
            <Button>+ Be the first to offer a skill</Button>
          </Link>
        </Card>
      )}
    </div>
  );
}
