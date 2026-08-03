import type * as runtime from "@prisma/client/runtime/client";
import type * as Prisma from "../internal/prismaNamespace.js";
export type listing_mediaModel = runtime.Types.Result.DefaultSelection<Prisma.$listing_mediaPayload>;
export type AggregateListing_media = {
    _count: Listing_mediaCountAggregateOutputType | null;
    _avg: Listing_mediaAvgAggregateOutputType | null;
    _sum: Listing_mediaSumAggregateOutputType | null;
    _min: Listing_mediaMinAggregateOutputType | null;
    _max: Listing_mediaMaxAggregateOutputType | null;
};
export type Listing_mediaAvgAggregateOutputType = {
    display_order: number | null;
};
export type Listing_mediaSumAggregateOutputType = {
    display_order: number | null;
};
export type Listing_mediaMinAggregateOutputType = {
    id: string | null;
    listing_id: string | null;
    media_url: string | null;
    media_type: string | null;
    display_order: number | null;
    alt_text: string | null;
    created_at: Date | null;
};
export type Listing_mediaMaxAggregateOutputType = {
    id: string | null;
    listing_id: string | null;
    media_url: string | null;
    media_type: string | null;
    display_order: number | null;
    alt_text: string | null;
    created_at: Date | null;
};
export type Listing_mediaCountAggregateOutputType = {
    id: number;
    listing_id: number;
    media_url: number;
    media_type: number;
    display_order: number;
    alt_text: number;
    created_at: number;
    _all: number;
};
export type Listing_mediaAvgAggregateInputType = {
    display_order?: true;
};
export type Listing_mediaSumAggregateInputType = {
    display_order?: true;
};
export type Listing_mediaMinAggregateInputType = {
    id?: true;
    listing_id?: true;
    media_url?: true;
    media_type?: true;
    display_order?: true;
    alt_text?: true;
    created_at?: true;
};
export type Listing_mediaMaxAggregateInputType = {
    id?: true;
    listing_id?: true;
    media_url?: true;
    media_type?: true;
    display_order?: true;
    alt_text?: true;
    created_at?: true;
};
export type Listing_mediaCountAggregateInputType = {
    id?: true;
    listing_id?: true;
    media_url?: true;
    media_type?: true;
    display_order?: true;
    alt_text?: true;
    created_at?: true;
    _all?: true;
};
export type Listing_mediaAggregateArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    where?: Prisma.listing_mediaWhereInput;
    orderBy?: Prisma.listing_mediaOrderByWithRelationInput | Prisma.listing_mediaOrderByWithRelationInput[];
    cursor?: Prisma.listing_mediaWhereUniqueInput;
    take?: number;
    skip?: number;
    _count?: true | Listing_mediaCountAggregateInputType;
    _avg?: Listing_mediaAvgAggregateInputType;
    _sum?: Listing_mediaSumAggregateInputType;
    _min?: Listing_mediaMinAggregateInputType;
    _max?: Listing_mediaMaxAggregateInputType;
};
export type GetListing_mediaAggregateType<T extends Listing_mediaAggregateArgs> = {
    [P in keyof T & keyof AggregateListing_media]: P extends '_count' | 'count' ? T[P] extends true ? number : Prisma.GetScalarType<T[P], AggregateListing_media[P]> : Prisma.GetScalarType<T[P], AggregateListing_media[P]>;
};
export type listing_mediaGroupByArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    where?: Prisma.listing_mediaWhereInput;
    orderBy?: Prisma.listing_mediaOrderByWithAggregationInput | Prisma.listing_mediaOrderByWithAggregationInput[];
    by: Prisma.Listing_mediaScalarFieldEnum[] | Prisma.Listing_mediaScalarFieldEnum;
    having?: Prisma.listing_mediaScalarWhereWithAggregatesInput;
    take?: number;
    skip?: number;
    _count?: Listing_mediaCountAggregateInputType | true;
    _avg?: Listing_mediaAvgAggregateInputType;
    _sum?: Listing_mediaSumAggregateInputType;
    _min?: Listing_mediaMinAggregateInputType;
    _max?: Listing_mediaMaxAggregateInputType;
};
export type Listing_mediaGroupByOutputType = {
    id: string;
    listing_id: string;
    media_url: string;
    media_type: string;
    display_order: number;
    alt_text: string | null;
    created_at: Date;
    _count: Listing_mediaCountAggregateOutputType | null;
    _avg: Listing_mediaAvgAggregateOutputType | null;
    _sum: Listing_mediaSumAggregateOutputType | null;
    _min: Listing_mediaMinAggregateOutputType | null;
    _max: Listing_mediaMaxAggregateOutputType | null;
};
export type GetListing_mediaGroupByPayload<T extends listing_mediaGroupByArgs> = Prisma.PrismaPromise<Array<Prisma.PickEnumerable<Listing_mediaGroupByOutputType, T['by']> & {
    [P in ((keyof T) & (keyof Listing_mediaGroupByOutputType))]: P extends '_count' ? T[P] extends boolean ? number : Prisma.GetScalarType<T[P], Listing_mediaGroupByOutputType[P]> : Prisma.GetScalarType<T[P], Listing_mediaGroupByOutputType[P]>;
}>>;
export type listing_mediaWhereInput = {
    AND?: Prisma.listing_mediaWhereInput | Prisma.listing_mediaWhereInput[];
    OR?: Prisma.listing_mediaWhereInput[];
    NOT?: Prisma.listing_mediaWhereInput | Prisma.listing_mediaWhereInput[];
    id?: Prisma.UuidFilter<"listing_media"> | string;
    listing_id?: Prisma.UuidFilter<"listing_media"> | string;
    media_url?: Prisma.StringFilter<"listing_media"> | string;
    media_type?: Prisma.StringFilter<"listing_media"> | string;
    display_order?: Prisma.IntFilter<"listing_media"> | number;
    alt_text?: Prisma.StringNullableFilter<"listing_media"> | string | null;
    created_at?: Prisma.DateTimeFilter<"listing_media"> | Date | string;
    listings?: Prisma.XOR<Prisma.ListingsScalarRelationFilter, Prisma.listingsWhereInput>;
};
export type listing_mediaOrderByWithRelationInput = {
    id?: Prisma.SortOrder;
    listing_id?: Prisma.SortOrder;
    media_url?: Prisma.SortOrder;
    media_type?: Prisma.SortOrder;
    display_order?: Prisma.SortOrder;
    alt_text?: Prisma.SortOrderInput | Prisma.SortOrder;
    created_at?: Prisma.SortOrder;
    listings?: Prisma.listingsOrderByWithRelationInput;
};
export type listing_mediaWhereUniqueInput = Prisma.AtLeast<{
    id?: string;
    AND?: Prisma.listing_mediaWhereInput | Prisma.listing_mediaWhereInput[];
    OR?: Prisma.listing_mediaWhereInput[];
    NOT?: Prisma.listing_mediaWhereInput | Prisma.listing_mediaWhereInput[];
    listing_id?: Prisma.UuidFilter<"listing_media"> | string;
    media_url?: Prisma.StringFilter<"listing_media"> | string;
    media_type?: Prisma.StringFilter<"listing_media"> | string;
    display_order?: Prisma.IntFilter<"listing_media"> | number;
    alt_text?: Prisma.StringNullableFilter<"listing_media"> | string | null;
    created_at?: Prisma.DateTimeFilter<"listing_media"> | Date | string;
    listings?: Prisma.XOR<Prisma.ListingsScalarRelationFilter, Prisma.listingsWhereInput>;
}, "id">;
export type listing_mediaOrderByWithAggregationInput = {
    id?: Prisma.SortOrder;
    listing_id?: Prisma.SortOrder;
    media_url?: Prisma.SortOrder;
    media_type?: Prisma.SortOrder;
    display_order?: Prisma.SortOrder;
    alt_text?: Prisma.SortOrderInput | Prisma.SortOrder;
    created_at?: Prisma.SortOrder;
    _count?: Prisma.listing_mediaCountOrderByAggregateInput;
    _avg?: Prisma.listing_mediaAvgOrderByAggregateInput;
    _max?: Prisma.listing_mediaMaxOrderByAggregateInput;
    _min?: Prisma.listing_mediaMinOrderByAggregateInput;
    _sum?: Prisma.listing_mediaSumOrderByAggregateInput;
};
export type listing_mediaScalarWhereWithAggregatesInput = {
    AND?: Prisma.listing_mediaScalarWhereWithAggregatesInput | Prisma.listing_mediaScalarWhereWithAggregatesInput[];
    OR?: Prisma.listing_mediaScalarWhereWithAggregatesInput[];
    NOT?: Prisma.listing_mediaScalarWhereWithAggregatesInput | Prisma.listing_mediaScalarWhereWithAggregatesInput[];
    id?: Prisma.UuidWithAggregatesFilter<"listing_media"> | string;
    listing_id?: Prisma.UuidWithAggregatesFilter<"listing_media"> | string;
    media_url?: Prisma.StringWithAggregatesFilter<"listing_media"> | string;
    media_type?: Prisma.StringWithAggregatesFilter<"listing_media"> | string;
    display_order?: Prisma.IntWithAggregatesFilter<"listing_media"> | number;
    alt_text?: Prisma.StringNullableWithAggregatesFilter<"listing_media"> | string | null;
    created_at?: Prisma.DateTimeWithAggregatesFilter<"listing_media"> | Date | string;
};
export type listing_mediaCreateInput = {
    id?: string;
    media_url: string;
    media_type?: string;
    display_order?: number;
    alt_text?: string | null;
    created_at?: Date | string;
    listings: Prisma.listingsCreateNestedOneWithoutListing_mediaInput;
};
export type listing_mediaUncheckedCreateInput = {
    id?: string;
    listing_id: string;
    media_url: string;
    media_type?: string;
    display_order?: number;
    alt_text?: string | null;
    created_at?: Date | string;
};
export type listing_mediaUpdateInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    media_url?: Prisma.StringFieldUpdateOperationsInput | string;
    media_type?: Prisma.StringFieldUpdateOperationsInput | string;
    display_order?: Prisma.IntFieldUpdateOperationsInput | number;
    alt_text?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    created_at?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    listings?: Prisma.listingsUpdateOneRequiredWithoutListing_mediaNestedInput;
};
export type listing_mediaUncheckedUpdateInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    listing_id?: Prisma.StringFieldUpdateOperationsInput | string;
    media_url?: Prisma.StringFieldUpdateOperationsInput | string;
    media_type?: Prisma.StringFieldUpdateOperationsInput | string;
    display_order?: Prisma.IntFieldUpdateOperationsInput | number;
    alt_text?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    created_at?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
};
export type listing_mediaCreateManyInput = {
    id?: string;
    listing_id: string;
    media_url: string;
    media_type?: string;
    display_order?: number;
    alt_text?: string | null;
    created_at?: Date | string;
};
export type listing_mediaUpdateManyMutationInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    media_url?: Prisma.StringFieldUpdateOperationsInput | string;
    media_type?: Prisma.StringFieldUpdateOperationsInput | string;
    display_order?: Prisma.IntFieldUpdateOperationsInput | number;
    alt_text?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    created_at?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
};
export type listing_mediaUncheckedUpdateManyInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    listing_id?: Prisma.StringFieldUpdateOperationsInput | string;
    media_url?: Prisma.StringFieldUpdateOperationsInput | string;
    media_type?: Prisma.StringFieldUpdateOperationsInput | string;
    display_order?: Prisma.IntFieldUpdateOperationsInput | number;
    alt_text?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    created_at?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
};
export type listing_mediaCountOrderByAggregateInput = {
    id?: Prisma.SortOrder;
    listing_id?: Prisma.SortOrder;
    media_url?: Prisma.SortOrder;
    media_type?: Prisma.SortOrder;
    display_order?: Prisma.SortOrder;
    alt_text?: Prisma.SortOrder;
    created_at?: Prisma.SortOrder;
};
export type listing_mediaAvgOrderByAggregateInput = {
    display_order?: Prisma.SortOrder;
};
export type listing_mediaMaxOrderByAggregateInput = {
    id?: Prisma.SortOrder;
    listing_id?: Prisma.SortOrder;
    media_url?: Prisma.SortOrder;
    media_type?: Prisma.SortOrder;
    display_order?: Prisma.SortOrder;
    alt_text?: Prisma.SortOrder;
    created_at?: Prisma.SortOrder;
};
export type listing_mediaMinOrderByAggregateInput = {
    id?: Prisma.SortOrder;
    listing_id?: Prisma.SortOrder;
    media_url?: Prisma.SortOrder;
    media_type?: Prisma.SortOrder;
    display_order?: Prisma.SortOrder;
    alt_text?: Prisma.SortOrder;
    created_at?: Prisma.SortOrder;
};
export type listing_mediaSumOrderByAggregateInput = {
    display_order?: Prisma.SortOrder;
};
export type Listing_mediaListRelationFilter = {
    every?: Prisma.listing_mediaWhereInput;
    some?: Prisma.listing_mediaWhereInput;
    none?: Prisma.listing_mediaWhereInput;
};
export type listing_mediaOrderByRelationAggregateInput = {
    _count?: Prisma.SortOrder;
};
export type listing_mediaCreateNestedManyWithoutListingsInput = {
    create?: Prisma.XOR<Prisma.listing_mediaCreateWithoutListingsInput, Prisma.listing_mediaUncheckedCreateWithoutListingsInput> | Prisma.listing_mediaCreateWithoutListingsInput[] | Prisma.listing_mediaUncheckedCreateWithoutListingsInput[];
    connectOrCreate?: Prisma.listing_mediaCreateOrConnectWithoutListingsInput | Prisma.listing_mediaCreateOrConnectWithoutListingsInput[];
    createMany?: Prisma.listing_mediaCreateManyListingsInputEnvelope;
    connect?: Prisma.listing_mediaWhereUniqueInput | Prisma.listing_mediaWhereUniqueInput[];
};
export type listing_mediaUncheckedCreateNestedManyWithoutListingsInput = {
    create?: Prisma.XOR<Prisma.listing_mediaCreateWithoutListingsInput, Prisma.listing_mediaUncheckedCreateWithoutListingsInput> | Prisma.listing_mediaCreateWithoutListingsInput[] | Prisma.listing_mediaUncheckedCreateWithoutListingsInput[];
    connectOrCreate?: Prisma.listing_mediaCreateOrConnectWithoutListingsInput | Prisma.listing_mediaCreateOrConnectWithoutListingsInput[];
    createMany?: Prisma.listing_mediaCreateManyListingsInputEnvelope;
    connect?: Prisma.listing_mediaWhereUniqueInput | Prisma.listing_mediaWhereUniqueInput[];
};
export type listing_mediaUpdateManyWithoutListingsNestedInput = {
    create?: Prisma.XOR<Prisma.listing_mediaCreateWithoutListingsInput, Prisma.listing_mediaUncheckedCreateWithoutListingsInput> | Prisma.listing_mediaCreateWithoutListingsInput[] | Prisma.listing_mediaUncheckedCreateWithoutListingsInput[];
    connectOrCreate?: Prisma.listing_mediaCreateOrConnectWithoutListingsInput | Prisma.listing_mediaCreateOrConnectWithoutListingsInput[];
    upsert?: Prisma.listing_mediaUpsertWithWhereUniqueWithoutListingsInput | Prisma.listing_mediaUpsertWithWhereUniqueWithoutListingsInput[];
    createMany?: Prisma.listing_mediaCreateManyListingsInputEnvelope;
    set?: Prisma.listing_mediaWhereUniqueInput | Prisma.listing_mediaWhereUniqueInput[];
    disconnect?: Prisma.listing_mediaWhereUniqueInput | Prisma.listing_mediaWhereUniqueInput[];
    delete?: Prisma.listing_mediaWhereUniqueInput | Prisma.listing_mediaWhereUniqueInput[];
    connect?: Prisma.listing_mediaWhereUniqueInput | Prisma.listing_mediaWhereUniqueInput[];
    update?: Prisma.listing_mediaUpdateWithWhereUniqueWithoutListingsInput | Prisma.listing_mediaUpdateWithWhereUniqueWithoutListingsInput[];
    updateMany?: Prisma.listing_mediaUpdateManyWithWhereWithoutListingsInput | Prisma.listing_mediaUpdateManyWithWhereWithoutListingsInput[];
    deleteMany?: Prisma.listing_mediaScalarWhereInput | Prisma.listing_mediaScalarWhereInput[];
};
export type listing_mediaUncheckedUpdateManyWithoutListingsNestedInput = {
    create?: Prisma.XOR<Prisma.listing_mediaCreateWithoutListingsInput, Prisma.listing_mediaUncheckedCreateWithoutListingsInput> | Prisma.listing_mediaCreateWithoutListingsInput[] | Prisma.listing_mediaUncheckedCreateWithoutListingsInput[];
    connectOrCreate?: Prisma.listing_mediaCreateOrConnectWithoutListingsInput | Prisma.listing_mediaCreateOrConnectWithoutListingsInput[];
    upsert?: Prisma.listing_mediaUpsertWithWhereUniqueWithoutListingsInput | Prisma.listing_mediaUpsertWithWhereUniqueWithoutListingsInput[];
    createMany?: Prisma.listing_mediaCreateManyListingsInputEnvelope;
    set?: Prisma.listing_mediaWhereUniqueInput | Prisma.listing_mediaWhereUniqueInput[];
    disconnect?: Prisma.listing_mediaWhereUniqueInput | Prisma.listing_mediaWhereUniqueInput[];
    delete?: Prisma.listing_mediaWhereUniqueInput | Prisma.listing_mediaWhereUniqueInput[];
    connect?: Prisma.listing_mediaWhereUniqueInput | Prisma.listing_mediaWhereUniqueInput[];
    update?: Prisma.listing_mediaUpdateWithWhereUniqueWithoutListingsInput | Prisma.listing_mediaUpdateWithWhereUniqueWithoutListingsInput[];
    updateMany?: Prisma.listing_mediaUpdateManyWithWhereWithoutListingsInput | Prisma.listing_mediaUpdateManyWithWhereWithoutListingsInput[];
    deleteMany?: Prisma.listing_mediaScalarWhereInput | Prisma.listing_mediaScalarWhereInput[];
};
export type listing_mediaCreateWithoutListingsInput = {
    id?: string;
    media_url: string;
    media_type?: string;
    display_order?: number;
    alt_text?: string | null;
    created_at?: Date | string;
};
export type listing_mediaUncheckedCreateWithoutListingsInput = {
    id?: string;
    media_url: string;
    media_type?: string;
    display_order?: number;
    alt_text?: string | null;
    created_at?: Date | string;
};
export type listing_mediaCreateOrConnectWithoutListingsInput = {
    where: Prisma.listing_mediaWhereUniqueInput;
    create: Prisma.XOR<Prisma.listing_mediaCreateWithoutListingsInput, Prisma.listing_mediaUncheckedCreateWithoutListingsInput>;
};
export type listing_mediaCreateManyListingsInputEnvelope = {
    data: Prisma.listing_mediaCreateManyListingsInput | Prisma.listing_mediaCreateManyListingsInput[];
    skipDuplicates?: boolean;
};
export type listing_mediaUpsertWithWhereUniqueWithoutListingsInput = {
    where: Prisma.listing_mediaWhereUniqueInput;
    update: Prisma.XOR<Prisma.listing_mediaUpdateWithoutListingsInput, Prisma.listing_mediaUncheckedUpdateWithoutListingsInput>;
    create: Prisma.XOR<Prisma.listing_mediaCreateWithoutListingsInput, Prisma.listing_mediaUncheckedCreateWithoutListingsInput>;
};
export type listing_mediaUpdateWithWhereUniqueWithoutListingsInput = {
    where: Prisma.listing_mediaWhereUniqueInput;
    data: Prisma.XOR<Prisma.listing_mediaUpdateWithoutListingsInput, Prisma.listing_mediaUncheckedUpdateWithoutListingsInput>;
};
export type listing_mediaUpdateManyWithWhereWithoutListingsInput = {
    where: Prisma.listing_mediaScalarWhereInput;
    data: Prisma.XOR<Prisma.listing_mediaUpdateManyMutationInput, Prisma.listing_mediaUncheckedUpdateManyWithoutListingsInput>;
};
export type listing_mediaScalarWhereInput = {
    AND?: Prisma.listing_mediaScalarWhereInput | Prisma.listing_mediaScalarWhereInput[];
    OR?: Prisma.listing_mediaScalarWhereInput[];
    NOT?: Prisma.listing_mediaScalarWhereInput | Prisma.listing_mediaScalarWhereInput[];
    id?: Prisma.UuidFilter<"listing_media"> | string;
    listing_id?: Prisma.UuidFilter<"listing_media"> | string;
    media_url?: Prisma.StringFilter<"listing_media"> | string;
    media_type?: Prisma.StringFilter<"listing_media"> | string;
    display_order?: Prisma.IntFilter<"listing_media"> | number;
    alt_text?: Prisma.StringNullableFilter<"listing_media"> | string | null;
    created_at?: Prisma.DateTimeFilter<"listing_media"> | Date | string;
};
export type listing_mediaCreateManyListingsInput = {
    id?: string;
    media_url: string;
    media_type?: string;
    display_order?: number;
    alt_text?: string | null;
    created_at?: Date | string;
};
export type listing_mediaUpdateWithoutListingsInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    media_url?: Prisma.StringFieldUpdateOperationsInput | string;
    media_type?: Prisma.StringFieldUpdateOperationsInput | string;
    display_order?: Prisma.IntFieldUpdateOperationsInput | number;
    alt_text?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    created_at?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
};
export type listing_mediaUncheckedUpdateWithoutListingsInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    media_url?: Prisma.StringFieldUpdateOperationsInput | string;
    media_type?: Prisma.StringFieldUpdateOperationsInput | string;
    display_order?: Prisma.IntFieldUpdateOperationsInput | number;
    alt_text?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    created_at?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
};
export type listing_mediaUncheckedUpdateManyWithoutListingsInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    media_url?: Prisma.StringFieldUpdateOperationsInput | string;
    media_type?: Prisma.StringFieldUpdateOperationsInput | string;
    display_order?: Prisma.IntFieldUpdateOperationsInput | number;
    alt_text?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    created_at?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
};
export type listing_mediaSelect<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetSelect<{
    id?: boolean;
    listing_id?: boolean;
    media_url?: boolean;
    media_type?: boolean;
    display_order?: boolean;
    alt_text?: boolean;
    created_at?: boolean;
    listings?: boolean | Prisma.listingsDefaultArgs<ExtArgs>;
}, ExtArgs["result"]["listing_media"]>;
export type listing_mediaSelectCreateManyAndReturn<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetSelect<{
    id?: boolean;
    listing_id?: boolean;
    media_url?: boolean;
    media_type?: boolean;
    display_order?: boolean;
    alt_text?: boolean;
    created_at?: boolean;
    listings?: boolean | Prisma.listingsDefaultArgs<ExtArgs>;
}, ExtArgs["result"]["listing_media"]>;
export type listing_mediaSelectUpdateManyAndReturn<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetSelect<{
    id?: boolean;
    listing_id?: boolean;
    media_url?: boolean;
    media_type?: boolean;
    display_order?: boolean;
    alt_text?: boolean;
    created_at?: boolean;
    listings?: boolean | Prisma.listingsDefaultArgs<ExtArgs>;
}, ExtArgs["result"]["listing_media"]>;
export type listing_mediaSelectScalar = {
    id?: boolean;
    listing_id?: boolean;
    media_url?: boolean;
    media_type?: boolean;
    display_order?: boolean;
    alt_text?: boolean;
    created_at?: boolean;
};
export type listing_mediaOmit<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetOmit<"id" | "listing_id" | "media_url" | "media_type" | "display_order" | "alt_text" | "created_at", ExtArgs["result"]["listing_media"]>;
export type listing_mediaInclude<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    listings?: boolean | Prisma.listingsDefaultArgs<ExtArgs>;
};
export type listing_mediaIncludeCreateManyAndReturn<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    listings?: boolean | Prisma.listingsDefaultArgs<ExtArgs>;
};
export type listing_mediaIncludeUpdateManyAndReturn<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    listings?: boolean | Prisma.listingsDefaultArgs<ExtArgs>;
};
export type $listing_mediaPayload<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    name: "listing_media";
    objects: {
        listings: Prisma.$listingsPayload<ExtArgs>;
    };
    scalars: runtime.Types.Extensions.GetPayloadResult<{
        id: string;
        listing_id: string;
        media_url: string;
        media_type: string;
        display_order: number;
        alt_text: string | null;
        created_at: Date;
    }, ExtArgs["result"]["listing_media"]>;
    composites: {};
};
export type listing_mediaGetPayload<S extends boolean | null | undefined | listing_mediaDefaultArgs> = runtime.Types.Result.GetResult<Prisma.$listing_mediaPayload, S>;
export type listing_mediaCountArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = Omit<listing_mediaFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
    select?: Listing_mediaCountAggregateInputType | true;
};
export interface listing_mediaDelegate<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: {
        types: Prisma.TypeMap<ExtArgs>['model']['listing_media'];
        meta: {
            name: 'listing_media';
        };
    };
    findUnique<T extends listing_mediaFindUniqueArgs>(args: Prisma.SelectSubset<T, listing_mediaFindUniqueArgs<ExtArgs>>): Prisma.Prisma__listing_mediaClient<runtime.Types.Result.GetResult<Prisma.$listing_mediaPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>;
    findUniqueOrThrow<T extends listing_mediaFindUniqueOrThrowArgs>(args: Prisma.SelectSubset<T, listing_mediaFindUniqueOrThrowArgs<ExtArgs>>): Prisma.Prisma__listing_mediaClient<runtime.Types.Result.GetResult<Prisma.$listing_mediaPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    findFirst<T extends listing_mediaFindFirstArgs>(args?: Prisma.SelectSubset<T, listing_mediaFindFirstArgs<ExtArgs>>): Prisma.Prisma__listing_mediaClient<runtime.Types.Result.GetResult<Prisma.$listing_mediaPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>;
    findFirstOrThrow<T extends listing_mediaFindFirstOrThrowArgs>(args?: Prisma.SelectSubset<T, listing_mediaFindFirstOrThrowArgs<ExtArgs>>): Prisma.Prisma__listing_mediaClient<runtime.Types.Result.GetResult<Prisma.$listing_mediaPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    findMany<T extends listing_mediaFindManyArgs>(args?: Prisma.SelectSubset<T, listing_mediaFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$listing_mediaPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>;
    create<T extends listing_mediaCreateArgs>(args: Prisma.SelectSubset<T, listing_mediaCreateArgs<ExtArgs>>): Prisma.Prisma__listing_mediaClient<runtime.Types.Result.GetResult<Prisma.$listing_mediaPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    createMany<T extends listing_mediaCreateManyArgs>(args?: Prisma.SelectSubset<T, listing_mediaCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<Prisma.BatchPayload>;
    createManyAndReturn<T extends listing_mediaCreateManyAndReturnArgs>(args?: Prisma.SelectSubset<T, listing_mediaCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$listing_mediaPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>;
    delete<T extends listing_mediaDeleteArgs>(args: Prisma.SelectSubset<T, listing_mediaDeleteArgs<ExtArgs>>): Prisma.Prisma__listing_mediaClient<runtime.Types.Result.GetResult<Prisma.$listing_mediaPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    update<T extends listing_mediaUpdateArgs>(args: Prisma.SelectSubset<T, listing_mediaUpdateArgs<ExtArgs>>): Prisma.Prisma__listing_mediaClient<runtime.Types.Result.GetResult<Prisma.$listing_mediaPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    deleteMany<T extends listing_mediaDeleteManyArgs>(args?: Prisma.SelectSubset<T, listing_mediaDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<Prisma.BatchPayload>;
    updateMany<T extends listing_mediaUpdateManyArgs>(args: Prisma.SelectSubset<T, listing_mediaUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<Prisma.BatchPayload>;
    updateManyAndReturn<T extends listing_mediaUpdateManyAndReturnArgs>(args: Prisma.SelectSubset<T, listing_mediaUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$listing_mediaPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>;
    upsert<T extends listing_mediaUpsertArgs>(args: Prisma.SelectSubset<T, listing_mediaUpsertArgs<ExtArgs>>): Prisma.Prisma__listing_mediaClient<runtime.Types.Result.GetResult<Prisma.$listing_mediaPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    count<T extends listing_mediaCountArgs>(args?: Prisma.Subset<T, listing_mediaCountArgs>): Prisma.PrismaPromise<T extends runtime.Types.Utils.Record<'select', any> ? T['select'] extends true ? number : Prisma.GetScalarType<T['select'], Listing_mediaCountAggregateOutputType> : number>;
    aggregate<T extends Listing_mediaAggregateArgs>(args: Prisma.Subset<T, Listing_mediaAggregateArgs>): Prisma.PrismaPromise<GetListing_mediaAggregateType<T>>;
    groupBy<T extends listing_mediaGroupByArgs, HasSelectOrTake extends Prisma.Or<Prisma.Extends<'skip', Prisma.Keys<T>>, Prisma.Extends<'take', Prisma.Keys<T>>>, OrderByArg extends Prisma.True extends HasSelectOrTake ? {
        orderBy: listing_mediaGroupByArgs['orderBy'];
    } : {
        orderBy?: listing_mediaGroupByArgs['orderBy'];
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
    }[OrderFields]>(args: Prisma.SubsetIntersection<T, listing_mediaGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetListing_mediaGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>;
    readonly fields: listing_mediaFieldRefs;
}
export interface Prisma__listing_mediaClient<T, Null = never, ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise";
    listings<T extends Prisma.listingsDefaultArgs<ExtArgs> = {}>(args?: Prisma.Subset<T, Prisma.listingsDefaultArgs<ExtArgs>>): Prisma.Prisma__listingsClient<runtime.Types.Result.GetResult<Prisma.$listingsPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>;
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): runtime.Types.Utils.JsPromise<TResult1 | TResult2>;
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): runtime.Types.Utils.JsPromise<T | TResult>;
    finally(onfinally?: (() => void) | undefined | null): runtime.Types.Utils.JsPromise<T>;
}
export interface listing_mediaFieldRefs {
    readonly id: Prisma.FieldRef<"listing_media", 'String'>;
    readonly listing_id: Prisma.FieldRef<"listing_media", 'String'>;
    readonly media_url: Prisma.FieldRef<"listing_media", 'String'>;
    readonly media_type: Prisma.FieldRef<"listing_media", 'String'>;
    readonly display_order: Prisma.FieldRef<"listing_media", 'Int'>;
    readonly alt_text: Prisma.FieldRef<"listing_media", 'String'>;
    readonly created_at: Prisma.FieldRef<"listing_media", 'DateTime'>;
}
export type listing_mediaFindUniqueArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.listing_mediaSelect<ExtArgs> | null;
    omit?: Prisma.listing_mediaOmit<ExtArgs> | null;
    include?: Prisma.listing_mediaInclude<ExtArgs> | null;
    where: Prisma.listing_mediaWhereUniqueInput;
};
export type listing_mediaFindUniqueOrThrowArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.listing_mediaSelect<ExtArgs> | null;
    omit?: Prisma.listing_mediaOmit<ExtArgs> | null;
    include?: Prisma.listing_mediaInclude<ExtArgs> | null;
    where: Prisma.listing_mediaWhereUniqueInput;
};
export type listing_mediaFindFirstArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.listing_mediaSelect<ExtArgs> | null;
    omit?: Prisma.listing_mediaOmit<ExtArgs> | null;
    include?: Prisma.listing_mediaInclude<ExtArgs> | null;
    where?: Prisma.listing_mediaWhereInput;
    orderBy?: Prisma.listing_mediaOrderByWithRelationInput | Prisma.listing_mediaOrderByWithRelationInput[];
    cursor?: Prisma.listing_mediaWhereUniqueInput;
    take?: number;
    skip?: number;
    distinct?: Prisma.Listing_mediaScalarFieldEnum | Prisma.Listing_mediaScalarFieldEnum[];
};
export type listing_mediaFindFirstOrThrowArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.listing_mediaSelect<ExtArgs> | null;
    omit?: Prisma.listing_mediaOmit<ExtArgs> | null;
    include?: Prisma.listing_mediaInclude<ExtArgs> | null;
    where?: Prisma.listing_mediaWhereInput;
    orderBy?: Prisma.listing_mediaOrderByWithRelationInput | Prisma.listing_mediaOrderByWithRelationInput[];
    cursor?: Prisma.listing_mediaWhereUniqueInput;
    take?: number;
    skip?: number;
    distinct?: Prisma.Listing_mediaScalarFieldEnum | Prisma.Listing_mediaScalarFieldEnum[];
};
export type listing_mediaFindManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.listing_mediaSelect<ExtArgs> | null;
    omit?: Prisma.listing_mediaOmit<ExtArgs> | null;
    include?: Prisma.listing_mediaInclude<ExtArgs> | null;
    where?: Prisma.listing_mediaWhereInput;
    orderBy?: Prisma.listing_mediaOrderByWithRelationInput | Prisma.listing_mediaOrderByWithRelationInput[];
    cursor?: Prisma.listing_mediaWhereUniqueInput;
    take?: number;
    skip?: number;
    distinct?: Prisma.Listing_mediaScalarFieldEnum | Prisma.Listing_mediaScalarFieldEnum[];
};
export type listing_mediaCreateArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.listing_mediaSelect<ExtArgs> | null;
    omit?: Prisma.listing_mediaOmit<ExtArgs> | null;
    include?: Prisma.listing_mediaInclude<ExtArgs> | null;
    data: Prisma.XOR<Prisma.listing_mediaCreateInput, Prisma.listing_mediaUncheckedCreateInput>;
};
export type listing_mediaCreateManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    data: Prisma.listing_mediaCreateManyInput | Prisma.listing_mediaCreateManyInput[];
    skipDuplicates?: boolean;
};
export type listing_mediaCreateManyAndReturnArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.listing_mediaSelectCreateManyAndReturn<ExtArgs> | null;
    omit?: Prisma.listing_mediaOmit<ExtArgs> | null;
    data: Prisma.listing_mediaCreateManyInput | Prisma.listing_mediaCreateManyInput[];
    skipDuplicates?: boolean;
    include?: Prisma.listing_mediaIncludeCreateManyAndReturn<ExtArgs> | null;
};
export type listing_mediaUpdateArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.listing_mediaSelect<ExtArgs> | null;
    omit?: Prisma.listing_mediaOmit<ExtArgs> | null;
    include?: Prisma.listing_mediaInclude<ExtArgs> | null;
    data: Prisma.XOR<Prisma.listing_mediaUpdateInput, Prisma.listing_mediaUncheckedUpdateInput>;
    where: Prisma.listing_mediaWhereUniqueInput;
};
export type listing_mediaUpdateManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    data: Prisma.XOR<Prisma.listing_mediaUpdateManyMutationInput, Prisma.listing_mediaUncheckedUpdateManyInput>;
    where?: Prisma.listing_mediaWhereInput;
    limit?: number;
};
export type listing_mediaUpdateManyAndReturnArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.listing_mediaSelectUpdateManyAndReturn<ExtArgs> | null;
    omit?: Prisma.listing_mediaOmit<ExtArgs> | null;
    data: Prisma.XOR<Prisma.listing_mediaUpdateManyMutationInput, Prisma.listing_mediaUncheckedUpdateManyInput>;
    where?: Prisma.listing_mediaWhereInput;
    limit?: number;
    include?: Prisma.listing_mediaIncludeUpdateManyAndReturn<ExtArgs> | null;
};
export type listing_mediaUpsertArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.listing_mediaSelect<ExtArgs> | null;
    omit?: Prisma.listing_mediaOmit<ExtArgs> | null;
    include?: Prisma.listing_mediaInclude<ExtArgs> | null;
    where: Prisma.listing_mediaWhereUniqueInput;
    create: Prisma.XOR<Prisma.listing_mediaCreateInput, Prisma.listing_mediaUncheckedCreateInput>;
    update: Prisma.XOR<Prisma.listing_mediaUpdateInput, Prisma.listing_mediaUncheckedUpdateInput>;
};
export type listing_mediaDeleteArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.listing_mediaSelect<ExtArgs> | null;
    omit?: Prisma.listing_mediaOmit<ExtArgs> | null;
    include?: Prisma.listing_mediaInclude<ExtArgs> | null;
    where: Prisma.listing_mediaWhereUniqueInput;
};
export type listing_mediaDeleteManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    where?: Prisma.listing_mediaWhereInput;
    limit?: number;
};
export type listing_mediaDefaultArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.listing_mediaSelect<ExtArgs> | null;
    omit?: Prisma.listing_mediaOmit<ExtArgs> | null;
    include?: Prisma.listing_mediaInclude<ExtArgs> | null;
};
