import { useQuery, useMutation, useQueryClient } from '@tanstack/react-query';
import { api } from '@/lib/api';

export interface Listing {
  id: string;
  provider_id: string;
  apartment_id: string;
  title: string;
  description: string;
  category: string;
  status: string;
  price?: number;
  pricing_plans?: {
    id?: string;
    title?: string;
    name?: string;
    price_amount: number;
    duration_minutes?: number;
  }[];
  availability_slots?: {
    id?: string;
    day_of_week: string | number;
    start_time: string;
    end_time: string;
  }[];
}

export function useListings(params?: Record<string, any>) {
  return useQuery({
    queryKey: ['listings', params],
    queryFn: async () => {
      const { data } = await api.get('/listings', { params });
      return data as Listing[];
    },
  });
}

export function useListing(id: string) {
  return useQuery({
    queryKey: ['listings', id],
    queryFn: async () => {
      const { data } = await api.get(`/listings/${id}`);
      return data as Listing;
    },
    enabled: !!id,
  });
}

export function useCreateListing() {
  const queryClient = useQueryClient();
  
  return useMutation({
    mutationFn: async (newListing: Partial<Listing>) => {
      const { data } = await api.post('/listings', newListing);
      return data;
    },
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ['listings'] });
    },
  });
}
