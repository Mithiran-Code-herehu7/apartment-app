'use client';

import React, { useState } from 'react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';

export default function SearchPage() {
  const [searchQuery, setSearchQuery] = useState('');
  const [category, setCategory] = useState('all');

  return (
    <div style={{ padding: 'var(--space-4)', maxWidth: '1200px', margin: '0 auto' }}>
      <h1 style={{ fontSize: '1.5rem', fontWeight: 600, marginBottom: 'var(--space-4)' }}>
        Explore Services
      </h1>
      
      <div style={{ display: 'flex', gap: 'var(--space-2)', marginBottom: 'var(--space-6)', flexWrap: 'wrap' }}>
        <div style={{ flexGrow: 1, minWidth: '200px' }}>
          <Input 
            placeholder="Search skills, services, or people..." 
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
          />
        </div>
        <select 
          value={category} 
          onChange={(e) => setCategory(e.target.value)}
          style={{
            padding: 'var(--space-2) var(--space-3)',
            borderRadius: 'var(--radius-md)',
            border: '1px solid var(--color-border)',
            backgroundColor: 'var(--color-bg-surface)',
            color: 'var(--color-text-base)',
            minWidth: '150px'
          }}
        >
          <option value="all">All Categories</option>
          <option value="fitness">Fitness</option>
          <option value="cooking">Cooking</option>
          <option value="tech">Tech Support</option>
          <option value="language">Languages</option>
        </select>
        <Button>Search</Button>
      </div>

      <section style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(300px, 1fr))', gap: 'var(--space-4)' }}>
        {/* Placeholder search results */}
        {[1, 2, 3, 4, 5].map((i) => (
          <Card key={i}>
            <div style={{ height: '160px', backgroundColor: 'var(--color-bg-subtle)' }} />
            <CardHeader>
              <CardTitle>Service Title {i}</CardTitle>
              <CardDescription>By Neighbor • $20/hr</CardDescription>
            </CardHeader>
            <CardContent>
              <p style={{ fontSize: '0.875rem', color: 'var(--color-text-muted)', marginBottom: 'var(--space-4)' }}>
                A brief description of the service offered by the neighbor. It is helpful and friendly.
              </p>
              <Button fullWidth>View Details</Button>
            </CardContent>
          </Card>
        ))}
      </section>
    </div>
  );
}
