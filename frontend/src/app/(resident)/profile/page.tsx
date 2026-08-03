'use client';

import React, { useState, useEffect } from 'react';
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { Button } from '@/components/ui/button';
import { useAuth } from '@/contexts/auth-context';
import { api } from '@/lib/api';
import { useRouter } from 'next/navigation';

export default function ProfilePage() {
  const { user, logout } = useAuth();
  const router = useRouter();
  const [isEditing, setIsEditing] = useState(false);
  const [isLoading, setIsLoading] = useState(true);
  const [formData, setFormData] = useState({
    displayName: '',
    bio: '',
    languages: ''
  });

  useEffect(() => {
    if (!user) return;
    
    const fetchProfile = async () => {
      try {
        const res = await api.get('/users/me');
        const profile = res.data.user_profiles || {};
        setFormData({
          displayName: profile.display_name || '',
          bio: profile.bio || '',
          languages: profile.languages ? profile.languages.join(', ') : ''
        });
      } catch (error) {
        console.error('Failed to load profile', error);
      } finally {
        setIsLoading(false);
      }
    };
    
    fetchProfile();
  }, [user]);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSave = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!user) return;
    
    try {
      await api.patch(`/users/${user.id}/profile`, {
        displayName: formData.displayName,
        bio: formData.bio,
        languages: formData.languages ? formData.languages.split(',').map(l => l.trim()) : []
      });
      setIsEditing(false);
      alert('Profile updated successfully!');
    } catch (error) {
      console.error('Failed to save profile', error);
      alert('Failed to save profile');
    }
  };

  if (isLoading) {
    return <div style={{ padding: 'var(--space-4)', maxWidth: '800px', margin: '0 auto' }}>Loading profile...</div>;
  }

  return (
    <div style={{ padding: 'var(--space-4)', maxWidth: '800px', margin: '0 auto' }}>
      <h1 style={{ fontSize: '1.5rem', fontWeight: 600, marginBottom: 'var(--space-6)' }}>
        My Profile
      </h1>

      <Card>
        <CardHeader>
          <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
            <div>
              <CardTitle>Personal Information</CardTitle>
              <CardDescription>Update your public profile details.</CardDescription>
            </div>
            {!isEditing && (
              <Button variant="secondary" onClick={() => setIsEditing(true)}>Edit</Button>
            )}
          </div>
        </CardHeader>
        <CardContent>
          {isEditing ? (
            <form onSubmit={handleSave} style={{ display: 'flex', flexDirection: 'column', gap: 'var(--space-4)' }}>
              <Input 
                label="Display Name" 
                name="displayName"
                value={formData.displayName}
                onChange={handleChange}
              />
              <div style={{ display: 'flex', flexDirection: 'column', gap: 'var(--space-1)' }}>
                <label style={{ fontSize: '0.875rem', fontWeight: 500, color: 'var(--color-text-base)' }}>Bio</label>
                <textarea 
                  name="bio"
                  value={formData.bio}
                  onChange={handleChange}
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
              <Input 
                label="Languages Spoken" 
                name="languages"
                value={formData.languages}
                onChange={handleChange}
                placeholder="e.g. English, Hindi"
              />
              <div style={{ display: 'flex', gap: 'var(--space-2)', marginTop: 'var(--space-2)' }}>
                <Button type="submit">Save Changes</Button>
                <Button type="button" variant="ghost" onClick={() => setIsEditing(false)}>Cancel</Button>
              </div>
            </form>
          ) : (
            <div style={{ display: 'flex', flexDirection: 'column', gap: 'var(--space-4)' }}>
              <div>
                <h4 style={{ fontSize: '0.875rem', color: 'var(--color-text-muted)', marginBottom: 'var(--space-1)' }}>Display Name</h4>
                <p>{formData.displayName || 'Not set'}</p>
              </div>
              <div>
                <h4 style={{ fontSize: '0.875rem', color: 'var(--color-text-muted)', marginBottom: 'var(--space-1)' }}>Bio</h4>
                <p>{formData.bio || 'Not set'}</p>
              </div>
              <div>
                <h4 style={{ fontSize: '0.875rem', color: 'var(--color-text-muted)', marginBottom: 'var(--space-1)' }}>Languages</h4>
                <p>{formData.languages || 'Not set'}</p>
              </div>
            </div>
          )}
        </CardContent>
      </Card>
      
      <div style={{ marginTop: 'var(--space-8)' }}>
        <Button variant="ghost" style={{ color: 'var(--color-danger)' }} onClick={() => logout()}>
          Sign Out
        </Button>
      </div>
    </div>
  );
}
