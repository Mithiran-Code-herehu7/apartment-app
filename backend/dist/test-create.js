"use strict";
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    var desc = Object.getOwnPropertyDescriptor(m, k);
    if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) {
      desc = { enumerable: true, get: function() { return m[k]; } };
    }
    Object.defineProperty(o, k2, desc);
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __importStar = (this && this.__importStar) || (function () {
    var ownKeys = function(o) {
        ownKeys = Object.getOwnPropertyNames || function (o) {
            var ar = [];
            for (var k in o) if (Object.prototype.hasOwnProperty.call(o, k)) ar[ar.length] = k;
            return ar;
        };
        return ownKeys(o);
    };
    return function (mod) {
        if (mod && mod.__esModule) return mod;
        var result = {};
        if (mod != null) for (var k = ownKeys(mod), i = 0; i < k.length; i++) if (k[i] !== "default") __createBinding(result, mod, k[i]);
        __setModuleDefault(result, mod);
        return result;
    };
})();
Object.defineProperty(exports, "__esModule", { value: true });
const dotenv = __importStar(require("dotenv"));
dotenv.config();
const client_1 = require("@prisma/client");
const prisma = new client_1.PrismaClient();
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
    }
    catch (error) {
        console.error('Failed!', error);
    }
    finally {
        await prisma.$disconnect();
    }
}
test();
//# sourceMappingURL=test-create.js.map