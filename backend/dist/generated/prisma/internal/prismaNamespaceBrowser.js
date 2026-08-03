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
exports.NullsOrder = exports.JsonNullValueFilter = exports.QueryMode = exports.NullableJsonNullValueInput = exports.SortOrder = exports.UsersScalarFieldEnum = exports.User_rolesScalarFieldEnum = exports.User_profilesScalarFieldEnum = exports.ReviewsScalarFieldEnum = exports.Pricing_plansScalarFieldEnum = exports.Payout_trackingScalarFieldEnum = exports.Payout_payment_itemsScalarFieldEnum = exports.PaymentsScalarFieldEnum = exports.NotificationsScalarFieldEnum = exports.Notification_templatesScalarFieldEnum = exports.MessagesScalarFieldEnum = exports.ListingsScalarFieldEnum = exports.Listing_mediaScalarFieldEnum = exports.DisputesScalarFieldEnum = exports.Dispute_messagesScalarFieldEnum = exports.CategoriesScalarFieldEnum = exports.BookingsScalarFieldEnum = exports.Availability_slotsScalarFieldEnum = exports.ApartmentsScalarFieldEnum = exports.Apartment_invitesScalarFieldEnum = exports.Admin_actionsScalarFieldEnum = exports.TransactionIsolationLevel = exports.ModelName = exports.AnyNull = exports.JsonNull = exports.DbNull = exports.NullTypes = exports.Decimal = void 0;
const runtime = __importStar(require("@prisma/client/runtime/index-browser"));
exports.Decimal = runtime.Decimal;
exports.NullTypes = {
    DbNull: runtime.NullTypes.DbNull,
    JsonNull: runtime.NullTypes.JsonNull,
    AnyNull: runtime.NullTypes.AnyNull,
};
exports.DbNull = runtime.DbNull;
exports.JsonNull = runtime.JsonNull;
exports.AnyNull = runtime.AnyNull;
exports.ModelName = {
    admin_actions: 'admin_actions',
    apartment_invites: 'apartment_invites',
    apartments: 'apartments',
    availability_slots: 'availability_slots',
    bookings: 'bookings',
    categories: 'categories',
    dispute_messages: 'dispute_messages',
    disputes: 'disputes',
    listing_media: 'listing_media',
    listings: 'listings',
    messages: 'messages',
    notification_templates: 'notification_templates',
    notifications: 'notifications',
    payments: 'payments',
    payout_payment_items: 'payout_payment_items',
    payout_tracking: 'payout_tracking',
    pricing_plans: 'pricing_plans',
    reviews: 'reviews',
    user_profiles: 'user_profiles',
    user_roles: 'user_roles',
    users: 'users'
};
exports.TransactionIsolationLevel = runtime.makeStrictEnum({
    ReadUncommitted: 'ReadUncommitted',
    ReadCommitted: 'ReadCommitted',
    RepeatableRead: 'RepeatableRead',
    Serializable: 'Serializable'
});
exports.Admin_actionsScalarFieldEnum = {
    id: 'id',
    admin_id: 'admin_id',
    action_type: 'action_type',
    target_type: 'target_type',
    target_id: 'target_id',
    notes: 'notes',
    metadata: 'metadata',
    apartment_id: 'apartment_id',
    created_at: 'created_at'
};
exports.Apartment_invitesScalarFieldEnum = {
    id: 'id',
    apartment_id: 'apartment_id',
    invited_email: 'invited_email',
    token: 'token',
    token_expires_at: 'token_expires_at',
    unit_number: 'unit_number',
    status: 'status',
    invited_by: 'invited_by',
    used_by: 'used_by',
    notes: 'notes',
    created_at: 'created_at',
    updated_at: 'updated_at'
};
exports.ApartmentsScalarFieldEnum = {
    id: 'id',
    name: 'name',
    address_line1: 'address_line1',
    address_line2: 'address_line2',
    city: 'city',
    state: 'state',
    country: 'country',
    postal_code: 'postal_code',
    total_units: 'total_units',
    admin_contact_email: 'admin_contact_email',
    is_active: 'is_active',
    created_at: 'created_at',
    updated_at: 'updated_at'
};
exports.Availability_slotsScalarFieldEnum = {
    id: 'id',
    listing_id: 'listing_id',
    slot_type: 'slot_type',
    start_datetime: 'start_datetime',
    end_datetime: 'end_datetime',
    day_of_week: 'day_of_week',
    start_time: 'start_time',
    end_time: 'end_time',
    recurrence_start: 'recurrence_start',
    recurrence_end: 'recurrence_end',
    timezone: 'timezone',
    max_capacity: 'max_capacity',
    notes: 'notes',
    is_active: 'is_active',
    created_at: 'created_at',
    updated_at: 'updated_at'
};
exports.BookingsScalarFieldEnum = {
    id: 'id',
    learner_id: 'learner_id',
    listing_id: 'listing_id',
    slot_id: 'slot_id',
    pricing_plan_id: 'pricing_plan_id',
    provider_id: 'provider_id',
    status: 'status',
    session_start: 'session_start',
    session_end: 'session_end',
    cancelled_at: 'cancelled_at',
    cancellation_party: 'cancellation_party',
    cancellation_reason: 'cancellation_reason',
    learner_notes: 'learner_notes',
    provider_notes: 'provider_notes',
    deleted_at: 'deleted_at',
    created_at: 'created_at',
    updated_at: 'updated_at'
};
exports.CategoriesScalarFieldEnum = {
    id: 'id',
    parent_id: 'parent_id',
    name: 'name',
    slug: 'slug',
    description: 'description',
    icon_url: 'icon_url',
    display_order: 'display_order',
    is_active: 'is_active',
    created_at: 'created_at',
    updated_at: 'updated_at'
};
exports.Dispute_messagesScalarFieldEnum = {
    id: 'id',
    dispute_id: 'dispute_id',
    sender_id: 'sender_id',
    body: 'body',
    is_internal: 'is_internal',
    created_at: 'created_at'
};
exports.DisputesScalarFieldEnum = {
    id: 'id',
    booking_id: 'booking_id',
    filed_by: 'filed_by',
    against_user_id: 'against_user_id',
    apartment_id: 'apartment_id',
    subject: 'subject',
    description: 'description',
    evidence_urls: 'evidence_urls',
    status: 'status',
    assigned_to: 'assigned_to',
    resolution: 'resolution',
    resolution_notes: 'resolution_notes',
    resolved_at: 'resolved_at',
    created_at: 'created_at',
    updated_at: 'updated_at'
};
exports.Listing_mediaScalarFieldEnum = {
    id: 'id',
    listing_id: 'listing_id',
    media_url: 'media_url',
    media_type: 'media_type',
    display_order: 'display_order',
    alt_text: 'alt_text',
    created_at: 'created_at'
};
exports.ListingsScalarFieldEnum = {
    id: 'id',
    provider_id: 'provider_id',
    apartment_id: 'apartment_id',
    category_id: 'category_id',
    title: 'title',
    slug: 'slug',
    description: 'description',
    mode: 'mode',
    location_details: 'location_details',
    age_group: 'age_group',
    max_capacity: 'max_capacity',
    prerequisites: 'prerequisites',
    tags: 'tags',
    status: 'status',
    is_featured: 'is_featured',
    rejection_reason: 'rejection_reason',
    deleted_at: 'deleted_at',
    created_at: 'created_at',
    updated_at: 'updated_at'
};
exports.MessagesScalarFieldEnum = {
    id: 'id',
    booking_id: 'booking_id',
    sender_id: 'sender_id',
    recipient_id: 'recipient_id',
    body: 'body',
    is_read: 'is_read',
    read_at: 'read_at',
    deleted_at: 'deleted_at',
    created_at: 'created_at'
};
exports.Notification_templatesScalarFieldEnum = {
    id: 'id',
    event_key: 'event_key',
    channel: 'channel',
    subject: 'subject',
    body_template: 'body_template',
    is_active: 'is_active',
    created_at: 'created_at',
    updated_at: 'updated_at'
};
exports.NotificationsScalarFieldEnum = {
    id: 'id',
    user_id: 'user_id',
    apartment_id: 'apartment_id',
    channel: 'channel',
    status: 'status',
    event_key: 'event_key',
    title: 'title',
    body: 'body',
    reference_type: 'reference_type',
    reference_id: 'reference_id',
    sent_at: 'sent_at',
    read_at: 'read_at',
    failed_reason: 'failed_reason',
    retry_count: 'retry_count',
    created_at: 'created_at',
    updated_at: 'updated_at'
};
exports.PaymentsScalarFieldEnum = {
    id: 'id',
    booking_id: 'booking_id',
    payer_id: 'payer_id',
    payee_id: 'payee_id',
    amount: 'amount',
    currency: 'currency',
    platform_fee: 'platform_fee',
    provider_amount: 'provider_amount',
    tax_amount: 'tax_amount',
    payment_method: 'payment_method',
    status: 'status',
    gateway_name: 'gateway_name',
    gateway_order_id: 'gateway_order_id',
    gateway_payment_id: 'gateway_payment_id',
    gateway_signature: 'gateway_signature',
    gateway_raw_response: 'gateway_raw_response',
    gateway_fee: 'gateway_fee',
    refunded_amount: 'refunded_amount',
    refund_reason: 'refund_reason',
    refunded_at: 'refunded_at',
    initiated_at: 'initiated_at',
    succeeded_at: 'succeeded_at',
    failed_at: 'failed_at',
    created_at: 'created_at',
    updated_at: 'updated_at'
};
exports.Payout_payment_itemsScalarFieldEnum = {
    id: 'id',
    payout_id: 'payout_id',
    payment_id: 'payment_id',
    amount: 'amount'
};
exports.Payout_trackingScalarFieldEnum = {
    id: 'id',
    provider_id: 'provider_id',
    apartment_id: 'apartment_id',
    period_start: 'period_start',
    period_end: 'period_end',
    gross_amount: 'gross_amount',
    platform_fees_total: 'platform_fees_total',
    net_amount: 'net_amount',
    currency: 'currency',
    status: 'status',
    bank_reference: 'bank_reference',
    payout_method: 'payout_method',
    notes: 'notes',
    processed_by: 'processed_by',
    processed_at: 'processed_at',
    created_at: 'created_at',
    updated_at: 'updated_at'
};
exports.Pricing_plansScalarFieldEnum = {
    id: 'id',
    listing_id: 'listing_id',
    name: 'name',
    pricing_type: 'pricing_type',
    billing_cycle: 'billing_cycle',
    price_amount: 'price_amount',
    currency: 'currency',
    sessions_included: 'sessions_included',
    validity_days: 'validity_days',
    description: 'description',
    is_active: 'is_active',
    created_at: 'created_at',
    updated_at: 'updated_at'
};
exports.ReviewsScalarFieldEnum = {
    id: 'id',
    booking_id: 'booking_id',
    reviewer_id: 'reviewer_id',
    reviewee_id: 'reviewee_id',
    listing_id: 'listing_id',
    target: 'target',
    rating: 'rating',
    title: 'title',
    body: 'body',
    is_anonymous: 'is_anonymous',
    is_visible: 'is_visible',
    hidden_reason: 'hidden_reason',
    provider_reply: 'provider_reply',
    replied_at: 'replied_at',
    deleted_at: 'deleted_at',
    created_at: 'created_at',
    updated_at: 'updated_at'
};
exports.User_profilesScalarFieldEnum = {
    id: 'id',
    user_id: 'user_id',
    display_name: 'display_name',
    avatar_url: 'avatar_url',
    bio: 'bio',
    languages: 'languages',
    skills_offered: 'skills_offered',
    interests: 'interests',
    website_url: 'website_url',
    linkedin_url: 'linkedin_url',
    is_public: 'is_public',
    created_at: 'created_at',
    updated_at: 'updated_at'
};
exports.User_rolesScalarFieldEnum = {
    id: 'id',
    user_id: 'user_id',
    role: 'role',
    granted_by: 'granted_by',
    granted_at: 'granted_at',
    revoked_at: 'revoked_at'
};
exports.UsersScalarFieldEnum = {
    id: 'id',
    auth_uid: 'auth_uid',
    email: 'email',
    phone: 'phone',
    apartment_id: 'apartment_id',
    unit_number: 'unit_number',
    invite_id: 'invite_id',
    status: 'status',
    email_verified: 'email_verified',
    phone_verified: 'phone_verified',
    last_login_at: 'last_login_at',
    deleted_at: 'deleted_at',
    created_at: 'created_at',
    updated_at: 'updated_at'
};
exports.SortOrder = {
    asc: 'asc',
    desc: 'desc'
};
exports.NullableJsonNullValueInput = {
    DbNull: exports.DbNull,
    JsonNull: exports.JsonNull
};
exports.QueryMode = {
    default: 'default',
    insensitive: 'insensitive'
};
exports.JsonNullValueFilter = {
    DbNull: exports.DbNull,
    JsonNull: exports.JsonNull,
    AnyNull: exports.AnyNull
};
exports.NullsOrder = {
    first: 'first',
    last: 'last'
};
//# sourceMappingURL=prismaNamespaceBrowser.js.map