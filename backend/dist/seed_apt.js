"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const client_1 = require("@prisma/client");
const prisma = new client_1.PrismaClient();
async function main() {
    console.log('Checking for existing apartment...');
    const existing = await prisma.apartments.findFirst({
        where: {
            name: {
                contains: 'Marvel',
                mode: 'insensitive'
            }
        }
    });
    if (existing) {
        console.log('Apartment already exists:', existing);
        return;
    }
    const apt = await prisma.apartments.create({
        data: {
            name: 'BM Marvel',
            address_line1: 'BM Marvel',
            city: 'Bangalore',
            state: 'Karnataka',
            postal_code: '560001',
        },
    });
    console.log('Successfully created apartment:', apt);
}
main()
    .catch((e) => {
    console.error(e);
    process.exit(1);
})
    .finally(async () => {
    await prisma.$disconnect();
});
//# sourceMappingURL=seed_apt.js.map