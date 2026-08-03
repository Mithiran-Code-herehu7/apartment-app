import type * as runtime from "@prisma/client/runtime/client";
import type * as Prisma from "../internal/prismaNamespace.js";
export type categoriesModel = runtime.Types.Result.DefaultSelection<Prisma.$categoriesPayload>;
export type AggregateCategories = {
    _count: CategoriesCountAggregateOutputType | null;
    _avg: CategoriesAvgAggregateOutputType | null;
    _sum: CategoriesSumAggregateOutputType | null;
    _min: CategoriesMinAggregateOutputType | null;
    _max: CategoriesMaxAggregateOutputType | null;
};
export type CategoriesAvgAggregateOutputType = {
    display_order: number | null;
};
export type CategoriesSumAggregateOutputType = {
    display_order: number | null;
};
export type CategoriesMinAggregateOutputType = {
    id: string | null;
    parent_id: string | null;
    name: string | null;
    slug: string | null;
    description: string | null;
    icon_url: string | null;
    display_order: number | null;
    is_active: boolean | null;
    created_at: Date | null;
    updated_at: Date | null;
};
export type CategoriesMaxAggregateOutputType = {
    id: string | null;
    parent_id: string | null;
    name: string | null;
    slug: string | null;
    description: string | null;
    icon_url: string | null;
    display_order: number | null;
    is_active: boolean | null;
    created_at: Date | null;
    updated_at: Date | null;
};
export type CategoriesCountAggregateOutputType = {
    id: number;
    parent_id: number;
    name: number;
    slug: number;
    description: number;
    icon_url: number;
    display_order: number;
    is_active: number;
    created_at: number;
    updated_at: number;
    _all: number;
};
export type CategoriesAvgAggregateInputType = {
    display_order?: true;
};
export type CategoriesSumAggregateInputType = {
    display_order?: true;
};
export type CategoriesMinAggregateInputType = {
    id?: true;
    parent_id?: true;
    name?: true;
    slug?: true;
    description?: true;
    icon_url?: true;
    display_order?: true;
    is_active?: true;
    created_at?: true;
    updated_at?: true;
};
export type CategoriesMaxAggregateInputType = {
    id?: true;
    parent_id?: true;
    name?: true;
    slug?: true;
    description?: true;
    icon_url?: true;
    display_order?: true;
    is_active?: true;
    created_at?: true;
    updated_at?: true;
};
export type CategoriesCountAggregateInputType = {
    id?: true;
    parent_id?: true;
    name?: true;
    slug?: true;
    description?: true;
    icon_url?: true;
    display_order?: true;
    is_active?: true;
    created_at?: true;
    updated_at?: true;
    _all?: true;
};
export type CategoriesAggregateArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    where?: Prisma.categoriesWhereInput;
    orderBy?: Prisma.categoriesOrderByWithRelationInput | Prisma.categoriesOrderByWithRelationInput[];
    cursor?: Prisma.categoriesWhereUniqueInput;
    take?: number;
    skip?: number;
    _count?: true | CategoriesCountAggregateInputType;
    _avg?: CategoriesAvgAggregateInputType;
    _sum?: CategoriesSumAggregateInputType;
    _min?: CategoriesMinAggregateInputType;
    _max?: CategoriesMaxAggregateInputType;
};
export type GetCategoriesAggregateType<T extends CategoriesAggregateArgs> = {
    [P in keyof T & keyof AggregateCategories]: P extends '_count' | 'count' ? T[P] extends true ? number : Prisma.GetScalarType<T[P], AggregateCategories[P]> : Prisma.GetScalarType<T[P], AggregateCategories[P]>;
};
export type categoriesGroupByArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    where?: Prisma.categoriesWhereInput;
    orderBy?: Prisma.categoriesOrderByWithAggregationInput | Prisma.categoriesOrderByWithAggregationInput[];
    by: Prisma.CategoriesScalarFieldEnum[] | Prisma.CategoriesScalarFieldEnum;
    having?: Prisma.categoriesScalarWhereWithAggregatesInput;
    take?: number;
    skip?: number;
    _count?: CategoriesCountAggregateInputType | true;
    _avg?: CategoriesAvgAggregateInputType;
    _sum?: CategoriesSumAggregateInputType;
    _min?: CategoriesMinAggregateInputType;
    _max?: CategoriesMaxAggregateInputType;
};
export type CategoriesGroupByOutputType = {
    id: string;
    parent_id: string | null;
    name: string;
    slug: string;
    description: string | null;
    icon_url: string | null;
    display_order: number;
    is_active: boolean;
    created_at: Date;
    updated_at: Date;
    _count: CategoriesCountAggregateOutputType | null;
    _avg: CategoriesAvgAggregateOutputType | null;
    _sum: CategoriesSumAggregateOutputType | null;
    _min: CategoriesMinAggregateOutputType | null;
    _max: CategoriesMaxAggregateOutputType | null;
};
export type GetCategoriesGroupByPayload<T extends categoriesGroupByArgs> = Prisma.PrismaPromise<Array<Prisma.PickEnumerable<CategoriesGroupByOutputType, T['by']> & {
    [P in ((keyof T) & (keyof CategoriesGroupByOutputType))]: P extends '_count' ? T[P] extends boolean ? number : Prisma.GetScalarType<T[P], CategoriesGroupByOutputType[P]> : Prisma.GetScalarType<T[P], CategoriesGroupByOutputType[P]>;
}>>;
export type categoriesWhereInput = {
    AND?: Prisma.categoriesWhereInput | Prisma.categoriesWhereInput[];
    OR?: Prisma.categoriesWhereInput[];
    NOT?: Prisma.categoriesWhereInput | Prisma.categoriesWhereInput[];
    id?: Prisma.UuidFilter<"categories"> | string;
    parent_id?: Prisma.UuidNullableFilter<"categories"> | string | null;
    name?: Prisma.StringFilter<"categories"> | string;
    slug?: Prisma.StringFilter<"categories"> | string;
    description?: Prisma.StringNullableFilter<"categories"> | string | null;
    icon_url?: Prisma.StringNullableFilter<"categories"> | string | null;
    display_order?: Prisma.IntFilter<"categories"> | number;
    is_active?: Prisma.BoolFilter<"categories"> | boolean;
    created_at?: Prisma.DateTimeFilter<"categories"> | Date | string;
    updated_at?: Prisma.DateTimeFilter<"categories"> | Date | string;
    categories?: Prisma.XOR<Prisma.CategoriesNullableScalarRelationFilter, Prisma.categoriesWhereInput> | null;
    other_categories?: Prisma.CategoriesListRelationFilter;
    listings?: Prisma.ListingsListRelationFilter;
};
export type categoriesOrderByWithRelationInput = {
    id?: Prisma.SortOrder;
    parent_id?: Prisma.SortOrderInput | Prisma.SortOrder;
    name?: Prisma.SortOrder;
    slug?: Prisma.SortOrder;
    description?: Prisma.SortOrderInput | Prisma.SortOrder;
    icon_url?: Prisma.SortOrderInput | Prisma.SortOrder;
    display_order?: Prisma.SortOrder;
    is_active?: Prisma.SortOrder;
    created_at?: Prisma.SortOrder;
    updated_at?: Prisma.SortOrder;
    categories?: Prisma.categoriesOrderByWithRelationInput;
    other_categories?: Prisma.categoriesOrderByRelationAggregateInput;
    listings?: Prisma.listingsOrderByRelationAggregateInput;
};
export type categoriesWhereUniqueInput = Prisma.AtLeast<{
    id?: string;
    slug?: string;
    AND?: Prisma.categoriesWhereInput | Prisma.categoriesWhereInput[];
    OR?: Prisma.categoriesWhereInput[];
    NOT?: Prisma.categoriesWhereInput | Prisma.categoriesWhereInput[];
    parent_id?: Prisma.UuidNullableFilter<"categories"> | string | null;
    name?: Prisma.StringFilter<"categories"> | string;
    description?: Prisma.StringNullableFilter<"categories"> | string | null;
    icon_url?: Prisma.StringNullableFilter<"categories"> | string | null;
    display_order?: Prisma.IntFilter<"categories"> | number;
    is_active?: Prisma.BoolFilter<"categories"> | boolean;
    created_at?: Prisma.DateTimeFilter<"categories"> | Date | string;
    updated_at?: Prisma.DateTimeFilter<"categories"> | Date | string;
    categories?: Prisma.XOR<Prisma.CategoriesNullableScalarRelationFilter, Prisma.categoriesWhereInput> | null;
    other_categories?: Prisma.CategoriesListRelationFilter;
    listings?: Prisma.ListingsListRelationFilter;
}, "id" | "slug">;
export type categoriesOrderByWithAggregationInput = {
    id?: Prisma.SortOrder;
    parent_id?: Prisma.SortOrderInput | Prisma.SortOrder;
    name?: Prisma.SortOrder;
    slug?: Prisma.SortOrder;
    description?: Prisma.SortOrderInput | Prisma.SortOrder;
    icon_url?: Prisma.SortOrderInput | Prisma.SortOrder;
    display_order?: Prisma.SortOrder;
    is_active?: Prisma.SortOrder;
    created_at?: Prisma.SortOrder;
    updated_at?: Prisma.SortOrder;
    _count?: Prisma.categoriesCountOrderByAggregateInput;
    _avg?: Prisma.categoriesAvgOrderByAggregateInput;
    _max?: Prisma.categoriesMaxOrderByAggregateInput;
    _min?: Prisma.categoriesMinOrderByAggregateInput;
    _sum?: Prisma.categoriesSumOrderByAggregateInput;
};
export type categoriesScalarWhereWithAggregatesInput = {
    AND?: Prisma.categoriesScalarWhereWithAggregatesInput | Prisma.categoriesScalarWhereWithAggregatesInput[];
    OR?: Prisma.categoriesScalarWhereWithAggregatesInput[];
    NOT?: Prisma.categoriesScalarWhereWithAggregatesInput | Prisma.categoriesScalarWhereWithAggregatesInput[];
    id?: Prisma.UuidWithAggregatesFilter<"categories"> | string;
    parent_id?: Prisma.UuidNullableWithAggregatesFilter<"categories"> | string | null;
    name?: Prisma.StringWithAggregatesFilter<"categories"> | string;
    slug?: Prisma.StringWithAggregatesFilter<"categories"> | string;
    description?: Prisma.StringNullableWithAggregatesFilter<"categories"> | string | null;
    icon_url?: Prisma.StringNullableWithAggregatesFilter<"categories"> | string | null;
    display_order?: Prisma.IntWithAggregatesFilter<"categories"> | number;
    is_active?: Prisma.BoolWithAggregatesFilter<"categories"> | boolean;
    created_at?: Prisma.DateTimeWithAggregatesFilter<"categories"> | Date | string;
    updated_at?: Prisma.DateTimeWithAggregatesFilter<"categories"> | Date | string;
};
export type categoriesCreateInput = {
    id?: string;
    name: string;
    slug: string;
    description?: string | null;
    icon_url?: string | null;
    display_order?: number;
    is_active?: boolean;
    created_at?: Date | string;
    updated_at?: Date | string;
    categories?: Prisma.categoriesCreateNestedOneWithoutOther_categoriesInput;
    other_categories?: Prisma.categoriesCreateNestedManyWithoutCategoriesInput;
    listings?: Prisma.listingsCreateNestedManyWithoutCategoriesInput;
};
export type categoriesUncheckedCreateInput = {
    id?: string;
    parent_id?: string | null;
    name: string;
    slug: string;
    description?: string | null;
    icon_url?: string | null;
    display_order?: number;
    is_active?: boolean;
    created_at?: Date | string;
    updated_at?: Date | string;
    other_categories?: Prisma.categoriesUncheckedCreateNestedManyWithoutCategoriesInput;
    listings?: Prisma.listingsUncheckedCreateNestedManyWithoutCategoriesInput;
};
export type categoriesUpdateInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    name?: Prisma.StringFieldUpdateOperationsInput | string;
    slug?: Prisma.StringFieldUpdateOperationsInput | string;
    description?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    icon_url?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    display_order?: Prisma.IntFieldUpdateOperationsInput | number;
    is_active?: Prisma.BoolFieldUpdateOperationsInput | boolean;
    created_at?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    updated_at?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    categories?: Prisma.categoriesUpdateOneWithoutOther_categoriesNestedInput;
    other_categories?: Prisma.categoriesUpdateManyWithoutCategoriesNestedInput;
    listings?: Prisma.listingsUpdateManyWithoutCategoriesNestedInput;
};
export type categoriesUncheckedUpdateInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    parent_id?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    name?: Prisma.StringFieldUpdateOperationsInput | string;
    slug?: Prisma.StringFieldUpdateOperationsInput | string;
    description?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    icon_url?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    display_order?: Prisma.IntFieldUpdateOperationsInput | number;
    is_active?: Prisma.BoolFieldUpdateOperationsInput | boolean;
    created_at?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    updated_at?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    other_categories?: Prisma.categoriesUncheckedUpdateManyWithoutCategoriesNestedInput;
    listings?: Prisma.listingsUncheckedUpdateManyWithoutCategoriesNestedInput;
};
export type categoriesCreateManyInput = {
    id?: string;
    parent_id?: string | null;
    name: string;
    slug: string;
    description?: string | null;
    icon_url?: string | null;
    display_order?: number;
    is_active?: boolean;
    created_at?: Date | string;
    updated_at?: Date | string;
};
export type categoriesUpdateManyMutationInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    name?: Prisma.StringFieldUpdateOperationsInput | string;
    slug?: Prisma.StringFieldUpdateOperationsInput | string;
    description?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    icon_url?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    display_order?: Prisma.IntFieldUpdateOperationsInput | number;
    is_active?: Prisma.BoolFieldUpdateOperationsInput | boolean;
    created_at?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    updated_at?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
};
export type categoriesUncheckedUpdateManyInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    parent_id?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    name?: Prisma.StringFieldUpdateOperationsInput | string;
    slug?: Prisma.StringFieldUpdateOperationsInput | string;
    description?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    icon_url?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    display_order?: Prisma.IntFieldUpdateOperationsInput | number;
    is_active?: Prisma.BoolFieldUpdateOperationsInput | boolean;
    created_at?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    updated_at?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
};
export type CategoriesNullableScalarRelationFilter = {
    is?: Prisma.categoriesWhereInput | null;
    isNot?: Prisma.categoriesWhereInput | null;
};
export type CategoriesListRelationFilter = {
    every?: Prisma.categoriesWhereInput;
    some?: Prisma.categoriesWhereInput;
    none?: Prisma.categoriesWhereInput;
};
export type categoriesOrderByRelationAggregateInput = {
    _count?: Prisma.SortOrder;
};
export type categoriesCountOrderByAggregateInput = {
    id?: Prisma.SortOrder;
    parent_id?: Prisma.SortOrder;
    name?: Prisma.SortOrder;
    slug?: Prisma.SortOrder;
    description?: Prisma.SortOrder;
    icon_url?: Prisma.SortOrder;
    display_order?: Prisma.SortOrder;
    is_active?: Prisma.SortOrder;
    created_at?: Prisma.SortOrder;
    updated_at?: Prisma.SortOrder;
};
export type categoriesAvgOrderByAggregateInput = {
    display_order?: Prisma.SortOrder;
};
export type categoriesMaxOrderByAggregateInput = {
    id?: Prisma.SortOrder;
    parent_id?: Prisma.SortOrder;
    name?: Prisma.SortOrder;
    slug?: Prisma.SortOrder;
    description?: Prisma.SortOrder;
    icon_url?: Prisma.SortOrder;
    display_order?: Prisma.SortOrder;
    is_active?: Prisma.SortOrder;
    created_at?: Prisma.SortOrder;
    updated_at?: Prisma.SortOrder;
};
export type categoriesMinOrderByAggregateInput = {
    id?: Prisma.SortOrder;
    parent_id?: Prisma.SortOrder;
    name?: Prisma.SortOrder;
    slug?: Prisma.SortOrder;
    description?: Prisma.SortOrder;
    icon_url?: Prisma.SortOrder;
    display_order?: Prisma.SortOrder;
    is_active?: Prisma.SortOrder;
    created_at?: Prisma.SortOrder;
    updated_at?: Prisma.SortOrder;
};
export type categoriesSumOrderByAggregateInput = {
    display_order?: Prisma.SortOrder;
};
export type CategoriesScalarRelationFilter = {
    is?: Prisma.categoriesWhereInput;
    isNot?: Prisma.categoriesWhereInput;
};
export type categoriesCreateNestedOneWithoutOther_categoriesInput = {
    create?: Prisma.XOR<Prisma.categoriesCreateWithoutOther_categoriesInput, Prisma.categoriesUncheckedCreateWithoutOther_categoriesInput>;
    connectOrCreate?: Prisma.categoriesCreateOrConnectWithoutOther_categoriesInput;
    connect?: Prisma.categoriesWhereUniqueInput;
};
export type categoriesCreateNestedManyWithoutCategoriesInput = {
    create?: Prisma.XOR<Prisma.categoriesCreateWithoutCategoriesInput, Prisma.categoriesUncheckedCreateWithoutCategoriesInput> | Prisma.categoriesCreateWithoutCategoriesInput[] | Prisma.categoriesUncheckedCreateWithoutCategoriesInput[];
    connectOrCreate?: Prisma.categoriesCreateOrConnectWithoutCategoriesInput | Prisma.categoriesCreateOrConnectWithoutCategoriesInput[];
    createMany?: Prisma.categoriesCreateManyCategoriesInputEnvelope;
    connect?: Prisma.categoriesWhereUniqueInput | Prisma.categoriesWhereUniqueInput[];
};
export type categoriesUncheckedCreateNestedManyWithoutCategoriesInput = {
    create?: Prisma.XOR<Prisma.categoriesCreateWithoutCategoriesInput, Prisma.categoriesUncheckedCreateWithoutCategoriesInput> | Prisma.categoriesCreateWithoutCategoriesInput[] | Prisma.categoriesUncheckedCreateWithoutCategoriesInput[];
    connectOrCreate?: Prisma.categoriesCreateOrConnectWithoutCategoriesInput | Prisma.categoriesCreateOrConnectWithoutCategoriesInput[];
    createMany?: Prisma.categoriesCreateManyCategoriesInputEnvelope;
    connect?: Prisma.categoriesWhereUniqueInput | Prisma.categoriesWhereUniqueInput[];
};
export type categoriesUpdateOneWithoutOther_categoriesNestedInput = {
    create?: Prisma.XOR<Prisma.categoriesCreateWithoutOther_categoriesInput, Prisma.categoriesUncheckedCreateWithoutOther_categoriesInput>;
    connectOrCreate?: Prisma.categoriesCreateOrConnectWithoutOther_categoriesInput;
    upsert?: Prisma.categoriesUpsertWithoutOther_categoriesInput;
    disconnect?: Prisma.categoriesWhereInput | boolean;
    delete?: Prisma.categoriesWhereInput | boolean;
    connect?: Prisma.categoriesWhereUniqueInput;
    update?: Prisma.XOR<Prisma.XOR<Prisma.categoriesUpdateToOneWithWhereWithoutOther_categoriesInput, Prisma.categoriesUpdateWithoutOther_categoriesInput>, Prisma.categoriesUncheckedUpdateWithoutOther_categoriesInput>;
};
export type categoriesUpdateManyWithoutCategoriesNestedInput = {
    create?: Prisma.XOR<Prisma.categoriesCreateWithoutCategoriesInput, Prisma.categoriesUncheckedCreateWithoutCategoriesInput> | Prisma.categoriesCreateWithoutCategoriesInput[] | Prisma.categoriesUncheckedCreateWithoutCategoriesInput[];
    connectOrCreate?: Prisma.categoriesCreateOrConnectWithoutCategoriesInput | Prisma.categoriesCreateOrConnectWithoutCategoriesInput[];
    upsert?: Prisma.categoriesUpsertWithWhereUniqueWithoutCategoriesInput | Prisma.categoriesUpsertWithWhereUniqueWithoutCategoriesInput[];
    createMany?: Prisma.categoriesCreateManyCategoriesInputEnvelope;
    set?: Prisma.categoriesWhereUniqueInput | Prisma.categoriesWhereUniqueInput[];
    disconnect?: Prisma.categoriesWhereUniqueInput | Prisma.categoriesWhereUniqueInput[];
    delete?: Prisma.categoriesWhereUniqueInput | Prisma.categoriesWhereUniqueInput[];
    connect?: Prisma.categoriesWhereUniqueInput | Prisma.categoriesWhereUniqueInput[];
    update?: Prisma.categoriesUpdateWithWhereUniqueWithoutCategoriesInput | Prisma.categoriesUpdateWithWhereUniqueWithoutCategoriesInput[];
    updateMany?: Prisma.categoriesUpdateManyWithWhereWithoutCategoriesInput | Prisma.categoriesUpdateManyWithWhereWithoutCategoriesInput[];
    deleteMany?: Prisma.categoriesScalarWhereInput | Prisma.categoriesScalarWhereInput[];
};
export type categoriesUncheckedUpdateManyWithoutCategoriesNestedInput = {
    create?: Prisma.XOR<Prisma.categoriesCreateWithoutCategoriesInput, Prisma.categoriesUncheckedCreateWithoutCategoriesInput> | Prisma.categoriesCreateWithoutCategoriesInput[] | Prisma.categoriesUncheckedCreateWithoutCategoriesInput[];
    connectOrCreate?: Prisma.categoriesCreateOrConnectWithoutCategoriesInput | Prisma.categoriesCreateOrConnectWithoutCategoriesInput[];
    upsert?: Prisma.categoriesUpsertWithWhereUniqueWithoutCategoriesInput | Prisma.categoriesUpsertWithWhereUniqueWithoutCategoriesInput[];
    createMany?: Prisma.categoriesCreateManyCategoriesInputEnvelope;
    set?: Prisma.categoriesWhereUniqueInput | Prisma.categoriesWhereUniqueInput[];
    disconnect?: Prisma.categoriesWhereUniqueInput | Prisma.categoriesWhereUniqueInput[];
    delete?: Prisma.categoriesWhereUniqueInput | Prisma.categoriesWhereUniqueInput[];
    connect?: Prisma.categoriesWhereUniqueInput | Prisma.categoriesWhereUniqueInput[];
    update?: Prisma.categoriesUpdateWithWhereUniqueWithoutCategoriesInput | Prisma.categoriesUpdateWithWhereUniqueWithoutCategoriesInput[];
    updateMany?: Prisma.categoriesUpdateManyWithWhereWithoutCategoriesInput | Prisma.categoriesUpdateManyWithWhereWithoutCategoriesInput[];
    deleteMany?: Prisma.categoriesScalarWhereInput | Prisma.categoriesScalarWhereInput[];
};
export type categoriesCreateNestedOneWithoutListingsInput = {
    create?: Prisma.XOR<Prisma.categoriesCreateWithoutListingsInput, Prisma.categoriesUncheckedCreateWithoutListingsInput>;
    connectOrCreate?: Prisma.categoriesCreateOrConnectWithoutListingsInput;
    connect?: Prisma.categoriesWhereUniqueInput;
};
export type categoriesUpdateOneRequiredWithoutListingsNestedInput = {
    create?: Prisma.XOR<Prisma.categoriesCreateWithoutListingsInput, Prisma.categoriesUncheckedCreateWithoutListingsInput>;
    connectOrCreate?: Prisma.categoriesCreateOrConnectWithoutListingsInput;
    upsert?: Prisma.categoriesUpsertWithoutListingsInput;
    connect?: Prisma.categoriesWhereUniqueInput;
    update?: Prisma.XOR<Prisma.XOR<Prisma.categoriesUpdateToOneWithWhereWithoutListingsInput, Prisma.categoriesUpdateWithoutListingsInput>, Prisma.categoriesUncheckedUpdateWithoutListingsInput>;
};
export type categoriesCreateWithoutOther_categoriesInput = {
    id?: string;
    name: string;
    slug: string;
    description?: string | null;
    icon_url?: string | null;
    display_order?: number;
    is_active?: boolean;
    created_at?: Date | string;
    updated_at?: Date | string;
    categories?: Prisma.categoriesCreateNestedOneWithoutOther_categoriesInput;
    listings?: Prisma.listingsCreateNestedManyWithoutCategoriesInput;
};
export type categoriesUncheckedCreateWithoutOther_categoriesInput = {
    id?: string;
    parent_id?: string | null;
    name: string;
    slug: string;
    description?: string | null;
    icon_url?: string | null;
    display_order?: number;
    is_active?: boolean;
    created_at?: Date | string;
    updated_at?: Date | string;
    listings?: Prisma.listingsUncheckedCreateNestedManyWithoutCategoriesInput;
};
export type categoriesCreateOrConnectWithoutOther_categoriesInput = {
    where: Prisma.categoriesWhereUniqueInput;
    create: Prisma.XOR<Prisma.categoriesCreateWithoutOther_categoriesInput, Prisma.categoriesUncheckedCreateWithoutOther_categoriesInput>;
};
export type categoriesCreateWithoutCategoriesInput = {
    id?: string;
    name: string;
    slug: string;
    description?: string | null;
    icon_url?: string | null;
    display_order?: number;
    is_active?: boolean;
    created_at?: Date | string;
    updated_at?: Date | string;
    other_categories?: Prisma.categoriesCreateNestedManyWithoutCategoriesInput;
    listings?: Prisma.listingsCreateNestedManyWithoutCategoriesInput;
};
export type categoriesUncheckedCreateWithoutCategoriesInput = {
    id?: string;
    name: string;
    slug: string;
    description?: string | null;
    icon_url?: string | null;
    display_order?: number;
    is_active?: boolean;
    created_at?: Date | string;
    updated_at?: Date | string;
    other_categories?: Prisma.categoriesUncheckedCreateNestedManyWithoutCategoriesInput;
    listings?: Prisma.listingsUncheckedCreateNestedManyWithoutCategoriesInput;
};
export type categoriesCreateOrConnectWithoutCategoriesInput = {
    where: Prisma.categoriesWhereUniqueInput;
    create: Prisma.XOR<Prisma.categoriesCreateWithoutCategoriesInput, Prisma.categoriesUncheckedCreateWithoutCategoriesInput>;
};
export type categoriesCreateManyCategoriesInputEnvelope = {
    data: Prisma.categoriesCreateManyCategoriesInput | Prisma.categoriesCreateManyCategoriesInput[];
    skipDuplicates?: boolean;
};
export type categoriesUpsertWithoutOther_categoriesInput = {
    update: Prisma.XOR<Prisma.categoriesUpdateWithoutOther_categoriesInput, Prisma.categoriesUncheckedUpdateWithoutOther_categoriesInput>;
    create: Prisma.XOR<Prisma.categoriesCreateWithoutOther_categoriesInput, Prisma.categoriesUncheckedCreateWithoutOther_categoriesInput>;
    where?: Prisma.categoriesWhereInput;
};
export type categoriesUpdateToOneWithWhereWithoutOther_categoriesInput = {
    where?: Prisma.categoriesWhereInput;
    data: Prisma.XOR<Prisma.categoriesUpdateWithoutOther_categoriesInput, Prisma.categoriesUncheckedUpdateWithoutOther_categoriesInput>;
};
export type categoriesUpdateWithoutOther_categoriesInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    name?: Prisma.StringFieldUpdateOperationsInput | string;
    slug?: Prisma.StringFieldUpdateOperationsInput | string;
    description?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    icon_url?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    display_order?: Prisma.IntFieldUpdateOperationsInput | number;
    is_active?: Prisma.BoolFieldUpdateOperationsInput | boolean;
    created_at?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    updated_at?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    categories?: Prisma.categoriesUpdateOneWithoutOther_categoriesNestedInput;
    listings?: Prisma.listingsUpdateManyWithoutCategoriesNestedInput;
};
export type categoriesUncheckedUpdateWithoutOther_categoriesInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    parent_id?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    name?: Prisma.StringFieldUpdateOperationsInput | string;
    slug?: Prisma.StringFieldUpdateOperationsInput | string;
    description?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    icon_url?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    display_order?: Prisma.IntFieldUpdateOperationsInput | number;
    is_active?: Prisma.BoolFieldUpdateOperationsInput | boolean;
    created_at?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    updated_at?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    listings?: Prisma.listingsUncheckedUpdateManyWithoutCategoriesNestedInput;
};
export type categoriesUpsertWithWhereUniqueWithoutCategoriesInput = {
    where: Prisma.categoriesWhereUniqueInput;
    update: Prisma.XOR<Prisma.categoriesUpdateWithoutCategoriesInput, Prisma.categoriesUncheckedUpdateWithoutCategoriesInput>;
    create: Prisma.XOR<Prisma.categoriesCreateWithoutCategoriesInput, Prisma.categoriesUncheckedCreateWithoutCategoriesInput>;
};
export type categoriesUpdateWithWhereUniqueWithoutCategoriesInput = {
    where: Prisma.categoriesWhereUniqueInput;
    data: Prisma.XOR<Prisma.categoriesUpdateWithoutCategoriesInput, Prisma.categoriesUncheckedUpdateWithoutCategoriesInput>;
};
export type categoriesUpdateManyWithWhereWithoutCategoriesInput = {
    where: Prisma.categoriesScalarWhereInput;
    data: Prisma.XOR<Prisma.categoriesUpdateManyMutationInput, Prisma.categoriesUncheckedUpdateManyWithoutCategoriesInput>;
};
export type categoriesScalarWhereInput = {
    AND?: Prisma.categoriesScalarWhereInput | Prisma.categoriesScalarWhereInput[];
    OR?: Prisma.categoriesScalarWhereInput[];
    NOT?: Prisma.categoriesScalarWhereInput | Prisma.categoriesScalarWhereInput[];
    id?: Prisma.UuidFilter<"categories"> | string;
    parent_id?: Prisma.UuidNullableFilter<"categories"> | string | null;
    name?: Prisma.StringFilter<"categories"> | string;
    slug?: Prisma.StringFilter<"categories"> | string;
    description?: Prisma.StringNullableFilter<"categories"> | string | null;
    icon_url?: Prisma.StringNullableFilter<"categories"> | string | null;
    display_order?: Prisma.IntFilter<"categories"> | number;
    is_active?: Prisma.BoolFilter<"categories"> | boolean;
    created_at?: Prisma.DateTimeFilter<"categories"> | Date | string;
    updated_at?: Prisma.DateTimeFilter<"categories"> | Date | string;
};
export type categoriesCreateWithoutListingsInput = {
    id?: string;
    name: string;
    slug: string;
    description?: string | null;
    icon_url?: string | null;
    display_order?: number;
    is_active?: boolean;
    created_at?: Date | string;
    updated_at?: Date | string;
    categories?: Prisma.categoriesCreateNestedOneWithoutOther_categoriesInput;
    other_categories?: Prisma.categoriesCreateNestedManyWithoutCategoriesInput;
};
export type categoriesUncheckedCreateWithoutListingsInput = {
    id?: string;
    parent_id?: string | null;
    name: string;
    slug: string;
    description?: string | null;
    icon_url?: string | null;
    display_order?: number;
    is_active?: boolean;
    created_at?: Date | string;
    updated_at?: Date | string;
    other_categories?: Prisma.categoriesUncheckedCreateNestedManyWithoutCategoriesInput;
};
export type categoriesCreateOrConnectWithoutListingsInput = {
    where: Prisma.categoriesWhereUniqueInput;
    create: Prisma.XOR<Prisma.categoriesCreateWithoutListingsInput, Prisma.categoriesUncheckedCreateWithoutListingsInput>;
};
export type categoriesUpsertWithoutListingsInput = {
    update: Prisma.XOR<Prisma.categoriesUpdateWithoutListingsInput, Prisma.categoriesUncheckedUpdateWithoutListingsInput>;
    create: Prisma.XOR<Prisma.categoriesCreateWithoutListingsInput, Prisma.categoriesUncheckedCreateWithoutListingsInput>;
    where?: Prisma.categoriesWhereInput;
};
export type categoriesUpdateToOneWithWhereWithoutListingsInput = {
    where?: Prisma.categoriesWhereInput;
    data: Prisma.XOR<Prisma.categoriesUpdateWithoutListingsInput, Prisma.categoriesUncheckedUpdateWithoutListingsInput>;
};
export type categoriesUpdateWithoutListingsInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    name?: Prisma.StringFieldUpdateOperationsInput | string;
    slug?: Prisma.StringFieldUpdateOperationsInput | string;
    description?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    icon_url?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    display_order?: Prisma.IntFieldUpdateOperationsInput | number;
    is_active?: Prisma.BoolFieldUpdateOperationsInput | boolean;
    created_at?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    updated_at?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    categories?: Prisma.categoriesUpdateOneWithoutOther_categoriesNestedInput;
    other_categories?: Prisma.categoriesUpdateManyWithoutCategoriesNestedInput;
};
export type categoriesUncheckedUpdateWithoutListingsInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    parent_id?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    name?: Prisma.StringFieldUpdateOperationsInput | string;
    slug?: Prisma.StringFieldUpdateOperationsInput | string;
    description?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    icon_url?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    display_order?: Prisma.IntFieldUpdateOperationsInput | number;
    is_active?: Prisma.BoolFieldUpdateOperationsInput | boolean;
    created_at?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    updated_at?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    other_categories?: Prisma.categoriesUncheckedUpdateManyWithoutCategoriesNestedInput;
};
export type categoriesCreateManyCategoriesInput = {
    id?: string;
    name: string;
    slug: string;
    description?: string | null;
    icon_url?: string | null;
    display_order?: number;
    is_active?: boolean;
    created_at?: Date | string;
    updated_at?: Date | string;
};
export type categoriesUpdateWithoutCategoriesInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    name?: Prisma.StringFieldUpdateOperationsInput | string;
    slug?: Prisma.StringFieldUpdateOperationsInput | string;
    description?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    icon_url?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    display_order?: Prisma.IntFieldUpdateOperationsInput | number;
    is_active?: Prisma.BoolFieldUpdateOperationsInput | boolean;
    created_at?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    updated_at?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    other_categories?: Prisma.categoriesUpdateManyWithoutCategoriesNestedInput;
    listings?: Prisma.listingsUpdateManyWithoutCategoriesNestedInput;
};
export type categoriesUncheckedUpdateWithoutCategoriesInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    name?: Prisma.StringFieldUpdateOperationsInput | string;
    slug?: Prisma.StringFieldUpdateOperationsInput | string;
    description?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    icon_url?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    display_order?: Prisma.IntFieldUpdateOperationsInput | number;
    is_active?: Prisma.BoolFieldUpdateOperationsInput | boolean;
    created_at?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    updated_at?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    other_categories?: Prisma.categoriesUncheckedUpdateManyWithoutCategoriesNestedInput;
    listings?: Prisma.listingsUncheckedUpdateManyWithoutCategoriesNestedInput;
};
export type categoriesUncheckedUpdateManyWithoutCategoriesInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    name?: Prisma.StringFieldUpdateOperationsInput | string;
    slug?: Prisma.StringFieldUpdateOperationsInput | string;
    description?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    icon_url?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    display_order?: Prisma.IntFieldUpdateOperationsInput | number;
    is_active?: Prisma.BoolFieldUpdateOperationsInput | boolean;
    created_at?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    updated_at?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
};
export type CategoriesCountOutputType = {
    other_categories: number;
    listings: number;
};
export type CategoriesCountOutputTypeSelect<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    other_categories?: boolean | CategoriesCountOutputTypeCountOther_categoriesArgs;
    listings?: boolean | CategoriesCountOutputTypeCountListingsArgs;
};
export type CategoriesCountOutputTypeDefaultArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.CategoriesCountOutputTypeSelect<ExtArgs> | null;
};
export type CategoriesCountOutputTypeCountOther_categoriesArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    where?: Prisma.categoriesWhereInput;
};
export type CategoriesCountOutputTypeCountListingsArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    where?: Prisma.listingsWhereInput;
};
export type categoriesSelect<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetSelect<{
    id?: boolean;
    parent_id?: boolean;
    name?: boolean;
    slug?: boolean;
    description?: boolean;
    icon_url?: boolean;
    display_order?: boolean;
    is_active?: boolean;
    created_at?: boolean;
    updated_at?: boolean;
    categories?: boolean | Prisma.categories$categoriesArgs<ExtArgs>;
    other_categories?: boolean | Prisma.categories$other_categoriesArgs<ExtArgs>;
    listings?: boolean | Prisma.categories$listingsArgs<ExtArgs>;
    _count?: boolean | Prisma.CategoriesCountOutputTypeDefaultArgs<ExtArgs>;
}, ExtArgs["result"]["categories"]>;
export type categoriesSelectCreateManyAndReturn<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetSelect<{
    id?: boolean;
    parent_id?: boolean;
    name?: boolean;
    slug?: boolean;
    description?: boolean;
    icon_url?: boolean;
    display_order?: boolean;
    is_active?: boolean;
    created_at?: boolean;
    updated_at?: boolean;
    categories?: boolean | Prisma.categories$categoriesArgs<ExtArgs>;
}, ExtArgs["result"]["categories"]>;
export type categoriesSelectUpdateManyAndReturn<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetSelect<{
    id?: boolean;
    parent_id?: boolean;
    name?: boolean;
    slug?: boolean;
    description?: boolean;
    icon_url?: boolean;
    display_order?: boolean;
    is_active?: boolean;
    created_at?: boolean;
    updated_at?: boolean;
    categories?: boolean | Prisma.categories$categoriesArgs<ExtArgs>;
}, ExtArgs["result"]["categories"]>;
export type categoriesSelectScalar = {
    id?: boolean;
    parent_id?: boolean;
    name?: boolean;
    slug?: boolean;
    description?: boolean;
    icon_url?: boolean;
    display_order?: boolean;
    is_active?: boolean;
    created_at?: boolean;
    updated_at?: boolean;
};
export type categoriesOmit<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetOmit<"id" | "parent_id" | "name" | "slug" | "description" | "icon_url" | "display_order" | "is_active" | "created_at" | "updated_at", ExtArgs["result"]["categories"]>;
export type categoriesInclude<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    categories?: boolean | Prisma.categories$categoriesArgs<ExtArgs>;
    other_categories?: boolean | Prisma.categories$other_categoriesArgs<ExtArgs>;
    listings?: boolean | Prisma.categories$listingsArgs<ExtArgs>;
    _count?: boolean | Prisma.CategoriesCountOutputTypeDefaultArgs<ExtArgs>;
};
export type categoriesIncludeCreateManyAndReturn<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    categories?: boolean | Prisma.categories$categoriesArgs<ExtArgs>;
};
export type categoriesIncludeUpdateManyAndReturn<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    categories?: boolean | Prisma.categories$categoriesArgs<ExtArgs>;
};
export type $categoriesPayload<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    name: "categories";
    objects: {
        categories: Prisma.$categoriesPayload<ExtArgs> | null;
        other_categories: Prisma.$categoriesPayload<ExtArgs>[];
        listings: Prisma.$listingsPayload<ExtArgs>[];
    };
    scalars: runtime.Types.Extensions.GetPayloadResult<{
        id: string;
        parent_id: string | null;
        name: string;
        slug: string;
        description: string | null;
        icon_url: string | null;
        display_order: number;
        is_active: boolean;
        created_at: Date;
        updated_at: Date;
    }, ExtArgs["result"]["categories"]>;
    composites: {};
};
export type categoriesGetPayload<S extends boolean | null | undefined | categoriesDefaultArgs> = runtime.Types.Result.GetResult<Prisma.$categoriesPayload, S>;
export type categoriesCountArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = Omit<categoriesFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
    select?: CategoriesCountAggregateInputType | true;
};
export interface categoriesDelegate<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: {
        types: Prisma.TypeMap<ExtArgs>['model']['categories'];
        meta: {
            name: 'categories';
        };
    };
    findUnique<T extends categoriesFindUniqueArgs>(args: Prisma.SelectSubset<T, categoriesFindUniqueArgs<ExtArgs>>): Prisma.Prisma__categoriesClient<runtime.Types.Result.GetResult<Prisma.$categoriesPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>;
    findUniqueOrThrow<T extends categoriesFindUniqueOrThrowArgs>(args: Prisma.SelectSubset<T, categoriesFindUniqueOrThrowArgs<ExtArgs>>): Prisma.Prisma__categoriesClient<runtime.Types.Result.GetResult<Prisma.$categoriesPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    findFirst<T extends categoriesFindFirstArgs>(args?: Prisma.SelectSubset<T, categoriesFindFirstArgs<ExtArgs>>): Prisma.Prisma__categoriesClient<runtime.Types.Result.GetResult<Prisma.$categoriesPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>;
    findFirstOrThrow<T extends categoriesFindFirstOrThrowArgs>(args?: Prisma.SelectSubset<T, categoriesFindFirstOrThrowArgs<ExtArgs>>): Prisma.Prisma__categoriesClient<runtime.Types.Result.GetResult<Prisma.$categoriesPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    findMany<T extends categoriesFindManyArgs>(args?: Prisma.SelectSubset<T, categoriesFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$categoriesPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>;
    create<T extends categoriesCreateArgs>(args: Prisma.SelectSubset<T, categoriesCreateArgs<ExtArgs>>): Prisma.Prisma__categoriesClient<runtime.Types.Result.GetResult<Prisma.$categoriesPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    createMany<T extends categoriesCreateManyArgs>(args?: Prisma.SelectSubset<T, categoriesCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<Prisma.BatchPayload>;
    createManyAndReturn<T extends categoriesCreateManyAndReturnArgs>(args?: Prisma.SelectSubset<T, categoriesCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$categoriesPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>;
    delete<T extends categoriesDeleteArgs>(args: Prisma.SelectSubset<T, categoriesDeleteArgs<ExtArgs>>): Prisma.Prisma__categoriesClient<runtime.Types.Result.GetResult<Prisma.$categoriesPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    update<T extends categoriesUpdateArgs>(args: Prisma.SelectSubset<T, categoriesUpdateArgs<ExtArgs>>): Prisma.Prisma__categoriesClient<runtime.Types.Result.GetResult<Prisma.$categoriesPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    deleteMany<T extends categoriesDeleteManyArgs>(args?: Prisma.SelectSubset<T, categoriesDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<Prisma.BatchPayload>;
    updateMany<T extends categoriesUpdateManyArgs>(args: Prisma.SelectSubset<T, categoriesUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<Prisma.BatchPayload>;
    updateManyAndReturn<T extends categoriesUpdateManyAndReturnArgs>(args: Prisma.SelectSubset<T, categoriesUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$categoriesPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>;
    upsert<T extends categoriesUpsertArgs>(args: Prisma.SelectSubset<T, categoriesUpsertArgs<ExtArgs>>): Prisma.Prisma__categoriesClient<runtime.Types.Result.GetResult<Prisma.$categoriesPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    count<T extends categoriesCountArgs>(args?: Prisma.Subset<T, categoriesCountArgs>): Prisma.PrismaPromise<T extends runtime.Types.Utils.Record<'select', any> ? T['select'] extends true ? number : Prisma.GetScalarType<T['select'], CategoriesCountAggregateOutputType> : number>;
    aggregate<T extends CategoriesAggregateArgs>(args: Prisma.Subset<T, CategoriesAggregateArgs>): Prisma.PrismaPromise<GetCategoriesAggregateType<T>>;
    groupBy<T extends categoriesGroupByArgs, HasSelectOrTake extends Prisma.Or<Prisma.Extends<'skip', Prisma.Keys<T>>, Prisma.Extends<'take', Prisma.Keys<T>>>, OrderByArg extends Prisma.True extends HasSelectOrTake ? {
        orderBy: categoriesGroupByArgs['orderBy'];
    } : {
        orderBy?: categoriesGroupByArgs['orderBy'];
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
    }[OrderFields]>(args: Prisma.SubsetIntersection<T, categoriesGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetCategoriesGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>;
    readonly fields: categoriesFieldRefs;
}
export interface Prisma__categoriesClient<T, Null = never, ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise";
    categories<T extends Prisma.categories$categoriesArgs<ExtArgs> = {}>(args?: Prisma.Subset<T, Prisma.categories$categoriesArgs<ExtArgs>>): Prisma.Prisma__categoriesClient<runtime.Types.Result.GetResult<Prisma.$categoriesPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>;
    other_categories<T extends Prisma.categories$other_categoriesArgs<ExtArgs> = {}>(args?: Prisma.Subset<T, Prisma.categories$other_categoriesArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$categoriesPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>;
    listings<T extends Prisma.categories$listingsArgs<ExtArgs> = {}>(args?: Prisma.Subset<T, Prisma.categories$listingsArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$listingsPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>;
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): runtime.Types.Utils.JsPromise<TResult1 | TResult2>;
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): runtime.Types.Utils.JsPromise<T | TResult>;
    finally(onfinally?: (() => void) | undefined | null): runtime.Types.Utils.JsPromise<T>;
}
export interface categoriesFieldRefs {
    readonly id: Prisma.FieldRef<"categories", 'String'>;
    readonly parent_id: Prisma.FieldRef<"categories", 'String'>;
    readonly name: Prisma.FieldRef<"categories", 'String'>;
    readonly slug: Prisma.FieldRef<"categories", 'String'>;
    readonly description: Prisma.FieldRef<"categories", 'String'>;
    readonly icon_url: Prisma.FieldRef<"categories", 'String'>;
    readonly display_order: Prisma.FieldRef<"categories", 'Int'>;
    readonly is_active: Prisma.FieldRef<"categories", 'Boolean'>;
    readonly created_at: Prisma.FieldRef<"categories", 'DateTime'>;
    readonly updated_at: Prisma.FieldRef<"categories", 'DateTime'>;
}
export type categoriesFindUniqueArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.categoriesSelect<ExtArgs> | null;
    omit?: Prisma.categoriesOmit<ExtArgs> | null;
    include?: Prisma.categoriesInclude<ExtArgs> | null;
    where: Prisma.categoriesWhereUniqueInput;
};
export type categoriesFindUniqueOrThrowArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.categoriesSelect<ExtArgs> | null;
    omit?: Prisma.categoriesOmit<ExtArgs> | null;
    include?: Prisma.categoriesInclude<ExtArgs> | null;
    where: Prisma.categoriesWhereUniqueInput;
};
export type categoriesFindFirstArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.categoriesSelect<ExtArgs> | null;
    omit?: Prisma.categoriesOmit<ExtArgs> | null;
    include?: Prisma.categoriesInclude<ExtArgs> | null;
    where?: Prisma.categoriesWhereInput;
    orderBy?: Prisma.categoriesOrderByWithRelationInput | Prisma.categoriesOrderByWithRelationInput[];
    cursor?: Prisma.categoriesWhereUniqueInput;
    take?: number;
    skip?: number;
    distinct?: Prisma.CategoriesScalarFieldEnum | Prisma.CategoriesScalarFieldEnum[];
};
export type categoriesFindFirstOrThrowArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.categoriesSelect<ExtArgs> | null;
    omit?: Prisma.categoriesOmit<ExtArgs> | null;
    include?: Prisma.categoriesInclude<ExtArgs> | null;
    where?: Prisma.categoriesWhereInput;
    orderBy?: Prisma.categoriesOrderByWithRelationInput | Prisma.categoriesOrderByWithRelationInput[];
    cursor?: Prisma.categoriesWhereUniqueInput;
    take?: number;
    skip?: number;
    distinct?: Prisma.CategoriesScalarFieldEnum | Prisma.CategoriesScalarFieldEnum[];
};
export type categoriesFindManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.categoriesSelect<ExtArgs> | null;
    omit?: Prisma.categoriesOmit<ExtArgs> | null;
    include?: Prisma.categoriesInclude<ExtArgs> | null;
    where?: Prisma.categoriesWhereInput;
    orderBy?: Prisma.categoriesOrderByWithRelationInput | Prisma.categoriesOrderByWithRelationInput[];
    cursor?: Prisma.categoriesWhereUniqueInput;
    take?: number;
    skip?: number;
    distinct?: Prisma.CategoriesScalarFieldEnum | Prisma.CategoriesScalarFieldEnum[];
};
export type categoriesCreateArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.categoriesSelect<ExtArgs> | null;
    omit?: Prisma.categoriesOmit<ExtArgs> | null;
    include?: Prisma.categoriesInclude<ExtArgs> | null;
    data: Prisma.XOR<Prisma.categoriesCreateInput, Prisma.categoriesUncheckedCreateInput>;
};
export type categoriesCreateManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    data: Prisma.categoriesCreateManyInput | Prisma.categoriesCreateManyInput[];
    skipDuplicates?: boolean;
};
export type categoriesCreateManyAndReturnArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.categoriesSelectCreateManyAndReturn<ExtArgs> | null;
    omit?: Prisma.categoriesOmit<ExtArgs> | null;
    data: Prisma.categoriesCreateManyInput | Prisma.categoriesCreateManyInput[];
    skipDuplicates?: boolean;
    include?: Prisma.categoriesIncludeCreateManyAndReturn<ExtArgs> | null;
};
export type categoriesUpdateArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.categoriesSelect<ExtArgs> | null;
    omit?: Prisma.categoriesOmit<ExtArgs> | null;
    include?: Prisma.categoriesInclude<ExtArgs> | null;
    data: Prisma.XOR<Prisma.categoriesUpdateInput, Prisma.categoriesUncheckedUpdateInput>;
    where: Prisma.categoriesWhereUniqueInput;
};
export type categoriesUpdateManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    data: Prisma.XOR<Prisma.categoriesUpdateManyMutationInput, Prisma.categoriesUncheckedUpdateManyInput>;
    where?: Prisma.categoriesWhereInput;
    limit?: number;
};
export type categoriesUpdateManyAndReturnArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.categoriesSelectUpdateManyAndReturn<ExtArgs> | null;
    omit?: Prisma.categoriesOmit<ExtArgs> | null;
    data: Prisma.XOR<Prisma.categoriesUpdateManyMutationInput, Prisma.categoriesUncheckedUpdateManyInput>;
    where?: Prisma.categoriesWhereInput;
    limit?: number;
    include?: Prisma.categoriesIncludeUpdateManyAndReturn<ExtArgs> | null;
};
export type categoriesUpsertArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.categoriesSelect<ExtArgs> | null;
    omit?: Prisma.categoriesOmit<ExtArgs> | null;
    include?: Prisma.categoriesInclude<ExtArgs> | null;
    where: Prisma.categoriesWhereUniqueInput;
    create: Prisma.XOR<Prisma.categoriesCreateInput, Prisma.categoriesUncheckedCreateInput>;
    update: Prisma.XOR<Prisma.categoriesUpdateInput, Prisma.categoriesUncheckedUpdateInput>;
};
export type categoriesDeleteArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.categoriesSelect<ExtArgs> | null;
    omit?: Prisma.categoriesOmit<ExtArgs> | null;
    include?: Prisma.categoriesInclude<ExtArgs> | null;
    where: Prisma.categoriesWhereUniqueInput;
};
export type categoriesDeleteManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    where?: Prisma.categoriesWhereInput;
    limit?: number;
};
export type categories$categoriesArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.categoriesSelect<ExtArgs> | null;
    omit?: Prisma.categoriesOmit<ExtArgs> | null;
    include?: Prisma.categoriesInclude<ExtArgs> | null;
    where?: Prisma.categoriesWhereInput;
};
export type categories$other_categoriesArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.categoriesSelect<ExtArgs> | null;
    omit?: Prisma.categoriesOmit<ExtArgs> | null;
    include?: Prisma.categoriesInclude<ExtArgs> | null;
    where?: Prisma.categoriesWhereInput;
    orderBy?: Prisma.categoriesOrderByWithRelationInput | Prisma.categoriesOrderByWithRelationInput[];
    cursor?: Prisma.categoriesWhereUniqueInput;
    take?: number;
    skip?: number;
    distinct?: Prisma.CategoriesScalarFieldEnum | Prisma.CategoriesScalarFieldEnum[];
};
export type categories$listingsArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.listingsSelect<ExtArgs> | null;
    omit?: Prisma.listingsOmit<ExtArgs> | null;
    include?: Prisma.listingsInclude<ExtArgs> | null;
    where?: Prisma.listingsWhereInput;
    orderBy?: Prisma.listingsOrderByWithRelationInput | Prisma.listingsOrderByWithRelationInput[];
    cursor?: Prisma.listingsWhereUniqueInput;
    take?: number;
    skip?: number;
    distinct?: Prisma.ListingsScalarFieldEnum | Prisma.ListingsScalarFieldEnum[];
};
export type categoriesDefaultArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.categoriesSelect<ExtArgs> | null;
    omit?: Prisma.categoriesOmit<ExtArgs> | null;
    include?: Prisma.categoriesInclude<ExtArgs> | null;
};
