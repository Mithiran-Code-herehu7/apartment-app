export declare const admin_action_type: {
    readonly user_verified: "user_verified";
    readonly user_rejected: "user_rejected";
    readonly user_suspended: "user_suspended";
    readonly user_reactivated: "user_reactivated";
    readonly listing_approved: "listing_approved";
    readonly listing_rejected: "listing_rejected";
    readonly listing_suspended: "listing_suspended";
    readonly dispute_opened: "dispute_opened";
    readonly dispute_resolved: "dispute_resolved";
    readonly dispute_dismissed: "dispute_dismissed";
    readonly refund_issued: "refund_issued";
    readonly payout_released: "payout_released";
    readonly invite_revoked: "invite_revoked";
    readonly note_added: "note_added";
};
export type admin_action_type = (typeof admin_action_type)[keyof typeof admin_action_type];
export declare const age_group: {
    readonly children: "children";
    readonly teens: "teens";
    readonly adults: "adults";
    readonly seniors: "seniors";
    readonly all_ages: "all_ages";
};
export type age_group = (typeof age_group)[keyof typeof age_group];
export declare const billing_cycle: {
    readonly one_time: "one_time";
    readonly weekly: "weekly";
    readonly monthly: "monthly";
    readonly quarterly: "quarterly";
};
export type billing_cycle = (typeof billing_cycle)[keyof typeof billing_cycle];
export declare const booking_status: {
    readonly pending: "pending";
    readonly confirmed: "confirmed";
    readonly completed: "completed";
    readonly cancelled: "cancelled";
    readonly no_show: "no_show";
    readonly refunded: "refunded";
};
export type booking_status = (typeof booking_status)[keyof typeof booking_status];
export declare const cancellation_party: {
    readonly learner: "learner";
    readonly provider: "provider";
    readonly admin: "admin";
};
export type cancellation_party = (typeof cancellation_party)[keyof typeof cancellation_party];
export declare const day_of_week: {
    readonly monday: "monday";
    readonly tuesday: "tuesday";
    readonly wednesday: "wednesday";
    readonly thursday: "thursday";
    readonly friday: "friday";
    readonly saturday: "saturday";
    readonly sunday: "sunday";
};
export type day_of_week = (typeof day_of_week)[keyof typeof day_of_week];
export declare const dispute_resolution: {
    readonly refunded: "refunded";
    readonly partial_refund: "partial_refund";
    readonly no_action: "no_action";
    readonly provider_penalised: "provider_penalised";
    readonly learner_penalised: "learner_penalised";
};
export type dispute_resolution = (typeof dispute_resolution)[keyof typeof dispute_resolution];
export declare const dispute_status: {
    readonly open: "open";
    readonly under_review: "under_review";
    readonly resolved: "resolved";
    readonly dismissed: "dismissed";
};
export type dispute_status = (typeof dispute_status)[keyof typeof dispute_status];
export declare const invite_status: {
    readonly pending: "pending";
    readonly accepted: "accepted";
    readonly expired: "expired";
    readonly revoked: "revoked";
};
export type invite_status = (typeof invite_status)[keyof typeof invite_status];
export declare const listing_mode: {
    readonly offline: "offline";
    readonly online: "online";
    readonly hybrid: "hybrid";
};
export type listing_mode = (typeof listing_mode)[keyof typeof listing_mode];
export declare const listing_status: {
    readonly draft: "draft";
    readonly pending_review: "pending_review";
    readonly approved: "approved";
    readonly rejected: "rejected";
    readonly archived: "archived";
    readonly suspended: "suspended";
};
export type listing_status = (typeof listing_status)[keyof typeof listing_status];
export declare const notification_channel: {
    readonly in_app: "in_app";
    readonly email: "email";
    readonly sms: "sms";
    readonly push: "push";
};
export type notification_channel = (typeof notification_channel)[keyof typeof notification_channel];
export declare const notification_status: {
    readonly pending: "pending";
    readonly sent: "sent";
    readonly failed: "failed";
    readonly read: "read";
};
export type notification_status = (typeof notification_status)[keyof typeof notification_status];
export declare const payment_method: {
    readonly card: "card";
    readonly upi: "upi";
    readonly net_banking: "net_banking";
    readonly wallet: "wallet";
    readonly cash: "cash";
    readonly skill_exchange: "skill_exchange";
};
export type payment_method = (typeof payment_method)[keyof typeof payment_method];
export declare const payment_status: {
    readonly initiated: "initiated";
    readonly pending: "pending";
    readonly succeeded: "succeeded";
    readonly failed: "failed";
    readonly refunded: "refunded";
    readonly partially_refunded: "partially_refunded";
    readonly disputed: "disputed";
};
export type payment_status = (typeof payment_status)[keyof typeof payment_status];
export declare const payout_status: {
    readonly pending: "pending";
    readonly processing: "processing";
    readonly paid: "paid";
    readonly on_hold: "on_hold";
    readonly failed: "failed";
};
export type payout_status = (typeof payout_status)[keyof typeof payout_status];
export declare const pricing_type: {
    readonly one_time: "one_time";
    readonly subscription: "subscription";
    readonly bundle: "bundle";
    readonly free: "free";
    readonly skill_exchange: "skill_exchange";
};
export type pricing_type = (typeof pricing_type)[keyof typeof pricing_type];
export declare const review_target: {
    readonly listing: "listing";
    readonly learner: "learner";
};
export type review_target = (typeof review_target)[keyof typeof review_target];
export declare const slot_type: {
    readonly one_time: "one_time";
    readonly recurring: "recurring";
};
export type slot_type = (typeof slot_type)[keyof typeof slot_type];
export declare const user_role: {
    readonly learner: "learner";
    readonly provider: "provider";
    readonly admin: "admin";
};
export type user_role = (typeof user_role)[keyof typeof user_role];
export declare const user_status: {
    readonly pending: "pending";
    readonly verified: "verified";
    readonly suspended: "suspended";
    readonly rejected: "rejected";
    readonly deactivated: "deactivated";
};
export type user_status = (typeof user_status)[keyof typeof user_status];
