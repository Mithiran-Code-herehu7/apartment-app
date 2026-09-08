'use client';

import React, { useState, useEffect } from 'react';
import { 
  User, 
  KeyRound, 
  ShieldCheck, 
  Bell, 
  Palette, 
  Lock, 
  Link2, 
  CreditCard, 
  HelpCircle, 
  AlertTriangle,
  Upload,
  Check,
  X,
  Trash2,
  ExternalLink,
  Laptop,
  Smartphone,
  Info,
  ChevronRight
} from 'lucide-react';
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { Button } from '@/components/ui/button';
import { useAuth } from '@/contexts/auth-context';
import { api } from '@/lib/api';

type TabType = 
  | 'profile' 
  | 'account' 
  | 'security' 
  | 'notifications' 
  | 'appearance' 
  | 'privacy' 
  | 'connected' 
  | 'billing' 
  | 'support' 
  | 'danger';

export default function AccountSettingsPage() {
  const { user, logout } = useAuth();
  const [activeTab, setActiveTab] = useState<TabType>('profile');
  const [toastMessage, setToastMessage] = useState<string | null>(null);
  const [deleteModalOpen, setDeleteModalOpen] = useState(false);
  const [isLoading, setIsLoading] = useState(false);

  // Profile Form State
  const [profileData, setProfileData] = useState({
    displayName: user?.displayName || '',
    username: user?.email?.split('@')[0] || 'resident',
    bio: 'Passionate about sharing skills with neighbors and learning new hobbies.',
    email: user?.email || '',
    website: 'https://myskills.community',
    location: 'Bengaluru, India',
    twitter: '@resident_skills',
    github: 'resident-dev',
    linkedin: 'linkedin.com/in/resident',
    isPublic: true,
    avatarUrl: ''
  });

  // Password & Security State
  const [securityData, setSecurityData] = useState({
    currentPassword: '',
    newPassword: '',
    confirmPassword: '',
    enable2FA: false
  });

  // Preferences State
  const [notifications, setNotifications] = useState({
    emailBookings: true,
    emailPromos: false,
    pushMessages: true,
    smsAlerts: true
  });

  const [appearance, setAppearance] = useState({
    theme: 'system',
    fontSize: 'normal',
    compactMode: false
  });

  const [privacy, setPrivacy] = useState({
    searchIndexing: true,
    showEmail: false,
    dataAnalytics: true
  });

  const showToast = (msg: string) => {
    setToastMessage(msg);
    setTimeout(() => setToastMessage(null), 3500);
  };

  // Load saved preferences from localStorage
  useEffect(() => {
    try {
      const savedBio = localStorage.getItem('profile_bio');
      const savedTheme = localStorage.getItem('appearance_theme');
      if (savedBio) setProfileData(prev => ({ ...prev, bio: savedBio }));
      if (savedTheme) setAppearance(prev => ({ ...prev, theme: savedTheme }));
    } catch (e) {}
  }, []);

  const handleProfileSave = (e: React.FormEvent) => {
    e.preventDefault();
    setIsLoading(true);
    setTimeout(() => {
      try {
        localStorage.setItem('profile_bio', profileData.bio);
      } catch (e) {}
      setIsLoading(false);
      showToast('Profile settings saved successfully!');
    }, 600);
  };

  const handleSecuritySave = (e: React.FormEvent) => {
    e.preventDefault();
    if (securityData.newPassword && securityData.newPassword !== securityData.confirmPassword) {
      showToast('Error: New passwords do not match');
      return;
    }
    showToast('Security settings updated!');
    setSecurityData({ currentPassword: '', newPassword: '', confirmPassword: '', enable2FA: securityData.enable2FA });
  };

  const sidebarTabs: Array<{ id: TabType; label: string; icon: any; danger?: boolean }> = [
    { id: 'profile', label: 'Profile', icon: User },
    { id: 'account', label: 'Account', icon: KeyRound },
    { id: 'security', label: 'Security & 2FA', icon: ShieldCheck },
    { id: 'notifications', label: 'Notifications', icon: Bell },
    { id: 'appearance', label: 'Appearance', icon: Palette },
    { id: 'privacy', label: 'Privacy', icon: Lock },
    { id: 'connected', label: 'Connected Accounts', icon: Link2 },
    { id: 'billing', label: 'Billing & Subscriptions', icon: CreditCard },
    { id: 'support', label: 'Support & Help', icon: HelpCircle },
    { id: 'danger', label: 'Danger Zone', icon: AlertTriangle, danger: true },
  ];

  return (
    <div style={{ maxWidth: '1100px', margin: '0 auto', padding: 'var(--space-6, 24px) var(--space-4, 16px)' }}>
      {/* Toast Notification */}
      {toastMessage && (
        <div style={{
          position: 'fixed',
          bottom: '24px',
          right: '24px',
          backgroundColor: '#0f172a',
          color: '#ffffff',
          padding: '12px 20px',
          borderRadius: 'var(--radius-lg, 12px)',
          boxShadow: '0 10px 25px -5px rgba(0,0,0,0.3)',
          display: 'flex',
          alignItems: 'center',
          gap: '10px',
          zIndex: 1000,
          fontSize: '0.875rem',
          fontWeight: 500,
          animation: 'slideUp 0.2s ease-out'
        }}>
          <Check size={18} style={{ color: '#34d399' }} />
          <span>{toastMessage}</span>
        </div>
      )}

      {/* Header */}
      <div style={{ marginBottom: 'var(--space-6, 24px)' }}>
        <h1 style={{ fontSize: '1.75rem', fontWeight: 700, color: 'var(--color-text-base)' }}>
          Account Settings
        </h1>
        <p style={{ color: 'var(--color-text-muted)', fontSize: '0.9375rem' }}>
          Manage your personal details, preferences, security, and profile visibility.
        </p>
      </div>

      {/* Main Container: Sidebar + Content */}
      <div style={{ display: 'grid', gridTemplateColumns: 'minmax(220px, 260px) 1fr', gap: 'var(--space-6, 24px)', alignItems: 'start' }}>
        {/* Sidebar Nav */}
        <Card style={{ padding: '8px' }}>
          <nav style={{ display: 'flex', flexDirection: 'column', gap: '2px' }}>
            {sidebarTabs.map((tab) => {
              const Icon = tab.icon;
              const isSelected = activeTab === tab.id;
              return (
                <button
                  key={tab.id}
                  onClick={() => setActiveTab(tab.id)}
                  style={{
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'space-between',
                    width: '100%',
                    padding: '10px 14px',
                    borderRadius: 'var(--radius-md, 8px)',
                    border: 'none',
                    backgroundColor: isSelected ? 'var(--color-bg-subtle, #f1f5f9)' : 'transparent',
                    color: tab.danger 
                      ? '#ef4444' 
                      : isSelected ? 'var(--color-primary, #0d9488)' : 'var(--color-text-base)',
                    fontWeight: isSelected ? 600 : 500,
                    fontSize: '0.875rem',
                    cursor: 'pointer',
                    textAlign: 'left',
                    transition: 'all 0.15s ease'
                  }}
                >
                  <div style={{ display: 'flex', alignItems: 'center', gap: '10px' }}>
                    <Icon size={18} style={{ color: tab.danger ? '#ef4444' : isSelected ? 'var(--color-primary)' : 'var(--color-text-muted)' }} />
                    <span>{tab.label}</span>
                  </div>
                  {isSelected && <ChevronDownRotate />}
                </button>
              );
            })}
          </nav>
        </Card>

        {/* Content Area */}
        <div>
          {/* TAB 1: PROFILE */}
          {activeTab === 'profile' && (
            <Card>
              <CardHeader>
                <CardTitle>Public Profile</CardTitle>
                <CardDescription>This information will be displayed publicly to neighbors in your community.</CardDescription>
              </CardHeader>
              <CardContent>
                <form onSubmit={handleProfileSave} style={{ display: 'flex', flexDirection: 'column', gap: 'var(--space-4, 16px)' }}>
                  {/* Avatar Upload */}
                  <div style={{ display: 'flex', alignItems: 'center', gap: '16px', marginBottom: '8px' }}>
                    <div style={{
                      width: '72px',
                      height: '72px',
                      borderRadius: '50%',
                      backgroundColor: 'var(--color-primary, #0d9488)',
                      color: '#ffffff',
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                      fontSize: '1.75rem',
                      fontWeight: 700
                    }}>
                      {(profileData.displayName || user?.email || 'U')[0].toUpperCase()}
                    </div>
                    <div>
                      <Button variant="secondary" size="sm" type="button" style={{ display: 'inline-flex', alignItems: 'center', gap: '6px' }}>
                        <Upload size={14} />
                        <span>Upload New Photo</span>
                      </Button>
                      <p style={{ fontSize: '0.75rem', color: 'var(--color-text-muted)', marginTop: '4px' }}>
                        JPG, PNG or GIF. Max size 2MB.
                      </p>
                    </div>
                  </div>

                  <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '16px' }}>
                    <Input 
                      label="Display Name" 
                      value={profileData.displayName}
                      onChange={(e) => setProfileData({ ...profileData, displayName: e.target.value })}
                      placeholder="e.g. Mithiran B"
                      required
                    />
                    <Input 
                      label="Username" 
                      value={profileData.username}
                      onChange={(e) => setProfileData({ ...profileData, username: e.target.value })}
                      placeholder="e.g. mithiran32"
                      required
                    />
                  </div>

                  {/* Bio with Character Counter */}
                  <div style={{ display: 'flex', flexDirection: 'column', gap: '4px' }}>
                    <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                      <label style={{ fontSize: '0.875rem', fontWeight: 500, color: 'var(--color-text-base)' }}>Bio</label>
                      <span style={{ fontSize: '0.75rem', color: profileData.bio.length > 250 ? '#ef4444' : 'var(--color-text-muted)' }}>
                        {profileData.bio.length} / 250 chars
                      </span>
                    </div>
                    <textarea 
                      rows={3}
                      value={profileData.bio}
                      maxLength={250}
                      onChange={(e) => setProfileData({ ...profileData, bio: e.target.value })}
                      style={{
                        padding: '10px 12px',
                        border: '1px solid var(--color-border)',
                        borderRadius: 'var(--radius-md, 8px)',
                        fontFamily: 'inherit',
                        fontSize: '0.875rem',
                        resize: 'vertical'
                      }}
                      placeholder="Briefly describe your skills and interests..."
                    />
                  </div>

                  <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '16px' }}>
                    <Input 
                      label="Location" 
                      value={profileData.location}
                      onChange={(e) => setProfileData({ ...profileData, location: e.target.value })}
                    />
                    <Input 
                      label="Website / Portfolio" 
                      value={profileData.website}
                      onChange={(e) => setProfileData({ ...profileData, website: e.target.value })}
                    />
                  </div>

                  {/* Visibility Toggle */}
                  <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', padding: '12px', border: '1px solid var(--color-border)', borderRadius: 'var(--radius-md, 8px)', marginTop: '8px' }}>
                    <div>
                      <p style={{ fontWeight: 600, fontSize: '0.875rem', margin: 0 }}>Public Profile Visibility</p>
                      <p style={{ fontSize: '0.75rem', color: 'var(--color-text-muted)', margin: '2px 0 0' }}>Allow neighbors to view your profile & listings in searches.</p>
                    </div>
                    <input 
                      type="checkbox"
                      checked={profileData.isPublic}
                      onChange={(e) => setProfileData({ ...profileData, isPublic: e.target.checked })}
                      style={{ width: '18px', height: '18px', cursor: 'pointer' }}
                    />
                  </div>

                  {/* Actions */}
                  <div style={{ display: 'flex', gap: '12px', marginTop: '12px' }}>
                    <Button type="submit" disabled={isLoading}>
                      {isLoading ? 'Saving...' : 'Save Changes'}
                    </Button>
                    <Button type="button" variant="ghost" onClick={() => showToast('Changes discarded')}>
                      Discard
                    </Button>
                  </div>
                </form>
              </CardContent>
            </Card>
          )}

          {/* TAB 2: ACCOUNT */}
          {activeTab === 'account' && (
            <Card>
              <CardHeader>
                <CardTitle>Account Details</CardTitle>
                <CardDescription>Manage your registered email and regional preferences.</CardDescription>
              </CardHeader>
              <CardContent style={{ display: 'flex', flexDirection: 'column', gap: '16px' }}>
                <Input 
                  label="Email Address" 
                  value={profileData.email}
                  disabled
                />
                <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '16px' }}>
                  <div>
                    <label style={{ fontSize: '0.875rem', fontWeight: 500, display: 'block', marginBottom: '6px' }}>Primary Language</label>
                    <select style={{ width: '100%', padding: '10px', borderRadius: '8px', border: '1px solid var(--color-border)', backgroundColor: '#ffffff' }}>
                      <option>English (India)</option>
                      <option>Hindi</option>
                      <option>Kannada</option>
                      <option>Tamil</option>
                    </select>
                  </div>
                  <div>
                    <label style={{ fontSize: '0.875rem', fontWeight: 500, display: 'block', marginBottom: '6px' }}>Timezone</label>
                    <select style={{ width: '100%', padding: '10px', borderRadius: '8px', border: '1px solid var(--color-border)', backgroundColor: '#ffffff' }}>
                      <option>(GMT+05:30) India Standard Time (IST)</option>
                    </select>
                  </div>
                </div>
                <Button style={{ alignSelf: 'start', marginTop: '8px' }} onClick={() => showToast('Account preferences saved!')}>
                  Update Preferences
                </Button>
              </CardContent>
            </Card>
          )}

          {/* TAB 3: SECURITY & 2FA */}
          {activeTab === 'security' && (
            <div style={{ display: 'flex', flexDirection: 'column', gap: '20px' }}>
              <Card>
                <CardHeader>
                  <CardTitle>Change Password</CardTitle>
                  <CardDescription>Ensure your account is using a long, unique password.</CardDescription>
                </CardHeader>
                <CardContent>
                  <form onSubmit={handleSecuritySave} style={{ display: 'flex', flexDirection: 'column', gap: '14px' }}>
                    <Input 
                      label="Current Password" 
                      type="password"
                      value={securityData.currentPassword}
                      onChange={(e) => setSecurityData({ ...securityData, currentPassword: e.target.value })}
                      required
                    />
                    <Input 
                      label="New Password" 
                      type="password"
                      value={securityData.newPassword}
                      onChange={(e) => setSecurityData({ ...securityData, newPassword: e.target.value })}
                      required
                    />
                    <Input 
                      label="Confirm New Password" 
                      type="password"
                      value={securityData.confirmPassword}
                      onChange={(e) => setSecurityData({ ...securityData, confirmPassword: e.target.value })}
                      required
                    />
                    <Button type="submit" style={{ alignSelf: 'start' }}>
                      Update Password
                    </Button>
                  </form>
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <CardTitle>Two-Factor Authentication (2FA)</CardTitle>
                  <CardDescription>Add an extra layer of security to your account.</CardDescription>
                </CardHeader>
                <CardContent>
                  <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', padding: '14px', border: '1px solid var(--color-border)', borderRadius: '8px' }}>
                    <div>
                      <p style={{ fontWeight: 600, margin: 0, fontSize: '0.9375rem' }}>Authenticator App 2FA</p>
                      <p style={{ fontSize: '0.75rem', color: 'var(--color-text-muted)', margin: '4px 0 0' }}>Use Google Authenticator or Authy for one-time passcodes.</p>
                    </div>
                    <Button 
                      variant={securityData.enable2FA ? 'secondary' : 'primary'} 
                      size="sm"
                      onClick={() => {
                        setSecurityData(prev => ({ ...prev, enable2FA: !prev.enable2FA }));
                        showToast(securityData.enable2FA ? '2FA Disabled' : '2FA Enabled!');
                      }}
                    >
                      {securityData.enable2FA ? 'Disable 2FA' : 'Enable 2FA'}
                    </Button>
                  </div>
                </CardContent>
              </Card>

              {/* Active Sessions */}
              <Card>
                <CardHeader>
                  <CardTitle>Active Sessions</CardTitle>
                  <CardDescription>Devices currently logged into your account.</CardDescription>
                </CardHeader>
                <CardContent style={{ display: 'flex', flexDirection: 'column', gap: '12px' }}>
                  <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', padding: '12px', backgroundColor: 'var(--color-bg-subtle)', borderRadius: '8px' }}>
                    <div style={{ display: 'flex', alignItems: 'center', gap: '12px' }}>
                      <Laptop size={20} style={{ color: 'var(--color-primary)' }} />
                      <div>
                        <p style={{ fontWeight: 600, fontSize: '0.875rem', margin: 0 }}>Chrome on Windows (Current Session)</p>
                        <p style={{ fontSize: '0.75rem', color: 'var(--color-text-muted)', margin: 0 }}>Bengaluru, India • Active Now</p>
                      </div>
                    </div>
                    <span style={{ fontSize: '0.75rem', backgroundColor: '#dcfce7', color: '#166534', padding: '2px 8px', borderRadius: '9999px', fontWeight: 600 }}>Active</span>
                  </div>
                </CardContent>
              </Card>
            </div>
          )}

          {/* TAB 4: NOTIFICATIONS */}
          {activeTab === 'notifications' && (
            <Card>
              <CardHeader>
                <CardTitle>Notification Preferences</CardTitle>
                <CardDescription>Choose how you want to be notified about bookings and messages.</CardDescription>
              </CardHeader>
              <CardContent style={{ display: 'flex', flexDirection: 'column', gap: '16px' }}>
                {[
                  { key: 'emailBookings', label: 'Email Notifications for Bookings', desc: 'Receive emails when residents book your service or cancel.' },
                  { key: 'pushMessages', label: 'In-App Push Alerts', desc: 'Get real-time browser notifications for updates.' },
                  { key: 'smsAlerts', label: 'SMS Instant Alerts', desc: 'Receive critical booking confirmations via SMS.' },
                  { key: 'emailPromos', label: 'Community News & Tips', desc: 'Receive monthly newsletters and skill tips.' },
                ].map((item) => (
                  <div key={item.key} style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', padding: '12px 0', borderBottom: '1px solid var(--color-border)' }}>
                    <div>
                      <p style={{ fontWeight: 600, fontSize: '0.875rem', margin: 0 }}>{item.label}</p>
                      <p style={{ fontSize: '0.75rem', color: 'var(--color-text-muted)', margin: '2px 0 0' }}>{item.desc}</p>
                    </div>
                    <input 
                      type="checkbox"
                      checked={(notifications as any)[item.key]}
                      onChange={(e) => {
                        setNotifications({ ...notifications, [item.key]: e.target.checked });
                        showToast('Notification preference saved!');
                      }}
                      style={{ width: '18px', height: '18px', cursor: 'pointer' }}
                    />
                  </div>
                ))}
              </CardContent>
            </Card>
          )}

          {/* TAB 5: APPEARANCE */}
          {activeTab === 'appearance' && (
            <Card>
              <CardHeader>
                <CardTitle>Appearance & Theme</CardTitle>
                <CardDescription>Customize the visual layout of your interface.</CardDescription>
              </CardHeader>
              <CardContent style={{ display: 'flex', flexDirection: 'column', gap: '20px' }}>
                <div>
                  <label style={{ fontSize: '0.875rem', fontWeight: 600, display: 'block', marginBottom: '10px' }}>Interface Theme</label>
                  <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: '12px' }}>
                    {[
                      { id: 'light', name: 'Light Mode' },
                      { id: 'dark', name: 'Dark Mode' },
                      { id: 'system', name: 'System Default' },
                    ].map((t) => (
                      <button
                        key={t.id}
                        type="button"
                        onClick={() => {
                          setAppearance(prev => ({ ...prev, theme: t.id }));
                          try { localStorage.setItem('appearance_theme', t.id); } catch(e) {}
                          showToast(`Theme set to ${t.name}`);
                        }}
                        style={{
                          padding: '16px',
                          borderRadius: '8px',
                          border: appearance.theme === t.id ? '2px solid var(--color-primary)' : '1px solid var(--color-border)',
                          backgroundColor: appearance.theme === t.id ? 'var(--color-bg-subtle)' : '#ffffff',
                          fontWeight: 600,
                          fontSize: '0.875rem',
                          cursor: 'pointer'
                        }}
                      >
                        {t.name}
                      </button>
                    ))}
                  </div>
                </div>
              </CardContent>
            </Card>
          )}

          {/* TAB 6: PRIVACY */}
          {activeTab === 'privacy' && (
            <Card>
              <CardHeader>
                <CardTitle>Privacy Controls</CardTitle>
                <CardDescription>Control your data visibility and sharing options.</CardDescription>
              </CardHeader>
              <CardContent style={{ display: 'flex', flexDirection: 'column', gap: '16px' }}>
                <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', padding: '12px 0', borderBottom: '1px solid var(--color-border)' }}>
                  <div>
                    <p style={{ fontWeight: 600, fontSize: '0.875rem', margin: 0 }}>Search Engine Indexing</p>
                    <p style={{ fontSize: '0.75rem', color: 'var(--color-text-muted)', margin: '2px 0 0' }}>Allow Google to index your public listing pages.</p>
                  </div>
                  <input 
                    type="checkbox"
                    checked={privacy.searchIndexing}
                    onChange={(e) => setPrivacy({ ...privacy, searchIndexing: e.target.checked })}
                    style={{ width: '18px', height: '18px' }}
                  />
                </div>
              </CardContent>
            </Card>
          )}

          {/* TAB 7: CONNECTED ACCOUNTS */}
          {activeTab === 'connected' && (
            <Card>
              <CardHeader>
                <CardTitle>Connected Accounts</CardTitle>
                <CardDescription>Link third-party accounts for easy single sign-on.</CardDescription>
              </CardHeader>
              <CardContent style={{ display: 'flex', flexDirection: 'column', gap: '16px' }}>
                {[
                  { name: 'Google', desc: 'Connected as ' + (user?.email || 'user@gmail.com'), connected: true },
                  { name: 'GitHub', desc: 'Connect your developer profile', connected: false },
                  { name: 'Discord', desc: 'Connect for instant community chat', connected: false },
                ].map((acc) => (
                  <div key={acc.name} style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', padding: '14px', border: '1px solid var(--color-border)', borderRadius: '8px' }}>
                    <div>
                      <p style={{ fontWeight: 600, margin: 0, fontSize: '0.9375rem' }}>{acc.name}</p>
                      <p style={{ fontSize: '0.75rem', color: 'var(--color-text-muted)', margin: '2px 0 0' }}>{acc.desc}</p>
                    </div>
                    <Button 
                      variant={acc.connected ? 'secondary' : 'primary'} 
                      size="sm"
                      onClick={() => showToast(acc.connected ? `${acc.name} Disconnected` : `${acc.name} Connected!`)}
                    >
                      {acc.connected ? 'Disconnect' : 'Connect'}
                    </Button>
                  </div>
                ))}
              </CardContent>
            </Card>
          )}

          {/* TAB 8: BILLING */}
          {activeTab === 'billing' && (
            <Card>
              <CardHeader>
                <CardTitle>Billing & Plan</CardTitle>
                <CardDescription>View your current subscription tier and transaction records.</CardDescription>
              </CardHeader>
              <CardContent style={{ display: 'flex', flexDirection: 'column', gap: '20px' }}>
                <div style={{ padding: '16px', backgroundColor: 'var(--color-bg-subtle)', borderRadius: '8px', display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                  <div>
                    <span style={{ fontSize: '0.75rem', fontWeight: 700, backgroundColor: 'var(--color-primary)', color: '#ffffff', padding: '2px 8px', borderRadius: '9999px', textTransform: 'uppercase' }}>Current Plan</span>
                    <h3 style={{ fontSize: '1.25rem', fontWeight: 700, margin: '8px 0 2px' }}>Resident Pioneer Plan</h3>
                    <p style={{ fontSize: '0.875rem', color: 'var(--color-text-muted)', margin: 0 }}>Unlimited listing creation & zero platform commission fees.</p>
                  </div>
                </div>
              </CardContent>
            </Card>
          )}

          {/* TAB 9: SUPPORT */}
          {activeTab === 'support' && (
            <Card>
              <CardHeader>
                <CardTitle>Support & Help</CardTitle>
                <CardDescription>Need help with a booking or listing? We are here for you.</CardDescription>
              </CardHeader>
              <CardContent style={{ display: 'flex', flexDirection: 'column', gap: '14px' }}>
                <Button variant="secondary" onClick={() => showToast('Opening Help Desk...')}>
                  Visit Community Knowledge Base
                </Button>
                <Button onClick={() => showToast('Support ticket form opened!')}>
                  Submit a Support Ticket
                </Button>
              </CardContent>
            </Card>
          )}

          {/* TAB 10: DANGER ZONE */}
          {activeTab === 'danger' && (
            <Card style={{ borderColor: '#fca5a5' }}>
              <CardHeader>
                <CardTitle style={{ color: '#dc2626' }}>Danger Zone</CardTitle>
                <CardDescription>Irreversible actions regarding your account data.</CardDescription>
              </CardHeader>
              <CardContent style={{ display: 'flex', flexDirection: 'column', gap: '16px' }}>
                <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', padding: '14px', border: '1px solid #fecaca', borderRadius: '8px', backgroundColor: '#fef2f2' }}>
                  <div>
                    <p style={{ fontWeight: 600, margin: 0, color: '#991b1b' }}>Deactivate Account</p>
                    <p style={{ fontSize: '0.75rem', color: '#b91c1c', margin: '2px 0 0' }}>Temporarily hide your profile and listings.</p>
                  </div>
                  <Button variant="secondary" size="sm" onClick={() => showToast('Account deactivated temporarily.')}>
                    Deactivate
                  </Button>
                </div>

                <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', padding: '14px', border: '1px solid #fecaca', borderRadius: '8px', backgroundColor: '#fef2f2' }}>
                  <div>
                    <p style={{ fontWeight: 600, margin: 0, color: '#991b1b' }}>Delete Account</p>
                    <p style={{ fontSize: '0.75rem', color: '#b91c1c', margin: '2px 0 0' }}>Permanently remove all your profile data and listings.</p>
                  </div>
                  <Button 
                    size="sm" 
                    style={{ backgroundColor: '#dc2626', color: '#ffffff' }}
                    onClick={() => setDeleteModalOpen(true)}
                  >
                    Delete Account
                  </Button>
                </div>
              </CardContent>
            </Card>
          )}
        </div>
      </div>

      {/* Confirmation Modal for Delete Account */}
      {deleteModalOpen && (
        <div style={{
          position: 'fixed',
          top: 0,
          left: 0,
          right: 0,
          bottom: 0,
          backgroundColor: 'rgba(0, 0, 0, 0.5)',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          zIndex: 2000,
          padding: '16px'
        }}>
          <div style={{
            backgroundColor: '#ffffff',
            borderRadius: '12px',
            maxWidth: '450px',
            width: '100%',
            padding: '24px',
            boxShadow: '0 20px 25px -5px rgba(0,0,0,0.2)'
          }}>
            <h3 style={{ fontSize: '1.25rem', fontWeight: 700, color: '#dc2626', marginBottom: '8px' }}>
              Confirm Account Deletion
            </h3>
            <p style={{ fontSize: '0.875rem', color: 'var(--color-text-muted)', marginBottom: '20px', lineHeight: 1.5 }}>
              Are you sure you want to delete your account? This action is permanent and cannot be undone. All your listings and booking history will be erased.
            </p>
            <div style={{ display: 'flex', gap: '12px', justifyContent: 'flex-end' }}>
              <Button variant="ghost" onClick={() => setDeleteModalOpen(false)}>
                Cancel
              </Button>
              <Button 
                style={{ backgroundColor: '#dc2626', color: '#ffffff' }}
                onClick={() => {
                  setDeleteModalOpen(false);
                  logout();
                }}
              >
                Yes, Delete My Account
              </Button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}

function ChevronDownRotate() {
  return <ChevronRight size={16} style={{ color: 'var(--color-text-muted)' }} />;
}
