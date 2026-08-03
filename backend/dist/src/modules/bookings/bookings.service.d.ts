import { PrismaService } from '../../infrastructure/database/prisma/prisma.service';
import { CreateBookingDto } from './dto/create-booking.dto';
import { UpdateBookingStatusDto } from './dto/update-booking-status.dto';
export declare class BookingsService {
    private readonly prisma;
    constructor(prisma: PrismaService);
    create(learnerId: string, createBookingDto: CreateBookingDto): Promise<{
        id: string;
        created_at: Date;
        updated_at: Date;
        status: import("@prisma/client").$Enums.booking_status;
        deleted_at: Date | null;
        provider_id: string;
        listing_id: string;
        learner_id: string;
        slot_id: string;
        pricing_plan_id: string;
        session_start: Date;
        session_end: Date;
        cancelled_at: Date | null;
        cancellation_party: import("@prisma/client").$Enums.cancellation_party | null;
        cancellation_reason: string | null;
        learner_notes: string | null;
        provider_notes: string | null;
    }>;
    findByLearner(learnerId: string): Promise<({
        listings: {
            id: string;
            title: string;
        };
        users_bookings_provider_idTousers: {
            user_profiles: {
                display_name: string;
            } | null;
        };
    } & {
        id: string;
        created_at: Date;
        updated_at: Date;
        status: import("@prisma/client").$Enums.booking_status;
        deleted_at: Date | null;
        provider_id: string;
        listing_id: string;
        learner_id: string;
        slot_id: string;
        pricing_plan_id: string;
        session_start: Date;
        session_end: Date;
        cancelled_at: Date | null;
        cancellation_party: import("@prisma/client").$Enums.cancellation_party | null;
        cancellation_reason: string | null;
        learner_notes: string | null;
        provider_notes: string | null;
    })[]>;
    findByProvider(providerId: string): Promise<({
        listings: {
            id: string;
            title: string;
        };
        users_bookings_learner_idTousers: {
            user_profiles: {
                display_name: string;
            } | null;
        };
    } & {
        id: string;
        created_at: Date;
        updated_at: Date;
        status: import("@prisma/client").$Enums.booking_status;
        deleted_at: Date | null;
        provider_id: string;
        listing_id: string;
        learner_id: string;
        slot_id: string;
        pricing_plan_id: string;
        session_start: Date;
        session_end: Date;
        cancelled_at: Date | null;
        cancellation_party: import("@prisma/client").$Enums.cancellation_party | null;
        cancellation_reason: string | null;
        learner_notes: string | null;
        provider_notes: string | null;
    })[]>;
    updateStatus(bookingId: string, userId: string, updateDto: UpdateBookingStatusDto): Promise<{
        id: string;
        created_at: Date;
        updated_at: Date;
        status: import("@prisma/client").$Enums.booking_status;
        deleted_at: Date | null;
        provider_id: string;
        listing_id: string;
        learner_id: string;
        slot_id: string;
        pricing_plan_id: string;
        session_start: Date;
        session_end: Date;
        cancelled_at: Date | null;
        cancellation_party: import("@prisma/client").$Enums.cancellation_party | null;
        cancellation_reason: string | null;
        learner_notes: string | null;
        provider_notes: string | null;
    }>;
}
