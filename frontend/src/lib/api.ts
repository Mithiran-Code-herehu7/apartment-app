import axios from 'axios';

// The base URL is now just the relative path. 
// Next.js Rewrites (in next.config.ts) will proxy these requests 
// securely to the backend to completely bypass CORS and third-party Cookie restrictions!
export const API_BASE_URL = '/api/v1';

export const api = axios.create({
  baseURL: API_BASE_URL,
  withCredentials: true, // Crucial for sending and receiving HttpOnly cookies
  headers: {
    'Content-Type': 'application/json',
  },
});

// We no longer attach the token manually via request interceptor
// because the browser will automatically send the HttpOnly cookie.

// Response interceptor to handle 401s
api.interceptors.response.use(
  (response) => response,
  (error) => {
    if (error.response?.status === 401) {
      // If unauthorized, redirect to login
      if (typeof window !== 'undefined' && !window.location.pathname.includes('/login')) {
        window.location.href = '/login';
      }
    }
    return Promise.reject(error);
  }
);
