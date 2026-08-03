import type * as runtime from "@prisma/client/runtime/client";
import type * as $Enums from "../enums.js";
import type * as Prisma from "../internal/prismaNamespace.js";
export type availability_slotsModel = runtime.Types.Result.DefaultSelection<Prisma.$availability_slotsPayload>;
export type AggregateAvailability_slots = {
    _count: Availability_slotsCountAggregateOutputType | null;
    _avg: Availability_slotsAvgAggregateOutputType | null;
    _sum: Availability_slotsSumAggregateOutputType | null;
    _min: Availability_slotsMinAggregateOutputType | null;
    _max: Availability_slotsMaxAggregateOutputType | null;
};
export type Availability_slotsAvgAggregateOutputType = {
    max_capacity: number | null;
};
export type Availability_slotsSumAggregateOutputType = {
    max_capacity: number | null;
};
export type Availability_slotsMinAggregateOutputType = {
    id: string | null;
    listing_id: string | null;
    slot_type: $Enums.slot_type | null;
    start_datetime: Date | null;
    end_datetime: Date | null;
    day_of_week: $Enums.day_of_week | null;
    start_time: Date | null;
    end_time: Date | null;
    recurrence_start: Date | null;
    recurrence_end: Date | null;
    timezone: string | null;
    max_capacity: number | null;
    notes: string | null;
    is_active: boolean | null;
    created_at: Date | null;
    updated_at: Date | null;
};
export type Availability_slotsMaxAggregateOutputType = {
    id: string | null;
    listing_id: string | null;
    slot_type: $Enums.slot_type | null;
    start_datetime: Date | null;
    end_datetime: Date | null;
    day_of_week: $Enums.day_of_week | null;
    start_time: Date | null;
    end_time: Date | null;
    recurrence_start: Date | null;
    recurrence_end: Date | null;
    timezone: string | null;
    max_capacity: number | null;
    notes: string | null;
    is_active: boolean | null;
    created_at: Date | null;
    updated_at: Date | null;
};
export type Availability_slotsCountAggregateOutputType = {
    id: number;
    listing_id: number;
    slot_type: number;
    start_datetime: number;
    end_datetime: number;
    day_of_week: number;
    start_time: number;
    end_time: number;
    recurrence_start: number;
    recurrence_end: number;
    timezone: number;
    max_capacity: number;
    notes: number;
    is_active: number;
    created_at: number;
    updated_at: number;
    _all: number;
};
export type Availability_slotsAvgAggregateInputType = {
    max_capacity?: true;
};
export type Availability_slotsSumAggregateInputType = {
    max_capacity?: true;
};
export type Availability_slotsMinAggregateInputType = {
    id?: true;
    listing_id?: true;
    slot_type?: true;
    start_datetime?: true;
    end_datetime?: true;
    day_of_week?: true;
    start_time?: true;
    end_time?: true;
    recurrence_start?: true;
    recurrence_end?: true;
    timezone?: true;
    max_capacity?: true;
    notes?: true;
    is_active?: true;
    created_at?: true;
    updated_at?: true;
};
export type Availability_slotsMaxAggregateInputType = {
    id?: true;
    listing_id?: true;
    slot_type?: true;
    start_datetime?: true;
    end_datetime?: true;
    day_of_week?: true;
    start_time?: true;
    end_time?: true;
    recurrence_start?: true;
    recurrence_end?: true;
    timezone?: true;
    max_capacity?: true;
    notes?: true;
    is_active?: true;
    created_at?: true;
    updated_at?: true;
};
export type Availability_slotsCountAggregateInputType = {
    id?: true;
    listing_id?: true;
    slot_type?: true;
    start_datetime?: true;
    end_datetime?: true;
    day_of_week?: true;
    start_time?: true;
    end_time?: true;
    recurrence_start?: true;
    recurrence_end?: true;
    timezone?: true;
    max_capacity?: true;
    notes?: true;
    is_active?: true;
    created_at?: true;
    updated_at?: true;
    _all?: true;
};
export type Availability_slotsAggregateArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    where?: Prisma.availability_slotsWhereInput;
    orderBy?: Prisma.availability_slotsOrderByWithRelationInput | Prisma.availability_slotsOrderByWithRelationInput[];
    cursor?: Prisma.availability_slotsWhereUniqueInput;
    take?: number;
    skip?: number;
    _count?: true | Availability_slotsCountAggregateInputType;
    _avg?: Availability_slotsAvgAggregateInputType;
    _sum?: Availability_slotsSumAggregateInputType;
    _min?: Availability_slotsMinAggregateInputType;
    _max?: Availability_slotsMaxAggregateInputType;
};
export type GetAvailability_slotsAggregateType<T extends Availability_slotsAggregateArgs> = {
    [P in keyof T & keyof AggregateAvailability_slots]: P extends '_count' | 'count' ? T[P] extends true ? number : Prisma.GetScalarType<T[P], AggregateAvailability_slots[P]> : Prisma.GetScalarType<T[P], AggregateAvailability_slots[P]>;
};
export type availability_slotsGroupByArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    where?: Prisma.availability_slotsWhereInput;
    orderBy?: Prisma.availability_slotsOrderByWithAggregationInput | Prisma.availability_slotsOrderByWithAggregationInput[];
    by: Prisma.Availability_slotsScalarFieldEnum[] | Prisma.Availability_slotsScalarFieldEnum;
    having?: Prisma.availability_slotsScalarWhereWithAggregatesInput;
    take?: number;
    skip?: number;
    _count?: Availability_slotsCountAggregateInputType | true;
    _avg?: Availability_slotsAvgAggregateInputType;
    _sum?: Availability_slotsSumAggregateInputType;
    _min?: Availability_slotsMinAggregateInputType;
    _max?: Availability_slotsMaxAggregateInputType;
};
export type Availability_slotsGroupByOutputType = {
    id: string;
    listing_id: string;
    slot_type: $Enums.slot_type;
    start_datetime: Date | null;
    end_datetime: Date | null;
    day_of_week: $Enums.day_of_week | null;
    start_time: Date | null;
    end_time: Date | null;
    recurrence_start: Date | null;
    recurrence_end: Date | null;
    timezone: string;
    max_capacity: number;
    notes: string | null;
    is_active: boolean;
    created_at: Date;
    updated_at: Date;
    _count: Availability_slotsCountAggregateOutputType | null;
    _avg: Availability_slotsAvgAggregateOutputType | null;
    _sum: Availability_slotsSumAggregateOutputType | null;
    _min: Availability_slotsMinAggregateOutputType | null;
    _max: Availability_slotsMaxAggregateOutputType | null;
};
export type GetAvailability_slotsGroupByPayload<T extends availability_slotsGroupByArgs> = Prisma.PrismaPromise<Array<Prisma.PickEnumerable<Availability_slotsGroupByOutputType, T['by']> & {
    [P in ((keyof T) & (keyof Availability_slotsGroupByOutputType))]: P extends '_count' ? T[P] extends boolean ? number : Prisma.GetScalarType<T[P], Availability_slotsGroupByOutputType[P]> : Prisma.GetScalarType<T[P], Availability_slotsGroupByOutputType[P]>;
}>>;
export type availability_slotsWhereInput = {
    AND?: Prisma.availability_slotsWhereInput | Prisma.availability_slotsWhereInput[];
    OR?: Prisma.availability_slotsWhereInput[];
    NOT?: Prisma.availability_slotsWhereInput | Prisma.availability_slotsWhereInput[];
    id?: Prisma.UuidFilter<"availability_slots"> | string;
    listing_id?: Prisma.UuidFilter<"availability_slots"> | string;
    slot_type?: Prisma.Enumslot_typeFilter<"availability_slots"> | $Enums.slot_type;
    start_datetime?: Prisma.DateTimeNullableFilter<"availability_slots"> | Date | string | null;
    end_datetime?: Prisma.DateTimeNullableFilter<"availability_slots"> | Date | string | null;
    day_of_week?: Prisma.Enumday_of_weekNullableFilter<"availability_slots"> | $Enums.day_of_week | null;
    start_time?: Prisma.DateTimeNullableFilter<"availability_slots"> | Date | string | null;
    end_time?: Prisma.DateTimeNullableFilter<"availability_slots"> | Date | string | null;
    recurrence_start?: Prisma.DateTimeNullableFilter<"availability_slots"> | Date | string | null;
    recurrence_end?: Prisma.DateTimeNullableFilter<"availability_slots"> | Date | string | null;
    timezone?: Prisma.StringFilter<"availability_slots"> | string;
    max_capacity?: Prisma.IntFilter<"availability_slots"> | number;
    notes?: Prisma.StringNullableFilter<"availability_slots"> | string | null;
    is_active?: Prisma.BoolFilter<"availability_slots"> | boolean;
    created_at?: Prisma.DateTimeFilter<"availability_slots"> | Date | string;
    updated_at?: Prisma.DateTimeFilter<"availability_slots"> | Date | string;
    listings?: Prisma.XOR<Prisma.ListingsScalarRelationFilter, Prisma.listingsWhereInput>;
    bookings?: Prisma.BookingsListRelationFilter;
};
export type availability_slotsOrderByWithRelationInput = {
    id?: Prisma.SortOrder;
    listing_id?: Prisma.SortOrder;
    slot_type?: Prisma.SortOrder;
    start_datetime?: Prisma.SortOrderInput | Prisma.SortOrder;
    end_datetime?: Prisma.SortOrderInput | Prisma.SortOrder;
    day_of_week?: Prisma.SortOrderInput | Prisma.SortOrder;
    start_time?: Prisma.SortOrderInput | Prisma.SortOrder;
    end_time?: Prisma.SortOrderInput | Prisma.SortOrder;
    recurrence_start?: Prisma.SortOrderInput | Prisma.SortOrder;
    recurrence_end?: Prisma.SortOrderInput | Prisma.SortOrder;
    timezone?: Prisma.SortOrder;
    max_capacity?: Prisma.SortOrder;
    notes?: Prisma.SortOrderInput | Prisma.SortOrder;
    is_active?: Prisma.SortOrder;
    created_at?: Prisma.SortOrder;
    updated_at?: Prisma.SortOrder;
    listings?: Prisma.listingsOrderByWithRelationInput;
    bookings?: Prisma.bookingsOrderByRelationAggregateInput;
};
export type availability_slotsWhereUniqueInput = Prisma.AtLeast<{
    id?: string;
    AND?: Prisma.availability_slotsWhereInput | Prisma.availability_slotsWhereInput[];
    OR?: Prisma.availability_slotsWhereInput[];
    NOT?: Prisma.availability_slotsWhereInput | Prisma.availability_slotsWhereInput[];
    listing_id?: Prisma.UuidFilter<"availability_slots"> | string;
    slot_type?: Prisma.Enumslot_typeFilter<"availability_slots"> | $Enums.slot_type;
    start_datetime?: Prisma.DateTimeNullableFilter<"availability_slots"> | Date | string | null;
    end_datetime?: Prisma.DateTimeNullableFilter<"availability_slots"> | Date | string | null;
    day_of_week?: Prisma.Enumday_of_weekNullableFilter<"availability_slots"> | $Enums.day_of_week | null;
    start_time?: Prisma.DateTimeNullableFilter<"availability_slots"> | Date | string | null;
    end_time?: Prisma.DateTimeNullableFilter<"availability_slots"> | Date | string | null;
    recurrence_start?: Prisma.DateTimeNullableFilter<"availability_slots"> | Date | string | null;
    recurrence_end?: Prisma.DateTimeNullableFilter<"availability_slots"> | Date | string | null;
    timezone?: Prisma.StringFilter<"availability_slots"> | string;
    max_capacity?: Prisma.IntFilter<"availability_slots"> | number;
    notes?: Prisma.StringNullableFilter<"availability_slots"> | string | null;
    is_active?: Prisma.BoolFilter<"availability_slots"> | boolean;
    created_at?: Prisma.DateTimeFilter<"availability_slots"> | Date | string;
    updated_at?: Prisma.DateTimeFilter<"availability_slots"> | Date | string;
    listings?: Prisma.XOR<Prisma.ListingsScalarRelationFilter, Prisma.listingsWhereInput>;
    bookings?: Prisma.BookingsListRelationFilter;
}, "id">;
export type availability_slotsOrderByWithAggregationInput = {
    id?: Prisma.SortOrder;
    listing_id?: Prisma.SortOrder;
    slot_type?: Prisma.SortOrder;
    start_datetime?: Prisma.SortOrderInput | Prisma.SortOrder;
    end_datetime?: Prisma.SortOrderInput | Prisma.SortOrder;
    day_of_week?: Prisma.SortOrderInput | Prisma.SortOrder;
    start_time?: Prisma.SortOrderInput | Prisma.SortOrder;
    end_time?: Prisma.SortOrderInput | Prisma.SortOrder;
    recurrence_start?: Prisma.SortOrderInput | Prisma.SortOrder;
    recurrence_end?: Prisma.SortOrderInput | Prisma.SortOrder;
    timezone?: Prisma.SortOrder;
    max_capacity?: Prisma.SortOrder;
    notes?: Prisma.SortOrderInput | Prisma.SortOrder;
    is_active?: Prisma.SortOrder;
    created_at?: Prisma.SortOrder;
    updated_at?: Prisma.SortOrder;
    _count?: Prisma.availability_slotsCountOrderByAggregateInput;
    _avg?: Prisma.availability_slotsAvgOrderByAggregateInput;
    _max?: Prisma.availability_slotsMaxOrderByAggregateInput;
    _min?: Prisma.availability_slotsMinOrderByAggregateInput;
    _sum?: Prisma.availability_slotsSumOrderByAggregateInput;
};
export type availability_slotsScalarWhereWithAggregatesInput = {
    AND?: Prisma.availability_slotsScalarWhereWithAggregatesInput | Prisma.availability_slotsScalarWhereWithAggregatesInput[];
    OR?: Prisma.availability_slotsScalarWhereWithAggregatesInput[];
    NOT?: Prisma.availability_slotsScalarWhereWithAggregatesInput | Prisma.availability_slotsScalarWhereWithAggregatesInput[];
    id?: Prisma.UuidWithAggregatesFilter<"availability_slots"> | string;
    listing_id?: Prisma.UuidWithAggregatesFilter<"availability_slots"> | string;
    slot_type?: Prisma.Enumslot_typeWithAggregatesFilter<"availability_slots"> | $Enums.slot_type;
    start_datetime?: Prisma.DateTimeNullableWithAggregatesFilter<"availability_slots"> | Date | string | null;
    end_datetime?: Prisma.DateTimeNullableWithAggregatesFilter<"availability_slots"> | Date | string | null;
    day_of_week?: Prisma.Enumday_of_weekNullableWithAggregatesFilter<"availability_slots"> | $Enums.day_of_week | null;
    start_time?: Prisma.DateTimeNullableWithAggregatesFilter<"availability_slots"> | Date | string | null;
    end_time?: Prisma.DateTimeNullableWithAggregatesFilter<"availability_slots"> | Date | string | null;
    recurrence_start?: Prisma.DateTimeNullableWithAggregatesFilter<"availability_slots"> | Date | string | null;
    recurrence_end?: Prisma.DateTimeNullableWithAggregatesFilter<"availability_slots"> | Date | string | null;
    timezone?: Prisma.StringWithAggregatesFilter<"availability_slots"> | string;
    max_capacity?: Prisma.IntWithAggregatesFilter<"availability_slots"> | number;
    notes?: Prisma.StringNullableWithAggregatesFilter<"availability_slots"> | string | null;
    is_active?: Prisma.BoolWithAggregatesFilter<"availability_slots"> | boolean;
    created_at?: Prisma.DateTimeWithAggregatesFilter<"availability_slots"> | Date | string;
    updated_at?: Prisma.DateTimeWithAggregatesFilter<"availability_slots"> | Date | string;
};
export type availability_slotsCreateInput = {
    id?: string;
    slot_type?: $Enums.slot_type;
    start_datetime?: Date | string | null;
    end_datetime?: Date | string | null;
    day_of_week?: $Enums.day_of_week | null;
    start_time?: Date | string | null;
    end_time?: Date | string | null;
    recurrence_start?: Date | string | null;
    recurrence_end?: Date | string | null;
    timezone?: string;
    max_capacity?: number;
    notes?: string | null;
    is_active?: boolean;
    created_at?: Date | string;
    updated_at?: Date | string;
    listings: Prisma.listingsCreateNestedOneWithoutAvailability_slotsInput;
    bookings?: Prisma.bookingsCreateNestedManyWithoutAvailability_slotsInput;
};
export type availability_slotsUncheckedCreateInput = {
    id?: string;
    listing_id: string;
    slot_type?: $Enums.slot_type;
    start_datetime?: Date | string | null;
    end_datetime?: Date | string | null;
    day_of_week?: $Enums.day_of_week | null;
    start_time?: Date | string | null;
    end_time?: Date | string | null;
    recurrence_start?: Date | string | null;
    recurrence_end?: Date | string | null;
    timezone?: string;
    max_capacity?: number;
    notes?: string | null;
    is_active?: boolean;
    created_at?: Date | string;
    updated_at?: Date | string;
    bookings?: Prisma.bookingsUncheckedCreateNestedManyWithoutAvailability_slotsInput;
};
export type availability_slotsUpdateInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    slot_type?: Prisma.Enumslot_typeFieldUpdateOperationsInput | $Enums.slot_type;
    start_datetime?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    end_datetime?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    day_of_week?: Prisma.NullableEnumday_of_weekFieldUpdateOperationsInput | $Enums.day_of_week | null;
    start_time?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    end_time?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    recurrence_start?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    recurrence_end?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    timezone?: Prisma.StringFieldUpdateOperationsInput | string;
    max_capacity?: Prisma.IntFieldUpdateOperationsInput | number;
    notes?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    is_active?: Prisma.BoolFieldUpdateOperationsInput | boolean;
    created_at?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    updated_at?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    listings?: Prisma.listingsUpdateOneRequiredWithoutAvailability_slotsNestedInput;
    bookings?: Prisma.bookingsUpdateManyWithoutAvailability_slotsNestedInput;
};
export type availability_slotsUncheckedUpdateInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    listing_id?: Prisma.StringFieldUpdateOperationsInput | string;
    slot_type?: Prisma.Enumslot_typeFieldUpdateOperationsInput | $Enums.slot_type;
    start_datetime?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    end_datetime?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    day_of_week?: Prisma.NullableEnumday_of_weekFieldUpdateOperationsInput | $Enums.day_of_week | null;
    start_time?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    end_time?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    recurrence_start?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    recurrence_end?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    timezone?: Prisma.StringFieldUpdateOperationsInput | string;
    max_capacity?: Prisma.IntFieldUpdateOperationsInput | number;
    notes?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    is_active?: Prisma.BoolFieldUpdateOperationsInput | boolean;
    created_at?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    updated_at?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    bookings?: Prisma.bookingsUncheckedUpdateManyWithoutAvailability_slotsNestedInput;
};
export type availability_slotsCreateManyInput = {
    id?: string;
    listing_id: string;
    slot_type?: $Enums.slot_type;
    start_datetime?: Date | string | null;
    end_datetime?: Date | string | null;
    day_of_week?: $Enums.day_of_week | null;
    start_time?: Date | string | null;
    end_time?: Date | string | null;
    recurrence_start?: Date | string | null;
    recurrence_end?: Date | string | null;
    timezone?: string;
    max_capacity?: number;
    notes?: string | null;
    is_active?: boolean;
    created_at?: Date | string;
    updated_at?: Date | string;
};
export type availability_slotsUpdateManyMutationInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    slot_type?: Prisma.Enumslot_typeFieldUpdateOperationsInput | $Enums.slot_type;
    start_datetime?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    end_datetime?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    day_of_week?: Prisma.NullableEnumday_of_weekFieldUpdateOperationsInput | $Enums.day_of_week | null;
    start_time?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    end_time?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    recurrence_start?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    recurrence_end?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    timezone?: Prisma.StringFieldUpdateOperationsInput | string;
    max_capacity?: Prisma.IntFieldUpdateOperationsInput | number;
    notes?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    is_active?: Prisma.BoolFieldUpdateOperationsInput | boolean;
    created_at?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    updated_at?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
};
export type availability_slotsUncheckedUpdateManyInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    listing_id?: Prisma.StringFieldUpdateOperationsInput | string;
    slot_type?: Prisma.Enumslot_typeFieldUpdateOperationsInput | $Enums.slot_type;
    start_datetime?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    end_datetime?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    day_of_week?: Prisma.NullableEnumday_of_weekFieldUpdateOperationsInput | $Enums.day_of_week | null;
    start_time?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    end_time?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    recurrence_start?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    recurrence_end?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    timezone?: Prisma.StringFieldUpdateOperationsInput | string;
    max_capacity?: Prisma.IntFieldUpdateOperationsInput | number;
    notes?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    is_active?: Prisma.BoolFieldUpdateOperationsInput | boolean;
    created_at?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    updated_at?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
};
export type availability_slotsCountOrderByAggregateInput = {
    id?: Prisma.SortOrder;
    listing_id?: Prisma.SortOrder;
    slot_type?: Prisma.SortOrder;
    start_datetime?: Prisma.SortOrder;
    end_datetime?: Prisma.SortOrder;
    day_of_week?: Prisma.SortOrder;
    start_time?: Prisma.SortOrder;
    end_time?: Prisma.SortOrder;
    recurrence_start?: Prisma.SortOrder;
    recurrence_end?: Prisma.SortOrder;
    timezone?: Prisma.SortOrder;
    max_capacity?: Prisma.SortOrder;
    notes?: Prisma.SortOrder;
    is_active?: Prisma.SortOrder;
    created_at?: Prisma.SortOrder;
    updated_at?: Prisma.SortOrder;
};
export type availability_slotsAvgOrderByAggregateInput = {
    max_capacity?: Prisma.SortOrder;
};
export type availability_slotsMaxOrderByAggregateInput = {
    id?: Prisma.SortOrder;
    listing_id?: Prisma.SortOrder;
    slot_type?: Prisma.SortOrder;
    start_datetime?: Prisma.SortOrder;
    end_datetime?: Prisma.SortOrder;
    day_of_week?: Prisma.SortOrder;
    start_time?: Prisma.SortOrder;
    end_time?: Prisma.SortOrder;
    recurrence_start?: Prisma.SortOrder;
    recurrence_end?: Prisma.SortOrder;
    timezone?: Prisma.SortOrder;
    max_capacity?: Prisma.SortOrder;
    notes?: Prisma.SortOrder;
    is_active?: Prisma.SortOrder;
    created_at?: Prisma.SortOrder;
    updated_at?: Prisma.SortOrder;
};
export type availability_slotsMinOrderByAggregateInput = {
    id?: Prisma.SortOrder;
    listing_id?: Prisma.SortOrder;
    slot_type?: Prisma.SortOrder;
    start_datetime?: Prisma.SortOrder;
    end_datetime?: Prisma.SortOrder;
    day_of_week?: Prisma.SortOrder;
    start_time?: Prisma.SortOrder;
    end_time?: Prisma.SortOrder;
    recurrence_start?: Prisma.SortOrder;
    recurrence_end?: Prisma.SortOrder;
    timezone?: Prisma.SortOrder;
    max_capacity?: Prisma.SortOrder;
    notes?: Prisma.SortOrder;
    is_active?: Prisma.SortOrder;
    created_at?: Prisma.SortOrder;
    updated_at?: Prisma.SortOrder;
};
export type availability_slotsSumOrderByAggregateInput = {
    max_capacity?: Prisma.SortOrder;
};
export type Availability_slotsScalarRelationFilter = {
    is?: Prisma.availability_slotsWhereInput;
    isNot?: Prisma.availability_slotsWhereInput;
};
export type Availability_slotsListRelationFilter = {
    every?: Prisma.availability_slotsWhereInput;
    some?: Prisma.availability_slotsWhereInput;
    none?: Prisma.availability_slotsWhereInput;
};
export type availability_slotsOrderByRelationAggregateInput = {
    _count?: Prisma.SortOrder;
};
export type Enumslot_typeFieldUpdateOperationsInput = {
    set?: $Enums.slot_type;
};
export type NullableDateTimeFieldUpdateOperationsInput = {
    set?: Date | string | null;
};
export type NullableEnumday_of_weekFieldUpdateOperationsInput = {
    set?: $Enums.day_of_week | null;
};
export type IntFieldUpdateOperationsInput = {
    set?: number;
    increment?: number;
    decrement?: number;
    multiply?: number;
    divide?: number;
};
export type availability_slotsCreateNestedOneWithoutBookingsInput = {
    create?: Prisma.XOR<Prisma.availability_slotsCreateWithoutBookingsInput, Prisma.availability_slotsUncheckedCreateWithoutBookingsInput>;
    connectOrCreate?: Prisma.availability_slotsCreateOrConnectWithoutBookingsInput;
    connect?: Prisma.availability_slotsWhereUniqueInput;
};
export type availability_slotsUpdateOneRequiredWithoutBookingsNestedInput = {
    create?: Prisma.XOR<Prisma.availability_slotsCreateWithoutBookingsInput, Prisma.availability_slotsUncheckedCreateWithoutBookingsInput>;
    connectOrCreate?: Prisma.availability_slotsCreateOrConnectWithoutBookingsInput;
    upsert?: Prisma.availability_slotsUpsertWithoutBookingsInput;
    connect?: Prisma.availability_slotsWhereUniqueInput;
    update?: Prisma.XOR<Prisma.XOR<Prisma.availability_slotsUpdateToOneWithWhereWithoutBookingsInput, Prisma.availability_slotsUpdateWithoutBookingsInput>, Prisma.availability_slotsUncheckedUpdateWithoutBookingsInput>;
};
export type availability_slotsCreateNestedManyWithoutListingsInput = {
    create?: Prisma.XOR<Prisma.availability_slotsCreateWithoutListingsInput, Prisma.availability_slotsUncheckedCreateWithoutListingsInput> | Prisma.availability_slotsCreateWithoutListingsInput[] | Prisma.availability_slotsUncheckedCreateWithoutListingsInput[];
    connectOrCreate?: Prisma.availability_slotsCreateOrConnectWithoutListingsInput | Prisma.availability_slotsCreateOrConnectWithoutListingsInput[];
    createMany?: Prisma.availability_slotsCreateManyListingsInputEnvelope;
    connect?: Prisma.availability_slotsWhereUniqueInput | Prisma.availability_slotsWhereUniqueInput[];
};
export type availability_slotsUncheckedCreateNestedManyWithoutListingsInput = {
    create?: Prisma.XOR<Prisma.availability_slotsCreateWithoutListingsInput, Prisma.availability_slotsUncheckedCreateWithoutListingsInput> | Prisma.availability_slotsCreateWithoutListingsInput[] | Prisma.availability_slotsUncheckedCreateWithoutListingsInput[];
    connectOrCreate?: Prisma.availability_slotsCreateOrConnectWithoutListingsInput | Prisma.availability_slotsCreateOrConnectWithoutListingsInput[];
    createMany?: Prisma.availability_slotsCreateManyListingsInputEnvelope;
    connect?: Prisma.availability_slotsWhereUniqueInput | Prisma.availability_slotsWhereUniqueInput[];
};
export type availability_slotsUpdateManyWithoutListingsNestedInput = {
    create?: Prisma.XOR<Prisma.availability_slotsCreateWithoutListingsInput, Prisma.availability_slotsUncheckedCreateWithoutListingsInput> | Prisma.availability_slotsCreateWithoutListingsInput[] | Prisma.availability_slotsUncheckedCreateWithoutListingsInput[];
    connectOrCreate?: Prisma.availability_slotsCreateOrConnectWithoutListingsInput | Prisma.availability_slotsCreateOrConnectWithoutListingsInput[];
    upsert?: Prisma.availability_slotsUpsertWithWhereUniqueWithoutListingsInput | Prisma.availability_slotsUpsertWithWhereUniqueWithoutListingsInput[];
    createMany?: Prisma.availability_slotsCreateManyListingsInputEnvelope;
    set?: Prisma.availability_slotsWhereUniqueInput | Prisma.availability_slotsWhereUniqueInput[];
    disconnect?: Prisma.availability_slotsWhereUniqueInput | Prisma.availability_slotsWhereUniqueInput[];
    delete?: Prisma.availability_slotsWhereUniqueInput | Prisma.availability_slotsWhereUniqueInput[];
    connect?: Prisma.availability_slotsWhereUniqueInput | Prisma.availability_slotsWhereUniqueInput[];
    update?: Prisma.availability_slotsUpdateWithWhereUniqueWithoutListingsInput | Prisma.availability_slotsUpdateWithWhereUniqueWithoutListingsInput[];
    updateMany?: Prisma.availability_slotsUpdateManyWithWhereWithoutListingsInput | Prisma.availability_slotsUpdateManyWithWhereWithoutListingsInput[];
    deleteMany?: Prisma.availability_slotsScalarWhereInput | Prisma.availability_slotsScalarWhereInput[];
};
export type availability_slotsUncheckedUpdateManyWithoutListingsNestedInput = {
    create?: Prisma.XOR<Prisma.availability_slotsCreateWithoutListingsInput, Prisma.availability_slotsUncheckedCreateWithoutListingsInput> | Prisma.availability_slotsCreateWithoutListingsInput[] | Prisma.availability_slotsUncheckedCreateWithoutListingsInput[];
    connectOrCreate?: Prisma.availability_slotsCreateOrConnectWithoutListingsInput | Prisma.availability_slotsCreateOrConnectWithoutListingsInput[];
    upsert?: Prisma.availability_slotsUpsertWithWhereUniqueWithoutListingsInput | Prisma.availability_slotsUpsertWithWhereUniqueWithoutListingsInput[];
    createMany?: Prisma.availability_slotsCreateManyListingsInputEnvelope;
    set?: Prisma.availability_slotsWhereUniqueInput | Prisma.availability_slotsWhereUniqueInput[];
    disconnect?: Prisma.availability_slotsWhereUniqueInput | Prisma.availability_slotsWhereUniqueInput[];
    delete?: Prisma.availability_slotsWhereUniqueInput | Prisma.availability_slotsWhereUniqueInput[];
    connect?: Prisma.availability_slotsWhereUniqueInput | Prisma.availability_slotsWhereUniqueInput[];
    update?: Prisma.availability_slotsUpdateWithWhereUniqueWithoutListingsInput | Prisma.availability_slotsUpdateWithWhereUniqueWithoutListingsInput[];
    updateMany?: Prisma.availability_slotsUpdateManyWithWhereWithoutListingsInput | Prisma.availability_slotsUpdateManyWithWhereWithoutListingsInput[];
    deleteMany?: Prisma.availability_slotsScalarWhereInput | Prisma.availability_slotsScalarWhereInput[];
};
export type availability_slotsCreateWithoutBookingsInput = {
    id?: string;
    slot_type?: $Enums.slot_type;
    start_datetime?: Date | string | null;
    end_datetime?: Date | string | null;
    day_of_week?: $Enums.day_of_week | null;
    start_time?: Date | string | null;
    end_time?: Date | string | null;
    recurrence_start?: Date | string | null;
    recurrence_end?: Date | string | null;
    timezone?: string;
    max_capacity?: number;
    notes?: string | null;
    is_active?: boolean;
    created_at?: Date | string;
    updated_at?: Date | string;
    listings: Prisma.listingsCreateNestedOneWithoutAvailability_slotsInput;
};
export type availability_slotsUncheckedCreateWithoutBookingsInput = {
    id?: string;
    listing_id: string;
    slot_type?: $Enums.slot_type;
    start_datetime?: Date | string | null;
    end_datetime?: Date | string | null;
    day_of_week?: $Enums.day_of_week | null;
    start_time?: Date | string | null;
    end_time?: Date | string | null;
    recurrence_start?: Date | string | null;
    recurrence_end?: Date | string | null;
    timezone?: string;
    max_capacity?: number;
    notes?: string | null;
    is_active?: boolean;
    created_at?: Date | string;
    updated_at?: Date | string;
};
export type availability_slotsCreateOrConnectWithoutBookingsInput = {
    where: Prisma.availability_slotsWhereUniqueInput;
    create: Prisma.XOR<Prisma.availability_slotsCreateWithoutBookingsInput, Prisma.availability_slotsUncheckedCreateWithoutBookingsInput>;
};
export type availability_slotsUpsertWithoutBookingsInput = {
    update: Prisma.XOR<Prisma.availability_slotsUpdateWithoutBookingsInput, Prisma.availability_slotsUncheckedUpdateWithoutBookingsInput>;
    create: Prisma.XOR<Prisma.availability_slotsCreateWithoutBookingsInput, Prisma.availability_slotsUncheckedCreateWithoutBookingsInput>;
    where?: Prisma.availability_slotsWhereInput;
};
export type availability_slotsUpdateToOneWithWhereWithoutBookingsInput = {
    where?: Prisma.availability_slotsWhereInput;
    data: Prisma.XOR<Prisma.availability_slotsUpdateWithoutBookingsInput, Prisma.availability_slotsUncheckedUpdateWithoutBookingsInput>;
};
export type availability_slotsUpdateWithoutBookingsInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    slot_type?: Prisma.Enumslot_typeFieldUpdateOperationsInput | $Enums.slot_type;
    start_datetime?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    end_datetime?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    day_of_week?: Prisma.NullableEnumday_of_weekFieldUpdateOperationsInput | $Enums.day_of_week | null;
    start_time?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    end_time?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    recurrence_start?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    recurrence_end?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    timezone?: Prisma.StringFieldUpdateOperationsInput | string;
    max_capacity?: Prisma.IntFieldUpdateOperationsInput | number;
    notes?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    is_active?: Prisma.BoolFieldUpdateOperationsInput | boolean;
    created_at?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    updated_at?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    listings?: Prisma.listingsUpdateOneRequiredWithoutAvailability_slotsNestedInput;
};
export type availability_slotsUncheckedUpdateWithoutBookingsInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    listing_id?: Prisma.StringFieldUpdateOperationsInput | string;
    slot_type?: Prisma.Enumslot_typeFieldUpdateOperationsInput | $Enums.slot_type;
    start_datetime?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    end_datetime?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    day_of_week?: Prisma.NullableEnumday_of_weekFieldUpdateOperationsInput | $Enums.day_of_week | null;
    start_time?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    end_time?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    recurrence_start?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    recurrence_end?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    timezone?: Prisma.StringFieldUpdateOperationsInput | string;
    max_capacity?: Prisma.IntFieldUpdateOperationsInput | number;
    notes?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    is_active?: Prisma.BoolFieldUpdateOperationsInput | boolean;
    created_at?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    updated_at?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
};
export type availability_slotsCreateWithoutListingsInput = {
    id?: string;
    slot_type?: $Enums.slot_type;
    start_datetime?: Date | string | null;
    end_datetime?: Date | string | null;
    day_of_week?: $Enums.day_of_week | null;
    start_time?: Date | string | null;
    end_time?: Date | string | null;
    recurrence_start?: Date | string | null;
    recurrence_end?: Date | string | null;
    timezone?: string;
    max_capacity?: number;
    notes?: string | null;
    is_active?: boolean;
    created_at?: Date | string;
    updated_at?: Date | string;
    bookings?: Prisma.bookingsCreateNestedManyWithoutAvailability_slotsInput;
};
export type availability_slotsUncheckedCreateWithoutListingsInput = {
    id?: string;
    slot_type?: $Enums.slot_type;
    start_datetime?: Date | string | null;
    end_datetime?: Date | string | null;
    day_of_week?: $Enums.day_of_week | null;
    start_time?: Date | string | null;
    end_time?: Date | string | null;
    recurrence_start?: Date | string | null;
    recurrence_end?: Date | string | null;
    timezone?: string;
    max_capacity?: number;
    notes?: string | null;
    is_active?: boolean;
    created_at?: Date | string;
    updated_at?: Date | string;
    bookings?: Prisma.bookingsUncheckedCreateNestedManyWithoutAvailability_slotsInput;
};
export type availability_slotsCreateOrConnectWithoutListingsInput = {
    where: Prisma.availability_slotsWhereUniqueInput;
    create: Prisma.XOR<Prisma.availability_slotsCreateWithoutListingsInput, Prisma.availability_slotsUncheckedCreateWithoutListingsInput>;
};
export type availability_slotsCreateManyListingsInputEnvelope = {
    data: Prisma.availability_slotsCreateManyListingsInput | Prisma.availability_slotsCreateManyListingsInput[];
    skipDuplicates?: boolean;
};
export type availability_slotsUpsertWithWhereUniqueWithoutListingsInput = {
    where: Prisma.availability_slotsWhereUniqueInput;
    update: Prisma.XOR<Prisma.availability_slotsUpdateWithoutListingsInput, Prisma.availability_slotsUncheckedUpdateWithoutListingsInput>;
    create: Prisma.XOR<Prisma.availability_slotsCreateWithoutListingsInput, Prisma.availability_slotsUncheckedCreateWithoutListingsInput>;
};
export type availability_slotsUpdateWithWhereUniqueWithoutListingsInput = {
    where: Prisma.availability_slotsWhereUniqueInput;
    data: Prisma.XOR<Prisma.availability_slotsUpdateWithoutListingsInput, Prisma.availability_slotsUncheckedUpdateWithoutListingsInput>;
};
export type availability_slotsUpdateManyWithWhereWithoutListingsInput = {
    where: Prisma.availability_slotsScalarWhereInput;
    data: Prisma.XOR<Prisma.availability_slotsUpdateManyMutationInput, Prisma.availability_slotsUncheckedUpdateManyWithoutListingsInput>;
};
export type availability_slotsScalarWhereInput = {
    AND?: Prisma.availability_slotsScalarWhereInput | Prisma.availability_slotsScalarWhereInput[];
    OR?: Prisma.availability_slotsScalarWhereInput[];
    NOT?: Prisma.availability_slotsScalarWhereInput | Prisma.availability_slotsScalarWhereInput[];
    id?: Prisma.UuidFilter<"availability_slots"> | string;
    listing_id?: Prisma.UuidFilter<"availability_slots"> | string;
    slot_type?: Prisma.Enumslot_typeFilter<"availability_slots"> | $Enums.slot_type;
    start_datetime?: Prisma.DateTimeNullableFilter<"availability_slots"> | Date | string | null;
    end_datetime?: Prisma.DateTimeNullableFilter<"availability_slots"> | Date | string | null;
    day_of_week?: Prisma.Enumday_of_weekNullableFilter<"availability_slots"> | $Enums.day_of_week | null;
    start_time?: Prisma.DateTimeNullableFilter<"availability_slots"> | Date | string | null;
    end_time?: Prisma.DateTimeNullableFilter<"availability_slots"> | Date | string | null;
    recurrence_start?: Prisma.DateTimeNullableFilter<"availability_slots"> | Date | string | null;
    recurrence_end?: Prisma.DateTimeNullableFilter<"availability_slots"> | Date | string | null;
    timezone?: Prisma.StringFilter<"availability_slots"> | string;
    max_capacity?: Prisma.IntFilter<"availability_slots"> | number;
    notes?: Prisma.StringNullableFilter<"availability_slots"> | string | null;
    is_active?: Prisma.BoolFilter<"availability_slots"> | boolean;
    created_at?: Prisma.DateTimeFilter<"availability_slots"> | Date | string;
    updated_at?: Prisma.DateTimeFilter<"availability_slots"> | Date | string;
};
export type availability_slotsCreateManyListingsInput = {
    id?: string;
    slot_type?: $Enums.slot_type;
    start_datetime?: Date | string | null;
    end_datetime?: Date | string | null;
    day_of_week?: $Enums.day_of_week | null;
    start_time?: Date | string | null;
    end_time?: Date | string | null;
    recurrence_start?: Date | string | null;
    recurrence_end?: Date | string | null;
    timezone?: string;
    max_capacity?: number;
    notes?: string | null;
    is_active?: boolean;
    created_at?: Date | string;
    updated_at?: Date | string;
};
export type availability_slotsUpdateWithoutListingsInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    slot_type?: Prisma.Enumslot_typeFieldUpdateOperationsInput | $Enums.slot_type;
    start_datetime?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    end_datetime?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    day_of_week?: Prisma.NullableEnumday_of_weekFieldUpdateOperationsInput | $Enums.day_of_week | null;
    start_time?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    end_time?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    recurrence_start?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    recurrence_end?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    timezone?: Prisma.StringFieldUpdateOperationsInput | string;
    max_capacity?: Prisma.IntFieldUpdateOperationsInput | number;
    notes?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    is_active?: Prisma.BoolFieldUpdateOperationsInput | boolean;
    created_at?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    updated_at?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    bookings?: Prisma.bookingsUpdateManyWithoutAvailability_slotsNestedInput;
};
export type availability_slotsUncheckedUpdateWithoutListingsInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    slot_type?: Prisma.Enumslot_typeFieldUpdateOperationsInput | $Enums.slot_type;
    start_datetime?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    end_datetime?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    day_of_week?: Prisma.NullableEnumday_of_weekFieldUpdateOperationsInput | $Enums.day_of_week | null;
    start_time?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    end_time?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    recurrence_start?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    recurrence_end?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    timezone?: Prisma.StringFieldUpdateOperationsInput | string;
    max_capacity?: Prisma.IntFieldUpdateOperationsInput | number;
    notes?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    is_active?: Prisma.BoolFieldUpdateOperationsInput | boolean;
    created_at?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    updated_at?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    bookings?: Prisma.bookingsUncheckedUpdateManyWithoutAvailability_slotsNestedInput;
};
export type availability_slotsUncheckedUpdateManyWithoutListingsInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    slot_type?: Prisma.Enumslot_typeFieldUpdateOperationsInput | $Enums.slot_type;
    start_datetime?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    end_datetime?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    day_of_week?: Prisma.NullableEnumday_of_weekFieldUpdateOperationsInput | $Enums.day_of_week | null;
    start_time?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    end_time?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    recurrence_start?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    recurrence_end?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    timezone?: Prisma.StringFieldUpdateOperationsInput | string;
    max_capacity?: Prisma.IntFieldUpdateOperationsInput | number;
    notes?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    is_active?: Prisma.BoolFieldUpdateOperationsInput | boolean;
    created_at?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    updated_at?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
};
export type Availability_slotsCountOutputType = {
    bookings: number;
};
export type Availability_slotsCountOutputTypeSelect<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    bookings?: boolean | Availability_slotsCountOutputTypeCountBookingsArgs;
};
export type Availability_slotsCountOutputTypeDefaultArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.Availability_slotsCountOutputTypeSelect<ExtArgs> | null;
};
export type Availability_slotsCountOutputTypeCountBookingsArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    where?: Prisma.bookingsWhereInput;
};
export type availability_slotsSelect<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetSelect<{
    id?: boolean;
    listing_id?: boolean;
    slot_type?: boolean;
    start_datetime?: boolean;
    end_datetime?: boolean;
    day_of_week?: boolean;
    start_time?: boolean;
    end_time?: boolean;
    recurrence_start?: boolean;
    recurrence_end?: boolean;
    timezone?: boolean;
    max_capacity?: boolean;
    notes?: boolean;
    is_active?: boolean;
    created_at?: boolean;
    updated_at?: boolean;
    listings?: boolean | Prisma.listingsDefaultArgs<ExtArgs>;
    bookings?: boolean | Prisma.availability_slots$bookingsArgs<ExtArgs>;
    _count?: boolean | Prisma.Availability_slotsCountOutputTypeDefaultArgs<ExtArgs>;
}, ExtArgs["result"]["availability_slots"]>;
export type availability_slotsSelectCreateManyAndReturn<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetSelect<{
    id?: boolean;
    listing_id?: boolean;
    slot_type?: boolean;
    start_datetime?: boolean;
    end_datetime?: boolean;
    day_of_week?: boolean;
    start_time?: boolean;
    end_time?: boolean;
    recurrence_start?: boolean;
    recurrence_end?: boolean;
    timezone?: boolean;
    max_capacity?: boolean;
    notes?: boolean;
    is_active?: boolean;
    created_at?: boolean;
    updated_at?: boolean;
    listings?: boolean | Prisma.listingsDefaultArgs<ExtArgs>;
}, ExtArgs["result"]["availability_slots"]>;
export type availability_slotsSelectUpdateManyAndReturn<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetSelect<{
    id?: boolean;
    listing_id?: boolean;
    slot_type?: boolean;
    start_datetime?: boolean;
    end_datetime?: boolean;
    day_of_week?: boolean;
    start_time?: boolean;
    end_time?: boolean;
    recurrence_start?: boolean;
    recurrence_end?: boolean;
    timezone?: boolean;
    max_capacity?: boolean;
    notes?: boolean;
    is_active?: boolean;
    created_at?: boolean;
    updated_at?: boolean;
    listings?: boolean | Prisma.listingsDefaultArgs<ExtArgs>;
}, ExtArgs["result"]["availability_slots"]>;
export type availability_slotsSelectScalar = {
    id?: boolean;
    listing_id?: boolean;
    slot_type?: boolean;
    start_datetime?: boolean;
    end_datetime?: boolean;
    day_of_week?: boolean;
    start_time?: boolean;
    end_time?: boolean;
    recurrence_start?: boolean;
    recurrence_end?: boolean;
    timezone?: boolean;
    max_capacity?: boolean;
    notes?: boolean;
    is_active?: boolean;
    created_at?: boolean;
    updated_at?: boolean;
};
export type availability_slotsOmit<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetOmit<"id" | "listing_id" | "slot_type" | "start_datetime" | "end_datetime" | "day_of_week" | "start_time" | "end_time" | "recurrence_start" | "recurrence_end" | "timezone" | "max_capacity" | "notes" | "is_active" | "created_at" | "updated_at", ExtArgs["result"]["availability_slots"]>;
export type availability_slotsInclude<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    listings?: boolean | Prisma.listingsDefaultArgs<ExtArgs>;
    bookings?: boolean | Prisma.availability_slots$bookingsArgs<ExtArgs>;
    _count?: boolean | Prisma.Availability_slotsCountOutputTypeDefaultArgs<ExtArgs>;
};
export type availability_slotsIncludeCreateManyAndReturn<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    listings?: boolean | Prisma.listingsDefaultArgs<ExtArgs>;
};
export type availability_slotsIncludeUpdateManyAndReturn<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    listings?: boolean | Prisma.listingsDefaultArgs<ExtArgs>;
};
export type $availability_slotsPayload<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    name: "availability_slots";
    objects: {
        listings: Prisma.$listingsPayload<ExtArgs>;
        bookings: Prisma.$bookingsPayload<ExtArgs>[];
    };
    scalars: runtime.Types.Extensions.GetPayloadResult<{
        id: string;
        listing_id: string;
        slot_type: $Enums.slot_type;
        start_datetime: Date | null;
        end_datetime: Date | null;
        day_of_week: $Enums.day_of_week | null;
        start_time: Date | null;
        end_time: Date | null;
        recurrence_start: Date | null;
        recurrence_end: Date | null;
        timezone: string;
        max_capacity: number;
        notes: string | null;
        is_active: boolean;
        created_at: Date;
        updated_at: Date;
    }, ExtArgs["result"]["availability_slots"]>;
    composites: {};
};
export type availability_slotsGetPayload<S extends boolean | null | undefined | availability_slotsDefaultArgs> = runtime.Types.Result.GetResult<Prisma.$availability_slotsPayload, S>;
export type availability_slotsCountArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = Omit<availability_slotsFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
    select?: Availability_slotsCountAggregateInputType | true;
};
export interface availability_slotsDelegate<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: {
        types: Prisma.TypeMap<ExtArgs>['model']['availability_slots'];
        meta: {
            name: 'availability_slots';
        };
    };
    findUnique<T extends availability_slotsFindUniqueArgs>(args: Prisma.SelectSubset<T, availability_slotsFindUniqueArgs<ExtArgs>>): Prisma.Prisma__availability_slotsClient<runtime.Types.Result.GetResult<Prisma.$availability_slotsPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>;
    findUniqueOrThrow<T extends availability_slotsFindUniqueOrThrowArgs>(args: Prisma.SelectSubset<T, availability_slotsFindUniqueOrThrowArgs<ExtArgs>>): Prisma.Prisma__availability_slotsClient<runtime.Types.Result.GetResult<Prisma.$availability_slotsPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    findFirst<T extends availability_slotsFindFirstArgs>(args?: Prisma.SelectSubset<T, availability_slotsFindFirstArgs<ExtArgs>>): Prisma.Prisma__availability_slotsClient<runtime.Types.Result.GetResult<Prisma.$availability_slotsPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>;
    findFirstOrThrow<T extends availability_slotsFindFirstOrThrowArgs>(args?: Prisma.SelectSubset<T, availability_slotsFindFirstOrThrowArgs<ExtArgs>>): Prisma.Prisma__availability_slotsClient<runtime.Types.Result.GetResult<Prisma.$availability_slotsPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    findMany<T extends availability_slotsFindManyArgs>(args?: Prisma.SelectSubset<T, availability_slotsFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$availability_slotsPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>;
    create<T extends availability_slotsCreateArgs>(args: Prisma.SelectSubset<T, availability_slotsCreateArgs<ExtArgs>>): Prisma.Prisma__availability_slotsClient<runtime.Types.Result.GetResult<Prisma.$availability_slotsPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    createMany<T extends availability_slotsCreateManyArgs>(args?: Prisma.SelectSubset<T, availability_slotsCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<Prisma.BatchPayload>;
    createManyAndReturn<T extends availability_slotsCreateManyAndReturnArgs>(args?: Prisma.SelectSubset<T, availability_slotsCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$availability_slotsPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>;
    delete<T extends availability_slotsDeleteArgs>(args: Prisma.SelectSubset<T, availability_slotsDeleteArgs<ExtArgs>>): Prisma.Prisma__availability_slotsClient<runtime.Types.Result.GetResult<Prisma.$availability_slotsPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    update<T extends availability_slotsUpdateArgs>(args: Prisma.SelectSubset<T, availability_slotsUpdateArgs<ExtArgs>>): Prisma.Prisma__availability_slotsClient<runtime.Types.Result.GetResult<Prisma.$availability_slotsPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    deleteMany<T extends availability_slotsDeleteManyArgs>(args?: Prisma.SelectSubset<T, availability_slotsDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<Prisma.BatchPayload>;
    updateMany<T extends availability_slotsUpdateManyArgs>(args: Prisma.SelectSubset<T, availability_slotsUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<Prisma.BatchPayload>;
    updateManyAndReturn<T extends availability_slotsUpdateManyAndReturnArgs>(args: Prisma.SelectSubset<T, availability_slotsUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$availability_slotsPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>;
    upsert<T extends availability_slotsUpsertArgs>(args: Prisma.SelectSubset<T, availability_slotsUpsertArgs<ExtArgs>>): Prisma.Prisma__availability_slotsClient<runtime.Types.Result.GetResult<Prisma.$availability_slotsPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    count<T extends availability_slotsCountArgs>(args?: Prisma.Subset<T, availability_slotsCountArgs>): Prisma.PrismaPromise<T extends runtime.Types.Utils.Record<'select', any> ? T['select'] extends true ? number : Prisma.GetScalarType<T['select'], Availability_slotsCountAggregateOutputType> : number>;
    aggregate<T extends Availability_slotsAggregateArgs>(args: Prisma.Subset<T, Availability_slotsAggregateArgs>): Prisma.PrismaPromise<GetAvailability_slotsAggregateType<T>>;
    groupBy<T extends availability_slotsGroupByArgs, HasSelectOrTake extends Prisma.Or<Prisma.Extends<'skip', Prisma.Keys<T>>, Prisma.Extends<'take', Prisma.Keys<T>>>, OrderByArg extends Prisma.True extends HasSelectOrTake ? {
        orderBy: availability_slotsGroupByArgs['orderBy'];
    } : {
        orderBy?: availability_slotsGroupByArgs['orderBy'];
    }, OrderFields extends Prisma.ExcludeUnderscoreKeys<Prisma.Keys<Prisma.MaybeTupleToUnion<T['orderBy']>>>, ByFields extends Prisma.MaybeTupleToUnion<T['by']>, ByValid extends Prisma.Has<ByFields, OrderFields>, HavingFields extends Prisma.GetHavingFields<T['having']>, HavingValid extends Prisma.Has<ByFields, HavingFields>, ByEmpty extends T['by'] extends never[] ? Prisma.True : Prisma.False, InputErrors extends ByEmpty extends Prisma.True ? `Error: "by" must not be empty.` : HavingValid extends Prisma.False ? {
        [P in HavingFields]: P extends ByFields ? never : P extends string ? `Error: Field "${P}" used in "having" needs to be provided in "by".` : [
            Error,
            'Field ',
            P,
            ` in "having" needs to be provided in "by"`
        ];
    }[HavingFields] : 'take' extends Prisma.Keys<T> ? 'orderBy' extends Prisma.Keys<T> ? ByValid extends Prisma.True ? {} : {
        [P in OrderFields]: P extends ByFields ? never : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`;
    }[OrderFields] : 'Error: If you provide "take", you also need to provide "orderBy"' : 'skip' extends Prisma.Keys<T> ? 'orderBy' extends Prisma.Keys<T> ? ByValid extends Prisma.True ? {} : {
        [P in OrderFields]: P extends ByFields ? never : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`;
    }[OrderFields] : 'Error: If you provide "skip", you also need to provide "orderBy"' : ByValid extends Prisma.True ? {} : {
        [P in OrderFields]: P extends ByFields ? never : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`;
    }[OrderFields]>(args: Prisma.SubsetIntersection<T, availability_slotsGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetAvailability_slotsGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>;
    readonly fields: availability_slotsFieldRefs;
}
export interface Prisma__availability_slotsClient<T, Null = never, ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise";
    listings<T extends Prisma.listingsDefaultArgs<ExtArgs> = {}>(args?: Prisma.Subset<T, Prisma.listingsDefaultArgs<ExtArgs>>): Prisma.Prisma__listingsClient<runtime.Types.Result.GetResult<Prisma.$listingsPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>;
    bookings<T extends Prisma.availability_slots$bookingsArgs<ExtArgs> = {}>(args?: Prisma.Subset<T, Prisma.availability_slots$bookingsArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$bookingsPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>;
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): runtime.Types.Utils.JsPromise<TResult1 | TResult2>;
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): runtime.Types.Utils.JsPromise<T | TResult>;
    finally(onfinally?: (() => void) | undefined | null): runtime.Types.Utils.JsPromise<T>;
}
export interface availability_slotsFieldRefs {
    readonly id: Prisma.FieldRef<"availability_slots", 'String'>;
    readonly listing_id: Prisma.FieldRef<"availability_slots", 'String'>;
    readonly slot_type: Prisma.FieldRef<"availability_slots", 'slot_type'>;
    readonly start_datetime: Prisma.FieldRef<"availability_slots", 'DateTime'>;
    readonly end_datetime: Prisma.FieldRef<"availability_slots", 'DateTime'>;
    readonly day_of_week: Prisma.FieldRef<"availability_slots", 'day_of_week'>;
    readonly start_time: Prisma.FieldRef<"availability_slots", 'DateTime'>;
    readonly end_time: Prisma.FieldRef<"availability_slots", 'DateTime'>;
    readonly recurrence_start: Prisma.FieldRef<"availability_slots", 'DateTime'>;
    readonly recurrence_end: Prisma.FieldRef<"availability_slots", 'DateTime'>;
    readonly timezone: Prisma.FieldRef<"availability_slots", 'String'>;
    readonly max_capacity: Prisma.FieldRef<"availability_slots", 'Int'>;
    readonly notes: Prisma.FieldRef<"availability_slots", 'String'>;
    readonly is_active: Prisma.FieldRef<"availability_slots", 'Boolean'>;
    readonly created_at: Prisma.FieldRef<"availability_slots", 'DateTime'>;
    readonly updated_at: Prisma.FieldRef<"availability_slots", 'DateTime'>;
}
export type availability_slotsFindUniqueArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.availability_slotsSelect<ExtArgs> | null;
    omit?: Prisma.availability_slotsOmit<ExtArgs> | null;
    include?: Prisma.availability_slotsInclude<ExtArgs> | null;
    where: Prisma.availability_slotsWhereUniqueInput;
};
export type availability_slotsFindUniqueOrThrowArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.availability_slotsSelect<ExtArgs> | null;
    omit?: Prisma.availability_slotsOmit<ExtArgs> | null;
    include?: Prisma.availability_slotsInclude<ExtArgs> | null;
    where: Prisma.availability_slotsWhereUniqueInput;
};
export type availability_slotsFindFirstArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.availability_slotsSelect<ExtArgs> | null;
    omit?: Prisma.availability_slotsOmit<ExtArgs> | null;
    include?: Prisma.availability_slotsInclude<ExtArgs> | null;
    where?: Prisma.availability_slotsWhereInput;
    orderBy?: Prisma.availability_slotsOrderByWithRelationInput | Prisma.availability_slotsOrderByWithRelationInput[];
    cursor?: Prisma.availability_slotsWhereUniqueInput;
    take?: number;
    skip?: number;
    distinct?: Prisma.Availability_slotsScalarFieldEnum | Prisma.Availability_slotsScalarFieldEnum[];
};
export type availability_slotsFindFirstOrThrowArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.availability_slotsSelect<ExtArgs> | null;
    omit?: Prisma.availability_slotsOmit<ExtArgs> | null;
    include?: Prisma.availability_slotsInclude<ExtArgs> | null;
    where?: Prisma.availability_slotsWhereInput;
    orderBy?: Prisma.availability_slotsOrderByWithRelationInput | Prisma.availability_slotsOrderByWithRelationInput[];
    cursor?: Prisma.availability_slotsWhereUniqueInput;
    take?: number;
    skip?: number;
    distinct?: Prisma.Availability_slotsScalarFieldEnum | Prisma.Availability_slotsScalarFieldEnum[];
};
export type availability_slotsFindManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.availability_slotsSelect<ExtArgs> | null;
    omit?: Prisma.availability_slotsOmit<ExtArgs> | null;
    include?: Prisma.availability_slotsInclude<ExtArgs> | null;
    where?: Prisma.availability_slotsWhereInput;
    orderBy?: Prisma.availability_slotsOrderByWithRelationInput | Prisma.availability_slotsOrderByWithRelationInput[];
    cursor?: Prisma.availability_slotsWhereUniqueInput;
    take?: number;
    skip?: number;
    distinct?: Prisma.Availability_slotsScalarFieldEnum | Prisma.Availability_slotsScalarFieldEnum[];
};
export type availability_slotsCreateArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.availability_slotsSelect<ExtArgs> | null;
    omit?: Prisma.availability_slotsOmit<ExtArgs> | null;
    include?: Prisma.availability_slotsInclude<ExtArgs> | null;
    data: Prisma.XOR<Prisma.availability_slotsCreateInput, Prisma.availability_slotsUncheckedCreateInput>;
};
export type availability_slotsCreateManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    data: Prisma.availability_slotsCreateManyInput | Prisma.availability_slotsCreateManyInput[];
    skipDuplicates?: boolean;
};
export type availability_slotsCreateManyAndReturnArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.availability_slotsSelectCreateManyAndReturn<ExtArgs> | null;
    omit?: Prisma.availability_slotsOmit<ExtArgs> | null;
    data: Prisma.availability_slotsCreateManyInput | Prisma.availability_slotsCreateManyInput[];
    skipDuplicates?: boolean;
    include?: Prisma.availability_slotsIncludeCreateManyAndReturn<ExtArgs> | null;
};
export type availability_slotsUpdateArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.availability_slotsSelect<ExtArgs> | null;
    omit?: Prisma.availability_slotsOmit<ExtArgs> | null;
    include?: Prisma.availability_slotsInclude<ExtArgs> | null;
    data: Prisma.XOR<Prisma.availability_slotsUpdateInput, Prisma.availability_slotsUncheckedUpdateInput>;
    where: Prisma.availability_slotsWhereUniqueInput;
};
export type availability_slotsUpdateManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    data: Prisma.XOR<Prisma.availability_slotsUpdateManyMutationInput, Prisma.availability_slotsUncheckedUpdateManyInput>;
    where?: Prisma.availability_slotsWhereInput;
    limit?: number;
};
export type availability_slotsUpdateManyAndReturnArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.availability_slotsSelectUpdateManyAndReturn<ExtArgs> | null;
    omit?: Prisma.availability_slotsOmit<ExtArgs> | null;
    data: Prisma.XOR<Prisma.availability_slotsUpdateManyMutationInput, Prisma.availability_slotsUncheckedUpdateManyInput>;
    where?: Prisma.availability_slotsWhereInput;
    limit?: number;
    include?: Prisma.availability_slotsIncludeUpdateManyAndReturn<ExtArgs> | null;
};
export type availability_slotsUpsertArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.availability_slotsSelect<ExtArgs> | null;
    omit?: Prisma.availability_slotsOmit<ExtArgs> | null;
    include?: Prisma.availability_slotsInclude<ExtArgs> | null;
    where: Prisma.availability_slotsWhereUniqueInput;
    create: Prisma.XOR<Prisma.availability_slotsCreateInput, Prisma.availability_slotsUncheckedCreateInput>;
    update: Prisma.XOR<Prisma.availability_slotsUpdateInput, Prisma.availability_slotsUncheckedUpdateInput>;
};
export type availability_slotsDeleteArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.availability_slotsSelect<ExtArgs> | null;
    omit?: Prisma.availability_slotsOmit<ExtArgs> | null;
    include?: Prisma.availability_slotsInclude<ExtArgs> | null;
    where: Prisma.availability_slotsWhereUniqueInput;
};
export type availability_slotsDeleteManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    where?: Prisma.availability_slotsWhereInput;
    limit?: number;
};
export type availability_slots$bookingsArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.bookingsSelect<ExtArgs> | null;
    omit?: Prisma.bookingsOmit<ExtArgs> | null;
    include?: Prisma.bookingsInclude<ExtArgs> | null;
    where?: Prisma.bookingsWhereInput;
    orderBy?: Prisma.bookingsOrderByWithRelationInput | Prisma.bookingsOrderByWithRelationInput[];
    cursor?: Prisma.bookingsWhereUniqueInput;
    take?: number;
    skip?: number;
    distinct?: Prisma.BookingsScalarFieldEnum | Prisma.BookingsScalarFieldEnum[];
};
export type availability_slotsDefaultArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.availability_slotsSelect<ExtArgs> | null;
    omit?: Prisma.availability_slotsOmit<ExtArgs> | null;
    include?: Prisma.availability_slotsInclude<ExtArgs> | null;
};
