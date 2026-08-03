import type * as runtime from "@prisma/client/runtime/client";
import type * as Prisma from "../internal/prismaNamespace.js";
export type dispute_messagesModel = runtime.Types.Result.DefaultSelection<Prisma.$dispute_messagesPayload>;
export type AggregateDispute_messages = {
    _count: Dispute_messagesCountAggregateOutputType | null;
    _min: Dispute_messagesMinAggregateOutputType | null;
    _max: Dispute_messagesMaxAggregateOutputType | null;
};
export type Dispute_messagesMinAggregateOutputType = {
    id: string | null;
    dispute_id: string | null;
    sender_id: string | null;
    body: string | null;
    is_internal: boolean | null;
    created_at: Date | null;
};
export type Dispute_messagesMaxAggregateOutputType = {
    id: string | null;
    dispute_id: string | null;
    sender_id: string | null;
    body: string | null;
    is_internal: boolean | null;
    created_at: Date | null;
};
export type Dispute_messagesCountAggregateOutputType = {
    id: number;
    dispute_id: number;
    sender_id: number;
    body: number;
    is_internal: number;
    created_at: number;
    _all: number;
};
export type Dispute_messagesMinAggregateInputType = {
    id?: true;
    dispute_id?: true;
    sender_id?: true;
    body?: true;
    is_internal?: true;
    created_at?: true;
};
export type Dispute_messagesMaxAggregateInputType = {
    id?: true;
    dispute_id?: true;
    sender_id?: true;
    body?: true;
    is_internal?: true;
    created_at?: true;
};
export type Dispute_messagesCountAggregateInputType = {
    id?: true;
    dispute_id?: true;
    sender_id?: true;
    body?: true;
    is_internal?: true;
    created_at?: true;
    _all?: true;
};
export type Dispute_messagesAggregateArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    where?: Prisma.dispute_messagesWhereInput;
    orderBy?: Prisma.dispute_messagesOrderByWithRelationInput | Prisma.dispute_messagesOrderByWithRelationInput[];
    cursor?: Prisma.dispute_messagesWhereUniqueInput;
    take?: number;
    skip?: number;
    _count?: true | Dispute_messagesCountAggregateInputType;
    _min?: Dispute_messagesMinAggregateInputType;
    _max?: Dispute_messagesMaxAggregateInputType;
};
export type GetDispute_messagesAggregateType<T extends Dispute_messagesAggregateArgs> = {
    [P in keyof T & keyof AggregateDispute_messages]: P extends '_count' | 'count' ? T[P] extends true ? number : Prisma.GetScalarType<T[P], AggregateDispute_messages[P]> : Prisma.GetScalarType<T[P], AggregateDispute_messages[P]>;
};
export type dispute_messagesGroupByArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    where?: Prisma.dispute_messagesWhereInput;
    orderBy?: Prisma.dispute_messagesOrderByWithAggregationInput | Prisma.dispute_messagesOrderByWithAggregationInput[];
    by: Prisma.Dispute_messagesScalarFieldEnum[] | Prisma.Dispute_messagesScalarFieldEnum;
    having?: Prisma.dispute_messagesScalarWhereWithAggregatesInput;
    take?: number;
    skip?: number;
    _count?: Dispute_messagesCountAggregateInputType | true;
    _min?: Dispute_messagesMinAggregateInputType;
    _max?: Dispute_messagesMaxAggregateInputType;
};
export type Dispute_messagesGroupByOutputType = {
    id: string;
    dispute_id: string;
    sender_id: string;
    body: string;
    is_internal: boolean;
    created_at: Date;
    _count: Dispute_messagesCountAggregateOutputType | null;
    _min: Dispute_messagesMinAggregateOutputType | null;
    _max: Dispute_messagesMaxAggregateOutputType | null;
};
export type GetDispute_messagesGroupByPayload<T extends dispute_messagesGroupByArgs> = Prisma.PrismaPromise<Array<Prisma.PickEnumerable<Dispute_messagesGroupByOutputType, T['by']> & {
    [P in ((keyof T) & (keyof Dispute_messagesGroupByOutputType))]: P extends '_count' ? T[P] extends boolean ? number : Prisma.GetScalarType<T[P], Dispute_messagesGroupByOutputType[P]> : Prisma.GetScalarType<T[P], Dispute_messagesGroupByOutputType[P]>;
}>>;
export type dispute_messagesWhereInput = {
    AND?: Prisma.dispute_messagesWhereInput | Prisma.dispute_messagesWhereInput[];
    OR?: Prisma.dispute_messagesWhereInput[];
    NOT?: Prisma.dispute_messagesWhereInput | Prisma.dispute_messagesWhereInput[];
    id?: Prisma.UuidFilter<"dispute_messages"> | string;
    dispute_id?: Prisma.UuidFilter<"dispute_messages"> | string;
    sender_id?: Prisma.UuidFilter<"dispute_messages"> | string;
    body?: Prisma.StringFilter<"dispute_messages"> | string;
    is_internal?: Prisma.BoolFilter<"dispute_messages"> | boolean;
    created_at?: Prisma.DateTimeFilter<"dispute_messages"> | Date | string;
    disputes?: Prisma.XOR<Prisma.DisputesScalarRelationFilter, Prisma.disputesWhereInput>;
    users?: Prisma.XOR<Prisma.UsersScalarRelationFilter, Prisma.usersWhereInput>;
};
export type dispute_messagesOrderByWithRelationInput = {
    id?: Prisma.SortOrder;
    dispute_id?: Prisma.SortOrder;
    sender_id?: Prisma.SortOrder;
    body?: Prisma.SortOrder;
    is_internal?: Prisma.SortOrder;
    created_at?: Prisma.SortOrder;
    disputes?: Prisma.disputesOrderByWithRelationInput;
    users?: Prisma.usersOrderByWithRelationInput;
};
export type dispute_messagesWhereUniqueInput = Prisma.AtLeast<{
    id?: string;
    AND?: Prisma.dispute_messagesWhereInput | Prisma.dispute_messagesWhereInput[];
    OR?: Prisma.dispute_messagesWhereInput[];
    NOT?: Prisma.dispute_messagesWhereInput | Prisma.dispute_messagesWhereInput[];
    dispute_id?: Prisma.UuidFilter<"dispute_messages"> | string;
    sender_id?: Prisma.UuidFilter<"dispute_messages"> | string;
    body?: Prisma.StringFilter<"dispute_messages"> | string;
    is_internal?: Prisma.BoolFilter<"dispute_messages"> | boolean;
    created_at?: Prisma.DateTimeFilter<"dispute_messages"> | Date | string;
    disputes?: Prisma.XOR<Prisma.DisputesScalarRelationFilter, Prisma.disputesWhereInput>;
    users?: Prisma.XOR<Prisma.UsersScalarRelationFilter, Prisma.usersWhereInput>;
}, "id">;
export type dispute_messagesOrderByWithAggregationInput = {
    id?: Prisma.SortOrder;
    dispute_id?: Prisma.SortOrder;
    sender_id?: Prisma.SortOrder;
    body?: Prisma.SortOrder;
    is_internal?: Prisma.SortOrder;
    created_at?: Prisma.SortOrder;
    _count?: Prisma.dispute_messagesCountOrderByAggregateInput;
    _max?: Prisma.dispute_messagesMaxOrderByAggregateInput;
    _min?: Prisma.dispute_messagesMinOrderByAggregateInput;
};
export type dispute_messagesScalarWhereWithAggregatesInput = {
    AND?: Prisma.dispute_messagesScalarWhereWithAggregatesInput | Prisma.dispute_messagesScalarWhereWithAggregatesInput[];
    OR?: Prisma.dispute_messagesScalarWhereWithAggregatesInput[];
    NOT?: Prisma.dispute_messagesScalarWhereWithAggregatesInput | Prisma.dispute_messagesScalarWhereWithAggregatesInput[];
    id?: Prisma.UuidWithAggregatesFilter<"dispute_messages"> | string;
    dispute_id?: Prisma.UuidWithAggregatesFilter<"dispute_messages"> | string;
    sender_id?: Prisma.UuidWithAggregatesFilter<"dispute_messages"> | string;
    body?: Prisma.StringWithAggregatesFilter<"dispute_messages"> | string;
    is_internal?: Prisma.BoolWithAggregatesFilter<"dispute_messages"> | boolean;
    created_at?: Prisma.DateTimeWithAggregatesFilter<"dispute_messages"> | Date | string;
};
export type dispute_messagesCreateInput = {
    id?: string;
    body: string;
    is_internal?: boolean;
    created_at?: Date | string;
    disputes: Prisma.disputesCreateNestedOneWithoutDispute_messagesInput;
    users: Prisma.usersCreateNestedOneWithoutDispute_messagesInput;
};
export type dispute_messagesUncheckedCreateInput = {
    id?: string;
    dispute_id: string;
    sender_id: string;
    body: string;
    is_internal?: boolean;
    created_at?: Date | string;
};
export type dispute_messagesUpdateInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    body?: Prisma.StringFieldUpdateOperationsInput | string;
    is_internal?: Prisma.BoolFieldUpdateOperationsInput | boolean;
    created_at?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    disputes?: Prisma.disputesUpdateOneRequiredWithoutDispute_messagesNestedInput;
    users?: Prisma.usersUpdateOneRequiredWithoutDispute_messagesNestedInput;
};
export type dispute_messagesUncheckedUpdateInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    dispute_id?: Prisma.StringFieldUpdateOperationsInput | string;
    sender_id?: Prisma.StringFieldUpdateOperationsInput | string;
    body?: Prisma.StringFieldUpdateOperationsInput | string;
    is_internal?: Prisma.BoolFieldUpdateOperationsInput | boolean;
    created_at?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
};
export type dispute_messagesCreateManyInput = {
    id?: string;
    dispute_id: string;
    sender_id: string;
    body: string;
    is_internal?: boolean;
    created_at?: Date | string;
};
export type dispute_messagesUpdateManyMutationInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    body?: Prisma.StringFieldUpdateOperationsInput | string;
    is_internal?: Prisma.BoolFieldUpdateOperationsInput | boolean;
    created_at?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
};
export type dispute_messagesUncheckedUpdateManyInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    dispute_id?: Prisma.StringFieldUpdateOperationsInput | string;
    sender_id?: Prisma.StringFieldUpdateOperationsInput | string;
    body?: Prisma.StringFieldUpdateOperationsInput | string;
    is_internal?: Prisma.BoolFieldUpdateOperationsInput | boolean;
    created_at?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
};
export type dispute_messagesCountOrderByAggregateInput = {
    id?: Prisma.SortOrder;
    dispute_id?: Prisma.SortOrder;
    sender_id?: Prisma.SortOrder;
    body?: Prisma.SortOrder;
    is_internal?: Prisma.SortOrder;
    created_at?: Prisma.SortOrder;
};
export type dispute_messagesMaxOrderByAggregateInput = {
    id?: Prisma.SortOrder;
    dispute_id?: Prisma.SortOrder;
    sender_id?: Prisma.SortOrder;
    body?: Prisma.SortOrder;
    is_internal?: Prisma.SortOrder;
    created_at?: Prisma.SortOrder;
};
export type dispute_messagesMinOrderByAggregateInput = {
    id?: Prisma.SortOrder;
    dispute_id?: Prisma.SortOrder;
    sender_id?: Prisma.SortOrder;
    body?: Prisma.SortOrder;
    is_internal?: Prisma.SortOrder;
    created_at?: Prisma.SortOrder;
};
export type Dispute_messagesListRelationFilter = {
    every?: Prisma.dispute_messagesWhereInput;
    some?: Prisma.dispute_messagesWhereInput;
    none?: Prisma.dispute_messagesWhereInput;
};
export type dispute_messagesOrderByRelationAggregateInput = {
    _count?: Prisma.SortOrder;
};
export type dispute_messagesCreateNestedManyWithoutDisputesInput = {
    create?: Prisma.XOR<Prisma.dispute_messagesCreateWithoutDisputesInput, Prisma.dispute_messagesUncheckedCreateWithoutDisputesInput> | Prisma.dispute_messagesCreateWithoutDisputesInput[] | Prisma.dispute_messagesUncheckedCreateWithoutDisputesInput[];
    connectOrCreate?: Prisma.dispute_messagesCreateOrConnectWithoutDisputesInput | Prisma.dispute_messagesCreateOrConnectWithoutDisputesInput[];
    createMany?: Prisma.dispute_messagesCreateManyDisputesInputEnvelope;
    connect?: Prisma.dispute_messagesWhereUniqueInput | Prisma.dispute_messagesWhereUniqueInput[];
};
export type dispute_messagesUncheckedCreateNestedManyWithoutDisputesInput = {
    create?: Prisma.XOR<Prisma.dispute_messagesCreateWithoutDisputesInput, Prisma.dispute_messagesUncheckedCreateWithoutDisputesInput> | Prisma.dispute_messagesCreateWithoutDisputesInput[] | Prisma.dispute_messagesUncheckedCreateWithoutDisputesInput[];
    connectOrCreate?: Prisma.dispute_messagesCreateOrConnectWithoutDisputesInput | Prisma.dispute_messagesCreateOrConnectWithoutDisputesInput[];
    createMany?: Prisma.dispute_messagesCreateManyDisputesInputEnvelope;
    connect?: Prisma.dispute_messagesWhereUniqueInput | Prisma.dispute_messagesWhereUniqueInput[];
};
export type dispute_messagesUpdateManyWithoutDisputesNestedInput = {
    create?: Prisma.XOR<Prisma.dispute_messagesCreateWithoutDisputesInput, Prisma.dispute_messagesUncheckedCreateWithoutDisputesInput> | Prisma.dispute_messagesCreateWithoutDisputesInput[] | Prisma.dispute_messagesUncheckedCreateWithoutDisputesInput[];
    connectOrCreate?: Prisma.dispute_messagesCreateOrConnectWithoutDisputesInput | Prisma.dispute_messagesCreateOrConnectWithoutDisputesInput[];
    upsert?: Prisma.dispute_messagesUpsertWithWhereUniqueWithoutDisputesInput | Prisma.dispute_messagesUpsertWithWhereUniqueWithoutDisputesInput[];
    createMany?: Prisma.dispute_messagesCreateManyDisputesInputEnvelope;
    set?: Prisma.dispute_messagesWhereUniqueInput | Prisma.dispute_messagesWhereUniqueInput[];
    disconnect?: Prisma.dispute_messagesWhereUniqueInput | Prisma.dispute_messagesWhereUniqueInput[];
    delete?: Prisma.dispute_messagesWhereUniqueInput | Prisma.dispute_messagesWhereUniqueInput[];
    connect?: Prisma.dispute_messagesWhereUniqueInput | Prisma.dispute_messagesWhereUniqueInput[];
    update?: Prisma.dispute_messagesUpdateWithWhereUniqueWithoutDisputesInput | Prisma.dispute_messagesUpdateWithWhereUniqueWithoutDisputesInput[];
    updateMany?: Prisma.dispute_messagesUpdateManyWithWhereWithoutDisputesInput | Prisma.dispute_messagesUpdateManyWithWhereWithoutDisputesInput[];
    deleteMany?: Prisma.dispute_messagesScalarWhereInput | Prisma.dispute_messagesScalarWhereInput[];
};
export type dispute_messagesUncheckedUpdateManyWithoutDisputesNestedInput = {
    create?: Prisma.XOR<Prisma.dispute_messagesCreateWithoutDisputesInput, Prisma.dispute_messagesUncheckedCreateWithoutDisputesInput> | Prisma.dispute_messagesCreateWithoutDisputesInput[] | Prisma.dispute_messagesUncheckedCreateWithoutDisputesInput[];
    connectOrCreate?: Prisma.dispute_messagesCreateOrConnectWithoutDisputesInput | Prisma.dispute_messagesCreateOrConnectWithoutDisputesInput[];
    upsert?: Prisma.dispute_messagesUpsertWithWhereUniqueWithoutDisputesInput | Prisma.dispute_messagesUpsertWithWhereUniqueWithoutDisputesInput[];
    createMany?: Prisma.dispute_messagesCreateManyDisputesInputEnvelope;
    set?: Prisma.dispute_messagesWhereUniqueInput | Prisma.dispute_messagesWhereUniqueInput[];
    disconnect?: Prisma.dispute_messagesWhereUniqueInput | Prisma.dispute_messagesWhereUniqueInput[];
    delete?: Prisma.dispute_messagesWhereUniqueInput | Prisma.dispute_messagesWhereUniqueInput[];
    connect?: Prisma.dispute_messagesWhereUniqueInput | Prisma.dispute_messagesWhereUniqueInput[];
    update?: Prisma.dispute_messagesUpdateWithWhereUniqueWithoutDisputesInput | Prisma.dispute_messagesUpdateWithWhereUniqueWithoutDisputesInput[];
    updateMany?: Prisma.dispute_messagesUpdateManyWithWhereWithoutDisputesInput | Prisma.dispute_messagesUpdateManyWithWhereWithoutDisputesInput[];
    deleteMany?: Prisma.dispute_messagesScalarWhereInput | Prisma.dispute_messagesScalarWhereInput[];
};
export type dispute_messagesCreateNestedManyWithoutUsersInput = {
    create?: Prisma.XOR<Prisma.dispute_messagesCreateWithoutUsersInput, Prisma.dispute_messagesUncheckedCreateWithoutUsersInput> | Prisma.dispute_messagesCreateWithoutUsersInput[] | Prisma.dispute_messagesUncheckedCreateWithoutUsersInput[];
    connectOrCreate?: Prisma.dispute_messagesCreateOrConnectWithoutUsersInput | Prisma.dispute_messagesCreateOrConnectWithoutUsersInput[];
    createMany?: Prisma.dispute_messagesCreateManyUsersInputEnvelope;
    connect?: Prisma.dispute_messagesWhereUniqueInput | Prisma.dispute_messagesWhereUniqueInput[];
};
export type dispute_messagesUncheckedCreateNestedManyWithoutUsersInput = {
    create?: Prisma.XOR<Prisma.dispute_messagesCreateWithoutUsersInput, Prisma.dispute_messagesUncheckedCreateWithoutUsersInput> | Prisma.dispute_messagesCreateWithoutUsersInput[] | Prisma.dispute_messagesUncheckedCreateWithoutUsersInput[];
    connectOrCreate?: Prisma.dispute_messagesCreateOrConnectWithoutUsersInput | Prisma.dispute_messagesCreateOrConnectWithoutUsersInput[];
    createMany?: Prisma.dispute_messagesCreateManyUsersInputEnvelope;
    connect?: Prisma.dispute_messagesWhereUniqueInput | Prisma.dispute_messagesWhereUniqueInput[];
};
export type dispute_messagesUpdateManyWithoutUsersNestedInput = {
    create?: Prisma.XOR<Prisma.dispute_messagesCreateWithoutUsersInput, Prisma.dispute_messagesUncheckedCreateWithoutUsersInput> | Prisma.dispute_messagesCreateWithoutUsersInput[] | Prisma.dispute_messagesUncheckedCreateWithoutUsersInput[];
    connectOrCreate?: Prisma.dispute_messagesCreateOrConnectWithoutUsersInput | Prisma.dispute_messagesCreateOrConnectWithoutUsersInput[];
    upsert?: Prisma.dispute_messagesUpsertWithWhereUniqueWithoutUsersInput | Prisma.dispute_messagesUpsertWithWhereUniqueWithoutUsersInput[];
    createMany?: Prisma.dispute_messagesCreateManyUsersInputEnvelope;
    set?: Prisma.dispute_messagesWhereUniqueInput | Prisma.dispute_messagesWhereUniqueInput[];
    disconnect?: Prisma.dispute_messagesWhereUniqueInput | Prisma.dispute_messagesWhereUniqueInput[];
    delete?: Prisma.dispute_messagesWhereUniqueInput | Prisma.dispute_messagesWhereUniqueInput[];
    connect?: Prisma.dispute_messagesWhereUniqueInput | Prisma.dispute_messagesWhereUniqueInput[];
    update?: Prisma.dispute_messagesUpdateWithWhereUniqueWithoutUsersInput | Prisma.dispute_messagesUpdateWithWhereUniqueWithoutUsersInput[];
    updateMany?: Prisma.dispute_messagesUpdateManyWithWhereWithoutUsersInput | Prisma.dispute_messagesUpdateManyWithWhereWithoutUsersInput[];
    deleteMany?: Prisma.dispute_messagesScalarWhereInput | Prisma.dispute_messagesScalarWhereInput[];
};
export type dispute_messagesUncheckedUpdateManyWithoutUsersNestedInput = {
    create?: Prisma.XOR<Prisma.dispute_messagesCreateWithoutUsersInput, Prisma.dispute_messagesUncheckedCreateWithoutUsersInput> | Prisma.dispute_messagesCreateWithoutUsersInput[] | Prisma.dispute_messagesUncheckedCreateWithoutUsersInput[];
    connectOrCreate?: Prisma.dispute_messagesCreateOrConnectWithoutUsersInput | Prisma.dispute_messagesCreateOrConnectWithoutUsersInput[];
    upsert?: Prisma.dispute_messagesUpsertWithWhereUniqueWithoutUsersInput | Prisma.dispute_messagesUpsertWithWhereUniqueWithoutUsersInput[];
    createMany?: Prisma.dispute_messagesCreateManyUsersInputEnvelope;
    set?: Prisma.dispute_messagesWhereUniqueInput | Prisma.dispute_messagesWhereUniqueInput[];
    disconnect?: Prisma.dispute_messagesWhereUniqueInput | Prisma.dispute_messagesWhereUniqueInput[];
    delete?: Prisma.dispute_messagesWhereUniqueInput | Prisma.dispute_messagesWhereUniqueInput[];
    connect?: Prisma.dispute_messagesWhereUniqueInput | Prisma.dispute_messagesWhereUniqueInput[];
    update?: Prisma.dispute_messagesUpdateWithWhereUniqueWithoutUsersInput | Prisma.dispute_messagesUpdateWithWhereUniqueWithoutUsersInput[];
    updateMany?: Prisma.dispute_messagesUpdateManyWithWhereWithoutUsersInput | Prisma.dispute_messagesUpdateManyWithWhereWithoutUsersInput[];
    deleteMany?: Prisma.dispute_messagesScalarWhereInput | Prisma.dispute_messagesScalarWhereInput[];
};
export type dispute_messagesCreateWithoutDisputesInput = {
    id?: string;
    body: string;
    is_internal?: boolean;
    created_at?: Date | string;
    users: Prisma.usersCreateNestedOneWithoutDispute_messagesInput;
};
export type dispute_messagesUncheckedCreateWithoutDisputesInput = {
    id?: string;
    sender_id: string;
    body: string;
    is_internal?: boolean;
    created_at?: Date | string;
};
export type dispute_messagesCreateOrConnectWithoutDisputesInput = {
    where: Prisma.dispute_messagesWhereUniqueInput;
    create: Prisma.XOR<Prisma.dispute_messagesCreateWithoutDisputesInput, Prisma.dispute_messagesUncheckedCreateWithoutDisputesInput>;
};
export type dispute_messagesCreateManyDisputesInputEnvelope = {
    data: Prisma.dispute_messagesCreateManyDisputesInput | Prisma.dispute_messagesCreateManyDisputesInput[];
    skipDuplicates?: boolean;
};
export type dispute_messagesUpsertWithWhereUniqueWithoutDisputesInput = {
    where: Prisma.dispute_messagesWhereUniqueInput;
    update: Prisma.XOR<Prisma.dispute_messagesUpdateWithoutDisputesInput, Prisma.dispute_messagesUncheckedUpdateWithoutDisputesInput>;
    create: Prisma.XOR<Prisma.dispute_messagesCreateWithoutDisputesInput, Prisma.dispute_messagesUncheckedCreateWithoutDisputesInput>;
};
export type dispute_messagesUpdateWithWhereUniqueWithoutDisputesInput = {
    where: Prisma.dispute_messagesWhereUniqueInput;
    data: Prisma.XOR<Prisma.dispute_messagesUpdateWithoutDisputesInput, Prisma.dispute_messagesUncheckedUpdateWithoutDisputesInput>;
};
export type dispute_messagesUpdateManyWithWhereWithoutDisputesInput = {
    where: Prisma.dispute_messagesScalarWhereInput;
    data: Prisma.XOR<Prisma.dispute_messagesUpdateManyMutationInput, Prisma.dispute_messagesUncheckedUpdateManyWithoutDisputesInput>;
};
export type dispute_messagesScalarWhereInput = {
    AND?: Prisma.dispute_messagesScalarWhereInput | Prisma.dispute_messagesScalarWhereInput[];
    OR?: Prisma.dispute_messagesScalarWhereInput[];
    NOT?: Prisma.dispute_messagesScalarWhereInput | Prisma.dispute_messagesScalarWhereInput[];
    id?: Prisma.UuidFilter<"dispute_messages"> | string;
    dispute_id?: Prisma.UuidFilter<"dispute_messages"> | string;
    sender_id?: Prisma.UuidFilter<"dispute_messages"> | string;
    body?: Prisma.StringFilter<"dispute_messages"> | string;
    is_internal?: Prisma.BoolFilter<"dispute_messages"> | boolean;
    created_at?: Prisma.DateTimeFilter<"dispute_messages"> | Date | string;
};
export type dispute_messagesCreateWithoutUsersInput = {
    id?: string;
    body: string;
    is_internal?: boolean;
    created_at?: Date | string;
    disputes: Prisma.disputesCreateNestedOneWithoutDispute_messagesInput;
};
export type dispute_messagesUncheckedCreateWithoutUsersInput = {
    id?: string;
    dispute_id: string;
    body: string;
    is_internal?: boolean;
    created_at?: Date | string;
};
export type dispute_messagesCreateOrConnectWithoutUsersInput = {
    where: Prisma.dispute_messagesWhereUniqueInput;
    create: Prisma.XOR<Prisma.dispute_messagesCreateWithoutUsersInput, Prisma.dispute_messagesUncheckedCreateWithoutUsersInput>;
};
export type dispute_messagesCreateManyUsersInputEnvelope = {
    data: Prisma.dispute_messagesCreateManyUsersInput | Prisma.dispute_messagesCreateManyUsersInput[];
    skipDuplicates?: boolean;
};
export type dispute_messagesUpsertWithWhereUniqueWithoutUsersInput = {
    where: Prisma.dispute_messagesWhereUniqueInput;
    update: Prisma.XOR<Prisma.dispute_messagesUpdateWithoutUsersInput, Prisma.dispute_messagesUncheckedUpdateWithoutUsersInput>;
    create: Prisma.XOR<Prisma.dispute_messagesCreateWithoutUsersInput, Prisma.dispute_messagesUncheckedCreateWithoutUsersInput>;
};
export type dispute_messagesUpdateWithWhereUniqueWithoutUsersInput = {
    where: Prisma.dispute_messagesWhereUniqueInput;
    data: Prisma.XOR<Prisma.dispute_messagesUpdateWithoutUsersInput, Prisma.dispute_messagesUncheckedUpdateWithoutUsersInput>;
};
export type dispute_messagesUpdateManyWithWhereWithoutUsersInput = {
    where: Prisma.dispute_messagesScalarWhereInput;
    data: Prisma.XOR<Prisma.dispute_messagesUpdateManyMutationInput, Prisma.dispute_messagesUncheckedUpdateManyWithoutUsersInput>;
};
export type dispute_messagesCreateManyDisputesInput = {
    id?: string;
    sender_id: string;
    body: string;
    is_internal?: boolean;
    created_at?: Date | string;
};
export type dispute_messagesUpdateWithoutDisputesInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    body?: Prisma.StringFieldUpdateOperationsInput | string;
    is_internal?: Prisma.BoolFieldUpdateOperationsInput | boolean;
    created_at?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    users?: Prisma.usersUpdateOneRequiredWithoutDispute_messagesNestedInput;
};
export type dispute_messagesUncheckedUpdateWithoutDisputesInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    sender_id?: Prisma.StringFieldUpdateOperationsInput | string;
    body?: Prisma.StringFieldUpdateOperationsInput | string;
    is_internal?: Prisma.BoolFieldUpdateOperationsInput | boolean;
    created_at?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
};
export type dispute_messagesUncheckedUpdateManyWithoutDisputesInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    sender_id?: Prisma.StringFieldUpdateOperationsInput | string;
    body?: Prisma.StringFieldUpdateOperationsInput | string;
    is_internal?: Prisma.BoolFieldUpdateOperationsInput | boolean;
    created_at?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
};
export type dispute_messagesCreateManyUsersInput = {
    id?: string;
    dispute_id: string;
    body: string;
    is_internal?: boolean;
    created_at?: Date | string;
};
export type dispute_messagesUpdateWithoutUsersInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    body?: Prisma.StringFieldUpdateOperationsInput | string;
    is_internal?: Prisma.BoolFieldUpdateOperationsInput | boolean;
    created_at?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    disputes?: Prisma.disputesUpdateOneRequiredWithoutDispute_messagesNestedInput;
};
export type dispute_messagesUncheckedUpdateWithoutUsersInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    dispute_id?: Prisma.StringFieldUpdateOperationsInput | string;
    body?: Prisma.StringFieldUpdateOperationsInput | string;
    is_internal?: Prisma.BoolFieldUpdateOperationsInput | boolean;
    created_at?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
};
export type dispute_messagesUncheckedUpdateManyWithoutUsersInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    dispute_id?: Prisma.StringFieldUpdateOperationsInput | string;
    body?: Prisma.StringFieldUpdateOperationsInput | string;
    is_internal?: Prisma.BoolFieldUpdateOperationsInput | boolean;
    created_at?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
};
export type dispute_messagesSelect<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetSelect<{
    id?: boolean;
    dispute_id?: boolean;
    sender_id?: boolean;
    body?: boolean;
    is_internal?: boolean;
    created_at?: boolean;
    disputes?: boolean | Prisma.disputesDefaultArgs<ExtArgs>;
    users?: boolean | Prisma.usersDefaultArgs<ExtArgs>;
}, ExtArgs["result"]["dispute_messages"]>;
export type dispute_messagesSelectCreateManyAndReturn<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetSelect<{
    id?: boolean;
    dispute_id?: boolean;
    sender_id?: boolean;
    body?: boolean;
    is_internal?: boolean;
    created_at?: boolean;
    disputes?: boolean | Prisma.disputesDefaultArgs<ExtArgs>;
    users?: boolean | Prisma.usersDefaultArgs<ExtArgs>;
}, ExtArgs["result"]["dispute_messages"]>;
export type dispute_messagesSelectUpdateManyAndReturn<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetSelect<{
    id?: boolean;
    dispute_id?: boolean;
    sender_id?: boolean;
    body?: boolean;
    is_internal?: boolean;
    created_at?: boolean;
    disputes?: boolean | Prisma.disputesDefaultArgs<ExtArgs>;
    users?: boolean | Prisma.usersDefaultArgs<ExtArgs>;
}, ExtArgs["result"]["dispute_messages"]>;
export type dispute_messagesSelectScalar = {
    id?: boolean;
    dispute_id?: boolean;
    sender_id?: boolean;
    body?: boolean;
    is_internal?: boolean;
    created_at?: boolean;
};
export type dispute_messagesOmit<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetOmit<"id" | "dispute_id" | "sender_id" | "body" | "is_internal" | "created_at", ExtArgs["result"]["dispute_messages"]>;
export type dispute_messagesInclude<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    disputes?: boolean | Prisma.disputesDefaultArgs<ExtArgs>;
    users?: boolean | Prisma.usersDefaultArgs<ExtArgs>;
};
export type dispute_messagesIncludeCreateManyAndReturn<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    disputes?: boolean | Prisma.disputesDefaultArgs<ExtArgs>;
    users?: boolean | Prisma.usersDefaultArgs<ExtArgs>;
};
export type dispute_messagesIncludeUpdateManyAndReturn<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    disputes?: boolean | Prisma.disputesDefaultArgs<ExtArgs>;
    users?: boolean | Prisma.usersDefaultArgs<ExtArgs>;
};
export type $dispute_messagesPayload<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    name: "dispute_messages";
    objects: {
        disputes: Prisma.$disputesPayload<ExtArgs>;
        users: Prisma.$usersPayload<ExtArgs>;
    };
    scalars: runtime.Types.Extensions.GetPayloadResult<{
        id: string;
        dispute_id: string;
        sender_id: string;
        body: string;
        is_internal: boolean;
        created_at: Date;
    }, ExtArgs["result"]["dispute_messages"]>;
    composites: {};
};
export type dispute_messagesGetPayload<S extends boolean | null | undefined | dispute_messagesDefaultArgs> = runtime.Types.Result.GetResult<Prisma.$dispute_messagesPayload, S>;
export type dispute_messagesCountArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = Omit<dispute_messagesFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
    select?: Dispute_messagesCountAggregateInputType | true;
};
export interface dispute_messagesDelegate<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: {
        types: Prisma.TypeMap<ExtArgs>['model']['dispute_messages'];
        meta: {
            name: 'dispute_messages';
        };
    };
    findUnique<T extends dispute_messagesFindUniqueArgs>(args: Prisma.SelectSubset<T, dispute_messagesFindUniqueArgs<ExtArgs>>): Prisma.Prisma__dispute_messagesClient<runtime.Types.Result.GetResult<Prisma.$dispute_messagesPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>;
    findUniqueOrThrow<T extends dispute_messagesFindUniqueOrThrowArgs>(args: Prisma.SelectSubset<T, dispute_messagesFindUniqueOrThrowArgs<ExtArgs>>): Prisma.Prisma__dispute_messagesClient<runtime.Types.Result.GetResult<Prisma.$dispute_messagesPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    findFirst<T extends dispute_messagesFindFirstArgs>(args?: Prisma.SelectSubset<T, dispute_messagesFindFirstArgs<ExtArgs>>): Prisma.Prisma__dispute_messagesClient<runtime.Types.Result.GetResult<Prisma.$dispute_messagesPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>;
    findFirstOrThrow<T extends dispute_messagesFindFirstOrThrowArgs>(args?: Prisma.SelectSubset<T, dispute_messagesFindFirstOrThrowArgs<ExtArgs>>): Prisma.Prisma__dispute_messagesClient<runtime.Types.Result.GetResult<Prisma.$dispute_messagesPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    findMany<T extends dispute_messagesFindManyArgs>(args?: Prisma.SelectSubset<T, dispute_messagesFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$dispute_messagesPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>;
    create<T extends dispute_messagesCreateArgs>(args: Prisma.SelectSubset<T, dispute_messagesCreateArgs<ExtArgs>>): Prisma.Prisma__dispute_messagesClient<runtime.Types.Result.GetResult<Prisma.$dispute_messagesPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    createMany<T extends dispute_messagesCreateManyArgs>(args?: Prisma.SelectSubset<T, dispute_messagesCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<Prisma.BatchPayload>;
    createManyAndReturn<T extends dispute_messagesCreateManyAndReturnArgs>(args?: Prisma.SelectSubset<T, dispute_messagesCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$dispute_messagesPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>;
    delete<T extends dispute_messagesDeleteArgs>(args: Prisma.SelectSubset<T, dispute_messagesDeleteArgs<ExtArgs>>): Prisma.Prisma__dispute_messagesClient<runtime.Types.Result.GetResult<Prisma.$dispute_messagesPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    update<T extends dispute_messagesUpdateArgs>(args: Prisma.SelectSubset<T, dispute_messagesUpdateArgs<ExtArgs>>): Prisma.Prisma__dispute_messagesClient<runtime.Types.Result.GetResult<Prisma.$dispute_messagesPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    deleteMany<T extends dispute_messagesDeleteManyArgs>(args?: Prisma.SelectSubset<T, dispute_messagesDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<Prisma.BatchPayload>;
    updateMany<T extends dispute_messagesUpdateManyArgs>(args: Prisma.SelectSubset<T, dispute_messagesUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<Prisma.BatchPayload>;
    updateManyAndReturn<T extends dispute_messagesUpdateManyAndReturnArgs>(args: Prisma.SelectSubset<T, dispute_messagesUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$dispute_messagesPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>;
    upsert<T extends dispute_messagesUpsertArgs>(args: Prisma.SelectSubset<T, dispute_messagesUpsertArgs<ExtArgs>>): Prisma.Prisma__dispute_messagesClient<runtime.Types.Result.GetResult<Prisma.$dispute_messagesPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    count<T extends dispute_messagesCountArgs>(args?: Prisma.Subset<T, dispute_messagesCountArgs>): Prisma.PrismaPromise<T extends runtime.Types.Utils.Record<'select', any> ? T['select'] extends true ? number : Prisma.GetScalarType<T['select'], Dispute_messagesCountAggregateOutputType> : number>;
    aggregate<T extends Dispute_messagesAggregateArgs>(args: Prisma.Subset<T, Dispute_messagesAggregateArgs>): Prisma.PrismaPromise<GetDispute_messagesAggregateType<T>>;
    groupBy<T extends dispute_messagesGroupByArgs, HasSelectOrTake extends Prisma.Or<Prisma.Extends<'skip', Prisma.Keys<T>>, Prisma.Extends<'take', Prisma.Keys<T>>>, OrderByArg extends Prisma.True extends HasSelectOrTake ? {
        orderBy: dispute_messagesGroupByArgs['orderBy'];
    } : {
        orderBy?: dispute_messagesGroupByArgs['orderBy'];
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
    }[OrderFields]>(args: Prisma.SubsetIntersection<T, dispute_messagesGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetDispute_messagesGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>;
    readonly fields: dispute_messagesFieldRefs;
}
export interface Prisma__dispute_messagesClient<T, Null = never, ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise";
    disputes<T extends Prisma.disputesDefaultArgs<ExtArgs> = {}>(args?: Prisma.Subset<T, Prisma.disputesDefaultArgs<ExtArgs>>): Prisma.Prisma__disputesClient<runtime.Types.Result.GetResult<Prisma.$disputesPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>;
    users<T extends Prisma.usersDefaultArgs<ExtArgs> = {}>(args?: Prisma.Subset<T, Prisma.usersDefaultArgs<ExtArgs>>): Prisma.Prisma__usersClient<runtime.Types.Result.GetResult<Prisma.$usersPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>;
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): runtime.Types.Utils.JsPromise<TResult1 | TResult2>;
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): runtime.Types.Utils.JsPromise<T | TResult>;
    finally(onfinally?: (() => void) | undefined | null): runtime.Types.Utils.JsPromise<T>;
}
export interface dispute_messagesFieldRefs {
    readonly id: Prisma.FieldRef<"dispute_messages", 'String'>;
    readonly dispute_id: Prisma.FieldRef<"dispute_messages", 'String'>;
    readonly sender_id: Prisma.FieldRef<"dispute_messages", 'String'>;
    readonly body: Prisma.FieldRef<"dispute_messages", 'String'>;
    readonly is_internal: Prisma.FieldRef<"dispute_messages", 'Boolean'>;
    readonly created_at: Prisma.FieldRef<"dispute_messages", 'DateTime'>;
}
export type dispute_messagesFindUniqueArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.dispute_messagesSelect<ExtArgs> | null;
    omit?: Prisma.dispute_messagesOmit<ExtArgs> | null;
    include?: Prisma.dispute_messagesInclude<ExtArgs> | null;
    where: Prisma.dispute_messagesWhereUniqueInput;
};
export type dispute_messagesFindUniqueOrThrowArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.dispute_messagesSelect<ExtArgs> | null;
    omit?: Prisma.dispute_messagesOmit<ExtArgs> | null;
    include?: Prisma.dispute_messagesInclude<ExtArgs> | null;
    where: Prisma.dispute_messagesWhereUniqueInput;
};
export type dispute_messagesFindFirstArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.dispute_messagesSelect<ExtArgs> | null;
    omit?: Prisma.dispute_messagesOmit<ExtArgs> | null;
    include?: Prisma.dispute_messagesInclude<ExtArgs> | null;
    where?: Prisma.dispute_messagesWhereInput;
    orderBy?: Prisma.dispute_messagesOrderByWithRelationInput | Prisma.dispute_messagesOrderByWithRelationInput[];
    cursor?: Prisma.dispute_messagesWhereUniqueInput;
    take?: number;
    skip?: number;
    distinct?: Prisma.Dispute_messagesScalarFieldEnum | Prisma.Dispute_messagesScalarFieldEnum[];
};
export type dispute_messagesFindFirstOrThrowArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.dispute_messagesSelect<ExtArgs> | null;
    omit?: Prisma.dispute_messagesOmit<ExtArgs> | null;
    include?: Prisma.dispute_messagesInclude<ExtArgs> | null;
    where?: Prisma.dispute_messagesWhereInput;
    orderBy?: Prisma.dispute_messagesOrderByWithRelationInput | Prisma.dispute_messagesOrderByWithRelationInput[];
    cursor?: Prisma.dispute_messagesWhereUniqueInput;
    take?: number;
    skip?: number;
    distinct?: Prisma.Dispute_messagesScalarFieldEnum | Prisma.Dispute_messagesScalarFieldEnum[];
};
export type dispute_messagesFindManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.dispute_messagesSelect<ExtArgs> | null;
    omit?: Prisma.dispute_messagesOmit<ExtArgs> | null;
    include?: Prisma.dispute_messagesInclude<ExtArgs> | null;
    where?: Prisma.dispute_messagesWhereInput;
    orderBy?: Prisma.dispute_messagesOrderByWithRelationInput | Prisma.dispute_messagesOrderByWithRelationInput[];
    cursor?: Prisma.dispute_messagesWhereUniqueInput;
    take?: number;
    skip?: number;
    distinct?: Prisma.Dispute_messagesScalarFieldEnum | Prisma.Dispute_messagesScalarFieldEnum[];
};
export type dispute_messagesCreateArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.dispute_messagesSelect<ExtArgs> | null;
    omit?: Prisma.dispute_messagesOmit<ExtArgs> | null;
    include?: Prisma.dispute_messagesInclude<ExtArgs> | null;
    data: Prisma.XOR<Prisma.dispute_messagesCreateInput, Prisma.dispute_messagesUncheckedCreateInput>;
};
export type dispute_messagesCreateManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    data: Prisma.dispute_messagesCreateManyInput | Prisma.dispute_messagesCreateManyInput[];
    skipDuplicates?: boolean;
};
export type dispute_messagesCreateManyAndReturnArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.dispute_messagesSelectCreateManyAndReturn<ExtArgs> | null;
    omit?: Prisma.dispute_messagesOmit<ExtArgs> | null;
    data: Prisma.dispute_messagesCreateManyInput | Prisma.dispute_messagesCreateManyInput[];
    skipDuplicates?: boolean;
    include?: Prisma.dispute_messagesIncludeCreateManyAndReturn<ExtArgs> | null;
};
export type dispute_messagesUpdateArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.dispute_messagesSelect<ExtArgs> | null;
    omit?: Prisma.dispute_messagesOmit<ExtArgs> | null;
    include?: Prisma.dispute_messagesInclude<ExtArgs> | null;
    data: Prisma.XOR<Prisma.dispute_messagesUpdateInput, Prisma.dispute_messagesUncheckedUpdateInput>;
    where: Prisma.dispute_messagesWhereUniqueInput;
};
export type dispute_messagesUpdateManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    data: Prisma.XOR<Prisma.dispute_messagesUpdateManyMutationInput, Prisma.dispute_messagesUncheckedUpdateManyInput>;
    where?: Prisma.dispute_messagesWhereInput;
    limit?: number;
};
export type dispute_messagesUpdateManyAndReturnArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.dispute_messagesSelectUpdateManyAndReturn<ExtArgs> | null;
    omit?: Prisma.dispute_messagesOmit<ExtArgs> | null;
    data: Prisma.XOR<Prisma.dispute_messagesUpdateManyMutationInput, Prisma.dispute_messagesUncheckedUpdateManyInput>;
    where?: Prisma.dispute_messagesWhereInput;
    limit?: number;
    include?: Prisma.dispute_messagesIncludeUpdateManyAndReturn<ExtArgs> | null;
};
export type dispute_messagesUpsertArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.dispute_messagesSelect<ExtArgs> | null;
    omit?: Prisma.dispute_messagesOmit<ExtArgs> | null;
    include?: Prisma.dispute_messagesInclude<ExtArgs> | null;
    where: Prisma.dispute_messagesWhereUniqueInput;
    create: Prisma.XOR<Prisma.dispute_messagesCreateInput, Prisma.dispute_messagesUncheckedCreateInput>;
    update: Prisma.XOR<Prisma.dispute_messagesUpdateInput, Prisma.dispute_messagesUncheckedUpdateInput>;
};
export type dispute_messagesDeleteArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.dispute_messagesSelect<ExtArgs> | null;
    omit?: Prisma.dispute_messagesOmit<ExtArgs> | null;
    include?: Prisma.dispute_messagesInclude<ExtArgs> | null;
    where: Prisma.dispute_messagesWhereUniqueInput;
};
export type dispute_messagesDeleteManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    where?: Prisma.dispute_messagesWhereInput;
    limit?: number;
};
export type dispute_messagesDefaultArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.dispute_messagesSelect<ExtArgs> | null;
    omit?: Prisma.dispute_messagesOmit<ExtArgs> | null;
    include?: Prisma.dispute_messagesInclude<ExtArgs> | null;
};
