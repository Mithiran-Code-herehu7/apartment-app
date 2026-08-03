import type * as runtime from "@prisma/client/runtime/client";
import type * as Prisma from "../internal/prismaNamespace.js";
export type messagesModel = runtime.Types.Result.DefaultSelection<Prisma.$messagesPayload>;
export type AggregateMessages = {
    _count: MessagesCountAggregateOutputType | null;
    _min: MessagesMinAggregateOutputType | null;
    _max: MessagesMaxAggregateOutputType | null;
};
export type MessagesMinAggregateOutputType = {
    id: string | null;
    booking_id: string | null;
    sender_id: string | null;
    recipient_id: string | null;
    body: string | null;
    is_read: boolean | null;
    read_at: Date | null;
    deleted_at: Date | null;
    created_at: Date | null;
};
export type MessagesMaxAggregateOutputType = {
    id: string | null;
    booking_id: string | null;
    sender_id: string | null;
    recipient_id: string | null;
    body: string | null;
    is_read: boolean | null;
    read_at: Date | null;
    deleted_at: Date | null;
    created_at: Date | null;
};
export type MessagesCountAggregateOutputType = {
    id: number;
    booking_id: number;
    sender_id: number;
    recipient_id: number;
    body: number;
    is_read: number;
    read_at: number;
    deleted_at: number;
    created_at: number;
    _all: number;
};
export type MessagesMinAggregateInputType = {
    id?: true;
    booking_id?: true;
    sender_id?: true;
    recipient_id?: true;
    body?: true;
    is_read?: true;
    read_at?: true;
    deleted_at?: true;
    created_at?: true;
};
export type MessagesMaxAggregateInputType = {
    id?: true;
    booking_id?: true;
    sender_id?: true;
    recipient_id?: true;
    body?: true;
    is_read?: true;
    read_at?: true;
    deleted_at?: true;
    created_at?: true;
};
export type MessagesCountAggregateInputType = {
    id?: true;
    booking_id?: true;
    sender_id?: true;
    recipient_id?: true;
    body?: true;
    is_read?: true;
    read_at?: true;
    deleted_at?: true;
    created_at?: true;
    _all?: true;
};
export type MessagesAggregateArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    where?: Prisma.messagesWhereInput;
    orderBy?: Prisma.messagesOrderByWithRelationInput | Prisma.messagesOrderByWithRelationInput[];
    cursor?: Prisma.messagesWhereUniqueInput;
    take?: number;
    skip?: number;
    _count?: true | MessagesCountAggregateInputType;
    _min?: MessagesMinAggregateInputType;
    _max?: MessagesMaxAggregateInputType;
};
export type GetMessagesAggregateType<T extends MessagesAggregateArgs> = {
    [P in keyof T & keyof AggregateMessages]: P extends '_count' | 'count' ? T[P] extends true ? number : Prisma.GetScalarType<T[P], AggregateMessages[P]> : Prisma.GetScalarType<T[P], AggregateMessages[P]>;
};
export type messagesGroupByArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    where?: Prisma.messagesWhereInput;
    orderBy?: Prisma.messagesOrderByWithAggregationInput | Prisma.messagesOrderByWithAggregationInput[];
    by: Prisma.MessagesScalarFieldEnum[] | Prisma.MessagesScalarFieldEnum;
    having?: Prisma.messagesScalarWhereWithAggregatesInput;
    take?: number;
    skip?: number;
    _count?: MessagesCountAggregateInputType | true;
    _min?: MessagesMinAggregateInputType;
    _max?: MessagesMaxAggregateInputType;
};
export type MessagesGroupByOutputType = {
    id: string;
    booking_id: string;
    sender_id: string;
    recipient_id: string;
    body: string;
    is_read: boolean;
    read_at: Date | null;
    deleted_at: Date | null;
    created_at: Date;
    _count: MessagesCountAggregateOutputType | null;
    _min: MessagesMinAggregateOutputType | null;
    _max: MessagesMaxAggregateOutputType | null;
};
export type GetMessagesGroupByPayload<T extends messagesGroupByArgs> = Prisma.PrismaPromise<Array<Prisma.PickEnumerable<MessagesGroupByOutputType, T['by']> & {
    [P in ((keyof T) & (keyof MessagesGroupByOutputType))]: P extends '_count' ? T[P] extends boolean ? number : Prisma.GetScalarType<T[P], MessagesGroupByOutputType[P]> : Prisma.GetScalarType<T[P], MessagesGroupByOutputType[P]>;
}>>;
export type messagesWhereInput = {
    AND?: Prisma.messagesWhereInput | Prisma.messagesWhereInput[];
    OR?: Prisma.messagesWhereInput[];
    NOT?: Prisma.messagesWhereInput | Prisma.messagesWhereInput[];
    id?: Prisma.UuidFilter<"messages"> | string;
    booking_id?: Prisma.UuidFilter<"messages"> | string;
    sender_id?: Prisma.UuidFilter<"messages"> | string;
    recipient_id?: Prisma.UuidFilter<"messages"> | string;
    body?: Prisma.StringFilter<"messages"> | string;
    is_read?: Prisma.BoolFilter<"messages"> | boolean;
    read_at?: Prisma.DateTimeNullableFilter<"messages"> | Date | string | null;
    deleted_at?: Prisma.DateTimeNullableFilter<"messages"> | Date | string | null;
    created_at?: Prisma.DateTimeFilter<"messages"> | Date | string;
    bookings?: Prisma.XOR<Prisma.BookingsScalarRelationFilter, Prisma.bookingsWhereInput>;
    users_messages_recipient_idTousers?: Prisma.XOR<Prisma.UsersScalarRelationFilter, Prisma.usersWhereInput>;
    users_messages_sender_idTousers?: Prisma.XOR<Prisma.UsersScalarRelationFilter, Prisma.usersWhereInput>;
};
export type messagesOrderByWithRelationInput = {
    id?: Prisma.SortOrder;
    booking_id?: Prisma.SortOrder;
    sender_id?: Prisma.SortOrder;
    recipient_id?: Prisma.SortOrder;
    body?: Prisma.SortOrder;
    is_read?: Prisma.SortOrder;
    read_at?: Prisma.SortOrderInput | Prisma.SortOrder;
    deleted_at?: Prisma.SortOrderInput | Prisma.SortOrder;
    created_at?: Prisma.SortOrder;
    bookings?: Prisma.bookingsOrderByWithRelationInput;
    users_messages_recipient_idTousers?: Prisma.usersOrderByWithRelationInput;
    users_messages_sender_idTousers?: Prisma.usersOrderByWithRelationInput;
};
export type messagesWhereUniqueInput = Prisma.AtLeast<{
    id?: string;
    AND?: Prisma.messagesWhereInput | Prisma.messagesWhereInput[];
    OR?: Prisma.messagesWhereInput[];
    NOT?: Prisma.messagesWhereInput | Prisma.messagesWhereInput[];
    booking_id?: Prisma.UuidFilter<"messages"> | string;
    sender_id?: Prisma.UuidFilter<"messages"> | string;
    recipient_id?: Prisma.UuidFilter<"messages"> | string;
    body?: Prisma.StringFilter<"messages"> | string;
    is_read?: Prisma.BoolFilter<"messages"> | boolean;
    read_at?: Prisma.DateTimeNullableFilter<"messages"> | Date | string | null;
    deleted_at?: Prisma.DateTimeNullableFilter<"messages"> | Date | string | null;
    created_at?: Prisma.DateTimeFilter<"messages"> | Date | string;
    bookings?: Prisma.XOR<Prisma.BookingsScalarRelationFilter, Prisma.bookingsWhereInput>;
    users_messages_recipient_idTousers?: Prisma.XOR<Prisma.UsersScalarRelationFilter, Prisma.usersWhereInput>;
    users_messages_sender_idTousers?: Prisma.XOR<Prisma.UsersScalarRelationFilter, Prisma.usersWhereInput>;
}, "id">;
export type messagesOrderByWithAggregationInput = {
    id?: Prisma.SortOrder;
    booking_id?: Prisma.SortOrder;
    sender_id?: Prisma.SortOrder;
    recipient_id?: Prisma.SortOrder;
    body?: Prisma.SortOrder;
    is_read?: Prisma.SortOrder;
    read_at?: Prisma.SortOrderInput | Prisma.SortOrder;
    deleted_at?: Prisma.SortOrderInput | Prisma.SortOrder;
    created_at?: Prisma.SortOrder;
    _count?: Prisma.messagesCountOrderByAggregateInput;
    _max?: Prisma.messagesMaxOrderByAggregateInput;
    _min?: Prisma.messagesMinOrderByAggregateInput;
};
export type messagesScalarWhereWithAggregatesInput = {
    AND?: Prisma.messagesScalarWhereWithAggregatesInput | Prisma.messagesScalarWhereWithAggregatesInput[];
    OR?: Prisma.messagesScalarWhereWithAggregatesInput[];
    NOT?: Prisma.messagesScalarWhereWithAggregatesInput | Prisma.messagesScalarWhereWithAggregatesInput[];
    id?: Prisma.UuidWithAggregatesFilter<"messages"> | string;
    booking_id?: Prisma.UuidWithAggregatesFilter<"messages"> | string;
    sender_id?: Prisma.UuidWithAggregatesFilter<"messages"> | string;
    recipient_id?: Prisma.UuidWithAggregatesFilter<"messages"> | string;
    body?: Prisma.StringWithAggregatesFilter<"messages"> | string;
    is_read?: Prisma.BoolWithAggregatesFilter<"messages"> | boolean;
    read_at?: Prisma.DateTimeNullableWithAggregatesFilter<"messages"> | Date | string | null;
    deleted_at?: Prisma.DateTimeNullableWithAggregatesFilter<"messages"> | Date | string | null;
    created_at?: Prisma.DateTimeWithAggregatesFilter<"messages"> | Date | string;
};
export type messagesCreateInput = {
    id?: string;
    body: string;
    is_read?: boolean;
    read_at?: Date | string | null;
    deleted_at?: Date | string | null;
    created_at?: Date | string;
    bookings: Prisma.bookingsCreateNestedOneWithoutMessagesInput;
    users_messages_recipient_idTousers: Prisma.usersCreateNestedOneWithoutMessages_messages_recipient_idTousersInput;
    users_messages_sender_idTousers: Prisma.usersCreateNestedOneWithoutMessages_messages_sender_idTousersInput;
};
export type messagesUncheckedCreateInput = {
    id?: string;
    booking_id: string;
    sender_id: string;
    recipient_id: string;
    body: string;
    is_read?: boolean;
    read_at?: Date | string | null;
    deleted_at?: Date | string | null;
    created_at?: Date | string;
};
export type messagesUpdateInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    body?: Prisma.StringFieldUpdateOperationsInput | string;
    is_read?: Prisma.BoolFieldUpdateOperationsInput | boolean;
    read_at?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    deleted_at?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    created_at?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    bookings?: Prisma.bookingsUpdateOneRequiredWithoutMessagesNestedInput;
    users_messages_recipient_idTousers?: Prisma.usersUpdateOneRequiredWithoutMessages_messages_recipient_idTousersNestedInput;
    users_messages_sender_idTousers?: Prisma.usersUpdateOneRequiredWithoutMessages_messages_sender_idTousersNestedInput;
};
export type messagesUncheckedUpdateInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    booking_id?: Prisma.StringFieldUpdateOperationsInput | string;
    sender_id?: Prisma.StringFieldUpdateOperationsInput | string;
    recipient_id?: Prisma.StringFieldUpdateOperationsInput | string;
    body?: Prisma.StringFieldUpdateOperationsInput | string;
    is_read?: Prisma.BoolFieldUpdateOperationsInput | boolean;
    read_at?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    deleted_at?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    created_at?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
};
export type messagesCreateManyInput = {
    id?: string;
    booking_id: string;
    sender_id: string;
    recipient_id: string;
    body: string;
    is_read?: boolean;
    read_at?: Date | string | null;
    deleted_at?: Date | string | null;
    created_at?: Date | string;
};
export type messagesUpdateManyMutationInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    body?: Prisma.StringFieldUpdateOperationsInput | string;
    is_read?: Prisma.BoolFieldUpdateOperationsInput | boolean;
    read_at?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    deleted_at?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    created_at?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
};
export type messagesUncheckedUpdateManyInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    booking_id?: Prisma.StringFieldUpdateOperationsInput | string;
    sender_id?: Prisma.StringFieldUpdateOperationsInput | string;
    recipient_id?: Prisma.StringFieldUpdateOperationsInput | string;
    body?: Prisma.StringFieldUpdateOperationsInput | string;
    is_read?: Prisma.BoolFieldUpdateOperationsInput | boolean;
    read_at?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    deleted_at?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    created_at?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
};
export type MessagesListRelationFilter = {
    every?: Prisma.messagesWhereInput;
    some?: Prisma.messagesWhereInput;
    none?: Prisma.messagesWhereInput;
};
export type messagesOrderByRelationAggregateInput = {
    _count?: Prisma.SortOrder;
};
export type messagesCountOrderByAggregateInput = {
    id?: Prisma.SortOrder;
    booking_id?: Prisma.SortOrder;
    sender_id?: Prisma.SortOrder;
    recipient_id?: Prisma.SortOrder;
    body?: Prisma.SortOrder;
    is_read?: Prisma.SortOrder;
    read_at?: Prisma.SortOrder;
    deleted_at?: Prisma.SortOrder;
    created_at?: Prisma.SortOrder;
};
export type messagesMaxOrderByAggregateInput = {
    id?: Prisma.SortOrder;
    booking_id?: Prisma.SortOrder;
    sender_id?: Prisma.SortOrder;
    recipient_id?: Prisma.SortOrder;
    body?: Prisma.SortOrder;
    is_read?: Prisma.SortOrder;
    read_at?: Prisma.SortOrder;
    deleted_at?: Prisma.SortOrder;
    created_at?: Prisma.SortOrder;
};
export type messagesMinOrderByAggregateInput = {
    id?: Prisma.SortOrder;
    booking_id?: Prisma.SortOrder;
    sender_id?: Prisma.SortOrder;
    recipient_id?: Prisma.SortOrder;
    body?: Prisma.SortOrder;
    is_read?: Prisma.SortOrder;
    read_at?: Prisma.SortOrder;
    deleted_at?: Prisma.SortOrder;
    created_at?: Prisma.SortOrder;
};
export type messagesCreateNestedManyWithoutBookingsInput = {
    create?: Prisma.XOR<Prisma.messagesCreateWithoutBookingsInput, Prisma.messagesUncheckedCreateWithoutBookingsInput> | Prisma.messagesCreateWithoutBookingsInput[] | Prisma.messagesUncheckedCreateWithoutBookingsInput[];
    connectOrCreate?: Prisma.messagesCreateOrConnectWithoutBookingsInput | Prisma.messagesCreateOrConnectWithoutBookingsInput[];
    createMany?: Prisma.messagesCreateManyBookingsInputEnvelope;
    connect?: Prisma.messagesWhereUniqueInput | Prisma.messagesWhereUniqueInput[];
};
export type messagesUncheckedCreateNestedManyWithoutBookingsInput = {
    create?: Prisma.XOR<Prisma.messagesCreateWithoutBookingsInput, Prisma.messagesUncheckedCreateWithoutBookingsInput> | Prisma.messagesCreateWithoutBookingsInput[] | Prisma.messagesUncheckedCreateWithoutBookingsInput[];
    connectOrCreate?: Prisma.messagesCreateOrConnectWithoutBookingsInput | Prisma.messagesCreateOrConnectWithoutBookingsInput[];
    createMany?: Prisma.messagesCreateManyBookingsInputEnvelope;
    connect?: Prisma.messagesWhereUniqueInput | Prisma.messagesWhereUniqueInput[];
};
export type messagesUpdateManyWithoutBookingsNestedInput = {
    create?: Prisma.XOR<Prisma.messagesCreateWithoutBookingsInput, Prisma.messagesUncheckedCreateWithoutBookingsInput> | Prisma.messagesCreateWithoutBookingsInput[] | Prisma.messagesUncheckedCreateWithoutBookingsInput[];
    connectOrCreate?: Prisma.messagesCreateOrConnectWithoutBookingsInput | Prisma.messagesCreateOrConnectWithoutBookingsInput[];
    upsert?: Prisma.messagesUpsertWithWhereUniqueWithoutBookingsInput | Prisma.messagesUpsertWithWhereUniqueWithoutBookingsInput[];
    createMany?: Prisma.messagesCreateManyBookingsInputEnvelope;
    set?: Prisma.messagesWhereUniqueInput | Prisma.messagesWhereUniqueInput[];
    disconnect?: Prisma.messagesWhereUniqueInput | Prisma.messagesWhereUniqueInput[];
    delete?: Prisma.messagesWhereUniqueInput | Prisma.messagesWhereUniqueInput[];
    connect?: Prisma.messagesWhereUniqueInput | Prisma.messagesWhereUniqueInput[];
    update?: Prisma.messagesUpdateWithWhereUniqueWithoutBookingsInput | Prisma.messagesUpdateWithWhereUniqueWithoutBookingsInput[];
    updateMany?: Prisma.messagesUpdateManyWithWhereWithoutBookingsInput | Prisma.messagesUpdateManyWithWhereWithoutBookingsInput[];
    deleteMany?: Prisma.messagesScalarWhereInput | Prisma.messagesScalarWhereInput[];
};
export type messagesUncheckedUpdateManyWithoutBookingsNestedInput = {
    create?: Prisma.XOR<Prisma.messagesCreateWithoutBookingsInput, Prisma.messagesUncheckedCreateWithoutBookingsInput> | Prisma.messagesCreateWithoutBookingsInput[] | Prisma.messagesUncheckedCreateWithoutBookingsInput[];
    connectOrCreate?: Prisma.messagesCreateOrConnectWithoutBookingsInput | Prisma.messagesCreateOrConnectWithoutBookingsInput[];
    upsert?: Prisma.messagesUpsertWithWhereUniqueWithoutBookingsInput | Prisma.messagesUpsertWithWhereUniqueWithoutBookingsInput[];
    createMany?: Prisma.messagesCreateManyBookingsInputEnvelope;
    set?: Prisma.messagesWhereUniqueInput | Prisma.messagesWhereUniqueInput[];
    disconnect?: Prisma.messagesWhereUniqueInput | Prisma.messagesWhereUniqueInput[];
    delete?: Prisma.messagesWhereUniqueInput | Prisma.messagesWhereUniqueInput[];
    connect?: Prisma.messagesWhereUniqueInput | Prisma.messagesWhereUniqueInput[];
    update?: Prisma.messagesUpdateWithWhereUniqueWithoutBookingsInput | Prisma.messagesUpdateWithWhereUniqueWithoutBookingsInput[];
    updateMany?: Prisma.messagesUpdateManyWithWhereWithoutBookingsInput | Prisma.messagesUpdateManyWithWhereWithoutBookingsInput[];
    deleteMany?: Prisma.messagesScalarWhereInput | Prisma.messagesScalarWhereInput[];
};
export type messagesCreateNestedManyWithoutUsers_messages_recipient_idTousersInput = {
    create?: Prisma.XOR<Prisma.messagesCreateWithoutUsers_messages_recipient_idTousersInput, Prisma.messagesUncheckedCreateWithoutUsers_messages_recipient_idTousersInput> | Prisma.messagesCreateWithoutUsers_messages_recipient_idTousersInput[] | Prisma.messagesUncheckedCreateWithoutUsers_messages_recipient_idTousersInput[];
    connectOrCreate?: Prisma.messagesCreateOrConnectWithoutUsers_messages_recipient_idTousersInput | Prisma.messagesCreateOrConnectWithoutUsers_messages_recipient_idTousersInput[];
    createMany?: Prisma.messagesCreateManyUsers_messages_recipient_idTousersInputEnvelope;
    connect?: Prisma.messagesWhereUniqueInput | Prisma.messagesWhereUniqueInput[];
};
export type messagesCreateNestedManyWithoutUsers_messages_sender_idTousersInput = {
    create?: Prisma.XOR<Prisma.messagesCreateWithoutUsers_messages_sender_idTousersInput, Prisma.messagesUncheckedCreateWithoutUsers_messages_sender_idTousersInput> | Prisma.messagesCreateWithoutUsers_messages_sender_idTousersInput[] | Prisma.messagesUncheckedCreateWithoutUsers_messages_sender_idTousersInput[];
    connectOrCreate?: Prisma.messagesCreateOrConnectWithoutUsers_messages_sender_idTousersInput | Prisma.messagesCreateOrConnectWithoutUsers_messages_sender_idTousersInput[];
    createMany?: Prisma.messagesCreateManyUsers_messages_sender_idTousersInputEnvelope;
    connect?: Prisma.messagesWhereUniqueInput | Prisma.messagesWhereUniqueInput[];
};
export type messagesUncheckedCreateNestedManyWithoutUsers_messages_recipient_idTousersInput = {
    create?: Prisma.XOR<Prisma.messagesCreateWithoutUsers_messages_recipient_idTousersInput, Prisma.messagesUncheckedCreateWithoutUsers_messages_recipient_idTousersInput> | Prisma.messagesCreateWithoutUsers_messages_recipient_idTousersInput[] | Prisma.messagesUncheckedCreateWithoutUsers_messages_recipient_idTousersInput[];
    connectOrCreate?: Prisma.messagesCreateOrConnectWithoutUsers_messages_recipient_idTousersInput | Prisma.messagesCreateOrConnectWithoutUsers_messages_recipient_idTousersInput[];
    createMany?: Prisma.messagesCreateManyUsers_messages_recipient_idTousersInputEnvelope;
    connect?: Prisma.messagesWhereUniqueInput | Prisma.messagesWhereUniqueInput[];
};
export type messagesUncheckedCreateNestedManyWithoutUsers_messages_sender_idTousersInput = {
    create?: Prisma.XOR<Prisma.messagesCreateWithoutUsers_messages_sender_idTousersInput, Prisma.messagesUncheckedCreateWithoutUsers_messages_sender_idTousersInput> | Prisma.messagesCreateWithoutUsers_messages_sender_idTousersInput[] | Prisma.messagesUncheckedCreateWithoutUsers_messages_sender_idTousersInput[];
    connectOrCreate?: Prisma.messagesCreateOrConnectWithoutUsers_messages_sender_idTousersInput | Prisma.messagesCreateOrConnectWithoutUsers_messages_sender_idTousersInput[];
    createMany?: Prisma.messagesCreateManyUsers_messages_sender_idTousersInputEnvelope;
    connect?: Prisma.messagesWhereUniqueInput | Prisma.messagesWhereUniqueInput[];
};
export type messagesUpdateManyWithoutUsers_messages_recipient_idTousersNestedInput = {
    create?: Prisma.XOR<Prisma.messagesCreateWithoutUsers_messages_recipient_idTousersInput, Prisma.messagesUncheckedCreateWithoutUsers_messages_recipient_idTousersInput> | Prisma.messagesCreateWithoutUsers_messages_recipient_idTousersInput[] | Prisma.messagesUncheckedCreateWithoutUsers_messages_recipient_idTousersInput[];
    connectOrCreate?: Prisma.messagesCreateOrConnectWithoutUsers_messages_recipient_idTousersInput | Prisma.messagesCreateOrConnectWithoutUsers_messages_recipient_idTousersInput[];
    upsert?: Prisma.messagesUpsertWithWhereUniqueWithoutUsers_messages_recipient_idTousersInput | Prisma.messagesUpsertWithWhereUniqueWithoutUsers_messages_recipient_idTousersInput[];
    createMany?: Prisma.messagesCreateManyUsers_messages_recipient_idTousersInputEnvelope;
    set?: Prisma.messagesWhereUniqueInput | Prisma.messagesWhereUniqueInput[];
    disconnect?: Prisma.messagesWhereUniqueInput | Prisma.messagesWhereUniqueInput[];
    delete?: Prisma.messagesWhereUniqueInput | Prisma.messagesWhereUniqueInput[];
    connect?: Prisma.messagesWhereUniqueInput | Prisma.messagesWhereUniqueInput[];
    update?: Prisma.messagesUpdateWithWhereUniqueWithoutUsers_messages_recipient_idTousersInput | Prisma.messagesUpdateWithWhereUniqueWithoutUsers_messages_recipient_idTousersInput[];
    updateMany?: Prisma.messagesUpdateManyWithWhereWithoutUsers_messages_recipient_idTousersInput | Prisma.messagesUpdateManyWithWhereWithoutUsers_messages_recipient_idTousersInput[];
    deleteMany?: Prisma.messagesScalarWhereInput | Prisma.messagesScalarWhereInput[];
};
export type messagesUpdateManyWithoutUsers_messages_sender_idTousersNestedInput = {
    create?: Prisma.XOR<Prisma.messagesCreateWithoutUsers_messages_sender_idTousersInput, Prisma.messagesUncheckedCreateWithoutUsers_messages_sender_idTousersInput> | Prisma.messagesCreateWithoutUsers_messages_sender_idTousersInput[] | Prisma.messagesUncheckedCreateWithoutUsers_messages_sender_idTousersInput[];
    connectOrCreate?: Prisma.messagesCreateOrConnectWithoutUsers_messages_sender_idTousersInput | Prisma.messagesCreateOrConnectWithoutUsers_messages_sender_idTousersInput[];
    upsert?: Prisma.messagesUpsertWithWhereUniqueWithoutUsers_messages_sender_idTousersInput | Prisma.messagesUpsertWithWhereUniqueWithoutUsers_messages_sender_idTousersInput[];
    createMany?: Prisma.messagesCreateManyUsers_messages_sender_idTousersInputEnvelope;
    set?: Prisma.messagesWhereUniqueInput | Prisma.messagesWhereUniqueInput[];
    disconnect?: Prisma.messagesWhereUniqueInput | Prisma.messagesWhereUniqueInput[];
    delete?: Prisma.messagesWhereUniqueInput | Prisma.messagesWhereUniqueInput[];
    connect?: Prisma.messagesWhereUniqueInput | Prisma.messagesWhereUniqueInput[];
    update?: Prisma.messagesUpdateWithWhereUniqueWithoutUsers_messages_sender_idTousersInput | Prisma.messagesUpdateWithWhereUniqueWithoutUsers_messages_sender_idTousersInput[];
    updateMany?: Prisma.messagesUpdateManyWithWhereWithoutUsers_messages_sender_idTousersInput | Prisma.messagesUpdateManyWithWhereWithoutUsers_messages_sender_idTousersInput[];
    deleteMany?: Prisma.messagesScalarWhereInput | Prisma.messagesScalarWhereInput[];
};
export type messagesUncheckedUpdateManyWithoutUsers_messages_recipient_idTousersNestedInput = {
    create?: Prisma.XOR<Prisma.messagesCreateWithoutUsers_messages_recipient_idTousersInput, Prisma.messagesUncheckedCreateWithoutUsers_messages_recipient_idTousersInput> | Prisma.messagesCreateWithoutUsers_messages_recipient_idTousersInput[] | Prisma.messagesUncheckedCreateWithoutUsers_messages_recipient_idTousersInput[];
    connectOrCreate?: Prisma.messagesCreateOrConnectWithoutUsers_messages_recipient_idTousersInput | Prisma.messagesCreateOrConnectWithoutUsers_messages_recipient_idTousersInput[];
    upsert?: Prisma.messagesUpsertWithWhereUniqueWithoutUsers_messages_recipient_idTousersInput | Prisma.messagesUpsertWithWhereUniqueWithoutUsers_messages_recipient_idTousersInput[];
    createMany?: Prisma.messagesCreateManyUsers_messages_recipient_idTousersInputEnvelope;
    set?: Prisma.messagesWhereUniqueInput | Prisma.messagesWhereUniqueInput[];
    disconnect?: Prisma.messagesWhereUniqueInput | Prisma.messagesWhereUniqueInput[];
    delete?: Prisma.messagesWhereUniqueInput | Prisma.messagesWhereUniqueInput[];
    connect?: Prisma.messagesWhereUniqueInput | Prisma.messagesWhereUniqueInput[];
    update?: Prisma.messagesUpdateWithWhereUniqueWithoutUsers_messages_recipient_idTousersInput | Prisma.messagesUpdateWithWhereUniqueWithoutUsers_messages_recipient_idTousersInput[];
    updateMany?: Prisma.messagesUpdateManyWithWhereWithoutUsers_messages_recipient_idTousersInput | Prisma.messagesUpdateManyWithWhereWithoutUsers_messages_recipient_idTousersInput[];
    deleteMany?: Prisma.messagesScalarWhereInput | Prisma.messagesScalarWhereInput[];
};
export type messagesUncheckedUpdateManyWithoutUsers_messages_sender_idTousersNestedInput = {
    create?: Prisma.XOR<Prisma.messagesCreateWithoutUsers_messages_sender_idTousersInput, Prisma.messagesUncheckedCreateWithoutUsers_messages_sender_idTousersInput> | Prisma.messagesCreateWithoutUsers_messages_sender_idTousersInput[] | Prisma.messagesUncheckedCreateWithoutUsers_messages_sender_idTousersInput[];
    connectOrCreate?: Prisma.messagesCreateOrConnectWithoutUsers_messages_sender_idTousersInput | Prisma.messagesCreateOrConnectWithoutUsers_messages_sender_idTousersInput[];
    upsert?: Prisma.messagesUpsertWithWhereUniqueWithoutUsers_messages_sender_idTousersInput | Prisma.messagesUpsertWithWhereUniqueWithoutUsers_messages_sender_idTousersInput[];
    createMany?: Prisma.messagesCreateManyUsers_messages_sender_idTousersInputEnvelope;
    set?: Prisma.messagesWhereUniqueInput | Prisma.messagesWhereUniqueInput[];
    disconnect?: Prisma.messagesWhereUniqueInput | Prisma.messagesWhereUniqueInput[];
    delete?: Prisma.messagesWhereUniqueInput | Prisma.messagesWhereUniqueInput[];
    connect?: Prisma.messagesWhereUniqueInput | Prisma.messagesWhereUniqueInput[];
    update?: Prisma.messagesUpdateWithWhereUniqueWithoutUsers_messages_sender_idTousersInput | Prisma.messagesUpdateWithWhereUniqueWithoutUsers_messages_sender_idTousersInput[];
    updateMany?: Prisma.messagesUpdateManyWithWhereWithoutUsers_messages_sender_idTousersInput | Prisma.messagesUpdateManyWithWhereWithoutUsers_messages_sender_idTousersInput[];
    deleteMany?: Prisma.messagesScalarWhereInput | Prisma.messagesScalarWhereInput[];
};
export type messagesCreateWithoutBookingsInput = {
    id?: string;
    body: string;
    is_read?: boolean;
    read_at?: Date | string | null;
    deleted_at?: Date | string | null;
    created_at?: Date | string;
    users_messages_recipient_idTousers: Prisma.usersCreateNestedOneWithoutMessages_messages_recipient_idTousersInput;
    users_messages_sender_idTousers: Prisma.usersCreateNestedOneWithoutMessages_messages_sender_idTousersInput;
};
export type messagesUncheckedCreateWithoutBookingsInput = {
    id?: string;
    sender_id: string;
    recipient_id: string;
    body: string;
    is_read?: boolean;
    read_at?: Date | string | null;
    deleted_at?: Date | string | null;
    created_at?: Date | string;
};
export type messagesCreateOrConnectWithoutBookingsInput = {
    where: Prisma.messagesWhereUniqueInput;
    create: Prisma.XOR<Prisma.messagesCreateWithoutBookingsInput, Prisma.messagesUncheckedCreateWithoutBookingsInput>;
};
export type messagesCreateManyBookingsInputEnvelope = {
    data: Prisma.messagesCreateManyBookingsInput | Prisma.messagesCreateManyBookingsInput[];
    skipDuplicates?: boolean;
};
export type messagesUpsertWithWhereUniqueWithoutBookingsInput = {
    where: Prisma.messagesWhereUniqueInput;
    update: Prisma.XOR<Prisma.messagesUpdateWithoutBookingsInput, Prisma.messagesUncheckedUpdateWithoutBookingsInput>;
    create: Prisma.XOR<Prisma.messagesCreateWithoutBookingsInput, Prisma.messagesUncheckedCreateWithoutBookingsInput>;
};
export type messagesUpdateWithWhereUniqueWithoutBookingsInput = {
    where: Prisma.messagesWhereUniqueInput;
    data: Prisma.XOR<Prisma.messagesUpdateWithoutBookingsInput, Prisma.messagesUncheckedUpdateWithoutBookingsInput>;
};
export type messagesUpdateManyWithWhereWithoutBookingsInput = {
    where: Prisma.messagesScalarWhereInput;
    data: Prisma.XOR<Prisma.messagesUpdateManyMutationInput, Prisma.messagesUncheckedUpdateManyWithoutBookingsInput>;
};
export type messagesScalarWhereInput = {
    AND?: Prisma.messagesScalarWhereInput | Prisma.messagesScalarWhereInput[];
    OR?: Prisma.messagesScalarWhereInput[];
    NOT?: Prisma.messagesScalarWhereInput | Prisma.messagesScalarWhereInput[];
    id?: Prisma.UuidFilter<"messages"> | string;
    booking_id?: Prisma.UuidFilter<"messages"> | string;
    sender_id?: Prisma.UuidFilter<"messages"> | string;
    recipient_id?: Prisma.UuidFilter<"messages"> | string;
    body?: Prisma.StringFilter<"messages"> | string;
    is_read?: Prisma.BoolFilter<"messages"> | boolean;
    read_at?: Prisma.DateTimeNullableFilter<"messages"> | Date | string | null;
    deleted_at?: Prisma.DateTimeNullableFilter<"messages"> | Date | string | null;
    created_at?: Prisma.DateTimeFilter<"messages"> | Date | string;
};
export type messagesCreateWithoutUsers_messages_recipient_idTousersInput = {
    id?: string;
    body: string;
    is_read?: boolean;
    read_at?: Date | string | null;
    deleted_at?: Date | string | null;
    created_at?: Date | string;
    bookings: Prisma.bookingsCreateNestedOneWithoutMessagesInput;
    users_messages_sender_idTousers: Prisma.usersCreateNestedOneWithoutMessages_messages_sender_idTousersInput;
};
export type messagesUncheckedCreateWithoutUsers_messages_recipient_idTousersInput = {
    id?: string;
    booking_id: string;
    sender_id: string;
    body: string;
    is_read?: boolean;
    read_at?: Date | string | null;
    deleted_at?: Date | string | null;
    created_at?: Date | string;
};
export type messagesCreateOrConnectWithoutUsers_messages_recipient_idTousersInput = {
    where: Prisma.messagesWhereUniqueInput;
    create: Prisma.XOR<Prisma.messagesCreateWithoutUsers_messages_recipient_idTousersInput, Prisma.messagesUncheckedCreateWithoutUsers_messages_recipient_idTousersInput>;
};
export type messagesCreateManyUsers_messages_recipient_idTousersInputEnvelope = {
    data: Prisma.messagesCreateManyUsers_messages_recipient_idTousersInput | Prisma.messagesCreateManyUsers_messages_recipient_idTousersInput[];
    skipDuplicates?: boolean;
};
export type messagesCreateWithoutUsers_messages_sender_idTousersInput = {
    id?: string;
    body: string;
    is_read?: boolean;
    read_at?: Date | string | null;
    deleted_at?: Date | string | null;
    created_at?: Date | string;
    bookings: Prisma.bookingsCreateNestedOneWithoutMessagesInput;
    users_messages_recipient_idTousers: Prisma.usersCreateNestedOneWithoutMessages_messages_recipient_idTousersInput;
};
export type messagesUncheckedCreateWithoutUsers_messages_sender_idTousersInput = {
    id?: string;
    booking_id: string;
    recipient_id: string;
    body: string;
    is_read?: boolean;
    read_at?: Date | string | null;
    deleted_at?: Date | string | null;
    created_at?: Date | string;
};
export type messagesCreateOrConnectWithoutUsers_messages_sender_idTousersInput = {
    where: Prisma.messagesWhereUniqueInput;
    create: Prisma.XOR<Prisma.messagesCreateWithoutUsers_messages_sender_idTousersInput, Prisma.messagesUncheckedCreateWithoutUsers_messages_sender_idTousersInput>;
};
export type messagesCreateManyUsers_messages_sender_idTousersInputEnvelope = {
    data: Prisma.messagesCreateManyUsers_messages_sender_idTousersInput | Prisma.messagesCreateManyUsers_messages_sender_idTousersInput[];
    skipDuplicates?: boolean;
};
export type messagesUpsertWithWhereUniqueWithoutUsers_messages_recipient_idTousersInput = {
    where: Prisma.messagesWhereUniqueInput;
    update: Prisma.XOR<Prisma.messagesUpdateWithoutUsers_messages_recipient_idTousersInput, Prisma.messagesUncheckedUpdateWithoutUsers_messages_recipient_idTousersInput>;
    create: Prisma.XOR<Prisma.messagesCreateWithoutUsers_messages_recipient_idTousersInput, Prisma.messagesUncheckedCreateWithoutUsers_messages_recipient_idTousersInput>;
};
export type messagesUpdateWithWhereUniqueWithoutUsers_messages_recipient_idTousersInput = {
    where: Prisma.messagesWhereUniqueInput;
    data: Prisma.XOR<Prisma.messagesUpdateWithoutUsers_messages_recipient_idTousersInput, Prisma.messagesUncheckedUpdateWithoutUsers_messages_recipient_idTousersInput>;
};
export type messagesUpdateManyWithWhereWithoutUsers_messages_recipient_idTousersInput = {
    where: Prisma.messagesScalarWhereInput;
    data: Prisma.XOR<Prisma.messagesUpdateManyMutationInput, Prisma.messagesUncheckedUpdateManyWithoutUsers_messages_recipient_idTousersInput>;
};
export type messagesUpsertWithWhereUniqueWithoutUsers_messages_sender_idTousersInput = {
    where: Prisma.messagesWhereUniqueInput;
    update: Prisma.XOR<Prisma.messagesUpdateWithoutUsers_messages_sender_idTousersInput, Prisma.messagesUncheckedUpdateWithoutUsers_messages_sender_idTousersInput>;
    create: Prisma.XOR<Prisma.messagesCreateWithoutUsers_messages_sender_idTousersInput, Prisma.messagesUncheckedCreateWithoutUsers_messages_sender_idTousersInput>;
};
export type messagesUpdateWithWhereUniqueWithoutUsers_messages_sender_idTousersInput = {
    where: Prisma.messagesWhereUniqueInput;
    data: Prisma.XOR<Prisma.messagesUpdateWithoutUsers_messages_sender_idTousersInput, Prisma.messagesUncheckedUpdateWithoutUsers_messages_sender_idTousersInput>;
};
export type messagesUpdateManyWithWhereWithoutUsers_messages_sender_idTousersInput = {
    where: Prisma.messagesScalarWhereInput;
    data: Prisma.XOR<Prisma.messagesUpdateManyMutationInput, Prisma.messagesUncheckedUpdateManyWithoutUsers_messages_sender_idTousersInput>;
};
export type messagesCreateManyBookingsInput = {
    id?: string;
    sender_id: string;
    recipient_id: string;
    body: string;
    is_read?: boolean;
    read_at?: Date | string | null;
    deleted_at?: Date | string | null;
    created_at?: Date | string;
};
export type messagesUpdateWithoutBookingsInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    body?: Prisma.StringFieldUpdateOperationsInput | string;
    is_read?: Prisma.BoolFieldUpdateOperationsInput | boolean;
    read_at?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    deleted_at?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    created_at?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    users_messages_recipient_idTousers?: Prisma.usersUpdateOneRequiredWithoutMessages_messages_recipient_idTousersNestedInput;
    users_messages_sender_idTousers?: Prisma.usersUpdateOneRequiredWithoutMessages_messages_sender_idTousersNestedInput;
};
export type messagesUncheckedUpdateWithoutBookingsInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    sender_id?: Prisma.StringFieldUpdateOperationsInput | string;
    recipient_id?: Prisma.StringFieldUpdateOperationsInput | string;
    body?: Prisma.StringFieldUpdateOperationsInput | string;
    is_read?: Prisma.BoolFieldUpdateOperationsInput | boolean;
    read_at?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    deleted_at?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    created_at?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
};
export type messagesUncheckedUpdateManyWithoutBookingsInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    sender_id?: Prisma.StringFieldUpdateOperationsInput | string;
    recipient_id?: Prisma.StringFieldUpdateOperationsInput | string;
    body?: Prisma.StringFieldUpdateOperationsInput | string;
    is_read?: Prisma.BoolFieldUpdateOperationsInput | boolean;
    read_at?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    deleted_at?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    created_at?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
};
export type messagesCreateManyUsers_messages_recipient_idTousersInput = {
    id?: string;
    booking_id: string;
    sender_id: string;
    body: string;
    is_read?: boolean;
    read_at?: Date | string | null;
    deleted_at?: Date | string | null;
    created_at?: Date | string;
};
export type messagesCreateManyUsers_messages_sender_idTousersInput = {
    id?: string;
    booking_id: string;
    recipient_id: string;
    body: string;
    is_read?: boolean;
    read_at?: Date | string | null;
    deleted_at?: Date | string | null;
    created_at?: Date | string;
};
export type messagesUpdateWithoutUsers_messages_recipient_idTousersInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    body?: Prisma.StringFieldUpdateOperationsInput | string;
    is_read?: Prisma.BoolFieldUpdateOperationsInput | boolean;
    read_at?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    deleted_at?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    created_at?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    bookings?: Prisma.bookingsUpdateOneRequiredWithoutMessagesNestedInput;
    users_messages_sender_idTousers?: Prisma.usersUpdateOneRequiredWithoutMessages_messages_sender_idTousersNestedInput;
};
export type messagesUncheckedUpdateWithoutUsers_messages_recipient_idTousersInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    booking_id?: Prisma.StringFieldUpdateOperationsInput | string;
    sender_id?: Prisma.StringFieldUpdateOperationsInput | string;
    body?: Prisma.StringFieldUpdateOperationsInput | string;
    is_read?: Prisma.BoolFieldUpdateOperationsInput | boolean;
    read_at?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    deleted_at?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    created_at?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
};
export type messagesUncheckedUpdateManyWithoutUsers_messages_recipient_idTousersInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    booking_id?: Prisma.StringFieldUpdateOperationsInput | string;
    sender_id?: Prisma.StringFieldUpdateOperationsInput | string;
    body?: Prisma.StringFieldUpdateOperationsInput | string;
    is_read?: Prisma.BoolFieldUpdateOperationsInput | boolean;
    read_at?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    deleted_at?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    created_at?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
};
export type messagesUpdateWithoutUsers_messages_sender_idTousersInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    body?: Prisma.StringFieldUpdateOperationsInput | string;
    is_read?: Prisma.BoolFieldUpdateOperationsInput | boolean;
    read_at?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    deleted_at?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    created_at?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    bookings?: Prisma.bookingsUpdateOneRequiredWithoutMessagesNestedInput;
    users_messages_recipient_idTousers?: Prisma.usersUpdateOneRequiredWithoutMessages_messages_recipient_idTousersNestedInput;
};
export type messagesUncheckedUpdateWithoutUsers_messages_sender_idTousersInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    booking_id?: Prisma.StringFieldUpdateOperationsInput | string;
    recipient_id?: Prisma.StringFieldUpdateOperationsInput | string;
    body?: Prisma.StringFieldUpdateOperationsInput | string;
    is_read?: Prisma.BoolFieldUpdateOperationsInput | boolean;
    read_at?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    deleted_at?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    created_at?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
};
export type messagesUncheckedUpdateManyWithoutUsers_messages_sender_idTousersInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    booking_id?: Prisma.StringFieldUpdateOperationsInput | string;
    recipient_id?: Prisma.StringFieldUpdateOperationsInput | string;
    body?: Prisma.StringFieldUpdateOperationsInput | string;
    is_read?: Prisma.BoolFieldUpdateOperationsInput | boolean;
    read_at?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    deleted_at?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    created_at?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
};
export type messagesSelect<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetSelect<{
    id?: boolean;
    booking_id?: boolean;
    sender_id?: boolean;
    recipient_id?: boolean;
    body?: boolean;
    is_read?: boolean;
    read_at?: boolean;
    deleted_at?: boolean;
    created_at?: boolean;
    bookings?: boolean | Prisma.bookingsDefaultArgs<ExtArgs>;
    users_messages_recipient_idTousers?: boolean | Prisma.usersDefaultArgs<ExtArgs>;
    users_messages_sender_idTousers?: boolean | Prisma.usersDefaultArgs<ExtArgs>;
}, ExtArgs["result"]["messages"]>;
export type messagesSelectCreateManyAndReturn<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetSelect<{
    id?: boolean;
    booking_id?: boolean;
    sender_id?: boolean;
    recipient_id?: boolean;
    body?: boolean;
    is_read?: boolean;
    read_at?: boolean;
    deleted_at?: boolean;
    created_at?: boolean;
    bookings?: boolean | Prisma.bookingsDefaultArgs<ExtArgs>;
    users_messages_recipient_idTousers?: boolean | Prisma.usersDefaultArgs<ExtArgs>;
    users_messages_sender_idTousers?: boolean | Prisma.usersDefaultArgs<ExtArgs>;
}, ExtArgs["result"]["messages"]>;
export type messagesSelectUpdateManyAndReturn<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetSelect<{
    id?: boolean;
    booking_id?: boolean;
    sender_id?: boolean;
    recipient_id?: boolean;
    body?: boolean;
    is_read?: boolean;
    read_at?: boolean;
    deleted_at?: boolean;
    created_at?: boolean;
    bookings?: boolean | Prisma.bookingsDefaultArgs<ExtArgs>;
    users_messages_recipient_idTousers?: boolean | Prisma.usersDefaultArgs<ExtArgs>;
    users_messages_sender_idTousers?: boolean | Prisma.usersDefaultArgs<ExtArgs>;
}, ExtArgs["result"]["messages"]>;
export type messagesSelectScalar = {
    id?: boolean;
    booking_id?: boolean;
    sender_id?: boolean;
    recipient_id?: boolean;
    body?: boolean;
    is_read?: boolean;
    read_at?: boolean;
    deleted_at?: boolean;
    created_at?: boolean;
};
export type messagesOmit<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetOmit<"id" | "booking_id" | "sender_id" | "recipient_id" | "body" | "is_read" | "read_at" | "deleted_at" | "created_at", ExtArgs["result"]["messages"]>;
export type messagesInclude<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    bookings?: boolean | Prisma.bookingsDefaultArgs<ExtArgs>;
    users_messages_recipient_idTousers?: boolean | Prisma.usersDefaultArgs<ExtArgs>;
    users_messages_sender_idTousers?: boolean | Prisma.usersDefaultArgs<ExtArgs>;
};
export type messagesIncludeCreateManyAndReturn<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    bookings?: boolean | Prisma.bookingsDefaultArgs<ExtArgs>;
    users_messages_recipient_idTousers?: boolean | Prisma.usersDefaultArgs<ExtArgs>;
    users_messages_sender_idTousers?: boolean | Prisma.usersDefaultArgs<ExtArgs>;
};
export type messagesIncludeUpdateManyAndReturn<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    bookings?: boolean | Prisma.bookingsDefaultArgs<ExtArgs>;
    users_messages_recipient_idTousers?: boolean | Prisma.usersDefaultArgs<ExtArgs>;
    users_messages_sender_idTousers?: boolean | Prisma.usersDefaultArgs<ExtArgs>;
};
export type $messagesPayload<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    name: "messages";
    objects: {
        bookings: Prisma.$bookingsPayload<ExtArgs>;
        users_messages_recipient_idTousers: Prisma.$usersPayload<ExtArgs>;
        users_messages_sender_idTousers: Prisma.$usersPayload<ExtArgs>;
    };
    scalars: runtime.Types.Extensions.GetPayloadResult<{
        id: string;
        booking_id: string;
        sender_id: string;
        recipient_id: string;
        body: string;
        is_read: boolean;
        read_at: Date | null;
        deleted_at: Date | null;
        created_at: Date;
    }, ExtArgs["result"]["messages"]>;
    composites: {};
};
export type messagesGetPayload<S extends boolean | null | undefined | messagesDefaultArgs> = runtime.Types.Result.GetResult<Prisma.$messagesPayload, S>;
export type messagesCountArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = Omit<messagesFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
    select?: MessagesCountAggregateInputType | true;
};
export interface messagesDelegate<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: {
        types: Prisma.TypeMap<ExtArgs>['model']['messages'];
        meta: {
            name: 'messages';
        };
    };
    findUnique<T extends messagesFindUniqueArgs>(args: Prisma.SelectSubset<T, messagesFindUniqueArgs<ExtArgs>>): Prisma.Prisma__messagesClient<runtime.Types.Result.GetResult<Prisma.$messagesPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>;
    findUniqueOrThrow<T extends messagesFindUniqueOrThrowArgs>(args: Prisma.SelectSubset<T, messagesFindUniqueOrThrowArgs<ExtArgs>>): Prisma.Prisma__messagesClient<runtime.Types.Result.GetResult<Prisma.$messagesPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    findFirst<T extends messagesFindFirstArgs>(args?: Prisma.SelectSubset<T, messagesFindFirstArgs<ExtArgs>>): Prisma.Prisma__messagesClient<runtime.Types.Result.GetResult<Prisma.$messagesPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>;
    findFirstOrThrow<T extends messagesFindFirstOrThrowArgs>(args?: Prisma.SelectSubset<T, messagesFindFirstOrThrowArgs<ExtArgs>>): Prisma.Prisma__messagesClient<runtime.Types.Result.GetResult<Prisma.$messagesPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    findMany<T extends messagesFindManyArgs>(args?: Prisma.SelectSubset<T, messagesFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$messagesPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>;
    create<T extends messagesCreateArgs>(args: Prisma.SelectSubset<T, messagesCreateArgs<ExtArgs>>): Prisma.Prisma__messagesClient<runtime.Types.Result.GetResult<Prisma.$messagesPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    createMany<T extends messagesCreateManyArgs>(args?: Prisma.SelectSubset<T, messagesCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<Prisma.BatchPayload>;
    createManyAndReturn<T extends messagesCreateManyAndReturnArgs>(args?: Prisma.SelectSubset<T, messagesCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$messagesPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>;
    delete<T extends messagesDeleteArgs>(args: Prisma.SelectSubset<T, messagesDeleteArgs<ExtArgs>>): Prisma.Prisma__messagesClient<runtime.Types.Result.GetResult<Prisma.$messagesPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    update<T extends messagesUpdateArgs>(args: Prisma.SelectSubset<T, messagesUpdateArgs<ExtArgs>>): Prisma.Prisma__messagesClient<runtime.Types.Result.GetResult<Prisma.$messagesPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    deleteMany<T extends messagesDeleteManyArgs>(args?: Prisma.SelectSubset<T, messagesDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<Prisma.BatchPayload>;
    updateMany<T extends messagesUpdateManyArgs>(args: Prisma.SelectSubset<T, messagesUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<Prisma.BatchPayload>;
    updateManyAndReturn<T extends messagesUpdateManyAndReturnArgs>(args: Prisma.SelectSubset<T, messagesUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$messagesPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>;
    upsert<T extends messagesUpsertArgs>(args: Prisma.SelectSubset<T, messagesUpsertArgs<ExtArgs>>): Prisma.Prisma__messagesClient<runtime.Types.Result.GetResult<Prisma.$messagesPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    count<T extends messagesCountArgs>(args?: Prisma.Subset<T, messagesCountArgs>): Prisma.PrismaPromise<T extends runtime.Types.Utils.Record<'select', any> ? T['select'] extends true ? number : Prisma.GetScalarType<T['select'], MessagesCountAggregateOutputType> : number>;
    aggregate<T extends MessagesAggregateArgs>(args: Prisma.Subset<T, MessagesAggregateArgs>): Prisma.PrismaPromise<GetMessagesAggregateType<T>>;
    groupBy<T extends messagesGroupByArgs, HasSelectOrTake extends Prisma.Or<Prisma.Extends<'skip', Prisma.Keys<T>>, Prisma.Extends<'take', Prisma.Keys<T>>>, OrderByArg extends Prisma.True extends HasSelectOrTake ? {
        orderBy: messagesGroupByArgs['orderBy'];
    } : {
        orderBy?: messagesGroupByArgs['orderBy'];
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
    }[OrderFields]>(args: Prisma.SubsetIntersection<T, messagesGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetMessagesGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>;
    readonly fields: messagesFieldRefs;
}
export interface Prisma__messagesClient<T, Null = never, ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise";
    bookings<T extends Prisma.bookingsDefaultArgs<ExtArgs> = {}>(args?: Prisma.Subset<T, Prisma.bookingsDefaultArgs<ExtArgs>>): Prisma.Prisma__bookingsClient<runtime.Types.Result.GetResult<Prisma.$bookingsPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>;
    users_messages_recipient_idTousers<T extends Prisma.usersDefaultArgs<ExtArgs> = {}>(args?: Prisma.Subset<T, Prisma.usersDefaultArgs<ExtArgs>>): Prisma.Prisma__usersClient<runtime.Types.Result.GetResult<Prisma.$usersPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>;
    users_messages_sender_idTousers<T extends Prisma.usersDefaultArgs<ExtArgs> = {}>(args?: Prisma.Subset<T, Prisma.usersDefaultArgs<ExtArgs>>): Prisma.Prisma__usersClient<runtime.Types.Result.GetResult<Prisma.$usersPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>;
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): runtime.Types.Utils.JsPromise<TResult1 | TResult2>;
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): runtime.Types.Utils.JsPromise<T | TResult>;
    finally(onfinally?: (() => void) | undefined | null): runtime.Types.Utils.JsPromise<T>;
}
export interface messagesFieldRefs {
    readonly id: Prisma.FieldRef<"messages", 'String'>;
    readonly booking_id: Prisma.FieldRef<"messages", 'String'>;
    readonly sender_id: Prisma.FieldRef<"messages", 'String'>;
    readonly recipient_id: Prisma.FieldRef<"messages", 'String'>;
    readonly body: Prisma.FieldRef<"messages", 'String'>;
    readonly is_read: Prisma.FieldRef<"messages", 'Boolean'>;
    readonly read_at: Prisma.FieldRef<"messages", 'DateTime'>;
    readonly deleted_at: Prisma.FieldRef<"messages", 'DateTime'>;
    readonly created_at: Prisma.FieldRef<"messages", 'DateTime'>;
}
export type messagesFindUniqueArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.messagesSelect<ExtArgs> | null;
    omit?: Prisma.messagesOmit<ExtArgs> | null;
    include?: Prisma.messagesInclude<ExtArgs> | null;
    where: Prisma.messagesWhereUniqueInput;
};
export type messagesFindUniqueOrThrowArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.messagesSelect<ExtArgs> | null;
    omit?: Prisma.messagesOmit<ExtArgs> | null;
    include?: Prisma.messagesInclude<ExtArgs> | null;
    where: Prisma.messagesWhereUniqueInput;
};
export type messagesFindFirstArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.messagesSelect<ExtArgs> | null;
    omit?: Prisma.messagesOmit<ExtArgs> | null;
    include?: Prisma.messagesInclude<ExtArgs> | null;
    where?: Prisma.messagesWhereInput;
    orderBy?: Prisma.messagesOrderByWithRelationInput | Prisma.messagesOrderByWithRelationInput[];
    cursor?: Prisma.messagesWhereUniqueInput;
    take?: number;
    skip?: number;
    distinct?: Prisma.MessagesScalarFieldEnum | Prisma.MessagesScalarFieldEnum[];
};
export type messagesFindFirstOrThrowArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.messagesSelect<ExtArgs> | null;
    omit?: Prisma.messagesOmit<ExtArgs> | null;
    include?: Prisma.messagesInclude<ExtArgs> | null;
    where?: Prisma.messagesWhereInput;
    orderBy?: Prisma.messagesOrderByWithRelationInput | Prisma.messagesOrderByWithRelationInput[];
    cursor?: Prisma.messagesWhereUniqueInput;
    take?: number;
    skip?: number;
    distinct?: Prisma.MessagesScalarFieldEnum | Prisma.MessagesScalarFieldEnum[];
};
export type messagesFindManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.messagesSelect<ExtArgs> | null;
    omit?: Prisma.messagesOmit<ExtArgs> | null;
    include?: Prisma.messagesInclude<ExtArgs> | null;
    where?: Prisma.messagesWhereInput;
    orderBy?: Prisma.messagesOrderByWithRelationInput | Prisma.messagesOrderByWithRelationInput[];
    cursor?: Prisma.messagesWhereUniqueInput;
    take?: number;
    skip?: number;
    distinct?: Prisma.MessagesScalarFieldEnum | Prisma.MessagesScalarFieldEnum[];
};
export type messagesCreateArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.messagesSelect<ExtArgs> | null;
    omit?: Prisma.messagesOmit<ExtArgs> | null;
    include?: Prisma.messagesInclude<ExtArgs> | null;
    data: Prisma.XOR<Prisma.messagesCreateInput, Prisma.messagesUncheckedCreateInput>;
};
export type messagesCreateManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    data: Prisma.messagesCreateManyInput | Prisma.messagesCreateManyInput[];
    skipDuplicates?: boolean;
};
export type messagesCreateManyAndReturnArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.messagesSelectCreateManyAndReturn<ExtArgs> | null;
    omit?: Prisma.messagesOmit<ExtArgs> | null;
    data: Prisma.messagesCreateManyInput | Prisma.messagesCreateManyInput[];
    skipDuplicates?: boolean;
    include?: Prisma.messagesIncludeCreateManyAndReturn<ExtArgs> | null;
};
export type messagesUpdateArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.messagesSelect<ExtArgs> | null;
    omit?: Prisma.messagesOmit<ExtArgs> | null;
    include?: Prisma.messagesInclude<ExtArgs> | null;
    data: Prisma.XOR<Prisma.messagesUpdateInput, Prisma.messagesUncheckedUpdateInput>;
    where: Prisma.messagesWhereUniqueInput;
};
export type messagesUpdateManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    data: Prisma.XOR<Prisma.messagesUpdateManyMutationInput, Prisma.messagesUncheckedUpdateManyInput>;
    where?: Prisma.messagesWhereInput;
    limit?: number;
};
export type messagesUpdateManyAndReturnArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.messagesSelectUpdateManyAndReturn<ExtArgs> | null;
    omit?: Prisma.messagesOmit<ExtArgs> | null;
    data: Prisma.XOR<Prisma.messagesUpdateManyMutationInput, Prisma.messagesUncheckedUpdateManyInput>;
    where?: Prisma.messagesWhereInput;
    limit?: number;
    include?: Prisma.messagesIncludeUpdateManyAndReturn<ExtArgs> | null;
};
export type messagesUpsertArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.messagesSelect<ExtArgs> | null;
    omit?: Prisma.messagesOmit<ExtArgs> | null;
    include?: Prisma.messagesInclude<ExtArgs> | null;
    where: Prisma.messagesWhereUniqueInput;
    create: Prisma.XOR<Prisma.messagesCreateInput, Prisma.messagesUncheckedCreateInput>;
    update: Prisma.XOR<Prisma.messagesUpdateInput, Prisma.messagesUncheckedUpdateInput>;
};
export type messagesDeleteArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.messagesSelect<ExtArgs> | null;
    omit?: Prisma.messagesOmit<ExtArgs> | null;
    include?: Prisma.messagesInclude<ExtArgs> | null;
    where: Prisma.messagesWhereUniqueInput;
};
export type messagesDeleteManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    where?: Prisma.messagesWhereInput;
    limit?: number;
};
export type messagesDefaultArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.messagesSelect<ExtArgs> | null;
    omit?: Prisma.messagesOmit<ExtArgs> | null;
    include?: Prisma.messagesInclude<ExtArgs> | null;
};
