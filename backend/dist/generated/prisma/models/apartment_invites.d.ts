import type * as runtime from "@prisma/client/runtime/client";
import type * as $Enums from "../enums.js";
import type * as Prisma from "../internal/prismaNamespace.js";
export type apartment_invitesModel = runtime.Types.Result.DefaultSelection<Prisma.$apartment_invitesPayload>;
export type AggregateApartment_invites = {
    _count: Apartment_invitesCountAggregateOutputType | null;
    _min: Apartment_invitesMinAggregateOutputType | null;
    _max: Apartment_invitesMaxAggregateOutputType | null;
};
export type Apartment_invitesMinAggregateOutputType = {
    id: string | null;
    apartment_id: string | null;
    invited_email: string | null;
    token: string | null;
    token_expires_at: Date | null;
    unit_number: string | null;
    status: $Enums.invite_status | null;
    invited_by: string | null;
    used_by: string | null;
    notes: string | null;
    created_at: Date | null;
    updated_at: Date | null;
};
export type Apartment_invitesMaxAggregateOutputType = {
    id: string | null;
    apartment_id: string | null;
    invited_email: string | null;
    token: string | null;
    token_expires_at: Date | null;
    unit_number: string | null;
    status: $Enums.invite_status | null;
    invited_by: string | null;
    used_by: string | null;
    notes: string | null;
    created_at: Date | null;
    updated_at: Date | null;
};
export type Apartment_invitesCountAggregateOutputType = {
    id: number;
    apartment_id: number;
    invited_email: number;
    token: number;
    token_expires_at: number;
    unit_number: number;
    status: number;
    invited_by: number;
    used_by: number;
    notes: number;
    created_at: number;
    updated_at: number;
    _all: number;
};
export type Apartment_invitesMinAggregateInputType = {
    id?: true;
    apartment_id?: true;
    invited_email?: true;
    token?: true;
    token_expires_at?: true;
    unit_number?: true;
    status?: true;
    invited_by?: true;
    used_by?: true;
    notes?: true;
    created_at?: true;
    updated_at?: true;
};
export type Apartment_invitesMaxAggregateInputType = {
    id?: true;
    apartment_id?: true;
    invited_email?: true;
    token?: true;
    token_expires_at?: true;
    unit_number?: true;
    status?: true;
    invited_by?: true;
    used_by?: true;
    notes?: true;
    created_at?: true;
    updated_at?: true;
};
export type Apartment_invitesCountAggregateInputType = {
    id?: true;
    apartment_id?: true;
    invited_email?: true;
    token?: true;
    token_expires_at?: true;
    unit_number?: true;
    status?: true;
    invited_by?: true;
    used_by?: true;
    notes?: true;
    created_at?: true;
    updated_at?: true;
    _all?: true;
};
export type Apartment_invitesAggregateArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    where?: Prisma.apartment_invitesWhereInput;
    orderBy?: Prisma.apartment_invitesOrderByWithRelationInput | Prisma.apartment_invitesOrderByWithRelationInput[];
    cursor?: Prisma.apartment_invitesWhereUniqueInput;
    take?: number;
    skip?: number;
    _count?: true | Apartment_invitesCountAggregateInputType;
    _min?: Apartment_invitesMinAggregateInputType;
    _max?: Apartment_invitesMaxAggregateInputType;
};
export type GetApartment_invitesAggregateType<T extends Apartment_invitesAggregateArgs> = {
    [P in keyof T & keyof AggregateApartment_invites]: P extends '_count' | 'count' ? T[P] extends true ? number : Prisma.GetScalarType<T[P], AggregateApartment_invites[P]> : Prisma.GetScalarType<T[P], AggregateApartment_invites[P]>;
};
export type apartment_invitesGroupByArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    where?: Prisma.apartment_invitesWhereInput;
    orderBy?: Prisma.apartment_invitesOrderByWithAggregationInput | Prisma.apartment_invitesOrderByWithAggregationInput[];
    by: Prisma.Apartment_invitesScalarFieldEnum[] | Prisma.Apartment_invitesScalarFieldEnum;
    having?: Prisma.apartment_invitesScalarWhereWithAggregatesInput;
    take?: number;
    skip?: number;
    _count?: Apartment_invitesCountAggregateInputType | true;
    _min?: Apartment_invitesMinAggregateInputType;
    _max?: Apartment_invitesMaxAggregateInputType;
};
export type Apartment_invitesGroupByOutputType = {
    id: string;
    apartment_id: string;
    invited_email: string;
    token: string;
    token_expires_at: Date;
    unit_number: string | null;
    status: $Enums.invite_status;
    invited_by: string | null;
    used_by: string | null;
    notes: string | null;
    created_at: Date;
    updated_at: Date;
    _count: Apartment_invitesCountAggregateOutputType | null;
    _min: Apartment_invitesMinAggregateOutputType | null;
    _max: Apartment_invitesMaxAggregateOutputType | null;
};
export type GetApartment_invitesGroupByPayload<T extends apartment_invitesGroupByArgs> = Prisma.PrismaPromise<Array<Prisma.PickEnumerable<Apartment_invitesGroupByOutputType, T['by']> & {
    [P in ((keyof T) & (keyof Apartment_invitesGroupByOutputType))]: P extends '_count' ? T[P] extends boolean ? number : Prisma.GetScalarType<T[P], Apartment_invitesGroupByOutputType[P]> : Prisma.GetScalarType<T[P], Apartment_invitesGroupByOutputType[P]>;
}>>;
export type apartment_invitesWhereInput = {
    AND?: Prisma.apartment_invitesWhereInput | Prisma.apartment_invitesWhereInput[];
    OR?: Prisma.apartment_invitesWhereInput[];
    NOT?: Prisma.apartment_invitesWhereInput | Prisma.apartment_invitesWhereInput[];
    id?: Prisma.UuidFilter<"apartment_invites"> | string;
    apartment_id?: Prisma.UuidFilter<"apartment_invites"> | string;
    invited_email?: Prisma.StringFilter<"apartment_invites"> | string;
    token?: Prisma.StringFilter<"apartment_invites"> | string;
    token_expires_at?: Prisma.DateTimeFilter<"apartment_invites"> | Date | string;
    unit_number?: Prisma.StringNullableFilter<"apartment_invites"> | string | null;
    status?: Prisma.Enuminvite_statusFilter<"apartment_invites"> | $Enums.invite_status;
    invited_by?: Prisma.UuidNullableFilter<"apartment_invites"> | string | null;
    used_by?: Prisma.UuidNullableFilter<"apartment_invites"> | string | null;
    notes?: Prisma.StringNullableFilter<"apartment_invites"> | string | null;
    created_at?: Prisma.DateTimeFilter<"apartment_invites"> | Date | string;
    updated_at?: Prisma.DateTimeFilter<"apartment_invites"> | Date | string;
    apartments?: Prisma.XOR<Prisma.ApartmentsScalarRelationFilter, Prisma.apartmentsWhereInput>;
    users_apartment_invites_invited_byTousers?: Prisma.XOR<Prisma.UsersNullableScalarRelationFilter, Prisma.usersWhereInput> | null;
    users_apartment_invites_used_byTousers?: Prisma.XOR<Prisma.UsersNullableScalarRelationFilter, Prisma.usersWhereInput> | null;
    users_users_invite_idToapartment_invites?: Prisma.UsersListRelationFilter;
};
export type apartment_invitesOrderByWithRelationInput = {
    id?: Prisma.SortOrder;
    apartment_id?: Prisma.SortOrder;
    invited_email?: Prisma.SortOrder;
    token?: Prisma.SortOrder;
    token_expires_at?: Prisma.SortOrder;
    unit_number?: Prisma.SortOrderInput | Prisma.SortOrder;
    status?: Prisma.SortOrder;
    invited_by?: Prisma.SortOrderInput | Prisma.SortOrder;
    used_by?: Prisma.SortOrderInput | Prisma.SortOrder;
    notes?: Prisma.SortOrderInput | Prisma.SortOrder;
    created_at?: Prisma.SortOrder;
    updated_at?: Prisma.SortOrder;
    apartments?: Prisma.apartmentsOrderByWithRelationInput;
    users_apartment_invites_invited_byTousers?: Prisma.usersOrderByWithRelationInput;
    users_apartment_invites_used_byTousers?: Prisma.usersOrderByWithRelationInput;
    users_users_invite_idToapartment_invites?: Prisma.usersOrderByRelationAggregateInput;
};
export type apartment_invitesWhereUniqueInput = Prisma.AtLeast<{
    id?: string;
    token?: string;
    AND?: Prisma.apartment_invitesWhereInput | Prisma.apartment_invitesWhereInput[];
    OR?: Prisma.apartment_invitesWhereInput[];
    NOT?: Prisma.apartment_invitesWhereInput | Prisma.apartment_invitesWhereInput[];
    apartment_id?: Prisma.UuidFilter<"apartment_invites"> | string;
    invited_email?: Prisma.StringFilter<"apartment_invites"> | string;
    token_expires_at?: Prisma.DateTimeFilter<"apartment_invites"> | Date | string;
    unit_number?: Prisma.StringNullableFilter<"apartment_invites"> | string | null;
    status?: Prisma.Enuminvite_statusFilter<"apartment_invites"> | $Enums.invite_status;
    invited_by?: Prisma.UuidNullableFilter<"apartment_invites"> | string | null;
    used_by?: Prisma.UuidNullableFilter<"apartment_invites"> | string | null;
    notes?: Prisma.StringNullableFilter<"apartment_invites"> | string | null;
    created_at?: Prisma.DateTimeFilter<"apartment_invites"> | Date | string;
    updated_at?: Prisma.DateTimeFilter<"apartment_invites"> | Date | string;
    apartments?: Prisma.XOR<Prisma.ApartmentsScalarRelationFilter, Prisma.apartmentsWhereInput>;
    users_apartment_invites_invited_byTousers?: Prisma.XOR<Prisma.UsersNullableScalarRelationFilter, Prisma.usersWhereInput> | null;
    users_apartment_invites_used_byTousers?: Prisma.XOR<Prisma.UsersNullableScalarRelationFilter, Prisma.usersWhereInput> | null;
    users_users_invite_idToapartment_invites?: Prisma.UsersListRelationFilter;
}, "id" | "token">;
export type apartment_invitesOrderByWithAggregationInput = {
    id?: Prisma.SortOrder;
    apartment_id?: Prisma.SortOrder;
    invited_email?: Prisma.SortOrder;
    token?: Prisma.SortOrder;
    token_expires_at?: Prisma.SortOrder;
    unit_number?: Prisma.SortOrderInput | Prisma.SortOrder;
    status?: Prisma.SortOrder;
    invited_by?: Prisma.SortOrderInput | Prisma.SortOrder;
    used_by?: Prisma.SortOrderInput | Prisma.SortOrder;
    notes?: Prisma.SortOrderInput | Prisma.SortOrder;
    created_at?: Prisma.SortOrder;
    updated_at?: Prisma.SortOrder;
    _count?: Prisma.apartment_invitesCountOrderByAggregateInput;
    _max?: Prisma.apartment_invitesMaxOrderByAggregateInput;
    _min?: Prisma.apartment_invitesMinOrderByAggregateInput;
};
export type apartment_invitesScalarWhereWithAggregatesInput = {
    AND?: Prisma.apartment_invitesScalarWhereWithAggregatesInput | Prisma.apartment_invitesScalarWhereWithAggregatesInput[];
    OR?: Prisma.apartment_invitesScalarWhereWithAggregatesInput[];
    NOT?: Prisma.apartment_invitesScalarWhereWithAggregatesInput | Prisma.apartment_invitesScalarWhereWithAggregatesInput[];
    id?: Prisma.UuidWithAggregatesFilter<"apartment_invites"> | string;
    apartment_id?: Prisma.UuidWithAggregatesFilter<"apartment_invites"> | string;
    invited_email?: Prisma.StringWithAggregatesFilter<"apartment_invites"> | string;
    token?: Prisma.StringWithAggregatesFilter<"apartment_invites"> | string;
    token_expires_at?: Prisma.DateTimeWithAggregatesFilter<"apartment_invites"> | Date | string;
    unit_number?: Prisma.StringNullableWithAggregatesFilter<"apartment_invites"> | string | null;
    status?: Prisma.Enuminvite_statusWithAggregatesFilter<"apartment_invites"> | $Enums.invite_status;
    invited_by?: Prisma.UuidNullableWithAggregatesFilter<"apartment_invites"> | string | null;
    used_by?: Prisma.UuidNullableWithAggregatesFilter<"apartment_invites"> | string | null;
    notes?: Prisma.StringNullableWithAggregatesFilter<"apartment_invites"> | string | null;
    created_at?: Prisma.DateTimeWithAggregatesFilter<"apartment_invites"> | Date | string;
    updated_at?: Prisma.DateTimeWithAggregatesFilter<"apartment_invites"> | Date | string;
};
export type apartment_invitesCreateInput = {
    id?: string;
    invited_email: string;
    token: string;
    token_expires_at: Date | string;
    unit_number?: string | null;
    status?: $Enums.invite_status;
    notes?: string | null;
    created_at?: Date | string;
    updated_at?: Date | string;
    apartments: Prisma.apartmentsCreateNestedOneWithoutApartment_invitesInput;
    users_apartment_invites_invited_byTousers?: Prisma.usersCreateNestedOneWithoutApartment_invites_apartment_invites_invited_byTousersInput;
    users_apartment_invites_used_byTousers?: Prisma.usersCreateNestedOneWithoutApartment_invites_apartment_invites_used_byTousersInput;
    users_users_invite_idToapartment_invites?: Prisma.usersCreateNestedManyWithoutApartment_invites_users_invite_idToapartment_invitesInput;
};
export type apartment_invitesUncheckedCreateInput = {
    id?: string;
    apartment_id: string;
    invited_email: string;
    token: string;
    token_expires_at: Date | string;
    unit_number?: string | null;
    status?: $Enums.invite_status;
    invited_by?: string | null;
    used_by?: string | null;
    notes?: string | null;
    created_at?: Date | string;
    updated_at?: Date | string;
    users_users_invite_idToapartment_invites?: Prisma.usersUncheckedCreateNestedManyWithoutApartment_invites_users_invite_idToapartment_invitesInput;
};
export type apartment_invitesUpdateInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    invited_email?: Prisma.StringFieldUpdateOperationsInput | string;
    token?: Prisma.StringFieldUpdateOperationsInput | string;
    token_expires_at?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    unit_number?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    status?: Prisma.Enuminvite_statusFieldUpdateOperationsInput | $Enums.invite_status;
    notes?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    created_at?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    updated_at?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    apartments?: Prisma.apartmentsUpdateOneRequiredWithoutApartment_invitesNestedInput;
    users_apartment_invites_invited_byTousers?: Prisma.usersUpdateOneWithoutApartment_invites_apartment_invites_invited_byTousersNestedInput;
    users_apartment_invites_used_byTousers?: Prisma.usersUpdateOneWithoutApartment_invites_apartment_invites_used_byTousersNestedInput;
    users_users_invite_idToapartment_invites?: Prisma.usersUpdateManyWithoutApartment_invites_users_invite_idToapartment_invitesNestedInput;
};
export type apartment_invitesUncheckedUpdateInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    apartment_id?: Prisma.StringFieldUpdateOperationsInput | string;
    invited_email?: Prisma.StringFieldUpdateOperationsInput | string;
    token?: Prisma.StringFieldUpdateOperationsInput | string;
    token_expires_at?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    unit_number?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    status?: Prisma.Enuminvite_statusFieldUpdateOperationsInput | $Enums.invite_status;
    invited_by?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    used_by?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    notes?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    created_at?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    updated_at?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    users_users_invite_idToapartment_invites?: Prisma.usersUncheckedUpdateManyWithoutApartment_invites_users_invite_idToapartment_invitesNestedInput;
};
export type apartment_invitesCreateManyInput = {
    id?: string;
    apartment_id: string;
    invited_email: string;
    token: string;
    token_expires_at: Date | string;
    unit_number?: string | null;
    status?: $Enums.invite_status;
    invited_by?: string | null;
    used_by?: string | null;
    notes?: string | null;
    created_at?: Date | string;
    updated_at?: Date | string;
};
export type apartment_invitesUpdateManyMutationInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    invited_email?: Prisma.StringFieldUpdateOperationsInput | string;
    token?: Prisma.StringFieldUpdateOperationsInput | string;
    token_expires_at?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    unit_number?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    status?: Prisma.Enuminvite_statusFieldUpdateOperationsInput | $Enums.invite_status;
    notes?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    created_at?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    updated_at?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
};
export type apartment_invitesUncheckedUpdateManyInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    apartment_id?: Prisma.StringFieldUpdateOperationsInput | string;
    invited_email?: Prisma.StringFieldUpdateOperationsInput | string;
    token?: Prisma.StringFieldUpdateOperationsInput | string;
    token_expires_at?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    unit_number?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    status?: Prisma.Enuminvite_statusFieldUpdateOperationsInput | $Enums.invite_status;
    invited_by?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    used_by?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    notes?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    created_at?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    updated_at?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
};
export type apartment_invitesCountOrderByAggregateInput = {
    id?: Prisma.SortOrder;
    apartment_id?: Prisma.SortOrder;
    invited_email?: Prisma.SortOrder;
    token?: Prisma.SortOrder;
    token_expires_at?: Prisma.SortOrder;
    unit_number?: Prisma.SortOrder;
    status?: Prisma.SortOrder;
    invited_by?: Prisma.SortOrder;
    used_by?: Prisma.SortOrder;
    notes?: Prisma.SortOrder;
    created_at?: Prisma.SortOrder;
    updated_at?: Prisma.SortOrder;
};
export type apartment_invitesMaxOrderByAggregateInput = {
    id?: Prisma.SortOrder;
    apartment_id?: Prisma.SortOrder;
    invited_email?: Prisma.SortOrder;
    token?: Prisma.SortOrder;
    token_expires_at?: Prisma.SortOrder;
    unit_number?: Prisma.SortOrder;
    status?: Prisma.SortOrder;
    invited_by?: Prisma.SortOrder;
    used_by?: Prisma.SortOrder;
    notes?: Prisma.SortOrder;
    created_at?: Prisma.SortOrder;
    updated_at?: Prisma.SortOrder;
};
export type apartment_invitesMinOrderByAggregateInput = {
    id?: Prisma.SortOrder;
    apartment_id?: Prisma.SortOrder;
    invited_email?: Prisma.SortOrder;
    token?: Prisma.SortOrder;
    token_expires_at?: Prisma.SortOrder;
    unit_number?: Prisma.SortOrder;
    status?: Prisma.SortOrder;
    invited_by?: Prisma.SortOrder;
    used_by?: Prisma.SortOrder;
    notes?: Prisma.SortOrder;
    created_at?: Prisma.SortOrder;
    updated_at?: Prisma.SortOrder;
};
export type Apartment_invitesListRelationFilter = {
    every?: Prisma.apartment_invitesWhereInput;
    some?: Prisma.apartment_invitesWhereInput;
    none?: Prisma.apartment_invitesWhereInput;
};
export type apartment_invitesOrderByRelationAggregateInput = {
    _count?: Prisma.SortOrder;
};
export type Apartment_invitesNullableScalarRelationFilter = {
    is?: Prisma.apartment_invitesWhereInput | null;
    isNot?: Prisma.apartment_invitesWhereInput | null;
};
export type Enuminvite_statusFieldUpdateOperationsInput = {
    set?: $Enums.invite_status;
};
export type apartment_invitesCreateNestedManyWithoutApartmentsInput = {
    create?: Prisma.XOR<Prisma.apartment_invitesCreateWithoutApartmentsInput, Prisma.apartment_invitesUncheckedCreateWithoutApartmentsInput> | Prisma.apartment_invitesCreateWithoutApartmentsInput[] | Prisma.apartment_invitesUncheckedCreateWithoutApartmentsInput[];
    connectOrCreate?: Prisma.apartment_invitesCreateOrConnectWithoutApartmentsInput | Prisma.apartment_invitesCreateOrConnectWithoutApartmentsInput[];
    createMany?: Prisma.apartment_invitesCreateManyApartmentsInputEnvelope;
    connect?: Prisma.apartment_invitesWhereUniqueInput | Prisma.apartment_invitesWhereUniqueInput[];
};
export type apartment_invitesUncheckedCreateNestedManyWithoutApartmentsInput = {
    create?: Prisma.XOR<Prisma.apartment_invitesCreateWithoutApartmentsInput, Prisma.apartment_invitesUncheckedCreateWithoutApartmentsInput> | Prisma.apartment_invitesCreateWithoutApartmentsInput[] | Prisma.apartment_invitesUncheckedCreateWithoutApartmentsInput[];
    connectOrCreate?: Prisma.apartment_invitesCreateOrConnectWithoutApartmentsInput | Prisma.apartment_invitesCreateOrConnectWithoutApartmentsInput[];
    createMany?: Prisma.apartment_invitesCreateManyApartmentsInputEnvelope;
    connect?: Prisma.apartment_invitesWhereUniqueInput | Prisma.apartment_invitesWhereUniqueInput[];
};
export type apartment_invitesUpdateManyWithoutApartmentsNestedInput = {
    create?: Prisma.XOR<Prisma.apartment_invitesCreateWithoutApartmentsInput, Prisma.apartment_invitesUncheckedCreateWithoutApartmentsInput> | Prisma.apartment_invitesCreateWithoutApartmentsInput[] | Prisma.apartment_invitesUncheckedCreateWithoutApartmentsInput[];
    connectOrCreate?: Prisma.apartment_invitesCreateOrConnectWithoutApartmentsInput | Prisma.apartment_invitesCreateOrConnectWithoutApartmentsInput[];
    upsert?: Prisma.apartment_invitesUpsertWithWhereUniqueWithoutApartmentsInput | Prisma.apartment_invitesUpsertWithWhereUniqueWithoutApartmentsInput[];
    createMany?: Prisma.apartment_invitesCreateManyApartmentsInputEnvelope;
    set?: Prisma.apartment_invitesWhereUniqueInput | Prisma.apartment_invitesWhereUniqueInput[];
    disconnect?: Prisma.apartment_invitesWhereUniqueInput | Prisma.apartment_invitesWhereUniqueInput[];
    delete?: Prisma.apartment_invitesWhereUniqueInput | Prisma.apartment_invitesWhereUniqueInput[];
    connect?: Prisma.apartment_invitesWhereUniqueInput | Prisma.apartment_invitesWhereUniqueInput[];
    update?: Prisma.apartment_invitesUpdateWithWhereUniqueWithoutApartmentsInput | Prisma.apartment_invitesUpdateWithWhereUniqueWithoutApartmentsInput[];
    updateMany?: Prisma.apartment_invitesUpdateManyWithWhereWithoutApartmentsInput | Prisma.apartment_invitesUpdateManyWithWhereWithoutApartmentsInput[];
    deleteMany?: Prisma.apartment_invitesScalarWhereInput | Prisma.apartment_invitesScalarWhereInput[];
};
export type apartment_invitesUncheckedUpdateManyWithoutApartmentsNestedInput = {
    create?: Prisma.XOR<Prisma.apartment_invitesCreateWithoutApartmentsInput, Prisma.apartment_invitesUncheckedCreateWithoutApartmentsInput> | Prisma.apartment_invitesCreateWithoutApartmentsInput[] | Prisma.apartment_invitesUncheckedCreateWithoutApartmentsInput[];
    connectOrCreate?: Prisma.apartment_invitesCreateOrConnectWithoutApartmentsInput | Prisma.apartment_invitesCreateOrConnectWithoutApartmentsInput[];
    upsert?: Prisma.apartment_invitesUpsertWithWhereUniqueWithoutApartmentsInput | Prisma.apartment_invitesUpsertWithWhereUniqueWithoutApartmentsInput[];
    createMany?: Prisma.apartment_invitesCreateManyApartmentsInputEnvelope;
    set?: Prisma.apartment_invitesWhereUniqueInput | Prisma.apartment_invitesWhereUniqueInput[];
    disconnect?: Prisma.apartment_invitesWhereUniqueInput | Prisma.apartment_invitesWhereUniqueInput[];
    delete?: Prisma.apartment_invitesWhereUniqueInput | Prisma.apartment_invitesWhereUniqueInput[];
    connect?: Prisma.apartment_invitesWhereUniqueInput | Prisma.apartment_invitesWhereUniqueInput[];
    update?: Prisma.apartment_invitesUpdateWithWhereUniqueWithoutApartmentsInput | Prisma.apartment_invitesUpdateWithWhereUniqueWithoutApartmentsInput[];
    updateMany?: Prisma.apartment_invitesUpdateManyWithWhereWithoutApartmentsInput | Prisma.apartment_invitesUpdateManyWithWhereWithoutApartmentsInput[];
    deleteMany?: Prisma.apartment_invitesScalarWhereInput | Prisma.apartment_invitesScalarWhereInput[];
};
export type apartment_invitesCreateNestedManyWithoutUsers_apartment_invites_invited_byTousersInput = {
    create?: Prisma.XOR<Prisma.apartment_invitesCreateWithoutUsers_apartment_invites_invited_byTousersInput, Prisma.apartment_invitesUncheckedCreateWithoutUsers_apartment_invites_invited_byTousersInput> | Prisma.apartment_invitesCreateWithoutUsers_apartment_invites_invited_byTousersInput[] | Prisma.apartment_invitesUncheckedCreateWithoutUsers_apartment_invites_invited_byTousersInput[];
    connectOrCreate?: Prisma.apartment_invitesCreateOrConnectWithoutUsers_apartment_invites_invited_byTousersInput | Prisma.apartment_invitesCreateOrConnectWithoutUsers_apartment_invites_invited_byTousersInput[];
    createMany?: Prisma.apartment_invitesCreateManyUsers_apartment_invites_invited_byTousersInputEnvelope;
    connect?: Prisma.apartment_invitesWhereUniqueInput | Prisma.apartment_invitesWhereUniqueInput[];
};
export type apartment_invitesCreateNestedManyWithoutUsers_apartment_invites_used_byTousersInput = {
    create?: Prisma.XOR<Prisma.apartment_invitesCreateWithoutUsers_apartment_invites_used_byTousersInput, Prisma.apartment_invitesUncheckedCreateWithoutUsers_apartment_invites_used_byTousersInput> | Prisma.apartment_invitesCreateWithoutUsers_apartment_invites_used_byTousersInput[] | Prisma.apartment_invitesUncheckedCreateWithoutUsers_apartment_invites_used_byTousersInput[];
    connectOrCreate?: Prisma.apartment_invitesCreateOrConnectWithoutUsers_apartment_invites_used_byTousersInput | Prisma.apartment_invitesCreateOrConnectWithoutUsers_apartment_invites_used_byTousersInput[];
    createMany?: Prisma.apartment_invitesCreateManyUsers_apartment_invites_used_byTousersInputEnvelope;
    connect?: Prisma.apartment_invitesWhereUniqueInput | Prisma.apartment_invitesWhereUniqueInput[];
};
export type apartment_invitesCreateNestedOneWithoutUsers_users_invite_idToapartment_invitesInput = {
    create?: Prisma.XOR<Prisma.apartment_invitesCreateWithoutUsers_users_invite_idToapartment_invitesInput, Prisma.apartment_invitesUncheckedCreateWithoutUsers_users_invite_idToapartment_invitesInput>;
    connectOrCreate?: Prisma.apartment_invitesCreateOrConnectWithoutUsers_users_invite_idToapartment_invitesInput;
    connect?: Prisma.apartment_invitesWhereUniqueInput;
};
export type apartment_invitesUncheckedCreateNestedManyWithoutUsers_apartment_invites_invited_byTousersInput = {
    create?: Prisma.XOR<Prisma.apartment_invitesCreateWithoutUsers_apartment_invites_invited_byTousersInput, Prisma.apartment_invitesUncheckedCreateWithoutUsers_apartment_invites_invited_byTousersInput> | Prisma.apartment_invitesCreateWithoutUsers_apartment_invites_invited_byTousersInput[] | Prisma.apartment_invitesUncheckedCreateWithoutUsers_apartment_invites_invited_byTousersInput[];
    connectOrCreate?: Prisma.apartment_invitesCreateOrConnectWithoutUsers_apartment_invites_invited_byTousersInput | Prisma.apartment_invitesCreateOrConnectWithoutUsers_apartment_invites_invited_byTousersInput[];
    createMany?: Prisma.apartment_invitesCreateManyUsers_apartment_invites_invited_byTousersInputEnvelope;
    connect?: Prisma.apartment_invitesWhereUniqueInput | Prisma.apartment_invitesWhereUniqueInput[];
};
export type apartment_invitesUncheckedCreateNestedManyWithoutUsers_apartment_invites_used_byTousersInput = {
    create?: Prisma.XOR<Prisma.apartment_invitesCreateWithoutUsers_apartment_invites_used_byTousersInput, Prisma.apartment_invitesUncheckedCreateWithoutUsers_apartment_invites_used_byTousersInput> | Prisma.apartment_invitesCreateWithoutUsers_apartment_invites_used_byTousersInput[] | Prisma.apartment_invitesUncheckedCreateWithoutUsers_apartment_invites_used_byTousersInput[];
    connectOrCreate?: Prisma.apartment_invitesCreateOrConnectWithoutUsers_apartment_invites_used_byTousersInput | Prisma.apartment_invitesCreateOrConnectWithoutUsers_apartment_invites_used_byTousersInput[];
    createMany?: Prisma.apartment_invitesCreateManyUsers_apartment_invites_used_byTousersInputEnvelope;
    connect?: Prisma.apartment_invitesWhereUniqueInput | Prisma.apartment_invitesWhereUniqueInput[];
};
export type apartment_invitesUpdateManyWithoutUsers_apartment_invites_invited_byTousersNestedInput = {
    create?: Prisma.XOR<Prisma.apartment_invitesCreateWithoutUsers_apartment_invites_invited_byTousersInput, Prisma.apartment_invitesUncheckedCreateWithoutUsers_apartment_invites_invited_byTousersInput> | Prisma.apartment_invitesCreateWithoutUsers_apartment_invites_invited_byTousersInput[] | Prisma.apartment_invitesUncheckedCreateWithoutUsers_apartment_invites_invited_byTousersInput[];
    connectOrCreate?: Prisma.apartment_invitesCreateOrConnectWithoutUsers_apartment_invites_invited_byTousersInput | Prisma.apartment_invitesCreateOrConnectWithoutUsers_apartment_invites_invited_byTousersInput[];
    upsert?: Prisma.apartment_invitesUpsertWithWhereUniqueWithoutUsers_apartment_invites_invited_byTousersInput | Prisma.apartment_invitesUpsertWithWhereUniqueWithoutUsers_apartment_invites_invited_byTousersInput[];
    createMany?: Prisma.apartment_invitesCreateManyUsers_apartment_invites_invited_byTousersInputEnvelope;
    set?: Prisma.apartment_invitesWhereUniqueInput | Prisma.apartment_invitesWhereUniqueInput[];
    disconnect?: Prisma.apartment_invitesWhereUniqueInput | Prisma.apartment_invitesWhereUniqueInput[];
    delete?: Prisma.apartment_invitesWhereUniqueInput | Prisma.apartment_invitesWhereUniqueInput[];
    connect?: Prisma.apartment_invitesWhereUniqueInput | Prisma.apartment_invitesWhereUniqueInput[];
    update?: Prisma.apartment_invitesUpdateWithWhereUniqueWithoutUsers_apartment_invites_invited_byTousersInput | Prisma.apartment_invitesUpdateWithWhereUniqueWithoutUsers_apartment_invites_invited_byTousersInput[];
    updateMany?: Prisma.apartment_invitesUpdateManyWithWhereWithoutUsers_apartment_invites_invited_byTousersInput | Prisma.apartment_invitesUpdateManyWithWhereWithoutUsers_apartment_invites_invited_byTousersInput[];
    deleteMany?: Prisma.apartment_invitesScalarWhereInput | Prisma.apartment_invitesScalarWhereInput[];
};
export type apartment_invitesUpdateManyWithoutUsers_apartment_invites_used_byTousersNestedInput = {
    create?: Prisma.XOR<Prisma.apartment_invitesCreateWithoutUsers_apartment_invites_used_byTousersInput, Prisma.apartment_invitesUncheckedCreateWithoutUsers_apartment_invites_used_byTousersInput> | Prisma.apartment_invitesCreateWithoutUsers_apartment_invites_used_byTousersInput[] | Prisma.apartment_invitesUncheckedCreateWithoutUsers_apartment_invites_used_byTousersInput[];
    connectOrCreate?: Prisma.apartment_invitesCreateOrConnectWithoutUsers_apartment_invites_used_byTousersInput | Prisma.apartment_invitesCreateOrConnectWithoutUsers_apartment_invites_used_byTousersInput[];
    upsert?: Prisma.apartment_invitesUpsertWithWhereUniqueWithoutUsers_apartment_invites_used_byTousersInput | Prisma.apartment_invitesUpsertWithWhereUniqueWithoutUsers_apartment_invites_used_byTousersInput[];
    createMany?: Prisma.apartment_invitesCreateManyUsers_apartment_invites_used_byTousersInputEnvelope;
    set?: Prisma.apartment_invitesWhereUniqueInput | Prisma.apartment_invitesWhereUniqueInput[];
    disconnect?: Prisma.apartment_invitesWhereUniqueInput | Prisma.apartment_invitesWhereUniqueInput[];
    delete?: Prisma.apartment_invitesWhereUniqueInput | Prisma.apartment_invitesWhereUniqueInput[];
    connect?: Prisma.apartment_invitesWhereUniqueInput | Prisma.apartment_invitesWhereUniqueInput[];
    update?: Prisma.apartment_invitesUpdateWithWhereUniqueWithoutUsers_apartment_invites_used_byTousersInput | Prisma.apartment_invitesUpdateWithWhereUniqueWithoutUsers_apartment_invites_used_byTousersInput[];
    updateMany?: Prisma.apartment_invitesUpdateManyWithWhereWithoutUsers_apartment_invites_used_byTousersInput | Prisma.apartment_invitesUpdateManyWithWhereWithoutUsers_apartment_invites_used_byTousersInput[];
    deleteMany?: Prisma.apartment_invitesScalarWhereInput | Prisma.apartment_invitesScalarWhereInput[];
};
export type apartment_invitesUpdateOneWithoutUsers_users_invite_idToapartment_invitesNestedInput = {
    create?: Prisma.XOR<Prisma.apartment_invitesCreateWithoutUsers_users_invite_idToapartment_invitesInput, Prisma.apartment_invitesUncheckedCreateWithoutUsers_users_invite_idToapartment_invitesInput>;
    connectOrCreate?: Prisma.apartment_invitesCreateOrConnectWithoutUsers_users_invite_idToapartment_invitesInput;
    upsert?: Prisma.apartment_invitesUpsertWithoutUsers_users_invite_idToapartment_invitesInput;
    disconnect?: Prisma.apartment_invitesWhereInput | boolean;
    delete?: Prisma.apartment_invitesWhereInput | boolean;
    connect?: Prisma.apartment_invitesWhereUniqueInput;
    update?: Prisma.XOR<Prisma.XOR<Prisma.apartment_invitesUpdateToOneWithWhereWithoutUsers_users_invite_idToapartment_invitesInput, Prisma.apartment_invitesUpdateWithoutUsers_users_invite_idToapartment_invitesInput>, Prisma.apartment_invitesUncheckedUpdateWithoutUsers_users_invite_idToapartment_invitesInput>;
};
export type apartment_invitesUncheckedUpdateManyWithoutUsers_apartment_invites_invited_byTousersNestedInput = {
    create?: Prisma.XOR<Prisma.apartment_invitesCreateWithoutUsers_apartment_invites_invited_byTousersInput, Prisma.apartment_invitesUncheckedCreateWithoutUsers_apartment_invites_invited_byTousersInput> | Prisma.apartment_invitesCreateWithoutUsers_apartment_invites_invited_byTousersInput[] | Prisma.apartment_invitesUncheckedCreateWithoutUsers_apartment_invites_invited_byTousersInput[];
    connectOrCreate?: Prisma.apartment_invitesCreateOrConnectWithoutUsers_apartment_invites_invited_byTousersInput | Prisma.apartment_invitesCreateOrConnectWithoutUsers_apartment_invites_invited_byTousersInput[];
    upsert?: Prisma.apartment_invitesUpsertWithWhereUniqueWithoutUsers_apartment_invites_invited_byTousersInput | Prisma.apartment_invitesUpsertWithWhereUniqueWithoutUsers_apartment_invites_invited_byTousersInput[];
    createMany?: Prisma.apartment_invitesCreateManyUsers_apartment_invites_invited_byTousersInputEnvelope;
    set?: Prisma.apartment_invitesWhereUniqueInput | Prisma.apartment_invitesWhereUniqueInput[];
    disconnect?: Prisma.apartment_invitesWhereUniqueInput | Prisma.apartment_invitesWhereUniqueInput[];
    delete?: Prisma.apartment_invitesWhereUniqueInput | Prisma.apartment_invitesWhereUniqueInput[];
    connect?: Prisma.apartment_invitesWhereUniqueInput | Prisma.apartment_invitesWhereUniqueInput[];
    update?: Prisma.apartment_invitesUpdateWithWhereUniqueWithoutUsers_apartment_invites_invited_byTousersInput | Prisma.apartment_invitesUpdateWithWhereUniqueWithoutUsers_apartment_invites_invited_byTousersInput[];
    updateMany?: Prisma.apartment_invitesUpdateManyWithWhereWithoutUsers_apartment_invites_invited_byTousersInput | Prisma.apartment_invitesUpdateManyWithWhereWithoutUsers_apartment_invites_invited_byTousersInput[];
    deleteMany?: Prisma.apartment_invitesScalarWhereInput | Prisma.apartment_invitesScalarWhereInput[];
};
export type apartment_invitesUncheckedUpdateManyWithoutUsers_apartment_invites_used_byTousersNestedInput = {
    create?: Prisma.XOR<Prisma.apartment_invitesCreateWithoutUsers_apartment_invites_used_byTousersInput, Prisma.apartment_invitesUncheckedCreateWithoutUsers_apartment_invites_used_byTousersInput> | Prisma.apartment_invitesCreateWithoutUsers_apartment_invites_used_byTousersInput[] | Prisma.apartment_invitesUncheckedCreateWithoutUsers_apartment_invites_used_byTousersInput[];
    connectOrCreate?: Prisma.apartment_invitesCreateOrConnectWithoutUsers_apartment_invites_used_byTousersInput | Prisma.apartment_invitesCreateOrConnectWithoutUsers_apartment_invites_used_byTousersInput[];
    upsert?: Prisma.apartment_invitesUpsertWithWhereUniqueWithoutUsers_apartment_invites_used_byTousersInput | Prisma.apartment_invitesUpsertWithWhereUniqueWithoutUsers_apartment_invites_used_byTousersInput[];
    createMany?: Prisma.apartment_invitesCreateManyUsers_apartment_invites_used_byTousersInputEnvelope;
    set?: Prisma.apartment_invitesWhereUniqueInput | Prisma.apartment_invitesWhereUniqueInput[];
    disconnect?: Prisma.apartment_invitesWhereUniqueInput | Prisma.apartment_invitesWhereUniqueInput[];
    delete?: Prisma.apartment_invitesWhereUniqueInput | Prisma.apartment_invitesWhereUniqueInput[];
    connect?: Prisma.apartment_invitesWhereUniqueInput | Prisma.apartment_invitesWhereUniqueInput[];
    update?: Prisma.apartment_invitesUpdateWithWhereUniqueWithoutUsers_apartment_invites_used_byTousersInput | Prisma.apartment_invitesUpdateWithWhereUniqueWithoutUsers_apartment_invites_used_byTousersInput[];
    updateMany?: Prisma.apartment_invitesUpdateManyWithWhereWithoutUsers_apartment_invites_used_byTousersInput | Prisma.apartment_invitesUpdateManyWithWhereWithoutUsers_apartment_invites_used_byTousersInput[];
    deleteMany?: Prisma.apartment_invitesScalarWhereInput | Prisma.apartment_invitesScalarWhereInput[];
};
export type apartment_invitesCreateWithoutApartmentsInput = {
    id?: string;
    invited_email: string;
    token: string;
    token_expires_at: Date | string;
    unit_number?: string | null;
    status?: $Enums.invite_status;
    notes?: string | null;
    created_at?: Date | string;
    updated_at?: Date | string;
    users_apartment_invites_invited_byTousers?: Prisma.usersCreateNestedOneWithoutApartment_invites_apartment_invites_invited_byTousersInput;
    users_apartment_invites_used_byTousers?: Prisma.usersCreateNestedOneWithoutApartment_invites_apartment_invites_used_byTousersInput;
    users_users_invite_idToapartment_invites?: Prisma.usersCreateNestedManyWithoutApartment_invites_users_invite_idToapartment_invitesInput;
};
export type apartment_invitesUncheckedCreateWithoutApartmentsInput = {
    id?: string;
    invited_email: string;
    token: string;
    token_expires_at: Date | string;
    unit_number?: string | null;
    status?: $Enums.invite_status;
    invited_by?: string | null;
    used_by?: string | null;
    notes?: string | null;
    created_at?: Date | string;
    updated_at?: Date | string;
    users_users_invite_idToapartment_invites?: Prisma.usersUncheckedCreateNestedManyWithoutApartment_invites_users_invite_idToapartment_invitesInput;
};
export type apartment_invitesCreateOrConnectWithoutApartmentsInput = {
    where: Prisma.apartment_invitesWhereUniqueInput;
    create: Prisma.XOR<Prisma.apartment_invitesCreateWithoutApartmentsInput, Prisma.apartment_invitesUncheckedCreateWithoutApartmentsInput>;
};
export type apartment_invitesCreateManyApartmentsInputEnvelope = {
    data: Prisma.apartment_invitesCreateManyApartmentsInput | Prisma.apartment_invitesCreateManyApartmentsInput[];
    skipDuplicates?: boolean;
};
export type apartment_invitesUpsertWithWhereUniqueWithoutApartmentsInput = {
    where: Prisma.apartment_invitesWhereUniqueInput;
    update: Prisma.XOR<Prisma.apartment_invitesUpdateWithoutApartmentsInput, Prisma.apartment_invitesUncheckedUpdateWithoutApartmentsInput>;
    create: Prisma.XOR<Prisma.apartment_invitesCreateWithoutApartmentsInput, Prisma.apartment_invitesUncheckedCreateWithoutApartmentsInput>;
};
export type apartment_invitesUpdateWithWhereUniqueWithoutApartmentsInput = {
    where: Prisma.apartment_invitesWhereUniqueInput;
    data: Prisma.XOR<Prisma.apartment_invitesUpdateWithoutApartmentsInput, Prisma.apartment_invitesUncheckedUpdateWithoutApartmentsInput>;
};
export type apartment_invitesUpdateManyWithWhereWithoutApartmentsInput = {
    where: Prisma.apartment_invitesScalarWhereInput;
    data: Prisma.XOR<Prisma.apartment_invitesUpdateManyMutationInput, Prisma.apartment_invitesUncheckedUpdateManyWithoutApartmentsInput>;
};
export type apartment_invitesScalarWhereInput = {
    AND?: Prisma.apartment_invitesScalarWhereInput | Prisma.apartment_invitesScalarWhereInput[];
    OR?: Prisma.apartment_invitesScalarWhereInput[];
    NOT?: Prisma.apartment_invitesScalarWhereInput | Prisma.apartment_invitesScalarWhereInput[];
    id?: Prisma.UuidFilter<"apartment_invites"> | string;
    apartment_id?: Prisma.UuidFilter<"apartment_invites"> | string;
    invited_email?: Prisma.StringFilter<"apartment_invites"> | string;
    token?: Prisma.StringFilter<"apartment_invites"> | string;
    token_expires_at?: Prisma.DateTimeFilter<"apartment_invites"> | Date | string;
    unit_number?: Prisma.StringNullableFilter<"apartment_invites"> | string | null;
    status?: Prisma.Enuminvite_statusFilter<"apartment_invites"> | $Enums.invite_status;
    invited_by?: Prisma.UuidNullableFilter<"apartment_invites"> | string | null;
    used_by?: Prisma.UuidNullableFilter<"apartment_invites"> | string | null;
    notes?: Prisma.StringNullableFilter<"apartment_invites"> | string | null;
    created_at?: Prisma.DateTimeFilter<"apartment_invites"> | Date | string;
    updated_at?: Prisma.DateTimeFilter<"apartment_invites"> | Date | string;
};
export type apartment_invitesCreateWithoutUsers_apartment_invites_invited_byTousersInput = {
    id?: string;
    invited_email: string;
    token: string;
    token_expires_at: Date | string;
    unit_number?: string | null;
    status?: $Enums.invite_status;
    notes?: string | null;
    created_at?: Date | string;
    updated_at?: Date | string;
    apartments: Prisma.apartmentsCreateNestedOneWithoutApartment_invitesInput;
    users_apartment_invites_used_byTousers?: Prisma.usersCreateNestedOneWithoutApartment_invites_apartment_invites_used_byTousersInput;
    users_users_invite_idToapartment_invites?: Prisma.usersCreateNestedManyWithoutApartment_invites_users_invite_idToapartment_invitesInput;
};
export type apartment_invitesUncheckedCreateWithoutUsers_apartment_invites_invited_byTousersInput = {
    id?: string;
    apartment_id: string;
    invited_email: string;
    token: string;
    token_expires_at: Date | string;
    unit_number?: string | null;
    status?: $Enums.invite_status;
    used_by?: string | null;
    notes?: string | null;
    created_at?: Date | string;
    updated_at?: Date | string;
    users_users_invite_idToapartment_invites?: Prisma.usersUncheckedCreateNestedManyWithoutApartment_invites_users_invite_idToapartment_invitesInput;
};
export type apartment_invitesCreateOrConnectWithoutUsers_apartment_invites_invited_byTousersInput = {
    where: Prisma.apartment_invitesWhereUniqueInput;
    create: Prisma.XOR<Prisma.apartment_invitesCreateWithoutUsers_apartment_invites_invited_byTousersInput, Prisma.apartment_invitesUncheckedCreateWithoutUsers_apartment_invites_invited_byTousersInput>;
};
export type apartment_invitesCreateManyUsers_apartment_invites_invited_byTousersInputEnvelope = {
    data: Prisma.apartment_invitesCreateManyUsers_apartment_invites_invited_byTousersInput | Prisma.apartment_invitesCreateManyUsers_apartment_invites_invited_byTousersInput[];
    skipDuplicates?: boolean;
};
export type apartment_invitesCreateWithoutUsers_apartment_invites_used_byTousersInput = {
    id?: string;
    invited_email: string;
    token: string;
    token_expires_at: Date | string;
    unit_number?: string | null;
    status?: $Enums.invite_status;
    notes?: string | null;
    created_at?: Date | string;
    updated_at?: Date | string;
    apartments: Prisma.apartmentsCreateNestedOneWithoutApartment_invitesInput;
    users_apartment_invites_invited_byTousers?: Prisma.usersCreateNestedOneWithoutApartment_invites_apartment_invites_invited_byTousersInput;
    users_users_invite_idToapartment_invites?: Prisma.usersCreateNestedManyWithoutApartment_invites_users_invite_idToapartment_invitesInput;
};
export type apartment_invitesUncheckedCreateWithoutUsers_apartment_invites_used_byTousersInput = {
    id?: string;
    apartment_id: string;
    invited_email: string;
    token: string;
    token_expires_at: Date | string;
    unit_number?: string | null;
    status?: $Enums.invite_status;
    invited_by?: string | null;
    notes?: string | null;
    created_at?: Date | string;
    updated_at?: Date | string;
    users_users_invite_idToapartment_invites?: Prisma.usersUncheckedCreateNestedManyWithoutApartment_invites_users_invite_idToapartment_invitesInput;
};
export type apartment_invitesCreateOrConnectWithoutUsers_apartment_invites_used_byTousersInput = {
    where: Prisma.apartment_invitesWhereUniqueInput;
    create: Prisma.XOR<Prisma.apartment_invitesCreateWithoutUsers_apartment_invites_used_byTousersInput, Prisma.apartment_invitesUncheckedCreateWithoutUsers_apartment_invites_used_byTousersInput>;
};
export type apartment_invitesCreateManyUsers_apartment_invites_used_byTousersInputEnvelope = {
    data: Prisma.apartment_invitesCreateManyUsers_apartment_invites_used_byTousersInput | Prisma.apartment_invitesCreateManyUsers_apartment_invites_used_byTousersInput[];
    skipDuplicates?: boolean;
};
export type apartment_invitesCreateWithoutUsers_users_invite_idToapartment_invitesInput = {
    id?: string;
    invited_email: string;
    token: string;
    token_expires_at: Date | string;
    unit_number?: string | null;
    status?: $Enums.invite_status;
    notes?: string | null;
    created_at?: Date | string;
    updated_at?: Date | string;
    apartments: Prisma.apartmentsCreateNestedOneWithoutApartment_invitesInput;
    users_apartment_invites_invited_byTousers?: Prisma.usersCreateNestedOneWithoutApartment_invites_apartment_invites_invited_byTousersInput;
    users_apartment_invites_used_byTousers?: Prisma.usersCreateNestedOneWithoutApartment_invites_apartment_invites_used_byTousersInput;
};
export type apartment_invitesUncheckedCreateWithoutUsers_users_invite_idToapartment_invitesInput = {
    id?: string;
    apartment_id: string;
    invited_email: string;
    token: string;
    token_expires_at: Date | string;
    unit_number?: string | null;
    status?: $Enums.invite_status;
    invited_by?: string | null;
    used_by?: string | null;
    notes?: string | null;
    created_at?: Date | string;
    updated_at?: Date | string;
};
export type apartment_invitesCreateOrConnectWithoutUsers_users_invite_idToapartment_invitesInput = {
    where: Prisma.apartment_invitesWhereUniqueInput;
    create: Prisma.XOR<Prisma.apartment_invitesCreateWithoutUsers_users_invite_idToapartment_invitesInput, Prisma.apartment_invitesUncheckedCreateWithoutUsers_users_invite_idToapartment_invitesInput>;
};
export type apartment_invitesUpsertWithWhereUniqueWithoutUsers_apartment_invites_invited_byTousersInput = {
    where: Prisma.apartment_invitesWhereUniqueInput;
    update: Prisma.XOR<Prisma.apartment_invitesUpdateWithoutUsers_apartment_invites_invited_byTousersInput, Prisma.apartment_invitesUncheckedUpdateWithoutUsers_apartment_invites_invited_byTousersInput>;
    create: Prisma.XOR<Prisma.apartment_invitesCreateWithoutUsers_apartment_invites_invited_byTousersInput, Prisma.apartment_invitesUncheckedCreateWithoutUsers_apartment_invites_invited_byTousersInput>;
};
export type apartment_invitesUpdateWithWhereUniqueWithoutUsers_apartment_invites_invited_byTousersInput = {
    where: Prisma.apartment_invitesWhereUniqueInput;
    data: Prisma.XOR<Prisma.apartment_invitesUpdateWithoutUsers_apartment_invites_invited_byTousersInput, Prisma.apartment_invitesUncheckedUpdateWithoutUsers_apartment_invites_invited_byTousersInput>;
};
export type apartment_invitesUpdateManyWithWhereWithoutUsers_apartment_invites_invited_byTousersInput = {
    where: Prisma.apartment_invitesScalarWhereInput;
    data: Prisma.XOR<Prisma.apartment_invitesUpdateManyMutationInput, Prisma.apartment_invitesUncheckedUpdateManyWithoutUsers_apartment_invites_invited_byTousersInput>;
};
export type apartment_invitesUpsertWithWhereUniqueWithoutUsers_apartment_invites_used_byTousersInput = {
    where: Prisma.apartment_invitesWhereUniqueInput;
    update: Prisma.XOR<Prisma.apartment_invitesUpdateWithoutUsers_apartment_invites_used_byTousersInput, Prisma.apartment_invitesUncheckedUpdateWithoutUsers_apartment_invites_used_byTousersInput>;
    create: Prisma.XOR<Prisma.apartment_invitesCreateWithoutUsers_apartment_invites_used_byTousersInput, Prisma.apartment_invitesUncheckedCreateWithoutUsers_apartment_invites_used_byTousersInput>;
};
export type apartment_invitesUpdateWithWhereUniqueWithoutUsers_apartment_invites_used_byTousersInput = {
    where: Prisma.apartment_invitesWhereUniqueInput;
    data: Prisma.XOR<Prisma.apartment_invitesUpdateWithoutUsers_apartment_invites_used_byTousersInput, Prisma.apartment_invitesUncheckedUpdateWithoutUsers_apartment_invites_used_byTousersInput>;
};
export type apartment_invitesUpdateManyWithWhereWithoutUsers_apartment_invites_used_byTousersInput = {
    where: Prisma.apartment_invitesScalarWhereInput;
    data: Prisma.XOR<Prisma.apartment_invitesUpdateManyMutationInput, Prisma.apartment_invitesUncheckedUpdateManyWithoutUsers_apartment_invites_used_byTousersInput>;
};
export type apartment_invitesUpsertWithoutUsers_users_invite_idToapartment_invitesInput = {
    update: Prisma.XOR<Prisma.apartment_invitesUpdateWithoutUsers_users_invite_idToapartment_invitesInput, Prisma.apartment_invitesUncheckedUpdateWithoutUsers_users_invite_idToapartment_invitesInput>;
    create: Prisma.XOR<Prisma.apartment_invitesCreateWithoutUsers_users_invite_idToapartment_invitesInput, Prisma.apartment_invitesUncheckedCreateWithoutUsers_users_invite_idToapartment_invitesInput>;
    where?: Prisma.apartment_invitesWhereInput;
};
export type apartment_invitesUpdateToOneWithWhereWithoutUsers_users_invite_idToapartment_invitesInput = {
    where?: Prisma.apartment_invitesWhereInput;
    data: Prisma.XOR<Prisma.apartment_invitesUpdateWithoutUsers_users_invite_idToapartment_invitesInput, Prisma.apartment_invitesUncheckedUpdateWithoutUsers_users_invite_idToapartment_invitesInput>;
};
export type apartment_invitesUpdateWithoutUsers_users_invite_idToapartment_invitesInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    invited_email?: Prisma.StringFieldUpdateOperationsInput | string;
    token?: Prisma.StringFieldUpdateOperationsInput | string;
    token_expires_at?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    unit_number?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    status?: Prisma.Enuminvite_statusFieldUpdateOperationsInput | $Enums.invite_status;
    notes?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    created_at?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    updated_at?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    apartments?: Prisma.apartmentsUpdateOneRequiredWithoutApartment_invitesNestedInput;
    users_apartment_invites_invited_byTousers?: Prisma.usersUpdateOneWithoutApartment_invites_apartment_invites_invited_byTousersNestedInput;
    users_apartment_invites_used_byTousers?: Prisma.usersUpdateOneWithoutApartment_invites_apartment_invites_used_byTousersNestedInput;
};
export type apartment_invitesUncheckedUpdateWithoutUsers_users_invite_idToapartment_invitesInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    apartment_id?: Prisma.StringFieldUpdateOperationsInput | string;
    invited_email?: Prisma.StringFieldUpdateOperationsInput | string;
    token?: Prisma.StringFieldUpdateOperationsInput | string;
    token_expires_at?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    unit_number?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    status?: Prisma.Enuminvite_statusFieldUpdateOperationsInput | $Enums.invite_status;
    invited_by?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    used_by?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    notes?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    created_at?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    updated_at?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
};
export type apartment_invitesCreateManyApartmentsInput = {
    id?: string;
    invited_email: string;
    token: string;
    token_expires_at: Date | string;
    unit_number?: string | null;
    status?: $Enums.invite_status;
    invited_by?: string | null;
    used_by?: string | null;
    notes?: string | null;
    created_at?: Date | string;
    updated_at?: Date | string;
};
export type apartment_invitesUpdateWithoutApartmentsInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    invited_email?: Prisma.StringFieldUpdateOperationsInput | string;
    token?: Prisma.StringFieldUpdateOperationsInput | string;
    token_expires_at?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    unit_number?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    status?: Prisma.Enuminvite_statusFieldUpdateOperationsInput | $Enums.invite_status;
    notes?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    created_at?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    updated_at?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    users_apartment_invites_invited_byTousers?: Prisma.usersUpdateOneWithoutApartment_invites_apartment_invites_invited_byTousersNestedInput;
    users_apartment_invites_used_byTousers?: Prisma.usersUpdateOneWithoutApartment_invites_apartment_invites_used_byTousersNestedInput;
    users_users_invite_idToapartment_invites?: Prisma.usersUpdateManyWithoutApartment_invites_users_invite_idToapartment_invitesNestedInput;
};
export type apartment_invitesUncheckedUpdateWithoutApartmentsInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    invited_email?: Prisma.StringFieldUpdateOperationsInput | string;
    token?: Prisma.StringFieldUpdateOperationsInput | string;
    token_expires_at?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    unit_number?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    status?: Prisma.Enuminvite_statusFieldUpdateOperationsInput | $Enums.invite_status;
    invited_by?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    used_by?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    notes?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    created_at?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    updated_at?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    users_users_invite_idToapartment_invites?: Prisma.usersUncheckedUpdateManyWithoutApartment_invites_users_invite_idToapartment_invitesNestedInput;
};
export type apartment_invitesUncheckedUpdateManyWithoutApartmentsInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    invited_email?: Prisma.StringFieldUpdateOperationsInput | string;
    token?: Prisma.StringFieldUpdateOperationsInput | string;
    token_expires_at?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    unit_number?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    status?: Prisma.Enuminvite_statusFieldUpdateOperationsInput | $Enums.invite_status;
    invited_by?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    used_by?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    notes?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    created_at?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    updated_at?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
};
export type apartment_invitesCreateManyUsers_apartment_invites_invited_byTousersInput = {
    id?: string;
    apartment_id: string;
    invited_email: string;
    token: string;
    token_expires_at: Date | string;
    unit_number?: string | null;
    status?: $Enums.invite_status;
    used_by?: string | null;
    notes?: string | null;
    created_at?: Date | string;
    updated_at?: Date | string;
};
export type apartment_invitesCreateManyUsers_apartment_invites_used_byTousersInput = {
    id?: string;
    apartment_id: string;
    invited_email: string;
    token: string;
    token_expires_at: Date | string;
    unit_number?: string | null;
    status?: $Enums.invite_status;
    invited_by?: string | null;
    notes?: string | null;
    created_at?: Date | string;
    updated_at?: Date | string;
};
export type apartment_invitesUpdateWithoutUsers_apartment_invites_invited_byTousersInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    invited_email?: Prisma.StringFieldUpdateOperationsInput | string;
    token?: Prisma.StringFieldUpdateOperationsInput | string;
    token_expires_at?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    unit_number?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    status?: Prisma.Enuminvite_statusFieldUpdateOperationsInput | $Enums.invite_status;
    notes?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    created_at?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    updated_at?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    apartments?: Prisma.apartmentsUpdateOneRequiredWithoutApartment_invitesNestedInput;
    users_apartment_invites_used_byTousers?: Prisma.usersUpdateOneWithoutApartment_invites_apartment_invites_used_byTousersNestedInput;
    users_users_invite_idToapartment_invites?: Prisma.usersUpdateManyWithoutApartment_invites_users_invite_idToapartment_invitesNestedInput;
};
export type apartment_invitesUncheckedUpdateWithoutUsers_apartment_invites_invited_byTousersInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    apartment_id?: Prisma.StringFieldUpdateOperationsInput | string;
    invited_email?: Prisma.StringFieldUpdateOperationsInput | string;
    token?: Prisma.StringFieldUpdateOperationsInput | string;
    token_expires_at?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    unit_number?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    status?: Prisma.Enuminvite_statusFieldUpdateOperationsInput | $Enums.invite_status;
    used_by?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    notes?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    created_at?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    updated_at?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    users_users_invite_idToapartment_invites?: Prisma.usersUncheckedUpdateManyWithoutApartment_invites_users_invite_idToapartment_invitesNestedInput;
};
export type apartment_invitesUncheckedUpdateManyWithoutUsers_apartment_invites_invited_byTousersInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    apartment_id?: Prisma.StringFieldUpdateOperationsInput | string;
    invited_email?: Prisma.StringFieldUpdateOperationsInput | string;
    token?: Prisma.StringFieldUpdateOperationsInput | string;
    token_expires_at?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    unit_number?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    status?: Prisma.Enuminvite_statusFieldUpdateOperationsInput | $Enums.invite_status;
    used_by?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    notes?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    created_at?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    updated_at?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
};
export type apartment_invitesUpdateWithoutUsers_apartment_invites_used_byTousersInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    invited_email?: Prisma.StringFieldUpdateOperationsInput | string;
    token?: Prisma.StringFieldUpdateOperationsInput | string;
    token_expires_at?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    unit_number?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    status?: Prisma.Enuminvite_statusFieldUpdateOperationsInput | $Enums.invite_status;
    notes?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    created_at?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    updated_at?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    apartments?: Prisma.apartmentsUpdateOneRequiredWithoutApartment_invitesNestedInput;
    users_apartment_invites_invited_byTousers?: Prisma.usersUpdateOneWithoutApartment_invites_apartment_invites_invited_byTousersNestedInput;
    users_users_invite_idToapartment_invites?: Prisma.usersUpdateManyWithoutApartment_invites_users_invite_idToapartment_invitesNestedInput;
};
export type apartment_invitesUncheckedUpdateWithoutUsers_apartment_invites_used_byTousersInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    apartment_id?: Prisma.StringFieldUpdateOperationsInput | string;
    invited_email?: Prisma.StringFieldUpdateOperationsInput | string;
    token?: Prisma.StringFieldUpdateOperationsInput | string;
    token_expires_at?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    unit_number?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    status?: Prisma.Enuminvite_statusFieldUpdateOperationsInput | $Enums.invite_status;
    invited_by?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    notes?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    created_at?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    updated_at?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    users_users_invite_idToapartment_invites?: Prisma.usersUncheckedUpdateManyWithoutApartment_invites_users_invite_idToapartment_invitesNestedInput;
};
export type apartment_invitesUncheckedUpdateManyWithoutUsers_apartment_invites_used_byTousersInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    apartment_id?: Prisma.StringFieldUpdateOperationsInput | string;
    invited_email?: Prisma.StringFieldUpdateOperationsInput | string;
    token?: Prisma.StringFieldUpdateOperationsInput | string;
    token_expires_at?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    unit_number?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    status?: Prisma.Enuminvite_statusFieldUpdateOperationsInput | $Enums.invite_status;
    invited_by?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    notes?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    created_at?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    updated_at?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
};
export type Apartment_invitesCountOutputType = {
    users_users_invite_idToapartment_invites: number;
};
export type Apartment_invitesCountOutputTypeSelect<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    users_users_invite_idToapartment_invites?: boolean | Apartment_invitesCountOutputTypeCountUsers_users_invite_idToapartment_invitesArgs;
};
export type Apartment_invitesCountOutputTypeDefaultArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.Apartment_invitesCountOutputTypeSelect<ExtArgs> | null;
};
export type Apartment_invitesCountOutputTypeCountUsers_users_invite_idToapartment_invitesArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    where?: Prisma.usersWhereInput;
};
export type apartment_invitesSelect<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetSelect<{
    id?: boolean;
    apartment_id?: boolean;
    invited_email?: boolean;
    token?: boolean;
    token_expires_at?: boolean;
    unit_number?: boolean;
    status?: boolean;
    invited_by?: boolean;
    used_by?: boolean;
    notes?: boolean;
    created_at?: boolean;
    updated_at?: boolean;
    apartments?: boolean | Prisma.apartmentsDefaultArgs<ExtArgs>;
    users_apartment_invites_invited_byTousers?: boolean | Prisma.apartment_invites$users_apartment_invites_invited_byTousersArgs<ExtArgs>;
    users_apartment_invites_used_byTousers?: boolean | Prisma.apartment_invites$users_apartment_invites_used_byTousersArgs<ExtArgs>;
    users_users_invite_idToapartment_invites?: boolean | Prisma.apartment_invites$users_users_invite_idToapartment_invitesArgs<ExtArgs>;
    _count?: boolean | Prisma.Apartment_invitesCountOutputTypeDefaultArgs<ExtArgs>;
}, ExtArgs["result"]["apartment_invites"]>;
export type apartment_invitesSelectCreateManyAndReturn<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetSelect<{
    id?: boolean;
    apartment_id?: boolean;
    invited_email?: boolean;
    token?: boolean;
    token_expires_at?: boolean;
    unit_number?: boolean;
    status?: boolean;
    invited_by?: boolean;
    used_by?: boolean;
    notes?: boolean;
    created_at?: boolean;
    updated_at?: boolean;
    apartments?: boolean | Prisma.apartmentsDefaultArgs<ExtArgs>;
    users_apartment_invites_invited_byTousers?: boolean | Prisma.apartment_invites$users_apartment_invites_invited_byTousersArgs<ExtArgs>;
    users_apartment_invites_used_byTousers?: boolean | Prisma.apartment_invites$users_apartment_invites_used_byTousersArgs<ExtArgs>;
}, ExtArgs["result"]["apartment_invites"]>;
export type apartment_invitesSelectUpdateManyAndReturn<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetSelect<{
    id?: boolean;
    apartment_id?: boolean;
    invited_email?: boolean;
    token?: boolean;
    token_expires_at?: boolean;
    unit_number?: boolean;
    status?: boolean;
    invited_by?: boolean;
    used_by?: boolean;
    notes?: boolean;
    created_at?: boolean;
    updated_at?: boolean;
    apartments?: boolean | Prisma.apartmentsDefaultArgs<ExtArgs>;
    users_apartment_invites_invited_byTousers?: boolean | Prisma.apartment_invites$users_apartment_invites_invited_byTousersArgs<ExtArgs>;
    users_apartment_invites_used_byTousers?: boolean | Prisma.apartment_invites$users_apartment_invites_used_byTousersArgs<ExtArgs>;
}, ExtArgs["result"]["apartment_invites"]>;
export type apartment_invitesSelectScalar = {
    id?: boolean;
    apartment_id?: boolean;
    invited_email?: boolean;
    token?: boolean;
    token_expires_at?: boolean;
    unit_number?: boolean;
    status?: boolean;
    invited_by?: boolean;
    used_by?: boolean;
    notes?: boolean;
    created_at?: boolean;
    updated_at?: boolean;
};
export type apartment_invitesOmit<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetOmit<"id" | "apartment_id" | "invited_email" | "token" | "token_expires_at" | "unit_number" | "status" | "invited_by" | "used_by" | "notes" | "created_at" | "updated_at", ExtArgs["result"]["apartment_invites"]>;
export type apartment_invitesInclude<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    apartments?: boolean | Prisma.apartmentsDefaultArgs<ExtArgs>;
    users_apartment_invites_invited_byTousers?: boolean | Prisma.apartment_invites$users_apartment_invites_invited_byTousersArgs<ExtArgs>;
    users_apartment_invites_used_byTousers?: boolean | Prisma.apartment_invites$users_apartment_invites_used_byTousersArgs<ExtArgs>;
    users_users_invite_idToapartment_invites?: boolean | Prisma.apartment_invites$users_users_invite_idToapartment_invitesArgs<ExtArgs>;
    _count?: boolean | Prisma.Apartment_invitesCountOutputTypeDefaultArgs<ExtArgs>;
};
export type apartment_invitesIncludeCreateManyAndReturn<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    apartments?: boolean | Prisma.apartmentsDefaultArgs<ExtArgs>;
    users_apartment_invites_invited_byTousers?: boolean | Prisma.apartment_invites$users_apartment_invites_invited_byTousersArgs<ExtArgs>;
    users_apartment_invites_used_byTousers?: boolean | Prisma.apartment_invites$users_apartment_invites_used_byTousersArgs<ExtArgs>;
};
export type apartment_invitesIncludeUpdateManyAndReturn<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    apartments?: boolean | Prisma.apartmentsDefaultArgs<ExtArgs>;
    users_apartment_invites_invited_byTousers?: boolean | Prisma.apartment_invites$users_apartment_invites_invited_byTousersArgs<ExtArgs>;
    users_apartment_invites_used_byTousers?: boolean | Prisma.apartment_invites$users_apartment_invites_used_byTousersArgs<ExtArgs>;
};
export type $apartment_invitesPayload<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    name: "apartment_invites";
    objects: {
        apartments: Prisma.$apartmentsPayload<ExtArgs>;
        users_apartment_invites_invited_byTousers: Prisma.$usersPayload<ExtArgs> | null;
        users_apartment_invites_used_byTousers: Prisma.$usersPayload<ExtArgs> | null;
        users_users_invite_idToapartment_invites: Prisma.$usersPayload<ExtArgs>[];
    };
    scalars: runtime.Types.Extensions.GetPayloadResult<{
        id: string;
        apartment_id: string;
        invited_email: string;
        token: string;
        token_expires_at: Date;
        unit_number: string | null;
        status: $Enums.invite_status;
        invited_by: string | null;
        used_by: string | null;
        notes: string | null;
        created_at: Date;
        updated_at: Date;
    }, ExtArgs["result"]["apartment_invites"]>;
    composites: {};
};
export type apartment_invitesGetPayload<S extends boolean | null | undefined | apartment_invitesDefaultArgs> = runtime.Types.Result.GetResult<Prisma.$apartment_invitesPayload, S>;
export type apartment_invitesCountArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = Omit<apartment_invitesFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
    select?: Apartment_invitesCountAggregateInputType | true;
};
export interface apartment_invitesDelegate<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: {
        types: Prisma.TypeMap<ExtArgs>['model']['apartment_invites'];
        meta: {
            name: 'apartment_invites';
        };
    };
    findUnique<T extends apartment_invitesFindUniqueArgs>(args: Prisma.SelectSubset<T, apartment_invitesFindUniqueArgs<ExtArgs>>): Prisma.Prisma__apartment_invitesClient<runtime.Types.Result.GetResult<Prisma.$apartment_invitesPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>;
    findUniqueOrThrow<T extends apartment_invitesFindUniqueOrThrowArgs>(args: Prisma.SelectSubset<T, apartment_invitesFindUniqueOrThrowArgs<ExtArgs>>): Prisma.Prisma__apartment_invitesClient<runtime.Types.Result.GetResult<Prisma.$apartment_invitesPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    findFirst<T extends apartment_invitesFindFirstArgs>(args?: Prisma.SelectSubset<T, apartment_invitesFindFirstArgs<ExtArgs>>): Prisma.Prisma__apartment_invitesClient<runtime.Types.Result.GetResult<Prisma.$apartment_invitesPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>;
    findFirstOrThrow<T extends apartment_invitesFindFirstOrThrowArgs>(args?: Prisma.SelectSubset<T, apartment_invitesFindFirstOrThrowArgs<ExtArgs>>): Prisma.Prisma__apartment_invitesClient<runtime.Types.Result.GetResult<Prisma.$apartment_invitesPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    findMany<T extends apartment_invitesFindManyArgs>(args?: Prisma.SelectSubset<T, apartment_invitesFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$apartment_invitesPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>;
    create<T extends apartment_invitesCreateArgs>(args: Prisma.SelectSubset<T, apartment_invitesCreateArgs<ExtArgs>>): Prisma.Prisma__apartment_invitesClient<runtime.Types.Result.GetResult<Prisma.$apartment_invitesPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    createMany<T extends apartment_invitesCreateManyArgs>(args?: Prisma.SelectSubset<T, apartment_invitesCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<Prisma.BatchPayload>;
    createManyAndReturn<T extends apartment_invitesCreateManyAndReturnArgs>(args?: Prisma.SelectSubset<T, apartment_invitesCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$apartment_invitesPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>;
    delete<T extends apartment_invitesDeleteArgs>(args: Prisma.SelectSubset<T, apartment_invitesDeleteArgs<ExtArgs>>): Prisma.Prisma__apartment_invitesClient<runtime.Types.Result.GetResult<Prisma.$apartment_invitesPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    update<T extends apartment_invitesUpdateArgs>(args: Prisma.SelectSubset<T, apartment_invitesUpdateArgs<ExtArgs>>): Prisma.Prisma__apartment_invitesClient<runtime.Types.Result.GetResult<Prisma.$apartment_invitesPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    deleteMany<T extends apartment_invitesDeleteManyArgs>(args?: Prisma.SelectSubset<T, apartment_invitesDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<Prisma.BatchPayload>;
    updateMany<T extends apartment_invitesUpdateManyArgs>(args: Prisma.SelectSubset<T, apartment_invitesUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<Prisma.BatchPayload>;
    updateManyAndReturn<T extends apartment_invitesUpdateManyAndReturnArgs>(args: Prisma.SelectSubset<T, apartment_invitesUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$apartment_invitesPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>;
    upsert<T extends apartment_invitesUpsertArgs>(args: Prisma.SelectSubset<T, apartment_invitesUpsertArgs<ExtArgs>>): Prisma.Prisma__apartment_invitesClient<runtime.Types.Result.GetResult<Prisma.$apartment_invitesPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    count<T extends apartment_invitesCountArgs>(args?: Prisma.Subset<T, apartment_invitesCountArgs>): Prisma.PrismaPromise<T extends runtime.Types.Utils.Record<'select', any> ? T['select'] extends true ? number : Prisma.GetScalarType<T['select'], Apartment_invitesCountAggregateOutputType> : number>;
    aggregate<T extends Apartment_invitesAggregateArgs>(args: Prisma.Subset<T, Apartment_invitesAggregateArgs>): Prisma.PrismaPromise<GetApartment_invitesAggregateType<T>>;
    groupBy<T extends apartment_invitesGroupByArgs, HasSelectOrTake extends Prisma.Or<Prisma.Extends<'skip', Prisma.Keys<T>>, Prisma.Extends<'take', Prisma.Keys<T>>>, OrderByArg extends Prisma.True extends HasSelectOrTake ? {
        orderBy: apartment_invitesGroupByArgs['orderBy'];
    } : {
        orderBy?: apartment_invitesGroupByArgs['orderBy'];
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
    }[OrderFields]>(args: Prisma.SubsetIntersection<T, apartment_invitesGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetApartment_invitesGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>;
    readonly fields: apartment_invitesFieldRefs;
}
export interface Prisma__apartment_invitesClient<T, Null = never, ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise";
    apartments<T extends Prisma.apartmentsDefaultArgs<ExtArgs> = {}>(args?: Prisma.Subset<T, Prisma.apartmentsDefaultArgs<ExtArgs>>): Prisma.Prisma__apartmentsClient<runtime.Types.Result.GetResult<Prisma.$apartmentsPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>;
    users_apartment_invites_invited_byTousers<T extends Prisma.apartment_invites$users_apartment_invites_invited_byTousersArgs<ExtArgs> = {}>(args?: Prisma.Subset<T, Prisma.apartment_invites$users_apartment_invites_invited_byTousersArgs<ExtArgs>>): Prisma.Prisma__usersClient<runtime.Types.Result.GetResult<Prisma.$usersPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>;
    users_apartment_invites_used_byTousers<T extends Prisma.apartment_invites$users_apartment_invites_used_byTousersArgs<ExtArgs> = {}>(args?: Prisma.Subset<T, Prisma.apartment_invites$users_apartment_invites_used_byTousersArgs<ExtArgs>>): Prisma.Prisma__usersClient<runtime.Types.Result.GetResult<Prisma.$usersPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>;
    users_users_invite_idToapartment_invites<T extends Prisma.apartment_invites$users_users_invite_idToapartment_invitesArgs<ExtArgs> = {}>(args?: Prisma.Subset<T, Prisma.apartment_invites$users_users_invite_idToapartment_invitesArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$usersPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>;
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): runtime.Types.Utils.JsPromise<TResult1 | TResult2>;
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): runtime.Types.Utils.JsPromise<T | TResult>;
    finally(onfinally?: (() => void) | undefined | null): runtime.Types.Utils.JsPromise<T>;
}
export interface apartment_invitesFieldRefs {
    readonly id: Prisma.FieldRef<"apartment_invites", 'String'>;
    readonly apartment_id: Prisma.FieldRef<"apartment_invites", 'String'>;
    readonly invited_email: Prisma.FieldRef<"apartment_invites", 'String'>;
    readonly token: Prisma.FieldRef<"apartment_invites", 'String'>;
    readonly token_expires_at: Prisma.FieldRef<"apartment_invites", 'DateTime'>;
    readonly unit_number: Prisma.FieldRef<"apartment_invites", 'String'>;
    readonly status: Prisma.FieldRef<"apartment_invites", 'invite_status'>;
    readonly invited_by: Prisma.FieldRef<"apartment_invites", 'String'>;
    readonly used_by: Prisma.FieldRef<"apartment_invites", 'String'>;
    readonly notes: Prisma.FieldRef<"apartment_invites", 'String'>;
    readonly created_at: Prisma.FieldRef<"apartment_invites", 'DateTime'>;
    readonly updated_at: Prisma.FieldRef<"apartment_invites", 'DateTime'>;
}
export type apartment_invitesFindUniqueArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.apartment_invitesSelect<ExtArgs> | null;
    omit?: Prisma.apartment_invitesOmit<ExtArgs> | null;
    include?: Prisma.apartment_invitesInclude<ExtArgs> | null;
    where: Prisma.apartment_invitesWhereUniqueInput;
};
export type apartment_invitesFindUniqueOrThrowArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.apartment_invitesSelect<ExtArgs> | null;
    omit?: Prisma.apartment_invitesOmit<ExtArgs> | null;
    include?: Prisma.apartment_invitesInclude<ExtArgs> | null;
    where: Prisma.apartment_invitesWhereUniqueInput;
};
export type apartment_invitesFindFirstArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.apartment_invitesSelect<ExtArgs> | null;
    omit?: Prisma.apartment_invitesOmit<ExtArgs> | null;
    include?: Prisma.apartment_invitesInclude<ExtArgs> | null;
    where?: Prisma.apartment_invitesWhereInput;
    orderBy?: Prisma.apartment_invitesOrderByWithRelationInput | Prisma.apartment_invitesOrderByWithRelationInput[];
    cursor?: Prisma.apartment_invitesWhereUniqueInput;
    take?: number;
    skip?: number;
    distinct?: Prisma.Apartment_invitesScalarFieldEnum | Prisma.Apartment_invitesScalarFieldEnum[];
};
export type apartment_invitesFindFirstOrThrowArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.apartment_invitesSelect<ExtArgs> | null;
    omit?: Prisma.apartment_invitesOmit<ExtArgs> | null;
    include?: Prisma.apartment_invitesInclude<ExtArgs> | null;
    where?: Prisma.apartment_invitesWhereInput;
    orderBy?: Prisma.apartment_invitesOrderByWithRelationInput | Prisma.apartment_invitesOrderByWithRelationInput[];
    cursor?: Prisma.apartment_invitesWhereUniqueInput;
    take?: number;
    skip?: number;
    distinct?: Prisma.Apartment_invitesScalarFieldEnum | Prisma.Apartment_invitesScalarFieldEnum[];
};
export type apartment_invitesFindManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.apartment_invitesSelect<ExtArgs> | null;
    omit?: Prisma.apartment_invitesOmit<ExtArgs> | null;
    include?: Prisma.apartment_invitesInclude<ExtArgs> | null;
    where?: Prisma.apartment_invitesWhereInput;
    orderBy?: Prisma.apartment_invitesOrderByWithRelationInput | Prisma.apartment_invitesOrderByWithRelationInput[];
    cursor?: Prisma.apartment_invitesWhereUniqueInput;
    take?: number;
    skip?: number;
    distinct?: Prisma.Apartment_invitesScalarFieldEnum | Prisma.Apartment_invitesScalarFieldEnum[];
};
export type apartment_invitesCreateArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.apartment_invitesSelect<ExtArgs> | null;
    omit?: Prisma.apartment_invitesOmit<ExtArgs> | null;
    include?: Prisma.apartment_invitesInclude<ExtArgs> | null;
    data: Prisma.XOR<Prisma.apartment_invitesCreateInput, Prisma.apartment_invitesUncheckedCreateInput>;
};
export type apartment_invitesCreateManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    data: Prisma.apartment_invitesCreateManyInput | Prisma.apartment_invitesCreateManyInput[];
    skipDuplicates?: boolean;
};
export type apartment_invitesCreateManyAndReturnArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.apartment_invitesSelectCreateManyAndReturn<ExtArgs> | null;
    omit?: Prisma.apartment_invitesOmit<ExtArgs> | null;
    data: Prisma.apartment_invitesCreateManyInput | Prisma.apartment_invitesCreateManyInput[];
    skipDuplicates?: boolean;
    include?: Prisma.apartment_invitesIncludeCreateManyAndReturn<ExtArgs> | null;
};
export type apartment_invitesUpdateArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.apartment_invitesSelect<ExtArgs> | null;
    omit?: Prisma.apartment_invitesOmit<ExtArgs> | null;
    include?: Prisma.apartment_invitesInclude<ExtArgs> | null;
    data: Prisma.XOR<Prisma.apartment_invitesUpdateInput, Prisma.apartment_invitesUncheckedUpdateInput>;
    where: Prisma.apartment_invitesWhereUniqueInput;
};
export type apartment_invitesUpdateManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    data: Prisma.XOR<Prisma.apartment_invitesUpdateManyMutationInput, Prisma.apartment_invitesUncheckedUpdateManyInput>;
    where?: Prisma.apartment_invitesWhereInput;
    limit?: number;
};
export type apartment_invitesUpdateManyAndReturnArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.apartment_invitesSelectUpdateManyAndReturn<ExtArgs> | null;
    omit?: Prisma.apartment_invitesOmit<ExtArgs> | null;
    data: Prisma.XOR<Prisma.apartment_invitesUpdateManyMutationInput, Prisma.apartment_invitesUncheckedUpdateManyInput>;
    where?: Prisma.apartment_invitesWhereInput;
    limit?: number;
    include?: Prisma.apartment_invitesIncludeUpdateManyAndReturn<ExtArgs> | null;
};
export type apartment_invitesUpsertArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.apartment_invitesSelect<ExtArgs> | null;
    omit?: Prisma.apartment_invitesOmit<ExtArgs> | null;
    include?: Prisma.apartment_invitesInclude<ExtArgs> | null;
    where: Prisma.apartment_invitesWhereUniqueInput;
    create: Prisma.XOR<Prisma.apartment_invitesCreateInput, Prisma.apartment_invitesUncheckedCreateInput>;
    update: Prisma.XOR<Prisma.apartment_invitesUpdateInput, Prisma.apartment_invitesUncheckedUpdateInput>;
};
export type apartment_invitesDeleteArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.apartment_invitesSelect<ExtArgs> | null;
    omit?: Prisma.apartment_invitesOmit<ExtArgs> | null;
    include?: Prisma.apartment_invitesInclude<ExtArgs> | null;
    where: Prisma.apartment_invitesWhereUniqueInput;
};
export type apartment_invitesDeleteManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    where?: Prisma.apartment_invitesWhereInput;
    limit?: number;
};
export type apartment_invites$users_apartment_invites_invited_byTousersArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.usersSelect<ExtArgs> | null;
    omit?: Prisma.usersOmit<ExtArgs> | null;
    include?: Prisma.usersInclude<ExtArgs> | null;
    where?: Prisma.usersWhereInput;
};
export type apartment_invites$users_apartment_invites_used_byTousersArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.usersSelect<ExtArgs> | null;
    omit?: Prisma.usersOmit<ExtArgs> | null;
    include?: Prisma.usersInclude<ExtArgs> | null;
    where?: Prisma.usersWhereInput;
};
export type apartment_invites$users_users_invite_idToapartment_invitesArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.usersSelect<ExtArgs> | null;
    omit?: Prisma.usersOmit<ExtArgs> | null;
    include?: Prisma.usersInclude<ExtArgs> | null;
    where?: Prisma.usersWhereInput;
    orderBy?: Prisma.usersOrderByWithRelationInput | Prisma.usersOrderByWithRelationInput[];
    cursor?: Prisma.usersWhereUniqueInput;
    take?: number;
    skip?: number;
    distinct?: Prisma.UsersScalarFieldEnum | Prisma.UsersScalarFieldEnum[];
};
export type apartment_invitesDefaultArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.apartment_invitesSelect<ExtArgs> | null;
    omit?: Prisma.apartment_invitesOmit<ExtArgs> | null;
    include?: Prisma.apartment_invitesInclude<ExtArgs> | null;
};
