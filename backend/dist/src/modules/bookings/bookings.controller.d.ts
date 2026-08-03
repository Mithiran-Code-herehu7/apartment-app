import { BookingsService } from './bookings.service';
import { CreateBookingDto } from './dto/create-booking.dto';
import { UpdateBookingStatusDto } from './dto/update-booking-status.dto';
export declare class BookingsController {
    private readonly bookingsService;
    constructor(bookingsService: BookingsService);
    create(user: any, createBookingDto: CreateBookingDto): Promise<{
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
    getLearnerBookings(user: any): Promise<({
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
    getProviderBookings(user: any): Promise<({
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
    updateStatus(id: string, user: any, updateBookingStatusDto: UpdateBookingStatusDto): Promise<{
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
