import type * as runtime from "@prisma/client/runtime/client";
import type * as $Enums from "../enums.js";
import type * as Prisma from "../internal/prismaNamespace.js";
export type admin_actionsModel = runtime.Types.Result.DefaultSelection<Prisma.$admin_actionsPayload>;
export type AggregateAdmin_actions = {
    _count: Admin_actionsCountAggregateOutputType | null;
    _min: Admin_actionsMinAggregateOutputType | null;
    _max: Admin_actionsMaxAggregateOutputType | null;
};
export type Admin_actionsMinAggregateOutputType = {
    id: string | null;
    admin_id: string | null;
    action_type: $Enums.admin_action_type | null;
    target_type: string | null;
    target_id: string | null;
    notes: string | null;
    apartment_id: string | null;
    created_at: Date | null;
};
export type Admin_actionsMaxAggregateOutputType = {
    id: string | null;
    admin_id: string | null;
    action_type: $Enums.admin_action_type | null;
    target_type: string | null;
    target_id: string | null;
    notes: string | null;
    apartment_id: string | null;
    created_at: Date | null;
};
export type Admin_actionsCountAggregateOutputType = {
    id: number;
    admin_id: number;
    action_type: number;
    target_type: number;
    target_id: number;
    notes: number;
    metadata: number;
    apartment_id: number;
    created_at: number;
    _all: number;
};
export type Admin_actionsMinAggregateInputType = {
    id?: true;
    admin_id?: true;
    action_type?: true;
    target_type?: true;
    target_id?: true;
    notes?: true;
    apartment_id?: true;
    created_at?: true;
};
export type Admin_actionsMaxAggregateInputType = {
    id?: true;
    admin_id?: true;
    action_type?: true;
    target_type?: true;
    target_id?: true;
    notes?: true;
    apartment_id?: true;
    created_at?: true;
};
export type Admin_actionsCountAggregateInputType = {
    id?: true;
    admin_id?: true;
    action_type?: true;
    target_type?: true;
    target_id?: true;
    notes?: true;
    metadata?: true;
    apartment_id?: true;
    created_at?: true;
    _all?: true;
};
export type Admin_actionsAggregateArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    where?: Prisma.admin_actionsWhereInput;
    orderBy?: Prisma.admin_actionsOrderByWithRelationInput | Prisma.admin_actionsOrderByWithRelationInput[];
    cursor?: Prisma.admin_actionsWhereUniqueInput;
    take?: number;
    skip?: number;
    _count?: true | Admin_actionsCountAggregateInputType;
    _min?: Admin_actionsMinAggregateInputType;
    _max?: Admin_actionsMaxAggregateInputType;
};
export type GetAdmin_actionsAggregateType<T extends Admin_actionsAggregateArgs> = {
    [P in keyof T & keyof AggregateAdmin_actions]: P extends '_count' | 'count' ? T[P] extends true ? number : Prisma.GetScalarType<T[P], AggregateAdmin_actions[P]> : Prisma.GetScalarType<T[P], AggregateAdmin_actions[P]>;
};
export type admin_actionsGroupByArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    where?: Prisma.admin_actionsWhereInput;
    orderBy?: Prisma.admin_actionsOrderByWithAggregationInput | Prisma.admin_actionsOrderByWithAggregationInput[];
    by: Prisma.Admin_actionsScalarFieldEnum[] | Prisma.Admin_actionsScalarFieldEnum;
    having?: Prisma.admin_actionsScalarWhereWithAggregatesInput;
    take?: number;
    skip?: number;
    _count?: Admin_actionsCountAggregateInputType | true;
    _min?: Admin_actionsMinAggregateInputType;
    _max?: Admin_actionsMaxAggregateInputType;
};
export type Admin_actionsGroupByOutputType = {
    id: string;
    admin_id: string;
    action_type: $Enums.admin_action_type;
    target_type: string;
    target_id: string;
    notes: string | null;
    metadata: runtime.JsonValue | null;
    apartment_id: string | null;
    created_at: Date;
    _count: Admin_actionsCountAggregateOutputType | null;
    _min: Admin_actionsMinAggregateOutputType | null;
    _max: Admin_actionsMaxAggregateOutputType | null;
};
export type GetAdmin_actionsGroupByPayload<T extends admin_actionsGroupByArgs> = Prisma.PrismaPromise<Array<Prisma.PickEnumerable<Admin_actionsGroupByOutputType, T['by']> & {
    [P in ((keyof T) & (keyof Admin_actionsGroupByOutputType))]: P extends '_count' ? T[P] extends boolean ? number : Prisma.GetScalarType<T[P], Admin_actionsGroupByOutputType[P]> : Prisma.GetScalarType<T[P], Admin_actionsGroupByOutputType[P]>;
}>>;
export type admin_actionsWhereInput = {
    AND?: Prisma.admin_actionsWhereInput | Prisma.admin_actionsWhereInput[];
    OR?: Prisma.admin_actionsWhereInput[];
    NOT?: Prisma.admin_actionsWhereInput | Prisma.admin_actionsWhereInput[];
    id?: Prisma.UuidFilter<"admin_actions"> | string;
    admin_id?: Prisma.UuidFilter<"admin_actions"> | string;
    action_type?: Prisma.Enumadmin_action_typeFilter<"admin_actions"> | $Enums.admin_action_type;
    target_type?: Prisma.StringFilter<"admin_actions"> | string;
    target_id?: Prisma.UuidFilter<"admin_actions"> | string;
    notes?: Prisma.StringNullableFilter<"admin_actions"> | string | null;
    metadata?: Prisma.JsonNullableFilter<"admin_actions">;
    apartment_id?: Prisma.UuidNullableFilter<"admin_actions"> | string | null;
    created_at?: Prisma.DateTimeFilter<"admin_actions"> | Date | string;
    users?: Prisma.XOR<Prisma.UsersScalarRelationFilter, Prisma.usersWhereInput>;
    apartments?: Prisma.XOR<Prisma.ApartmentsNullableScalarRelationFilter, Prisma.apartmentsWhereInput> | null;
};
export type admin_actionsOrderByWithRelationInput = {
    id?: Prisma.SortOrder;
    admin_id?: Prisma.SortOrder;
    action_type?: Prisma.SortOrder;
    target_type?: Prisma.SortOrder;
    target_id?: Prisma.SortOrder;
    notes?: Prisma.SortOrderInput | Prisma.SortOrder;
    metadata?: Prisma.SortOrderInput | Prisma.SortOrder;
    apartment_id?: Prisma.SortOrderInput | Prisma.SortOrder;
    created_at?: Prisma.SortOrder;
    users?: Prisma.usersOrderByWithRelationInput;
    apartments?: Prisma.apartmentsOrderByWithRelationInput;
};
export type admin_actionsWhereUniqueInput = Prisma.AtLeast<{
    id?: string;
    AND?: Prisma.admin_actionsWhereInput | Prisma.admin_actionsWhereInput[];
    OR?: Prisma.admin_actionsWhereInput[];
    NOT?: Prisma.admin_actionsWhereInput | Prisma.admin_actionsWhereInput[];
    admin_id?: Prisma.UuidFilter<"admin_actions"> | string;
    action_type?: Prisma.Enumadmin_action_typeFilter<"admin_actions"> | $Enums.admin_action_type;
    target_type?: Prisma.StringFilter<"admin_actions"> | string;
    target_id?: Prisma.UuidFilter<"admin_actions"> | string;
    notes?: Prisma.StringNullableFilter<"admin_actions"> | string | null;
    metadata?: Prisma.JsonNullableFilter<"admin_actions">;
    apartment_id?: Prisma.UuidNullableFilter<"admin_actions"> | string | null;
    created_at?: Prisma.DateTimeFilter<"admin_actions"> | Date | string;
    users?: Prisma.XOR<Prisma.UsersScalarRelationFilter, Prisma.usersWhereInput>;
    apartments?: Prisma.XOR<Prisma.ApartmentsNullableScalarRelationFilter, Prisma.apartmentsWhereInput> | null;
}, "id">;
export type admin_actionsOrderByWithAggregationInput = {
    id?: Prisma.SortOrder;
    admin_id?: Prisma.SortOrder;
    action_type?: Prisma.SortOrder;
    target_type?: Prisma.SortOrder;
    target_id?: Prisma.SortOrder;
    notes?: Prisma.SortOrderInput | Prisma.SortOrder;
    metadata?: Prisma.SortOrderInput | Prisma.SortOrder;
    apartment_id?: Prisma.SortOrderInput | Prisma.SortOrder;
    created_at?: Prisma.SortOrder;
    _count?: Prisma.admin_actionsCountOrderByAggregateInput;
    _max?: Prisma.admin_actionsMaxOrderByAggregateInput;
    _min?: Prisma.admin_actionsMinOrderByAggregateInput;
};
export type admin_actionsScalarWhereWithAggregatesInput = {
    AND?: Prisma.admin_actionsScalarWhereWithAggregatesInput | Prisma.admin_actionsScalarWhereWithAggregatesInput[];
    OR?: Prisma.admin_actionsScalarWhereWithAggregatesInput[];
    NOT?: Prisma.admin_actionsScalarWhereWithAggregatesInput | Prisma.admin_actionsScalarWhereWithAggregatesInput[];
    id?: Prisma.UuidWithAggregatesFilter<"admin_actions"> | string;
    admin_id?: Prisma.UuidWithAggregatesFilter<"admin_actions"> | string;
    action_type?: Prisma.Enumadmin_action_typeWithAggregatesFilter<"admin_actions"> | $Enums.admin_action_type;
    target_type?: Prisma.StringWithAggregatesFilter<"admin_actions"> | string;
    target_id?: Prisma.UuidWithAggregatesFilter<"admin_actions"> | string;
    notes?: Prisma.StringNullableWithAggregatesFilter<"admin_actions"> | string | null;
    metadata?: Prisma.JsonNullableWithAggregatesFilter<"admin_actions">;
    apartment_id?: Prisma.UuidNullableWithAggregatesFilter<"admin_actions"> | string | null;
    created_at?: Prisma.DateTimeWithAggregatesFilter<"admin_actions"> | Date | string;
};
export type admin_actionsCreateInput = {
    id?: string;
    action_type: $Enums.admin_action_type;
    target_type: string;
    target_id: string;
    notes?: string | null;
    metadata?: Prisma.NullableJsonNullValueInput | runtime.InputJsonValue;
    created_at?: Date | string;
    users: Prisma.usersCreateNestedOneWithoutAdmin_actionsInput;
    apartments?: Prisma.apartmentsCreateNestedOneWithoutAdmin_actionsInput;
};
export type admin_actionsUncheckedCreateInput = {
    id?: string;
    admin_id: string;
    action_type: $Enums.admin_action_type;
    target_type: string;
    target_id: string;
    notes?: string | null;
    metadata?: Prisma.NullableJsonNullValueInput | runtime.InputJsonValue;
    apartment_id?: string | null;
    created_at?: Date | string;
};
export type admin_actionsUpdateInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    action_type?: Prisma.Enumadmin_action_typeFieldUpdateOperationsInput | $Enums.admin_action_type;
    target_type?: Prisma.StringFieldUpdateOperationsInput | string;
    target_id?: Prisma.StringFieldUpdateOperationsInput | string;
    notes?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    metadata?: Prisma.NullableJsonNullValueInput | runtime.InputJsonValue;
    created_at?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    users?: Prisma.usersUpdateOneRequiredWithoutAdmin_actionsNestedInput;
    apartments?: Prisma.apartmentsUpdateOneWithoutAdmin_actionsNestedInput;
};
export type admin_actionsUncheckedUpdateInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    admin_id?: Prisma.StringFieldUpdateOperationsInput | string;
    action_type?: Prisma.Enumadmin_action_typeFieldUpdateOperationsInput | $Enums.admin_action_type;
    target_type?: Prisma.StringFieldUpdateOperationsInput | string;
    target_id?: Prisma.StringFieldUpdateOperationsInput | string;
    notes?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    metadata?: Prisma.NullableJsonNullValueInput | runtime.InputJsonValue;
    apartment_id?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    created_at?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
};
export type admin_actionsCreateManyInput = {
    id?: string;
    admin_id: string;
    action_type: $Enums.admin_action_type;
    target_type: string;
    target_id: string;
    notes?: string | null;
    metadata?: Prisma.NullableJsonNullValueInput | runtime.InputJsonValue;
    apartment_id?: string | null;
    created_at?: Date | string;
};
export type admin_actionsUpdateManyMutationInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    action_type?: Prisma.Enumadmin_action_typeFieldUpdateOperationsInput | $Enums.admin_action_type;
    target_type?: Prisma.StringFieldUpdateOperationsInput | string;
    target_id?: Prisma.StringFieldUpdateOperationsInput | string;
    notes?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    metadata?: Prisma.NullableJsonNullValueInput | runtime.InputJsonValue;
    created_at?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
};
export type admin_actionsUncheckedUpdateManyInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    admin_id?: Prisma.StringFieldUpdateOperationsInput | string;
    action_type?: Prisma.Enumadmin_action_typeFieldUpdateOperationsInput | $Enums.admin_action_type;
    target_type?: Prisma.StringFieldUpdateOperationsInput | string;
    target_id?: Prisma.StringFieldUpdateOperationsInput | string;
    notes?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    metadata?: Prisma.NullableJsonNullValueInput | runtime.InputJsonValue;
    apartment_id?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    created_at?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
};
export type admin_actionsCountOrderByAggregateInput = {
    id?: Prisma.SortOrder;
    admin_id?: Prisma.SortOrder;
    action_type?: Prisma.SortOrder;
    target_type?: Prisma.SortOrder;
    target_id?: Prisma.SortOrder;
    notes?: Prisma.SortOrder;
    metadata?: Prisma.SortOrder;
    apartment_id?: Prisma.SortOrder;
    created_at?: Prisma.SortOrder;
};
export type admin_actionsMaxOrderByAggregateInput = {
    id?: Prisma.SortOrder;
    admin_id?: Prisma.SortOrder;
    action_type?: Prisma.SortOrder;
    target_type?: Prisma.SortOrder;
    target_id?: Prisma.SortOrder;
    notes?: Prisma.SortOrder;
    apartment_id?: Prisma.SortOrder;
    created_at?: Prisma.SortOrder;
};
export type admin_actionsMinOrderByAggregateInput = {
    id?: Prisma.SortOrder;
    admin_id?: Prisma.SortOrder;
    action_type?: Prisma.SortOrder;
    target_type?: Prisma.SortOrder;
    target_id?: Prisma.SortOrder;
    notes?: Prisma.SortOrder;
    apartment_id?: Prisma.SortOrder;
    created_at?: Prisma.SortOrder;
};
export type Admin_actionsListRelationFilter = {
    every?: Prisma.admin_actionsWhereInput;
    some?: Prisma.admin_actionsWhereInput;
    none?: Prisma.admin_actionsWhereInput;
};
export type admin_actionsOrderByRelationAggregateInput = {
    _count?: Prisma.SortOrder;
};
export type StringFieldUpdateOperationsInput = {
    set?: string;
};
export type Enumadmin_action_typeFieldUpdateOperationsInput = {
    set?: $Enums.admin_action_type;
};
export type NullableStringFieldUpdateOperationsInput = {
    set?: string | null;
};
export type DateTimeFieldUpdateOperationsInput = {
    set?: Date | string;
};
export type admin_actionsCreateNestedManyWithoutApartmentsInput = {
    create?: Prisma.XOR<Prisma.admin_actionsCreateWithoutApartmentsInput, Prisma.admin_actionsUncheckedCreateWithoutApartmentsInput> | Prisma.admin_actionsCreateWithoutApartmentsInput[] | Prisma.admin_actionsUncheckedCreateWithoutApartmentsInput[];
    connectOrCreate?: Prisma.admin_actionsCreateOrConnectWithoutApartmentsInput | Prisma.admin_actionsCreateOrConnectWithoutApartmentsInput[];
    createMany?: Prisma.admin_actionsCreateManyApartmentsInputEnvelope;
    connect?: Prisma.admin_actionsWhereUniqueInput | Prisma.admin_actionsWhereUniqueInput[];
};
export type admin_actionsUncheckedCreateNestedManyWithoutApartmentsInput = {
    create?: Prisma.XOR<Prisma.admin_actionsCreateWithoutApartmentsInput, Prisma.admin_actionsUncheckedCreateWithoutApartmentsInput> | Prisma.admin_actionsCreateWithoutApartmentsInput[] | Prisma.admin_actionsUncheckedCreateWithoutApartmentsInput[];
    connectOrCreate?: Prisma.admin_actionsCreateOrConnectWithoutApartmentsInput | Prisma.admin_actionsCreateOrConnectWithoutApartmentsInput[];
    createMany?: Prisma.admin_actionsCreateManyApartmentsInputEnvelope;
    connect?: Prisma.admin_actionsWhereUniqueInput | Prisma.admin_actionsWhereUniqueInput[];
};
export type admin_actionsUpdateManyWithoutApartmentsNestedInput = {
    create?: Prisma.XOR<Prisma.admin_actionsCreateWithoutApartmentsInput, Prisma.admin_actionsUncheckedCreateWithoutApartmentsInput> | Prisma.admin_actionsCreateWithoutApartmentsInput[] | Prisma.admin_actionsUncheckedCreateWithoutApartmentsInput[];
    connectOrCreate?: Prisma.admin_actionsCreateOrConnectWithoutApartmentsInput | Prisma.admin_actionsCreateOrConnectWithoutApartmentsInput[];
    upsert?: Prisma.admin_actionsUpsertWithWhereUniqueWithoutApartmentsInput | Prisma.admin_actionsUpsertWithWhereUniqueWithoutApartmentsInput[];
    createMany?: Prisma.admin_actionsCreateManyApartmentsInputEnvelope;
    set?: Prisma.admin_actionsWhereUniqueInput | Prisma.admin_actionsWhereUniqueInput[];
    disconnect?: Prisma.admin_actionsWhereUniqueInput | Prisma.admin_actionsWhereUniqueInput[];
    delete?: Prisma.admin_actionsWhereUniqueInput | Prisma.admin_actionsWhereUniqueInput[];
    connect?: Prisma.admin_actionsWhereUniqueInput | Prisma.admin_actionsWhereUniqueInput[];
    update?: Prisma.admin_actionsUpdateWithWhereUniqueWithoutApartmentsInput | Prisma.admin_actionsUpdateWithWhereUniqueWithoutApartmentsInput[];
    updateMany?: Prisma.admin_actionsUpdateManyWithWhereWithoutApartmentsInput | Prisma.admin_actionsUpdateManyWithWhereWithoutApartmentsInput[];
    deleteMany?: Prisma.admin_actionsScalarWhereInput | Prisma.admin_actionsScalarWhereInput[];
};
export type admin_actionsUncheckedUpdateManyWithoutApartmentsNestedInput = {
    create?: Prisma.XOR<Prisma.admin_actionsCreateWithoutApartmentsInput, Prisma.admin_actionsUncheckedCreateWithoutApartmentsInput> | Prisma.admin_actionsCreateWithoutApartmentsInput[] | Prisma.admin_actionsUncheckedCreateWithoutApartmentsInput[];
    connectOrCreate?: Prisma.admin_actionsCreateOrConnectWithoutApartmentsInput | Prisma.admin_actionsCreateOrConnectWithoutApartmentsInput[];
    upsert?: Prisma.admin_actionsUpsertWithWhereUniqueWithoutApartmentsInput | Prisma.admin_actionsUpsertWithWhereUniqueWithoutApartmentsInput[];
    createMany?: Prisma.admin_actionsCreateManyApartmentsInputEnvelope;
    set?: Prisma.admin_actionsWhereUniqueInput | Prisma.admin_actionsWhereUniqueInput[];
    disconnect?: Prisma.admin_actionsWhereUniqueInput | Prisma.admin_actionsWhereUniqueInput[];
    delete?: Prisma.admin_actionsWhereUniqueInput | Prisma.admin_actionsWhereUniqueInput[];
    connect?: Prisma.admin_actionsWhereUniqueInput | Prisma.admin_actionsWhereUniqueInput[];
    update?: Prisma.admin_actionsUpdateWithWhereUniqueWithoutApartmentsInput | Prisma.admin_actionsUpdateWithWhereUniqueWithoutApartmentsInput[];
    updateMany?: Prisma.admin_actionsUpdateManyWithWhereWithoutApartmentsInput | Prisma.admin_actionsUpdateManyWithWhereWithoutApartmentsInput[];
    deleteMany?: Prisma.admin_actionsScalarWhereInput | Prisma.admin_actionsScalarWhereInput[];
};
export type admin_actionsCreateNestedManyWithoutUsersInput = {
    create?: Prisma.XOR<Prisma.admin_actionsCreateWithoutUsersInput, Prisma.admin_actionsUncheckedCreateWithoutUsersInput> | Prisma.admin_actionsCreateWithoutUsersInput[] | Prisma.admin_actionsUncheckedCreateWithoutUsersInput[];
    connectOrCreate?: Prisma.admin_actionsCreateOrConnectWithoutUsersInput | Prisma.admin_actionsCreateOrConnectWithoutUsersInput[];
    createMany?: Prisma.admin_actionsCreateManyUsersInputEnvelope;
    connect?: Prisma.admin_actionsWhereUniqueInput | Prisma.admin_actionsWhereUniqueInput[];
};
export type admin_actionsUncheckedCreateNestedManyWithoutUsersInput = {
    create?: Prisma.XOR<Prisma.admin_actionsCreateWithoutUsersInput, Prisma.admin_actionsUncheckedCreateWithoutUsersInput> | Prisma.admin_actionsCreateWithoutUsersInput[] | Prisma.admin_actionsUncheckedCreateWithoutUsersInput[];
    connectOrCreate?: Prisma.admin_actionsCreateOrConnectWithoutUsersInput | Prisma.admin_actionsCreateOrConnectWithoutUsersInput[];
    createMany?: Prisma.admin_actionsCreateManyUsersInputEnvelope;
    connect?: Prisma.admin_actionsWhereUniqueInput | Prisma.admin_actionsWhereUniqueInput[];
};
export type admin_actionsUpdateManyWithoutUsersNestedInput = {
    create?: Prisma.XOR<Prisma.admin_actionsCreateWithoutUsersInput, Prisma.admin_actionsUncheckedCreateWithoutUsersInput> | Prisma.admin_actionsCreateWithoutUsersInput[] | Prisma.admin_actionsUncheckedCreateWithoutUsersInput[];
    connectOrCreate?: Prisma.admin_actionsCreateOrConnectWithoutUsersInput | Prisma.admin_actionsCreateOrConnectWithoutUsersInput[];
    upsert?: Prisma.admin_actionsUpsertWithWhereUniqueWithoutUsersInput | Prisma.admin_actionsUpsertWithWhereUniqueWithoutUsersInput[];
    createMany?: Prisma.admin_actionsCreateManyUsersInputEnvelope;
    set?: Prisma.admin_actionsWhereUniqueInput | Prisma.admin_actionsWhereUniqueInput[];
    disconnect?: Prisma.admin_actionsWhereUniqueInput | Prisma.admin_actionsWhereUniqueInput[];
    delete?: Prisma.admin_actionsWhereUniqueInput | Prisma.admin_actionsWhereUniqueInput[];
    connect?: Prisma.admin_actionsWhereUniqueInput | Prisma.admin_actionsWhereUniqueInput[];
    update?: Prisma.admin_actionsUpdateWithWhereUniqueWithoutUsersInput | Prisma.admin_actionsUpdateWithWhereUniqueWithoutUsersInput[];
    updateMany?: Prisma.admin_actionsUpdateManyWithWhereWithoutUsersInput | Prisma.admin_actionsUpdateManyWithWhereWithoutUsersInput[];
    deleteMany?: Prisma.admin_actionsScalarWhereInput | Prisma.admin_actionsScalarWhereInput[];
};
export type admin_actionsUncheckedUpdateManyWithoutUsersNestedInput = {
    create?: Prisma.XOR<Prisma.admin_actionsCreateWithoutUsersInput, Prisma.admin_actionsUncheckedCreateWithoutUsersInput> | Prisma.admin_actionsCreateWithoutUsersInput[] | Prisma.admin_actionsUncheckedCreateWithoutUsersInput[];
    connectOrCreate?: Prisma.admin_actionsCreateOrConnectWithoutUsersInput | Prisma.admin_actionsCreateOrConnectWithoutUsersInput[];
    upsert?: Prisma.admin_actionsUpsertWithWhereUniqueWithoutUsersInput | Prisma.admin_actionsUpsertWithWhereUniqueWithoutUsersInput[];
    createMany?: Prisma.admin_actionsCreateManyUsersInputEnvelope;
    set?: Prisma.admin_actionsWhereUniqueInput | Prisma.admin_actionsWhereUniqueInput[];
    disconnect?: Prisma.admin_actionsWhereUniqueInput | Prisma.admin_actionsWhereUniqueInput[];
    delete?: Prisma.admin_actionsWhereUniqueInput | Prisma.admin_actionsWhereUniqueInput[];
    connect?: Prisma.admin_actionsWhereUniqueInput | Prisma.admin_actionsWhereUniqueInput[];
    update?: Prisma.admin_actionsUpdateWithWhereUniqueWithoutUsersInput | Prisma.admin_actionsUpdateWithWhereUniqueWithoutUsersInput[];
    updateMany?: Prisma.admin_actionsUpdateManyWithWhereWithoutUsersInput | Prisma.admin_actionsUpdateManyWithWhereWithoutUsersInput[];
    deleteMany?: Prisma.admin_actionsScalarWhereInput | Prisma.admin_actionsScalarWhereInput[];
};
export type admin_actionsCreateWithoutApartmentsInput = {
    id?: string;
    action_type: $Enums.admin_action_type;
    target_type: string;
    target_id: string;
    notes?: string | null;
    metadata?: Prisma.NullableJsonNullValueInput | runtime.InputJsonValue;
    created_at?: Date | string;
    users: Prisma.usersCreateNestedOneWithoutAdmin_actionsInput;
};
export type admin_actionsUncheckedCreateWithoutApartmentsInput = {
    id?: string;
    admin_id: string;
    action_type: $Enums.admin_action_type;
    target_type: string;
    target_id: string;
    notes?: string | null;
    metadata?: Prisma.NullableJsonNullValueInput | runtime.InputJsonValue;
    created_at?: Date | string;
};
export type admin_actionsCreateOrConnectWithoutApartmentsInput = {
    where: Prisma.admin_actionsWhereUniqueInput;
    create: Prisma.XOR<Prisma.admin_actionsCreateWithoutApartmentsInput, Prisma.admin_actionsUncheckedCreateWithoutApartmentsInput>;
};
export type admin_actionsCreateManyApartmentsInputEnvelope = {
    data: Prisma.admin_actionsCreateManyApartmentsInput | Prisma.admin_actionsCreateManyApartmentsInput[];
    skipDuplicates?: boolean;
};
export type admin_actionsUpsertWithWhereUniqueWithoutApartmentsInput = {
    where: Prisma.admin_actionsWhereUniqueInput;
    update: Prisma.XOR<Prisma.admin_actionsUpdateWithoutApartmentsInput, Prisma.admin_actionsUncheckedUpdateWithoutApartmentsInput>;
    create: Prisma.XOR<Prisma.admin_actionsCreateWithoutApartmentsInput, Prisma.admin_actionsUncheckedCreateWithoutApartmentsInput>;
};
export type admin_actionsUpdateWithWhereUniqueWithoutApartmentsInput = {
    where: Prisma.admin_actionsWhereUniqueInput;
    data: Prisma.XOR<Prisma.admin_actionsUpdateWithoutApartmentsInput, Prisma.admin_actionsUncheckedUpdateWithoutApartmentsInput>;
};
export type admin_actionsUpdateManyWithWhereWithoutApartmentsInput = {
    where: Prisma.admin_actionsScalarWhereInput;
    data: Prisma.XOR<Prisma.admin_actionsUpdateManyMutationInput, Prisma.admin_actionsUncheckedUpdateManyWithoutApartmentsInput>;
};
export type admin_actionsScalarWhereInput = {
    AND?: Prisma.admin_actionsScalarWhereInput | Prisma.admin_actionsScalarWhereInput[];
    OR?: Prisma.admin_actionsScalarWhereInput[];
    NOT?: Prisma.admin_actionsScalarWhereInput | Prisma.admin_actionsScalarWhereInput[];
    id?: Prisma.UuidFilter<"admin_actions"> | string;
    admin_id?: Prisma.UuidFilter<"admin_actions"> | string;
    action_type?: Prisma.Enumadmin_action_typeFilter<"admin_actions"> | $Enums.admin_action_type;
    target_type?: Prisma.StringFilter<"admin_actions"> | string;
    target_id?: Prisma.UuidFilter<"admin_actions"> | string;
    notes?: Prisma.StringNullableFilter<"admin_actions"> | string | null;
    metadata?: Prisma.JsonNullableFilter<"admin_actions">;
    apartment_id?: Prisma.UuidNullableFilter<"admin_actions"> | string | null;
    created_at?: Prisma.DateTimeFilter<"admin_actions"> | Date | string;
};
export type admin_actionsCreateWithoutUsersInput = {
    id?: string;
    action_type: $Enums.admin_action_type;
    target_type: string;
    target_id: string;
    notes?: string | null;
    metadata?: Prisma.NullableJsonNullValueInput | runtime.InputJsonValue;
    created_at?: Date | string;
    apartments?: Prisma.apartmentsCreateNestedOneWithoutAdmin_actionsInput;
};
export type admin_actionsUncheckedCreateWithoutUsersInput = {
    id?: string;
    action_type: $Enums.admin_action_type;
    target_type: string;
    target_id: string;
    notes?: string | null;
    metadata?: Prisma.NullableJsonNullValueInput | runtime.InputJsonValue;
    apartment_id?: string | null;
    created_at?: Date | string;
};
export type admin_actionsCreateOrConnectWithoutUsersInput = {
    where: Prisma.admin_actionsWhereUniqueInput;
    create: Prisma.XOR<Prisma.admin_actionsCreateWithoutUsersInput, Prisma.admin_actionsUncheckedCreateWithoutUsersInput>;
};
export type admin_actionsCreateManyUsersInputEnvelope = {
    data: Prisma.admin_actionsCreateManyUsersInput | Prisma.admin_actionsCreateManyUsersInput[];
    skipDuplicates?: boolean;
};
export type admin_actionsUpsertWithWhereUniqueWithoutUsersInput = {
    where: Prisma.admin_actionsWhereUniqueInput;
    update: Prisma.XOR<Prisma.admin_actionsUpdateWithoutUsersInput, Prisma.admin_actionsUncheckedUpdateWithoutUsersInput>;
    create: Prisma.XOR<Prisma.admin_actionsCreateWithoutUsersInput, Prisma.admin_actionsUncheckedCreateWithoutUsersInput>;
};
export type admin_actionsUpdateWithWhereUniqueWithoutUsersInput = {
    where: Prisma.admin_actionsWhereUniqueInput;
    data: Prisma.XOR<Prisma.admin_actionsUpdateWithoutUsersInput, Prisma.admin_actionsUncheckedUpdateWithoutUsersInput>;
};
export type admin_actionsUpdateManyWithWhereWithoutUsersInput = {
    where: Prisma.admin_actionsScalarWhereInput;
    data: Prisma.XOR<Prisma.admin_actionsUpdateManyMutationInput, Prisma.admin_actionsUncheckedUpdateManyWithoutUsersInput>;
};
export type admin_actionsCreateManyApartmentsInput = {
    id?: string;
    admin_id: string;
    action_type: $Enums.admin_action_type;
    target_type: string;
    target_id: string;
    notes?: string | null;
    metadata?: Prisma.NullableJsonNullValueInput | runtime.InputJsonValue;
    created_at?: Date | string;
};
export type admin_actionsUpdateWithoutApartmentsInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    action_type?: Prisma.Enumadmin_action_typeFieldUpdateOperationsInput | $Enums.admin_action_type;
    target_type?: Prisma.StringFieldUpdateOperationsInput | string;
    target_id?: Prisma.StringFieldUpdateOperationsInput | string;
    notes?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    metadata?: Prisma.NullableJsonNullValueInput | runtime.InputJsonValue;
    created_at?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    users?: Prisma.usersUpdateOneRequiredWithoutAdmin_actionsNestedInput;
};
export type admin_actionsUncheckedUpdateWithoutApartmentsInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    admin_id?: Prisma.StringFieldUpdateOperationsInput | string;
    action_type?: Prisma.Enumadmin_action_typeFieldUpdateOperationsInput | $Enums.admin_action_type;
    target_type?: Prisma.StringFieldUpdateOperationsInput | string;
    target_id?: Prisma.StringFieldUpdateOperationsInput | string;
    notes?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    metadata?: Prisma.NullableJsonNullValueInput | runtime.InputJsonValue;
    created_at?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
};
export type admin_actionsUncheckedUpdateManyWithoutApartmentsInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    admin_id?: Prisma.StringFieldUpdateOperationsInput | string;
    action_type?: Prisma.Enumadmin_action_typeFieldUpdateOperationsInput | $Enums.admin_action_type;
    target_type?: Prisma.StringFieldUpdateOperationsInput | string;
    target_id?: Prisma.StringFieldUpdateOperationsInput | string;
    notes?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    metadata?: Prisma.NullableJsonNullValueInput | runtime.InputJsonValue;
    created_at?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
};
export type admin_actionsCreateManyUsersInput = {
    id?: string;
    action_type: $Enums.admin_action_type;
    target_type: string;
    target_id: string;
    notes?: string | null;
    metadata?: Prisma.NullableJsonNullValueInput | runtime.InputJsonValue;
    apartment_id?: string | null;
    created_at?: Date | string;
};
export type admin_actionsUpdateWithoutUsersInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    action_type?: Prisma.Enumadmin_action_typeFieldUpdateOperationsInput | $Enums.admin_action_type;
    target_type?: Prisma.StringFieldUpdateOperationsInput | string;
    target_id?: Prisma.StringFieldUpdateOperationsInput | string;
    notes?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    metadata?: Prisma.NullableJsonNullValueInput | runtime.InputJsonValue;
    created_at?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    apartments?: Prisma.apartmentsUpdateOneWithoutAdmin_actionsNestedInput;
};
export type admin_actionsUncheckedUpdateWithoutUsersInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    action_type?: Prisma.Enumadmin_action_typeFieldUpdateOperationsInput | $Enums.admin_action_type;
    target_type?: Prisma.StringFieldUpdateOperationsInput | string;
    target_id?: Prisma.StringFieldUpdateOperationsInput | string;
    notes?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    metadata?: Prisma.NullableJsonNullValueInput | runtime.InputJsonValue;
    apartment_id?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    created_at?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
};
export type admin_actionsUncheckedUpdateManyWithoutUsersInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    action_type?: Prisma.Enumadmin_action_typeFieldUpdateOperationsInput | $Enums.admin_action_type;
    target_type?: Prisma.StringFieldUpdateOperationsInput | string;
    target_id?: Prisma.StringFieldUpdateOperationsInput | string;
    notes?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    metadata?: Prisma.NullableJsonNullValueInput | runtime.InputJsonValue;
    apartment_id?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    created_at?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
};
export type admin_actionsSelect<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetSelect<{
    id?: boolean;
    admin_id?: boolean;
    action_type?: boolean;
    target_type?: boolean;
    target_id?: boolean;
    notes?: boolean;
    metadata?: boolean;
    apartment_id?: boolean;
    created_at?: boolean;
    users?: boolean | Prisma.usersDefaultArgs<ExtArgs>;
    apartments?: boolean | Prisma.admin_actions$apartmentsArgs<ExtArgs>;
}, ExtArgs["result"]["admin_actions"]>;
export type admin_actionsSelectCreateManyAndReturn<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetSelect<{
    id?: boolean;
    admin_id?: boolean;
    action_type?: boolean;
    target_type?: boolean;
    target_id?: boolean;
    notes?: boolean;
    metadata?: boolean;
    apartment_id?: boolean;
    created_at?: boolean;
    users?: boolean | Prisma.usersDefaultArgs<ExtArgs>;
    apartments?: boolean | Prisma.admin_actions$apartmentsArgs<ExtArgs>;
}, ExtArgs["result"]["admin_actions"]>;
export type admin_actionsSelectUpdateManyAndReturn<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetSelect<{
    id?: boolean;
    admin_id?: boolean;
    action_type?: boolean;
    target_type?: boolean;
    target_id?: boolean;
    notes?: boolean;
    metadata?: boolean;
    apartment_id?: boolean;
    created_at?: boolean;
    users?: boolean | Prisma.usersDefaultArgs<ExtArgs>;
    apartments?: boolean | Prisma.admin_actions$apartmentsArgs<ExtArgs>;
}, ExtArgs["result"]["admin_actions"]>;
export type admin_actionsSelectScalar = {
    id?: boolean;
    admin_id?: boolean;
    action_type?: boolean;
    target_type?: boolean;
    target_id?: boolean;
    notes?: boolean;
    metadata?: boolean;
    apartment_id?: boolean;
    created_at?: boolean;
};
export type admin_actionsOmit<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetOmit<"id" | "admin_id" | "action_type" | "target_type" | "target_id" | "notes" | "metadata" | "apartment_id" | "created_at", ExtArgs["result"]["admin_actions"]>;
export type admin_actionsInclude<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    users?: boolean | Prisma.usersDefaultArgs<ExtArgs>;
    apartments?: boolean | Prisma.admin_actions$apartmentsArgs<ExtArgs>;
};
export type admin_actionsIncludeCreateManyAndReturn<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    users?: boolean | Prisma.usersDefaultArgs<ExtArgs>;
    apartments?: boolean | Prisma.admin_actions$apartmentsArgs<ExtArgs>;
};
export type admin_actionsIncludeUpdateManyAndReturn<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    users?: boolean | Prisma.usersDefaultArgs<ExtArgs>;
    apartments?: boolean | Prisma.admin_actions$apartmentsArgs<ExtArgs>;
};
export type $admin_actionsPayload<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    name: "admin_actions";
    objects: {
        users: Prisma.$usersPayload<ExtArgs>;
        apartments: Prisma.$apartmentsPayload<ExtArgs> | null;
    };
    scalars: runtime.Types.Extensions.GetPayloadResult<{
        id: string;
        admin_id: string;
        action_type: $Enums.admin_action_type;
        target_type: string;
        target_id: string;
        notes: string | null;
        metadata: runtime.JsonValue | null;
        apartment_id: string | null;
        created_at: Date;
    }, ExtArgs["result"]["admin_actions"]>;
    composites: {};
};
export type admin_actionsGetPayload<S extends boolean | null | undefined | admin_actionsDefaultArgs> = runtime.Types.Result.GetResult<Prisma.$admin_actionsPayload, S>;
export type admin_actionsCountArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = Omit<admin_actionsFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
    select?: Admin_actionsCountAggregateInputType | true;
};
export interface admin_actionsDelegate<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: {
        types: Prisma.TypeMap<ExtArgs>['model']['admin_actions'];
        meta: {
            name: 'admin_actions';
        };
    };
    findUnique<T extends admin_actionsFindUniqueArgs>(args: Prisma.SelectSubset<T, admin_actionsFindUniqueArgs<ExtArgs>>): Prisma.Prisma__admin_actionsClient<runtime.Types.Result.GetResult<Prisma.$admin_actionsPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>;
    findUniqueOrThrow<T extends admin_actionsFindUniqueOrThrowArgs>(args: Prisma.SelectSubset<T, admin_actionsFindUniqueOrThrowArgs<ExtArgs>>): Prisma.Prisma__admin_actionsClient<runtime.Types.Result.GetResult<Prisma.$admin_actionsPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    findFirst<T extends admin_actionsFindFirstArgs>(args?: Prisma.SelectSubset<T, admin_actionsFindFirstArgs<ExtArgs>>): Prisma.Prisma__admin_actionsClient<runtime.Types.Result.GetResult<Prisma.$admin_actionsPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>;
    findFirstOrThrow<T extends admin_actionsFindFirstOrThrowArgs>(args?: Prisma.SelectSubset<T, admin_actionsFindFirstOrThrowArgs<ExtArgs>>): Prisma.Prisma__admin_actionsClient<runtime.Types.Result.GetResult<Prisma.$admin_actionsPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    findMany<T extends admin_actionsFindManyArgs>(args?: Prisma.SelectSubset<T, admin_actionsFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$admin_actionsPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>;
    create<T extends admin_actionsCreateArgs>(args: Prisma.SelectSubset<T, admin_actionsCreateArgs<ExtArgs>>): Prisma.Prisma__admin_actionsClient<runtime.Types.Result.GetResult<Prisma.$admin_actionsPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    createMany<T extends admin_actionsCreateManyArgs>(args?: Prisma.SelectSubset<T, admin_actionsCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<Prisma.BatchPayload>;
    createManyAndReturn<T extends admin_actionsCreateManyAndReturnArgs>(args?: Prisma.SelectSubset<T, admin_actionsCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$admin_actionsPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>;
    delete<T extends admin_actionsDeleteArgs>(args: Prisma.SelectSubset<T, admin_actionsDeleteArgs<ExtArgs>>): Prisma.Prisma__admin_actionsClient<runtime.Types.Result.GetResult<Prisma.$admin_actionsPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    update<T extends admin_actionsUpdateArgs>(args: Prisma.SelectSubset<T, admin_actionsUpdateArgs<ExtArgs>>): Prisma.Prisma__admin_actionsClient<runtime.Types.Result.GetResult<Prisma.$admin_actionsPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    deleteMany<T extends admin_actionsDeleteManyArgs>(args?: Prisma.SelectSubset<T, admin_actionsDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<Prisma.BatchPayload>;
    updateMany<T extends admin_actionsUpdateManyArgs>(args: Prisma.SelectSubset<T, admin_actionsUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<Prisma.BatchPayload>;
    updateManyAndReturn<T extends admin_actionsUpdateManyAndReturnArgs>(args: Prisma.SelectSubset<T, admin_actionsUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$admin_actionsPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>;
    upsert<T extends admin_actionsUpsertArgs>(args: Prisma.SelectSubset<T, admin_actionsUpsertArgs<ExtArgs>>): Prisma.Prisma__admin_actionsClient<runtime.Types.Result.GetResult<Prisma.$admin_actionsPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    count<T extends admin_actionsCountArgs>(args?: Prisma.Subset<T, admin_actionsCountArgs>): Prisma.PrismaPromise<T extends runtime.Types.Utils.Record<'select', any> ? T['select'] extends true ? number : Prisma.GetScalarType<T['select'], Admin_actionsCountAggregateOutputType> : number>;
    aggregate<T extends Admin_actionsAggregateArgs>(args: Prisma.Subset<T, Admin_actionsAggregateArgs>): Prisma.PrismaPromise<GetAdmin_actionsAggregateType<T>>;
    groupBy<T extends admin_actionsGroupByArgs, HasSelectOrTake extends Prisma.Or<Prisma.Extends<'skip', Prisma.Keys<T>>, Prisma.Extends<'take', Prisma.Keys<T>>>, OrderByArg extends Prisma.True extends HasSelectOrTake ? {
        orderBy: admin_actionsGroupByArgs['orderBy'];
    } : {
        orderBy?: admin_actionsGroupByArgs['orderBy'];
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
    }[OrderFields]>(args: Prisma.SubsetIntersection<T, admin_actionsGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetAdmin_actionsGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>;
    readonly fields: admin_actionsFieldRefs;
}
export interface Prisma__admin_actionsClient<T, Null = never, ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise";
    users<T extends Prisma.usersDefaultArgs<ExtArgs> = {}>(args?: Prisma.Subset<T, Prisma.usersDefaultArgs<ExtArgs>>): Prisma.Prisma__usersClient<runtime.Types.Result.GetResult<Prisma.$usersPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>;
    apartments<T extends Prisma.admin_actions$apartmentsArgs<ExtArgs> = {}>(args?: Prisma.Subset<T, Prisma.admin_actions$apartmentsArgs<ExtArgs>>): Prisma.Prisma__apartmentsClient<runtime.Types.Result.GetResult<Prisma.$apartmentsPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>;
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): runtime.Types.Utils.JsPromise<TResult1 | TResult2>;
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): runtime.Types.Utils.JsPromise<T | TResult>;
    finally(onfinally?: (() => void) | undefined | null): runtime.Types.Utils.JsPromise<T>;
}
export interface admin_actionsFieldRefs {
    readonly id: Prisma.FieldRef<"admin_actions", 'String'>;
    readonly admin_id: Prisma.FieldRef<"admin_actions", 'String'>;
    readonly action_type: Prisma.FieldRef<"admin_actions", 'admin_action_type'>;
    readonly target_type: Prisma.FieldRef<"admin_actions", 'String'>;
    readonly target_id: Prisma.FieldRef<"admin_actions", 'String'>;
    readonly notes: Prisma.FieldRef<"admin_actions", 'String'>;
    readonly metadata: Prisma.FieldRef<"admin_actions", 'Json'>;
    readonly apartment_id: Prisma.FieldRef<"admin_actions", 'String'>;
    readonly created_at: Prisma.FieldRef<"admin_actions", 'DateTime'>;
}
export type admin_actionsFindUniqueArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.admin_actionsSelect<ExtArgs> | null;
    omit?: Prisma.admin_actionsOmit<ExtArgs> | null;
    include?: Prisma.admin_actionsInclude<ExtArgs> | null;
    where: Prisma.admin_actionsWhereUniqueInput;
};
export type admin_actionsFindUniqueOrThrowArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.admin_actionsSelect<ExtArgs> | null;
    omit?: Prisma.admin_actionsOmit<ExtArgs> | null;
    include?: Prisma.admin_actionsInclude<ExtArgs> | null;
    where: Prisma.admin_actionsWhereUniqueInput;
};
export type admin_actionsFindFirstArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.admin_actionsSelect<ExtArgs> | null;
    omit?: Prisma.admin_actionsOmit<ExtArgs> | null;
    include?: Prisma.admin_actionsInclude<ExtArgs> | null;
    where?: Prisma.admin_actionsWhereInput;
    orderBy?: Prisma.admin_actionsOrderByWithRelationInput | Prisma.admin_actionsOrderByWithRelationInput[];
    cursor?: Prisma.admin_actionsWhereUniqueInput;
    take?: number;
    skip?: number;
    distinct?: Prisma.Admin_actionsScalarFieldEnum | Prisma.Admin_actionsScalarFieldEnum[];
};
export type admin_actionsFindFirstOrThrowArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.admin_actionsSelect<ExtArgs> | null;
    omit?: Prisma.admin_actionsOmit<ExtArgs> | null;
    include?: Prisma.admin_actionsInclude<ExtArgs> | null;
    where?: Prisma.admin_actionsWhereInput;
    orderBy?: Prisma.admin_actionsOrderByWithRelationInput | Prisma.admin_actionsOrderByWithRelationInput[];
    cursor?: Prisma.admin_actionsWhereUniqueInput;
    take?: number;
    skip?: number;
    distinct?: Prisma.Admin_actionsScalarFieldEnum | Prisma.Admin_actionsScalarFieldEnum[];
};
export type admin_actionsFindManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.admin_actionsSelect<ExtArgs> | null;
    omit?: Prisma.admin_actionsOmit<ExtArgs> | null;
    include?: Prisma.admin_actionsInclude<ExtArgs> | null;
    where?: Prisma.admin_actionsWhereInput;
    orderBy?: Prisma.admin_actionsOrderByWithRelationInput | Prisma.admin_actionsOrderByWithRelationInput[];
    cursor?: Prisma.admin_actionsWhereUniqueInput;
    take?: number;
    skip?: number;
    distinct?: Prisma.Admin_actionsScalarFieldEnum | Prisma.Admin_actionsScalarFieldEnum[];
};
export type admin_actionsCreateArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.admin_actionsSelect<ExtArgs> | null;
    omit?: Prisma.admin_actionsOmit<ExtArgs> | null;
    include?: Prisma.admin_actionsInclude<ExtArgs> | null;
    data: Prisma.XOR<Prisma.admin_actionsCreateInput, Prisma.admin_actionsUncheckedCreateInput>;
};
export type admin_actionsCreateManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    data: Prisma.admin_actionsCreateManyInput | Prisma.admin_actionsCreateManyInput[];
    skipDuplicates?: boolean;
};
export type admin_actionsCreateManyAndReturnArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.admin_actionsSelectCreateManyAndReturn<ExtArgs> | null;
    omit?: Prisma.admin_actionsOmit<ExtArgs> | null;
    data: Prisma.admin_actionsCreateManyInput | Prisma.admin_actionsCreateManyInput[];
    skipDuplicates?: boolean;
    include?: Prisma.admin_actionsIncludeCreateManyAndReturn<ExtArgs> | null;
};
export type admin_actionsUpdateArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.admin_actionsSelect<ExtArgs> | null;
    omit?: Prisma.admin_actionsOmit<ExtArgs> | null;
    include?: Prisma.admin_actionsInclude<ExtArgs> | null;
    data: Prisma.XOR<Prisma.admin_actionsUpdateInput, Prisma.admin_actionsUncheckedUpdateInput>;
    where: Prisma.admin_actionsWhereUniqueInput;
};
export type admin_actionsUpdateManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    data: Prisma.XOR<Prisma.admin_actionsUpdateManyMutationInput, Prisma.admin_actionsUncheckedUpdateManyInput>;
    where?: Prisma.admin_actionsWhereInput;
    limit?: number;
};
export type admin_actionsUpdateManyAndReturnArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.admin_actionsSelectUpdateManyAndReturn<ExtArgs> | null;
    omit?: Prisma.admin_actionsOmit<ExtArgs> | null;
    data: Prisma.XOR<Prisma.admin_actionsUpdateManyMutationInput, Prisma.admin_actionsUncheckedUpdateManyInput>;
    where?: Prisma.admin_actionsWhereInput;
    limit?: number;
    include?: Prisma.admin_actionsIncludeUpdateManyAndReturn<ExtArgs> | null;
};
export type admin_actionsUpsertArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.admin_actionsSelect<ExtArgs> | null;
    omit?: Prisma.admin_actionsOmit<ExtArgs> | null;
    include?: Prisma.admin_actionsInclude<ExtArgs> | null;
    where: Prisma.admin_actionsWhereUniqueInput;
    create: Prisma.XOR<Prisma.admin_actionsCreateInput, Prisma.admin_actionsUncheckedCreateInput>;
    update: Prisma.XOR<Prisma.admin_actionsUpdateInput, Prisma.admin_actionsUncheckedUpdateInput>;
};
export type admin_actionsDeleteArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.admin_actionsSelect<ExtArgs> | null;
    omit?: Prisma.admin_actionsOmit<ExtArgs> | null;
    include?: Prisma.admin_actionsInclude<ExtArgs> | null;
    where: Prisma.admin_actionsWhereUniqueInput;
};
export type admin_actionsDeleteManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    where?: Prisma.admin_actionsWhereInput;
    limit?: number;
};
export type admin_actions$apartmentsArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.apartmentsSelect<ExtArgs> | null;
    omit?: Prisma.apartmentsOmit<ExtArgs> | null;
    include?: Prisma.apartmentsInclude<ExtArgs> | null;
    where?: Prisma.apartmentsWhereInput;
};
export type admin_actionsDefaultArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.admin_actionsSelect<ExtArgs> | null;
    omit?: Prisma.admin_actionsOmit<ExtArgs> | null;
    include?: Prisma.admin_actionsInclude<ExtArgs> | null;
};
