import * as runtime from "@prisma/client/runtime/client";
import type * as Prisma from "../models.js";
import { type PrismaClient } from "./class.js";
export type * from '../models.js';
export type DMMF = typeof runtime.DMMF;
export type PrismaPromise<T> = runtime.Types.Public.PrismaPromise<T>;
export declare const PrismaClientKnownRequestError: typeof runtime.PrismaClientKnownRequestError;
export type PrismaClientKnownRequestError = runtime.PrismaClientKnownRequestError;
export declare const PrismaClientUnknownRequestError: typeof runtime.PrismaClientUnknownRequestError;
export type PrismaClientUnknownRequestError = runtime.PrismaClientUnknownRequestError;
export declare const PrismaClientRustPanicError: typeof runtime.PrismaClientRustPanicError;
export type PrismaClientRustPanicError = runtime.PrismaClientRustPanicError;
export declare const PrismaClientInitializationError: typeof runtime.PrismaClientInitializationError;
export type PrismaClientInitializationError = runtime.PrismaClientInitializationError;
export declare const PrismaClientValidationError: typeof runtime.PrismaClientValidationError;
export type PrismaClientValidationError = runtime.PrismaClientValidationError;
export declare const sql: typeof runtime.sqltag;
export declare const empty: runtime.Sql;
export declare const join: typeof runtime.join;
export declare const raw: typeof runtime.raw;
export declare const Sql: typeof runtime.Sql;
export type Sql = runtime.Sql;
export declare const Decimal: typeof runtime.Decimal;
export type Decimal = runtime.Decimal;
export type DecimalJsLike = runtime.DecimalJsLike;
export type Extension = runtime.Types.Extensions.UserArgs;
export declare const getExtensionContext: typeof runtime.Extensions.getExtensionContext;
export type Args<T, F extends runtime.Operation> = runtime.Types.Public.Args<T, F>;
export type Payload<T, F extends runtime.Operation = never> = runtime.Types.Public.Payload<T, F>;
export type Result<T, A, F extends runtime.Operation> = runtime.Types.Public.Result<T, A, F>;
export type Exact<A, W> = runtime.Types.Public.Exact<A, W>;
export type PrismaVersion = {
    client: string;
    engine: string;
};
export declare const prismaVersion: PrismaVersion;
export type Bytes = runtime.Bytes;
export type JsonObject = runtime.JsonObject;
export type JsonArray = runtime.JsonArray;
export type JsonValue = runtime.JsonValue;
export type InputJsonObject = runtime.InputJsonObject;
export type InputJsonArray = runtime.InputJsonArray;
export type InputJsonValue = runtime.InputJsonValue;
export declare const NullTypes: {
    DbNull: (new (secret: never) => typeof runtime.DbNull);
    JsonNull: (new (secret: never) => typeof runtime.JsonNull);
    AnyNull: (new (secret: never) => typeof runtime.AnyNull);
};
export declare const DbNull: runtime.DbNullClass;
export declare const JsonNull: runtime.JsonNullClass;
export declare const AnyNull: runtime.AnyNullClass;
type SelectAndInclude = {
    select: any;
    include: any;
};
type SelectAndOmit = {
    select: any;
    omit: any;
};
type Prisma__Pick<T, K extends keyof T> = {
    [P in K]: T[P];
};
export type Enumerable<T> = T | Array<T>;
export type Subset<T, U> = {
    [key in keyof T]: key extends keyof U ? T[key] : never;
};
export type SelectSubset<T, U> = {
    [key in keyof T]: key extends keyof U ? T[key] : never;
} & (T extends SelectAndInclude ? 'Please either choose `select` or `include`.' : T extends SelectAndOmit ? 'Please either choose `select` or `omit`.' : {});
export type SubsetIntersection<T, U, K> = {
    [key in keyof T]: key extends keyof U ? T[key] : never;
} & K;
type Without<T, U> = {
    [P in Exclude<keyof T, keyof U>]?: never;
};
export type XOR<T, U> = T extends object ? U extends object ? (Without<T, U> & U) | (Without<U, T> & T) : U : T;
type IsObject<T extends any> = T extends Array<any> ? False : T extends Date ? False : T extends Uint8Array ? False : T extends BigInt ? False : T extends object ? True : False;
export type UnEnumerate<T extends unknown> = T extends Array<infer U> ? U : T;
type __Either<O extends object, K extends Key> = Omit<O, K> & {
    [P in K]: Prisma__Pick<O, P & keyof O>;
}[K];
type EitherStrict<O extends object, K extends Key> = Strict<__Either<O, K>>;
type EitherLoose<O extends object, K extends Key> = ComputeRaw<__Either<O, K>>;
type _Either<O extends object, K extends Key, strict extends Boolean> = {
    1: EitherStrict<O, K>;
    0: EitherLoose<O, K>;
}[strict];
export type Either<O extends object, K extends Key, strict extends Boolean = 1> = O extends unknown ? _Either<O, K, strict> : never;
export type Union = any;
export type PatchUndefined<O extends object, O1 extends object> = {
    [K in keyof O]: O[K] extends undefined ? At<O1, K> : O[K];
} & {};
export type IntersectOf<U extends Union> = (U extends unknown ? (k: U) => void : never) extends (k: infer I) => void ? I : never;
export type Overwrite<O extends object, O1 extends object> = {
    [K in keyof O]: K extends keyof O1 ? O1[K] : O[K];
} & {};
type _Merge<U extends object> = IntersectOf<Overwrite<U, {
    [K in keyof U]-?: At<U, K>;
}>>;
type Key = string | number | symbol;
type AtStrict<O extends object, K extends Key> = O[K & keyof O];
type AtLoose<O extends object, K extends Key> = O extends unknown ? AtStrict<O, K> : never;
export type At<O extends object, K extends Key, strict extends Boolean = 1> = {
    1: AtStrict<O, K>;
    0: AtLoose<O, K>;
}[strict];
export type ComputeRaw<A extends any> = A extends Function ? A : {
    [K in keyof A]: A[K];
} & {};
export type OptionalFlat<O> = {
    [K in keyof O]?: O[K];
} & {};
type _Record<K extends keyof any, T> = {
    [P in K]: T;
};
type NoExpand<T> = T extends unknown ? T : never;
export type AtLeast<O extends object, K extends string> = NoExpand<O extends unknown ? (K extends keyof O ? {
    [P in K]: O[P];
} & O : O) | {
    [P in keyof O as P extends K ? P : never]-?: O[P];
} & O : never>;
type _Strict<U, _U = U> = U extends unknown ? U & OptionalFlat<_Record<Exclude<Keys<_U>, keyof U>, never>> : never;
export type Strict<U extends object> = ComputeRaw<_Strict<U>>;
export type Merge<U extends object> = ComputeRaw<_Merge<Strict<U>>>;
export type Boolean = True | False;
export type True = 1;
export type False = 0;
export type Not<B extends Boolean> = {
    0: 1;
    1: 0;
}[B];
export type Extends<A1 extends any, A2 extends any> = [A1] extends [never] ? 0 : A1 extends A2 ? 1 : 0;
export type Has<U extends Union, U1 extends Union> = Not<Extends<Exclude<U1, U>, U1>>;
export type Or<B1 extends Boolean, B2 extends Boolean> = {
    0: {
        0: 0;
        1: 1;
    };
    1: {
        0: 1;
        1: 1;
    };
}[B1][B2];
export type Keys<U extends Union> = U extends unknown ? keyof U : never;
export type GetScalarType<T, O> = O extends object ? {
    [P in keyof T]: P extends keyof O ? O[P] : never;
} : never;
type FieldPaths<T, U = Omit<T, '_avg' | '_sum' | '_count' | '_min' | '_max'>> = IsObject<T> extends True ? U : T;
export type GetHavingFields<T> = {
    [K in keyof T]: Or<Or<Extends<'OR', K>, Extends<'AND', K>>, Extends<'NOT', K>> extends True ? T[K] extends infer TK ? GetHavingFields<UnEnumerate<TK> extends object ? Merge<UnEnumerate<TK>> : never> : never : {} extends FieldPaths<T[K]> ? never : K;
}[keyof T];
type _TupleToUnion<T> = T extends (infer E)[] ? E : never;
type TupleToUnion<K extends readonly any[]> = _TupleToUnion<K>;
export type MaybeTupleToUnion<T> = T extends any[] ? TupleToUnion<T> : T;
export type PickEnumerable<T, K extends Enumerable<keyof T> | keyof T> = Prisma__Pick<T, MaybeTupleToUnion<K>>;
export type ExcludeUnderscoreKeys<T extends string> = T extends `_${string}` ? never : T;
export type FieldRef<Model, FieldType> = runtime.FieldRef<Model, FieldType>;
type FieldRefInputType<Model, FieldType> = Model extends never ? never : FieldRef<Model, FieldType>;
export declare const ModelName: {
    readonly admin_actions: "admin_actions";
    readonly apartment_invites: "apartment_invites";
    readonly apartments: "apartments";
    readonly availability_slots: "availability_slots";
    readonly bookings: "bookings";
    readonly categories: "categories";
    readonly dispute_messages: "dispute_messages";
    readonly disputes: "disputes";
    readonly listing_media: "listing_media";
    readonly listings: "listings";
    readonly messages: "messages";
    readonly notification_templates: "notification_templates";
    readonly notifications: "notifications";
    readonly payments: "payments";
    readonly payout_payment_items: "payout_payment_items";
    readonly payout_tracking: "payout_tracking";
    readonly pricing_plans: "pricing_plans";
    readonly reviews: "reviews";
    readonly user_profiles: "user_profiles";
    readonly user_roles: "user_roles";
    readonly users: "users";
};
export type ModelName = (typeof ModelName)[keyof typeof ModelName];
export interface TypeMapCb<GlobalOmitOptions = {}> extends runtime.Types.Utils.Fn<{
    extArgs: runtime.Types.Extensions.InternalArgs;
}, runtime.Types.Utils.Record<string, any>> {
    returns: TypeMap<this['params']['extArgs'], GlobalOmitOptions>;
}
export type TypeMap<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs, GlobalOmitOptions = {}> = {
    globalOmitOptions: {
        omit: GlobalOmitOptions;
    };
    meta: {
        modelProps: "admin_actions" | "apartment_invites" | "apartments" | "availability_slots" | "bookings" | "categories" | "dispute_messages" | "disputes" | "listing_media" | "listings" | "messages" | "notification_templates" | "notifications" | "payments" | "payout_payment_items" | "payout_tracking" | "pricing_plans" | "reviews" | "user_profiles" | "user_roles" | "users";
        txIsolationLevel: TransactionIsolationLevel;
    };
    model: {
        admin_actions: {
            payload: Prisma.$admin_actionsPayload<ExtArgs>;
            fields: Prisma.admin_actionsFieldRefs;
            operations: {
                findUnique: {
                    args: Prisma.admin_actionsFindUniqueArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$admin_actionsPayload> | null;
                };
                findUniqueOrThrow: {
                    args: Prisma.admin_actionsFindUniqueOrThrowArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$admin_actionsPayload>;
                };
                findFirst: {
                    args: Prisma.admin_actionsFindFirstArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$admin_actionsPayload> | null;
                };
                findFirstOrThrow: {
                    args: Prisma.admin_actionsFindFirstOrThrowArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$admin_actionsPayload>;
                };
                findMany: {
                    args: Prisma.admin_actionsFindManyArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$admin_actionsPayload>[];
                };
                create: {
                    args: Prisma.admin_actionsCreateArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$admin_actionsPayload>;
                };
                createMany: {
                    args: Prisma.admin_actionsCreateManyArgs<ExtArgs>;
                    result: BatchPayload;
                };
                createManyAndReturn: {
                    args: Prisma.admin_actionsCreateManyAndReturnArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$admin_actionsPayload>[];
                };
                delete: {
                    args: Prisma.admin_actionsDeleteArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$admin_actionsPayload>;
                };
                update: {
                    args: Prisma.admin_actionsUpdateArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$admin_actionsPayload>;
                };
                deleteMany: {
                    args: Prisma.admin_actionsDeleteManyArgs<ExtArgs>;
                    result: BatchPayload;
                };
                updateMany: {
                    args: Prisma.admin_actionsUpdateManyArgs<ExtArgs>;
                    result: BatchPayload;
                };
                updateManyAndReturn: {
                    args: Prisma.admin_actionsUpdateManyAndReturnArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$admin_actionsPayload>[];
                };
                upsert: {
                    args: Prisma.admin_actionsUpsertArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$admin_actionsPayload>;
                };
                aggregate: {
                    args: Prisma.Admin_actionsAggregateArgs<ExtArgs>;
                    result: runtime.Types.Utils.Optional<Prisma.AggregateAdmin_actions>;
                };
                groupBy: {
                    args: Prisma.admin_actionsGroupByArgs<ExtArgs>;
                    result: runtime.Types.Utils.Optional<Prisma.Admin_actionsGroupByOutputType>[];
                };
                count: {
                    args: Prisma.admin_actionsCountArgs<ExtArgs>;
                    result: runtime.Types.Utils.Optional<Prisma.Admin_actionsCountAggregateOutputType> | number;
                };
            };
        };
        apartment_invites: {
            payload: Prisma.$apartment_invitesPayload<ExtArgs>;
            fields: Prisma.apartment_invitesFieldRefs;
            operations: {
                findUnique: {
                    args: Prisma.apartment_invitesFindUniqueArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$apartment_invitesPayload> | null;
                };
                findUniqueOrThrow: {
                    args: Prisma.apartment_invitesFindUniqueOrThrowArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$apartment_invitesPayload>;
                };
                findFirst: {
                    args: Prisma.apartment_invitesFindFirstArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$apartment_invitesPayload> | null;
                };
                findFirstOrThrow: {
                    args: Prisma.apartment_invitesFindFirstOrThrowArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$apartment_invitesPayload>;
                };
                findMany: {
                    args: Prisma.apartment_invitesFindManyArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$apartment_invitesPayload>[];
                };
                create: {
                    args: Prisma.apartment_invitesCreateArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$apartment_invitesPayload>;
                };
                createMany: {
                    args: Prisma.apartment_invitesCreateManyArgs<ExtArgs>;
                    result: BatchPayload;
                };
                createManyAndReturn: {
                    args: Prisma.apartment_invitesCreateManyAndReturnArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$apartment_invitesPayload>[];
                };
                delete: {
                    args: Prisma.apartment_invitesDeleteArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$apartment_invitesPayload>;
                };
                update: {
                    args: Prisma.apartment_invitesUpdateArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$apartment_invitesPayload>;
                };
                deleteMany: {
                    args: Prisma.apartment_invitesDeleteManyArgs<ExtArgs>;
                    result: BatchPayload;
                };
                updateMany: {
                    args: Prisma.apartment_invitesUpdateManyArgs<ExtArgs>;
                    result: BatchPayload;
                };
                updateManyAndReturn: {
                    args: Prisma.apartment_invitesUpdateManyAndReturnArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$apartment_invitesPayload>[];
                };
                upsert: {
                    args: Prisma.apartment_invitesUpsertArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$apartment_invitesPayload>;
                };
                aggregate: {
                    args: Prisma.Apartment_invitesAggregateArgs<ExtArgs>;
                    result: runtime.Types.Utils.Optional<Prisma.AggregateApartment_invites>;
                };
                groupBy: {
                    args: Prisma.apartment_invitesGroupByArgs<ExtArgs>;
                    result: runtime.Types.Utils.Optional<Prisma.Apartment_invitesGroupByOutputType>[];
                };
                count: {
                    args: Prisma.apartment_invitesCountArgs<ExtArgs>;
                    result: runtime.Types.Utils.Optional<Prisma.Apartment_invitesCountAggregateOutputType> | number;
                };
            };
        };
        apartments: {
            payload: Prisma.$apartmentsPayload<ExtArgs>;
            fields: Prisma.apartmentsFieldRefs;
            operations: {
                findUnique: {
                    args: Prisma.apartmentsFindUniqueArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$apartmentsPayload> | null;
                };
                findUniqueOrThrow: {
                    args: Prisma.apartmentsFindUniqueOrThrowArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$apartmentsPayload>;
                };
                findFirst: {
                    args: Prisma.apartmentsFindFirstArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$apartmentsPayload> | null;
                };
                findFirstOrThrow: {
                    args: Prisma.apartmentsFindFirstOrThrowArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$apartmentsPayload>;
                };
                findMany: {
                    args: Prisma.apartmentsFindManyArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$apartmentsPayload>[];
                };
                create: {
                    args: Prisma.apartmentsCreateArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$apartmentsPayload>;
                };
                createMany: {
                    args: Prisma.apartmentsCreateManyArgs<ExtArgs>;
                    result: BatchPayload;
                };
                createManyAndReturn: {
                    args: Prisma.apartmentsCreateManyAndReturnArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$apartmentsPayload>[];
                };
                delete: {
                    args: Prisma.apartmentsDeleteArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$apartmentsPayload>;
                };
                update: {
                    args: Prisma.apartmentsUpdateArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$apartmentsPayload>;
                };
                deleteMany: {
                    args: Prisma.apartmentsDeleteManyArgs<ExtArgs>;
                    result: BatchPayload;
                };
                updateMany: {
                    args: Prisma.apartmentsUpdateManyArgs<ExtArgs>;
                    result: BatchPayload;
                };
                updateManyAndReturn: {
                    args: Prisma.apartmentsUpdateManyAndReturnArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$apartmentsPayload>[];
                };
                upsert: {
                    args: Prisma.apartmentsUpsertArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$apartmentsPayload>;
                };
                aggregate: {
                    args: Prisma.ApartmentsAggregateArgs<ExtArgs>;
                    result: runtime.Types.Utils.Optional<Prisma.AggregateApartments>;
                };
                groupBy: {
                    args: Prisma.apartmentsGroupByArgs<ExtArgs>;
                    result: runtime.Types.Utils.Optional<Prisma.ApartmentsGroupByOutputType>[];
                };
                count: {
                    args: Prisma.apartmentsCountArgs<ExtArgs>;
                    result: runtime.Types.Utils.Optional<Prisma.ApartmentsCountAggregateOutputType> | number;
                };
            };
        };
        availability_slots: {
            payload: Prisma.$availability_slotsPayload<ExtArgs>;
            fields: Prisma.availability_slotsFieldRefs;
            operations: {
                findUnique: {
                    args: Prisma.availability_slotsFindUniqueArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$availability_slotsPayload> | null;
                };
                findUniqueOrThrow: {
                    args: Prisma.availability_slotsFindUniqueOrThrowArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$availability_slotsPayload>;
                };
                findFirst: {
                    args: Prisma.availability_slotsFindFirstArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$availability_slotsPayload> | null;
                };
                findFirstOrThrow: {
                    args: Prisma.availability_slotsFindFirstOrThrowArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$availability_slotsPayload>;
                };
                findMany: {
                    args: Prisma.availability_slotsFindManyArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$availability_slotsPayload>[];
                };
                create: {
                    args: Prisma.availability_slotsCreateArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$availability_slotsPayload>;
                };
                createMany: {
                    args: Prisma.availability_slotsCreateManyArgs<ExtArgs>;
                    result: BatchPayload;
                };
                createManyAndReturn: {
                    args: Prisma.availability_slotsCreateManyAndReturnArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$availability_slotsPayload>[];
                };
                delete: {
                    args: Prisma.availability_slotsDeleteArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$availability_slotsPayload>;
                };
                update: {
                    args: Prisma.availability_slotsUpdateArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$availability_slotsPayload>;
                };
                deleteMany: {
                    args: Prisma.availability_slotsDeleteManyArgs<ExtArgs>;
                    result: BatchPayload;
                };
                updateMany: {
                    args: Prisma.availability_slotsUpdateManyArgs<ExtArgs>;
                    result: BatchPayload;
                };
                updateManyAndReturn: {
                    args: Prisma.availability_slotsUpdateManyAndReturnArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$availability_slotsPayload>[];
                };
                upsert: {
                    args: Prisma.availability_slotsUpsertArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$availability_slotsPayload>;
                };
                aggregate: {
                    args: Prisma.Availability_slotsAggregateArgs<ExtArgs>;
                    result: runtime.Types.Utils.Optional<Prisma.AggregateAvailability_slots>;
                };
                groupBy: {
                    args: Prisma.availability_slotsGroupByArgs<ExtArgs>;
                    result: runtime.Types.Utils.Optional<Prisma.Availability_slotsGroupByOutputType>[];
                };
                count: {
                    args: Prisma.availability_slotsCountArgs<ExtArgs>;
                    result: runtime.Types.Utils.Optional<Prisma.Availability_slotsCountAggregateOutputType> | number;
                };
            };
        };
        bookings: {
            payload: Prisma.$bookingsPayload<ExtArgs>;
            fields: Prisma.bookingsFieldRefs;
            operations: {
                findUnique: {
                    args: Prisma.bookingsFindUniqueArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$bookingsPayload> | null;
                };
                findUniqueOrThrow: {
                    args: Prisma.bookingsFindUniqueOrThrowArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$bookingsPayload>;
                };
                findFirst: {
                    args: Prisma.bookingsFindFirstArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$bookingsPayload> | null;
                };
                findFirstOrThrow: {
                    args: Prisma.bookingsFindFirstOrThrowArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$bookingsPayload>;
                };
                findMany: {
                    args: Prisma.bookingsFindManyArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$bookingsPayload>[];
                };
                create: {
                    args: Prisma.bookingsCreateArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$bookingsPayload>;
                };
                createMany: {
                    args: Prisma.bookingsCreateManyArgs<ExtArgs>;
                    result: BatchPayload;
                };
                createManyAndReturn: {
                    args: Prisma.bookingsCreateManyAndReturnArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$bookingsPayload>[];
                };
                delete: {
                    args: Prisma.bookingsDeleteArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$bookingsPayload>;
                };
                update: {
                    args: Prisma.bookingsUpdateArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$bookingsPayload>;
                };
                deleteMany: {
                    args: Prisma.bookingsDeleteManyArgs<ExtArgs>;
                    result: BatchPayload;
                };
                updateMany: {
                    args: Prisma.bookingsUpdateManyArgs<ExtArgs>;
                    result: BatchPayload;
                };
                updateManyAndReturn: {
                    args: Prisma.bookingsUpdateManyAndReturnArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$bookingsPayload>[];
                };
                upsert: {
                    args: Prisma.bookingsUpsertArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$bookingsPayload>;
                };
                aggregate: {
                    args: Prisma.BookingsAggregateArgs<ExtArgs>;
                    result: runtime.Types.Utils.Optional<Prisma.AggregateBookings>;
                };
                groupBy: {
                    args: Prisma.bookingsGroupByArgs<ExtArgs>;
                    result: runtime.Types.Utils.Optional<Prisma.BookingsGroupByOutputType>[];
                };
                count: {
                    args: Prisma.bookingsCountArgs<ExtArgs>;
                    result: runtime.Types.Utils.Optional<Prisma.BookingsCountAggregateOutputType> | number;
                };
            };
        };
        categories: {
            payload: Prisma.$categoriesPayload<ExtArgs>;
            fields: Prisma.categoriesFieldRefs;
            operations: {
                findUnique: {
                    args: Prisma.categoriesFindUniqueArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$categoriesPayload> | null;
                };
                findUniqueOrThrow: {
                    args: Prisma.categoriesFindUniqueOrThrowArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$categoriesPayload>;
                };
                findFirst: {
                    args: Prisma.categoriesFindFirstArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$categoriesPayload> | null;
                };
                findFirstOrThrow: {
                    args: Prisma.categoriesFindFirstOrThrowArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$categoriesPayload>;
                };
                findMany: {
                    args: Prisma.categoriesFindManyArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$categoriesPayload>[];
                };
                create: {
                    args: Prisma.categoriesCreateArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$categoriesPayload>;
                };
                createMany: {
                    args: Prisma.categoriesCreateManyArgs<ExtArgs>;
                    result: BatchPayload;
                };
                createManyAndReturn: {
                    args: Prisma.categoriesCreateManyAndReturnArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$categoriesPayload>[];
                };
                delete: {
                    args: Prisma.categoriesDeleteArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$categoriesPayload>;
                };
                update: {
                    args: Prisma.categoriesUpdateArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$categoriesPayload>;
                };
                deleteMany: {
                    args: Prisma.categoriesDeleteManyArgs<ExtArgs>;
                    result: BatchPayload;
                };
                updateMany: {
                    args: Prisma.categoriesUpdateManyArgs<ExtArgs>;
                    result: BatchPayload;
                };
                updateManyAndReturn: {
                    args: Prisma.categoriesUpdateManyAndReturnArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$categoriesPayload>[];
                };
                upsert: {
                    args: Prisma.categoriesUpsertArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$categoriesPayload>;
                };
                aggregate: {
                    args: Prisma.CategoriesAggregateArgs<ExtArgs>;
                    result: runtime.Types.Utils.Optional<Prisma.AggregateCategories>;
                };
                groupBy: {
                    args: Prisma.categoriesGroupByArgs<ExtArgs>;
                    result: runtime.Types.Utils.Optional<Prisma.CategoriesGroupByOutputType>[];
                };
                count: {
                    args: Prisma.categoriesCountArgs<ExtArgs>;
                    result: runtime.Types.Utils.Optional<Prisma.CategoriesCountAggregateOutputType> | number;
                };
            };
        };
        dispute_messages: {
            payload: Prisma.$dispute_messagesPayload<ExtArgs>;
            fields: Prisma.dispute_messagesFieldRefs;
            operations: {
                findUnique: {
                    args: Prisma.dispute_messagesFindUniqueArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$dispute_messagesPayload> | null;
                };
                findUniqueOrThrow: {
                    args: Prisma.dispute_messagesFindUniqueOrThrowArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$dispute_messagesPayload>;
                };
                findFirst: {
                    args: Prisma.dispute_messagesFindFirstArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$dispute_messagesPayload> | null;
                };
                findFirstOrThrow: {
                    args: Prisma.dispute_messagesFindFirstOrThrowArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$dispute_messagesPayload>;
                };
                findMany: {
                    args: Prisma.dispute_messagesFindManyArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$dispute_messagesPayload>[];
                };
                create: {
                    args: Prisma.dispute_messagesCreateArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$dispute_messagesPayload>;
                };
                createMany: {
                    args: Prisma.dispute_messagesCreateManyArgs<ExtArgs>;
                    result: BatchPayload;
                };
                createManyAndReturn: {
                    args: Prisma.dispute_messagesCreateManyAndReturnArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$dispute_messagesPayload>[];
                };
                delete: {
                    args: Prisma.dispute_messagesDeleteArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$dispute_messagesPayload>;
                };
                update: {
                    args: Prisma.dispute_messagesUpdateArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$dispute_messagesPayload>;
                };
                deleteMany: {
                    args: Prisma.dispute_messagesDeleteManyArgs<ExtArgs>;
                    result: BatchPayload;
                };
                updateMany: {
                    args: Prisma.dispute_messagesUpdateManyArgs<ExtArgs>;
                    result: BatchPayload;
                };
                updateManyAndReturn: {
                    args: Prisma.dispute_messagesUpdateManyAndReturnArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$dispute_messagesPayload>[];
                };
                upsert: {
                    args: Prisma.dispute_messagesUpsertArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$dispute_messagesPayload>;
                };
                aggregate: {
                    args: Prisma.Dispute_messagesAggregateArgs<ExtArgs>;
                    result: runtime.Types.Utils.Optional<Prisma.AggregateDispute_messages>;
                };
                groupBy: {
                    args: Prisma.dispute_messagesGroupByArgs<ExtArgs>;
                    result: runtime.Types.Utils.Optional<Prisma.Dispute_messagesGroupByOutputType>[];
                };
                count: {
                    args: Prisma.dispute_messagesCountArgs<ExtArgs>;
                    result: runtime.Types.Utils.Optional<Prisma.Dispute_messagesCountAggregateOutputType> | number;
                };
            };
        };
        disputes: {
            payload: Prisma.$disputesPayload<ExtArgs>;
            fields: Prisma.disputesFieldRefs;
            operations: {
                findUnique: {
                    args: Prisma.disputesFindUniqueArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$disputesPayload> | null;
                };
                findUniqueOrThrow: {
                    args: Prisma.disputesFindUniqueOrThrowArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$disputesPayload>;
                };
                findFirst: {
                    args: Prisma.disputesFindFirstArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$disputesPayload> | null;
                };
                findFirstOrThrow: {
                    args: Prisma.disputesFindFirstOrThrowArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$disputesPayload>;
                };
                findMany: {
                    args: Prisma.disputesFindManyArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$disputesPayload>[];
                };
                create: {
                    args: Prisma.disputesCreateArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$disputesPayload>;
                };
                createMany: {
                    args: Prisma.disputesCreateManyArgs<ExtArgs>;
                    result: BatchPayload;
                };
                createManyAndReturn: {
                    args: Prisma.disputesCreateManyAndReturnArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$disputesPayload>[];
                };
                delete: {
                    args: Prisma.disputesDeleteArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$disputesPayload>;
                };
                update: {
                    args: Prisma.disputesUpdateArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$disputesPayload>;
                };
                deleteMany: {
                    args: Prisma.disputesDeleteManyArgs<ExtArgs>;
                    result: BatchPayload;
                };
                updateMany: {
                    args: Prisma.disputesUpdateManyArgs<ExtArgs>;
                    result: BatchPayload;
                };
                updateManyAndReturn: {
                    args: Prisma.disputesUpdateManyAndReturnArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$disputesPayload>[];
                };
                upsert: {
                    args: Prisma.disputesUpsertArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$disputesPayload>;
                };
                aggregate: {
                    args: Prisma.DisputesAggregateArgs<ExtArgs>;
                    result: runtime.Types.Utils.Optional<Prisma.AggregateDisputes>;
                };
                groupBy: {
                    args: Prisma.disputesGroupByArgs<ExtArgs>;
                    result: runtime.Types.Utils.Optional<Prisma.DisputesGroupByOutputType>[];
                };
                count: {
                    args: Prisma.disputesCountArgs<ExtArgs>;
                    result: runtime.Types.Utils.Optional<Prisma.DisputesCountAggregateOutputType> | number;
                };
            };
        };
        listing_media: {
            payload: Prisma.$listing_mediaPayload<ExtArgs>;
            fields: Prisma.listing_mediaFieldRefs;
            operations: {
                findUnique: {
                    args: Prisma.listing_mediaFindUniqueArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$listing_mediaPayload> | null;
                };
                findUniqueOrThrow: {
                    args: Prisma.listing_mediaFindUniqueOrThrowArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$listing_mediaPayload>;
                };
                findFirst: {
                    args: Prisma.listing_mediaFindFirstArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$listing_mediaPayload> | null;
                };
                findFirstOrThrow: {
                    args: Prisma.listing_mediaFindFirstOrThrowArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$listing_mediaPayload>;
                };
                findMany: {
                    args: Prisma.listing_mediaFindManyArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$listing_mediaPayload>[];
                };
                create: {
                    args: Prisma.listing_mediaCreateArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$listing_mediaPayload>;
                };
                createMany: {
                    args: Prisma.listing_mediaCreateManyArgs<ExtArgs>;
                    result: BatchPayload;
                };
                createManyAndReturn: {
                    args: Prisma.listing_mediaCreateManyAndReturnArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$listing_mediaPayload>[];
                };
                delete: {
                    args: Prisma.listing_mediaDeleteArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$listing_mediaPayload>;
                };
                update: {
                    args: Prisma.listing_mediaUpdateArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$listing_mediaPayload>;
                };
                deleteMany: {
                    args: Prisma.listing_mediaDeleteManyArgs<ExtArgs>;
                    result: BatchPayload;
                };
                updateMany: {
                    args: Prisma.listing_mediaUpdateManyArgs<ExtArgs>;
                    result: BatchPayload;
                };
                updateManyAndReturn: {
                    args: Prisma.listing_mediaUpdateManyAndReturnArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$listing_mediaPayload>[];
                };
                upsert: {
                    args: Prisma.listing_mediaUpsertArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$listing_mediaPayload>;
                };
                aggregate: {
                    args: Prisma.Listing_mediaAggregateArgs<ExtArgs>;
                    result: runtime.Types.Utils.Optional<Prisma.AggregateListing_media>;
                };
                groupBy: {
                    args: Prisma.listing_mediaGroupByArgs<ExtArgs>;
                    result: runtime.Types.Utils.Optional<Prisma.Listing_mediaGroupByOutputType>[];
                };
                count: {
                    args: Prisma.listing_mediaCountArgs<ExtArgs>;
                    result: runtime.Types.Utils.Optional<Prisma.Listing_mediaCountAggregateOutputType> | number;
                };
            };
        };
        listings: {
            payload: Prisma.$listingsPayload<ExtArgs>;
            fields: Prisma.listingsFieldRefs;
            operations: {
                findUnique: {
                    args: Prisma.listingsFindUniqueArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$listingsPayload> | null;
                };
                findUniqueOrThrow: {
                    args: Prisma.listingsFindUniqueOrThrowArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$listingsPayload>;
                };
                findFirst: {
                    args: Prisma.listingsFindFirstArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$listingsPayload> | null;
                };
                findFirstOrThrow: {
                    args: Prisma.listingsFindFirstOrThrowArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$listingsPayload>;
                };
                findMany: {
                    args: Prisma.listingsFindManyArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$listingsPayload>[];
                };
                create: {
                    args: Prisma.listingsCreateArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$listingsPayload>;
                };
                createMany: {
                    args: Prisma.listingsCreateManyArgs<ExtArgs>;
                    result: BatchPayload;
                };
                createManyAndReturn: {
                    args: Prisma.listingsCreateManyAndReturnArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$listingsPayload>[];
                };
                delete: {
                    args: Prisma.listingsDeleteArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$listingsPayload>;
                };
                update: {
                    args: Prisma.listingsUpdateArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$listingsPayload>;
                };
                deleteMany: {
                    args: Prisma.listingsDeleteManyArgs<ExtArgs>;
                    result: BatchPayload;
                };
                updateMany: {
                    args: Prisma.listingsUpdateManyArgs<ExtArgs>;
                    result: BatchPayload;
                };
                updateManyAndReturn: {
                    args: Prisma.listingsUpdateManyAndReturnArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$listingsPayload>[];
                };
                upsert: {
                    args: Prisma.listingsUpsertArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$listingsPayload>;
                };
                aggregate: {
                    args: Prisma.ListingsAggregateArgs<ExtArgs>;
                    result: runtime.Types.Utils.Optional<Prisma.AggregateListings>;
                };
                groupBy: {
                    args: Prisma.listingsGroupByArgs<ExtArgs>;
                    result: runtime.Types.Utils.Optional<Prisma.ListingsGroupByOutputType>[];
                };
                count: {
                    args: Prisma.listingsCountArgs<ExtArgs>;
                    result: runtime.Types.Utils.Optional<Prisma.ListingsCountAggregateOutputType> | number;
                };
            };
        };
        messages: {
            payload: Prisma.$messagesPayload<ExtArgs>;
            fields: Prisma.messagesFieldRefs;
            operations: {
                findUnique: {
                    args: Prisma.messagesFindUniqueArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$messagesPayload> | null;
                };
                findUniqueOrThrow: {
                    args: Prisma.messagesFindUniqueOrThrowArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$messagesPayload>;
                };
                findFirst: {
                    args: Prisma.messagesFindFirstArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$messagesPayload> | null;
                };
                findFirstOrThrow: {
                    args: Prisma.messagesFindFirstOrThrowArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$messagesPayload>;
                };
                findMany: {
                    args: Prisma.messagesFindManyArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$messagesPayload>[];
                };
                create: {
                    args: Prisma.messagesCreateArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$messagesPayload>;
                };
                createMany: {
                    args: Prisma.messagesCreateManyArgs<ExtArgs>;
                    result: BatchPayload;
                };
                createManyAndReturn: {
                    args: Prisma.messagesCreateManyAndReturnArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$messagesPayload>[];
                };
                delete: {
                    args: Prisma.messagesDeleteArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$messagesPayload>;
                };
                update: {
                    args: Prisma.messagesUpdateArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$messagesPayload>;
                };
                deleteMany: {
                    args: Prisma.messagesDeleteManyArgs<ExtArgs>;
                    result: BatchPayload;
                };
                updateMany: {
                    args: Prisma.messagesUpdateManyArgs<ExtArgs>;
                    result: BatchPayload;
                };
                updateManyAndReturn: {
                    args: Prisma.messagesUpdateManyAndReturnArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$messagesPayload>[];
                };
                upsert: {
                    args: Prisma.messagesUpsertArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$messagesPayload>;
                };
                aggregate: {
                    args: Prisma.MessagesAggregateArgs<ExtArgs>;
                    result: runtime.Types.Utils.Optional<Prisma.AggregateMessages>;
                };
                groupBy: {
                    args: Prisma.messagesGroupByArgs<ExtArgs>;
                    result: runtime.Types.Utils.Optional<Prisma.MessagesGroupByOutputType>[];
                };
                count: {
                    args: Prisma.messagesCountArgs<ExtArgs>;
                    result: runtime.Types.Utils.Optional<Prisma.MessagesCountAggregateOutputType> | number;
                };
            };
        };
        notification_templates: {
            payload: Prisma.$notification_templatesPayload<ExtArgs>;
            fields: Prisma.notification_templatesFieldRefs;
            operations: {
                findUnique: {
                    args: Prisma.notification_templatesFindUniqueArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$notification_templatesPayload> | null;
                };
                findUniqueOrThrow: {
                    args: Prisma.notification_templatesFindUniqueOrThrowArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$notification_templatesPayload>;
                };
                findFirst: {
                    args: Prisma.notification_templatesFindFirstArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$notification_templatesPayload> | null;
                };
                findFirstOrThrow: {
                    args: Prisma.notification_templatesFindFirstOrThrowArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$notification_templatesPayload>;
                };
                findMany: {
                    args: Prisma.notification_templatesFindManyArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$notification_templatesPayload>[];
                };
                create: {
                    args: Prisma.notification_templatesCreateArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$notification_templatesPayload>;
                };
                createMany: {
                    args: Prisma.notification_templatesCreateManyArgs<ExtArgs>;
                    result: BatchPayload;
                };
                createManyAndReturn: {
                    args: Prisma.notification_templatesCreateManyAndReturnArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$notification_templatesPayload>[];
                };
                delete: {
                    args: Prisma.notification_templatesDeleteArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$notification_templatesPayload>;
                };
                update: {
                    args: Prisma.notification_templatesUpdateArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$notification_templatesPayload>;
                };
                deleteMany: {
                    args: Prisma.notification_templatesDeleteManyArgs<ExtArgs>;
                    result: BatchPayload;
                };
                updateMany: {
                    args: Prisma.notification_templatesUpdateManyArgs<ExtArgs>;
                    result: BatchPayload;
                };
                updateManyAndReturn: {
                    args: Prisma.notification_templatesUpdateManyAndReturnArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$notification_templatesPayload>[];
                };
                upsert: {
                    args: Prisma.notification_templatesUpsertArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$notification_templatesPayload>;
                };
                aggregate: {
                    args: Prisma.Notification_templatesAggregateArgs<ExtArgs>;
                    result: runtime.Types.Utils.Optional<Prisma.AggregateNotification_templates>;
                };
                groupBy: {
                    args: Prisma.notification_templatesGroupByArgs<ExtArgs>;
                    result: runtime.Types.Utils.Optional<Prisma.Notification_templatesGroupByOutputType>[];
                };
                count: {
                    args: Prisma.notification_templatesCountArgs<ExtArgs>;
                    result: runtime.Types.Utils.Optional<Prisma.Notification_templatesCountAggregateOutputType> | number;
                };
            };
        };
        notifications: {
            payload: Prisma.$notificationsPayload<ExtArgs>;
            fields: Prisma.notificationsFieldRefs;
            operations: {
                findUnique: {
                    args: Prisma.notificationsFindUniqueArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$notificationsPayload> | null;
                };
                findUniqueOrThrow: {
                    args: Prisma.notificationsFindUniqueOrThrowArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$notificationsPayload>;
                };
                findFirst: {
                    args: Prisma.notificationsFindFirstArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$notificationsPayload> | null;
                };
                findFirstOrThrow: {
                    args: Prisma.notificationsFindFirstOrThrowArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$notificationsPayload>;
                };
                findMany: {
                    args: Prisma.notificationsFindManyArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$notificationsPayload>[];
                };
                create: {
                    args: Prisma.notificationsCreateArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$notificationsPayload>;
                };
                createMany: {
                    args: Prisma.notificationsCreateManyArgs<ExtArgs>;
                    result: BatchPayload;
                };
                createManyAndReturn: {
                    args: Prisma.notificationsCreateManyAndReturnArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$notificationsPayload>[];
                };
                delete: {
                    args: Prisma.notificationsDeleteArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$notificationsPayload>;
                };
                update: {
                    args: Prisma.notificationsUpdateArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$notificationsPayload>;
                };
                deleteMany: {
                    args: Prisma.notificationsDeleteManyArgs<ExtArgs>;
                    result: BatchPayload;
                };
                updateMany: {
                    args: Prisma.notificationsUpdateManyArgs<ExtArgs>;
                    result: BatchPayload;
                };
                updateManyAndReturn: {
                    args: Prisma.notificationsUpdateManyAndReturnArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$notificationsPayload>[];
                };
                upsert: {
                    args: Prisma.notificationsUpsertArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$notificationsPayload>;
                };
                aggregate: {
                    args: Prisma.NotificationsAggregateArgs<ExtArgs>;
                    result: runtime.Types.Utils.Optional<Prisma.AggregateNotifications>;
                };
                groupBy: {
                    args: Prisma.notificationsGroupByArgs<ExtArgs>;
                    result: runtime.Types.Utils.Optional<Prisma.NotificationsGroupByOutputType>[];
                };
                count: {
                    args: Prisma.notificationsCountArgs<ExtArgs>;
                    result: runtime.Types.Utils.Optional<Prisma.NotificationsCountAggregateOutputType> | number;
                };
            };
        };
        payments: {
            payload: Prisma.$paymentsPayload<ExtArgs>;
            fields: Prisma.paymentsFieldRefs;
            operations: {
                findUnique: {
                    args: Prisma.paymentsFindUniqueArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$paymentsPayload> | null;
                };
                findUniqueOrThrow: {
                    args: Prisma.paymentsFindUniqueOrThrowArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$paymentsPayload>;
                };
                findFirst: {
                    args: Prisma.paymentsFindFirstArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$paymentsPayload> | null;
                };
                findFirstOrThrow: {
                    args: Prisma.paymentsFindFirstOrThrowArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$paymentsPayload>;
                };
                findMany: {
                    args: Prisma.paymentsFindManyArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$paymentsPayload>[];
                };
                create: {
                    args: Prisma.paymentsCreateArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$paymentsPayload>;
                };
                createMany: {
                    args: Prisma.paymentsCreateManyArgs<ExtArgs>;
                    result: BatchPayload;
                };
                createManyAndReturn: {
                    args: Prisma.paymentsCreateManyAndReturnArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$paymentsPayload>[];
                };
                delete: {
                    args: Prisma.paymentsDeleteArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$paymentsPayload>;
                };
                update: {
                    args: Prisma.paymentsUpdateArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$paymentsPayload>;
                };
                deleteMany: {
                    args: Prisma.paymentsDeleteManyArgs<ExtArgs>;
                    result: BatchPayload;
                };
                updateMany: {
                    args: Prisma.paymentsUpdateManyArgs<ExtArgs>;
                    result: BatchPayload;
                };
                updateManyAndReturn: {
                    args: Prisma.paymentsUpdateManyAndReturnArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$paymentsPayload>[];
                };
                upsert: {
                    args: Prisma.paymentsUpsertArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$paymentsPayload>;
                };
                aggregate: {
                    args: Prisma.PaymentsAggregateArgs<ExtArgs>;
                    result: runtime.Types.Utils.Optional<Prisma.AggregatePayments>;
                };
                groupBy: {
                    args: Prisma.paymentsGroupByArgs<ExtArgs>;
                    result: runtime.Types.Utils.Optional<Prisma.PaymentsGroupByOutputType>[];
                };
                count: {
                    args: Prisma.paymentsCountArgs<ExtArgs>;
                    result: runtime.Types.Utils.Optional<Prisma.PaymentsCountAggregateOutputType> | number;
                };
            };
        };
        payout_payment_items: {
            payload: Prisma.$payout_payment_itemsPayload<ExtArgs>;
            fields: Prisma.payout_payment_itemsFieldRefs;
            operations: {
                findUnique: {
                    args: Prisma.payout_payment_itemsFindUniqueArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$payout_payment_itemsPayload> | null;
                };
                findUniqueOrThrow: {
                    args: Prisma.payout_payment_itemsFindUniqueOrThrowArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$payout_payment_itemsPayload>;
                };
                findFirst: {
                    args: Prisma.payout_payment_itemsFindFirstArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$payout_payment_itemsPayload> | null;
                };
                findFirstOrThrow: {
                    args: Prisma.payout_payment_itemsFindFirstOrThrowArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$payout_payment_itemsPayload>;
                };
                findMany: {
                    args: Prisma.payout_payment_itemsFindManyArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$payout_payment_itemsPayload>[];
                };
                create: {
                    args: Prisma.payout_payment_itemsCreateArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$payout_payment_itemsPayload>;
                };
                createMany: {
                    args: Prisma.payout_payment_itemsCreateManyArgs<ExtArgs>;
                    result: BatchPayload;
                };
                createManyAndReturn: {
                    args: Prisma.payout_payment_itemsCreateManyAndReturnArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$payout_payment_itemsPayload>[];
                };
                delete: {
                    args: Prisma.payout_payment_itemsDeleteArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$payout_payment_itemsPayload>;
                };
                update: {
                    args: Prisma.payout_payment_itemsUpdateArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$payout_payment_itemsPayload>;
                };
                deleteMany: {
                    args: Prisma.payout_payment_itemsDeleteManyArgs<ExtArgs>;
                    result: BatchPayload;
                };
                updateMany: {
                    args: Prisma.payout_payment_itemsUpdateManyArgs<ExtArgs>;
                    result: BatchPayload;
                };
                updateManyAndReturn: {
                    args: Prisma.payout_payment_itemsUpdateManyAndReturnArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$payout_payment_itemsPayload>[];
                };
                upsert: {
                    args: Prisma.payout_payment_itemsUpsertArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$payout_payment_itemsPayload>;
                };
                aggregate: {
                    args: Prisma.Payout_payment_itemsAggregateArgs<ExtArgs>;
                    result: runtime.Types.Utils.Optional<Prisma.AggregatePayout_payment_items>;
                };
                groupBy: {
                    args: Prisma.payout_payment_itemsGroupByArgs<ExtArgs>;
                    result: runtime.Types.Utils.Optional<Prisma.Payout_payment_itemsGroupByOutputType>[];
                };
                count: {
                    args: Prisma.payout_payment_itemsCountArgs<ExtArgs>;
                    result: runtime.Types.Utils.Optional<Prisma.Payout_payment_itemsCountAggregateOutputType> | number;
                };
            };
        };
        payout_tracking: {
            payload: Prisma.$payout_trackingPayload<ExtArgs>;
            fields: Prisma.payout_trackingFieldRefs;
            operations: {
                findUnique: {
                    args: Prisma.payout_trackingFindUniqueArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$payout_trackingPayload> | null;
                };
                findUniqueOrThrow: {
                    args: Prisma.payout_trackingFindUniqueOrThrowArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$payout_trackingPayload>;
                };
                findFirst: {
                    args: Prisma.payout_trackingFindFirstArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$payout_trackingPayload> | null;
                };
                findFirstOrThrow: {
                    args: Prisma.payout_trackingFindFirstOrThrowArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$payout_trackingPayload>;
                };
                findMany: {
                    args: Prisma.payout_trackingFindManyArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$payout_trackingPayload>[];
                };
                create: {
                    args: Prisma.payout_trackingCreateArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$payout_trackingPayload>;
                };
                createMany: {
                    args: Prisma.payout_trackingCreateManyArgs<ExtArgs>;
                    result: BatchPayload;
                };
                createManyAndReturn: {
                    args: Prisma.payout_trackingCreateManyAndReturnArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$payout_trackingPayload>[];
                };
                delete: {
                    args: Prisma.payout_trackingDeleteArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$payout_trackingPayload>;
                };
                update: {
                    args: Prisma.payout_trackingUpdateArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$payout_trackingPayload>;
                };
                deleteMany: {
                    args: Prisma.payout_trackingDeleteManyArgs<ExtArgs>;
                    result: BatchPayload;
                };
                updateMany: {
                    args: Prisma.payout_trackingUpdateManyArgs<ExtArgs>;
                    result: BatchPayload;
                };
                updateManyAndReturn: {
                    args: Prisma.payout_trackingUpdateManyAndReturnArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$payout_trackingPayload>[];
                };
                upsert: {
                    args: Prisma.payout_trackingUpsertArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$payout_trackingPayload>;
                };
                aggregate: {
                    args: Prisma.Payout_trackingAggregateArgs<ExtArgs>;
                    result: runtime.Types.Utils.Optional<Prisma.AggregatePayout_tracking>;
                };
                groupBy: {
                    args: Prisma.payout_trackingGroupByArgs<ExtArgs>;
                    result: runtime.Types.Utils.Optional<Prisma.Payout_trackingGroupByOutputType>[];
                };
                count: {
                    args: Prisma.payout_trackingCountArgs<ExtArgs>;
                    result: runtime.Types.Utils.Optional<Prisma.Payout_trackingCountAggregateOutputType> | number;
                };
            };
        };
        pricing_plans: {
            payload: Prisma.$pricing_plansPayload<ExtArgs>;
            fields: Prisma.pricing_plansFieldRefs;
            operations: {
                findUnique: {
                    args: Prisma.pricing_plansFindUniqueArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$pricing_plansPayload> | null;
                };
                findUniqueOrThrow: {
                    args: Prisma.pricing_plansFindUniqueOrThrowArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$pricing_plansPayload>;
                };
                findFirst: {
                    args: Prisma.pricing_plansFindFirstArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$pricing_plansPayload> | null;
                };
                findFirstOrThrow: {
                    args: Prisma.pricing_plansFindFirstOrThrowArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$pricing_plansPayload>;
                };
                findMany: {
                    args: Prisma.pricing_plansFindManyArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$pricing_plansPayload>[];
                };
                create: {
                    args: Prisma.pricing_plansCreateArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$pricing_plansPayload>;
                };
                createMany: {
                    args: Prisma.pricing_plansCreateManyArgs<ExtArgs>;
                    result: BatchPayload;
                };
                createManyAndReturn: {
                    args: Prisma.pricing_plansCreateManyAndReturnArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$pricing_plansPayload>[];
                };
                delete: {
                    args: Prisma.pricing_plansDeleteArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$pricing_plansPayload>;
                };
                update: {
                    args: Prisma.pricing_plansUpdateArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$pricing_plansPayload>;
                };
                deleteMany: {
                    args: Prisma.pricing_plansDeleteManyArgs<ExtArgs>;
                    result: BatchPayload;
                };
                updateMany: {
                    args: Prisma.pricing_plansUpdateManyArgs<ExtArgs>;
                    result: BatchPayload;
                };
                updateManyAndReturn: {
                    args: Prisma.pricing_plansUpdateManyAndReturnArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$pricing_plansPayload>[];
                };
                upsert: {
                    args: Prisma.pricing_plansUpsertArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$pricing_plansPayload>;
                };
                aggregate: {
                    args: Prisma.Pricing_plansAggregateArgs<ExtArgs>;
                    result: runtime.Types.Utils.Optional<Prisma.AggregatePricing_plans>;
                };
                groupBy: {
                    args: Prisma.pricing_plansGroupByArgs<ExtArgs>;
                    result: runtime.Types.Utils.Optional<Prisma.Pricing_plansGroupByOutputType>[];
                };
                count: {
                    args: Prisma.pricing_plansCountArgs<ExtArgs>;
                    result: runtime.Types.Utils.Optional<Prisma.Pricing_plansCountAggregateOutputType> | number;
                };
            };
        };
        reviews: {
            payload: Prisma.$reviewsPayload<ExtArgs>;
            fields: Prisma.reviewsFieldRefs;
            operations: {
                findUnique: {
                    args: Prisma.reviewsFindUniqueArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$reviewsPayload> | null;
                };
                findUniqueOrThrow: {
                    args: Prisma.reviewsFindUniqueOrThrowArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$reviewsPayload>;
                };
                findFirst: {
                    args: Prisma.reviewsFindFirstArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$reviewsPayload> | null;
                };
                findFirstOrThrow: {
                    args: Prisma.reviewsFindFirstOrThrowArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$reviewsPayload>;
                };
                findMany: {
                    args: Prisma.reviewsFindManyArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$reviewsPayload>[];
                };
                create: {
                    args: Prisma.reviewsCreateArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$reviewsPayload>;
                };
                createMany: {
                    args: Prisma.reviewsCreateManyArgs<ExtArgs>;
                    result: BatchPayload;
                };
                createManyAndReturn: {
                    args: Prisma.reviewsCreateManyAndReturnArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$reviewsPayload>[];
                };
                delete: {
                    args: Prisma.reviewsDeleteArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$reviewsPayload>;
                };
                update: {
                    args: Prisma.reviewsUpdateArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$reviewsPayload>;
                };
                deleteMany: {
                    args: Prisma.reviewsDeleteManyArgs<ExtArgs>;
                    result: BatchPayload;
                };
                updateMany: {
                    args: Prisma.reviewsUpdateManyArgs<ExtArgs>;
                    result: BatchPayload;
                };
                updateManyAndReturn: {
                    args: Prisma.reviewsUpdateManyAndReturnArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$reviewsPayload>[];
                };
                upsert: {
                    args: Prisma.reviewsUpsertArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$reviewsPayload>;
                };
                aggregate: {
                    args: Prisma.ReviewsAggregateArgs<ExtArgs>;
                    result: runtime.Types.Utils.Optional<Prisma.AggregateReviews>;
                };
                groupBy: {
                    args: Prisma.reviewsGroupByArgs<ExtArgs>;
                    result: runtime.Types.Utils.Optional<Prisma.ReviewsGroupByOutputType>[];
                };
                count: {
                    args: Prisma.reviewsCountArgs<ExtArgs>;
                    result: runtime.Types.Utils.Optional<Prisma.ReviewsCountAggregateOutputType> | number;
                };
            };
        };
        user_profiles: {
            payload: Prisma.$user_profilesPayload<ExtArgs>;
            fields: Prisma.user_profilesFieldRefs;
            operations: {
                findUnique: {
                    args: Prisma.user_profilesFindUniqueArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$user_profilesPayload> | null;
                };
                findUniqueOrThrow: {
                    args: Prisma.user_profilesFindUniqueOrThrowArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$user_profilesPayload>;
                };
                findFirst: {
                    args: Prisma.user_profilesFindFirstArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$user_profilesPayload> | null;
                };
                findFirstOrThrow: {
                    args: Prisma.user_profilesFindFirstOrThrowArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$user_profilesPayload>;
                };
                findMany: {
                    args: Prisma.user_profilesFindManyArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$user_profilesPayload>[];
                };
                create: {
                    args: Prisma.user_profilesCreateArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$user_profilesPayload>;
                };
                createMany: {
                    args: Prisma.user_profilesCreateManyArgs<ExtArgs>;
                    result: BatchPayload;
                };
                createManyAndReturn: {
                    args: Prisma.user_profilesCreateManyAndReturnArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$user_profilesPayload>[];
                };
                delete: {
                    args: Prisma.user_profilesDeleteArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$user_profilesPayload>;
                };
                update: {
                    args: Prisma.user_profilesUpdateArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$user_profilesPayload>;
                };
                deleteMany: {
                    args: Prisma.user_profilesDeleteManyArgs<ExtArgs>;
                    result: BatchPayload;
                };
                updateMany: {
                    args: Prisma.user_profilesUpdateManyArgs<ExtArgs>;
                    result: BatchPayload;
                };
                updateManyAndReturn: {
                    args: Prisma.user_profilesUpdateManyAndReturnArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$user_profilesPayload>[];
                };
                upsert: {
                    args: Prisma.user_profilesUpsertArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$user_profilesPayload>;
                };
                aggregate: {
                    args: Prisma.User_profilesAggregateArgs<ExtArgs>;
                    result: runtime.Types.Utils.Optional<Prisma.AggregateUser_profiles>;
                };
                groupBy: {
                    args: Prisma.user_profilesGroupByArgs<ExtArgs>;
                    result: runtime.Types.Utils.Optional<Prisma.User_profilesGroupByOutputType>[];
                };
                count: {
                    args: Prisma.user_profilesCountArgs<ExtArgs>;
                    result: runtime.Types.Utils.Optional<Prisma.User_profilesCountAggregateOutputType> | number;
                };
            };
        };
        user_roles: {
            payload: Prisma.$user_rolesPayload<ExtArgs>;
            fields: Prisma.user_rolesFieldRefs;
            operations: {
                findUnique: {
                    args: Prisma.user_rolesFindUniqueArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$user_rolesPayload> | null;
                };
                findUniqueOrThrow: {
                    args: Prisma.user_rolesFindUniqueOrThrowArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$user_rolesPayload>;
                };
                findFirst: {
                    args: Prisma.user_rolesFindFirstArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$user_rolesPayload> | null;
                };
                findFirstOrThrow: {
                    args: Prisma.user_rolesFindFirstOrThrowArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$user_rolesPayload>;
                };
                findMany: {
                    args: Prisma.user_rolesFindManyArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$user_rolesPayload>[];
                };
                create: {
                    args: Prisma.user_rolesCreateArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$user_rolesPayload>;
                };
                createMany: {
                    args: Prisma.user_rolesCreateManyArgs<ExtArgs>;
                    result: BatchPayload;
                };
                createManyAndReturn: {
                    args: Prisma.user_rolesCreateManyAndReturnArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$user_rolesPayload>[];
                };
                delete: {
                    args: Prisma.user_rolesDeleteArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$user_rolesPayload>;
                };
                update: {
                    args: Prisma.user_rolesUpdateArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$user_rolesPayload>;
                };
                deleteMany: {
                    args: Prisma.user_rolesDeleteManyArgs<ExtArgs>;
                    result: BatchPayload;
                };
                updateMany: {
                    args: Prisma.user_rolesUpdateManyArgs<ExtArgs>;
                    result: BatchPayload;
                };
                updateManyAndReturn: {
                    args: Prisma.user_rolesUpdateManyAndReturnArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$user_rolesPayload>[];
                };
                upsert: {
                    args: Prisma.user_rolesUpsertArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$user_rolesPayload>;
                };
                aggregate: {
                    args: Prisma.User_rolesAggregateArgs<ExtArgs>;
                    result: runtime.Types.Utils.Optional<Prisma.AggregateUser_roles>;
                };
                groupBy: {
                    args: Prisma.user_rolesGroupByArgs<ExtArgs>;
                    result: runtime.Types.Utils.Optional<Prisma.User_rolesGroupByOutputType>[];
                };
                count: {
                    args: Prisma.user_rolesCountArgs<ExtArgs>;
                    result: runtime.Types.Utils.Optional<Prisma.User_rolesCountAggregateOutputType> | number;
                };
            };
        };
        users: {
            payload: Prisma.$usersPayload<ExtArgs>;
            fields: Prisma.usersFieldRefs;
            operations: {
                findUnique: {
                    args: Prisma.usersFindUniqueArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$usersPayload> | null;
                };
                findUniqueOrThrow: {
                    args: Prisma.usersFindUniqueOrThrowArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$usersPayload>;
                };
                findFirst: {
                    args: Prisma.usersFindFirstArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$usersPayload> | null;
                };
                findFirstOrThrow: {
                    args: Prisma.usersFindFirstOrThrowArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$usersPayload>;
                };
                findMany: {
                    args: Prisma.usersFindManyArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$usersPayload>[];
                };
                create: {
                    args: Prisma.usersCreateArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$usersPayload>;
                };
                createMany: {
                    args: Prisma.usersCreateManyArgs<ExtArgs>;
                    result: BatchPayload;
                };
                createManyAndReturn: {
                    args: Prisma.usersCreateManyAndReturnArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$usersPayload>[];
                };
                delete: {
                    args: Prisma.usersDeleteArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$usersPayload>;
                };
                update: {
                    args: Prisma.usersUpdateArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$usersPayload>;
                };
                deleteMany: {
                    args: Prisma.usersDeleteManyArgs<ExtArgs>;
                    result: BatchPayload;
                };
                updateMany: {
                    args: Prisma.usersUpdateManyArgs<ExtArgs>;
                    result: BatchPayload;
                };
                updateManyAndReturn: {
                    args: Prisma.usersUpdateManyAndReturnArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$usersPayload>[];
                };
                upsert: {
                    args: Prisma.usersUpsertArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$usersPayload>;
                };
                aggregate: {
                    args: Prisma.UsersAggregateArgs<ExtArgs>;
                    result: runtime.Types.Utils.Optional<Prisma.AggregateUsers>;
                };
                groupBy: {
                    args: Prisma.usersGroupByArgs<ExtArgs>;
                    result: runtime.Types.Utils.Optional<Prisma.UsersGroupByOutputType>[];
                };
                count: {
                    args: Prisma.usersCountArgs<ExtArgs>;
                    result: runtime.Types.Utils.Optional<Prisma.UsersCountAggregateOutputType> | number;
                };
            };
        };
    };
} & {
    other: {
        payload: any;
        operations: {
            $executeRaw: {
                args: [query: TemplateStringsArray | Sql, ...values: any[]];
                result: any;
            };
            $executeRawUnsafe: {
                args: [query: string, ...values: any[]];
                result: any;
            };
            $queryRaw: {
                args: [query: TemplateStringsArray | Sql, ...values: any[]];
                result: any;
            };
            $queryRawUnsafe: {
                args: [query: string, ...values: any[]];
                result: any;
            };
        };
    };
};
export declare const TransactionIsolationLevel: {
    readonly ReadUncommitted: "ReadUncommitted";
    readonly ReadCommitted: "ReadCommitted";
    readonly RepeatableRead: "RepeatableRead";
    readonly Serializable: "Serializable";
};
export type TransactionIsolationLevel = (typeof TransactionIsolationLevel)[keyof typeof TransactionIsolationLevel];
export declare const Admin_actionsScalarFieldEnum: {
    readonly id: "id";
    readonly admin_id: "admin_id";
    readonly action_type: "action_type";
    readonly target_type: "target_type";
    readonly target_id: "target_id";
    readonly notes: "notes";
    readonly metadata: "metadata";
    readonly apartment_id: "apartment_id";
    readonly created_at: "created_at";
};
export type Admin_actionsScalarFieldEnum = (typeof Admin_actionsScalarFieldEnum)[keyof typeof Admin_actionsScalarFieldEnum];
export declare const Apartment_invitesScalarFieldEnum: {
    readonly id: "id";
    readonly apartment_id: "apartment_id";
    readonly invited_email: "invited_email";
    readonly token: "token";
    readonly token_expires_at: "token_expires_at";
    readonly unit_number: "unit_number";
    readonly status: "status";
    readonly invited_by: "invited_by";
    readonly used_by: "used_by";
    readonly notes: "notes";
    readonly created_at: "created_at";
    readonly updated_at: "updated_at";
};
export type Apartment_invitesScalarFieldEnum = (typeof Apartment_invitesScalarFieldEnum)[keyof typeof Apartment_invitesScalarFieldEnum];
export declare const ApartmentsScalarFieldEnum: {
    readonly id: "id";
    readonly name: "name";
    readonly address_line1: "address_line1";
    readonly address_line2: "address_line2";
    readonly city: "city";
    readonly state: "state";
    readonly country: "country";
    readonly postal_code: "postal_code";
    readonly total_units: "total_units";
    readonly admin_contact_email: "admin_contact_email";
    readonly is_active: "is_active";
    readonly created_at: "created_at";
    readonly updated_at: "updated_at";
};
export type ApartmentsScalarFieldEnum = (typeof ApartmentsScalarFieldEnum)[keyof typeof ApartmentsScalarFieldEnum];
export declare const Availability_slotsScalarFieldEnum: {
    readonly id: "id";
    readonly listing_id: "listing_id";
    readonly slot_type: "slot_type";
    readonly start_datetime: "start_datetime";
    readonly end_datetime: "end_datetime";
    readonly day_of_week: "day_of_week";
    readonly start_time: "start_time";
    readonly end_time: "end_time";
    readonly recurrence_start: "recurrence_start";
    readonly recurrence_end: "recurrence_end";
    readonly timezone: "timezone";
    readonly max_capacity: "max_capacity";
    readonly notes: "notes";
    readonly is_active: "is_active";
    readonly created_at: "created_at";
    readonly updated_at: "updated_at";
};
export type Availability_slotsScalarFieldEnum = (typeof Availability_slotsScalarFieldEnum)[keyof typeof Availability_slotsScalarFieldEnum];
export declare const BookingsScalarFieldEnum: {
    readonly id: "id";
    readonly learner_id: "learner_id";
    readonly listing_id: "listing_id";
    readonly slot_id: "slot_id";
    readonly pricing_plan_id: "pricing_plan_id";
    readonly provider_id: "provider_id";
    readonly status: "status";
    readonly session_start: "session_start";
    readonly session_end: "session_end";
    readonly cancelled_at: "cancelled_at";
    readonly cancellation_party: "cancellation_party";
    readonly cancellation_reason: "cancellation_reason";
    readonly learner_notes: "learner_notes";
    readonly provider_notes: "provider_notes";
    readonly deleted_at: "deleted_at";
    readonly created_at: "created_at";
    readonly updated_at: "updated_at";
};
export type BookingsScalarFieldEnum = (typeof BookingsScalarFieldEnum)[keyof typeof BookingsScalarFieldEnum];
export declare const CategoriesScalarFieldEnum: {
    readonly id: "id";
    readonly parent_id: "parent_id";
    readonly name: "name";
    readonly slug: "slug";
    readonly description: "description";
    readonly icon_url: "icon_url";
    readonly display_order: "display_order";
    readonly is_active: "is_active";
    readonly created_at: "created_at";
    readonly updated_at: "updated_at";
};
export type CategoriesScalarFieldEnum = (typeof CategoriesScalarFieldEnum)[keyof typeof CategoriesScalarFieldEnum];
export declare const Dispute_messagesScalarFieldEnum: {
    readonly id: "id";
    readonly dispute_id: "dispute_id";
    readonly sender_id: "sender_id";
    readonly body: "body";
    readonly is_internal: "is_internal";
    readonly created_at: "created_at";
};
export type Dispute_messagesScalarFieldEnum = (typeof Dispute_messagesScalarFieldEnum)[keyof typeof Dispute_messagesScalarFieldEnum];
export declare const DisputesScalarFieldEnum: {
    readonly id: "id";
    readonly booking_id: "booking_id";
    readonly filed_by: "filed_by";
    readonly against_user_id: "against_user_id";
    readonly apartment_id: "apartment_id";
    readonly subject: "subject";
    readonly description: "description";
    readonly evidence_urls: "evidence_urls";
    readonly status: "status";
    readonly assigned_to: "assigned_to";
    readonly resolution: "resolution";
    readonly resolution_notes: "resolution_notes";
    readonly resolved_at: "resolved_at";
    readonly created_at: "created_at";
    readonly updated_at: "updated_at";
};
export type DisputesScalarFieldEnum = (typeof DisputesScalarFieldEnum)[keyof typeof DisputesScalarFieldEnum];
export declare const Listing_mediaScalarFieldEnum: {
    readonly id: "id";
    readonly listing_id: "listing_id";
    readonly media_url: "media_url";
    readonly media_type: "media_type";
    readonly display_order: "display_order";
    readonly alt_text: "alt_text";
    readonly created_at: "created_at";
};
export type Listing_mediaScalarFieldEnum = (typeof Listing_mediaScalarFieldEnum)[keyof typeof Listing_mediaScalarFieldEnum];
export declare const ListingsScalarFieldEnum: {
    readonly id: "id";
    readonly provider_id: "provider_id";
    readonly apartment_id: "apartment_id";
    readonly category_id: "category_id";
    readonly title: "title";
    readonly slug: "slug";
    readonly description: "description";
    readonly mode: "mode";
    readonly location_details: "location_details";
    readonly age_group: "age_group";
    readonly max_capacity: "max_capacity";
    readonly prerequisites: "prerequisites";
    readonly tags: "tags";
    readonly status: "status";
    readonly is_featured: "is_featured";
    readonly rejection_reason: "rejection_reason";
    readonly deleted_at: "deleted_at";
    readonly created_at: "created_at";
    readonly updated_at: "updated_at";
};
export type ListingsScalarFieldEnum = (typeof ListingsScalarFieldEnum)[keyof typeof ListingsScalarFieldEnum];
export declare const MessagesScalarFieldEnum: {
    readonly id: "id";
    readonly booking_id: "booking_id";
    readonly sender_id: "sender_id";
    readonly recipient_id: "recipient_id";
    readonly body: "body";
    readonly is_read: "is_read";
    readonly read_at: "read_at";
    readonly deleted_at: "deleted_at";
    readonly created_at: "created_at";
};
export type MessagesScalarFieldEnum = (typeof MessagesScalarFieldEnum)[keyof typeof MessagesScalarFieldEnum];
export declare const Notification_templatesScalarFieldEnum: {
    readonly id: "id";
    readonly event_key: "event_key";
    readonly channel: "channel";
    readonly subject: "subject";
    readonly body_template: "body_template";
    readonly is_active: "is_active";
    readonly created_at: "created_at";
    readonly updated_at: "updated_at";
};
export type Notification_templatesScalarFieldEnum = (typeof Notification_templatesScalarFieldEnum)[keyof typeof Notification_templatesScalarFieldEnum];
export declare const NotificationsScalarFieldEnum: {
    readonly id: "id";
    readonly user_id: "user_id";
    readonly apartment_id: "apartment_id";
    readonly channel: "channel";
    readonly status: "status";
    readonly event_key: "event_key";
    readonly title: "title";
    readonly body: "body";
    readonly reference_type: "reference_type";
    readonly reference_id: "reference_id";
    readonly sent_at: "sent_at";
    readonly read_at: "read_at";
    readonly failed_reason: "failed_reason";
    readonly retry_count: "retry_count";
    readonly created_at: "created_at";
    readonly updated_at: "updated_at";
};
export type NotificationsScalarFieldEnum = (typeof NotificationsScalarFieldEnum)[keyof typeof NotificationsScalarFieldEnum];
export declare const PaymentsScalarFieldEnum: {
    readonly id: "id";
    readonly booking_id: "booking_id";
    readonly payer_id: "payer_id";
    readonly payee_id: "payee_id";
    readonly amount: "amount";
    readonly currency: "currency";
    readonly platform_fee: "platform_fee";
    readonly provider_amount: "provider_amount";
    readonly tax_amount: "tax_amount";
    readonly payment_method: "payment_method";
    readonly status: "status";
    readonly gateway_name: "gateway_name";
    readonly gateway_order_id: "gateway_order_id";
    readonly gateway_payment_id: "gateway_payment_id";
    readonly gateway_signature: "gateway_signature";
    readonly gateway_raw_response: "gateway_raw_response";
    readonly gateway_fee: "gateway_fee";
    readonly refunded_amount: "refunded_amount";
    readonly refund_reason: "refund_reason";
    readonly refunded_at: "refunded_at";
    readonly initiated_at: "initiated_at";
    readonly succeeded_at: "succeeded_at";
    readonly failed_at: "failed_at";
    readonly created_at: "created_at";
    readonly updated_at: "updated_at";
};
export type PaymentsScalarFieldEnum = (typeof PaymentsScalarFieldEnum)[keyof typeof PaymentsScalarFieldEnum];
export declare const Payout_payment_itemsScalarFieldEnum: {
    readonly id: "id";
    readonly payout_id: "payout_id";
    readonly payment_id: "payment_id";
    readonly amount: "amount";
};
export type Payout_payment_itemsScalarFieldEnum = (typeof Payout_payment_itemsScalarFieldEnum)[keyof typeof Payout_payment_itemsScalarFieldEnum];
export declare const Payout_trackingScalarFieldEnum: {
    readonly id: "id";
    readonly provider_id: "provider_id";
    readonly apartment_id: "apartment_id";
    readonly period_start: "period_start";
    readonly period_end: "period_end";
    readonly gross_amount: "gross_amount";
    readonly platform_fees_total: "platform_fees_total";
    readonly net_amount: "net_amount";
    readonly currency: "currency";
    readonly status: "status";
    readonly bank_reference: "bank_reference";
    readonly payout_method: "payout_method";
    readonly notes: "notes";
    readonly processed_by: "processed_by";
    readonly processed_at: "processed_at";
    readonly created_at: "created_at";
    readonly updated_at: "updated_at";
};
export type Payout_trackingScalarFieldEnum = (typeof Payout_trackingScalarFieldEnum)[keyof typeof Payout_trackingScalarFieldEnum];
export declare const Pricing_plansScalarFieldEnum: {
    readonly id: "id";
    readonly listing_id: "listing_id";
    readonly name: "name";
    readonly pricing_type: "pricing_type";
    readonly billing_cycle: "billing_cycle";
    readonly price_amount: "price_amount";
    readonly currency: "currency";
    readonly sessions_included: "sessions_included";
    readonly validity_days: "validity_days";
    readonly description: "description";
    readonly is_active: "is_active";
    readonly created_at: "created_at";
    readonly updated_at: "updated_at";
};
export type Pricing_plansScalarFieldEnum = (typeof Pricing_plansScalarFieldEnum)[keyof typeof Pricing_plansScalarFieldEnum];
export declare const ReviewsScalarFieldEnum: {
    readonly id: "id";
    readonly booking_id: "booking_id";
    readonly reviewer_id: "reviewer_id";
    readonly reviewee_id: "reviewee_id";
    readonly listing_id: "listing_id";
    readonly target: "target";
    readonly rating: "rating";
    readonly title: "title";
    readonly body: "body";
    readonly is_anonymous: "is_anonymous";
    readonly is_visible: "is_visible";
    readonly hidden_reason: "hidden_reason";
    readonly provider_reply: "provider_reply";
    readonly replied_at: "replied_at";
    readonly deleted_at: "deleted_at";
    readonly created_at: "created_at";
    readonly updated_at: "updated_at";
};
export type ReviewsScalarFieldEnum = (typeof ReviewsScalarFieldEnum)[keyof typeof ReviewsScalarFieldEnum];
export declare const User_profilesScalarFieldEnum: {
    readonly id: "id";
    readonly user_id: "user_id";
    readonly display_name: "display_name";
    readonly avatar_url: "avatar_url";
    readonly bio: "bio";
    readonly languages: "languages";
    readonly skills_offered: "skills_offered";
    readonly interests: "interests";
    readonly website_url: "website_url";
    readonly linkedin_url: "linkedin_url";
    readonly is_public: "is_public";
    readonly created_at: "created_at";
    readonly updated_at: "updated_at";
};
export type User_profilesScalarFieldEnum = (typeof User_profilesScalarFieldEnum)[keyof typeof User_profilesScalarFieldEnum];
export declare const User_rolesScalarFieldEnum: {
    readonly id: "id";
    readonly user_id: "user_id";
    readonly role: "role";
    readonly granted_by: "granted_by";
    readonly granted_at: "granted_at";
    readonly revoked_at: "revoked_at";
};
export type User_rolesScalarFieldEnum = (typeof User_rolesScalarFieldEnum)[keyof typeof User_rolesScalarFieldEnum];
export declare const UsersScalarFieldEnum: {
    readonly id: "id";
    readonly auth_uid: "auth_uid";
    readonly email: "email";
    readonly phone: "phone";
    readonly apartment_id: "apartment_id";
    readonly unit_number: "unit_number";
    readonly invite_id: "invite_id";
    readonly status: "status";
    readonly email_verified: "email_verified";
    readonly phone_verified: "phone_verified";
    readonly last_login_at: "last_login_at";
    readonly deleted_at: "deleted_at";
    readonly created_at: "created_at";
    readonly updated_at: "updated_at";
};
export type UsersScalarFieldEnum = (typeof UsersScalarFieldEnum)[keyof typeof UsersScalarFieldEnum];
export declare const SortOrder: {
    readonly asc: "asc";
    readonly desc: "desc";
};
export type SortOrder = (typeof SortOrder)[keyof typeof SortOrder];
export declare const NullableJsonNullValueInput: {
    readonly DbNull: runtime.DbNullClass;
    readonly JsonNull: runtime.JsonNullClass;
};
export type NullableJsonNullValueInput = (typeof NullableJsonNullValueInput)[keyof typeof NullableJsonNullValueInput];
export declare const QueryMode: {
    readonly default: "default";
    readonly insensitive: "insensitive";
};
export type QueryMode = (typeof QueryMode)[keyof typeof QueryMode];
export declare const JsonNullValueFilter: {
    readonly DbNull: runtime.DbNullClass;
    readonly JsonNull: runtime.JsonNullClass;
    readonly AnyNull: runtime.AnyNullClass;
};
export type JsonNullValueFilter = (typeof JsonNullValueFilter)[keyof typeof JsonNullValueFilter];
export declare const NullsOrder: {
    readonly first: "first";
    readonly last: "last";
};
export type NullsOrder = (typeof NullsOrder)[keyof typeof NullsOrder];
export type StringFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'String'>;
export type ListStringFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'String[]'>;
export type Enumadmin_action_typeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'admin_action_type'>;
export type ListEnumadmin_action_typeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'admin_action_type[]'>;
export type JsonFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Json'>;
export type EnumQueryModeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'QueryMode'>;
export type DateTimeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'DateTime'>;
export type ListDateTimeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'DateTime[]'>;
export type Enuminvite_statusFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'invite_status'>;
export type ListEnuminvite_statusFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'invite_status[]'>;
export type IntFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Int'>;
export type ListIntFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Int[]'>;
export type BooleanFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Boolean'>;
export type Enumslot_typeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'slot_type'>;
export type ListEnumslot_typeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'slot_type[]'>;
export type Enumday_of_weekFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'day_of_week'>;
export type ListEnumday_of_weekFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'day_of_week[]'>;
export type Enumbooking_statusFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'booking_status'>;
export type ListEnumbooking_statusFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'booking_status[]'>;
export type Enumcancellation_partyFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'cancellation_party'>;
export type ListEnumcancellation_partyFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'cancellation_party[]'>;
export type Enumdispute_statusFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'dispute_status'>;
export type ListEnumdispute_statusFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'dispute_status[]'>;
export type Enumdispute_resolutionFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'dispute_resolution'>;
export type ListEnumdispute_resolutionFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'dispute_resolution[]'>;
export type Enumlisting_modeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'listing_mode'>;
export type ListEnumlisting_modeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'listing_mode[]'>;
export type Enumage_groupFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'age_group'>;
export type ListEnumage_groupFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'age_group[]'>;
export type Enumlisting_statusFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'listing_status'>;
export type ListEnumlisting_statusFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'listing_status[]'>;
export type Enumnotification_channelFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'notification_channel'>;
export type ListEnumnotification_channelFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'notification_channel[]'>;
export type Enumnotification_statusFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'notification_status'>;
export type ListEnumnotification_statusFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'notification_status[]'>;
export type DecimalFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Decimal'>;
export type ListDecimalFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Decimal[]'>;
export type Enumpayment_methodFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'payment_method'>;
export type ListEnumpayment_methodFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'payment_method[]'>;
export type Enumpayment_statusFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'payment_status'>;
export type ListEnumpayment_statusFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'payment_status[]'>;
export type Enumpayout_statusFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'payout_status'>;
export type ListEnumpayout_statusFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'payout_status[]'>;
export type Enumpricing_typeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'pricing_type'>;
export type ListEnumpricing_typeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'pricing_type[]'>;
export type Enumbilling_cycleFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'billing_cycle'>;
export type ListEnumbilling_cycleFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'billing_cycle[]'>;
export type Enumreview_targetFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'review_target'>;
export type ListEnumreview_targetFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'review_target[]'>;
export type Enumuser_roleFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'user_role'>;
export type ListEnumuser_roleFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'user_role[]'>;
export type Enumuser_statusFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'user_status'>;
export type ListEnumuser_statusFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'user_status[]'>;
export type FloatFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Float'>;
export type ListFloatFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Float[]'>;
export type BatchPayload = {
    count: number;
};
export declare const defineExtension: runtime.Types.Extensions.ExtendsHook<"define", TypeMapCb, runtime.Types.Extensions.DefaultArgs>;
export type DefaultPrismaClient = PrismaClient;
export type ErrorFormat = 'pretty' | 'colorless' | 'minimal';
export type PrismaClientOptions = ({
    adapter: runtime.SqlDriverAdapterFactory;
    accelerateUrl?: never;
} | {
    accelerateUrl: string;
    adapter?: never;
}) & {
    errorFormat?: ErrorFormat;
    log?: (LogLevel | LogDefinition)[];
    transactionOptions?: {
        maxWait?: number;
        timeout?: number;
        isolationLevel?: TransactionIsolationLevel;
    };
    omit?: GlobalOmitConfig;
    comments?: runtime.SqlCommenterPlugin[];
    queryPlanCacheMaxSize?: number;
};
export type GlobalOmitConfig = {
    admin_actions?: Prisma.admin_actionsOmit;
    apartment_invites?: Prisma.apartment_invitesOmit;
    apartments?: Prisma.apartmentsOmit;
    availability_slots?: Prisma.availability_slotsOmit;
    bookings?: Prisma.bookingsOmit;
    categories?: Prisma.categoriesOmit;
    dispute_messages?: Prisma.dispute_messagesOmit;
    disputes?: Prisma.disputesOmit;
    listing_media?: Prisma.listing_mediaOmit;
    listings?: Prisma.listingsOmit;
    messages?: Prisma.messagesOmit;
    notification_templates?: Prisma.notification_templatesOmit;
    notifications?: Prisma.notificationsOmit;
    payments?: Prisma.paymentsOmit;
    payout_payment_items?: Prisma.payout_payment_itemsOmit;
    payout_tracking?: Prisma.payout_trackingOmit;
    pricing_plans?: Prisma.pricing_plansOmit;
    reviews?: Prisma.reviewsOmit;
    user_profiles?: Prisma.user_profilesOmit;
    user_roles?: Prisma.user_rolesOmit;
    users?: Prisma.usersOmit;
};
export type LogLevel = 'info' | 'query' | 'warn' | 'error';
export type LogDefinition = {
    level: LogLevel;
    emit: 'stdout' | 'event';
};
export type CheckIsLogLevel<T> = T extends LogLevel ? T : never;
export type GetLogType<T> = CheckIsLogLevel<T extends LogDefinition ? T['level'] : T>;
export type GetEvents<T extends any[]> = T extends Array<LogLevel | LogDefinition> ? GetLogType<T[number]> : never;
export type QueryEvent = {
    timestamp: Date;
    query: string;
    params: string;
    duration: number;
    target: string;
};
export type LogEvent = {
    timestamp: Date;
    message: string;
    target: string;
};
export type PrismaAction = 'findUnique' | 'findUniqueOrThrow' | 'findMany' | 'findFirst' | 'findFirstOrThrow' | 'create' | 'createMany' | 'createManyAndReturn' | 'update' | 'updateMany' | 'updateManyAndReturn' | 'upsert' | 'delete' | 'deleteMany' | 'executeRaw' | 'queryRaw' | 'aggregate' | 'count' | 'runCommandRaw' | 'findRaw' | 'groupBy';
export type TransactionClient = Omit<DefaultPrismaClient, runtime.ITXClientDenyList>;
