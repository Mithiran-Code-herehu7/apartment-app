"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.user_status = exports.user_role = exports.slot_type = exports.review_target = exports.pricing_type = exports.payout_status = exports.payment_status = exports.payment_method = exports.notification_status = exports.notification_channel = exports.listing_status = exports.listing_mode = exports.invite_status = exports.dispute_status = exports.dispute_resolution = exports.day_of_week = exports.cancellation_party = exports.booking_status = exports.billing_cycle = exports.age_group = exports.admin_action_type = void 0;
exports.admin_action_type = {
    user_verified: 'user_verified',
    user_rejected: 'user_rejected',
    user_suspended: 'user_suspended',
    user_reactivated: 'user_reactivated',
    listing_approved: 'listing_approved',
    listing_rejected: 'listing_rejected',
    listing_suspended: 'listing_suspended',
    dispute_opened: 'dispute_opened',
    dispute_resolved: 'dispute_resolved',
    dispute_dismissed: 'dispute_dismissed',
    refund_issued: 'refund_issued',
    payout_released: 'payout_released',
    invite_revoked: 'invite_revoked',
    note_added: 'note_added'
};
exports.age_group = {
    children: 'children',
    teens: 'teens',
    adults: 'adults',
    seniors: 'seniors',
    all_ages: 'all_ages'
};
exports.billing_cycle = {
    one_time: 'one_time',
    weekly: 'weekly',
    monthly: 'monthly',
    quarterly: 'quarterly'
};
exports.booking_status = {
    pending: 'pending',
    confirmed: 'confirmed',
    completed: 'completed',
    cancelled: 'cancelled',
    no_show: 'no_show',
    refunded: 'refunded'
};
exports.cancellation_party = {
    learner: 'learner',
    provider: 'provider',
    admin: 'admin'
};
exports.day_of_week = {
    monday: 'monday',
    tuesday: 'tuesday',
    wednesday: 'wednesday',
    thursday: 'thursday',
    friday: 'friday',
    saturday: 'saturday',
    sunday: 'sunday'
};
exports.dispute_resolution = {
    refunded: 'refunded',
    partial_refund: 'partial_refund',
    no_action: 'no_action',
    provider_penalised: 'provider_penalised',
    learner_penalised: 'learner_penalised'
};
exports.dispute_status = {
    open: 'open',
    under_review: 'under_review',
    resolved: 'resolved',
    dismissed: 'dismissed'
};
exports.invite_status = {
    pending: 'pending',
    accepted: 'accepted',
    expired: 'expired',
    revoked: 'revoked'
};
exports.listing_mode = {
    offline: 'offline',
    online: 'online',
    hybrid: 'hybrid'
};
exports.listing_status = {
    draft: 'draft',
    pending_review: 'pending_review',
    approved: 'approved',
    rejected: 'rejected',
    archived: 'archived',
    suspended: 'suspended'
};
exports.notification_channel = {
    in_app: 'in_app',
    email: 'email',
    sms: 'sms',
    push: 'push'
};
exports.notification_status = {
    pending: 'pending',
    sent: 'sent',
    failed: 'failed',
    read: 'read'
};
exports.payment_method = {
    card: 'card',
    upi: 'upi',
    net_banking: 'net_banking',
    wallet: 'wallet',
    cash: 'cash',
    skill_exchange: 'skill_exchange'
};
exports.payment_status = {
    initiated: 'initiated',
    pending: 'pending',
    succeeded: 'succeeded',
    failed: 'failed',
    refunded: 'refunded',
    partially_refunded: 'partially_refunded',
    disputed: 'disputed'
};
exports.payout_status = {
    pending: 'pending',
    processing: 'processing',
    paid: 'paid',
    on_hold: 'on_hold',
    failed: 'failed'
};
exports.pricing_type = {
    one_time: 'one_time',
    subscription: 'subscription',
    bundle: 'bundle',
    free: 'free',
    skill_exchange: 'skill_exchange'
};
exports.review_target = {
    listing: 'listing',
    learner: 'learner'
};
exports.slot_type = {
    one_time: 'one_time',
    recurring: 'recurring'
};
exports.user_role = {
    learner: 'learner',
    provider: 'provider',
    admin: 'admin'
};
exports.user_status = {
    pending: 'pending',
    verified: 'verified',
    suspended: 'suspended',
    rejected: 'rejected',
    deactivated: 'deactivated'
};
//# sourceMappingURL=enums.js.map