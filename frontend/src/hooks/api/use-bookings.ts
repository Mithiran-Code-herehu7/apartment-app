import { useQuery, useMutation, useQueryClient } from '@tanstack/react-query';
import { api } from '@/lib/api';

export interface Booking {
  id: string;
  listing_id: string;
  learner_id: string;
  provider_id: string;
  status: string;
  total_price: number;
  message?: string;
  created_at: string;
  listings?: {
    title: string;
  };
}

export function useResidentBookings() {
  return useQuery({
    queryKey: ['bookings', 'resident'],
    queryFn: async () => {
      // Endpoint is /bookings/my-learning for the learner
      const { data } = await api.get('/bookings/my-learning');
      return data as Booking[];
    },
  });
}

export function useProviderBookings() {
  return useQuery({
    queryKey: ['bookings', 'provider'],
    queryFn: async () => {
      // If backend has a specific endpoint for provider bookings
      const { data } = await api.get('/bookings/provider');
      return data as Booking[];
    },
  });
}

export function useRequestBooking() {
  const queryClient = useQueryClient();
  
  return useMutation({
    mutationFn: async (bookingData: Partial<Booking>) => {
      const { data } = await api.post('/bookings', bookingData);
      return data;
    },
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ['bookings'] });
    },
  });
}
