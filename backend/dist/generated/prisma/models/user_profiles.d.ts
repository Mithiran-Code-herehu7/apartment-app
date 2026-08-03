import type * as runtime from "@prisma/client/runtime/client";
import type * as Prisma from "../internal/prismaNamespace.js";
export type user_profilesModel = runtime.Types.Result.DefaultSelection<Prisma.$user_profilesPayload>;
export type AggregateUser_profiles = {
    _count: User_profilesCountAggregateOutputType | null;
    _min: User_profilesMinAggregateOutputType | null;
    _max: User_profilesMaxAggregateOutputType | null;
};
export type User_profilesMinAggregateOutputType = {
    id: string | null;
    user_id: string | null;
    display_name: string | null;
    avatar_url: string | null;
    bio: string | null;
    website_url: string | null;
    linkedin_url: string | null;
    is_public: boolean | null;
    created_at: Date | null;
    updated_at: Date | null;
};
export type User_profilesMaxAggregateOutputType = {
    id: string | null;
    user_id: string | null;
    display_name: string | null;
    avatar_url: string | null;
    bio: string | null;
    website_url: string | null;
    linkedin_url: string | null;
    is_public: boolean | null;
    created_at: Date | null;
    updated_at: Date | null;
};
export type User_profilesCountAggregateOutputType = {
    id: number;
    user_id: number;
    display_name: number;
    avatar_url: number;
    bio: number;
    languages: number;
    skills_offered: number;
    interests: number;
    website_url: number;
    linkedin_url: number;
    is_public: number;
    created_at: number;
    updated_at: number;
    _all: number;
};
export type User_profilesMinAggregateInputType = {
    id?: true;
    user_id?: true;
    display_name?: true;
    avatar_url?: true;
    bio?: true;
    website_url?: true;
    linkedin_url?: true;
    is_public?: true;
    created_at?: true;
    updated_at?: true;
};
export type User_profilesMaxAggregateInputType = {
    id?: true;
    user_id?: true;
    display_name?: true;
    avatar_url?: true;
    bio?: true;
    website_url?: true;
    linkedin_url?: true;
    is_public?: true;
    created_at?: true;
    updated_at?: true;
};
export type User_profilesCountAggregateInputType = {
    id?: true;
    user_id?: true;
    display_name?: true;
    avatar_url?: true;
    bio?: true;
    languages?: true;
    skills_offered?: true;
    interests?: true;
    website_url?: true;
    linkedin_url?: true;
    is_public?: true;
    created_at?: true;
    updated_at?: true;
    _all?: true;
};
export type User_profilesAggregateArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    where?: Prisma.user_profilesWhereInput;
    orderBy?: Prisma.user_profilesOrderByWithRelationInput | Prisma.user_profilesOrderByWithRelationInput[];
    cursor?: Prisma.user_profilesWhereUniqueInput;
    take?: number;
    skip?: number;
    _count?: true | User_profilesCountAggregateInputType;
    _min?: User_profilesMinAggregateInputType;
    _max?: User_profilesMaxAggregateInputType;
};
export type GetUser_profilesAggregateType<T extends User_profilesAggregateArgs> = {
    [P in keyof T & keyof AggregateUser_profiles]: P extends '_count' | 'count' ? T[P] extends true ? number : Prisma.GetScalarType<T[P], AggregateUser_profiles[P]> : Prisma.GetScalarType<T[P], AggregateUser_profiles[P]>;
};
export type user_profilesGroupByArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    where?: Prisma.user_profilesWhereInput;
    orderBy?: Prisma.user_profilesOrderByWithAggregationInput | Prisma.user_profilesOrderByWithAggregationInput[];
    by: Prisma.User_profilesScalarFieldEnum[] | Prisma.User_profilesScalarFieldEnum;
    having?: Prisma.user_profilesScalarWhereWithAggregatesInput;
    take?: number;
    skip?: number;
    _count?: User_profilesCountAggregateInputType | true;
    _min?: User_profilesMinAggregateInputType;
    _max?: User_profilesMaxAggregateInputType;
};
export type User_profilesGroupByOutputType = {
    id: string;
    user_id: string;
    display_name: string;
    avatar_url: string | null;
    bio: string | null;
    languages: string[];
    skills_offered: string[];
    interests: string[];
    website_url: string | null;
    linkedin_url: string | null;
    is_public: boolean;
    created_at: Date;
    updated_at: Date;
    _count: User_profilesCountAggregateOutputType | null;
    _min: User_profilesMinAggregateOutputType | null;
    _max: User_profilesMaxAggregateOutputType | null;
};
export type GetUser_profilesGroupByPayload<T extends user_profilesGroupByArgs> = Prisma.PrismaPromise<Array<Prisma.PickEnumerable<User_profilesGroupByOutputType, T['by']> & {
    [P in ((keyof T) & (keyof User_profilesGroupByOutputType))]: P extends '_count' ? T[P] extends boolean ? number : Prisma.GetScalarType<T[P], User_profilesGroupByOutputType[P]> : Prisma.GetScalarType<T[P], User_profilesGroupByOutputType[P]>;
}>>;
export type user_profilesWhereInput = {
    AND?: Prisma.user_profilesWhereInput | Prisma.user_profilesWhereInput[];
    OR?: Prisma.user_profilesWhereInput[];
    NOT?: Prisma.user_profilesWhereInput | Prisma.user_profilesWhereInput[];
    id?: Prisma.UuidFilter<"user_profiles"> | string;
    user_id?: Prisma.UuidFilter<"user_profiles"> | string;
    display_name?: Prisma.StringFilter<"user_profiles"> | string;
    avatar_url?: Prisma.StringNullableFilter<"user_profiles"> | string | null;
    bio?: Prisma.StringNullableFilter<"user_profiles"> | string | null;
    languages?: Prisma.StringNullableListFilter<"user_profiles">;
    skills_offered?: Prisma.StringNullableListFilter<"user_profiles">;
    interests?: Prisma.StringNullableListFilter<"user_profiles">;
    website_url?: Prisma.StringNullableFilter<"user_profiles"> | string | null;
    linkedin_url?: Prisma.StringNullableFilter<"user_profiles"> | string | null;
    is_public?: Prisma.BoolFilter<"user_profiles"> | boolean;
    created_at?: Prisma.DateTimeFilter<"user_profiles"> | Date | string;
    updated_at?: Prisma.DateTimeFilter<"user_profiles"> | Date | string;
    users?: Prisma.XOR<Prisma.UsersScalarRelationFilter, Prisma.usersWhereInput>;
};
export type user_profilesOrderByWithRelationInput = {
    id?: Prisma.SortOrder;
    user_id?: Prisma.SortOrder;
    display_name?: Prisma.SortOrder;
    avatar_url?: Prisma.SortOrderInput | Prisma.SortOrder;
    bio?: Prisma.SortOrderInput | Prisma.SortOrder;
    languages?: Prisma.SortOrder;
    skills_offered?: Prisma.SortOrder;
    interests?: Prisma.SortOrder;
    website_url?: Prisma.SortOrderInput | Prisma.SortOrder;
    linkedin_url?: Prisma.SortOrderInput | Prisma.SortOrder;
    is_public?: Prisma.SortOrder;
    created_at?: Prisma.SortOrder;
    updated_at?: Prisma.SortOrder;
    users?: Prisma.usersOrderByWithRelationInput;
};
export type user_profilesWhereUniqueInput = Prisma.AtLeast<{
    id?: string;
    user_id?: string;
    AND?: Prisma.user_profilesWhereInput | Prisma.user_profilesWhereInput[];
    OR?: Prisma.user_profilesWhereInput[];
    NOT?: Prisma.user_profilesWhereInput | Prisma.user_profilesWhereInput[];
    display_name?: Prisma.StringFilter<"user_profiles"> | string;
    avatar_url?: Prisma.StringNullableFilter<"user_profiles"> | string | null;
    bio?: Prisma.StringNullableFilter<"user_profiles"> | string | null;
    languages?: Prisma.StringNullableListFilter<"user_profiles">;
    skills_offered?: Prisma.StringNullableListFilter<"user_profiles">;
    interests?: Prisma.StringNullableListFilter<"user_profiles">;
    website_url?: Prisma.StringNullableFilter<"user_profiles"> | string | null;
    linkedin_url?: Prisma.StringNullableFilter<"user_profiles"> | string | null;
    is_public?: Prisma.BoolFilter<"user_profiles"> | boolean;
    created_at?: Prisma.DateTimeFilter<"user_profiles"> | Date | string;
    updated_at?: Prisma.DateTimeFilter<"user_profiles"> | Date | string;
    users?: Prisma.XOR<Prisma.UsersScalarRelationFilter, Prisma.usersWhereInput>;
}, "id" | "user_id">;
export type user_profilesOrderByWithAggregationInput = {
    id?: Prisma.SortOrder;
    user_id?: Prisma.SortOrder;
    display_name?: Prisma.SortOrder;
    avatar_url?: Prisma.SortOrderInput | Prisma.SortOrder;
    bio?: Prisma.SortOrderInput | Prisma.SortOrder;
    languages?: Prisma.SortOrder;
    skills_offered?: Prisma.SortOrder;
    interests?: Prisma.SortOrder;
    website_url?: Prisma.SortOrderInput | Prisma.SortOrder;
    linkedin_url?: Prisma.SortOrderInput | Prisma.SortOrder;
    is_public?: Prisma.SortOrder;
    created_at?: Prisma.SortOrder;
    updated_at?: Prisma.SortOrder;
    _count?: Prisma.user_profilesCountOrderByAggregateInput;
    _max?: Prisma.user_profilesMaxOrderByAggregateInput;
    _min?: Prisma.user_profilesMinOrderByAggregateInput;
};
export type user_profilesScalarWhereWithAggregatesInput = {
    AND?: Prisma.user_profilesScalarWhereWithAggregatesInput | Prisma.user_profilesScalarWhereWithAggregatesInput[];
    OR?: Prisma.user_profilesScalarWhereWithAggregatesInput[];
    NOT?: Prisma.user_profilesScalarWhereWithAggregatesInput | Prisma.user_profilesScalarWhereWithAggregatesInput[];
    id?: Prisma.UuidWithAggregatesFilter<"user_profiles"> | string;
    user_id?: Prisma.UuidWithAggregatesFilter<"user_profiles"> | string;
    display_name?: Prisma.StringWithAggregatesFilter<"user_profiles"> | string;
    avatar_url?: Prisma.StringNullableWithAggregatesFilter<"user_profiles"> | string | null;
    bio?: Prisma.StringNullableWithAggregatesFilter<"user_profiles"> | string | null;
    languages?: Prisma.StringNullableListFilter<"user_profiles">;
    skills_offered?: Prisma.StringNullableListFilter<"user_profiles">;
    interests?: Prisma.StringNullableListFilter<"user_profiles">;
    website_url?: Prisma.StringNullableWithAggregatesFilter<"user_profiles"> | string | null;
    linkedin_url?: Prisma.StringNullableWithAggregatesFilter<"user_profiles"> | string | null;
    is_public?: Prisma.BoolWithAggregatesFilter<"user_profiles"> | boolean;
    created_at?: Prisma.DateTimeWithAggregatesFilter<"user_profiles"> | Date | string;
    updated_at?: Prisma.DateTimeWithAggregatesFilter<"user_profiles"> | Date | string;
};
export type user_profilesCreateInput = {
    id?: string;
    display_name: string;
    avatar_url?: string | null;
    bio?: string | null;
    languages?: Prisma.user_profilesCreatelanguagesInput | string[];
    skills_offered?: Prisma.user_profilesCreateskills_offeredInput | string[];
    interests?: Prisma.user_profilesCreateinterestsInput | string[];
    website_url?: string | null;
    linkedin_url?: string | null;
    is_public?: boolean;
    created_at?: Date | string;
    updated_at?: Date | string;
    users: Prisma.usersCreateNestedOneWithoutUser_profilesInput;
};
export type user_profilesUncheckedCreateInput = {
    id?: string;
    user_id: string;
    display_name: string;
    avatar_url?: string | null;
    bio?: string | null;
    languages?: Prisma.user_profilesCreatelanguagesInput | string[];
    skills_offered?: Prisma.user_profilesCreateskills_offeredInput | string[];
    interests?: Prisma.user_profilesCreateinterestsInput | string[];
    website_url?: string | null;
    linkedin_url?: string | null;
    is_public?: boolean;
    created_at?: Date | string;
    updated_at?: Date | string;
};
export type user_profilesUpdateInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    display_name?: Prisma.StringFieldUpdateOperationsInput | string;
    avatar_url?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    bio?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    languages?: Prisma.user_profilesUpdatelanguagesInput | string[];
    skills_offered?: Prisma.user_profilesUpdateskills_offeredInput | string[];
    interests?: Prisma.user_profilesUpdateinterestsInput | string[];
    website_url?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    linkedin_url?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    is_public?: Prisma.BoolFieldUpdateOperationsInput | boolean;
    created_at?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    updated_at?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    users?: Prisma.usersUpdateOneRequiredWithoutUser_profilesNestedInput;
};
export type user_profilesUncheckedUpdateInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    user_id?: Prisma.StringFieldUpdateOperationsInput | string;
    display_name?: Prisma.StringFieldUpdateOperationsInput | string;
    avatar_url?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    bio?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    languages?: Prisma.user_profilesUpdatelanguagesInput | string[];
    skills_offered?: Prisma.user_profilesUpdateskills_offeredInput | string[];
    interests?: Prisma.user_profilesUpdateinterestsInput | string[];
    website_url?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    linkedin_url?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    is_public?: Prisma.BoolFieldUpdateOperationsInput | boolean;
    created_at?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    updated_at?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
};
export type user_profilesCreateManyInput = {
    id?: string;
    user_id: string;
    display_name: string;
    avatar_url?: string | null;
    bio?: string | null;
    languages?: Prisma.user_profilesCreatelanguagesInput | string[];
    skills_offered?: Prisma.user_profilesCreateskills_offeredInput | string[];
    interests?: Prisma.user_profilesCreateinterestsInput | string[];
    website_url?: string | null;
    linkedin_url?: string | null;
    is_public?: boolean;
    created_at?: Date | string;
    updated_at?: Date | string;
};
export type user_profilesUpdateManyMutationInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    display_name?: Prisma.StringFieldUpdateOperationsInput | string;
    avatar_url?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    bio?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    languages?: Prisma.user_profilesUpdatelanguagesInput | string[];
    skills_offered?: Prisma.user_profilesUpdateskills_offeredInput | string[];
    interests?: Prisma.user_profilesUpdateinterestsInput | string[];
    website_url?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    linkedin_url?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    is_public?: Prisma.BoolFieldUpdateOperationsInput | boolean;
    created_at?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    updated_at?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
};
export type user_profilesUncheckedUpdateManyInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    user_id?: Prisma.StringFieldUpdateOperationsInput | string;
    display_name?: Prisma.StringFieldUpdateOperationsInput | string;
    avatar_url?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    bio?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    languages?: Prisma.user_profilesUpdatelanguagesInput | string[];
    skills_offered?: Prisma.user_profilesUpdateskills_offeredInput | string[];
    interests?: Prisma.user_profilesUpdateinterestsInput | string[];
    website_url?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    linkedin_url?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    is_public?: Prisma.BoolFieldUpdateOperationsInput | boolean;
    created_at?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    updated_at?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
};
export type user_profilesCountOrderByAggregateInput = {
    id?: Prisma.SortOrder;
    user_id?: Prisma.SortOrder;
    display_name?: Prisma.SortOrder;
    avatar_url?: Prisma.SortOrder;
    bio?: Prisma.SortOrder;
    languages?: Prisma.SortOrder;
    skills_offered?: Prisma.SortOrder;
    interests?: Prisma.SortOrder;
    website_url?: Prisma.SortOrder;
    linkedin_url?: Prisma.SortOrder;
    is_public?: Prisma.SortOrder;
    created_at?: Prisma.SortOrder;
    updated_at?: Prisma.SortOrder;
};
export type user_profilesMaxOrderByAggregateInput = {
    id?: Prisma.SortOrder;
    user_id?: Prisma.SortOrder;
    display_name?: Prisma.SortOrder;
    avatar_url?: Prisma.SortOrder;
    bio?: Prisma.SortOrder;
    website_url?: Prisma.SortOrder;
    linkedin_url?: Prisma.SortOrder;
    is_public?: Prisma.SortOrder;
    created_at?: Prisma.SortOrder;
    updated_at?: Prisma.SortOrder;
};
export type user_profilesMinOrderByAggregateInput = {
    id?: Prisma.SortOrder;
    user_id?: Prisma.SortOrder;
    display_name?: Prisma.SortOrder;
    avatar_url?: Prisma.SortOrder;
    bio?: Prisma.SortOrder;
    website_url?: Prisma.SortOrder;
    linkedin_url?: Prisma.SortOrder;
    is_public?: Prisma.SortOrder;
    created_at?: Prisma.SortOrder;
    updated_at?: Prisma.SortOrder;
};
export type User_profilesNullableScalarRelationFilter = {
    is?: Prisma.user_profilesWhereInput | null;
    isNot?: Prisma.user_profilesWhereInput | null;
};
export type user_profilesCreatelanguagesInput = {
    set: string[];
};
export type user_profilesCreateskills_offeredInput = {
    set: string[];
};
export type user_profilesCreateinterestsInput = {
    set: string[];
};
export type user_profilesUpdatelanguagesInput = {
    set?: string[];
    push?: string | string[];
};
export type user_profilesUpdateskills_offeredInput = {
    set?: string[];
    push?: string | string[];
};
export type user_profilesUpdateinterestsInput = {
    set?: string[];
    push?: string | string[];
};
export type user_profilesCreateNestedOneWithoutUsersInput = {
    create?: Prisma.XOR<Prisma.user_profilesCreateWithoutUsersInput, Prisma.user_profilesUncheckedCreateWithoutUsersInput>;
    connectOrCreate?: Prisma.user_profilesCreateOrConnectWithoutUsersInput;
    connect?: Prisma.user_profilesWhereUniqueInput;
};
export type user_profilesUncheckedCreateNestedOneWithoutUsersInput = {
    create?: Prisma.XOR<Prisma.user_profilesCreateWithoutUsersInput, Prisma.user_profilesUncheckedCreateWithoutUsersInput>;
    connectOrCreate?: Prisma.user_profilesCreateOrConnectWithoutUsersInput;
    connect?: Prisma.user_profilesWhereUniqueInput;
};
export type user_profilesUpdateOneWithoutUsersNestedInput = {
    create?: Prisma.XOR<Prisma.user_profilesCreateWithoutUsersInput, Prisma.user_profilesUncheckedCreateWithoutUsersInput>;
    connectOrCreate?: Prisma.user_profilesCreateOrConnectWithoutUsersInput;
    upsert?: Prisma.user_profilesUpsertWithoutUsersInput;
    disconnect?: Prisma.user_profilesWhereInput | boolean;
    delete?: Prisma.user_profilesWhereInput | boolean;
    connect?: Prisma.user_profilesWhereUniqueInput;
    update?: Prisma.XOR<Prisma.XOR<Prisma.user_profilesUpdateToOneWithWhereWithoutUsersInput, Prisma.user_profilesUpdateWithoutUsersInput>, Prisma.user_profilesUncheckedUpdateWithoutUsersInput>;
};
export type user_profilesUncheckedUpdateOneWithoutUsersNestedInput = {
    create?: Prisma.XOR<Prisma.user_profilesCreateWithoutUsersInput, Prisma.user_profilesUncheckedCreateWithoutUsersInput>;
    connectOrCreate?: Prisma.user_profilesCreateOrConnectWithoutUsersInput;
    upsert?: Prisma.user_profilesUpsertWithoutUsersInput;
    disconnect?: Prisma.user_profilesWhereInput | boolean;
    delete?: Prisma.user_profilesWhereInput | boolean;
    connect?: Prisma.user_profilesWhereUniqueInput;
    update?: Prisma.XOR<Prisma.XOR<Prisma.user_profilesUpdateToOneWithWhereWithoutUsersInput, Prisma.user_profilesUpdateWithoutUsersInput>, Prisma.user_profilesUncheckedUpdateWithoutUsersInput>;
};
export type user_profilesCreateWithoutUsersInput = {
    id?: string;
    display_name: string;
    avatar_url?: string | null;
    bio?: string | null;
    languages?: Prisma.user_profilesCreatelanguagesInput | string[];
    skills_offered?: Prisma.user_profilesCreateskills_offeredInput | string[];
    interests?: Prisma.user_profilesCreateinterestsInput | string[];
    website_url?: string | null;
    linkedin_url?: string | null;
    is_public?: boolean;
    created_at?: Date | string;
    updated_at?: Date | string;
};
export type user_profilesUncheckedCreateWithoutUsersInput = {
    id?: string;
    display_name: string;
    avatar_url?: string | null;
    bio?: string | null;
    languages?: Prisma.user_profilesCreatelanguagesInput | string[];
    skills_offered?: Prisma.user_profilesCreateskills_offeredInput | string[];
    interests?: Prisma.user_profilesCreateinterestsInput | string[];
    website_url?: string | null;
    linkedin_url?: string | null;
    is_public?: boolean;
    created_at?: Date | string;
    updated_at?: Date | string;
};
export type user_profilesCreateOrConnectWithoutUsersInput = {
    where: Prisma.user_profilesWhereUniqueInput;
    create: Prisma.XOR<Prisma.user_profilesCreateWithoutUsersInput, Prisma.user_profilesUncheckedCreateWithoutUsersInput>;
};
export type user_profilesUpsertWithoutUsersInput = {
    update: Prisma.XOR<Prisma.user_profilesUpdateWithoutUsersInput, Prisma.user_profilesUncheckedUpdateWithoutUsersInput>;
    create: Prisma.XOR<Prisma.user_profilesCreateWithoutUsersInput, Prisma.user_profilesUncheckedCreateWithoutUsersInput>;
    where?: Prisma.user_profilesWhereInput;
};
export type user_profilesUpdateToOneWithWhereWithoutUsersInput = {
    where?: Prisma.user_profilesWhereInput;
    data: Prisma.XOR<Prisma.user_profilesUpdateWithoutUsersInput, Prisma.user_profilesUncheckedUpdateWithoutUsersInput>;
};
export type user_profilesUpdateWithoutUsersInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    display_name?: Prisma.StringFieldUpdateOperationsInput | string;
    avatar_url?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    bio?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    languages?: Prisma.user_profilesUpdatelanguagesInput | string[];
    skills_offered?: Prisma.user_profilesUpdateskills_offeredInput | string[];
    interests?: Prisma.user_profilesUpdateinterestsInput | string[];
    website_url?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    linkedin_url?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    is_public?: Prisma.BoolFieldUpdateOperationsInput | boolean;
    created_at?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    updated_at?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
};
export type user_profilesUncheckedUpdateWithoutUsersInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    display_name?: Prisma.StringFieldUpdateOperationsInput | string;
    avatar_url?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    bio?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    languages?: Prisma.user_profilesUpdatelanguagesInput | string[];
    skills_offered?: Prisma.user_profilesUpdateskills_offeredInput | string[];
    interests?: Prisma.user_profilesUpdateinterestsInput | string[];
    website_url?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    linkedin_url?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    is_public?: Prisma.BoolFieldUpdateOperationsInput | boolean;
    created_at?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    updated_at?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
};
export type user_profilesSelect<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetSelect<{
    id?: boolean;
    user_id?: boolean;
    display_name?: boolean;
    avatar_url?: boolean;
    bio?: boolean;
    languages?: boolean;
    skills_offered?: boolean;
    interests?: boolean;
    website_url?: boolean;
    linkedin_url?: boolean;
    is_public?: boolean;
    created_at?: boolean;
    updated_at?: boolean;
    users?: boolean | Prisma.usersDefaultArgs<ExtArgs>;
}, ExtArgs["result"]["user_profiles"]>;
export type user_profilesSelectCreateManyAndReturn<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetSelect<{
    id?: boolean;
    user_id?: boolean;
    display_name?: boolean;
    avatar_url?: boolean;
    bio?: boolean;
    languages?: boolean;
    skills_offered?: boolean;
    interests?: boolean;
    website_url?: boolean;
    linkedin_url?: boolean;
    is_public?: boolean;
    created_at?: boolean;
    updated_at?: boolean;
    users?: boolean | Prisma.usersDefaultArgs<ExtArgs>;
}, ExtArgs["result"]["user_profiles"]>;
export type user_profilesSelectUpdateManyAndReturn<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetSelect<{
    id?: boolean;
    user_id?: boolean;
    display_name?: boolean;
    avatar_url?: boolean;
    bio?: boolean;
    languages?: boolean;
    skills_offered?: boolean;
    interests?: boolean;
    website_url?: boolean;
    linkedin_url?: boolean;
    is_public?: boolean;
    created_at?: boolean;
    updated_at?: boolean;
    users?: boolean | Prisma.usersDefaultArgs<ExtArgs>;
}, ExtArgs["result"]["user_profiles"]>;
export type user_profilesSelectScalar = {
    id?: boolean;
    user_id?: boolean;
    display_name?: boolean;
    avatar_url?: boolean;
    bio?: boolean;
    languages?: boolean;
    skills_offered?: boolean;
    interests?: boolean;
    website_url?: boolean;
    linkedin_url?: boolean;
    is_public?: boolean;
    created_at?: boolean;
    updated_at?: boolean;
};
export type user_profilesOmit<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetOmit<"id" | "user_id" | "display_name" | "avatar_url" | "bio" | "languages" | "skills_offered" | "interests" | "website_url" | "linkedin_url" | "is_public" | "created_at" | "updated_at", ExtArgs["result"]["user_profiles"]>;
export type user_profilesInclude<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    users?: boolean | Prisma.usersDefaultArgs<ExtArgs>;
};
export type user_profilesIncludeCreateManyAndReturn<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    users?: boolean | Prisma.usersDefaultArgs<ExtArgs>;
};
export type user_profilesIncludeUpdateManyAndReturn<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    users?: boolean | Prisma.usersDefaultArgs<ExtArgs>;
};
export type $user_profilesPayload<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    name: "user_profiles";
    objects: {
        users: Prisma.$usersPayload<ExtArgs>;
    };
    scalars: runtime.Types.Extensions.GetPayloadResult<{
        id: string;
        user_id: string;
        display_name: string;
        avatar_url: string | null;
        bio: string | null;
        languages: string[];
        skills_offered: string[];
        interests: string[];
        website_url: string | null;
        linkedin_url: string | null;
        is_public: boolean;
        created_at: Date;
        updated_at: Date;
    }, ExtArgs["result"]["user_profiles"]>;
    composites: {};
};
export type user_profilesGetPayload<S extends boolean | null | undefined | user_profilesDefaultArgs> = runtime.Types.Result.GetResult<Prisma.$user_profilesPayload, S>;
export type user_profilesCountArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = Omit<user_profilesFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
    select?: User_profilesCountAggregateInputType | true;
};
export interface user_profilesDelegate<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: {
        types: Prisma.TypeMap<ExtArgs>['model']['user_profiles'];
        meta: {
            name: 'user_profiles';
        };
    };
    findUnique<T extends user_profilesFindUniqueArgs>(args: Prisma.SelectSubset<T, user_profilesFindUniqueArgs<ExtArgs>>): Prisma.Prisma__user_profilesClient<runtime.Types.Result.GetResult<Prisma.$user_profilesPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>;
    findUniqueOrThrow<T extends user_profilesFindUniqueOrThrowArgs>(args: Prisma.SelectSubset<T, user_profilesFindUniqueOrThrowArgs<ExtArgs>>): Prisma.Prisma__user_profilesClient<runtime.Types.Result.GetResult<Prisma.$user_profilesPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    findFirst<T extends user_profilesFindFirstArgs>(args?: Prisma.SelectSubset<T, user_profilesFindFirstArgs<ExtArgs>>): Prisma.Prisma__user_profilesClient<runtime.Types.Result.GetResult<Prisma.$user_profilesPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>;
    findFirstOrThrow<T extends user_profilesFindFirstOrThrowArgs>(args?: Prisma.SelectSubset<T, user_profilesFindFirstOrThrowArgs<ExtArgs>>): Prisma.Prisma__user_profilesClient<runtime.Types.Result.GetResult<Prisma.$user_profilesPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    findMany<T extends user_profilesFindManyArgs>(args?: Prisma.SelectSubset<T, user_profilesFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$user_profilesPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>;
    create<T extends user_profilesCreateArgs>(args: Prisma.SelectSubset<T, user_profilesCreateArgs<ExtArgs>>): Prisma.Prisma__user_profilesClient<runtime.Types.Result.GetResult<Prisma.$user_profilesPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    createMany<T extends user_profilesCreateManyArgs>(args?: Prisma.SelectSubset<T, user_profilesCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<Prisma.BatchPayload>;
    createManyAndReturn<T extends user_profilesCreateManyAndReturnArgs>(args?: Prisma.SelectSubset<T, user_profilesCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$user_profilesPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>;
    delete<T extends user_profilesDeleteArgs>(args: Prisma.SelectSubset<T, user_profilesDeleteArgs<ExtArgs>>): Prisma.Prisma__user_profilesClient<runtime.Types.Result.GetResult<Prisma.$user_profilesPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    update<T extends user_profilesUpdateArgs>(args: Prisma.SelectSubset<T, user_profilesUpdateArgs<ExtArgs>>): Prisma.Prisma__user_profilesClient<runtime.Types.Result.GetResult<Prisma.$user_profilesPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    deleteMany<T extends user_profilesDeleteManyArgs>(args?: Prisma.SelectSubset<T, user_profilesDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<Prisma.BatchPayload>;
    updateMany<T extends user_profilesUpdateManyArgs>(args: Prisma.SelectSubset<T, user_profilesUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<Prisma.BatchPayload>;
    updateManyAndReturn<T extends user_profilesUpdateManyAndReturnArgs>(args: Prisma.SelectSubset<T, user_profilesUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$user_profilesPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>;
    upsert<T extends user_profilesUpsertArgs>(args: Prisma.SelectSubset<T, user_profilesUpsertArgs<ExtArgs>>): Prisma.Prisma__user_profilesClient<runtime.Types.Result.GetResult<Prisma.$user_profilesPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    count<T extends user_profilesCountArgs>(args?: Prisma.Subset<T, user_profilesCountArgs>): Prisma.PrismaPromise<T extends runtime.Types.Utils.Record<'select', any> ? T['select'] extends true ? number : Prisma.GetScalarType<T['select'], User_profilesCountAggregateOutputType> : number>;
    aggregate<T extends User_profilesAggregateArgs>(args: Prisma.Subset<T, User_profilesAggregateArgs>): Prisma.PrismaPromise<GetUser_profilesAggregateType<T>>;
    groupBy<T extends user_profilesGroupByArgs, HasSelectOrTake extends Prisma.Or<Prisma.Extends<'skip', Prisma.Keys<T>>, Prisma.Extends<'take', Prisma.Keys<T>>>, OrderByArg extends Prisma.True extends HasSelectOrTake ? {
        orderBy: user_profilesGroupByArgs['orderBy'];
    } : {
        orderBy?: user_profilesGroupByArgs['orderBy'];
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
    }[OrderFields]>(args: Prisma.SubsetIntersection<T, user_profilesGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetUser_profilesGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>;
    readonly fields: user_profilesFieldRefs;
}
export interface Prisma__user_profilesClient<T, Null = never, ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise";
    users<T extends Prisma.usersDefaultArgs<ExtArgs> = {}>(args?: Prisma.Subset<T, Prisma.usersDefaultArgs<ExtArgs>>): Prisma.Prisma__usersClient<runtime.Types.Result.GetResult<Prisma.$usersPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>;
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): runtime.Types.Utils.JsPromise<TResult1 | TResult2>;
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): runtime.Types.Utils.JsPromise<T | TResult>;
    finally(onfinally?: (() => void) | undefined | null): runtime.Types.Utils.JsPromise<T>;
}
export interface user_profilesFieldRefs {
    readonly id: Prisma.FieldRef<"user_profiles", 'String'>;
    readonly user_id: Prisma.FieldRef<"user_profiles", 'String'>;
    readonly display_name: Prisma.FieldRef<"user_profiles", 'String'>;
    readonly avatar_url: Prisma.FieldRef<"user_profiles", 'String'>;
    readonly bio: Prisma.FieldRef<"user_profiles", 'String'>;
    readonly languages: Prisma.FieldRef<"user_profiles", 'String[]'>;
    readonly skills_offered: Prisma.FieldRef<"user_profiles", 'String[]'>;
    readonly interests: Prisma.FieldRef<"user_profiles", 'String[]'>;
    readonly website_url: Prisma.FieldRef<"user_profiles", 'String'>;
    readonly linkedin_url: Prisma.FieldRef<"user_profiles", 'String'>;
    readonly is_public: Prisma.FieldRef<"user_profiles", 'Boolean'>;
    readonly created_at: Prisma.FieldRef<"user_profiles", 'DateTime'>;
    readonly updated_at: Prisma.FieldRef<"user_profiles", 'DateTime'>;
}
export type user_profilesFindUniqueArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.user_profilesSelect<ExtArgs> | null;
    omit?: Prisma.user_profilesOmit<ExtArgs> | null;
    include?: Prisma.user_profilesInclude<ExtArgs> | null;
    where: Prisma.user_profilesWhereUniqueInput;
};
export type user_profilesFindUniqueOrThrowArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.user_profilesSelect<ExtArgs> | null;
    omit?: Prisma.user_profilesOmit<ExtArgs> | null;
    include?: Prisma.user_profilesInclude<ExtArgs> | null;
    where: Prisma.user_profilesWhereUniqueInput;
};
export type user_profilesFindFirstArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.user_profilesSelect<ExtArgs> | null;
    omit?: Prisma.user_profilesOmit<ExtArgs> | null;
    include?: Prisma.user_profilesInclude<ExtArgs> | null;
    where?: Prisma.user_profilesWhereInput;
    orderBy?: Prisma.user_profilesOrderByWithRelationInput | Prisma.user_profilesOrderByWithRelationInput[];
    cursor?: Prisma.user_profilesWhereUniqueInput;
    take?: number;
    skip?: number;
    distinct?: Prisma.User_profilesScalarFieldEnum | Prisma.User_profilesScalarFieldEnum[];
};
export type user_profilesFindFirstOrThrowArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.user_profilesSelect<ExtArgs> | null;
    omit?: Prisma.user_profilesOmit<ExtArgs> | null;
    include?: Prisma.user_profilesInclude<ExtArgs> | null;
    where?: Prisma.user_profilesWhereInput;
    orderBy?: Prisma.user_profilesOrderByWithRelationInput | Prisma.user_profilesOrderByWithRelationInput[];
    cursor?: Prisma.user_profilesWhereUniqueInput;
    take?: number;
    skip?: number;
    distinct?: Prisma.User_profilesScalarFieldEnum | Prisma.User_profilesScalarFieldEnum[];
};
export type user_profilesFindManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.user_profilesSelect<ExtArgs> | null;
    omit?: Prisma.user_profilesOmit<ExtArgs> | null;
    include?: Prisma.user_profilesInclude<ExtArgs> | null;
    where?: Prisma.user_profilesWhereInput;
    orderBy?: Prisma.user_profilesOrderByWithRelationInput | Prisma.user_profilesOrderByWithRelationInput[];
    cursor?: Prisma.user_profilesWhereUniqueInput;
    take?: number;
    skip?: number;
    distinct?: Prisma.User_profilesScalarFieldEnum | Prisma.User_profilesScalarFieldEnum[];
};
export type user_profilesCreateArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.user_profilesSelect<ExtArgs> | null;
    omit?: Prisma.user_profilesOmit<ExtArgs> | null;
    include?: Prisma.user_profilesInclude<ExtArgs> | null;
    data: Prisma.XOR<Prisma.user_profilesCreateInput, Prisma.user_profilesUncheckedCreateInput>;
};
export type user_profilesCreateManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    data: Prisma.user_profilesCreateManyInput | Prisma.user_profilesCreateManyInput[];
    skipDuplicates?: boolean;
};
export type user_profilesCreateManyAndReturnArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.user_profilesSelectCreateManyAndReturn<ExtArgs> | null;
    omit?: Prisma.user_profilesOmit<ExtArgs> | null;
    data: Prisma.user_profilesCreateManyInput | Prisma.user_profilesCreateManyInput[];
    skipDuplicates?: boolean;
    include?: Prisma.user_profilesIncludeCreateManyAndReturn<ExtArgs> | null;
};
export type user_profilesUpdateArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.user_profilesSelect<ExtArgs> | null;
    omit?: Prisma.user_profilesOmit<ExtArgs> | null;
    include?: Prisma.user_profilesInclude<ExtArgs> | null;
    data: Prisma.XOR<Prisma.user_profilesUpdateInput, Prisma.user_profilesUncheckedUpdateInput>;
    where: Prisma.user_profilesWhereUniqueInput;
};
export type user_profilesUpdateManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    data: Prisma.XOR<Prisma.user_profilesUpdateManyMutationInput, Prisma.user_profilesUncheckedUpdateManyInput>;
    where?: Prisma.user_profilesWhereInput;
    limit?: number;
};
export type user_profilesUpdateManyAndReturnArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.user_profilesSelectUpdateManyAndReturn<ExtArgs> | null;
    omit?: Prisma.user_profilesOmit<ExtArgs> | null;
    data: Prisma.XOR<Prisma.user_profilesUpdateManyMutationInput, Prisma.user_profilesUncheckedUpdateManyInput>;
    where?: Prisma.user_profilesWhereInput;
    limit?: number;
    include?: Prisma.user_profilesIncludeUpdateManyAndReturn<ExtArgs> | null;
};
export type user_profilesUpsertArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.user_profilesSelect<ExtArgs> | null;
    omit?: Prisma.user_profilesOmit<ExtArgs> | null;
    include?: Prisma.user_profilesInclude<ExtArgs> | null;
    where: Prisma.user_profilesWhereUniqueInput;
    create: Prisma.XOR<Prisma.user_profilesCreateInput, Prisma.user_profilesUncheckedCreateInput>;
    update: Prisma.XOR<Prisma.user_profilesUpdateInput, Prisma.user_profilesUncheckedUpdateInput>;
};
export type user_profilesDeleteArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.user_profilesSelect<ExtArgs> | null;
    omit?: Prisma.user_profilesOmit<ExtArgs> | null;
    include?: Prisma.user_profilesInclude<ExtArgs> | null;
    where: Prisma.user_profilesWhereUniqueInput;
};
export type user_profilesDeleteManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    where?: Prisma.user_profilesWhereInput;
    limit?: number;
};
export type user_profilesDefaultArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.user_profilesSelect<ExtArgs> | null;
    omit?: Prisma.user_profilesOmit<ExtArgs> | null;
    include?: Prisma.user_profilesInclude<ExtArgs> | null;
};
