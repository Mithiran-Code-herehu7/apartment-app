'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import { useRouter } from 'next/navigation';
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { Button } from '@/components/ui/button';
import { useAuth } from '@/contexts/auth-context';

export default function SignupPage() {
  const router = useRouter();
  const { signup } = useAuth();
  
  const [formData, setFormData] = useState({
    email: '',
    phone: '',
    apartmentName: '',
    password: '',
    displayName: '',
  });
  
  const [phoneNotice, setPhoneNotice] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState('');

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handlePhoneChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    let val = e.target.value;

    // Check if user accidentally typed or pasted +91 or +
    if (val.includes('+') || val.startsWith('91')) {
      setPhoneNotice('Note: Country code (+91) is pre-selected. Please enter only your 10-digit mobile number.');
      // Strip leading +91, +, or spaces
      val = val.replace(/^\+91\s*/, '').replace(/^\+\s*/, '').replace(/^91\s*/, '');
    } else {
      setPhoneNotice('');
    }

    // Keep only digits and limit to 10 digits
    const digitsOnly = val.replace(/\D/g, '').slice(0, 10);
    setFormData(prev => ({ ...prev, phone: digitsOnly }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!formData.email || !formData.phone || !formData.apartmentName || !formData.password) {
      setError('Please fill in all required fields.');
      return;
    }
    if (formData.phone.length < 10) {
      setError('Please enter a valid 10-digit phone number.');
      return;
    }
    if (formData.password.length < 6) {
      setError('Password must be at least 6 characters long.');
      return;
    }

    setIsLoading(true);
    setError('');

    // Prepend +91 country code to 10-digit phone number
    const formattedPhone = `+91${formData.phone}`;

    try {
      await signup({
        email: formData.email,
        phone: formattedPhone,
        apartmentName: formData.apartmentName,
        password: formData.password,
        displayName: formData.displayName || undefined,
      });
      router.push('/');
    } catch (err: any) {
      console.error('Signup failed', err);
      setError(err.response?.data?.message || 'Failed to create account. Please try again.');
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <Card style={{ maxWidth: '500px', margin: '2rem auto' }}>
      <CardHeader>
        <CardTitle>Join Your Community</CardTitle>
        <CardDescription>
          Create your account to start sharing and discovering skills with neighbors.
        </CardDescription>
      </CardHeader>
      <CardContent>
        {error && (
          <div style={{
            color: 'var(--color-danger, #ef4444)',
            backgroundColor: '#fee2e2',
            padding: 'var(--space-2) var(--space-3)',
            borderRadius: 'var(--radius-md)',
            marginBottom: 'var(--space-4)',
            fontSize: '0.875rem'
          }}>
            {error}
          </div>
        )}
        
        <form onSubmit={handleSubmit} style={{ display: 'flex', flexDirection: 'column', gap: 'var(--space-4)' }}>
          <Input 
            label="Email Address" 
            name="email"
            type="email" 
            placeholder="you@example.com" 
            value={formData.email}
            onChange={handleChange}
            required 
          />

          <div style={{ display: 'flex', flexDirection: 'column', gap: 'var(--space-1)' }}>
            <label style={{ fontSize: '0.875rem', fontWeight: 500, color: 'var(--color-text-base)' }}>
              Phone Number
            </label>
            <div style={{ display: 'flex', gap: 'var(--space-2)' }}>
              <select
                value="+91"
                disabled
                title="Country Code (India +91)"
                style={{
                  padding: 'var(--space-2) var(--space-3)',
                  border: '1px solid var(--color-border)',
                  borderRadius: 'var(--radius-md)',
                  backgroundColor: 'var(--color-bg-subtle, #f3f4f6)',
                  color: 'var(--color-text-base)',
                  fontWeight: 600,
                  cursor: 'not-allowed',
                  minWidth: '100px'
                }}
              >
                <option value="+91">🇮🇳 +91</option>
              </select>

              <div style={{ flex: 1 }}>
                <Input 
                  name="phone"
                  type="tel" 
                  placeholder="9876543210" 
                  value={formData.phone}
                  onChange={handlePhoneChange}
                  required 
                />
              </div>
            </div>
            {phoneNotice && (
              <span style={{ fontSize: '0.75rem', color: '#b45309', backgroundColor: '#fef3c7', padding: '2px 8px', borderRadius: '4px', marginTop: '4px' }}>
                ⚠️ {phoneNotice}
              </span>
            )}
          </div>

          <Input 
            label="Apartment Complex Name" 
            name="apartmentName"
            type="text" 
            placeholder="e.g. Prestige Lakeside Habitat" 
            value={formData.apartmentName}
            onChange={handleChange}
            required 
          />

          <Input 
            label="Your Name (Optional)" 
            name="displayName"
            type="text" 
            placeholder="e.g. Rahul Sharma" 
            value={formData.displayName}
            onChange={handleChange}
          />

          <Input 
            label="Password" 
            name="password"
            type="password" 
            placeholder="At least 6 characters" 
            value={formData.password}
            onChange={handleChange}
            required 
          />
          
          <Button type="submit" fullWidth disabled={isLoading}>
            {isLoading ? 'Creating Account...' : 'Sign Up'}
          </Button>

          <div style={{ textAlign: 'center', marginTop: 'var(--space-2)', fontSize: '0.875rem', color: 'var(--color-text-muted)' }}>
            Already have an account?{' '}
            <Link 
              href="/login" 
              style={{ color: 'var(--color-primary)', fontWeight: 600, textDecoration: 'underline' }}
            >
              Log In
            </Link>
          </div>
        </form>
      </CardContent>
    </Card>
  );
}
