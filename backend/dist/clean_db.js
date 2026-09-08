"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const client_1 = require("@prisma/client");
const pg_1 = require("pg");
const adapter_pg_1 = require("@prisma/adapter-pg");
require("dotenv/config");
const connectionString = process.env.DATABASE_URL || 'postgresql://postgres:postgres@localhost:5432/apartmentskills?schema=public';
const pool = new pg_1.Pool({ connectionString });
const adapter = new adapter_pg_1.PrismaPg(pool);
const prisma = new client_1.PrismaClient({ adapter });
async function main() {
    console.log('Cleaning up database (deleting users, listings, bookings, payments, etc.)...');
    await prisma.reviews.deleteMany({});
    await prisma.dispute_messages.deleteMany({});
    await prisma.disputes.deleteMany({});
    await prisma.payout_payment_items.deleteMany({});
    await prisma.payout_tracking.deleteMany({});
    await prisma.payments.deleteMany({});
    await prisma.messages.deleteMany({});
    await prisma.notifications.deleteMany({});
    await prisma.bookings.deleteMany({});
    await prisma.availability_slots.deleteMany({});
    await prisma.pricing_plans.deleteMany({});
    await prisma.listing_media.deleteMany({});
    await prisma.listings.deleteMany({});
    await prisma.apartment_invites.deleteMany({});
    await prisma.admin_actions.deleteMany({});
    await prisma.user_profiles.deleteMany({});
    await prisma.user_roles.deleteMany({});
    await prisma.users.deleteMany({});
    console.log('All previous users, logins, listings, bookings, and payments deleted successfully.');
    const count = await prisma.categories.count();
    if (count === 0) {
        console.log('Seeding default categories...');
        await prisma.categories.createMany({
            data: [
                { name: 'Fitness & Wellness', slug: 'fitness-wellness', description: 'Yoga, personal training, sports & meditation', display_order: 1 },
                { name: 'Tutoring & Education', slug: 'tutoring-education', description: 'Academic tutoring, languages & test prep', display_order: 2 },
                { name: 'Music & Performing Arts', slug: 'music-arts', description: 'Instrument lessons, singing & dance', display_order: 3 },
                { name: 'Technology & Coding', slug: 'tech-coding', description: 'Software engineering, design & tech support', display_order: 4 },
                { name: 'Cooking & Culinary', slug: 'cooking-culinary', description: 'Baking, cooking classes & meal prep', display_order: 5 },
                { name: 'Home & Lifestyle', slug: 'home-lifestyle', description: 'Gardening, home organization & pet care', display_order: 6 },
            ],
        });
        console.log('Default categories seeded successfully.');
    }
    console.log('Database clean-up complete!');
}
main()
    .catch((e) => {
    console.error('Error during DB cleanup:', e);
    process.exit(1);
})
    .finally(async () => {
    await prisma.$disconnect();
    await pool.end();
});
//# sourceMappingURL=clean_db.js.map