'use client';

import React, { useState } from 'react';
import { useParams, useRouter } from 'next/navigation';
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { useListing } from '@/hooks/api/use-listings';
import { api } from '@/lib/api';

export default function BookingPage() {
  const router = useRouter();
  const { id } = useParams();
  
  const { data: listing, isLoading, isError } = useListing(id as string);
  
  const [date, setDate] = useState('');
  const [time, setTime] = useState('');
  const [message, setMessage] = useState('');
  const [isSubmitting, setIsSubmitting] = useState(false);

  if (isLoading) return <div style={{ padding: 'var(--space-4)' }}>Loading...</div>;
  if (isError || !listing) return <div style={{ padding: 'var(--space-4)' }}>Failed to load listing.</div>;

  const pricingPlan = listing.pricing_plans?.[0];
  const slot = listing.availability_slots?.[0];
  const basePrice = Number(pricingPlan ? pricingPlan.price_amount : (listing.price || 500));

  const handleBooking = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    try {
      const sessionStart = new Date(`${date}T${time}:00`).toISOString();
      // Assume 1 hour duration if not specified
      const durationMinutes = pricingPlan?.duration_minutes || 60;
      const sessionEnd = new Date(new Date(sessionStart).getTime() + durationMinutes * 60000).toISOString();

      await api.post('/bookings', {
        listingId: listing.id,
        slotId: slot?.id || '00000000-0000-0000-0000-000000000000', // fallback if slot is missing, DB might reject though
        pricingPlanId: pricingPlan?.id || '00000000-0000-0000-0000-000000000000',
        sessionStart,
        sessionEnd,
        learnerNotes: message,
      });

      alert('Booking request sent successfully!');
      router.push('/bookings');
    } catch (error: any) {
      console.error('Failed to book', error);
      alert(error.response?.data?.message || 'Failed to submit booking. Ensure this listing was created recently (has pricing plans).');
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div style={{ padding: 'var(--space-4)', maxWidth: '600px', margin: '0 auto' }}>
      <div style={{ marginBottom: 'var(--space-6)' }}>
        <Button variant="ghost" onClick={() => router.back()}>&larr; Back to Listing</Button>
      </div>

      <Card>
        <CardHeader>
          <CardTitle>Request a Booking</CardTitle>
          <CardDescription>{listing.title} • ₹{basePrice}</CardDescription>
        </CardHeader>
        <CardContent>
          <form onSubmit={handleBooking} style={{ display: 'flex', flexDirection: 'column', gap: 'var(--space-4)' }}>
            <div style={{ display: 'flex', gap: 'var(--space-4)' }}>
              <div style={{ flex: 1 }}>
                <Input 
                  label="Date" 
                  type="date" 
                  value={date}
                  onChange={(e) => setDate(e.target.value)}
                  required 
                />
              </div>
              <div style={{ flex: 1 }}>
                <Input 
                  label="Time" 
                  type="time" 
                  value={time}
                  onChange={(e) => setTime(e.target.value)}
                  required 
                />
              </div>
            </div>

            <div style={{ display: 'flex', flexDirection: 'column', gap: 'var(--space-1)' }}>
              <label style={{ fontSize: '0.875rem', fontWeight: 500, color: 'var(--color-text-base)' }}>
                Message to Provider (optional)
              </label>
              <textarea 
                value={message}
                onChange={(e) => setMessage(e.target.value)}
                placeholder="Hi! I'm interested in this service..."
                rows={4}
                style={{
                  padding: 'var(--space-2) var(--space-3)',
                  border: '1px solid var(--color-border)',
                  borderRadius: 'var(--radius-md)',
                  fontFamily: 'inherit',
                  resize: 'vertical'
                }}
              />
            </div>

            <div style={{ 
              marginTop: 'var(--space-4)', 
              padding: 'var(--space-4)', 
              backgroundColor: 'var(--color-bg-subtle)', 
              borderRadius: 'var(--radius-md)',
              display: 'flex',
              justifyContent: 'space-between',
              alignItems: 'center'
            }}>
              <span style={{ fontWeight: 500 }}>Total (incl. platform fee):</span>
              <span style={{ fontWeight: 700, fontSize: '1.25rem' }}>₹{basePrice + (basePrice * 0.1)}</span>
            </div>

            <Button type="submit" size="lg" fullWidth style={{ marginTop: 'var(--space-2)' }} disabled={isSubmitting}>
              {isSubmitting ? 'Processing...' : 'Confirm & Book'}
            </Button>
          </form>
        </CardContent>
      </Card>
    </div>
  );
}
