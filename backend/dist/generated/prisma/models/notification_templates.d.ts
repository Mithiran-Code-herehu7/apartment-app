import type * as runtime from "@prisma/client/runtime/client";
import type * as $Enums from "../enums.js";
import type * as Prisma from "../internal/prismaNamespace.js";
export type notification_templatesModel = runtime.Types.Result.DefaultSelection<Prisma.$notification_templatesPayload>;
export type AggregateNotification_templates = {
    _count: Notification_templatesCountAggregateOutputType | null;
    _min: Notification_templatesMinAggregateOutputType | null;
    _max: Notification_templatesMaxAggregateOutputType | null;
};
export type Notification_templatesMinAggregateOutputType = {
    id: string | null;
    event_key: string | null;
    channel: $Enums.notification_channel | null;
    subject: string | null;
    body_template: string | null;
    is_active: boolean | null;
    created_at: Date | null;
    updated_at: Date | null;
};
export type Notification_templatesMaxAggregateOutputType = {
    id: string | null;
    event_key: string | null;
    channel: $Enums.notification_channel | null;
    subject: string | null;
    body_template: string | null;
    is_active: boolean | null;
    created_at: Date | null;
    updated_at: Date | null;
};
export type Notification_templatesCountAggregateOutputType = {
    id: number;
    event_key: number;
    channel: number;
    subject: number;
    body_template: number;
    is_active: number;
    created_at: number;
    updated_at: number;
    _all: number;
};
export type Notification_templatesMinAggregateInputType = {
    id?: true;
    event_key?: true;
    channel?: true;
    subject?: true;
    body_template?: true;
    is_active?: true;
    created_at?: true;
    updated_at?: true;
};
export type Notification_templatesMaxAggregateInputType = {
    id?: true;
    event_key?: true;
    channel?: true;
    subject?: true;
    body_template?: true;
    is_active?: true;
    created_at?: true;
    updated_at?: true;
};
export type Notification_templatesCountAggregateInputType = {
    id?: true;
    event_key?: true;
    channel?: true;
    subject?: true;
    body_template?: true;
    is_active?: true;
    created_at?: true;
    updated_at?: true;
    _all?: true;
};
export type Notification_templatesAggregateArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    where?: Prisma.notification_templatesWhereInput;
    orderBy?: Prisma.notification_templatesOrderByWithRelationInput | Prisma.notification_templatesOrderByWithRelationInput[];
    cursor?: Prisma.notification_templatesWhereUniqueInput;
    take?: number;
    skip?: number;
    _count?: true | Notification_templatesCountAggregateInputType;
    _min?: Notification_templatesMinAggregateInputType;
    _max?: Notification_templatesMaxAggregateInputType;
};
export type GetNotification_templatesAggregateType<T extends Notification_templatesAggregateArgs> = {
    [P in keyof T & keyof AggregateNotification_templates]: P extends '_count' | 'count' ? T[P] extends true ? number : Prisma.GetScalarType<T[P], AggregateNotification_templates[P]> : Prisma.GetScalarType<T[P], AggregateNotification_templates[P]>;
};
export type notification_templatesGroupByArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    where?: Prisma.notification_templatesWhereInput;
    orderBy?: Prisma.notification_templatesOrderByWithAggregationInput | Prisma.notification_templatesOrderByWithAggregationInput[];
    by: Prisma.Notification_templatesScalarFieldEnum[] | Prisma.Notification_templatesScalarFieldEnum;
    having?: Prisma.notification_templatesScalarWhereWithAggregatesInput;
    take?: number;
    skip?: number;
    _count?: Notification_templatesCountAggregateInputType | true;
    _min?: Notification_templatesMinAggregateInputType;
    _max?: Notification_templatesMaxAggregateInputType;
};
export type Notification_templatesGroupByOutputType = {
    id: string;
    event_key: string;
    channel: $Enums.notification_channel;
    subject: string | null;
    body_template: string;
    is_active: boolean;
    created_at: Date;
    updated_at: Date;
    _count: Notification_templatesCountAggregateOutputType | null;
    _min: Notification_templatesMinAggregateOutputType | null;
    _max: Notification_templatesMaxAggregateOutputType | null;
};
export type GetNotification_templatesGroupByPayload<T extends notification_templatesGroupByArgs> = Prisma.PrismaPromise<Array<Prisma.PickEnumerable<Notification_templatesGroupByOutputType, T['by']> & {
    [P in ((keyof T) & (keyof Notification_templatesGroupByOutputType))]: P extends '_count' ? T[P] extends boolean ? number : Prisma.GetScalarType<T[P], Notification_templatesGroupByOutputType[P]> : Prisma.GetScalarType<T[P], Notification_templatesGroupByOutputType[P]>;
}>>;
export type notification_templatesWhereInput = {
    AND?: Prisma.notification_templatesWhereInput | Prisma.notification_templatesWhereInput[];
    OR?: Prisma.notification_templatesWhereInput[];
    NOT?: Prisma.notification_templatesWhereInput | Prisma.notification_templatesWhereInput[];
    id?: Prisma.UuidFilter<"notification_templates"> | string;
    event_key?: Prisma.StringFilter<"notification_templates"> | string;
    channel?: Prisma.Enumnotification_channelFilter<"notification_templates"> | $Enums.notification_channel;
    subject?: Prisma.StringNullableFilter<"notification_templates"> | string | null;
    body_template?: Prisma.StringFilter<"notification_templates"> | string;
    is_active?: Prisma.BoolFilter<"notification_templates"> | boolean;
    created_at?: Prisma.DateTimeFilter<"notification_templates"> | Date | string;
    updated_at?: Prisma.DateTimeFilter<"notification_templates"> | Date | string;
};
export type notification_templatesOrderByWithRelationInput = {
    id?: Prisma.SortOrder;
    event_key?: Prisma.SortOrder;
    channel?: Prisma.SortOrder;
    subject?: Prisma.SortOrderInput | Prisma.SortOrder;
    body_template?: Prisma.SortOrder;
    is_active?: Prisma.SortOrder;
    created_at?: Prisma.SortOrder;
    updated_at?: Prisma.SortOrder;
};
export type notification_templatesWhereUniqueInput = Prisma.AtLeast<{
    id?: string;
    event_key?: string;
    AND?: Prisma.notification_templatesWhereInput | Prisma.notification_templatesWhereInput[];
    OR?: Prisma.notification_templatesWhereInput[];
    NOT?: Prisma.notification_templatesWhereInput | Prisma.notification_templatesWhereInput[];
    channel?: Prisma.Enumnotification_channelFilter<"notification_templates"> | $Enums.notification_channel;
    subject?: Prisma.StringNullableFilter<"notification_templates"> | string | null;
    body_template?: Prisma.StringFilter<"notification_templates"> | string;
    is_active?: Prisma.BoolFilter<"notification_templates"> | boolean;
    created_at?: Prisma.DateTimeFilter<"notification_templates"> | Date | string;
    updated_at?: Prisma.DateTimeFilter<"notification_templates"> | Date | string;
}, "id" | "event_key">;
export type notification_templatesOrderByWithAggregationInput = {
    id?: Prisma.SortOrder;
    event_key?: Prisma.SortOrder;
    channel?: Prisma.SortOrder;
    subject?: Prisma.SortOrderInput | Prisma.SortOrder;
    body_template?: Prisma.SortOrder;
    is_active?: Prisma.SortOrder;
    created_at?: Prisma.SortOrder;
    updated_at?: Prisma.SortOrder;
    _count?: Prisma.notification_templatesCountOrderByAggregateInput;
    _max?: Prisma.notification_templatesMaxOrderByAggregateInput;
    _min?: Prisma.notification_templatesMinOrderByAggregateInput;
};
export type notification_templatesScalarWhereWithAggregatesInput = {
    AND?: Prisma.notification_templatesScalarWhereWithAggregatesInput | Prisma.notification_templatesScalarWhereWithAggregatesInput[];
    OR?: Prisma.notification_templatesScalarWhereWithAggregatesInput[];
    NOT?: Prisma.notification_templatesScalarWhereWithAggregatesInput | Prisma.notification_templatesScalarWhereWithAggregatesInput[];
    id?: Prisma.UuidWithAggregatesFilter<"notification_templates"> | string;
    event_key?: Prisma.StringWithAggregatesFilter<"notification_templates"> | string;
    channel?: Prisma.Enumnotification_channelWithAggregatesFilter<"notification_templates"> | $Enums.notification_channel;
    subject?: Prisma.StringNullableWithAggregatesFilter<"notification_templates"> | string | null;
    body_template?: Prisma.StringWithAggregatesFilter<"notification_templates"> | string;
    is_active?: Prisma.BoolWithAggregatesFilter<"notification_templates"> | boolean;
    created_at?: Prisma.DateTimeWithAggregatesFilter<"notification_templates"> | Date | string;
    updated_at?: Prisma.DateTimeWithAggregatesFilter<"notification_templates"> | Date | string;
};
export type notification_templatesCreateInput = {
    id?: string;
    event_key: string;
    channel: $Enums.notification_channel;
    subject?: string | null;
    body_template: string;
    is_active?: boolean;
    created_at?: Date | string;
    updated_at?: Date | string;
};
export type notification_templatesUncheckedCreateInput = {
    id?: string;
    event_key: string;
    channel: $Enums.notification_channel;
    subject?: string | null;
    body_template: string;
    is_active?: boolean;
    created_at?: Date | string;
    updated_at?: Date | string;
};
export type notification_templatesUpdateInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    event_key?: Prisma.StringFieldUpdateOperationsInput | string;
    channel?: Prisma.Enumnotification_channelFieldUpdateOperationsInput | $Enums.notification_channel;
    subject?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    body_template?: Prisma.StringFieldUpdateOperationsInput | string;
    is_active?: Prisma.BoolFieldUpdateOperationsInput | boolean;
    created_at?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    updated_at?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
};
export type notification_templatesUncheckedUpdateInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    event_key?: Prisma.StringFieldUpdateOperationsInput | string;
    channel?: Prisma.Enumnotification_channelFieldUpdateOperationsInput | $Enums.notification_channel;
    subject?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    body_template?: Prisma.StringFieldUpdateOperationsInput | string;
    is_active?: Prisma.BoolFieldUpdateOperationsInput | boolean;
    created_at?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    updated_at?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
};
export type notification_templatesCreateManyInput = {
    id?: string;
    event_key: string;
    channel: $Enums.notification_channel;
    subject?: string | null;
    body_template: string;
    is_active?: boolean;
    created_at?: Date | string;
    updated_at?: Date | string;
};
export type notification_templatesUpdateManyMutationInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    event_key?: Prisma.StringFieldUpdateOperationsInput | string;
    channel?: Prisma.Enumnotification_channelFieldUpdateOperationsInput | $Enums.notification_channel;
    subject?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    body_template?: Prisma.StringFieldUpdateOperationsInput | string;
    is_active?: Prisma.BoolFieldUpdateOperationsInput | boolean;
    created_at?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    updated_at?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
};
export type notification_templatesUncheckedUpdateManyInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    event_key?: Prisma.StringFieldUpdateOperationsInput | string;
    channel?: Prisma.Enumnotification_channelFieldUpdateOperationsInput | $Enums.notification_channel;
    subject?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    body_template?: Prisma.StringFieldUpdateOperationsInput | string;
    is_active?: Prisma.BoolFieldUpdateOperationsInput | boolean;
    created_at?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    updated_at?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
};
export type notification_templatesCountOrderByAggregateInput = {
    id?: Prisma.SortOrder;
    event_key?: Prisma.SortOrder;
    channel?: Prisma.SortOrder;
    subject?: Prisma.SortOrder;
    body_template?: Prisma.SortOrder;
    is_active?: Prisma.SortOrder;
    created_at?: Prisma.SortOrder;
    updated_at?: Prisma.SortOrder;
};
export type notification_templatesMaxOrderByAggregateInput = {
    id?: Prisma.SortOrder;
    event_key?: Prisma.SortOrder;
    channel?: Prisma.SortOrder;
    subject?: Prisma.SortOrder;
    body_template?: Prisma.SortOrder;
    is_active?: Prisma.SortOrder;
    created_at?: Prisma.SortOrder;
    updated_at?: Prisma.SortOrder;
};
export type notification_templatesMinOrderByAggregateInput = {
    id?: Prisma.SortOrder;
    event_key?: Prisma.SortOrder;
    channel?: Prisma.SortOrder;
    subject?: Prisma.SortOrder;
    body_template?: Prisma.SortOrder;
    is_active?: Prisma.SortOrder;
    created_at?: Prisma.SortOrder;
    updated_at?: Prisma.SortOrder;
};
export type Enumnotification_channelFieldUpdateOperationsInput = {
    set?: $Enums.notification_channel;
};
export type notification_templatesSelect<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetSelect<{
    id?: boolean;
    event_key?: boolean;
    channel?: boolean;
    subject?: boolean;
    body_template?: boolean;
    is_active?: boolean;
    created_at?: boolean;
    updated_at?: boolean;
}, ExtArgs["result"]["notification_templates"]>;
export type notification_templatesSelectCreateManyAndReturn<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetSelect<{
    id?: boolean;
    event_key?: boolean;
    channel?: boolean;
    subject?: boolean;
    body_template?: boolean;
    is_active?: boolean;
    created_at?: boolean;
    updated_at?: boolean;
}, ExtArgs["result"]["notification_templates"]>;
export type notification_templatesSelectUpdateManyAndReturn<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetSelect<{
    id?: boolean;
    event_key?: boolean;
    channel?: boolean;
    subject?: boolean;
    body_template?: boolean;
    is_active?: boolean;
    created_at?: boolean;
    updated_at?: boolean;
}, ExtArgs["result"]["notification_templates"]>;
export type notification_templatesSelectScalar = {
    id?: boolean;
    event_key?: boolean;
    channel?: boolean;
    subject?: boolean;
    body_template?: boolean;
    is_active?: boolean;
    created_at?: boolean;
    updated_at?: boolean;
};
export type notification_templatesOmit<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetOmit<"id" | "event_key" | "channel" | "subject" | "body_template" | "is_active" | "created_at" | "updated_at", ExtArgs["result"]["notification_templates"]>;
export type $notification_templatesPayload<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    name: "notification_templates";
    objects: {};
    scalars: runtime.Types.Extensions.GetPayloadResult<{
        id: string;
        event_key: string;
        channel: $Enums.notification_channel;
        subject: string | null;
        body_template: string;
        is_active: boolean;
        created_at: Date;
        updated_at: Date;
    }, ExtArgs["result"]["notification_templates"]>;
    composites: {};
};
export type notification_templatesGetPayload<S extends boolean | null | undefined | notification_templatesDefaultArgs> = runtime.Types.Result.GetResult<Prisma.$notification_templatesPayload, S>;
export type notification_templatesCountArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = Omit<notification_templatesFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
    select?: Notification_templatesCountAggregateInputType | true;
};
export interface notification_templatesDelegate<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: {
        types: Prisma.TypeMap<ExtArgs>['model']['notification_templates'];
        meta: {
            name: 'notification_templates';
        };
    };
    findUnique<T extends notification_templatesFindUniqueArgs>(args: Prisma.SelectSubset<T, notification_templatesFindUniqueArgs<ExtArgs>>): Prisma.Prisma__notification_templatesClient<runtime.Types.Result.GetResult<Prisma.$notification_templatesPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>;
    findUniqueOrThrow<T extends notification_templatesFindUniqueOrThrowArgs>(args: Prisma.SelectSubset<T, notification_templatesFindUniqueOrThrowArgs<ExtArgs>>): Prisma.Prisma__notification_templatesClient<runtime.Types.Result.GetResult<Prisma.$notification_templatesPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    findFirst<T extends notification_templatesFindFirstArgs>(args?: Prisma.SelectSubset<T, notification_templatesFindFirstArgs<ExtArgs>>): Prisma.Prisma__notification_templatesClient<runtime.Types.Result.GetResult<Prisma.$notification_templatesPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>;
    findFirstOrThrow<T extends notification_templatesFindFirstOrThrowArgs>(args?: Prisma.SelectSubset<T, notification_templatesFindFirstOrThrowArgs<ExtArgs>>): Prisma.Prisma__notification_templatesClient<runtime.Types.Result.GetResult<Prisma.$notification_templatesPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    findMany<T extends notification_templatesFindManyArgs>(args?: Prisma.SelectSubset<T, notification_templatesFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$notification_templatesPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>;
    create<T extends notification_templatesCreateArgs>(args: Prisma.SelectSubset<T, notification_templatesCreateArgs<ExtArgs>>): Prisma.Prisma__notification_templatesClient<runtime.Types.Result.GetResult<Prisma.$notification_templatesPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    createMany<T extends notification_templatesCreateManyArgs>(args?: Prisma.SelectSubset<T, notification_templatesCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<Prisma.BatchPayload>;
    createManyAndReturn<T extends notification_templatesCreateManyAndReturnArgs>(args?: Prisma.SelectSubset<T, notification_templatesCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$notification_templatesPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>;
    delete<T extends notification_templatesDeleteArgs>(args: Prisma.SelectSubset<T, notification_templatesDeleteArgs<ExtArgs>>): Prisma.Prisma__notification_templatesClient<runtime.Types.Result.GetResult<Prisma.$notification_templatesPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    update<T extends notification_templatesUpdateArgs>(args: Prisma.SelectSubset<T, notification_templatesUpdateArgs<ExtArgs>>): Prisma.Prisma__notification_templatesClient<runtime.Types.Result.GetResult<Prisma.$notification_templatesPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    deleteMany<T extends notification_templatesDeleteManyArgs>(args?: Prisma.SelectSubset<T, notification_templatesDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<Prisma.BatchPayload>;
    updateMany<T extends notification_templatesUpdateManyArgs>(args: Prisma.SelectSubset<T, notification_templatesUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<Prisma.BatchPayload>;
    updateManyAndReturn<T extends notification_templatesUpdateManyAndReturnArgs>(args: Prisma.SelectSubset<T, notification_templatesUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$notification_templatesPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>;
    upsert<T extends notification_templatesUpsertArgs>(args: Prisma.SelectSubset<T, notification_templatesUpsertArgs<ExtArgs>>): Prisma.Prisma__notification_templatesClient<runtime.Types.Result.GetResult<Prisma.$notification_templatesPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    count<T extends notification_templatesCountArgs>(args?: Prisma.Subset<T, notification_templatesCountArgs>): Prisma.PrismaPromise<T extends runtime.Types.Utils.Record<'select', any> ? T['select'] extends true ? number : Prisma.GetScalarType<T['select'], Notification_templatesCountAggregateOutputType> : number>;
    aggregate<T extends Notification_templatesAggregateArgs>(args: Prisma.Subset<T, Notification_templatesAggregateArgs>): Prisma.PrismaPromise<GetNotification_templatesAggregateType<T>>;
    groupBy<T extends notification_templatesGroupByArgs, HasSelectOrTake extends Prisma.Or<Prisma.Extends<'skip', Prisma.Keys<T>>, Prisma.Extends<'take', Prisma.Keys<T>>>, OrderByArg extends Prisma.True extends HasSelectOrTake ? {
        orderBy: notification_templatesGroupByArgs['orderBy'];
    } : {
        orderBy?: notification_templatesGroupByArgs['orderBy'];
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
    }[OrderFields]>(args: Prisma.SubsetIntersection<T, notification_templatesGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetNotification_templatesGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>;
    readonly fields: notification_templatesFieldRefs;
}
export interface Prisma__notification_templatesClient<T, Null = never, ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise";
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): runtime.Types.Utils.JsPromise<TResult1 | TResult2>;
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): runtime.Types.Utils.JsPromise<T | TResult>;
    finally(onfinally?: (() => void) | undefined | null): runtime.Types.Utils.JsPromise<T>;
}
export interface notification_templatesFieldRefs {
    readonly id: Prisma.FieldRef<"notification_templates", 'String'>;
    readonly event_key: Prisma.FieldRef<"notification_templates", 'String'>;
    readonly channel: Prisma.FieldRef<"notification_templates", 'notification_channel'>;
    readonly subject: Prisma.FieldRef<"notification_templates", 'String'>;
    readonly body_template: Prisma.FieldRef<"notification_templates", 'String'>;
    readonly is_active: Prisma.FieldRef<"notification_templates", 'Boolean'>;
    readonly created_at: Prisma.FieldRef<"notification_templates", 'DateTime'>;
    readonly updated_at: Prisma.FieldRef<"notification_templates", 'DateTime'>;
}
export type notification_templatesFindUniqueArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.notification_templatesSelect<ExtArgs> | null;
    omit?: Prisma.notification_templatesOmit<ExtArgs> | null;
    where: Prisma.notification_templatesWhereUniqueInput;
};
export type notification_templatesFindUniqueOrThrowArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.notification_templatesSelect<ExtArgs> | null;
    omit?: Prisma.notification_templatesOmit<ExtArgs> | null;
    where: Prisma.notification_templatesWhereUniqueInput;
};
export type notification_templatesFindFirstArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.notification_templatesSelect<ExtArgs> | null;
    omit?: Prisma.notification_templatesOmit<ExtArgs> | null;
    where?: Prisma.notification_templatesWhereInput;
    orderBy?: Prisma.notification_templatesOrderByWithRelationInput | Prisma.notification_templatesOrderByWithRelationInput[];
    cursor?: Prisma.notification_templatesWhereUniqueInput;
    take?: number;
    skip?: number;
    distinct?: Prisma.Notification_templatesScalarFieldEnum | Prisma.Notification_templatesScalarFieldEnum[];
};
export type notification_templatesFindFirstOrThrowArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.notification_templatesSelect<ExtArgs> | null;
    omit?: Prisma.notification_templatesOmit<ExtArgs> | null;
    where?: Prisma.notification_templatesWhereInput;
    orderBy?: Prisma.notification_templatesOrderByWithRelationInput | Prisma.notification_templatesOrderByWithRelationInput[];
    cursor?: Prisma.notification_templatesWhereUniqueInput;
    take?: number;
    skip?: number;
    distinct?: Prisma.Notification_templatesScalarFieldEnum | Prisma.Notification_templatesScalarFieldEnum[];
};
export type notification_templatesFindManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.notification_templatesSelect<ExtArgs> | null;
    omit?: Prisma.notification_templatesOmit<ExtArgs> | null;
    where?: Prisma.notification_templatesWhereInput;
    orderBy?: Prisma.notification_templatesOrderByWithRelationInput | Prisma.notification_templatesOrderByWithRelationInput[];
    cursor?: Prisma.notification_templatesWhereUniqueInput;
    take?: number;
    skip?: number;
    distinct?: Prisma.Notification_templatesScalarFieldEnum | Prisma.Notification_templatesScalarFieldEnum[];
};
export type notification_templatesCreateArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.notification_templatesSelect<ExtArgs> | null;
    omit?: Prisma.notification_templatesOmit<ExtArgs> | null;
    data: Prisma.XOR<Prisma.notification_templatesCreateInput, Prisma.notification_templatesUncheckedCreateInput>;
};
export type notification_templatesCreateManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    data: Prisma.notification_templatesCreateManyInput | Prisma.notification_templatesCreateManyInput[];
    skipDuplicates?: boolean;
};
export type notification_templatesCreateManyAndReturnArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.notification_templatesSelectCreateManyAndReturn<ExtArgs> | null;
    omit?: Prisma.notification_templatesOmit<ExtArgs> | null;
    data: Prisma.notification_templatesCreateManyInput | Prisma.notification_templatesCreateManyInput[];
    skipDuplicates?: boolean;
};
export type notification_templatesUpdateArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.notification_templatesSelect<ExtArgs> | null;
    omit?: Prisma.notification_templatesOmit<ExtArgs> | null;
    data: Prisma.XOR<Prisma.notification_templatesUpdateInput, Prisma.notification_templatesUncheckedUpdateInput>;
    where: Prisma.notification_templatesWhereUniqueInput;
};
export type notification_templatesUpdateManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    data: Prisma.XOR<Prisma.notification_templatesUpdateManyMutationInput, Prisma.notification_templatesUncheckedUpdateManyInput>;
    where?: Prisma.notification_templatesWhereInput;
    limit?: number;
};
export type notification_templatesUpdateManyAndReturnArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.notification_templatesSelectUpdateManyAndReturn<ExtArgs> | null;
    omit?: Prisma.notification_templatesOmit<ExtArgs> | null;
    data: Prisma.XOR<Prisma.notification_templatesUpdateManyMutationInput, Prisma.notification_templatesUncheckedUpdateManyInput>;
    where?: Prisma.notification_templatesWhereInput;
    limit?: number;
};
export type notification_templatesUpsertArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.notification_templatesSelect<ExtArgs> | null;
    omit?: Prisma.notification_templatesOmit<ExtArgs> | null;
    where: Prisma.notification_templatesWhereUniqueInput;
    create: Prisma.XOR<Prisma.notification_templatesCreateInput, Prisma.notification_templatesUncheckedCreateInput>;
    update: Prisma.XOR<Prisma.notification_templatesUpdateInput, Prisma.notification_templatesUncheckedUpdateInput>;
};
export type notification_templatesDeleteArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.notification_templatesSelect<ExtArgs> | null;
    omit?: Prisma.notification_templatesOmit<ExtArgs> | null;
    where: Prisma.notification_templatesWhereUniqueInput;
};
export type notification_templatesDeleteManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    where?: Prisma.notification_templatesWhereInput;
    limit?: number;
};
export type notification_templatesDefaultArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.notification_templatesSelect<ExtArgs> | null;
    omit?: Prisma.notification_templatesOmit<ExtArgs> | null;
};
