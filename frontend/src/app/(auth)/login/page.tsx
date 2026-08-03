'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import { useRouter } from 'next/navigation';
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { Button } from '@/components/ui/button';
import { useAuth } from '@/contexts/auth-context';
import { api } from '@/lib/api';

export default function LoginPage() {
  const router = useRouter();
  const [phone, setPhone] = useState('');
  const [otp, setOtp] = useState('');
  const [step, setStep] = useState<'PHONE' | 'OTP'>('PHONE');
  const [isLogin, setIsLogin] = useState(true);
  const { login } = useAuth();
  const [error, setError] = useState('');
  const [isLoading, setIsLoading] = useState(false);

  const handleSendOtp = async (e: React.FormEvent) => {
    e.preventDefault();
    const cleanPhone = phone.replace(/^\+91/, '').replace(/\s+/g, '');
    if (!cleanPhone || cleanPhone.length < 10) {
      setError('Please enter a valid 10-digit phone number.');
      return;
    }
    setError('');
    setIsLoading(true);
    try {
      // Call the backend to generate and send OTP
      await api.post('/auth/send-otp', { phone: `+91${cleanPhone}` });
      setStep('OTP');
    } catch (err: any) {
      setError(err.response?.data?.message || 'Failed to send OTP.');
    } finally {
      setIsLoading(false);
    }
  };

  const handleVerifyOtp = async (e: React.FormEvent) => {
    e.preventDefault();
    setError('');
    setIsLoading(true);
    const cleanPhone = phone.replace(/^\+91/, '').replace(/\s+/g, '');
    try {
      await login(`+91${cleanPhone}`, otp);
      router.push('/');
    } catch (err: any) {
      setError(err.response?.data?.message || 'Failed to login. Ensure you use the correct OTP.');
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <Card>
      <CardHeader>
        <CardTitle>{isLogin ? 'Welcome Back' : 'Join your Community'}</CardTitle>
        <CardDescription>
          {step === 'PHONE' 
            ? (isLogin ? 'Enter your phone number to securely log in.' : 'Enter your phone number to create a new account.')
            : `We've sent a code to +91 ${phone}`}
        </CardDescription>
      </CardHeader>
      <CardContent>
        {error && <div style={{ color: 'red', marginBottom: '1rem', fontSize: '0.875rem' }}>{error}</div>}
        
        {step === 'PHONE' ? (
          <form onSubmit={handleSendOtp} style={{ display: 'flex', flexDirection: 'column', gap: 'var(--space-4)' }}>
            <Input 
              label="Phone Number" 
              type="tel" 
              placeholder="9876543210" 
              value={phone}
              onChange={(e) => setPhone(e.target.value)}
              prefix="+91"
              required 
            />
            <Button type="submit" fullWidth disabled={isLoading}>
              Send OTP
            </Button>
            <div style={{ textAlign: 'center', marginTop: '1rem', fontSize: '0.875rem' }}>
              {isLogin ? "Don't have an account? " : "Already have an account? "}
              <button 
                type="button"
                onClick={() => setIsLogin(!isLogin)}
                style={{ background: 'none', border: 'none', color: 'var(--color-primary)', cursor: 'pointer', textDecoration: 'underline', padding: 0, font: 'inherit' }}
              >
                {isLogin ? 'Sign Up' : 'Log In'}
              </button>
            </div>
          </form>
        ) : (
          <form onSubmit={handleVerifyOtp} style={{ display: 'flex', flexDirection: 'column', gap: 'var(--space-4)' }}>
            <Input 
              label="Enter OTP" 
              type="text" 
              placeholder="123456" 
              value={otp}
              onChange={(e) => setOtp(e.target.value)}
              required 
            />
            <div style={{ fontSize: '0.75rem', color: 'var(--color-text-muted)' }}>
              Note: Check your backend terminal console for the dynamically generated OTP.
            </div>
            <Button type="submit" fullWidth disabled={isLoading}>
              {isLoading ? 'Verifying...' : 'Verify & Login'}
            </Button>
            <Button 
              type="button" 
              variant="secondary" 
              fullWidth 
              onClick={() => setStep('PHONE')}
              disabled={isLoading}
            >
              Back
            </Button>
          </form>
        )}
      </CardContent>
    </Card>
  );
}
