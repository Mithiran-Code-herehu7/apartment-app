import * as dotenv from 'dotenv';
dotenv.config();
import { PrismaClient } from '@prisma/client';

const prisma = new PrismaClient();

async function test() {
  try {
    const provider = await prisma.users.findFirst({ where: { status: 'verified' } });
    const category = await prisma.categories.findFirst();
    
    if (!provider || !category) {
      console.log('No provider or category found');
      return;
    }

    console.log('Testing create for provider', provider.id);
    const listing = await prisma.listings.create({
      data: {
        provider_id: provider.id,
        apartment_id: provider.apartment_id,
        category_id: category.id,
        title: 'Test Listing',
        slug: 'test-listing-' + Date.now(),
        description: 'Test description',
        tags: [],
        status: 'approved',
        pricing_plans: {
          create: [{
            name: 'Standard Plan',
            description: 'Default standard pricing',
            price_amount: 500,
            currency: 'INR',
            pricing_type: 'one_time'
          }]
        },
        availability_slots: {
          create: [{
            day_of_week: 'monday',
            start_time: new Date('1970-01-01T10:00:00Z'),
            end_time: new Date('1970-01-01T11:00:00Z'),
            max_capacity: 1,
            slot_type: 'recurring'
          }]
        }
      }
    });
    console.log('Success!', listing.id);
  } catch (error) {
    console.error('Failed!', error);
  } finally {
    await prisma.$disconnect();
  }
}

test();
