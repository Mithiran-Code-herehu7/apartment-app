'use client';

import React, { useState, useEffect } from 'react';
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { Button } from '@/components/ui/button';
import { useAuth } from '@/contexts/auth-context';
import { api } from '@/lib/api';

export default function ProviderSettingsPage() {
  const { user, logout } = useAuth();
  const [isEditing, setIsEditing] = useState(false);
  const [isLoading, setIsLoading] = useState(true);
  const [formData, setFormData] = useState({
    displayName: '',
    bio: '',
    skillsOffered: ''
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
          skillsOffered: profile.skills_offered ? profile.skills_offered.join(', ') : ''
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
        skillsOffered: formData.skillsOffered ? formData.skillsOffered.split(',').map((s: string) => s.trim()) : []
      });
      setIsEditing(false);
      alert('Settings saved successfully!');
    } catch (error) {
      console.error('Failed to save profile', error);
      alert('Failed to save settings');
    }
  };

  if (isLoading) {
    return <div>Loading settings...</div>;
  }

  return (
    <div>
      <h1 style={{ fontSize: '1.5rem', fontWeight: 600, marginBottom: 'var(--space-6)' }}>
        Provider Settings
      </h1>

      <Card>
        <CardHeader>
          <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
            <div>
              <CardTitle>Public Profile</CardTitle>
              <CardDescription>Update how you appear to residents.</CardDescription>
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
                label="Skills Offered" 
                name="skillsOffered"
                value={formData.skillsOffered}
                onChange={handleChange}
                placeholder="e.g. Guitar, Math, Plumbing"
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
                <h4 style={{ fontSize: '0.875rem', color: 'var(--color-text-muted)', marginBottom: 'var(--space-1)' }}>Skills Offered</h4>
                <p>{formData.skillsOffered || 'Not set'}</p>
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
