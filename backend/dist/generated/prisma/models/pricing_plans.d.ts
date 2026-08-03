import type * as runtime from "@prisma/client/runtime/client";
import type * as $Enums from "../enums.js";
import type * as Prisma from "../internal/prismaNamespace.js";
export type pricing_plansModel = runtime.Types.Result.DefaultSelection<Prisma.$pricing_plansPayload>;
export type AggregatePricing_plans = {
    _count: Pricing_plansCountAggregateOutputType | null;
    _avg: Pricing_plansAvgAggregateOutputType | null;
    _sum: Pricing_plansSumAggregateOutputType | null;
    _min: Pricing_plansMinAggregateOutputType | null;
    _max: Pricing_plansMaxAggregateOutputType | null;
};
export type Pricing_plansAvgAggregateOutputType = {
    price_amount: runtime.Decimal | null;
    sessions_included: number | null;
    validity_days: number | null;
};
export type Pricing_plansSumAggregateOutputType = {
    price_amount: runtime.Decimal | null;
    sessions_included: number | null;
    validity_days: number | null;
};
export type Pricing_plansMinAggregateOutputType = {
    id: string | null;
    listing_id: string | null;
    name: string | null;
    pricing_type: $Enums.pricing_type | null;
    billing_cycle: $Enums.billing_cycle | null;
    price_amount: runtime.Decimal | null;
    currency: string | null;
    sessions_included: number | null;
    validity_days: number | null;
    description: string | null;
    is_active: boolean | null;
    created_at: Date | null;
    updated_at: Date | null;
};
export type Pricing_plansMaxAggregateOutputType = {
    id: string | null;
    listing_id: string | null;
    name: string | null;
    pricing_type: $Enums.pricing_type | null;
    billing_cycle: $Enums.billing_cycle | null;
    price_amount: runtime.Decimal | null;
    currency: string | null;
    sessions_included: number | null;
    validity_days: number | null;
    description: string | null;
    is_active: boolean | null;
    created_at: Date | null;
    updated_at: Date | null;
};
export type Pricing_plansCountAggregateOutputType = {
    id: number;
    listing_id: number;
    name: number;
    pricing_type: number;
    billing_cycle: number;
    price_amount: number;
    currency: number;
    sessions_included: number;
    validity_days: number;
    description: number;
    is_active: number;
    created_at: number;
    updated_at: number;
    _all: number;
};
export type Pricing_plansAvgAggregateInputType = {
    price_amount?: true;
    sessions_included?: true;
    validity_days?: true;
};
export type Pricing_plansSumAggregateInputType = {
    price_amount?: true;
    sessions_included?: true;
    validity_days?: true;
};
export type Pricing_plansMinAggregateInputType = {
    id?: true;
    listing_id?: true;
    name?: true;
    pricing_type?: true;
    billing_cycle?: true;
    price_amount?: true;
    currency?: true;
    sessions_included?: true;
    validity_days?: true;
    description?: true;
    is_active?: true;
    created_at?: true;
    updated_at?: true;
};
export type Pricing_plansMaxAggregateInputType = {
    id?: true;
    listing_id?: true;
    name?: true;
    pricing_type?: true;
    billing_cycle?: true;
    price_amount?: true;
    currency?: true;
    sessions_included?: true;
    validity_days?: true;
    description?: true;
    is_active?: true;
    created_at?: true;
    updated_at?: true;
};
export type Pricing_plansCountAggregateInputType = {
    id?: true;
    listing_id?: true;
    name?: true;
    pricing_type?: true;
    billing_cycle?: true;
    price_amount?: true;
    currency?: true;
    sessions_included?: true;
    validity_days?: true;
    description?: true;
    is_active?: true;
    created_at?: true;
    updated_at?: true;
    _all?: true;
};
export type Pricing_plansAggregateArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    where?: Prisma.pricing_plansWhereInput;
    orderBy?: Prisma.pricing_plansOrderByWithRelationInput | Prisma.pricing_plansOrderByWithRelationInput[];
    cursor?: Prisma.pricing_plansWhereUniqueInput;
    take?: number;
    skip?: number;
    _count?: true | Pricing_plansCountAggregateInputType;
    _avg?: Pricing_plansAvgAggregateInputType;
    _sum?: Pricing_plansSumAggregateInputType;
    _min?: Pricing_plansMinAggregateInputType;
    _max?: Pricing_plansMaxAggregateInputType;
};
export type GetPricing_plansAggregateType<T extends Pricing_plansAggregateArgs> = {
    [P in keyof T & keyof AggregatePricing_plans]: P extends '_count' | 'count' ? T[P] extends true ? number : Prisma.GetScalarType<T[P], AggregatePricing_plans[P]> : Prisma.GetScalarType<T[P], AggregatePricing_plans[P]>;
};
export type pricing_plansGroupByArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    where?: Prisma.pricing_plansWhereInput;
    orderBy?: Prisma.pricing_plansOrderByWithAggregationInput | Prisma.pricing_plansOrderByWithAggregationInput[];
    by: Prisma.Pricing_plansScalarFieldEnum[] | Prisma.Pricing_plansScalarFieldEnum;
    having?: Prisma.pricing_plansScalarWhereWithAggregatesInput;
    take?: number;
    skip?: number;
    _count?: Pricing_plansCountAggregateInputType | true;
    _avg?: Pricing_plansAvgAggregateInputType;
    _sum?: Pricing_plansSumAggregateInputType;
    _min?: Pricing_plansMinAggregateInputType;
    _max?: Pricing_plansMaxAggregateInputType;
};
export type Pricing_plansGroupByOutputType = {
    id: string;
    listing_id: string;
    name: string;
    pricing_type: $Enums.pricing_type;
    billing_cycle: $Enums.billing_cycle;
    price_amount: runtime.Decimal;
    currency: string;
    sessions_included: number | null;
    validity_days: number | null;
    description: string | null;
    is_active: boolean;
    created_at: Date;
    updated_at: Date;
    _count: Pricing_plansCountAggregateOutputType | null;
    _avg: Pricing_plansAvgAggregateOutputType | null;
    _sum: Pricing_plansSumAggregateOutputType | null;
    _min: Pricing_plansMinAggregateOutputType | null;
    _max: Pricing_plansMaxAggregateOutputType | null;
};
export type GetPricing_plansGroupByPayload<T extends pricing_plansGroupByArgs> = Prisma.PrismaPromise<Array<Prisma.PickEnumerable<Pricing_plansGroupByOutputType, T['by']> & {
    [P in ((keyof T) & (keyof Pricing_plansGroupByOutputType))]: P extends '_count' ? T[P] extends boolean ? number : Prisma.GetScalarType<T[P], Pricing_plansGroupByOutputType[P]> : Prisma.GetScalarType<T[P], Pricing_plansGroupByOutputType[P]>;
}>>;
export type pricing_plansWhereInput = {
    AND?: Prisma.pricing_plansWhereInput | Prisma.pricing_plansWhereInput[];
    OR?: Prisma.pricing_plansWhereInput[];
    NOT?: Prisma.pricing_plansWhereInput | Prisma.pricing_plansWhereInput[];
    id?: Prisma.UuidFilter<"pricing_plans"> | string;
    listing_id?: Prisma.UuidFilter<"pricing_plans"> | string;
    name?: Prisma.StringFilter<"pricing_plans"> | string;
    pricing_type?: Prisma.Enumpricing_typeFilter<"pricing_plans"> | $Enums.pricing_type;
    billing_cycle?: Prisma.Enumbilling_cycleFilter<"pricing_plans"> | $Enums.billing_cycle;
    price_amount?: Prisma.DecimalFilter<"pricing_plans"> | runtime.Decimal | runtime.DecimalJsLike | number | string;
    currency?: Prisma.StringFilter<"pricing_plans"> | string;
    sessions_included?: Prisma.IntNullableFilter<"pricing_plans"> | number | null;
    validity_days?: Prisma.IntNullableFilter<"pricing_plans"> | number | null;
    description?: Prisma.StringNullableFilter<"pricing_plans"> | string | null;
    is_active?: Prisma.BoolFilter<"pricing_plans"> | boolean;
    created_at?: Prisma.DateTimeFilter<"pricing_plans"> | Date | string;
    updated_at?: Prisma.DateTimeFilter<"pricing_plans"> | Date | string;
    bookings?: Prisma.BookingsListRelationFilter;
    listings?: Prisma.XOR<Prisma.ListingsScalarRelationFilter, Prisma.listingsWhereInput>;
};
export type pricing_plansOrderByWithRelationInput = {
    id?: Prisma.SortOrder;
    listing_id?: Prisma.SortOrder;
    name?: Prisma.SortOrder;
    pricing_type?: Prisma.SortOrder;
    billing_cycle?: Prisma.SortOrder;
    price_amount?: Prisma.SortOrder;
    currency?: Prisma.SortOrder;
    sessions_included?: Prisma.SortOrderInput | Prisma.SortOrder;
    validity_days?: Prisma.SortOrderInput | Prisma.SortOrder;
    description?: Prisma.SortOrderInput | Prisma.SortOrder;
    is_active?: Prisma.SortOrder;
    created_at?: Prisma.SortOrder;
    updated_at?: Prisma.SortOrder;
    bookings?: Prisma.bookingsOrderByRelationAggregateInput;
    listings?: Prisma.listingsOrderByWithRelationInput;
};
export type pricing_plansWhereUniqueInput = Prisma.AtLeast<{
    id?: string;
    AND?: Prisma.pricing_plansWhereInput | Prisma.pricing_plansWhereInput[];
    OR?: Prisma.pricing_plansWhereInput[];
    NOT?: Prisma.pricing_plansWhereInput | Prisma.pricing_plansWhereInput[];
    listing_id?: Prisma.UuidFilter<"pricing_plans"> | string;
    name?: Prisma.StringFilter<"pricing_plans"> | string;
    pricing_type?: Prisma.Enumpricing_typeFilter<"pricing_plans"> | $Enums.pricing_type;
    billing_cycle?: Prisma.Enumbilling_cycleFilter<"pricing_plans"> | $Enums.billing_cycle;
    price_amount?: Prisma.DecimalFilter<"pricing_plans"> | runtime.Decimal | runtime.DecimalJsLike | number | string;
    currency?: Prisma.StringFilter<"pricing_plans"> | string;
    sessions_included?: Prisma.IntNullableFilter<"pricing_plans"> | number | null;
    validity_days?: Prisma.IntNullableFilter<"pricing_plans"> | number | null;
    description?: Prisma.StringNullableFilter<"pricing_plans"> | string | null;
    is_active?: Prisma.BoolFilter<"pricing_plans"> | boolean;
    created_at?: Prisma.DateTimeFilter<"pricing_plans"> | Date | string;
    updated_at?: Prisma.DateTimeFilter<"pricing_plans"> | Date | string;
    bookings?: Prisma.BookingsListRelationFilter;
    listings?: Prisma.XOR<Prisma.ListingsScalarRelationFilter, Prisma.listingsWhereInput>;
}, "id">;
export type pricing_plansOrderByWithAggregationInput = {
    id?: Prisma.SortOrder;
    listing_id?: Prisma.SortOrder;
    name?: Prisma.SortOrder;
    pricing_type?: Prisma.SortOrder;
    billing_cycle?: Prisma.SortOrder;
    price_amount?: Prisma.SortOrder;
    currency?: Prisma.SortOrder;
    sessions_included?: Prisma.SortOrderInput | Prisma.SortOrder;
    validity_days?: Prisma.SortOrderInput | Prisma.SortOrder;
    description?: Prisma.SortOrderInput | Prisma.SortOrder;
    is_active?: Prisma.SortOrder;
    created_at?: Prisma.SortOrder;
    updated_at?: Prisma.SortOrder;
    _count?: Prisma.pricing_plansCountOrderByAggregateInput;
    _avg?: Prisma.pricing_plansAvgOrderByAggregateInput;
    _max?: Prisma.pricing_plansMaxOrderByAggregateInput;
    _min?: Prisma.pricing_plansMinOrderByAggregateInput;
    _sum?: Prisma.pricing_plansSumOrderByAggregateInput;
};
export type pricing_plansScalarWhereWithAggregatesInput = {
    AND?: Prisma.pricing_plansScalarWhereWithAggregatesInput | Prisma.pricing_plansScalarWhereWithAggregatesInput[];
    OR?: Prisma.pricing_plansScalarWhereWithAggregatesInput[];
    NOT?: Prisma.pricing_plansScalarWhereWithAggregatesInput | Prisma.pricing_plansScalarWhereWithAggregatesInput[];
    id?: Prisma.UuidWithAggregatesFilter<"pricing_plans"> | string;
    listing_id?: Prisma.UuidWithAggregatesFilter<"pricing_plans"> | string;
    name?: Prisma.StringWithAggregatesFilter<"pricing_plans"> | string;
    pricing_type?: Prisma.Enumpricing_typeWithAggregatesFilter<"pricing_plans"> | $Enums.pricing_type;
    billing_cycle?: Prisma.Enumbilling_cycleWithAggregatesFilter<"pricing_plans"> | $Enums.billing_cycle;
    price_amount?: Prisma.DecimalWithAggregatesFilter<"pricing_plans"> | runtime.Decimal | runtime.DecimalJsLike | number | string;
    currency?: Prisma.StringWithAggregatesFilter<"pricing_plans"> | string;
    sessions_included?: Prisma.IntNullableWithAggregatesFilter<"pricing_plans"> | number | null;
    validity_days?: Prisma.IntNullableWithAggregatesFilter<"pricing_plans"> | number | null;
    description?: Prisma.StringNullableWithAggregatesFilter<"pricing_plans"> | string | null;
    is_active?: Prisma.BoolWithAggregatesFilter<"pricing_plans"> | boolean;
    created_at?: Prisma.DateTimeWithAggregatesFilter<"pricing_plans"> | Date | string;
    updated_at?: Prisma.DateTimeWithAggregatesFilter<"pricing_plans"> | Date | string;
};
export type pricing_plansCreateInput = {
    id?: string;
    name: string;
    pricing_type: $Enums.pricing_type;
    billing_cycle?: $Enums.billing_cycle;
    price_amount?: runtime.Decimal | runtime.DecimalJsLike | number | string;
    currency?: string;
    sessions_included?: number | null;
    validity_days?: number | null;
    description?: string | null;
    is_active?: boolean;
    created_at?: Date | string;
    updated_at?: Date | string;
    bookings?: Prisma.bookingsCreateNestedManyWithoutPricing_plansInput;
    listings: Prisma.listingsCreateNestedOneWithoutPricing_plansInput;
};
export type pricing_plansUncheckedCreateInput = {
    id?: string;
    listing_id: string;
    name: string;
    pricing_type: $Enums.pricing_type;
    billing_cycle?: $Enums.billing_cycle;
    price_amount?: runtime.Decimal | runtime.DecimalJsLike | number | string;
    currency?: string;
    sessions_included?: number | null;
    validity_days?: number | null;
    description?: string | null;
    is_active?: boolean;
    created_at?: Date | string;
    updated_at?: Date | string;
    bookings?: Prisma.bookingsUncheckedCreateNestedManyWithoutPricing_plansInput;
};
export type pricing_plansUpdateInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    name?: Prisma.StringFieldUpdateOperationsInput | string;
    pricing_type?: Prisma.Enumpricing_typeFieldUpdateOperationsInput | $Enums.pricing_type;
    billing_cycle?: Prisma.Enumbilling_cycleFieldUpdateOperationsInput | $Enums.billing_cycle;
    price_amount?: Prisma.DecimalFieldUpdateOperationsInput | runtime.Decimal | runtime.DecimalJsLike | number | string;
    currency?: Prisma.StringFieldUpdateOperationsInput | string;
    sessions_included?: Prisma.NullableIntFieldUpdateOperationsInput | number | null;
    validity_days?: Prisma.NullableIntFieldUpdateOperationsInput | number | null;
    description?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    is_active?: Prisma.BoolFieldUpdateOperationsInput | boolean;
    created_at?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    updated_at?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    bookings?: Prisma.bookingsUpdateManyWithoutPricing_plansNestedInput;
    listings?: Prisma.listingsUpdateOneRequiredWithoutPricing_plansNestedInput;
};
export type pricing_plansUncheckedUpdateInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    listing_id?: Prisma.StringFieldUpdateOperationsInput | string;
    name?: Prisma.StringFieldUpdateOperationsInput | string;
    pricing_type?: Prisma.Enumpricing_typeFieldUpdateOperationsInput | $Enums.pricing_type;
    billing_cycle?: Prisma.Enumbilling_cycleFieldUpdateOperationsInput | $Enums.billing_cycle;
    price_amount?: Prisma.DecimalFieldUpdateOperationsInput | runtime.Decimal | runtime.DecimalJsLike | number | string;
    currency?: Prisma.StringFieldUpdateOperationsInput | string;
    sessions_included?: Prisma.NullableIntFieldUpdateOperationsInput | number | null;
    validity_days?: Prisma.NullableIntFieldUpdateOperationsInput | number | null;
    description?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    is_active?: Prisma.BoolFieldUpdateOperationsInput | boolean;
    created_at?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    updated_at?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    bookings?: Prisma.bookingsUncheckedUpdateManyWithoutPricing_plansNestedInput;
};
export type pricing_plansCreateManyInput = {
    id?: string;
    listing_id: string;
    name: string;
    pricing_type: $Enums.pricing_type;
    billing_cycle?: $Enums.billing_cycle;
    price_amount?: runtime.Decimal | runtime.DecimalJsLike | number | string;
    currency?: string;
    sessions_included?: number | null;
    validity_days?: number | null;
    description?: string | null;
    is_active?: boolean;
    created_at?: Date | string;
    updated_at?: Date | string;
};
export type pricing_plansUpdateManyMutationInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    name?: Prisma.StringFieldUpdateOperationsInput | string;
    pricing_type?: Prisma.Enumpricing_typeFieldUpdateOperationsInput | $Enums.pricing_type;
    billing_cycle?: Prisma.Enumbilling_cycleFieldUpdateOperationsInput | $Enums.billing_cycle;
    price_amount?: Prisma.DecimalFieldUpdateOperationsInput | runtime.Decimal | runtime.DecimalJsLike | number | string;
    currency?: Prisma.StringFieldUpdateOperationsInput | string;
    sessions_included?: Prisma.NullableIntFieldUpdateOperationsInput | number | null;
    validity_days?: Prisma.NullableIntFieldUpdateOperationsInput | number | null;
    description?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    is_active?: Prisma.BoolFieldUpdateOperationsInput | boolean;
    created_at?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    updated_at?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
};
export type pricing_plansUncheckedUpdateManyInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    listing_id?: Prisma.StringFieldUpdateOperationsInput | string;
    name?: Prisma.StringFieldUpdateOperationsInput | string;
    pricing_type?: Prisma.Enumpricing_typeFieldUpdateOperationsInput | $Enums.pricing_type;
    billing_cycle?: Prisma.Enumbilling_cycleFieldUpdateOperationsInput | $Enums.billing_cycle;
    price_amount?: Prisma.DecimalFieldUpdateOperationsInput | runtime.Decimal | runtime.DecimalJsLike | number | string;
    currency?: Prisma.StringFieldUpdateOperationsInput | string;
    sessions_included?: Prisma.NullableIntFieldUpdateOperationsInput | number | null;
    validity_days?: Prisma.NullableIntFieldUpdateOperationsInput | number | null;
    description?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    is_active?: Prisma.BoolFieldUpdateOperationsInput | boolean;
    created_at?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    updated_at?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
};
export type Pricing_plansScalarRelationFilter = {
    is?: Prisma.pricing_plansWhereInput;
    isNot?: Prisma.pricing_plansWhereInput;
};
export type Pricing_plansListRelationFilter = {
    every?: Prisma.pricing_plansWhereInput;
    some?: Prisma.pricing_plansWhereInput;
    none?: Prisma.pricing_plansWhereInput;
};
export type pricing_plansOrderByRelationAggregateInput = {
    _count?: Prisma.SortOrder;
};
export type pricing_plansCountOrderByAggregateInput = {
    id?: Prisma.SortOrder;
    listing_id?: Prisma.SortOrder;
    name?: Prisma.SortOrder;
    pricing_type?: Prisma.SortOrder;
    billing_cycle?: Prisma.SortOrder;
    price_amount?: Prisma.SortOrder;
    currency?: Prisma.SortOrder;
    sessions_included?: Prisma.SortOrder;
    validity_days?: Prisma.SortOrder;
    description?: Prisma.SortOrder;
    is_active?: Prisma.SortOrder;
    created_at?: Prisma.SortOrder;
    updated_at?: Prisma.SortOrder;
};
export type pricing_plansAvgOrderByAggregateInput = {
    price_amount?: Prisma.SortOrder;
    sessions_included?: Prisma.SortOrder;
    validity_days?: Prisma.SortOrder;
};
export type pricing_plansMaxOrderByAggregateInput = {
    id?: Prisma.SortOrder;
    listing_id?: Prisma.SortOrder;
    name?: Prisma.SortOrder;
    pricing_type?: Prisma.SortOrder;
    billing_cycle?: Prisma.SortOrder;
    price_amount?: Prisma.SortOrder;
    currency?: Prisma.SortOrder;
    sessions_included?: Prisma.SortOrder;
    validity_days?: Prisma.SortOrder;
    description?: Prisma.SortOrder;
    is_active?: Prisma.SortOrder;
    created_at?: Prisma.SortOrder;
    updated_at?: Prisma.SortOrder;
};
export type pricing_plansMinOrderByAggregateInput = {
    id?: Prisma.SortOrder;
    listing_id?: Prisma.SortOrder;
    name?: Prisma.SortOrder;
    pricing_type?: Prisma.SortOrder;
    billing_cycle?: Prisma.SortOrder;
    price_amount?: Prisma.SortOrder;
    currency?: Prisma.SortOrder;
    sessions_included?: Prisma.SortOrder;
    validity_days?: Prisma.SortOrder;
    description?: Prisma.SortOrder;
    is_active?: Prisma.SortOrder;
    created_at?: Prisma.SortOrder;
    updated_at?: Prisma.SortOrder;
};
export type pricing_plansSumOrderByAggregateInput = {
    price_amount?: Prisma.SortOrder;
    sessions_included?: Prisma.SortOrder;
    validity_days?: Prisma.SortOrder;
};
export type pricing_plansCreateNestedOneWithoutBookingsInput = {
    create?: Prisma.XOR<Prisma.pricing_plansCreateWithoutBookingsInput, Prisma.pricing_plansUncheckedCreateWithoutBookingsInput>;
    connectOrCreate?: Prisma.pricing_plansCreateOrConnectWithoutBookingsInput;
    connect?: Prisma.pricing_plansWhereUniqueInput;
};
export type pricing_plansUpdateOneRequiredWithoutBookingsNestedInput = {
    create?: Prisma.XOR<Prisma.pricing_plansCreateWithoutBookingsInput, Prisma.pricing_plansUncheckedCreateWithoutBookingsInput>;
    connectOrCreate?: Prisma.pricing_plansCreateOrConnectWithoutBookingsInput;
    upsert?: Prisma.pricing_plansUpsertWithoutBookingsInput;
    connect?: Prisma.pricing_plansWhereUniqueInput;
    update?: Prisma.XOR<Prisma.XOR<Prisma.pricing_plansUpdateToOneWithWhereWithoutBookingsInput, Prisma.pricing_plansUpdateWithoutBookingsInput>, Prisma.pricing_plansUncheckedUpdateWithoutBookingsInput>;
};
export type pricing_plansCreateNestedManyWithoutListingsInput = {
    create?: Prisma.XOR<Prisma.pricing_plansCreateWithoutListingsInput, Prisma.pricing_plansUncheckedCreateWithoutListingsInput> | Prisma.pricing_plansCreateWithoutListingsInput[] | Prisma.pricing_plansUncheckedCreateWithoutListingsInput[];
    connectOrCreate?: Prisma.pricing_plansCreateOrConnectWithoutListingsInput | Prisma.pricing_plansCreateOrConnectWithoutListingsInput[];
    createMany?: Prisma.pricing_plansCreateManyListingsInputEnvelope;
    connect?: Prisma.pricing_plansWhereUniqueInput | Prisma.pricing_plansWhereUniqueInput[];
};
export type pricing_plansUncheckedCreateNestedManyWithoutListingsInput = {
    create?: Prisma.XOR<Prisma.pricing_plansCreateWithoutListingsInput, Prisma.pricing_plansUncheckedCreateWithoutListingsInput> | Prisma.pricing_plansCreateWithoutListingsInput[] | Prisma.pricing_plansUncheckedCreateWithoutListingsInput[];
    connectOrCreate?: Prisma.pricing_plansCreateOrConnectWithoutListingsInput | Prisma.pricing_plansCreateOrConnectWithoutListingsInput[];
    createMany?: Prisma.pricing_plansCreateManyListingsInputEnvelope;
    connect?: Prisma.pricing_plansWhereUniqueInput | Prisma.pricing_plansWhereUniqueInput[];
};
export type pricing_plansUpdateManyWithoutListingsNestedInput = {
    create?: Prisma.XOR<Prisma.pricing_plansCreateWithoutListingsInput, Prisma.pricing_plansUncheckedCreateWithoutListingsInput> | Prisma.pricing_plansCreateWithoutListingsInput[] | Prisma.pricing_plansUncheckedCreateWithoutListingsInput[];
    connectOrCreate?: Prisma.pricing_plansCreateOrConnectWithoutListingsInput | Prisma.pricing_plansCreateOrConnectWithoutListingsInput[];
    upsert?: Prisma.pricing_plansUpsertWithWhereUniqueWithoutListingsInput | Prisma.pricing_plansUpsertWithWhereUniqueWithoutListingsInput[];
    createMany?: Prisma.pricing_plansCreateManyListingsInputEnvelope;
    set?: Prisma.pricing_plansWhereUniqueInput | Prisma.pricing_plansWhereUniqueInput[];
    disconnect?: Prisma.pricing_plansWhereUniqueInput | Prisma.pricing_plansWhereUniqueInput[];
    delete?: Prisma.pricing_plansWhereUniqueInput | Prisma.pricing_plansWhereUniqueInput[];
    connect?: Prisma.pricing_plansWhereUniqueInput | Prisma.pricing_plansWhereUniqueInput[];
    update?: Prisma.pricing_plansUpdateWithWhereUniqueWithoutListingsInput | Prisma.pricing_plansUpdateWithWhereUniqueWithoutListingsInput[];
    updateMany?: Prisma.pricing_plansUpdateManyWithWhereWithoutListingsInput | Prisma.pricing_plansUpdateManyWithWhereWithoutListingsInput[];
    deleteMany?: Prisma.pricing_plansScalarWhereInput | Prisma.pricing_plansScalarWhereInput[];
};
export type pricing_plansUncheckedUpdateManyWithoutListingsNestedInput = {
    create?: Prisma.XOR<Prisma.pricing_plansCreateWithoutListingsInput, Prisma.pricing_plansUncheckedCreateWithoutListingsInput> | Prisma.pricing_plansCreateWithoutListingsInput[] | Prisma.pricing_plansUncheckedCreateWithoutListingsInput[];
    connectOrCreate?: Prisma.pricing_plansCreateOrConnectWithoutListingsInput | Prisma.pricing_plansCreateOrConnectWithoutListingsInput[];
    upsert?: Prisma.pricing_plansUpsertWithWhereUniqueWithoutListingsInput | Prisma.pricing_plansUpsertWithWhereUniqueWithoutListingsInput[];
    createMany?: Prisma.pricing_plansCreateManyListingsInputEnvelope;
    set?: Prisma.pricing_plansWhereUniqueInput | Prisma.pricing_plansWhereUniqueInput[];
    disconnect?: Prisma.pricing_plansWhereUniqueInput | Prisma.pricing_plansWhereUniqueInput[];
    delete?: Prisma.pricing_plansWhereUniqueInput | Prisma.pricing_plansWhereUniqueInput[];
    connect?: Prisma.pricing_plansWhereUniqueInput | Prisma.pricing_plansWhereUniqueInput[];
    update?: Prisma.pricing_plansUpdateWithWhereUniqueWithoutListingsInput | Prisma.pricing_plansUpdateWithWhereUniqueWithoutListingsInput[];
    updateMany?: Prisma.pricing_plansUpdateManyWithWhereWithoutListingsInput | Prisma.pricing_plansUpdateManyWithWhereWithoutListingsInput[];
    deleteMany?: Prisma.pricing_plansScalarWhereInput | Prisma.pricing_plansScalarWhereInput[];
};
export type Enumpricing_typeFieldUpdateOperationsInput = {
    set?: $Enums.pricing_type;
};
export type Enumbilling_cycleFieldUpdateOperationsInput = {
    set?: $Enums.billing_cycle;
};
export type pricing_plansCreateWithoutBookingsInput = {
    id?: string;
    name: string;
    pricing_type: $Enums.pricing_type;
    billing_cycle?: $Enums.billing_cycle;
    price_amount?: runtime.Decimal | runtime.DecimalJsLike | number | string;
    currency?: string;
    sessions_included?: number | null;
    validity_days?: number | null;
    description?: string | null;
    is_active?: boolean;
    created_at?: Date | string;
    updated_at?: Date | string;
    listings: Prisma.listingsCreateNestedOneWithoutPricing_plansInput;
};
export type pricing_plansUncheckedCreateWithoutBookingsInput = {
    id?: string;
    listing_id: string;
    name: string;
    pricing_type: $Enums.pricing_type;
    billing_cycle?: $Enums.billing_cycle;
    price_amount?: runtime.Decimal | runtime.DecimalJsLike | number | string;
    currency?: string;
    sessions_included?: number | null;
    validity_days?: number | null;
    description?: string | null;
    is_active?: boolean;
    created_at?: Date | string;
    updated_at?: Date | string;
};
export type pricing_plansCreateOrConnectWithoutBookingsInput = {
    where: Prisma.pricing_plansWhereUniqueInput;
    create: Prisma.XOR<Prisma.pricing_plansCreateWithoutBookingsInput, Prisma.pricing_plansUncheckedCreateWithoutBookingsInput>;
};
export type pricing_plansUpsertWithoutBookingsInput = {
    update: Prisma.XOR<Prisma.pricing_plansUpdateWithoutBookingsInput, Prisma.pricing_plansUncheckedUpdateWithoutBookingsInput>;
    create: Prisma.XOR<Prisma.pricing_plansCreateWithoutBookingsInput, Prisma.pricing_plansUncheckedCreateWithoutBookingsInput>;
    where?: Prisma.pricing_plansWhereInput;
};
export type pricing_plansUpdateToOneWithWhereWithoutBookingsInput = {
    where?: Prisma.pricing_plansWhereInput;
    data: Prisma.XOR<Prisma.pricing_plansUpdateWithoutBookingsInput, Prisma.pricing_plansUncheckedUpdateWithoutBookingsInput>;
};
export type pricing_plansUpdateWithoutBookingsInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    name?: Prisma.StringFieldUpdateOperationsInput | string;
    pricing_type?: Prisma.Enumpricing_typeFieldUpdateOperationsInput | $Enums.pricing_type;
    billing_cycle?: Prisma.Enumbilling_cycleFieldUpdateOperationsInput | $Enums.billing_cycle;
    price_amount?: Prisma.DecimalFieldUpdateOperationsInput | runtime.Decimal | runtime.DecimalJsLike | number | string;
    currency?: Prisma.StringFieldUpdateOperationsInput | string;
    sessions_included?: Prisma.NullableIntFieldUpdateOperationsInput | number | null;
    validity_days?: Prisma.NullableIntFieldUpdateOperationsInput | number | null;
    description?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    is_active?: Prisma.BoolFieldUpdateOperationsInput | boolean;
    created_at?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    updated_at?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    listings?: Prisma.listingsUpdateOneRequiredWithoutPricing_plansNestedInput;
};
export type pricing_plansUncheckedUpdateWithoutBookingsInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    listing_id?: Prisma.StringFieldUpdateOperationsInput | string;
    name?: Prisma.StringFieldUpdateOperationsInput | string;
    pricing_type?: Prisma.Enumpricing_typeFieldUpdateOperationsInput | $Enums.pricing_type;
    billing_cycle?: Prisma.Enumbilling_cycleFieldUpdateOperationsInput | $Enums.billing_cycle;
    price_amount?: Prisma.DecimalFieldUpdateOperationsInput | runtime.Decimal | runtime.DecimalJsLike | number | string;
    currency?: Prisma.StringFieldUpdateOperationsInput | string;
    sessions_included?: Prisma.NullableIntFieldUpdateOperationsInput | number | null;
    validity_days?: Prisma.NullableIntFieldUpdateOperationsInput | number | null;
    description?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    is_active?: Prisma.BoolFieldUpdateOperationsInput | boolean;
    created_at?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    updated_at?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
};
export type pricing_plansCreateWithoutListingsInput = {
    id?: string;
    name: string;
    pricing_type: $Enums.pricing_type;
    billing_cycle?: $Enums.billing_cycle;
    price_amount?: runtime.Decimal | runtime.DecimalJsLike | number | string;
    currency?: string;
    sessions_included?: number | null;
    validity_days?: number | null;
    description?: string | null;
    is_active?: boolean;
    created_at?: Date | string;
    updated_at?: Date | string;
    bookings?: Prisma.bookingsCreateNestedManyWithoutPricing_plansInput;
};
export type pricing_plansUncheckedCreateWithoutListingsInput = {
    id?: string;
    name: string;
    pricing_type: $Enums.pricing_type;
    billing_cycle?: $Enums.billing_cycle;
    price_amount?: runtime.Decimal | runtime.DecimalJsLike | number | string;
    currency?: string;
    sessions_included?: number | null;
    validity_days?: number | null;
    description?: string | null;
    is_active?: boolean;
    created_at?: Date | string;
    updated_at?: Date | string;
    bookings?: Prisma.bookingsUncheckedCreateNestedManyWithoutPricing_plansInput;
};
export type pricing_plansCreateOrConnectWithoutListingsInput = {
    where: Prisma.pricing_plansWhereUniqueInput;
    create: Prisma.XOR<Prisma.pricing_plansCreateWithoutListingsInput, Prisma.pricing_plansUncheckedCreateWithoutListingsInput>;
};
export type pricing_plansCreateManyListingsInputEnvelope = {
    data: Prisma.pricing_plansCreateManyListingsInput | Prisma.pricing_plansCreateManyListingsInput[];
    skipDuplicates?: boolean;
};
export type pricing_plansUpsertWithWhereUniqueWithoutListingsInput = {
    where: Prisma.pricing_plansWhereUniqueInput;
    update: Prisma.XOR<Prisma.pricing_plansUpdateWithoutListingsInput, Prisma.pricing_plansUncheckedUpdateWithoutListingsInput>;
    create: Prisma.XOR<Prisma.pricing_plansCreateWithoutListingsInput, Prisma.pricing_plansUncheckedCreateWithoutListingsInput>;
};
export type pricing_plansUpdateWithWhereUniqueWithoutListingsInput = {
    where: Prisma.pricing_plansWhereUniqueInput;
    data: Prisma.XOR<Prisma.pricing_plansUpdateWithoutListingsInput, Prisma.pricing_plansUncheckedUpdateWithoutListingsInput>;
};
export type pricing_plansUpdateManyWithWhereWithoutListingsInput = {
    where: Prisma.pricing_plansScalarWhereInput;
    data: Prisma.XOR<Prisma.pricing_plansUpdateManyMutationInput, Prisma.pricing_plansUncheckedUpdateManyWithoutListingsInput>;
};
export type pricing_plansScalarWhereInput = {
    AND?: Prisma.pricing_plansScalarWhereInput | Prisma.pricing_plansScalarWhereInput[];
    OR?: Prisma.pricing_plansScalarWhereInput[];
    NOT?: Prisma.pricing_plansScalarWhereInput | Prisma.pricing_plansScalarWhereInput[];
    id?: Prisma.UuidFilter<"pricing_plans"> | string;
    listing_id?: Prisma.UuidFilter<"pricing_plans"> | string;
    name?: Prisma.StringFilter<"pricing_plans"> | string;
    pricing_type?: Prisma.Enumpricing_typeFilter<"pricing_plans"> | $Enums.pricing_type;
    billing_cycle?: Prisma.Enumbilling_cycleFilter<"pricing_plans"> | $Enums.billing_cycle;
    price_amount?: Prisma.DecimalFilter<"pricing_plans"> | runtime.Decimal | runtime.DecimalJsLike | number | string;
    currency?: Prisma.StringFilter<"pricing_plans"> | string;
    sessions_included?: Prisma.IntNullableFilter<"pricing_plans"> | number | null;
    validity_days?: Prisma.IntNullableFilter<"pricing_plans"> | number | null;
    description?: Prisma.StringNullableFilter<"pricing_plans"> | string | null;
    is_active?: Prisma.BoolFilter<"pricing_plans"> | boolean;
    created_at?: Prisma.DateTimeFilter<"pricing_plans"> | Date | string;
    updated_at?: Prisma.DateTimeFilter<"pricing_plans"> | Date | string;
};
export type pricing_plansCreateManyListingsInput = {
    id?: string;
    name: string;
    pricing_type: $Enums.pricing_type;
    billing_cycle?: $Enums.billing_cycle;
    price_amount?: runtime.Decimal | runtime.DecimalJsLike | number | string;
    currency?: string;
    sessions_included?: number | null;
    validity_days?: number | null;
    description?: string | null;
    is_active?: boolean;
    created_at?: Date | string;
    updated_at?: Date | string;
};
export type pricing_plansUpdateWithoutListingsInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    name?: Prisma.StringFieldUpdateOperationsInput | string;
    pricing_type?: Prisma.Enumpricing_typeFieldUpdateOperationsInput | $Enums.pricing_type;
    billing_cycle?: Prisma.Enumbilling_cycleFieldUpdateOperationsInput | $Enums.billing_cycle;
    price_amount?: Prisma.DecimalFieldUpdateOperationsInput | runtime.Decimal | runtime.DecimalJsLike | number | string;
    currency?: Prisma.StringFieldUpdateOperationsInput | string;
    sessions_included?: Prisma.NullableIntFieldUpdateOperationsInput | number | null;
    validity_days?: Prisma.NullableIntFieldUpdateOperationsInput | number | null;
    description?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    is_active?: Prisma.BoolFieldUpdateOperationsInput | boolean;
    created_at?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    updated_at?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    bookings?: Prisma.bookingsUpdateManyWithoutPricing_plansNestedInput;
};
export type pricing_plansUncheckedUpdateWithoutListingsInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    name?: Prisma.StringFieldUpdateOperationsInput | string;
    pricing_type?: Prisma.Enumpricing_typeFieldUpdateOperationsInput | $Enums.pricing_type;
    billing_cycle?: Prisma.Enumbilling_cycleFieldUpdateOperationsInput | $Enums.billing_cycle;
    price_amount?: Prisma.DecimalFieldUpdateOperationsInput | runtime.Decimal | runtime.DecimalJsLike | number | string;
    currency?: Prisma.StringFieldUpdateOperationsInput | string;
    sessions_included?: Prisma.NullableIntFieldUpdateOperationsInput | number | null;
    validity_days?: Prisma.NullableIntFieldUpdateOperationsInput | number | null;
    description?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    is_active?: Prisma.BoolFieldUpdateOperationsInput | boolean;
    created_at?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    updated_at?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    bookings?: Prisma.bookingsUncheckedUpdateManyWithoutPricing_plansNestedInput;
};
export type pricing_plansUncheckedUpdateManyWithoutListingsInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    name?: Prisma.StringFieldUpdateOperationsInput | string;
    pricing_type?: Prisma.Enumpricing_typeFieldUpdateOperationsInput | $Enums.pricing_type;
    billing_cycle?: Prisma.Enumbilling_cycleFieldUpdateOperationsInput | $Enums.billing_cycle;
    price_amount?: Prisma.DecimalFieldUpdateOperationsInput | runtime.Decimal | runtime.DecimalJsLike | number | string;
    currency?: Prisma.StringFieldUpdateOperationsInput | string;
    sessions_included?: Prisma.NullableIntFieldUpdateOperationsInput | number | null;
    validity_days?: Prisma.NullableIntFieldUpdateOperationsInput | number | null;
    description?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    is_active?: Prisma.BoolFieldUpdateOperationsInput | boolean;
    created_at?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    updated_at?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
};
export type Pricing_plansCountOutputType = {
    bookings: number;
};
export type Pricing_plansCountOutputTypeSelect<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    bookings?: boolean | Pricing_plansCountOutputTypeCountBookingsArgs;
};
export type Pricing_plansCountOutputTypeDefaultArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.Pricing_plansCountOutputTypeSelect<ExtArgs> | null;
};
export type Pricing_plansCountOutputTypeCountBookingsArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    where?: Prisma.bookingsWhereInput;
};
export type pricing_plansSelect<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetSelect<{
    id?: boolean;
    listing_id?: boolean;
    name?: boolean;
    pricing_type?: boolean;
    billing_cycle?: boolean;
    price_amount?: boolean;
    currency?: boolean;
    sessions_included?: boolean;
    validity_days?: boolean;
    description?: boolean;
    is_active?: boolean;
    created_at?: boolean;
    updated_at?: boolean;
    bookings?: boolean | Prisma.pricing_plans$bookingsArgs<ExtArgs>;
    listings?: boolean | Prisma.listingsDefaultArgs<ExtArgs>;
    _count?: boolean | Prisma.Pricing_plansCountOutputTypeDefaultArgs<ExtArgs>;
}, ExtArgs["result"]["pricing_plans"]>;
export type pricing_plansSelectCreateManyAndReturn<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetSelect<{
    id?: boolean;
    listing_id?: boolean;
    name?: boolean;
    pricing_type?: boolean;
    billing_cycle?: boolean;
    price_amount?: boolean;
    currency?: boolean;
    sessions_included?: boolean;
    validity_days?: boolean;
    description?: boolean;
    is_active?: boolean;
    created_at?: boolean;
    updated_at?: boolean;
    listings?: boolean | Prisma.listingsDefaultArgs<ExtArgs>;
}, ExtArgs["result"]["pricing_plans"]>;
export type pricing_plansSelectUpdateManyAndReturn<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetSelect<{
    id?: boolean;
    listing_id?: boolean;
    name?: boolean;
    pricing_type?: boolean;
    billing_cycle?: boolean;
    price_amount?: boolean;
    currency?: boolean;
    sessions_included?: boolean;
    validity_days?: boolean;
    description?: boolean;
    is_active?: boolean;
    created_at?: boolean;
    updated_at?: boolean;
    listings?: boolean | Prisma.listingsDefaultArgs<ExtArgs>;
}, ExtArgs["result"]["pricing_plans"]>;
export type pricing_plansSelectScalar = {
    id?: boolean;
    listing_id?: boolean;
    name?: boolean;
    pricing_type?: boolean;
    billing_cycle?: boolean;
    price_amount?: boolean;
    currency?: boolean;
    sessions_included?: boolean;
    validity_days?: boolean;
    description?: boolean;
    is_active?: boolean;
    created_at?: boolean;
    updated_at?: boolean;
};
export type pricing_plansOmit<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetOmit<"id" | "listing_id" | "name" | "pricing_type" | "billing_cycle" | "price_amount" | "currency" | "sessions_included" | "validity_days" | "description" | "is_active" | "created_at" | "updated_at", ExtArgs["result"]["pricing_plans"]>;
export type pricing_plansInclude<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    bookings?: boolean | Prisma.pricing_plans$bookingsArgs<ExtArgs>;
    listings?: boolean | Prisma.listingsDefaultArgs<ExtArgs>;
    _count?: boolean | Prisma.Pricing_plansCountOutputTypeDefaultArgs<ExtArgs>;
};
export type pricing_plansIncludeCreateManyAndReturn<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    listings?: boolean | Prisma.listingsDefaultArgs<ExtArgs>;
};
export type pricing_plansIncludeUpdateManyAndReturn<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    listings?: boolean | Prisma.listingsDefaultArgs<ExtArgs>;
};
export type $pricing_plansPayload<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    name: "pricing_plans";
    objects: {
        bookings: Prisma.$bookingsPayload<ExtArgs>[];
        listings: Prisma.$listingsPayload<ExtArgs>;
    };
    scalars: runtime.Types.Extensions.GetPayloadResult<{
        id: string;
        listing_id: string;
        name: string;
        pricing_type: $Enums.pricing_type;
        billing_cycle: $Enums.billing_cycle;
        price_amount: runtime.Decimal;
        currency: string;
        sessions_included: number | null;
        validity_days: number | null;
        description: string | null;
        is_active: boolean;
        created_at: Date;
        updated_at: Date;
    }, ExtArgs["result"]["pricing_plans"]>;
    composites: {};
};
export type pricing_plansGetPayload<S extends boolean | null | undefined | pricing_plansDefaultArgs> = runtime.Types.Result.GetResult<Prisma.$pricing_plansPayload, S>;
export type pricing_plansCountArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = Omit<pricing_plansFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
    select?: Pricing_plansCountAggregateInputType | true;
};
export interface pricing_plansDelegate<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: {
        types: Prisma.TypeMap<ExtArgs>['model']['pricing_plans'];
        meta: {
            name: 'pricing_plans';
        };
    };
    findUnique<T extends pricing_plansFindUniqueArgs>(args: Prisma.SelectSubset<T, pricing_plansFindUniqueArgs<ExtArgs>>): Prisma.Prisma__pricing_plansClient<runtime.Types.Result.GetResult<Prisma.$pricing_plansPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>;
    findUniqueOrThrow<T extends pricing_plansFindUniqueOrThrowArgs>(args: Prisma.SelectSubset<T, pricing_plansFindUniqueOrThrowArgs<ExtArgs>>): Prisma.Prisma__pricing_plansClient<runtime.Types.Result.GetResult<Prisma.$pricing_plansPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    findFirst<T extends pricing_plansFindFirstArgs>(args?: Prisma.SelectSubset<T, pricing_plansFindFirstArgs<ExtArgs>>): Prisma.Prisma__pricing_plansClient<runtime.Types.Result.GetResult<Prisma.$pricing_plansPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>;
    findFirstOrThrow<T extends pricing_plansFindFirstOrThrowArgs>(args?: Prisma.SelectSubset<T, pricing_plansFindFirstOrThrowArgs<ExtArgs>>): Prisma.Prisma__pricing_plansClient<runtime.Types.Result.GetResult<Prisma.$pricing_plansPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    findMany<T extends pricing_plansFindManyArgs>(args?: Prisma.SelectSubset<T, pricing_plansFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$pricing_plansPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>;
    create<T extends pricing_plansCreateArgs>(args: Prisma.SelectSubset<T, pricing_plansCreateArgs<ExtArgs>>): Prisma.Prisma__pricing_plansClient<runtime.Types.Result.GetResult<Prisma.$pricing_plansPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    createMany<T extends pricing_plansCreateManyArgs>(args?: Prisma.SelectSubset<T, pricing_plansCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<Prisma.BatchPayload>;
    createManyAndReturn<T extends pricing_plansCreateManyAndReturnArgs>(args?: Prisma.SelectSubset<T, pricing_plansCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$pricing_plansPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>;
    delete<T extends pricing_plansDeleteArgs>(args: Prisma.SelectSubset<T, pricing_plansDeleteArgs<ExtArgs>>): Prisma.Prisma__pricing_plansClient<runtime.Types.Result.GetResult<Prisma.$pricing_plansPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    update<T extends pricing_plansUpdateArgs>(args: Prisma.SelectSubset<T, pricing_plansUpdateArgs<ExtArgs>>): Prisma.Prisma__pricing_plansClient<runtime.Types.Result.GetResult<Prisma.$pricing_plansPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    deleteMany<T extends pricing_plansDeleteManyArgs>(args?: Prisma.SelectSubset<T, pricing_plansDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<Prisma.BatchPayload>;
    updateMany<T extends pricing_plansUpdateManyArgs>(args: Prisma.SelectSubset<T, pricing_plansUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<Prisma.BatchPayload>;
    updateManyAndReturn<T extends pricing_plansUpdateManyAndReturnArgs>(args: Prisma.SelectSubset<T, pricing_plansUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$pricing_plansPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>;
    upsert<T extends pricing_plansUpsertArgs>(args: Prisma.SelectSubset<T, pricing_plansUpsertArgs<ExtArgs>>): Prisma.Prisma__pricing_plansClient<runtime.Types.Result.GetResult<Prisma.$pricing_plansPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    count<T extends pricing_plansCountArgs>(args?: Prisma.Subset<T, pricing_plansCountArgs>): Prisma.PrismaPromise<T extends runtime.Types.Utils.Record<'select', any> ? T['select'] extends true ? number : Prisma.GetScalarType<T['select'], Pricing_plansCountAggregateOutputType> : number>;
    aggregate<T extends Pricing_plansAggregateArgs>(args: Prisma.Subset<T, Pricing_plansAggregateArgs>): Prisma.PrismaPromise<GetPricing_plansAggregateType<T>>;
    groupBy<T extends pricing_plansGroupByArgs, HasSelectOrTake extends Prisma.Or<Prisma.Extends<'skip', Prisma.Keys<T>>, Prisma.Extends<'take', Prisma.Keys<T>>>, OrderByArg extends Prisma.True extends HasSelectOrTake ? {
        orderBy: pricing_plansGroupByArgs['orderBy'];
    } : {
        orderBy?: pricing_plansGroupByArgs['orderBy'];
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
    }[OrderFields]>(args: Prisma.SubsetIntersection<T, pricing_plansGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetPricing_plansGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>;
    readonly fields: pricing_plansFieldRefs;
}
export interface Prisma__pricing_plansClient<T, Null = never, ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise";
    bookings<T extends Prisma.pricing_plans$bookingsArgs<ExtArgs> = {}>(args?: Prisma.Subset<T, Prisma.pricing_plans$bookingsArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$bookingsPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>;
    listings<T extends Prisma.listingsDefaultArgs<ExtArgs> = {}>(args?: Prisma.Subset<T, Prisma.listingsDefaultArgs<ExtArgs>>): Prisma.Prisma__listingsClient<runtime.Types.Result.GetResult<Prisma.$listingsPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>;
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): runtime.Types.Utils.JsPromise<TResult1 | TResult2>;
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): runtime.Types.Utils.JsPromise<T | TResult>;
    finally(onfinally?: (() => void) | undefined | null): runtime.Types.Utils.JsPromise<T>;
}
export interface pricing_plansFieldRefs {
    readonly id: Prisma.FieldRef<"pricing_plans", 'String'>;
    readonly listing_id: Prisma.FieldRef<"pricing_plans", 'String'>;
    readonly name: Prisma.FieldRef<"pricing_plans", 'String'>;
    readonly pricing_type: Prisma.FieldRef<"pricing_plans", 'pricing_type'>;
    readonly billing_cycle: Prisma.FieldRef<"pricing_plans", 'billing_cycle'>;
    readonly price_amount: Prisma.FieldRef<"pricing_plans", 'Decimal'>;
    readonly currency: Prisma.FieldRef<"pricing_plans", 'String'>;
    readonly sessions_included: Prisma.FieldRef<"pricing_plans", 'Int'>;
    readonly validity_days: Prisma.FieldRef<"pricing_plans", 'Int'>;
    readonly description: Prisma.FieldRef<"pricing_plans", 'String'>;
    readonly is_active: Prisma.FieldRef<"pricing_plans", 'Boolean'>;
    readonly created_at: Prisma.FieldRef<"pricing_plans", 'DateTime'>;
    readonly updated_at: Prisma.FieldRef<"pricing_plans", 'DateTime'>;
}
export type pricing_plansFindUniqueArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.pricing_plansSelect<ExtArgs> | null;
    omit?: Prisma.pricing_plansOmit<ExtArgs> | null;
    include?: Prisma.pricing_plansInclude<ExtArgs> | null;
    where: Prisma.pricing_plansWhereUniqueInput;
};
export type pricing_plansFindUniqueOrThrowArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.pricing_plansSelect<ExtArgs> | null;
    omit?: Prisma.pricing_plansOmit<ExtArgs> | null;
    include?: Prisma.pricing_plansInclude<ExtArgs> | null;
    where: Prisma.pricing_plansWhereUniqueInput;
};
export type pricing_plansFindFirstArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.pricing_plansSelect<ExtArgs> | null;
    omit?: Prisma.pricing_plansOmit<ExtArgs> | null;
    include?: Prisma.pricing_plansInclude<ExtArgs> | null;
    where?: Prisma.pricing_plansWhereInput;
    orderBy?: Prisma.pricing_plansOrderByWithRelationInput | Prisma.pricing_plansOrderByWithRelationInput[];
    cursor?: Prisma.pricing_plansWhereUniqueInput;
    take?: number;
    skip?: number;
    distinct?: Prisma.Pricing_plansScalarFieldEnum | Prisma.Pricing_plansScalarFieldEnum[];
};
export type pricing_plansFindFirstOrThrowArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.pricing_plansSelect<ExtArgs> | null;
    omit?: Prisma.pricing_plansOmit<ExtArgs> | null;
    include?: Prisma.pricing_plansInclude<ExtArgs> | null;
    where?: Prisma.pricing_plansWhereInput;
    orderBy?: Prisma.pricing_plansOrderByWithRelationInput | Prisma.pricing_plansOrderByWithRelationInput[];
    cursor?: Prisma.pricing_plansWhereUniqueInput;
    take?: number;
    skip?: number;
    distinct?: Prisma.Pricing_plansScalarFieldEnum | Prisma.Pricing_plansScalarFieldEnum[];
};
export type pricing_plansFindManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.pricing_plansSelect<ExtArgs> | null;
    omit?: Prisma.pricing_plansOmit<ExtArgs> | null;
    include?: Prisma.pricing_plansInclude<ExtArgs> | null;
    where?: Prisma.pricing_plansWhereInput;
    orderBy?: Prisma.pricing_plansOrderByWithRelationInput | Prisma.pricing_plansOrderByWithRelationInput[];
    cursor?: Prisma.pricing_plansWhereUniqueInput;
    take?: number;
    skip?: number;
    distinct?: Prisma.Pricing_plansScalarFieldEnum | Prisma.Pricing_plansScalarFieldEnum[];
};
export type pricing_plansCreateArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.pricing_plansSelect<ExtArgs> | null;
    omit?: Prisma.pricing_plansOmit<ExtArgs> | null;
    include?: Prisma.pricing_plansInclude<ExtArgs> | null;
    data: Prisma.XOR<Prisma.pricing_plansCreateInput, Prisma.pricing_plansUncheckedCreateInput>;
};
export type pricing_plansCreateManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    data: Prisma.pricing_plansCreateManyInput | Prisma.pricing_plansCreateManyInput[];
    skipDuplicates?: boolean;
};
export type pricing_plansCreateManyAndReturnArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.pricing_plansSelectCreateManyAndReturn<ExtArgs> | null;
    omit?: Prisma.pricing_plansOmit<ExtArgs> | null;
    data: Prisma.pricing_plansCreateManyInput | Prisma.pricing_plansCreateManyInput[];
    skipDuplicates?: boolean;
    include?: Prisma.pricing_plansIncludeCreateManyAndReturn<ExtArgs> | null;
};
export type pricing_plansUpdateArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.pricing_plansSelect<ExtArgs> | null;
    omit?: Prisma.pricing_plansOmit<ExtArgs> | null;
    include?: Prisma.pricing_plansInclude<ExtArgs> | null;
    data: Prisma.XOR<Prisma.pricing_plansUpdateInput, Prisma.pricing_plansUncheckedUpdateInput>;
    where: Prisma.pricing_plansWhereUniqueInput;
};
export type pricing_plansUpdateManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    data: Prisma.XOR<Prisma.pricing_plansUpdateManyMutationInput, Prisma.pricing_plansUncheckedUpdateManyInput>;
    where?: Prisma.pricing_plansWhereInput;
    limit?: number;
};
export type pricing_plansUpdateManyAndReturnArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.pricing_plansSelectUpdateManyAndReturn<ExtArgs> | null;
    omit?: Prisma.pricing_plansOmit<ExtArgs> | null;
    data: Prisma.XOR<Prisma.pricing_plansUpdateManyMutationInput, Prisma.pricing_plansUncheckedUpdateManyInput>;
    where?: Prisma.pricing_plansWhereInput;
    limit?: number;
    include?: Prisma.pricing_plansIncludeUpdateManyAndReturn<ExtArgs> | null;
};
export type pricing_plansUpsertArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.pricing_plansSelect<ExtArgs> | null;
    omit?: Prisma.pricing_plansOmit<ExtArgs> | null;
    include?: Prisma.pricing_plansInclude<ExtArgs> | null;
    where: Prisma.pricing_plansWhereUniqueInput;
    create: Prisma.XOR<Prisma.pricing_plansCreateInput, Prisma.pricing_plansUncheckedCreateInput>;
    update: Prisma.XOR<Prisma.pricing_plansUpdateInput, Prisma.pricing_plansUncheckedUpdateInput>;
};
export type pricing_plansDeleteArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.pricing_plansSelect<ExtArgs> | null;
    omit?: Prisma.pricing_plansOmit<ExtArgs> | null;
    include?: Prisma.pricing_plansInclude<ExtArgs> | null;
    where: Prisma.pricing_plansWhereUniqueInput;
};
export type pricing_plansDeleteManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    where?: Prisma.pricing_plansWhereInput;
    limit?: number;
};
export type pricing_plans$bookingsArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
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
export type pricing_plansDefaultArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.pricing_plansSelect<ExtArgs> | null;
    omit?: Prisma.pricing_plansOmit<ExtArgs> | null;
    include?: Prisma.pricing_plansInclude<ExtArgs> | null;
};
