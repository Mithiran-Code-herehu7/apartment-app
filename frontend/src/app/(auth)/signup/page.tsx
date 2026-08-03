'use client';

import React, { useState, Suspense } from 'react';
import { useRouter, useSearchParams } from 'next/navigation';
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { Button } from '@/components/ui/button';

function SignupForm() {
  const router = useRouter();
  const searchParams = useSearchParams();
  const inviteToken = searchParams.get('invite') || '';

  const [formData, setFormData] = useState({
    email: '',
    password: '',
    displayName: '',
    phone: ''
  });
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState('');

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsLoading(true);
    setError('');

    try {
      router.push('/login');
    } catch (err: any) {
      setError(err.message || 'Failed to create account.');
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <form onSubmit={handleSubmit} style={{ display: 'flex', flexDirection: 'column', gap: 'var(--space-4)' }}>
      <Input 
        label="Display Name" 
        name="displayName"
        placeholder="e.g. John D." 
        value={formData.displayName}
        onChange={handleChange}
        required 
      />
      <Input 
        label="Email address" 
        name="email"
        type="email" 
        placeholder="neighbor@example.com" 
        value={formData.email}
        onChange={handleChange}
        required 
      />
      <Input 
        label="Phone number (optional)" 
        name="phone"
        type="tel" 
        placeholder="+1 234 567 8900" 
        value={formData.phone}
        onChange={handleChange}
      />
      <Input 
        label="Password" 
        name="password"
        type="password" 
        value={formData.password}
        onChange={handleChange}
        required 
      />
      
      {error && <p style={{ color: 'var(--color-danger)', fontSize: '0.875rem' }}>{error}</p>}
      
      <Button type="submit" fullWidth isLoading={isLoading}>
        Create Account
      </Button>
    </form>
  );
}

export default function SignupPage() {
  return (
    <Card>
      <CardHeader>
        <CardTitle>Create your profile</CardTitle>
        <CardDescription>Set up your account to start connecting with your community.</CardDescription>
      </CardHeader>
      <CardContent>
        <Suspense fallback={<div>Loading...</div>}>
          <SignupForm />
        </Suspense>
      </CardContent>
    </Card>
  );
}
