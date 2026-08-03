import type * as runtime from "@prisma/client/runtime/client";
import type * as Prisma from "../internal/prismaNamespace.js";
export type payout_payment_itemsModel = runtime.Types.Result.DefaultSelection<Prisma.$payout_payment_itemsPayload>;
export type AggregatePayout_payment_items = {
    _count: Payout_payment_itemsCountAggregateOutputType | null;
    _avg: Payout_payment_itemsAvgAggregateOutputType | null;
    _sum: Payout_payment_itemsSumAggregateOutputType | null;
    _min: Payout_payment_itemsMinAggregateOutputType | null;
    _max: Payout_payment_itemsMaxAggregateOutputType | null;
};
export type Payout_payment_itemsAvgAggregateOutputType = {
    amount: runtime.Decimal | null;
};
export type Payout_payment_itemsSumAggregateOutputType = {
    amount: runtime.Decimal | null;
};
export type Payout_payment_itemsMinAggregateOutputType = {
    id: string | null;
    payout_id: string | null;
    payment_id: string | null;
    amount: runtime.Decimal | null;
};
export type Payout_payment_itemsMaxAggregateOutputType = {
    id: string | null;
    payout_id: string | null;
    payment_id: string | null;
    amount: runtime.Decimal | null;
};
export type Payout_payment_itemsCountAggregateOutputType = {
    id: number;
    payout_id: number;
    payment_id: number;
    amount: number;
    _all: number;
};
export type Payout_payment_itemsAvgAggregateInputType = {
    amount?: true;
};
export type Payout_payment_itemsSumAggregateInputType = {
    amount?: true;
};
export type Payout_payment_itemsMinAggregateInputType = {
    id?: true;
    payout_id?: true;
    payment_id?: true;
    amount?: true;
};
export type Payout_payment_itemsMaxAggregateInputType = {
    id?: true;
    payout_id?: true;
    payment_id?: true;
    amount?: true;
};
export type Payout_payment_itemsCountAggregateInputType = {
    id?: true;
    payout_id?: true;
    payment_id?: true;
    amount?: true;
    _all?: true;
};
export type Payout_payment_itemsAggregateArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    where?: Prisma.payout_payment_itemsWhereInput;
    orderBy?: Prisma.payout_payment_itemsOrderByWithRelationInput | Prisma.payout_payment_itemsOrderByWithRelationInput[];
    cursor?: Prisma.payout_payment_itemsWhereUniqueInput;
    take?: number;
    skip?: number;
    _count?: true | Payout_payment_itemsCountAggregateInputType;
    _avg?: Payout_payment_itemsAvgAggregateInputType;
    _sum?: Payout_payment_itemsSumAggregateInputType;
    _min?: Payout_payment_itemsMinAggregateInputType;
    _max?: Payout_payment_itemsMaxAggregateInputType;
};
export type GetPayout_payment_itemsAggregateType<T extends Payout_payment_itemsAggregateArgs> = {
    [P in keyof T & keyof AggregatePayout_payment_items]: P extends '_count' | 'count' ? T[P] extends true ? number : Prisma.GetScalarType<T[P], AggregatePayout_payment_items[P]> : Prisma.GetScalarType<T[P], AggregatePayout_payment_items[P]>;
};
export type payout_payment_itemsGroupByArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    where?: Prisma.payout_payment_itemsWhereInput;
    orderBy?: Prisma.payout_payment_itemsOrderByWithAggregationInput | Prisma.payout_payment_itemsOrderByWithAggregationInput[];
    by: Prisma.Payout_payment_itemsScalarFieldEnum[] | Prisma.Payout_payment_itemsScalarFieldEnum;
    having?: Prisma.payout_payment_itemsScalarWhereWithAggregatesInput;
    take?: number;
    skip?: number;
    _count?: Payout_payment_itemsCountAggregateInputType | true;
    _avg?: Payout_payment_itemsAvgAggregateInputType;
    _sum?: Payout_payment_itemsSumAggregateInputType;
    _min?: Payout_payment_itemsMinAggregateInputType;
    _max?: Payout_payment_itemsMaxAggregateInputType;
};
export type Payout_payment_itemsGroupByOutputType = {
    id: string;
    payout_id: string;
    payment_id: string;
    amount: runtime.Decimal;
    _count: Payout_payment_itemsCountAggregateOutputType | null;
    _avg: Payout_payment_itemsAvgAggregateOutputType | null;
    _sum: Payout_payment_itemsSumAggregateOutputType | null;
    _min: Payout_payment_itemsMinAggregateOutputType | null;
    _max: Payout_payment_itemsMaxAggregateOutputType | null;
};
export type GetPayout_payment_itemsGroupByPayload<T extends payout_payment_itemsGroupByArgs> = Prisma.PrismaPromise<Array<Prisma.PickEnumerable<Payout_payment_itemsGroupByOutputType, T['by']> & {
    [P in ((keyof T) & (keyof Payout_payment_itemsGroupByOutputType))]: P extends '_count' ? T[P] extends boolean ? number : Prisma.GetScalarType<T[P], Payout_payment_itemsGroupByOutputType[P]> : Prisma.GetScalarType<T[P], Payout_payment_itemsGroupByOutputType[P]>;
}>>;
export type payout_payment_itemsWhereInput = {
    AND?: Prisma.payout_payment_itemsWhereInput | Prisma.payout_payment_itemsWhereInput[];
    OR?: Prisma.payout_payment_itemsWhereInput[];
    NOT?: Prisma.payout_payment_itemsWhereInput | Prisma.payout_payment_itemsWhereInput[];
    id?: Prisma.UuidFilter<"payout_payment_items"> | string;
    payout_id?: Prisma.UuidFilter<"payout_payment_items"> | string;
    payment_id?: Prisma.UuidFilter<"payout_payment_items"> | string;
    amount?: Prisma.DecimalFilter<"payout_payment_items"> | runtime.Decimal | runtime.DecimalJsLike | number | string;
    payments?: Prisma.XOR<Prisma.PaymentsScalarRelationFilter, Prisma.paymentsWhereInput>;
    payout_tracking?: Prisma.XOR<Prisma.Payout_trackingScalarRelationFilter, Prisma.payout_trackingWhereInput>;
};
export type payout_payment_itemsOrderByWithRelationInput = {
    id?: Prisma.SortOrder;
    payout_id?: Prisma.SortOrder;
    payment_id?: Prisma.SortOrder;
    amount?: Prisma.SortOrder;
    payments?: Prisma.paymentsOrderByWithRelationInput;
    payout_tracking?: Prisma.payout_trackingOrderByWithRelationInput;
};
export type payout_payment_itemsWhereUniqueInput = Prisma.AtLeast<{
    id?: string;
    payout_id_payment_id?: Prisma.payout_payment_itemsPayout_idPayment_idCompoundUniqueInput;
    AND?: Prisma.payout_payment_itemsWhereInput | Prisma.payout_payment_itemsWhereInput[];
    OR?: Prisma.payout_payment_itemsWhereInput[];
    NOT?: Prisma.payout_payment_itemsWhereInput | Prisma.payout_payment_itemsWhereInput[];
    payout_id?: Prisma.UuidFilter<"payout_payment_items"> | string;
    payment_id?: Prisma.UuidFilter<"payout_payment_items"> | string;
    amount?: Prisma.DecimalFilter<"payout_payment_items"> | runtime.Decimal | runtime.DecimalJsLike | number | string;
    payments?: Prisma.XOR<Prisma.PaymentsScalarRelationFilter, Prisma.paymentsWhereInput>;
    payout_tracking?: Prisma.XOR<Prisma.Payout_trackingScalarRelationFilter, Prisma.payout_trackingWhereInput>;
}, "id" | "payout_id_payment_id">;
export type payout_payment_itemsOrderByWithAggregationInput = {
    id?: Prisma.SortOrder;
    payout_id?: Prisma.SortOrder;
    payment_id?: Prisma.SortOrder;
    amount?: Prisma.SortOrder;
    _count?: Prisma.payout_payment_itemsCountOrderByAggregateInput;
    _avg?: Prisma.payout_payment_itemsAvgOrderByAggregateInput;
    _max?: Prisma.payout_payment_itemsMaxOrderByAggregateInput;
    _min?: Prisma.payout_payment_itemsMinOrderByAggregateInput;
    _sum?: Prisma.payout_payment_itemsSumOrderByAggregateInput;
};
export type payout_payment_itemsScalarWhereWithAggregatesInput = {
    AND?: Prisma.payout_payment_itemsScalarWhereWithAggregatesInput | Prisma.payout_payment_itemsScalarWhereWithAggregatesInput[];
    OR?: Prisma.payout_payment_itemsScalarWhereWithAggregatesInput[];
    NOT?: Prisma.payout_payment_itemsScalarWhereWithAggregatesInput | Prisma.payout_payment_itemsScalarWhereWithAggregatesInput[];
    id?: Prisma.UuidWithAggregatesFilter<"payout_payment_items"> | string;
    payout_id?: Prisma.UuidWithAggregatesFilter<"payout_payment_items"> | string;
    payment_id?: Prisma.UuidWithAggregatesFilter<"payout_payment_items"> | string;
    amount?: Prisma.DecimalWithAggregatesFilter<"payout_payment_items"> | runtime.Decimal | runtime.DecimalJsLike | number | string;
};
export type payout_payment_itemsCreateInput = {
    id?: string;
    amount: runtime.Decimal | runtime.DecimalJsLike | number | string;
    payments: Prisma.paymentsCreateNestedOneWithoutPayout_payment_itemsInput;
    payout_tracking: Prisma.payout_trackingCreateNestedOneWithoutPayout_payment_itemsInput;
};
export type payout_payment_itemsUncheckedCreateInput = {
    id?: string;
    payout_id: string;
    payment_id: string;
    amount: runtime.Decimal | runtime.DecimalJsLike | number | string;
};
export type payout_payment_itemsUpdateInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    amount?: Prisma.DecimalFieldUpdateOperationsInput | runtime.Decimal | runtime.DecimalJsLike | number | string;
    payments?: Prisma.paymentsUpdateOneRequiredWithoutPayout_payment_itemsNestedInput;
    payout_tracking?: Prisma.payout_trackingUpdateOneRequiredWithoutPayout_payment_itemsNestedInput;
};
export type payout_payment_itemsUncheckedUpdateInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    payout_id?: Prisma.StringFieldUpdateOperationsInput | string;
    payment_id?: Prisma.StringFieldUpdateOperationsInput | string;
    amount?: Prisma.DecimalFieldUpdateOperationsInput | runtime.Decimal | runtime.DecimalJsLike | number | string;
};
export type payout_payment_itemsCreateManyInput = {
    id?: string;
    payout_id: string;
    payment_id: string;
    amount: runtime.Decimal | runtime.DecimalJsLike | number | string;
};
export type payout_payment_itemsUpdateManyMutationInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    amount?: Prisma.DecimalFieldUpdateOperationsInput | runtime.Decimal | runtime.DecimalJsLike | number | string;
};
export type payout_payment_itemsUncheckedUpdateManyInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    payout_id?: Prisma.StringFieldUpdateOperationsInput | string;
    payment_id?: Prisma.StringFieldUpdateOperationsInput | string;
    amount?: Prisma.DecimalFieldUpdateOperationsInput | runtime.Decimal | runtime.DecimalJsLike | number | string;
};
export type Payout_payment_itemsListRelationFilter = {
    every?: Prisma.payout_payment_itemsWhereInput;
    some?: Prisma.payout_payment_itemsWhereInput;
    none?: Prisma.payout_payment_itemsWhereInput;
};
export type payout_payment_itemsOrderByRelationAggregateInput = {
    _count?: Prisma.SortOrder;
};
export type payout_payment_itemsPayout_idPayment_idCompoundUniqueInput = {
    payout_id: string;
    payment_id: string;
};
export type payout_payment_itemsCountOrderByAggregateInput = {
    id?: Prisma.SortOrder;
    payout_id?: Prisma.SortOrder;
    payment_id?: Prisma.SortOrder;
    amount?: Prisma.SortOrder;
};
export type payout_payment_itemsAvgOrderByAggregateInput = {
    amount?: Prisma.SortOrder;
};
export type payout_payment_itemsMaxOrderByAggregateInput = {
    id?: Prisma.SortOrder;
    payout_id?: Prisma.SortOrder;
    payment_id?: Prisma.SortOrder;
    amount?: Prisma.SortOrder;
};
export type payout_payment_itemsMinOrderByAggregateInput = {
    id?: Prisma.SortOrder;
    payout_id?: Prisma.SortOrder;
    payment_id?: Prisma.SortOrder;
    amount?: Prisma.SortOrder;
};
export type payout_payment_itemsSumOrderByAggregateInput = {
    amount?: Prisma.SortOrder;
};
export type payout_payment_itemsCreateNestedManyWithoutPaymentsInput = {
    create?: Prisma.XOR<Prisma.payout_payment_itemsCreateWithoutPaymentsInput, Prisma.payout_payment_itemsUncheckedCreateWithoutPaymentsInput> | Prisma.payout_payment_itemsCreateWithoutPaymentsInput[] | Prisma.payout_payment_itemsUncheckedCreateWithoutPaymentsInput[];
    connectOrCreate?: Prisma.payout_payment_itemsCreateOrConnectWithoutPaymentsInput | Prisma.payout_payment_itemsCreateOrConnectWithoutPaymentsInput[];
    createMany?: Prisma.payout_payment_itemsCreateManyPaymentsInputEnvelope;
    connect?: Prisma.payout_payment_itemsWhereUniqueInput | Prisma.payout_payment_itemsWhereUniqueInput[];
};
export type payout_payment_itemsUncheckedCreateNestedManyWithoutPaymentsInput = {
    create?: Prisma.XOR<Prisma.payout_payment_itemsCreateWithoutPaymentsInput, Prisma.payout_payment_itemsUncheckedCreateWithoutPaymentsInput> | Prisma.payout_payment_itemsCreateWithoutPaymentsInput[] | Prisma.payout_payment_itemsUncheckedCreateWithoutPaymentsInput[];
    connectOrCreate?: Prisma.payout_payment_itemsCreateOrConnectWithoutPaymentsInput | Prisma.payout_payment_itemsCreateOrConnectWithoutPaymentsInput[];
    createMany?: Prisma.payout_payment_itemsCreateManyPaymentsInputEnvelope;
    connect?: Prisma.payout_payment_itemsWhereUniqueInput | Prisma.payout_payment_itemsWhereUniqueInput[];
};
export type payout_payment_itemsUpdateManyWithoutPaymentsNestedInput = {
    create?: Prisma.XOR<Prisma.payout_payment_itemsCreateWithoutPaymentsInput, Prisma.payout_payment_itemsUncheckedCreateWithoutPaymentsInput> | Prisma.payout_payment_itemsCreateWithoutPaymentsInput[] | Prisma.payout_payment_itemsUncheckedCreateWithoutPaymentsInput[];
    connectOrCreate?: Prisma.payout_payment_itemsCreateOrConnectWithoutPaymentsInput | Prisma.payout_payment_itemsCreateOrConnectWithoutPaymentsInput[];
    upsert?: Prisma.payout_payment_itemsUpsertWithWhereUniqueWithoutPaymentsInput | Prisma.payout_payment_itemsUpsertWithWhereUniqueWithoutPaymentsInput[];
    createMany?: Prisma.payout_payment_itemsCreateManyPaymentsInputEnvelope;
    set?: Prisma.payout_payment_itemsWhereUniqueInput | Prisma.payout_payment_itemsWhereUniqueInput[];
    disconnect?: Prisma.payout_payment_itemsWhereUniqueInput | Prisma.payout_payment_itemsWhereUniqueInput[];
    delete?: Prisma.payout_payment_itemsWhereUniqueInput | Prisma.payout_payment_itemsWhereUniqueInput[];
    connect?: Prisma.payout_payment_itemsWhereUniqueInput | Prisma.payout_payment_itemsWhereUniqueInput[];
    update?: Prisma.payout_payment_itemsUpdateWithWhereUniqueWithoutPaymentsInput | Prisma.payout_payment_itemsUpdateWithWhereUniqueWithoutPaymentsInput[];
    updateMany?: Prisma.payout_payment_itemsUpdateManyWithWhereWithoutPaymentsInput | Prisma.payout_payment_itemsUpdateManyWithWhereWithoutPaymentsInput[];
    deleteMany?: Prisma.payout_payment_itemsScalarWhereInput | Prisma.payout_payment_itemsScalarWhereInput[];
};
export type payout_payment_itemsUncheckedUpdateManyWithoutPaymentsNestedInput = {
    create?: Prisma.XOR<Prisma.payout_payment_itemsCreateWithoutPaymentsInput, Prisma.payout_payment_itemsUncheckedCreateWithoutPaymentsInput> | Prisma.payout_payment_itemsCreateWithoutPaymentsInput[] | Prisma.payout_payment_itemsUncheckedCreateWithoutPaymentsInput[];
    connectOrCreate?: Prisma.payout_payment_itemsCreateOrConnectWithoutPaymentsInput | Prisma.payout_payment_itemsCreateOrConnectWithoutPaymentsInput[];
    upsert?: Prisma.payout_payment_itemsUpsertWithWhereUniqueWithoutPaymentsInput | Prisma.payout_payment_itemsUpsertWithWhereUniqueWithoutPaymentsInput[];
    createMany?: Prisma.payout_payment_itemsCreateManyPaymentsInputEnvelope;
    set?: Prisma.payout_payment_itemsWhereUniqueInput | Prisma.payout_payment_itemsWhereUniqueInput[];
    disconnect?: Prisma.payout_payment_itemsWhereUniqueInput | Prisma.payout_payment_itemsWhereUniqueInput[];
    delete?: Prisma.payout_payment_itemsWhereUniqueInput | Prisma.payout_payment_itemsWhereUniqueInput[];
    connect?: Prisma.payout_payment_itemsWhereUniqueInput | Prisma.payout_payment_itemsWhereUniqueInput[];
    update?: Prisma.payout_payment_itemsUpdateWithWhereUniqueWithoutPaymentsInput | Prisma.payout_payment_itemsUpdateWithWhereUniqueWithoutPaymentsInput[];
    updateMany?: Prisma.payout_payment_itemsUpdateManyWithWhereWithoutPaymentsInput | Prisma.payout_payment_itemsUpdateManyWithWhereWithoutPaymentsInput[];
    deleteMany?: Prisma.payout_payment_itemsScalarWhereInput | Prisma.payout_payment_itemsScalarWhereInput[];
};
export type payout_payment_itemsCreateNestedManyWithoutPayout_trackingInput = {
    create?: Prisma.XOR<Prisma.payout_payment_itemsCreateWithoutPayout_trackingInput, Prisma.payout_payment_itemsUncheckedCreateWithoutPayout_trackingInput> | Prisma.payout_payment_itemsCreateWithoutPayout_trackingInput[] | Prisma.payout_payment_itemsUncheckedCreateWithoutPayout_trackingInput[];
    connectOrCreate?: Prisma.payout_payment_itemsCreateOrConnectWithoutPayout_trackingInput | Prisma.payout_payment_itemsCreateOrConnectWithoutPayout_trackingInput[];
    createMany?: Prisma.payout_payment_itemsCreateManyPayout_trackingInputEnvelope;
    connect?: Prisma.payout_payment_itemsWhereUniqueInput | Prisma.payout_payment_itemsWhereUniqueInput[];
};
export type payout_payment_itemsUncheckedCreateNestedManyWithoutPayout_trackingInput = {
    create?: Prisma.XOR<Prisma.payout_payment_itemsCreateWithoutPayout_trackingInput, Prisma.payout_payment_itemsUncheckedCreateWithoutPayout_trackingInput> | Prisma.payout_payment_itemsCreateWithoutPayout_trackingInput[] | Prisma.payout_payment_itemsUncheckedCreateWithoutPayout_trackingInput[];
    connectOrCreate?: Prisma.payout_payment_itemsCreateOrConnectWithoutPayout_trackingInput | Prisma.payout_payment_itemsCreateOrConnectWithoutPayout_trackingInput[];
    createMany?: Prisma.payout_payment_itemsCreateManyPayout_trackingInputEnvelope;
    connect?: Prisma.payout_payment_itemsWhereUniqueInput | Prisma.payout_payment_itemsWhereUniqueInput[];
};
export type payout_payment_itemsUpdateManyWithoutPayout_trackingNestedInput = {
    create?: Prisma.XOR<Prisma.payout_payment_itemsCreateWithoutPayout_trackingInput, Prisma.payout_payment_itemsUncheckedCreateWithoutPayout_trackingInput> | Prisma.payout_payment_itemsCreateWithoutPayout_trackingInput[] | Prisma.payout_payment_itemsUncheckedCreateWithoutPayout_trackingInput[];
    connectOrCreate?: Prisma.payout_payment_itemsCreateOrConnectWithoutPayout_trackingInput | Prisma.payout_payment_itemsCreateOrConnectWithoutPayout_trackingInput[];
    upsert?: Prisma.payout_payment_itemsUpsertWithWhereUniqueWithoutPayout_trackingInput | Prisma.payout_payment_itemsUpsertWithWhereUniqueWithoutPayout_trackingInput[];
    createMany?: Prisma.payout_payment_itemsCreateManyPayout_trackingInputEnvelope;
    set?: Prisma.payout_payment_itemsWhereUniqueInput | Prisma.payout_payment_itemsWhereUniqueInput[];
    disconnect?: Prisma.payout_payment_itemsWhereUniqueInput | Prisma.payout_payment_itemsWhereUniqueInput[];
    delete?: Prisma.payout_payment_itemsWhereUniqueInput | Prisma.payout_payment_itemsWhereUniqueInput[];
    connect?: Prisma.payout_payment_itemsWhereUniqueInput | Prisma.payout_payment_itemsWhereUniqueInput[];
    update?: Prisma.payout_payment_itemsUpdateWithWhereUniqueWithoutPayout_trackingInput | Prisma.payout_payment_itemsUpdateWithWhereUniqueWithoutPayout_trackingInput[];
    updateMany?: Prisma.payout_payment_itemsUpdateManyWithWhereWithoutPayout_trackingInput | Prisma.payout_payment_itemsUpdateManyWithWhereWithoutPayout_trackingInput[];
    deleteMany?: Prisma.payout_payment_itemsScalarWhereInput | Prisma.payout_payment_itemsScalarWhereInput[];
};
export type payout_payment_itemsUncheckedUpdateManyWithoutPayout_trackingNestedInput = {
    create?: Prisma.XOR<Prisma.payout_payment_itemsCreateWithoutPayout_trackingInput, Prisma.payout_payment_itemsUncheckedCreateWithoutPayout_trackingInput> | Prisma.payout_payment_itemsCreateWithoutPayout_trackingInput[] | Prisma.payout_payment_itemsUncheckedCreateWithoutPayout_trackingInput[];
    connectOrCreate?: Prisma.payout_payment_itemsCreateOrConnectWithoutPayout_trackingInput | Prisma.payout_payment_itemsCreateOrConnectWithoutPayout_trackingInput[];
    upsert?: Prisma.payout_payment_itemsUpsertWithWhereUniqueWithoutPayout_trackingInput | Prisma.payout_payment_itemsUpsertWithWhereUniqueWithoutPayout_trackingInput[];
    createMany?: Prisma.payout_payment_itemsCreateManyPayout_trackingInputEnvelope;
    set?: Prisma.payout_payment_itemsWhereUniqueInput | Prisma.payout_payment_itemsWhereUniqueInput[];
    disconnect?: Prisma.payout_payment_itemsWhereUniqueInput | Prisma.payout_payment_itemsWhereUniqueInput[];
    delete?: Prisma.payout_payment_itemsWhereUniqueInput | Prisma.payout_payment_itemsWhereUniqueInput[];
    connect?: Prisma.payout_payment_itemsWhereUniqueInput | Prisma.payout_payment_itemsWhereUniqueInput[];
    update?: Prisma.payout_payment_itemsUpdateWithWhereUniqueWithoutPayout_trackingInput | Prisma.payout_payment_itemsUpdateWithWhereUniqueWithoutPayout_trackingInput[];
    updateMany?: Prisma.payout_payment_itemsUpdateManyWithWhereWithoutPayout_trackingInput | Prisma.payout_payment_itemsUpdateManyWithWhereWithoutPayout_trackingInput[];
    deleteMany?: Prisma.payout_payment_itemsScalarWhereInput | Prisma.payout_payment_itemsScalarWhereInput[];
};
export type payout_payment_itemsCreateWithoutPaymentsInput = {
    id?: string;
    amount: runtime.Decimal | runtime.DecimalJsLike | number | string;
    payout_tracking: Prisma.payout_trackingCreateNestedOneWithoutPayout_payment_itemsInput;
};
export type payout_payment_itemsUncheckedCreateWithoutPaymentsInput = {
    id?: string;
    payout_id: string;
    amount: runtime.Decimal | runtime.DecimalJsLike | number | string;
};
export type payout_payment_itemsCreateOrConnectWithoutPaymentsInput = {
    where: Prisma.payout_payment_itemsWhereUniqueInput;
    create: Prisma.XOR<Prisma.payout_payment_itemsCreateWithoutPaymentsInput, Prisma.payout_payment_itemsUncheckedCreateWithoutPaymentsInput>;
};
export type payout_payment_itemsCreateManyPaymentsInputEnvelope = {
    data: Prisma.payout_payment_itemsCreateManyPaymentsInput | Prisma.payout_payment_itemsCreateManyPaymentsInput[];
    skipDuplicates?: boolean;
};
export type payout_payment_itemsUpsertWithWhereUniqueWithoutPaymentsInput = {
    where: Prisma.payout_payment_itemsWhereUniqueInput;
    update: Prisma.XOR<Prisma.payout_payment_itemsUpdateWithoutPaymentsInput, Prisma.payout_payment_itemsUncheckedUpdateWithoutPaymentsInput>;
    create: Prisma.XOR<Prisma.payout_payment_itemsCreateWithoutPaymentsInput, Prisma.payout_payment_itemsUncheckedCreateWithoutPaymentsInput>;
};
export type payout_payment_itemsUpdateWithWhereUniqueWithoutPaymentsInput = {
    where: Prisma.payout_payment_itemsWhereUniqueInput;
    data: Prisma.XOR<Prisma.payout_payment_itemsUpdateWithoutPaymentsInput, Prisma.payout_payment_itemsUncheckedUpdateWithoutPaymentsInput>;
};
export type payout_payment_itemsUpdateManyWithWhereWithoutPaymentsInput = {
    where: Prisma.payout_payment_itemsScalarWhereInput;
    data: Prisma.XOR<Prisma.payout_payment_itemsUpdateManyMutationInput, Prisma.payout_payment_itemsUncheckedUpdateManyWithoutPaymentsInput>;
};
export type payout_payment_itemsScalarWhereInput = {
    AND?: Prisma.payout_payment_itemsScalarWhereInput | Prisma.payout_payment_itemsScalarWhereInput[];
    OR?: Prisma.payout_payment_itemsScalarWhereInput[];
    NOT?: Prisma.payout_payment_itemsScalarWhereInput | Prisma.payout_payment_itemsScalarWhereInput[];
    id?: Prisma.UuidFilter<"payout_payment_items"> | string;
    payout_id?: Prisma.UuidFilter<"payout_payment_items"> | string;
    payment_id?: Prisma.UuidFilter<"payout_payment_items"> | string;
    amount?: Prisma.DecimalFilter<"payout_payment_items"> | runtime.Decimal | runtime.DecimalJsLike | number | string;
};
export type payout_payment_itemsCreateWithoutPayout_trackingInput = {
    id?: string;
    amount: runtime.Decimal | runtime.DecimalJsLike | number | string;
    payments: Prisma.paymentsCreateNestedOneWithoutPayout_payment_itemsInput;
};
export type payout_payment_itemsUncheckedCreateWithoutPayout_trackingInput = {
    id?: string;
    payment_id: string;
    amount: runtime.Decimal | runtime.DecimalJsLike | number | string;
};
export type payout_payment_itemsCreateOrConnectWithoutPayout_trackingInput = {
    where: Prisma.payout_payment_itemsWhereUniqueInput;
    create: Prisma.XOR<Prisma.payout_payment_itemsCreateWithoutPayout_trackingInput, Prisma.payout_payment_itemsUncheckedCreateWithoutPayout_trackingInput>;
};
export type payout_payment_itemsCreateManyPayout_trackingInputEnvelope = {
    data: Prisma.payout_payment_itemsCreateManyPayout_trackingInput | Prisma.payout_payment_itemsCreateManyPayout_trackingInput[];
    skipDuplicates?: boolean;
};
export type payout_payment_itemsUpsertWithWhereUniqueWithoutPayout_trackingInput = {
    where: Prisma.payout_payment_itemsWhereUniqueInput;
    update: Prisma.XOR<Prisma.payout_payment_itemsUpdateWithoutPayout_trackingInput, Prisma.payout_payment_itemsUncheckedUpdateWithoutPayout_trackingInput>;
    create: Prisma.XOR<Prisma.payout_payment_itemsCreateWithoutPayout_trackingInput, Prisma.payout_payment_itemsUncheckedCreateWithoutPayout_trackingInput>;
};
export type payout_payment_itemsUpdateWithWhereUniqueWithoutPayout_trackingInput = {
    where: Prisma.payout_payment_itemsWhereUniqueInput;
    data: Prisma.XOR<Prisma.payout_payment_itemsUpdateWithoutPayout_trackingInput, Prisma.payout_payment_itemsUncheckedUpdateWithoutPayout_trackingInput>;
};
export type payout_payment_itemsUpdateManyWithWhereWithoutPayout_trackingInput = {
    where: Prisma.payout_payment_itemsScalarWhereInput;
    data: Prisma.XOR<Prisma.payout_payment_itemsUpdateManyMutationInput, Prisma.payout_payment_itemsUncheckedUpdateManyWithoutPayout_trackingInput>;
};
export type payout_payment_itemsCreateManyPaymentsInput = {
    id?: string;
    payout_id: string;
    amount: runtime.Decimal | runtime.DecimalJsLike | number | string;
};
export type payout_payment_itemsUpdateWithoutPaymentsInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    amount?: Prisma.DecimalFieldUpdateOperationsInput | runtime.Decimal | runtime.DecimalJsLike | number | string;
    payout_tracking?: Prisma.payout_trackingUpdateOneRequiredWithoutPayout_payment_itemsNestedInput;
};
export type payout_payment_itemsUncheckedUpdateWithoutPaymentsInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    payout_id?: Prisma.StringFieldUpdateOperationsInput | string;
    amount?: Prisma.DecimalFieldUpdateOperationsInput | runtime.Decimal | runtime.DecimalJsLike | number | string;
};
export type payout_payment_itemsUncheckedUpdateManyWithoutPaymentsInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    payout_id?: Prisma.StringFieldUpdateOperationsInput | string;
    amount?: Prisma.DecimalFieldUpdateOperationsInput | runtime.Decimal | runtime.DecimalJsLike | number | string;
};
export type payout_payment_itemsCreateManyPayout_trackingInput = {
    id?: string;
    payment_id: string;
    amount: runtime.Decimal | runtime.DecimalJsLike | number | string;
};
export type payout_payment_itemsUpdateWithoutPayout_trackingInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    amount?: Prisma.DecimalFieldUpdateOperationsInput | runtime.Decimal | runtime.DecimalJsLike | number | string;
    payments?: Prisma.paymentsUpdateOneRequiredWithoutPayout_payment_itemsNestedInput;
};
export type payout_payment_itemsUncheckedUpdateWithoutPayout_trackingInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    payment_id?: Prisma.StringFieldUpdateOperationsInput | string;
    amount?: Prisma.DecimalFieldUpdateOperationsInput | runtime.Decimal | runtime.DecimalJsLike | number | string;
};
export type payout_payment_itemsUncheckedUpdateManyWithoutPayout_trackingInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    payment_id?: Prisma.StringFieldUpdateOperationsInput | string;
    amount?: Prisma.DecimalFieldUpdateOperationsInput | runtime.Decimal | runtime.DecimalJsLike | number | string;
};
export type payout_payment_itemsSelect<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetSelect<{
    id?: boolean;
    payout_id?: boolean;
    payment_id?: boolean;
    amount?: boolean;
    payments?: boolean | Prisma.paymentsDefaultArgs<ExtArgs>;
    payout_tracking?: boolean | Prisma.payout_trackingDefaultArgs<ExtArgs>;
}, ExtArgs["result"]["payout_payment_items"]>;
export type payout_payment_itemsSelectCreateManyAndReturn<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetSelect<{
    id?: boolean;
    payout_id?: boolean;
    payment_id?: boolean;
    amount?: boolean;
    payments?: boolean | Prisma.paymentsDefaultArgs<ExtArgs>;
    payout_tracking?: boolean | Prisma.payout_trackingDefaultArgs<ExtArgs>;
}, ExtArgs["result"]["payout_payment_items"]>;
export type payout_payment_itemsSelectUpdateManyAndReturn<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetSelect<{
    id?: boolean;
    payout_id?: boolean;
    payment_id?: boolean;
    amount?: boolean;
    payments?: boolean | Prisma.paymentsDefaultArgs<ExtArgs>;
    payout_tracking?: boolean | Prisma.payout_trackingDefaultArgs<ExtArgs>;
}, ExtArgs["result"]["payout_payment_items"]>;
export type payout_payment_itemsSelectScalar = {
    id?: boolean;
    payout_id?: boolean;
    payment_id?: boolean;
    amount?: boolean;
};
export type payout_payment_itemsOmit<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetOmit<"id" | "payout_id" | "payment_id" | "amount", ExtArgs["result"]["payout_payment_items"]>;
export type payout_payment_itemsInclude<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    payments?: boolean | Prisma.paymentsDefaultArgs<ExtArgs>;
    payout_tracking?: boolean | Prisma.payout_trackingDefaultArgs<ExtArgs>;
};
export type payout_payment_itemsIncludeCreateManyAndReturn<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    payments?: boolean | Prisma.paymentsDefaultArgs<ExtArgs>;
    payout_tracking?: boolean | Prisma.payout_trackingDefaultArgs<ExtArgs>;
};
export type payout_payment_itemsIncludeUpdateManyAndReturn<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    payments?: boolean | Prisma.paymentsDefaultArgs<ExtArgs>;
    payout_tracking?: boolean | Prisma.payout_trackingDefaultArgs<ExtArgs>;
};
export type $payout_payment_itemsPayload<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    name: "payout_payment_items";
    objects: {
        payments: Prisma.$paymentsPayload<ExtArgs>;
        payout_tracking: Prisma.$payout_trackingPayload<ExtArgs>;
    };
    scalars: runtime.Types.Extensions.GetPayloadResult<{
        id: string;
        payout_id: string;
        payment_id: string;
        amount: runtime.Decimal;
    }, ExtArgs["result"]["payout_payment_items"]>;
    composites: {};
};
export type payout_payment_itemsGetPayload<S extends boolean | null | undefined | payout_payment_itemsDefaultArgs> = runtime.Types.Result.GetResult<Prisma.$payout_payment_itemsPayload, S>;
export type payout_payment_itemsCountArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = Omit<payout_payment_itemsFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
    select?: Payout_payment_itemsCountAggregateInputType | true;
};
export interface payout_payment_itemsDelegate<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: {
        types: Prisma.TypeMap<ExtArgs>['model']['payout_payment_items'];
        meta: {
            name: 'payout_payment_items';
        };
    };
    findUnique<T extends payout_payment_itemsFindUniqueArgs>(args: Prisma.SelectSubset<T, payout_payment_itemsFindUniqueArgs<ExtArgs>>): Prisma.Prisma__payout_payment_itemsClient<runtime.Types.Result.GetResult<Prisma.$payout_payment_itemsPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>;
    findUniqueOrThrow<T extends payout_payment_itemsFindUniqueOrThrowArgs>(args: Prisma.SelectSubset<T, payout_payment_itemsFindUniqueOrThrowArgs<ExtArgs>>): Prisma.Prisma__payout_payment_itemsClient<runtime.Types.Result.GetResult<Prisma.$payout_payment_itemsPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    findFirst<T extends payout_payment_itemsFindFirstArgs>(args?: Prisma.SelectSubset<T, payout_payment_itemsFindFirstArgs<ExtArgs>>): Prisma.Prisma__payout_payment_itemsClient<runtime.Types.Result.GetResult<Prisma.$payout_payment_itemsPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>;
    findFirstOrThrow<T extends payout_payment_itemsFindFirstOrThrowArgs>(args?: Prisma.SelectSubset<T, payout_payment_itemsFindFirstOrThrowArgs<ExtArgs>>): Prisma.Prisma__payout_payment_itemsClient<runtime.Types.Result.GetResult<Prisma.$payout_payment_itemsPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    findMany<T extends payout_payment_itemsFindManyArgs>(args?: Prisma.SelectSubset<T, payout_payment_itemsFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$payout_payment_itemsPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>;
    create<T extends payout_payment_itemsCreateArgs>(args: Prisma.SelectSubset<T, payout_payment_itemsCreateArgs<ExtArgs>>): Prisma.Prisma__payout_payment_itemsClient<runtime.Types.Result.GetResult<Prisma.$payout_payment_itemsPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    createMany<T extends payout_payment_itemsCreateManyArgs>(args?: Prisma.SelectSubset<T, payout_payment_itemsCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<Prisma.BatchPayload>;
    createManyAndReturn<T extends payout_payment_itemsCreateManyAndReturnArgs>(args?: Prisma.SelectSubset<T, payout_payment_itemsCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$payout_payment_itemsPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>;
    delete<T extends payout_payment_itemsDeleteArgs>(args: Prisma.SelectSubset<T, payout_payment_itemsDeleteArgs<ExtArgs>>): Prisma.Prisma__payout_payment_itemsClient<runtime.Types.Result.GetResult<Prisma.$payout_payment_itemsPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    update<T extends payout_payment_itemsUpdateArgs>(args: Prisma.SelectSubset<T, payout_payment_itemsUpdateArgs<ExtArgs>>): Prisma.Prisma__payout_payment_itemsClient<runtime.Types.Result.GetResult<Prisma.$payout_payment_itemsPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    deleteMany<T extends payout_payment_itemsDeleteManyArgs>(args?: Prisma.SelectSubset<T, payout_payment_itemsDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<Prisma.BatchPayload>;
    updateMany<T extends payout_payment_itemsUpdateManyArgs>(args: Prisma.SelectSubset<T, payout_payment_itemsUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<Prisma.BatchPayload>;
    updateManyAndReturn<T extends payout_payment_itemsUpdateManyAndReturnArgs>(args: Prisma.SelectSubset<T, payout_payment_itemsUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$payout_payment_itemsPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>;
    upsert<T extends payout_payment_itemsUpsertArgs>(args: Prisma.SelectSubset<T, payout_payment_itemsUpsertArgs<ExtArgs>>): Prisma.Prisma__payout_payment_itemsClient<runtime.Types.Result.GetResult<Prisma.$payout_payment_itemsPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    count<T extends payout_payment_itemsCountArgs>(args?: Prisma.Subset<T, payout_payment_itemsCountArgs>): Prisma.PrismaPromise<T extends runtime.Types.Utils.Record<'select', any> ? T['select'] extends true ? number : Prisma.GetScalarType<T['select'], Payout_payment_itemsCountAggregateOutputType> : number>;
    aggregate<T extends Payout_payment_itemsAggregateArgs>(args: Prisma.Subset<T, Payout_payment_itemsAggregateArgs>): Prisma.PrismaPromise<GetPayout_payment_itemsAggregateType<T>>;
    groupBy<T extends payout_payment_itemsGroupByArgs, HasSelectOrTake extends Prisma.Or<Prisma.Extends<'skip', Prisma.Keys<T>>, Prisma.Extends<'take', Prisma.Keys<T>>>, OrderByArg extends Prisma.True extends HasSelectOrTake ? {
        orderBy: payout_payment_itemsGroupByArgs['orderBy'];
    } : {
        orderBy?: payout_payment_itemsGroupByArgs['orderBy'];
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
    }[OrderFields]>(args: Prisma.SubsetIntersection<T, payout_payment_itemsGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetPayout_payment_itemsGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>;
    readonly fields: payout_payment_itemsFieldRefs;
}
export interface Prisma__payout_payment_itemsClient<T, Null = never, ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise";
    payments<T extends Prisma.paymentsDefaultArgs<ExtArgs> = {}>(args?: Prisma.Subset<T, Prisma.paymentsDefaultArgs<ExtArgs>>): Prisma.Prisma__paymentsClient<runtime.Types.Result.GetResult<Prisma.$paymentsPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>;
    payout_tracking<T extends Prisma.payout_trackingDefaultArgs<ExtArgs> = {}>(args?: Prisma.Subset<T, Prisma.payout_trackingDefaultArgs<ExtArgs>>): Prisma.Prisma__payout_trackingClient<runtime.Types.Result.GetResult<Prisma.$payout_trackingPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>;
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): runtime.Types.Utils.JsPromise<TResult1 | TResult2>;
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): runtime.Types.Utils.JsPromise<T | TResult>;
    finally(onfinally?: (() => void) | undefined | null): runtime.Types.Utils.JsPromise<T>;
}
export interface payout_payment_itemsFieldRefs {
    readonly id: Prisma.FieldRef<"payout_payment_items", 'String'>;
    readonly payout_id: Prisma.FieldRef<"payout_payment_items", 'String'>;
    readonly payment_id: Prisma.FieldRef<"payout_payment_items", 'String'>;
    readonly amount: Prisma.FieldRef<"payout_payment_items", 'Decimal'>;
}
export type payout_payment_itemsFindUniqueArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.payout_payment_itemsSelect<ExtArgs> | null;
    omit?: Prisma.payout_payment_itemsOmit<ExtArgs> | null;
    include?: Prisma.payout_payment_itemsInclude<ExtArgs> | null;
    where: Prisma.payout_payment_itemsWhereUniqueInput;
};
export type payout_payment_itemsFindUniqueOrThrowArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.payout_payment_itemsSelect<ExtArgs> | null;
    omit?: Prisma.payout_payment_itemsOmit<ExtArgs> | null;
    include?: Prisma.payout_payment_itemsInclude<ExtArgs> | null;
    where: Prisma.payout_payment_itemsWhereUniqueInput;
};
export type payout_payment_itemsFindFirstArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.payout_payment_itemsSelect<ExtArgs> | null;
    omit?: Prisma.payout_payment_itemsOmit<ExtArgs> | null;
    include?: Prisma.payout_payment_itemsInclude<ExtArgs> | null;
    where?: Prisma.payout_payment_itemsWhereInput;
    orderBy?: Prisma.payout_payment_itemsOrderByWithRelationInput | Prisma.payout_payment_itemsOrderByWithRelationInput[];
    cursor?: Prisma.payout_payment_itemsWhereUniqueInput;
    take?: number;
    skip?: number;
    distinct?: Prisma.Payout_payment_itemsScalarFieldEnum | Prisma.Payout_payment_itemsScalarFieldEnum[];
};
export type payout_payment_itemsFindFirstOrThrowArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.payout_payment_itemsSelect<ExtArgs> | null;
    omit?: Prisma.payout_payment_itemsOmit<ExtArgs> | null;
    include?: Prisma.payout_payment_itemsInclude<ExtArgs> | null;
    where?: Prisma.payout_payment_itemsWhereInput;
    orderBy?: Prisma.payout_payment_itemsOrderByWithRelationInput | Prisma.payout_payment_itemsOrderByWithRelationInput[];
    cursor?: Prisma.payout_payment_itemsWhereUniqueInput;
    take?: number;
    skip?: number;
    distinct?: Prisma.Payout_payment_itemsScalarFieldEnum | Prisma.Payout_payment_itemsScalarFieldEnum[];
};
export type payout_payment_itemsFindManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.payout_payment_itemsSelect<ExtArgs> | null;
    omit?: Prisma.payout_payment_itemsOmit<ExtArgs> | null;
    include?: Prisma.payout_payment_itemsInclude<ExtArgs> | null;
    where?: Prisma.payout_payment_itemsWhereInput;
    orderBy?: Prisma.payout_payment_itemsOrderByWithRelationInput | Prisma.payout_payment_itemsOrderByWithRelationInput[];
    cursor?: Prisma.payout_payment_itemsWhereUniqueInput;
    take?: number;
    skip?: number;
    distinct?: Prisma.Payout_payment_itemsScalarFieldEnum | Prisma.Payout_payment_itemsScalarFieldEnum[];
};
export type payout_payment_itemsCreateArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.payout_payment_itemsSelect<ExtArgs> | null;
    omit?: Prisma.payout_payment_itemsOmit<ExtArgs> | null;
    include?: Prisma.payout_payment_itemsInclude<ExtArgs> | null;
    data: Prisma.XOR<Prisma.payout_payment_itemsCreateInput, Prisma.payout_payment_itemsUncheckedCreateInput>;
};
export type payout_payment_itemsCreateManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    data: Prisma.payout_payment_itemsCreateManyInput | Prisma.payout_payment_itemsCreateManyInput[];
    skipDuplicates?: boolean;
};
export type payout_payment_itemsCreateManyAndReturnArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.payout_payment_itemsSelectCreateManyAndReturn<ExtArgs> | null;
    omit?: Prisma.payout_payment_itemsOmit<ExtArgs> | null;
    data: Prisma.payout_payment_itemsCreateManyInput | Prisma.payout_payment_itemsCreateManyInput[];
    skipDuplicates?: boolean;
    include?: Prisma.payout_payment_itemsIncludeCreateManyAndReturn<ExtArgs> | null;
};
export type payout_payment_itemsUpdateArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.payout_payment_itemsSelect<ExtArgs> | null;
    omit?: Prisma.payout_payment_itemsOmit<ExtArgs> | null;
    include?: Prisma.payout_payment_itemsInclude<ExtArgs> | null;
    data: Prisma.XOR<Prisma.payout_payment_itemsUpdateInput, Prisma.payout_payment_itemsUncheckedUpdateInput>;
    where: Prisma.payout_payment_itemsWhereUniqueInput;
};
export type payout_payment_itemsUpdateManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    data: Prisma.XOR<Prisma.payout_payment_itemsUpdateManyMutationInput, Prisma.payout_payment_itemsUncheckedUpdateManyInput>;
    where?: Prisma.payout_payment_itemsWhereInput;
    limit?: number;
};
export type payout_payment_itemsUpdateManyAndReturnArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.payout_payment_itemsSelectUpdateManyAndReturn<ExtArgs> | null;
    omit?: Prisma.payout_payment_itemsOmit<ExtArgs> | null;
    data: Prisma.XOR<Prisma.payout_payment_itemsUpdateManyMutationInput, Prisma.payout_payment_itemsUncheckedUpdateManyInput>;
    where?: Prisma.payout_payment_itemsWhereInput;
    limit?: number;
    include?: Prisma.payout_payment_itemsIncludeUpdateManyAndReturn<ExtArgs> | null;
};
export type payout_payment_itemsUpsertArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.payout_payment_itemsSelect<ExtArgs> | null;
    omit?: Prisma.payout_payment_itemsOmit<ExtArgs> | null;
    include?: Prisma.payout_payment_itemsInclude<ExtArgs> | null;
    where: Prisma.payout_payment_itemsWhereUniqueInput;
    create: Prisma.XOR<Prisma.payout_payment_itemsCreateInput, Prisma.payout_payment_itemsUncheckedCreateInput>;
    update: Prisma.XOR<Prisma.payout_payment_itemsUpdateInput, Prisma.payout_payment_itemsUncheckedUpdateInput>;
};
export type payout_payment_itemsDeleteArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.payout_payment_itemsSelect<ExtArgs> | null;
    omit?: Prisma.payout_payment_itemsOmit<ExtArgs> | null;
    include?: Prisma.payout_payment_itemsInclude<ExtArgs> | null;
    where: Prisma.payout_payment_itemsWhereUniqueInput;
};
export type payout_payment_itemsDeleteManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    where?: Prisma.payout_payment_itemsWhereInput;
    limit?: number;
};
export type payout_payment_itemsDefaultArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.payout_payment_itemsSelect<ExtArgs> | null;
    omit?: Prisma.payout_payment_itemsOmit<ExtArgs> | null;
    include?: Prisma.payout_payment_itemsInclude<ExtArgs> | null;
};
