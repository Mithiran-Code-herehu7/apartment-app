'use client';

import React, { useState } from 'react';
import { useRouter } from 'next/navigation';
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { Button } from '@/components/ui/button';
import { api } from '@/lib/api';

export default function VerifyInvitePage() {
  const [token, setToken] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState('');
  const router = useRouter();

  const handleVerify = async (e: React.FormEvent) => {
    e.preventDefault();
    setError('');
    setIsLoading(true);

    try {
      // Assuming backend expects GET /apartments/verify-invite?token=xxx
      // and returns details. If successful, redirect to signup.
      // For MVP, we'll mock success if token is not empty.
      if (token.length < 5) {
        throw new Error('Invalid token format');
      }
      
      // In a real app, we'd store the verified invite details in state
      // and navigate to signup.
      router.push(`/signup?invite=${token}`);
    } catch (err: any) {
      setError(err.message || 'Invalid or expired invite code.');
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <Card>
      <CardHeader>
        <CardTitle>Join your community</CardTitle>
        <CardDescription>Enter the invite code provided by your apartment manager.</CardDescription>
      </CardHeader>
      <CardContent>
        <form onSubmit={handleVerify} style={{ display: 'flex', flexDirection: 'column', gap: 'var(--space-4)' }}>
          <Input 
            label="Invite Code" 
            placeholder="e.g. APT-XYZ-123" 
            value={token}
            onChange={(e) => setToken(e.target.value)}
            error={error}
            required 
          />
          <Button type="submit" fullWidth isLoading={isLoading}>
            Verify Code
          </Button>
        </form>
      </CardContent>
    </Card>
  );
}
