'use client';

import React, { useState, useEffect, Suspense } from 'react';
import { useRouter, useSearchParams } from 'next/navigation';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { api } from '@/lib/api';
import { getListingImage } from '@/lib/get-listing-image';

function SearchPageContent() {
  const router = useRouter();
  const searchParams = useSearchParams();
  const initialQ = searchParams ? (searchParams.get('q') || '') : '';
  
  const [searchQuery, setSearchQuery] = useState(initialQ);
  const [selectedCategory, setSelectedCategory] = useState('all');
  const [categories, setCategories] = useState<any[]>([]);
  const [listings, setListings] = useState<any[]>([]);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const loadCategoriesAndListings = async () => {
      try {
        const [catRes, listRes] = await Promise.all([
          api.get('/categories'),
          api.get('/listings')
        ]);
        setCategories(catRes.data || []);
        setListings(listRes.data || []);
      } catch (err) {
        console.error('Failed to load search data', err);
      } finally {
        setIsLoading(false);
      }
    };
    loadCategoriesAndListings();
  }, []);

  const filteredListings = listings.filter((listing) => {
    const matchesCategory = selectedCategory === 'all' || listing.category_id === selectedCategory;
    const q = searchQuery.toLowerCase().trim();
    const matchesSearch = !q || 
      listing.title?.toLowerCase().includes(q) || 
      listing.description?.toLowerCase().includes(q);
    return matchesCategory && matchesSearch;
  });

  return (
    <div style={{ padding: 'var(--space-4)', maxWidth: '1200px', margin: '0 auto' }}>
      <h1 style={{ fontSize: '1.5rem', fontWeight: 600, marginBottom: 'var(--space-4)' }}>
        Explore Community Services
      </h1>
      
      <div style={{ display: 'flex', gap: 'var(--space-2)', marginBottom: 'var(--space-6)', flexWrap: 'wrap' }}>
        <div style={{ flexGrow: 1, minWidth: '200px' }}>
          <Input 
            placeholder="Search skills, services, or descriptions..." 
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
          />
        </div>
        <select 
          value={selectedCategory} 
          onChange={(e) => setSelectedCategory(e.target.value)}
          style={{
            padding: 'var(--space-2) var(--space-3)',
            borderRadius: 'var(--radius-md)',
            border: '1px solid var(--color-border)',
            backgroundColor: 'var(--color-bg-surface)',
            color: 'var(--color-text-base)',
            minWidth: '180px'
          }}
        >
          <option value="all">All Categories</option>
          {categories.map((cat) => (
            <option key={cat.id} value={cat.id}>{cat.name}</option>
          ))}
        </select>
      </div>

      {isLoading ? (
        <p>Loading services...</p>
      ) : filteredListings.length > 0 ? (
        <section style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(300px, 1fr))', gap: 'var(--space-6)' }}>
          {filteredListings.map((listing) => (
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
        <p style={{ color: 'var(--color-text-muted)' }}>No services found matching your filter.</p>
      )}
    </div>
  );
}

export default function SearchPage() {
  return (
    <Suspense fallback={<div style={{ padding: 'var(--space-4)' }}>Loading search page...</div>}>
      <SearchPageContent />
    </Suspense>
  );
}
