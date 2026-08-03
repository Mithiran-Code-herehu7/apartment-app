import type * as runtime from "@prisma/client/runtime/client";
import * as $Enums from "./enums.js";
import type * as Prisma from "./internal/prismaNamespace.js";
export type UuidFilter<$PrismaModel = never> = {
    equals?: string | Prisma.StringFieldRefInput<$PrismaModel>;
    in?: string[] | Prisma.ListStringFieldRefInput<$PrismaModel>;
    notIn?: string[] | Prisma.ListStringFieldRefInput<$PrismaModel>;
    lt?: string | Prisma.StringFieldRefInput<$PrismaModel>;
    lte?: string | Prisma.StringFieldRefInput<$PrismaModel>;
    gt?: string | Prisma.StringFieldRefInput<$PrismaModel>;
    gte?: string | Prisma.StringFieldRefInput<$PrismaModel>;
    mode?: Prisma.QueryMode;
    not?: Prisma.NestedUuidFilter<$PrismaModel> | string;
};
export type Enumadmin_action_typeFilter<$PrismaModel = never> = {
    equals?: $Enums.admin_action_type | Prisma.Enumadmin_action_typeFieldRefInput<$PrismaModel>;
    in?: $Enums.admin_action_type[] | Prisma.ListEnumadmin_action_typeFieldRefInput<$PrismaModel>;
    notIn?: $Enums.admin_action_type[] | Prisma.ListEnumadmin_action_typeFieldRefInput<$PrismaModel>;
    not?: Prisma.NestedEnumadmin_action_typeFilter<$PrismaModel> | $Enums.admin_action_type;
};
export type StringFilter<$PrismaModel = never> = {
    equals?: string | Prisma.StringFieldRefInput<$PrismaModel>;
    in?: string[] | Prisma.ListStringFieldRefInput<$PrismaModel>;
    notIn?: string[] | Prisma.ListStringFieldRefInput<$PrismaModel>;
    lt?: string | Prisma.StringFieldRefInput<$PrismaModel>;
    lte?: string | Prisma.StringFieldRefInput<$PrismaModel>;
    gt?: string | Prisma.StringFieldRefInput<$PrismaModel>;
    gte?: string | Prisma.StringFieldRefInput<$PrismaModel>;
    contains?: string | Prisma.StringFieldRefInput<$PrismaModel>;
    startsWith?: string | Prisma.StringFieldRefInput<$PrismaModel>;
    endsWith?: string | Prisma.StringFieldRefInput<$PrismaModel>;
    mode?: Prisma.QueryMode;
    not?: Prisma.NestedStringFilter<$PrismaModel> | string;
};
export type StringNullableFilter<$PrismaModel = never> = {
    equals?: string | Prisma.StringFieldRefInput<$PrismaModel> | null;
    in?: string[] | Prisma.ListStringFieldRefInput<$PrismaModel> | null;
    notIn?: string[] | Prisma.ListStringFieldRefInput<$PrismaModel> | null;
    lt?: string | Prisma.StringFieldRefInput<$PrismaModel>;
    lte?: string | Prisma.StringFieldRefInput<$PrismaModel>;
    gt?: string | Prisma.StringFieldRefInput<$PrismaModel>;
    gte?: string | Prisma.StringFieldRefInput<$PrismaModel>;
    contains?: string | Prisma.StringFieldRefInput<$PrismaModel>;
    startsWith?: string | Prisma.StringFieldRefInput<$PrismaModel>;
    endsWith?: string | Prisma.StringFieldRefInput<$PrismaModel>;
    mode?: Prisma.QueryMode;
    not?: Prisma.NestedStringNullableFilter<$PrismaModel> | string | null;
};
export type JsonNullableFilter<$PrismaModel = never> = Prisma.PatchUndefined<Prisma.Either<Required<JsonNullableFilterBase<$PrismaModel>>, Exclude<keyof Required<JsonNullableFilterBase<$PrismaModel>>, 'path'>>, Required<JsonNullableFilterBase<$PrismaModel>>> | Prisma.OptionalFlat<Omit<Required<JsonNullableFilterBase<$PrismaModel>>, 'path'>>;
export type JsonNullableFilterBase<$PrismaModel = never> = {
    equals?: runtime.InputJsonValue | Prisma.JsonFieldRefInput<$PrismaModel> | Prisma.JsonNullValueFilter;
    path?: string[];
    mode?: Prisma.QueryMode | Prisma.EnumQueryModeFieldRefInput<$PrismaModel>;
    string_contains?: string | Prisma.StringFieldRefInput<$PrismaModel>;
    string_starts_with?: string | Prisma.StringFieldRefInput<$PrismaModel>;
    string_ends_with?: string | Prisma.StringFieldRefInput<$PrismaModel>;
    array_starts_with?: runtime.InputJsonValue | Prisma.JsonFieldRefInput<$PrismaModel> | null;
    array_ends_with?: runtime.InputJsonValue | Prisma.JsonFieldRefInput<$PrismaModel> | null;
    array_contains?: runtime.InputJsonValue | Prisma.JsonFieldRefInput<$PrismaModel> | null;
    lt?: runtime.InputJsonValue | Prisma.JsonFieldRefInput<$PrismaModel>;
    lte?: runtime.InputJsonValue | Prisma.JsonFieldRefInput<$PrismaModel>;
    gt?: runtime.InputJsonValue | Prisma.JsonFieldRefInput<$PrismaModel>;
    gte?: runtime.InputJsonValue | Prisma.JsonFieldRefInput<$PrismaModel>;
    not?: runtime.InputJsonValue | Prisma.JsonFieldRefInput<$PrismaModel> | Prisma.JsonNullValueFilter;
};
export type UuidNullableFilter<$PrismaModel = never> = {
    equals?: string | Prisma.StringFieldRefInput<$PrismaModel> | null;
    in?: string[] | Prisma.ListStringFieldRefInput<$PrismaModel> | null;
    notIn?: string[] | Prisma.ListStringFieldRefInput<$PrismaModel> | null;
    lt?: string | Prisma.StringFieldRefInput<$PrismaModel>;
    lte?: string | Prisma.StringFieldRefInput<$PrismaModel>;
    gt?: string | Prisma.StringFieldRefInput<$PrismaModel>;
    gte?: string | Prisma.StringFieldRefInput<$PrismaModel>;
    mode?: Prisma.QueryMode;
    not?: Prisma.NestedUuidNullableFilter<$PrismaModel> | string | null;
};
export type DateTimeFilter<$PrismaModel = never> = {
    equals?: Date | string | Prisma.DateTimeFieldRefInput<$PrismaModel>;
    in?: Date[] | string[] | Prisma.ListDateTimeFieldRefInput<$PrismaModel>;
    notIn?: Date[] | string[] | Prisma.ListDateTimeFieldRefInput<$PrismaModel>;
    lt?: Date | string | Prisma.DateTimeFieldRefInput<$PrismaModel>;
    lte?: Date | string | Prisma.DateTimeFieldRefInput<$PrismaModel>;
    gt?: Date | string | Prisma.DateTimeFieldRefInput<$PrismaModel>;
    gte?: Date | string | Prisma.DateTimeFieldRefInput<$PrismaModel>;
    not?: Prisma.NestedDateTimeFilter<$PrismaModel> | Date | string;
};
export type SortOrderInput = {
    sort: Prisma.SortOrder;
    nulls?: Prisma.NullsOrder;
};
export type UuidWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | Prisma.StringFieldRefInput<$PrismaModel>;
    in?: string[] | Prisma.ListStringFieldRefInput<$PrismaModel>;
    notIn?: string[] | Prisma.ListStringFieldRefInput<$PrismaModel>;
    lt?: string | Prisma.StringFieldRefInput<$PrismaModel>;
    lte?: string | Prisma.StringFieldRefInput<$PrismaModel>;
    gt?: string | Prisma.StringFieldRefInput<$PrismaModel>;
    gte?: string | Prisma.StringFieldRefInput<$PrismaModel>;
    mode?: Prisma.QueryMode;
    not?: Prisma.NestedUuidWithAggregatesFilter<$PrismaModel> | string;
    _count?: Prisma.NestedIntFilter<$PrismaModel>;
    _min?: Prisma.NestedStringFilter<$PrismaModel>;
    _max?: Prisma.NestedStringFilter<$PrismaModel>;
};
export type Enumadmin_action_typeWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.admin_action_type | Prisma.Enumadmin_action_typeFieldRefInput<$PrismaModel>;
    in?: $Enums.admin_action_type[] | Prisma.ListEnumadmin_action_typeFieldRefInput<$PrismaModel>;
    notIn?: $Enums.admin_action_type[] | Prisma.ListEnumadmin_action_typeFieldRefInput<$PrismaModel>;
    not?: Prisma.NestedEnumadmin_action_typeWithAggregatesFilter<$PrismaModel> | $Enums.admin_action_type;
    _count?: Prisma.NestedIntFilter<$PrismaModel>;
    _min?: Prisma.NestedEnumadmin_action_typeFilter<$PrismaModel>;
    _max?: Prisma.NestedEnumadmin_action_typeFilter<$PrismaModel>;
};
export type StringWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | Prisma.StringFieldRefInput<$PrismaModel>;
    in?: string[] | Prisma.ListStringFieldRefInput<$PrismaModel>;
    notIn?: string[] | Prisma.ListStringFieldRefInput<$PrismaModel>;
    lt?: string | Prisma.StringFieldRefInput<$PrismaModel>;
    lte?: string | Prisma.StringFieldRefInput<$PrismaModel>;
    gt?: string | Prisma.StringFieldRefInput<$PrismaModel>;
    gte?: string | Prisma.StringFieldRefInput<$PrismaModel>;
    contains?: string | Prisma.StringFieldRefInput<$PrismaModel>;
    startsWith?: string | Prisma.StringFieldRefInput<$PrismaModel>;
    endsWith?: string | Prisma.StringFieldRefInput<$PrismaModel>;
    mode?: Prisma.QueryMode;
    not?: Prisma.NestedStringWithAggregatesFilter<$PrismaModel> | string;
    _count?: Prisma.NestedIntFilter<$PrismaModel>;
    _min?: Prisma.NestedStringFilter<$PrismaModel>;
    _max?: Prisma.NestedStringFilter<$PrismaModel>;
};
export type StringNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | Prisma.StringFieldRefInput<$PrismaModel> | null;
    in?: string[] | Prisma.ListStringFieldRefInput<$PrismaModel> | null;
    notIn?: string[] | Prisma.ListStringFieldRefInput<$PrismaModel> | null;
    lt?: string | Prisma.StringFieldRefInput<$PrismaModel>;
    lte?: string | Prisma.StringFieldRefInput<$PrismaModel>;
    gt?: string | Prisma.StringFieldRefInput<$PrismaModel>;
    gte?: string | Prisma.StringFieldRefInput<$PrismaModel>;
    contains?: string | Prisma.StringFieldRefInput<$PrismaModel>;
    startsWith?: string | Prisma.StringFieldRefInput<$PrismaModel>;
    endsWith?: string | Prisma.StringFieldRefInput<$PrismaModel>;
    mode?: Prisma.QueryMode;
    not?: Prisma.NestedStringNullableWithAggregatesFilter<$PrismaModel> | string | null;
    _count?: Prisma.NestedIntNullableFilter<$PrismaModel>;
    _min?: Prisma.NestedStringNullableFilter<$PrismaModel>;
    _max?: Prisma.NestedStringNullableFilter<$PrismaModel>;
};
export type JsonNullableWithAggregatesFilter<$PrismaModel = never> = Prisma.PatchUndefined<Prisma.Either<Required<JsonNullableWithAggregatesFilterBase<$PrismaModel>>, Exclude<keyof Required<JsonNullableWithAggregatesFilterBase<$PrismaModel>>, 'path'>>, Required<JsonNullableWithAggregatesFilterBase<$PrismaModel>>> | Prisma.OptionalFlat<Omit<Required<JsonNullableWithAggregatesFilterBase<$PrismaModel>>, 'path'>>;
export type JsonNullableWithAggregatesFilterBase<$PrismaModel = never> = {
    equals?: runtime.InputJsonValue | Prisma.JsonFieldRefInput<$PrismaModel> | Prisma.JsonNullValueFilter;
    path?: string[];
    mode?: Prisma.QueryMode | Prisma.EnumQueryModeFieldRefInput<$PrismaModel>;
    string_contains?: string | Prisma.StringFieldRefInput<$PrismaModel>;
    string_starts_with?: string | Prisma.StringFieldRefInput<$PrismaModel>;
    string_ends_with?: string | Prisma.StringFieldRefInput<$PrismaModel>;
    array_starts_with?: runtime.InputJsonValue | Prisma.JsonFieldRefInput<$PrismaModel> | null;
    array_ends_with?: runtime.InputJsonValue | Prisma.JsonFieldRefInput<$PrismaModel> | null;
    array_contains?: runtime.InputJsonValue | Prisma.JsonFieldRefInput<$PrismaModel> | null;
    lt?: runtime.InputJsonValue | Prisma.JsonFieldRefInput<$PrismaModel>;
    lte?: runtime.InputJsonValue | Prisma.JsonFieldRefInput<$PrismaModel>;
    gt?: runtime.InputJsonValue | Prisma.JsonFieldRefInput<$PrismaModel>;
    gte?: runtime.InputJsonValue | Prisma.JsonFieldRefInput<$PrismaModel>;
    not?: runtime.InputJsonValue | Prisma.JsonFieldRefInput<$PrismaModel> | Prisma.JsonNullValueFilter;
    _count?: Prisma.NestedIntNullableFilter<$PrismaModel>;
    _min?: Prisma.NestedJsonNullableFilter<$PrismaModel>;
    _max?: Prisma.NestedJsonNullableFilter<$PrismaModel>;
};
export type UuidNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | Prisma.StringFieldRefInput<$PrismaModel> | null;
    in?: string[] | Prisma.ListStringFieldRefInput<$PrismaModel> | null;
    notIn?: string[] | Prisma.ListStringFieldRefInput<$PrismaModel> | null;
    lt?: string | Prisma.StringFieldRefInput<$PrismaModel>;
    lte?: string | Prisma.StringFieldRefInput<$PrismaModel>;
    gt?: string | Prisma.StringFieldRefInput<$PrismaModel>;
    gte?: string | Prisma.StringFieldRefInput<$PrismaModel>;
    mode?: Prisma.QueryMode;
    not?: Prisma.NestedUuidNullableWithAggregatesFilter<$PrismaModel> | string | null;
    _count?: Prisma.NestedIntNullableFilter<$PrismaModel>;
    _min?: Prisma.NestedStringNullableFilter<$PrismaModel>;
    _max?: Prisma.NestedStringNullableFilter<$PrismaModel>;
};
export type DateTimeWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Date | string | Prisma.DateTimeFieldRefInput<$PrismaModel>;
    in?: Date[] | string[] | Prisma.ListDateTimeFieldRefInput<$PrismaModel>;
    notIn?: Date[] | string[] | Prisma.ListDateTimeFieldRefInput<$PrismaModel>;
    lt?: Date | string | Prisma.DateTimeFieldRefInput<$PrismaModel>;
    lte?: Date | string | Prisma.DateTimeFieldRefInput<$PrismaModel>;
    gt?: Date | string | Prisma.DateTimeFieldRefInput<$PrismaModel>;
    gte?: Date | string | Prisma.DateTimeFieldRefInput<$PrismaModel>;
    not?: Prisma.NestedDateTimeWithAggregatesFilter<$PrismaModel> | Date | string;
    _count?: Prisma.NestedIntFilter<$PrismaModel>;
    _min?: Prisma.NestedDateTimeFilter<$PrismaModel>;
    _max?: Prisma.NestedDateTimeFilter<$PrismaModel>;
};
export type Enuminvite_statusFilter<$PrismaModel = never> = {
    equals?: $Enums.invite_status | Prisma.Enuminvite_statusFieldRefInput<$PrismaModel>;
    in?: $Enums.invite_status[] | Prisma.ListEnuminvite_statusFieldRefInput<$PrismaModel>;
    notIn?: $Enums.invite_status[] | Prisma.ListEnuminvite_statusFieldRefInput<$PrismaModel>;
    not?: Prisma.NestedEnuminvite_statusFilter<$PrismaModel> | $Enums.invite_status;
};
export type Enuminvite_statusWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.invite_status | Prisma.Enuminvite_statusFieldRefInput<$PrismaModel>;
    in?: $Enums.invite_status[] | Prisma.ListEnuminvite_statusFieldRefInput<$PrismaModel>;
    notIn?: $Enums.invite_status[] | Prisma.ListEnuminvite_statusFieldRefInput<$PrismaModel>;
    not?: Prisma.NestedEnuminvite_statusWithAggregatesFilter<$PrismaModel> | $Enums.invite_status;
    _count?: Prisma.NestedIntFilter<$PrismaModel>;
    _min?: Prisma.NestedEnuminvite_statusFilter<$PrismaModel>;
    _max?: Prisma.NestedEnuminvite_statusFilter<$PrismaModel>;
};
export type IntNullableFilter<$PrismaModel = never> = {
    equals?: number | Prisma.IntFieldRefInput<$PrismaModel> | null;
    in?: number[] | Prisma.ListIntFieldRefInput<$PrismaModel> | null;
    notIn?: number[] | Prisma.ListIntFieldRefInput<$PrismaModel> | null;
    lt?: number | Prisma.IntFieldRefInput<$PrismaModel>;
    lte?: number | Prisma.IntFieldRefInput<$PrismaModel>;
    gt?: number | Prisma.IntFieldRefInput<$PrismaModel>;
    gte?: number | Prisma.IntFieldRefInput<$PrismaModel>;
    not?: Prisma.NestedIntNullableFilter<$PrismaModel> | number | null;
};
export type BoolFilter<$PrismaModel = never> = {
    equals?: boolean | Prisma.BooleanFieldRefInput<$PrismaModel>;
    not?: Prisma.NestedBoolFilter<$PrismaModel> | boolean;
};
export type IntNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | Prisma.IntFieldRefInput<$PrismaModel> | null;
    in?: number[] | Prisma.ListIntFieldRefInput<$PrismaModel> | null;
    notIn?: number[] | Prisma.ListIntFieldRefInput<$PrismaModel> | null;
    lt?: number | Prisma.IntFieldRefInput<$PrismaModel>;
    lte?: number | Prisma.IntFieldRefInput<$PrismaModel>;
    gt?: number | Prisma.IntFieldRefInput<$PrismaModel>;
    gte?: number | Prisma.IntFieldRefInput<$PrismaModel>;
    not?: Prisma.NestedIntNullableWithAggregatesFilter<$PrismaModel> | number | null;
    _count?: Prisma.NestedIntNullableFilter<$PrismaModel>;
    _avg?: Prisma.NestedFloatNullableFilter<$PrismaModel>;
    _sum?: Prisma.NestedIntNullableFilter<$PrismaModel>;
    _min?: Prisma.NestedIntNullableFilter<$PrismaModel>;
    _max?: Prisma.NestedIntNullableFilter<$PrismaModel>;
};
export type BoolWithAggregatesFilter<$PrismaModel = never> = {
    equals?: boolean | Prisma.BooleanFieldRefInput<$PrismaModel>;
    not?: Prisma.NestedBoolWithAggregatesFilter<$PrismaModel> | boolean;
    _count?: Prisma.NestedIntFilter<$PrismaModel>;
    _min?: Prisma.NestedBoolFilter<$PrismaModel>;
    _max?: Prisma.NestedBoolFilter<$PrismaModel>;
};
export type Enumslot_typeFilter<$PrismaModel = never> = {
    equals?: $Enums.slot_type | Prisma.Enumslot_typeFieldRefInput<$PrismaModel>;
    in?: $Enums.slot_type[] | Prisma.ListEnumslot_typeFieldRefInput<$PrismaModel>;
    notIn?: $Enums.slot_type[] | Prisma.ListEnumslot_typeFieldRefInput<$PrismaModel>;
    not?: Prisma.NestedEnumslot_typeFilter<$PrismaModel> | $Enums.slot_type;
};
export type DateTimeNullableFilter<$PrismaModel = never> = {
    equals?: Date | string | Prisma.DateTimeFieldRefInput<$PrismaModel> | null;
    in?: Date[] | string[] | Prisma.ListDateTimeFieldRefInput<$PrismaModel> | null;
    notIn?: Date[] | string[] | Prisma.ListDateTimeFieldRefInput<$PrismaModel> | null;
    lt?: Date | string | Prisma.DateTimeFieldRefInput<$PrismaModel>;
    lte?: Date | string | Prisma.DateTimeFieldRefInput<$PrismaModel>;
    gt?: Date | string | Prisma.DateTimeFieldRefInput<$PrismaModel>;
    gte?: Date | string | Prisma.DateTimeFieldRefInput<$PrismaModel>;
    not?: Prisma.NestedDateTimeNullableFilter<$PrismaModel> | Date | string | null;
};
export type Enumday_of_weekNullableFilter<$PrismaModel = never> = {
    equals?: $Enums.day_of_week | Prisma.Enumday_of_weekFieldRefInput<$PrismaModel> | null;
    in?: $Enums.day_of_week[] | Prisma.ListEnumday_of_weekFieldRefInput<$PrismaModel> | null;
    notIn?: $Enums.day_of_week[] | Prisma.ListEnumday_of_weekFieldRefInput<$PrismaModel> | null;
    not?: Prisma.NestedEnumday_of_weekNullableFilter<$PrismaModel> | $Enums.day_of_week | null;
};
export type IntFilter<$PrismaModel = never> = {
    equals?: number | Prisma.IntFieldRefInput<$PrismaModel>;
    in?: number[] | Prisma.ListIntFieldRefInput<$PrismaModel>;
    notIn?: number[] | Prisma.ListIntFieldRefInput<$PrismaModel>;
    lt?: number | Prisma.IntFieldRefInput<$PrismaModel>;
    lte?: number | Prisma.IntFieldRefInput<$PrismaModel>;
    gt?: number | Prisma.IntFieldRefInput<$PrismaModel>;
    gte?: number | Prisma.IntFieldRefInput<$PrismaModel>;
    not?: Prisma.NestedIntFilter<$PrismaModel> | number;
};
export type Enumslot_typeWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.slot_type | Prisma.Enumslot_typeFieldRefInput<$PrismaModel>;
    in?: $Enums.slot_type[] | Prisma.ListEnumslot_typeFieldRefInput<$PrismaModel>;
    notIn?: $Enums.slot_type[] | Prisma.ListEnumslot_typeFieldRefInput<$PrismaModel>;
    not?: Prisma.NestedEnumslot_typeWithAggregatesFilter<$PrismaModel> | $Enums.slot_type;
    _count?: Prisma.NestedIntFilter<$PrismaModel>;
    _min?: Prisma.NestedEnumslot_typeFilter<$PrismaModel>;
    _max?: Prisma.NestedEnumslot_typeFilter<$PrismaModel>;
};
export type DateTimeNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Date | string | Prisma.DateTimeFieldRefInput<$PrismaModel> | null;
    in?: Date[] | string[] | Prisma.ListDateTimeFieldRefInput<$PrismaModel> | null;
    notIn?: Date[] | string[] | Prisma.ListDateTimeFieldRefInput<$PrismaModel> | null;
    lt?: Date | string | Prisma.DateTimeFieldRefInput<$PrismaModel>;
    lte?: Date | string | Prisma.DateTimeFieldRefInput<$PrismaModel>;
    gt?: Date | string | Prisma.DateTimeFieldRefInput<$PrismaModel>;
    gte?: Date | string | Prisma.DateTimeFieldRefInput<$PrismaModel>;
    not?: Prisma.NestedDateTimeNullableWithAggregatesFilter<$PrismaModel> | Date | string | null;
    _count?: Prisma.NestedIntNullableFilter<$PrismaModel>;
    _min?: Prisma.NestedDateTimeNullableFilter<$PrismaModel>;
    _max?: Prisma.NestedDateTimeNullableFilter<$PrismaModel>;
};
export type Enumday_of_weekNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.day_of_week | Prisma.Enumday_of_weekFieldRefInput<$PrismaModel> | null;
    in?: $Enums.day_of_week[] | Prisma.ListEnumday_of_weekFieldRefInput<$PrismaModel> | null;
    notIn?: $Enums.day_of_week[] | Prisma.ListEnumday_of_weekFieldRefInput<$PrismaModel> | null;
    not?: Prisma.NestedEnumday_of_weekNullableWithAggregatesFilter<$PrismaModel> | $Enums.day_of_week | null;
    _count?: Prisma.NestedIntNullableFilter<$PrismaModel>;
    _min?: Prisma.NestedEnumday_of_weekNullableFilter<$PrismaModel>;
    _max?: Prisma.NestedEnumday_of_weekNullableFilter<$PrismaModel>;
};
export type IntWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | Prisma.IntFieldRefInput<$PrismaModel>;
    in?: number[] | Prisma.ListIntFieldRefInput<$PrismaModel>;
    notIn?: number[] | Prisma.ListIntFieldRefInput<$PrismaModel>;
    lt?: number | Prisma.IntFieldRefInput<$PrismaModel>;
    lte?: number | Prisma.IntFieldRefInput<$PrismaModel>;
    gt?: number | Prisma.IntFieldRefInput<$PrismaModel>;
    gte?: number | Prisma.IntFieldRefInput<$PrismaModel>;
    not?: Prisma.NestedIntWithAggregatesFilter<$PrismaModel> | number;
    _count?: Prisma.NestedIntFilter<$PrismaModel>;
    _avg?: Prisma.NestedFloatFilter<$PrismaModel>;
    _sum?: Prisma.NestedIntFilter<$PrismaModel>;
    _min?: Prisma.NestedIntFilter<$PrismaModel>;
    _max?: Prisma.NestedIntFilter<$PrismaModel>;
};
export type Enumbooking_statusFilter<$PrismaModel = never> = {
    equals?: $Enums.booking_status | Prisma.Enumbooking_statusFieldRefInput<$PrismaModel>;
    in?: $Enums.booking_status[] | Prisma.ListEnumbooking_statusFieldRefInput<$PrismaModel>;
    notIn?: $Enums.booking_status[] | Prisma.ListEnumbooking_statusFieldRefInput<$PrismaModel>;
    not?: Prisma.NestedEnumbooking_statusFilter<$PrismaModel> | $Enums.booking_status;
};
export type Enumcancellation_partyNullableFilter<$PrismaModel = never> = {
    equals?: $Enums.cancellation_party | Prisma.Enumcancellation_partyFieldRefInput<$PrismaModel> | null;
    in?: $Enums.cancellation_party[] | Prisma.ListEnumcancellation_partyFieldRefInput<$PrismaModel> | null;
    notIn?: $Enums.cancellation_party[] | Prisma.ListEnumcancellation_partyFieldRefInput<$PrismaModel> | null;
    not?: Prisma.NestedEnumcancellation_partyNullableFilter<$PrismaModel> | $Enums.cancellation_party | null;
};
export type Enumbooking_statusWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.booking_status | Prisma.Enumbooking_statusFieldRefInput<$PrismaModel>;
    in?: $Enums.booking_status[] | Prisma.ListEnumbooking_statusFieldRefInput<$PrismaModel>;
    notIn?: $Enums.booking_status[] | Prisma.ListEnumbooking_statusFieldRefInput<$PrismaModel>;
    not?: Prisma.NestedEnumbooking_statusWithAggregatesFilter<$PrismaModel> | $Enums.booking_status;
    _count?: Prisma.NestedIntFilter<$PrismaModel>;
    _min?: Prisma.NestedEnumbooking_statusFilter<$PrismaModel>;
    _max?: Prisma.NestedEnumbooking_statusFilter<$PrismaModel>;
};
export type Enumcancellation_partyNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.cancellation_party | Prisma.Enumcancellation_partyFieldRefInput<$PrismaModel> | null;
    in?: $Enums.cancellation_party[] | Prisma.ListEnumcancellation_partyFieldRefInput<$PrismaModel> | null;
    notIn?: $Enums.cancellation_party[] | Prisma.ListEnumcancellation_partyFieldRefInput<$PrismaModel> | null;
    not?: Prisma.NestedEnumcancellation_partyNullableWithAggregatesFilter<$PrismaModel> | $Enums.cancellation_party | null;
    _count?: Prisma.NestedIntNullableFilter<$PrismaModel>;
    _min?: Prisma.NestedEnumcancellation_partyNullableFilter<$PrismaModel>;
    _max?: Prisma.NestedEnumcancellation_partyNullableFilter<$PrismaModel>;
};
export type Enumdispute_statusFilter<$PrismaModel = never> = {
    equals?: $Enums.dispute_status | Prisma.Enumdispute_statusFieldRefInput<$PrismaModel>;
    in?: $Enums.dispute_status[] | Prisma.ListEnumdispute_statusFieldRefInput<$PrismaModel>;
    notIn?: $Enums.dispute_status[] | Prisma.ListEnumdispute_statusFieldRefInput<$PrismaModel>;
    not?: Prisma.NestedEnumdispute_statusFilter<$PrismaModel> | $Enums.dispute_status;
};
export type Enumdispute_resolutionNullableFilter<$PrismaModel = never> = {
    equals?: $Enums.dispute_resolution | Prisma.Enumdispute_resolutionFieldRefInput<$PrismaModel> | null;
    in?: $Enums.dispute_resolution[] | Prisma.ListEnumdispute_resolutionFieldRefInput<$PrismaModel> | null;
    notIn?: $Enums.dispute_resolution[] | Prisma.ListEnumdispute_resolutionFieldRefInput<$PrismaModel> | null;
    not?: Prisma.NestedEnumdispute_resolutionNullableFilter<$PrismaModel> | $Enums.dispute_resolution | null;
};
export type Enumdispute_statusWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.dispute_status | Prisma.Enumdispute_statusFieldRefInput<$PrismaModel>;
    in?: $Enums.dispute_status[] | Prisma.ListEnumdispute_statusFieldRefInput<$PrismaModel>;
    notIn?: $Enums.dispute_status[] | Prisma.ListEnumdispute_statusFieldRefInput<$PrismaModel>;
    not?: Prisma.NestedEnumdispute_statusWithAggregatesFilter<$PrismaModel> | $Enums.dispute_status;
    _count?: Prisma.NestedIntFilter<$PrismaModel>;
    _min?: Prisma.NestedEnumdispute_statusFilter<$PrismaModel>;
    _max?: Prisma.NestedEnumdispute_statusFilter<$PrismaModel>;
};
export type Enumdispute_resolutionNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.dispute_resolution | Prisma.Enumdispute_resolutionFieldRefInput<$PrismaModel> | null;
    in?: $Enums.dispute_resolution[] | Prisma.ListEnumdispute_resolutionFieldRefInput<$PrismaModel> | null;
    notIn?: $Enums.dispute_resolution[] | Prisma.ListEnumdispute_resolutionFieldRefInput<$PrismaModel> | null;
    not?: Prisma.NestedEnumdispute_resolutionNullableWithAggregatesFilter<$PrismaModel> | $Enums.dispute_resolution | null;
    _count?: Prisma.NestedIntNullableFilter<$PrismaModel>;
    _min?: Prisma.NestedEnumdispute_resolutionNullableFilter<$PrismaModel>;
    _max?: Prisma.NestedEnumdispute_resolutionNullableFilter<$PrismaModel>;
};
export type Enumlisting_modeFilter<$PrismaModel = never> = {
    equals?: $Enums.listing_mode | Prisma.Enumlisting_modeFieldRefInput<$PrismaModel>;
    in?: $Enums.listing_mode[] | Prisma.ListEnumlisting_modeFieldRefInput<$PrismaModel>;
    notIn?: $Enums.listing_mode[] | Prisma.ListEnumlisting_modeFieldRefInput<$PrismaModel>;
    not?: Prisma.NestedEnumlisting_modeFilter<$PrismaModel> | $Enums.listing_mode;
};
export type Enumage_groupFilter<$PrismaModel = never> = {
    equals?: $Enums.age_group | Prisma.Enumage_groupFieldRefInput<$PrismaModel>;
    in?: $Enums.age_group[] | Prisma.ListEnumage_groupFieldRefInput<$PrismaModel>;
    notIn?: $Enums.age_group[] | Prisma.ListEnumage_groupFieldRefInput<$PrismaModel>;
    not?: Prisma.NestedEnumage_groupFilter<$PrismaModel> | $Enums.age_group;
};
export type Enumlisting_statusFilter<$PrismaModel = never> = {
    equals?: $Enums.listing_status | Prisma.Enumlisting_statusFieldRefInput<$PrismaModel>;
    in?: $Enums.listing_status[] | Prisma.ListEnumlisting_statusFieldRefInput<$PrismaModel>;
    notIn?: $Enums.listing_status[] | Prisma.ListEnumlisting_statusFieldRefInput<$PrismaModel>;
    not?: Prisma.NestedEnumlisting_statusFilter<$PrismaModel> | $Enums.listing_status;
};
export type Enumlisting_modeWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.listing_mode | Prisma.Enumlisting_modeFieldRefInput<$PrismaModel>;
    in?: $Enums.listing_mode[] | Prisma.ListEnumlisting_modeFieldRefInput<$PrismaModel>;
    notIn?: $Enums.listing_mode[] | Prisma.ListEnumlisting_modeFieldRefInput<$PrismaModel>;
    not?: Prisma.NestedEnumlisting_modeWithAggregatesFilter<$PrismaModel> | $Enums.listing_mode;
    _count?: Prisma.NestedIntFilter<$PrismaModel>;
    _min?: Prisma.NestedEnumlisting_modeFilter<$PrismaModel>;
    _max?: Prisma.NestedEnumlisting_modeFilter<$PrismaModel>;
};
export type Enumage_groupWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.age_group | Prisma.Enumage_groupFieldRefInput<$PrismaModel>;
    in?: $Enums.age_group[] | Prisma.ListEnumage_groupFieldRefInput<$PrismaModel>;
    notIn?: $Enums.age_group[] | Prisma.ListEnumage_groupFieldRefInput<$PrismaModel>;
    not?: Prisma.NestedEnumage_groupWithAggregatesFilter<$PrismaModel> | $Enums.age_group;
    _count?: Prisma.NestedIntFilter<$PrismaModel>;
    _min?: Prisma.NestedEnumage_groupFilter<$PrismaModel>;
    _max?: Prisma.NestedEnumage_groupFilter<$PrismaModel>;
};
export type Enumlisting_statusWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.listing_status | Prisma.Enumlisting_statusFieldRefInput<$PrismaModel>;
    in?: $Enums.listing_status[] | Prisma.ListEnumlisting_statusFieldRefInput<$PrismaModel>;
    notIn?: $Enums.listing_status[] | Prisma.ListEnumlisting_statusFieldRefInput<$PrismaModel>;
    not?: Prisma.NestedEnumlisting_statusWithAggregatesFilter<$PrismaModel> | $Enums.listing_status;
    _count?: Prisma.NestedIntFilter<$PrismaModel>;
    _min?: Prisma.NestedEnumlisting_statusFilter<$PrismaModel>;
    _max?: Prisma.NestedEnumlisting_statusFilter<$PrismaModel>;
};
export type Enumnotification_channelFilter<$PrismaModel = never> = {
    equals?: $Enums.notification_channel | Prisma.Enumnotification_channelFieldRefInput<$PrismaModel>;
    in?: $Enums.notification_channel[] | Prisma.ListEnumnotification_channelFieldRefInput<$PrismaModel>;
    notIn?: $Enums.notification_channel[] | Prisma.ListEnumnotification_channelFieldRefInput<$PrismaModel>;
    not?: Prisma.NestedEnumnotification_channelFilter<$PrismaModel> | $Enums.notification_channel;
};
export type Enumnotification_channelWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.notification_channel | Prisma.Enumnotification_channelFieldRefInput<$PrismaModel>;
    in?: $Enums.notification_channel[] | Prisma.ListEnumnotification_channelFieldRefInput<$PrismaModel>;
    notIn?: $Enums.notification_channel[] | Prisma.ListEnumnotification_channelFieldRefInput<$PrismaModel>;
    not?: Prisma.NestedEnumnotification_channelWithAggregatesFilter<$PrismaModel> | $Enums.notification_channel;
    _count?: Prisma.NestedIntFilter<$PrismaModel>;
    _min?: Prisma.NestedEnumnotification_channelFilter<$PrismaModel>;
    _max?: Prisma.NestedEnumnotification_channelFilter<$PrismaModel>;
};
export type Enumnotification_statusFilter<$PrismaModel = never> = {
    equals?: $Enums.notification_status | Prisma.Enumnotification_statusFieldRefInput<$PrismaModel>;
    in?: $Enums.notification_status[] | Prisma.ListEnumnotification_statusFieldRefInput<$PrismaModel>;
    notIn?: $Enums.notification_status[] | Prisma.ListEnumnotification_statusFieldRefInput<$PrismaModel>;
    not?: Prisma.NestedEnumnotification_statusFilter<$PrismaModel> | $Enums.notification_status;
};
export type Enumnotification_statusWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.notification_status | Prisma.Enumnotification_statusFieldRefInput<$PrismaModel>;
    in?: $Enums.notification_status[] | Prisma.ListEnumnotification_statusFieldRefInput<$PrismaModel>;
    notIn?: $Enums.notification_status[] | Prisma.ListEnumnotification_statusFieldRefInput<$PrismaModel>;
    not?: Prisma.NestedEnumnotification_statusWithAggregatesFilter<$PrismaModel> | $Enums.notification_status;
    _count?: Prisma.NestedIntFilter<$PrismaModel>;
    _min?: Prisma.NestedEnumnotification_statusFilter<$PrismaModel>;
    _max?: Prisma.NestedEnumnotification_statusFilter<$PrismaModel>;
};
export type DecimalFilter<$PrismaModel = never> = {
    equals?: runtime.Decimal | runtime.DecimalJsLike | number | string | Prisma.DecimalFieldRefInput<$PrismaModel>;
    in?: runtime.Decimal[] | runtime.DecimalJsLike[] | number[] | string[] | Prisma.ListDecimalFieldRefInput<$PrismaModel>;
    notIn?: runtime.Decimal[] | runtime.DecimalJsLike[] | number[] | string[] | Prisma.ListDecimalFieldRefInput<$PrismaModel>;
    lt?: runtime.Decimal | runtime.DecimalJsLike | number | string | Prisma.DecimalFieldRefInput<$PrismaModel>;
    lte?: runtime.Decimal | runtime.DecimalJsLike | number | string | Prisma.DecimalFieldRefInput<$PrismaModel>;
    gt?: runtime.Decimal | runtime.DecimalJsLike | number | string | Prisma.DecimalFieldRefInput<$PrismaModel>;
    gte?: runtime.Decimal | runtime.DecimalJsLike | number | string | Prisma.DecimalFieldRefInput<$PrismaModel>;
    not?: Prisma.NestedDecimalFilter<$PrismaModel> | runtime.Decimal | runtime.DecimalJsLike | number | string;
};
export type Enumpayment_methodFilter<$PrismaModel = never> = {
    equals?: $Enums.payment_method | Prisma.Enumpayment_methodFieldRefInput<$PrismaModel>;
    in?: $Enums.payment_method[] | Prisma.ListEnumpayment_methodFieldRefInput<$PrismaModel>;
    notIn?: $Enums.payment_method[] | Prisma.ListEnumpayment_methodFieldRefInput<$PrismaModel>;
    not?: Prisma.NestedEnumpayment_methodFilter<$PrismaModel> | $Enums.payment_method;
};
export type Enumpayment_statusFilter<$PrismaModel = never> = {
    equals?: $Enums.payment_status | Prisma.Enumpayment_statusFieldRefInput<$PrismaModel>;
    in?: $Enums.payment_status[] | Prisma.ListEnumpayment_statusFieldRefInput<$PrismaModel>;
    notIn?: $Enums.payment_status[] | Prisma.ListEnumpayment_statusFieldRefInput<$PrismaModel>;
    not?: Prisma.NestedEnumpayment_statusFilter<$PrismaModel> | $Enums.payment_status;
};
export type DecimalNullableFilter<$PrismaModel = never> = {
    equals?: runtime.Decimal | runtime.DecimalJsLike | number | string | Prisma.DecimalFieldRefInput<$PrismaModel> | null;
    in?: runtime.Decimal[] | runtime.DecimalJsLike[] | number[] | string[] | Prisma.ListDecimalFieldRefInput<$PrismaModel> | null;
    notIn?: runtime.Decimal[] | runtime.DecimalJsLike[] | number[] | string[] | Prisma.ListDecimalFieldRefInput<$PrismaModel> | null;
    lt?: runtime.Decimal | runtime.DecimalJsLike | number | string | Prisma.DecimalFieldRefInput<$PrismaModel>;
    lte?: runtime.Decimal | runtime.DecimalJsLike | number | string | Prisma.DecimalFieldRefInput<$PrismaModel>;
    gt?: runtime.Decimal | runtime.DecimalJsLike | number | string | Prisma.DecimalFieldRefInput<$PrismaModel>;
    gte?: runtime.Decimal | runtime.DecimalJsLike | number | string | Prisma.DecimalFieldRefInput<$PrismaModel>;
    not?: Prisma.NestedDecimalNullableFilter<$PrismaModel> | runtime.Decimal | runtime.DecimalJsLike | number | string | null;
};
export type DecimalWithAggregatesFilter<$PrismaModel = never> = {
    equals?: runtime.Decimal | runtime.DecimalJsLike | number | string | Prisma.DecimalFieldRefInput<$PrismaModel>;
    in?: runtime.Decimal[] | runtime.DecimalJsLike[] | number[] | string[] | Prisma.ListDecimalFieldRefInput<$PrismaModel>;
    notIn?: runtime.Decimal[] | runtime.DecimalJsLike[] | number[] | string[] | Prisma.ListDecimalFieldRefInput<$PrismaModel>;
    lt?: runtime.Decimal | runtime.DecimalJsLike | number | string | Prisma.DecimalFieldRefInput<$PrismaModel>;
    lte?: runtime.Decimal | runtime.DecimalJsLike | number | string | Prisma.DecimalFieldRefInput<$PrismaModel>;
    gt?: runtime.Decimal | runtime.DecimalJsLike | number | string | Prisma.DecimalFieldRefInput<$PrismaModel>;
    gte?: runtime.Decimal | runtime.DecimalJsLike | number | string | Prisma.DecimalFieldRefInput<$PrismaModel>;
    not?: Prisma.NestedDecimalWithAggregatesFilter<$PrismaModel> | runtime.Decimal | runtime.DecimalJsLike | number | string;
    _count?: Prisma.NestedIntFilter<$PrismaModel>;
    _avg?: Prisma.NestedDecimalFilter<$PrismaModel>;
    _sum?: Prisma.NestedDecimalFilter<$PrismaModel>;
    _min?: Prisma.NestedDecimalFilter<$PrismaModel>;
    _max?: Prisma.NestedDecimalFilter<$PrismaModel>;
};
export type Enumpayment_methodWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.payment_method | Prisma.Enumpayment_methodFieldRefInput<$PrismaModel>;
    in?: $Enums.payment_method[] | Prisma.ListEnumpayment_methodFieldRefInput<$PrismaModel>;
    notIn?: $Enums.payment_method[] | Prisma.ListEnumpayment_methodFieldRefInput<$PrismaModel>;
    not?: Prisma.NestedEnumpayment_methodWithAggregatesFilter<$PrismaModel> | $Enums.payment_method;
    _count?: Prisma.NestedIntFilter<$PrismaModel>;
    _min?: Prisma.NestedEnumpayment_methodFilter<$PrismaModel>;
    _max?: Prisma.NestedEnumpayment_methodFilter<$PrismaModel>;
};
export type Enumpayment_statusWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.payment_status | Prisma.Enumpayment_statusFieldRefInput<$PrismaModel>;
    in?: $Enums.payment_status[] | Prisma.ListEnumpayment_statusFieldRefInput<$PrismaModel>;
    notIn?: $Enums.payment_status[] | Prisma.ListEnumpayment_statusFieldRefInput<$PrismaModel>;
    not?: Prisma.NestedEnumpayment_statusWithAggregatesFilter<$PrismaModel> | $Enums.payment_status;
    _count?: Prisma.NestedIntFilter<$PrismaModel>;
    _min?: Prisma.NestedEnumpayment_statusFilter<$PrismaModel>;
    _max?: Prisma.NestedEnumpayment_statusFilter<$PrismaModel>;
};
export type DecimalNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: runtime.Decimal | runtime.DecimalJsLike | number | string | Prisma.DecimalFieldRefInput<$PrismaModel> | null;
    in?: runtime.Decimal[] | runtime.DecimalJsLike[] | number[] | string[] | Prisma.ListDecimalFieldRefInput<$PrismaModel> | null;
    notIn?: runtime.Decimal[] | runtime.DecimalJsLike[] | number[] | string[] | Prisma.ListDecimalFieldRefInput<$PrismaModel> | null;
    lt?: runtime.Decimal | runtime.DecimalJsLike | number | string | Prisma.DecimalFieldRefInput<$PrismaModel>;
    lte?: runtime.Decimal | runtime.DecimalJsLike | number | string | Prisma.DecimalFieldRefInput<$PrismaModel>;
    gt?: runtime.Decimal | runtime.DecimalJsLike | number | string | Prisma.DecimalFieldRefInput<$PrismaModel>;
    gte?: runtime.Decimal | runtime.DecimalJsLike | number | string | Prisma.DecimalFieldRefInput<$PrismaModel>;
    not?: Prisma.NestedDecimalNullableWithAggregatesFilter<$PrismaModel> | runtime.Decimal | runtime.DecimalJsLike | number | string | null;
    _count?: Prisma.NestedIntNullableFilter<$PrismaModel>;
    _avg?: Prisma.NestedDecimalNullableFilter<$PrismaModel>;
    _sum?: Prisma.NestedDecimalNullableFilter<$PrismaModel>;
    _min?: Prisma.NestedDecimalNullableFilter<$PrismaModel>;
    _max?: Prisma.NestedDecimalNullableFilter<$PrismaModel>;
};
export type Enumpayout_statusFilter<$PrismaModel = never> = {
    equals?: $Enums.payout_status | Prisma.Enumpayout_statusFieldRefInput<$PrismaModel>;
    in?: $Enums.payout_status[] | Prisma.ListEnumpayout_statusFieldRefInput<$PrismaModel>;
    notIn?: $Enums.payout_status[] | Prisma.ListEnumpayout_statusFieldRefInput<$PrismaModel>;
    not?: Prisma.NestedEnumpayout_statusFilter<$PrismaModel> | $Enums.payout_status;
};
export type Enumpayout_statusWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.payout_status | Prisma.Enumpayout_statusFieldRefInput<$PrismaModel>;
    in?: $Enums.payout_status[] | Prisma.ListEnumpayout_statusFieldRefInput<$PrismaModel>;
    notIn?: $Enums.payout_status[] | Prisma.ListEnumpayout_statusFieldRefInput<$PrismaModel>;
    not?: Prisma.NestedEnumpayout_statusWithAggregatesFilter<$PrismaModel> | $Enums.payout_status;
    _count?: Prisma.NestedIntFilter<$PrismaModel>;
    _min?: Prisma.NestedEnumpayout_statusFilter<$PrismaModel>;
    _max?: Prisma.NestedEnumpayout_statusFilter<$PrismaModel>;
};
export type Enumpricing_typeFilter<$PrismaModel = never> = {
    equals?: $Enums.pricing_type | Prisma.Enumpricing_typeFieldRefInput<$PrismaModel>;
    in?: $Enums.pricing_type[] | Prisma.ListEnumpricing_typeFieldRefInput<$PrismaModel>;
    notIn?: $Enums.pricing_type[] | Prisma.ListEnumpricing_typeFieldRefInput<$PrismaModel>;
    not?: Prisma.NestedEnumpricing_typeFilter<$PrismaModel> | $Enums.pricing_type;
};
export type Enumbilling_cycleFilter<$PrismaModel = never> = {
    equals?: $Enums.billing_cycle | Prisma.Enumbilling_cycleFieldRefInput<$PrismaModel>;
    in?: $Enums.billing_cycle[] | Prisma.ListEnumbilling_cycleFieldRefInput<$PrismaModel>;
    notIn?: $Enums.billing_cycle[] | Prisma.ListEnumbilling_cycleFieldRefInput<$PrismaModel>;
    not?: Prisma.NestedEnumbilling_cycleFilter<$PrismaModel> | $Enums.billing_cycle;
};
export type Enumpricing_typeWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.pricing_type | Prisma.Enumpricing_typeFieldRefInput<$PrismaModel>;
    in?: $Enums.pricing_type[] | Prisma.ListEnumpricing_typeFieldRefInput<$PrismaModel>;
    notIn?: $Enums.pricing_type[] | Prisma.ListEnumpricing_typeFieldRefInput<$PrismaModel>;
    not?: Prisma.NestedEnumpricing_typeWithAggregatesFilter<$PrismaModel> | $Enums.pricing_type;
    _count?: Prisma.NestedIntFilter<$PrismaModel>;
    _min?: Prisma.NestedEnumpricing_typeFilter<$PrismaModel>;
    _max?: Prisma.NestedEnumpricing_typeFilter<$PrismaModel>;
};
export type Enumbilling_cycleWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.billing_cycle | Prisma.Enumbilling_cycleFieldRefInput<$PrismaModel>;
    in?: $Enums.billing_cycle[] | Prisma.ListEnumbilling_cycleFieldRefInput<$PrismaModel>;
    notIn?: $Enums.billing_cycle[] | Prisma.ListEnumbilling_cycleFieldRefInput<$PrismaModel>;
    not?: Prisma.NestedEnumbilling_cycleWithAggregatesFilter<$PrismaModel> | $Enums.billing_cycle;
    _count?: Prisma.NestedIntFilter<$PrismaModel>;
    _min?: Prisma.NestedEnumbilling_cycleFilter<$PrismaModel>;
    _max?: Prisma.NestedEnumbilling_cycleFilter<$PrismaModel>;
};
export type Enumreview_targetFilter<$PrismaModel = never> = {
    equals?: $Enums.review_target | Prisma.Enumreview_targetFieldRefInput<$PrismaModel>;
    in?: $Enums.review_target[] | Prisma.ListEnumreview_targetFieldRefInput<$PrismaModel>;
    notIn?: $Enums.review_target[] | Prisma.ListEnumreview_targetFieldRefInput<$PrismaModel>;
    not?: Prisma.NestedEnumreview_targetFilter<$PrismaModel> | $Enums.review_target;
};
export type Enumreview_targetWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.review_target | Prisma.Enumreview_targetFieldRefInput<$PrismaModel>;
    in?: $Enums.review_target[] | Prisma.ListEnumreview_targetFieldRefInput<$PrismaModel>;
    notIn?: $Enums.review_target[] | Prisma.ListEnumreview_targetFieldRefInput<$PrismaModel>;
    not?: Prisma.NestedEnumreview_targetWithAggregatesFilter<$PrismaModel> | $Enums.review_target;
    _count?: Prisma.NestedIntFilter<$PrismaModel>;
    _min?: Prisma.NestedEnumreview_targetFilter<$PrismaModel>;
    _max?: Prisma.NestedEnumreview_targetFilter<$PrismaModel>;
};
export type Enumuser_roleFilter<$PrismaModel = never> = {
    equals?: $Enums.user_role | Prisma.Enumuser_roleFieldRefInput<$PrismaModel>;
    in?: $Enums.user_role[] | Prisma.ListEnumuser_roleFieldRefInput<$PrismaModel>;
    notIn?: $Enums.user_role[] | Prisma.ListEnumuser_roleFieldRefInput<$PrismaModel>;
    not?: Prisma.NestedEnumuser_roleFilter<$PrismaModel> | $Enums.user_role;
};
export type Enumuser_roleWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.user_role | Prisma.Enumuser_roleFieldRefInput<$PrismaModel>;
    in?: $Enums.user_role[] | Prisma.ListEnumuser_roleFieldRefInput<$PrismaModel>;
    notIn?: $Enums.user_role[] | Prisma.ListEnumuser_roleFieldRefInput<$PrismaModel>;
    not?: Prisma.NestedEnumuser_roleWithAggregatesFilter<$PrismaModel> | $Enums.user_role;
    _count?: Prisma.NestedIntFilter<$PrismaModel>;
    _min?: Prisma.NestedEnumuser_roleFilter<$PrismaModel>;
    _max?: Prisma.NestedEnumuser_roleFilter<$PrismaModel>;
};
export type Enumuser_statusFilter<$PrismaModel = never> = {
    equals?: $Enums.user_status | Prisma.Enumuser_statusFieldRefInput<$PrismaModel>;
    in?: $Enums.user_status[] | Prisma.ListEnumuser_statusFieldRefInput<$PrismaModel>;
    notIn?: $Enums.user_status[] | Prisma.ListEnumuser_statusFieldRefInput<$PrismaModel>;
    not?: Prisma.NestedEnumuser_statusFilter<$PrismaModel> | $Enums.user_status;
};
export type Enumuser_statusWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.user_status | Prisma.Enumuser_statusFieldRefInput<$PrismaModel>;
    in?: $Enums.user_status[] | Prisma.ListEnumuser_statusFieldRefInput<$PrismaModel>;
    notIn?: $Enums.user_status[] | Prisma.ListEnumuser_statusFieldRefInput<$PrismaModel>;
    not?: Prisma.NestedEnumuser_statusWithAggregatesFilter<$PrismaModel> | $Enums.user_status;
    _count?: Prisma.NestedIntFilter<$PrismaModel>;
    _min?: Prisma.NestedEnumuser_statusFilter<$PrismaModel>;
    _max?: Prisma.NestedEnumuser_statusFilter<$PrismaModel>;
};
export type NestedUuidFilter<$PrismaModel = never> = {
    equals?: string | Prisma.StringFieldRefInput<$PrismaModel>;
    in?: string[] | Prisma.ListStringFieldRefInput<$PrismaModel>;
    notIn?: string[] | Prisma.ListStringFieldRefInput<$PrismaModel>;
    lt?: string | Prisma.StringFieldRefInput<$PrismaModel>;
    lte?: string | Prisma.StringFieldRefInput<$PrismaModel>;
    gt?: string | Prisma.StringFieldRefInput<$PrismaModel>;
    gte?: string | Prisma.StringFieldRefInput<$PrismaModel>;
    not?: Prisma.NestedUuidFilter<$PrismaModel> | string;
};
export type NestedEnumadmin_action_typeFilter<$PrismaModel = never> = {
    equals?: $Enums.admin_action_type | Prisma.Enumadmin_action_typeFieldRefInput<$PrismaModel>;
    in?: $Enums.admin_action_type[] | Prisma.ListEnumadmin_action_typeFieldRefInput<$PrismaModel>;
    notIn?: $Enums.admin_action_type[] | Prisma.ListEnumadmin_action_typeFieldRefInput<$PrismaModel>;
    not?: Prisma.NestedEnumadmin_action_typeFilter<$PrismaModel> | $Enums.admin_action_type;
};
export type NestedStringFilter<$PrismaModel = never> = {
    equals?: string | Prisma.StringFieldRefInput<$PrismaModel>;
    in?: string[] | Prisma.ListStringFieldRefInput<$PrismaModel>;
    notIn?: string[] | Prisma.ListStringFieldRefInput<$PrismaModel>;
    lt?: string | Prisma.StringFieldRefInput<$PrismaModel>;
    lte?: string | Prisma.StringFieldRefInput<$PrismaModel>;
    gt?: string | Prisma.StringFieldRefInput<$PrismaModel>;
    gte?: string | Prisma.StringFieldRefInput<$PrismaModel>;
    contains?: string | Prisma.StringFieldRefInput<$PrismaModel>;
    startsWith?: string | Prisma.StringFieldRefInput<$PrismaModel>;
    endsWith?: string | Prisma.StringFieldRefInput<$PrismaModel>;
    not?: Prisma.NestedStringFilter<$PrismaModel> | string;
};
export type NestedStringNullableFilter<$PrismaModel = never> = {
    equals?: string | Prisma.StringFieldRefInput<$PrismaModel> | null;
    in?: string[] | Prisma.ListStringFieldRefInput<$PrismaModel> | null;
    notIn?: string[] | Prisma.ListStringFieldRefInput<$PrismaModel> | null;
    lt?: string | Prisma.StringFieldRefInput<$PrismaModel>;
    lte?: string | Prisma.StringFieldRefInput<$PrismaModel>;
    gt?: string | Prisma.StringFieldRefInput<$PrismaModel>;
    gte?: string | Prisma.StringFieldRefInput<$PrismaModel>;
    contains?: string | Prisma.StringFieldRefInput<$PrismaModel>;
    startsWith?: string | Prisma.StringFieldRefInput<$PrismaModel>;
    endsWith?: string | Prisma.StringFieldRefInput<$PrismaModel>;
    not?: Prisma.NestedStringNullableFilter<$PrismaModel> | string | null;
};
export type NestedUuidNullableFilter<$PrismaModel = never> = {
    equals?: string | Prisma.StringFieldRefInput<$PrismaModel> | null;
    in?: string[] | Prisma.ListStringFieldRefInput<$PrismaModel> | null;
    notIn?: string[] | Prisma.ListStringFieldRefInput<$PrismaModel> | null;
    lt?: string | Prisma.StringFieldRefInput<$PrismaModel>;
    lte?: string | Prisma.StringFieldRefInput<$PrismaModel>;
    gt?: string | Prisma.StringFieldRefInput<$PrismaModel>;
    gte?: string | Prisma.StringFieldRefInput<$PrismaModel>;
    not?: Prisma.NestedUuidNullableFilter<$PrismaModel> | string | null;
};
export type NestedDateTimeFilter<$PrismaModel = never> = {
    equals?: Date | string | Prisma.DateTimeFieldRefInput<$PrismaModel>;
    in?: Date[] | string[] | Prisma.ListDateTimeFieldRefInput<$PrismaModel>;
    notIn?: Date[] | string[] | Prisma.ListDateTimeFieldRefInput<$PrismaModel>;
    lt?: Date | string | Prisma.DateTimeFieldRefInput<$PrismaModel>;
    lte?: Date | string | Prisma.DateTimeFieldRefInput<$PrismaModel>;
    gt?: Date | string | Prisma.DateTimeFieldRefInput<$PrismaModel>;
    gte?: Date | string | Prisma.DateTimeFieldRefInput<$PrismaModel>;
    not?: Prisma.NestedDateTimeFilter<$PrismaModel> | Date | string;
};
export type NestedUuidWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | Prisma.StringFieldRefInput<$PrismaModel>;
    in?: string[] | Prisma.ListStringFieldRefInput<$PrismaModel>;
    notIn?: string[] | Prisma.ListStringFieldRefInput<$PrismaModel>;
    lt?: string | Prisma.StringFieldRefInput<$PrismaModel>;
    lte?: string | Prisma.StringFieldRefInput<$PrismaModel>;
    gt?: string | Prisma.StringFieldRefInput<$PrismaModel>;
    gte?: string | Prisma.StringFieldRefInput<$PrismaModel>;
    not?: Prisma.NestedUuidWithAggregatesFilter<$PrismaModel> | string;
    _count?: Prisma.NestedIntFilter<$PrismaModel>;
    _min?: Prisma.NestedStringFilter<$PrismaModel>;
    _max?: Prisma.NestedStringFilter<$PrismaModel>;
};
export type NestedIntFilter<$PrismaModel = never> = {
    equals?: number | Prisma.IntFieldRefInput<$PrismaModel>;
    in?: number[] | Prisma.ListIntFieldRefInput<$PrismaModel>;
    notIn?: number[] | Prisma.ListIntFieldRefInput<$PrismaModel>;
    lt?: number | Prisma.IntFieldRefInput<$PrismaModel>;
    lte?: number | Prisma.IntFieldRefInput<$PrismaModel>;
    gt?: number | Prisma.IntFieldRefInput<$PrismaModel>;
    gte?: number | Prisma.IntFieldRefInput<$PrismaModel>;
    not?: Prisma.NestedIntFilter<$PrismaModel> | number;
};
export type NestedEnumadmin_action_typeWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.admin_action_type | Prisma.Enumadmin_action_typeFieldRefInput<$PrismaModel>;
    in?: $Enums.admin_action_type[] | Prisma.ListEnumadmin_action_typeFieldRefInput<$PrismaModel>;
    notIn?: $Enums.admin_action_type[] | Prisma.ListEnumadmin_action_typeFieldRefInput<$PrismaModel>;
    not?: Prisma.NestedEnumadmin_action_typeWithAggregatesFilter<$PrismaModel> | $Enums.admin_action_type;
    _count?: Prisma.NestedIntFilter<$PrismaModel>;
    _min?: Prisma.NestedEnumadmin_action_typeFilter<$PrismaModel>;
    _max?: Prisma.NestedEnumadmin_action_typeFilter<$PrismaModel>;
};
export type NestedStringWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | Prisma.StringFieldRefInput<$PrismaModel>;
    in?: string[] | Prisma.ListStringFieldRefInput<$PrismaModel>;
    notIn?: string[] | Prisma.ListStringFieldRefInput<$PrismaModel>;
    lt?: string | Prisma.StringFieldRefInput<$PrismaModel>;
    lte?: string | Prisma.StringFieldRefInput<$PrismaModel>;
    gt?: string | Prisma.StringFieldRefInput<$PrismaModel>;
    gte?: string | Prisma.StringFieldRefInput<$PrismaModel>;
    contains?: string | Prisma.StringFieldRefInput<$PrismaModel>;
    startsWith?: string | Prisma.StringFieldRefInput<$PrismaModel>;
    endsWith?: string | Prisma.StringFieldRefInput<$PrismaModel>;
    not?: Prisma.NestedStringWithAggregatesFilter<$PrismaModel> | string;
    _count?: Prisma.NestedIntFilter<$PrismaModel>;
    _min?: Prisma.NestedStringFilter<$PrismaModel>;
    _max?: Prisma.NestedStringFilter<$PrismaModel>;
};
export type NestedStringNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | Prisma.StringFieldRefInput<$PrismaModel> | null;
    in?: string[] | Prisma.ListStringFieldRefInput<$PrismaModel> | null;
    notIn?: string[] | Prisma.ListStringFieldRefInput<$PrismaModel> | null;
    lt?: string | Prisma.StringFieldRefInput<$PrismaModel>;
    lte?: string | Prisma.StringFieldRefInput<$PrismaModel>;
    gt?: string | Prisma.StringFieldRefInput<$PrismaModel>;
    gte?: string | Prisma.StringFieldRefInput<$PrismaModel>;
    contains?: string | Prisma.StringFieldRefInput<$PrismaModel>;
    startsWith?: string | Prisma.StringFieldRefInput<$PrismaModel>;
    endsWith?: string | Prisma.StringFieldRefInput<$PrismaModel>;
    not?: Prisma.NestedStringNullableWithAggregatesFilter<$PrismaModel> | string | null;
    _count?: Prisma.NestedIntNullableFilter<$PrismaModel>;
    _min?: Prisma.NestedStringNullableFilter<$PrismaModel>;
    _max?: Prisma.NestedStringNullableFilter<$PrismaModel>;
};
export type NestedIntNullableFilter<$PrismaModel = never> = {
    equals?: number | Prisma.IntFieldRefInput<$PrismaModel> | null;
    in?: number[] | Prisma.ListIntFieldRefInput<$PrismaModel> | null;
    notIn?: number[] | Prisma.ListIntFieldRefInput<$PrismaModel> | null;
    lt?: number | Prisma.IntFieldRefInput<$PrismaModel>;
    lte?: number | Prisma.IntFieldRefInput<$PrismaModel>;
    gt?: number | Prisma.IntFieldRefInput<$PrismaModel>;
    gte?: number | Prisma.IntFieldRefInput<$PrismaModel>;
    not?: Prisma.NestedIntNullableFilter<$PrismaModel> | number | null;
};
export type NestedJsonNullableFilter<$PrismaModel = never> = Prisma.PatchUndefined<Prisma.Either<Required<NestedJsonNullableFilterBase<$PrismaModel>>, Exclude<keyof Required<NestedJsonNullableFilterBase<$PrismaModel>>, 'path'>>, Required<NestedJsonNullableFilterBase<$PrismaModel>>> | Prisma.OptionalFlat<Omit<Required<NestedJsonNullableFilterBase<$PrismaModel>>, 'path'>>;
export type NestedJsonNullableFilterBase<$PrismaModel = never> = {
    equals?: runtime.InputJsonValue | Prisma.JsonFieldRefInput<$PrismaModel> | Prisma.JsonNullValueFilter;
    path?: string[];
    mode?: Prisma.QueryMode | Prisma.EnumQueryModeFieldRefInput<$PrismaModel>;
    string_contains?: string | Prisma.StringFieldRefInput<$PrismaModel>;
    string_starts_with?: string | Prisma.StringFieldRefInput<$PrismaModel>;
    string_ends_with?: string | Prisma.StringFieldRefInput<$PrismaModel>;
    array_starts_with?: runtime.InputJsonValue | Prisma.JsonFieldRefInput<$PrismaModel> | null;
    array_ends_with?: runtime.InputJsonValue | Prisma.JsonFieldRefInput<$PrismaModel> | null;
    array_contains?: runtime.InputJsonValue | Prisma.JsonFieldRefInput<$PrismaModel> | null;
    lt?: runtime.InputJsonValue | Prisma.JsonFieldRefInput<$PrismaModel>;
    lte?: runtime.InputJsonValue | Prisma.JsonFieldRefInput<$PrismaModel>;
    gt?: runtime.InputJsonValue | Prisma.JsonFieldRefInput<$PrismaModel>;
    gte?: runtime.InputJsonValue | Prisma.JsonFieldRefInput<$PrismaModel>;
    not?: runtime.InputJsonValue | Prisma.JsonFieldRefInput<$PrismaModel> | Prisma.JsonNullValueFilter;
};
export type NestedUuidNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | Prisma.StringFieldRefInput<$PrismaModel> | null;
    in?: string[] | Prisma.ListStringFieldRefInput<$PrismaModel> | null;
    notIn?: string[] | Prisma.ListStringFieldRefInput<$PrismaModel> | null;
    lt?: string | Prisma.StringFieldRefInput<$PrismaModel>;
    lte?: string | Prisma.StringFieldRefInput<$PrismaModel>;
    gt?: string | Prisma.StringFieldRefInput<$PrismaModel>;
    gte?: string | Prisma.StringFieldRefInput<$PrismaModel>;
    not?: Prisma.NestedUuidNullableWithAggregatesFilter<$PrismaModel> | string | null;
    _count?: Prisma.NestedIntNullableFilter<$PrismaModel>;
    _min?: Prisma.NestedStringNullableFilter<$PrismaModel>;
    _max?: Prisma.NestedStringNullableFilter<$PrismaModel>;
};
export type NestedDateTimeWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Date | string | Prisma.DateTimeFieldRefInput<$PrismaModel>;
    in?: Date[] | string[] | Prisma.ListDateTimeFieldRefInput<$PrismaModel>;
    notIn?: Date[] | string[] | Prisma.ListDateTimeFieldRefInput<$PrismaModel>;
    lt?: Date | string | Prisma.DateTimeFieldRefInput<$PrismaModel>;
    lte?: Date | string | Prisma.DateTimeFieldRefInput<$PrismaModel>;
    gt?: Date | string | Prisma.DateTimeFieldRefInput<$PrismaModel>;
    gte?: Date | string | Prisma.DateTimeFieldRefInput<$PrismaModel>;
    not?: Prisma.NestedDateTimeWithAggregatesFilter<$PrismaModel> | Date | string;
    _count?: Prisma.NestedIntFilter<$PrismaModel>;
    _min?: Prisma.NestedDateTimeFilter<$PrismaModel>;
    _max?: Prisma.NestedDateTimeFilter<$PrismaModel>;
};
export type NestedEnuminvite_statusFilter<$PrismaModel = never> = {
    equals?: $Enums.invite_status | Prisma.Enuminvite_statusFieldRefInput<$PrismaModel>;
    in?: $Enums.invite_status[] | Prisma.ListEnuminvite_statusFieldRefInput<$PrismaModel>;
    notIn?: $Enums.invite_status[] | Prisma.ListEnuminvite_statusFieldRefInput<$PrismaModel>;
    not?: Prisma.NestedEnuminvite_statusFilter<$PrismaModel> | $Enums.invite_status;
};
export type NestedEnuminvite_statusWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.invite_status | Prisma.Enuminvite_statusFieldRefInput<$PrismaModel>;
    in?: $Enums.invite_status[] | Prisma.ListEnuminvite_statusFieldRefInput<$PrismaModel>;
    notIn?: $Enums.invite_status[] | Prisma.ListEnuminvite_statusFieldRefInput<$PrismaModel>;
    not?: Prisma.NestedEnuminvite_statusWithAggregatesFilter<$PrismaModel> | $Enums.invite_status;
    _count?: Prisma.NestedIntFilter<$PrismaModel>;
    _min?: Prisma.NestedEnuminvite_statusFilter<$PrismaModel>;
    _max?: Prisma.NestedEnuminvite_statusFilter<$PrismaModel>;
};
export type NestedBoolFilter<$PrismaModel = never> = {
    equals?: boolean | Prisma.BooleanFieldRefInput<$PrismaModel>;
    not?: Prisma.NestedBoolFilter<$PrismaModel> | boolean;
};
export type NestedIntNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | Prisma.IntFieldRefInput<$PrismaModel> | null;
    in?: number[] | Prisma.ListIntFieldRefInput<$PrismaModel> | null;
    notIn?: number[] | Prisma.ListIntFieldRefInput<$PrismaModel> | null;
    lt?: number | Prisma.IntFieldRefInput<$PrismaModel>;
    lte?: number | Prisma.IntFieldRefInput<$PrismaModel>;
    gt?: number | Prisma.IntFieldRefInput<$PrismaModel>;
    gte?: number | Prisma.IntFieldRefInput<$PrismaModel>;
    not?: Prisma.NestedIntNullableWithAggregatesFilter<$PrismaModel> | number | null;
    _count?: Prisma.NestedIntNullableFilter<$PrismaModel>;
    _avg?: Prisma.NestedFloatNullableFilter<$PrismaModel>;
    _sum?: Prisma.NestedIntNullableFilter<$PrismaModel>;
    _min?: Prisma.NestedIntNullableFilter<$PrismaModel>;
    _max?: Prisma.NestedIntNullableFilter<$PrismaModel>;
};
export type NestedFloatNullableFilter<$PrismaModel = never> = {
    equals?: number | Prisma.FloatFieldRefInput<$PrismaModel> | null;
    in?: number[] | Prisma.ListFloatFieldRefInput<$PrismaModel> | null;
    notIn?: number[] | Prisma.ListFloatFieldRefInput<$PrismaModel> | null;
    lt?: number | Prisma.FloatFieldRefInput<$PrismaModel>;
    lte?: number | Prisma.FloatFieldRefInput<$PrismaModel>;
    gt?: number | Prisma.FloatFieldRefInput<$PrismaModel>;
    gte?: number | Prisma.FloatFieldRefInput<$PrismaModel>;
    not?: Prisma.NestedFloatNullableFilter<$PrismaModel> | number | null;
};
export type NestedBoolWithAggregatesFilter<$PrismaModel = never> = {
    equals?: boolean | Prisma.BooleanFieldRefInput<$PrismaModel>;
    not?: Prisma.NestedBoolWithAggregatesFilter<$PrismaModel> | boolean;
    _count?: Prisma.NestedIntFilter<$PrismaModel>;
    _min?: Prisma.NestedBoolFilter<$PrismaModel>;
    _max?: Prisma.NestedBoolFilter<$PrismaModel>;
};
export type NestedEnumslot_typeFilter<$PrismaModel = never> = {
    equals?: $Enums.slot_type | Prisma.Enumslot_typeFieldRefInput<$PrismaModel>;
    in?: $Enums.slot_type[] | Prisma.ListEnumslot_typeFieldRefInput<$PrismaModel>;
    notIn?: $Enums.slot_type[] | Prisma.ListEnumslot_typeFieldRefInput<$PrismaModel>;
    not?: Prisma.NestedEnumslot_typeFilter<$PrismaModel> | $Enums.slot_type;
};
export type NestedDateTimeNullableFilter<$PrismaModel = never> = {
    equals?: Date | string | Prisma.DateTimeFieldRefInput<$PrismaModel> | null;
    in?: Date[] | string[] | Prisma.ListDateTimeFieldRefInput<$PrismaModel> | null;
    notIn?: Date[] | string[] | Prisma.ListDateTimeFieldRefInput<$PrismaModel> | null;
    lt?: Date | string | Prisma.DateTimeFieldRefInput<$PrismaModel>;
    lte?: Date | string | Prisma.DateTimeFieldRefInput<$PrismaModel>;
    gt?: Date | string | Prisma.DateTimeFieldRefInput<$PrismaModel>;
    gte?: Date | string | Prisma.DateTimeFieldRefInput<$PrismaModel>;
    not?: Prisma.NestedDateTimeNullableFilter<$PrismaModel> | Date | string | null;
};
export type NestedEnumday_of_weekNullableFilter<$PrismaModel = never> = {
    equals?: $Enums.day_of_week | Prisma.Enumday_of_weekFieldRefInput<$PrismaModel> | null;
    in?: $Enums.day_of_week[] | Prisma.ListEnumday_of_weekFieldRefInput<$PrismaModel> | null;
    notIn?: $Enums.day_of_week[] | Prisma.ListEnumday_of_weekFieldRefInput<$PrismaModel> | null;
    not?: Prisma.NestedEnumday_of_weekNullableFilter<$PrismaModel> | $Enums.day_of_week | null;
};
export type NestedEnumslot_typeWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.slot_type | Prisma.Enumslot_typeFieldRefInput<$PrismaModel>;
    in?: $Enums.slot_type[] | Prisma.ListEnumslot_typeFieldRefInput<$PrismaModel>;
    notIn?: $Enums.slot_type[] | Prisma.ListEnumslot_typeFieldRefInput<$PrismaModel>;
    not?: Prisma.NestedEnumslot_typeWithAggregatesFilter<$PrismaModel> | $Enums.slot_type;
    _count?: Prisma.NestedIntFilter<$PrismaModel>;
    _min?: Prisma.NestedEnumslot_typeFilter<$PrismaModel>;
    _max?: Prisma.NestedEnumslot_typeFilter<$PrismaModel>;
};
export type NestedDateTimeNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Date | string | Prisma.DateTimeFieldRefInput<$PrismaModel> | null;
    in?: Date[] | string[] | Prisma.ListDateTimeFieldRefInput<$PrismaModel> | null;
    notIn?: Date[] | string[] | Prisma.ListDateTimeFieldRefInput<$PrismaModel> | null;
    lt?: Date | string | Prisma.DateTimeFieldRefInput<$PrismaModel>;
    lte?: Date | string | Prisma.DateTimeFieldRefInput<$PrismaModel>;
    gt?: Date | string | Prisma.DateTimeFieldRefInput<$PrismaModel>;
    gte?: Date | string | Prisma.DateTimeFieldRefInput<$PrismaModel>;
    not?: Prisma.NestedDateTimeNullableWithAggregatesFilter<$PrismaModel> | Date | string | null;
    _count?: Prisma.NestedIntNullableFilter<$PrismaModel>;
    _min?: Prisma.NestedDateTimeNullableFilter<$PrismaModel>;
    _max?: Prisma.NestedDateTimeNullableFilter<$PrismaModel>;
};
export type NestedEnumday_of_weekNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.day_of_week | Prisma.Enumday_of_weekFieldRefInput<$PrismaModel> | null;
    in?: $Enums.day_of_week[] | Prisma.ListEnumday_of_weekFieldRefInput<$PrismaModel> | null;
    notIn?: $Enums.day_of_week[] | Prisma.ListEnumday_of_weekFieldRefInput<$PrismaModel> | null;
    not?: Prisma.NestedEnumday_of_weekNullableWithAggregatesFilter<$PrismaModel> | $Enums.day_of_week | null;
    _count?: Prisma.NestedIntNullableFilter<$PrismaModel>;
    _min?: Prisma.NestedEnumday_of_weekNullableFilter<$PrismaModel>;
    _max?: Prisma.NestedEnumday_of_weekNullableFilter<$PrismaModel>;
};
export type NestedIntWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | Prisma.IntFieldRefInput<$PrismaModel>;
    in?: number[] | Prisma.ListIntFieldRefInput<$PrismaModel>;
    notIn?: number[] | Prisma.ListIntFieldRefInput<$PrismaModel>;
    lt?: number | Prisma.IntFieldRefInput<$PrismaModel>;
    lte?: number | Prisma.IntFieldRefInput<$PrismaModel>;
    gt?: number | Prisma.IntFieldRefInput<$PrismaModel>;
    gte?: number | Prisma.IntFieldRefInput<$PrismaModel>;
    not?: Prisma.NestedIntWithAggregatesFilter<$PrismaModel> | number;
    _count?: Prisma.NestedIntFilter<$PrismaModel>;
    _avg?: Prisma.NestedFloatFilter<$PrismaModel>;
    _sum?: Prisma.NestedIntFilter<$PrismaModel>;
    _min?: Prisma.NestedIntFilter<$PrismaModel>;
    _max?: Prisma.NestedIntFilter<$PrismaModel>;
};
export type NestedFloatFilter<$PrismaModel = never> = {
    equals?: number | Prisma.FloatFieldRefInput<$PrismaModel>;
    in?: number[] | Prisma.ListFloatFieldRefInput<$PrismaModel>;
    notIn?: number[] | Prisma.ListFloatFieldRefInput<$PrismaModel>;
    lt?: number | Prisma.FloatFieldRefInput<$PrismaModel>;
    lte?: number | Prisma.FloatFieldRefInput<$PrismaModel>;
    gt?: number | Prisma.FloatFieldRefInput<$PrismaModel>;
    gte?: number | Prisma.FloatFieldRefInput<$PrismaModel>;
    not?: Prisma.NestedFloatFilter<$PrismaModel> | number;
};
export type NestedEnumbooking_statusFilter<$PrismaModel = never> = {
    equals?: $Enums.booking_status | Prisma.Enumbooking_statusFieldRefInput<$PrismaModel>;
    in?: $Enums.booking_status[] | Prisma.ListEnumbooking_statusFieldRefInput<$PrismaModel>;
    notIn?: $Enums.booking_status[] | Prisma.ListEnumbooking_statusFieldRefInput<$PrismaModel>;
    not?: Prisma.NestedEnumbooking_statusFilter<$PrismaModel> | $Enums.booking_status;
};
export type NestedEnumcancellation_partyNullableFilter<$PrismaModel = never> = {
    equals?: $Enums.cancellation_party | Prisma.Enumcancellation_partyFieldRefInput<$PrismaModel> | null;
    in?: $Enums.cancellation_party[] | Prisma.ListEnumcancellation_partyFieldRefInput<$PrismaModel> | null;
    notIn?: $Enums.cancellation_party[] | Prisma.ListEnumcancellation_partyFieldRefInput<$PrismaModel> | null;
    not?: Prisma.NestedEnumcancellation_partyNullableFilter<$PrismaModel> | $Enums.cancellation_party | null;
};
export type NestedEnumbooking_statusWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.booking_status | Prisma.Enumbooking_statusFieldRefInput<$PrismaModel>;
    in?: $Enums.booking_status[] | Prisma.ListEnumbooking_statusFieldRefInput<$PrismaModel>;
    notIn?: $Enums.booking_status[] | Prisma.ListEnumbooking_statusFieldRefInput<$PrismaModel>;
    not?: Prisma.NestedEnumbooking_statusWithAggregatesFilter<$PrismaModel> | $Enums.booking_status;
    _count?: Prisma.NestedIntFilter<$PrismaModel>;
    _min?: Prisma.NestedEnumbooking_statusFilter<$PrismaModel>;
    _max?: Prisma.NestedEnumbooking_statusFilter<$PrismaModel>;
};
export type NestedEnumcancellation_partyNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.cancellation_party | Prisma.Enumcancellation_partyFieldRefInput<$PrismaModel> | null;
    in?: $Enums.cancellation_party[] | Prisma.ListEnumcancellation_partyFieldRefInput<$PrismaModel> | null;
    notIn?: $Enums.cancellation_party[] | Prisma.ListEnumcancellation_partyFieldRefInput<$PrismaModel> | null;
    not?: Prisma.NestedEnumcancellation_partyNullableWithAggregatesFilter<$PrismaModel> | $Enums.cancellation_party | null;
    _count?: Prisma.NestedIntNullableFilter<$PrismaModel>;
    _min?: Prisma.NestedEnumcancellation_partyNullableFilter<$PrismaModel>;
    _max?: Prisma.NestedEnumcancellation_partyNullableFilter<$PrismaModel>;
};
export type NestedEnumdispute_statusFilter<$PrismaModel = never> = {
    equals?: $Enums.dispute_status | Prisma.Enumdispute_statusFieldRefInput<$PrismaModel>;
    in?: $Enums.dispute_status[] | Prisma.ListEnumdispute_statusFieldRefInput<$PrismaModel>;
    notIn?: $Enums.dispute_status[] | Prisma.ListEnumdispute_statusFieldRefInput<$PrismaModel>;
    not?: Prisma.NestedEnumdispute_statusFilter<$PrismaModel> | $Enums.dispute_status;
};
export type NestedEnumdispute_resolutionNullableFilter<$PrismaModel = never> = {
    equals?: $Enums.dispute_resolution | Prisma.Enumdispute_resolutionFieldRefInput<$PrismaModel> | null;
    in?: $Enums.dispute_resolution[] | Prisma.ListEnumdispute_resolutionFieldRefInput<$PrismaModel> | null;
    notIn?: $Enums.dispute_resolution[] | Prisma.ListEnumdispute_resolutionFieldRefInput<$PrismaModel> | null;
    not?: Prisma.NestedEnumdispute_resolutionNullableFilter<$PrismaModel> | $Enums.dispute_resolution | null;
};
export type NestedEnumdispute_statusWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.dispute_status | Prisma.Enumdispute_statusFieldRefInput<$PrismaModel>;
    in?: $Enums.dispute_status[] | Prisma.ListEnumdispute_statusFieldRefInput<$PrismaModel>;
    notIn?: $Enums.dispute_status[] | Prisma.ListEnumdispute_statusFieldRefInput<$PrismaModel>;
    not?: Prisma.NestedEnumdispute_statusWithAggregatesFilter<$PrismaModel> | $Enums.dispute_status;
    _count?: Prisma.NestedIntFilter<$PrismaModel>;
    _min?: Prisma.NestedEnumdispute_statusFilter<$PrismaModel>;
    _max?: Prisma.NestedEnumdispute_statusFilter<$PrismaModel>;
};
export type NestedEnumdispute_resolutionNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.dispute_resolution | Prisma.Enumdispute_resolutionFieldRefInput<$PrismaModel> | null;
    in?: $Enums.dispute_resolution[] | Prisma.ListEnumdispute_resolutionFieldRefInput<$PrismaModel> | null;
    notIn?: $Enums.dispute_resolution[] | Prisma.ListEnumdispute_resolutionFieldRefInput<$PrismaModel> | null;
    not?: Prisma.NestedEnumdispute_resolutionNullableWithAggregatesFilter<$PrismaModel> | $Enums.dispute_resolution | null;
    _count?: Prisma.NestedIntNullableFilter<$PrismaModel>;
    _min?: Prisma.NestedEnumdispute_resolutionNullableFilter<$PrismaModel>;
    _max?: Prisma.NestedEnumdispute_resolutionNullableFilter<$PrismaModel>;
};
export type NestedEnumlisting_modeFilter<$PrismaModel = never> = {
    equals?: $Enums.listing_mode | Prisma.Enumlisting_modeFieldRefInput<$PrismaModel>;
    in?: $Enums.listing_mode[] | Prisma.ListEnumlisting_modeFieldRefInput<$PrismaModel>;
    notIn?: $Enums.listing_mode[] | Prisma.ListEnumlisting_modeFieldRefInput<$PrismaModel>;
    not?: Prisma.NestedEnumlisting_modeFilter<$PrismaModel> | $Enums.listing_mode;
};
export type NestedEnumage_groupFilter<$PrismaModel = never> = {
    equals?: $Enums.age_group | Prisma.Enumage_groupFieldRefInput<$PrismaModel>;
    in?: $Enums.age_group[] | Prisma.ListEnumage_groupFieldRefInput<$PrismaModel>;
    notIn?: $Enums.age_group[] | Prisma.ListEnumage_groupFieldRefInput<$PrismaModel>;
    not?: Prisma.NestedEnumage_groupFilter<$PrismaModel> | $Enums.age_group;
};
export type NestedEnumlisting_statusFilter<$PrismaModel = never> = {
    equals?: $Enums.listing_status | Prisma.Enumlisting_statusFieldRefInput<$PrismaModel>;
    in?: $Enums.listing_status[] | Prisma.ListEnumlisting_statusFieldRefInput<$PrismaModel>;
    notIn?: $Enums.listing_status[] | Prisma.ListEnumlisting_statusFieldRefInput<$PrismaModel>;
    not?: Prisma.NestedEnumlisting_statusFilter<$PrismaModel> | $Enums.listing_status;
};
export type NestedEnumlisting_modeWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.listing_mode | Prisma.Enumlisting_modeFieldRefInput<$PrismaModel>;
    in?: $Enums.listing_mode[] | Prisma.ListEnumlisting_modeFieldRefInput<$PrismaModel>;
    notIn?: $Enums.listing_mode[] | Prisma.ListEnumlisting_modeFieldRefInput<$PrismaModel>;
    not?: Prisma.NestedEnumlisting_modeWithAggregatesFilter<$PrismaModel> | $Enums.listing_mode;
    _count?: Prisma.NestedIntFilter<$PrismaModel>;
    _min?: Prisma.NestedEnumlisting_modeFilter<$PrismaModel>;
    _max?: Prisma.NestedEnumlisting_modeFilter<$PrismaModel>;
};
export type NestedEnumage_groupWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.age_group | Prisma.Enumage_groupFieldRefInput<$PrismaModel>;
    in?: $Enums.age_group[] | Prisma.ListEnumage_groupFieldRefInput<$PrismaModel>;
    notIn?: $Enums.age_group[] | Prisma.ListEnumage_groupFieldRefInput<$PrismaModel>;
    not?: Prisma.NestedEnumage_groupWithAggregatesFilter<$PrismaModel> | $Enums.age_group;
    _count?: Prisma.NestedIntFilter<$PrismaModel>;
    _min?: Prisma.NestedEnumage_groupFilter<$PrismaModel>;
    _max?: Prisma.NestedEnumage_groupFilter<$PrismaModel>;
};
export type NestedEnumlisting_statusWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.listing_status | Prisma.Enumlisting_statusFieldRefInput<$PrismaModel>;
    in?: $Enums.listing_status[] | Prisma.ListEnumlisting_statusFieldRefInput<$PrismaModel>;
    notIn?: $Enums.listing_status[] | Prisma.ListEnumlisting_statusFieldRefInput<$PrismaModel>;
    not?: Prisma.NestedEnumlisting_statusWithAggregatesFilter<$PrismaModel> | $Enums.listing_status;
    _count?: Prisma.NestedIntFilter<$PrismaModel>;
    _min?: Prisma.NestedEnumlisting_statusFilter<$PrismaModel>;
    _max?: Prisma.NestedEnumlisting_statusFilter<$PrismaModel>;
};
export type NestedEnumnotification_channelFilter<$PrismaModel = never> = {
    equals?: $Enums.notification_channel | Prisma.Enumnotification_channelFieldRefInput<$PrismaModel>;
    in?: $Enums.notification_channel[] | Prisma.ListEnumnotification_channelFieldRefInput<$PrismaModel>;
    notIn?: $Enums.notification_channel[] | Prisma.ListEnumnotification_channelFieldRefInput<$PrismaModel>;
    not?: Prisma.NestedEnumnotification_channelFilter<$PrismaModel> | $Enums.notification_channel;
};
export type NestedEnumnotification_channelWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.notification_channel | Prisma.Enumnotification_channelFieldRefInput<$PrismaModel>;
    in?: $Enums.notification_channel[] | Prisma.ListEnumnotification_channelFieldRefInput<$PrismaModel>;
    notIn?: $Enums.notification_channel[] | Prisma.ListEnumnotification_channelFieldRefInput<$PrismaModel>;
    not?: Prisma.NestedEnumnotification_channelWithAggregatesFilter<$PrismaModel> | $Enums.notification_channel;
    _count?: Prisma.NestedIntFilter<$PrismaModel>;
    _min?: Prisma.NestedEnumnotification_channelFilter<$PrismaModel>;
    _max?: Prisma.NestedEnumnotification_channelFilter<$PrismaModel>;
};
export type NestedEnumnotification_statusFilter<$PrismaModel = never> = {
    equals?: $Enums.notification_status | Prisma.Enumnotification_statusFieldRefInput<$PrismaModel>;
    in?: $Enums.notification_status[] | Prisma.ListEnumnotification_statusFieldRefInput<$PrismaModel>;
    notIn?: $Enums.notification_status[] | Prisma.ListEnumnotification_statusFieldRefInput<$PrismaModel>;
    not?: Prisma.NestedEnumnotification_statusFilter<$PrismaModel> | $Enums.notification_status;
};
export type NestedEnumnotification_statusWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.notification_status | Prisma.Enumnotification_statusFieldRefInput<$PrismaModel>;
    in?: $Enums.notification_status[] | Prisma.ListEnumnotification_statusFieldRefInput<$PrismaModel>;
    notIn?: $Enums.notification_status[] | Prisma.ListEnumnotification_statusFieldRefInput<$PrismaModel>;
    not?: Prisma.NestedEnumnotification_statusWithAggregatesFilter<$PrismaModel> | $Enums.notification_status;
    _count?: Prisma.NestedIntFilter<$PrismaModel>;
    _min?: Prisma.NestedEnumnotification_statusFilter<$PrismaModel>;
    _max?: Prisma.NestedEnumnotification_statusFilter<$PrismaModel>;
};
export type NestedDecimalFilter<$PrismaModel = never> = {
    equals?: runtime.Decimal | runtime.DecimalJsLike | number | string | Prisma.DecimalFieldRefInput<$PrismaModel>;
    in?: runtime.Decimal[] | runtime.DecimalJsLike[] | number[] | string[] | Prisma.ListDecimalFieldRefInput<$PrismaModel>;
    notIn?: runtime.Decimal[] | runtime.DecimalJsLike[] | number[] | string[] | Prisma.ListDecimalFieldRefInput<$PrismaModel>;
    lt?: runtime.Decimal | runtime.DecimalJsLike | number | string | Prisma.DecimalFieldRefInput<$PrismaModel>;
    lte?: runtime.Decimal | runtime.DecimalJsLike | number | string | Prisma.DecimalFieldRefInput<$PrismaModel>;
    gt?: runtime.Decimal | runtime.DecimalJsLike | number | string | Prisma.DecimalFieldRefInput<$PrismaModel>;
    gte?: runtime.Decimal | runtime.DecimalJsLike | number | string | Prisma.DecimalFieldRefInput<$PrismaModel>;
    not?: Prisma.NestedDecimalFilter<$PrismaModel> | runtime.Decimal | runtime.DecimalJsLike | number | string;
};
export type NestedEnumpayment_methodFilter<$PrismaModel = never> = {
    equals?: $Enums.payment_method | Prisma.Enumpayment_methodFieldRefInput<$PrismaModel>;
    in?: $Enums.payment_method[] | Prisma.ListEnumpayment_methodFieldRefInput<$PrismaModel>;
    notIn?: $Enums.payment_method[] | Prisma.ListEnumpayment_methodFieldRefInput<$PrismaModel>;
    not?: Prisma.NestedEnumpayment_methodFilter<$PrismaModel> | $Enums.payment_method;
};
export type NestedEnumpayment_statusFilter<$PrismaModel = never> = {
    equals?: $Enums.payment_status | Prisma.Enumpayment_statusFieldRefInput<$PrismaModel>;
    in?: $Enums.payment_status[] | Prisma.ListEnumpayment_statusFieldRefInput<$PrismaModel>;
    notIn?: $Enums.payment_status[] | Prisma.ListEnumpayment_statusFieldRefInput<$PrismaModel>;
    not?: Prisma.NestedEnumpayment_statusFilter<$PrismaModel> | $Enums.payment_status;
};
export type NestedDecimalNullableFilter<$PrismaModel = never> = {
    equals?: runtime.Decimal | runtime.DecimalJsLike | number | string | Prisma.DecimalFieldRefInput<$PrismaModel> | null;
    in?: runtime.Decimal[] | runtime.DecimalJsLike[] | number[] | string[] | Prisma.ListDecimalFieldRefInput<$PrismaModel> | null;
    notIn?: runtime.Decimal[] | runtime.DecimalJsLike[] | number[] | string[] | Prisma.ListDecimalFieldRefInput<$PrismaModel> | null;
    lt?: runtime.Decimal | runtime.DecimalJsLike | number | string | Prisma.DecimalFieldRefInput<$PrismaModel>;
    lte?: runtime.Decimal | runtime.DecimalJsLike | number | string | Prisma.DecimalFieldRefInput<$PrismaModel>;
    gt?: runtime.Decimal | runtime.DecimalJsLike | number | string | Prisma.DecimalFieldRefInput<$PrismaModel>;
    gte?: runtime.Decimal | runtime.DecimalJsLike | number | string | Prisma.DecimalFieldRefInput<$PrismaModel>;
    not?: Prisma.NestedDecimalNullableFilter<$PrismaModel> | runtime.Decimal | runtime.DecimalJsLike | number | string | null;
};
export type NestedDecimalWithAggregatesFilter<$PrismaModel = never> = {
    equals?: runtime.Decimal | runtime.DecimalJsLike | number | string | Prisma.DecimalFieldRefInput<$PrismaModel>;
    in?: runtime.Decimal[] | runtime.DecimalJsLike[] | number[] | string[] | Prisma.ListDecimalFieldRefInput<$PrismaModel>;
    notIn?: runtime.Decimal[] | runtime.DecimalJsLike[] | number[] | string[] | Prisma.ListDecimalFieldRefInput<$PrismaModel>;
    lt?: runtime.Decimal | runtime.DecimalJsLike | number | string | Prisma.DecimalFieldRefInput<$PrismaModel>;
    lte?: runtime.Decimal | runtime.DecimalJsLike | number | string | Prisma.DecimalFieldRefInput<$PrismaModel>;
    gt?: runtime.Decimal | runtime.DecimalJsLike | number | string | Prisma.DecimalFieldRefInput<$PrismaModel>;
    gte?: runtime.Decimal | runtime.DecimalJsLike | number | string | Prisma.DecimalFieldRefInput<$PrismaModel>;
    not?: Prisma.NestedDecimalWithAggregatesFilter<$PrismaModel> | runtime.Decimal | runtime.DecimalJsLike | number | string;
    _count?: Prisma.NestedIntFilter<$PrismaModel>;
    _avg?: Prisma.NestedDecimalFilter<$PrismaModel>;
    _sum?: Prisma.NestedDecimalFilter<$PrismaModel>;
    _min?: Prisma.NestedDecimalFilter<$PrismaModel>;
    _max?: Prisma.NestedDecimalFilter<$PrismaModel>;
};
export type NestedEnumpayment_methodWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.payment_method | Prisma.Enumpayment_methodFieldRefInput<$PrismaModel>;
    in?: $Enums.payment_method[] | Prisma.ListEnumpayment_methodFieldRefInput<$PrismaModel>;
    notIn?: $Enums.payment_method[] | Prisma.ListEnumpayment_methodFieldRefInput<$PrismaModel>;
    not?: Prisma.NestedEnumpayment_methodWithAggregatesFilter<$PrismaModel> | $Enums.payment_method;
    _count?: Prisma.NestedIntFilter<$PrismaModel>;
    _min?: Prisma.NestedEnumpayment_methodFilter<$PrismaModel>;
    _max?: Prisma.NestedEnumpayment_methodFilter<$PrismaModel>;
};
export type NestedEnumpayment_statusWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.payment_status | Prisma.Enumpayment_statusFieldRefInput<$PrismaModel>;
    in?: $Enums.payment_status[] | Prisma.ListEnumpayment_statusFieldRefInput<$PrismaModel>;
    notIn?: $Enums.payment_status[] | Prisma.ListEnumpayment_statusFieldRefInput<$PrismaModel>;
    not?: Prisma.NestedEnumpayment_statusWithAggregatesFilter<$PrismaModel> | $Enums.payment_status;
    _count?: Prisma.NestedIntFilter<$PrismaModel>;
    _min?: Prisma.NestedEnumpayment_statusFilter<$PrismaModel>;
    _max?: Prisma.NestedEnumpayment_statusFilter<$PrismaModel>;
};
export type NestedDecimalNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: runtime.Decimal | runtime.DecimalJsLike | number | string | Prisma.DecimalFieldRefInput<$PrismaModel> | null;
    in?: runtime.Decimal[] | runtime.DecimalJsLike[] | number[] | string[] | Prisma.ListDecimalFieldRefInput<$PrismaModel> | null;
    notIn?: runtime.Decimal[] | runtime.DecimalJsLike[] | number[] | string[] | Prisma.ListDecimalFieldRefInput<$PrismaModel> | null;
    lt?: runtime.Decimal | runtime.DecimalJsLike | number | string | Prisma.DecimalFieldRefInput<$PrismaModel>;
    lte?: runtime.Decimal | runtime.DecimalJsLike | number | string | Prisma.DecimalFieldRefInput<$PrismaModel>;
    gt?: runtime.Decimal | runtime.DecimalJsLike | number | string | Prisma.DecimalFieldRefInput<$PrismaModel>;
    gte?: runtime.Decimal | runtime.DecimalJsLike | number | string | Prisma.DecimalFieldRefInput<$PrismaModel>;
    not?: Prisma.NestedDecimalNullableWithAggregatesFilter<$PrismaModel> | runtime.Decimal | runtime.DecimalJsLike | number | string | null;
    _count?: Prisma.NestedIntNullableFilter<$PrismaModel>;
    _avg?: Prisma.NestedDecimalNullableFilter<$PrismaModel>;
    _sum?: Prisma.NestedDecimalNullableFilter<$PrismaModel>;
    _min?: Prisma.NestedDecimalNullableFilter<$PrismaModel>;
    _max?: Prisma.NestedDecimalNullableFilter<$PrismaModel>;
};
export type NestedEnumpayout_statusFilter<$PrismaModel = never> = {
    equals?: $Enums.payout_status | Prisma.Enumpayout_statusFieldRefInput<$PrismaModel>;
    in?: $Enums.payout_status[] | Prisma.ListEnumpayout_statusFieldRefInput<$PrismaModel>;
    notIn?: $Enums.payout_status[] | Prisma.ListEnumpayout_statusFieldRefInput<$PrismaModel>;
    not?: Prisma.NestedEnumpayout_statusFilter<$PrismaModel> | $Enums.payout_status;
};
export type NestedEnumpayout_statusWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.payout_status | Prisma.Enumpayout_statusFieldRefInput<$PrismaModel>;
    in?: $Enums.payout_status[] | Prisma.ListEnumpayout_statusFieldRefInput<$PrismaModel>;
    notIn?: $Enums.payout_status[] | Prisma.ListEnumpayout_statusFieldRefInput<$PrismaModel>;
    not?: Prisma.NestedEnumpayout_statusWithAggregatesFilter<$PrismaModel> | $Enums.payout_status;
    _count?: Prisma.NestedIntFilter<$PrismaModel>;
    _min?: Prisma.NestedEnumpayout_statusFilter<$PrismaModel>;
    _max?: Prisma.NestedEnumpayout_statusFilter<$PrismaModel>;
};
export type NestedEnumpricing_typeFilter<$PrismaModel = never> = {
    equals?: $Enums.pricing_type | Prisma.Enumpricing_typeFieldRefInput<$PrismaModel>;
    in?: $Enums.pricing_type[] | Prisma.ListEnumpricing_typeFieldRefInput<$PrismaModel>;
    notIn?: $Enums.pricing_type[] | Prisma.ListEnumpricing_typeFieldRefInput<$PrismaModel>;
    not?: Prisma.NestedEnumpricing_typeFilter<$PrismaModel> | $Enums.pricing_type;
};
export type NestedEnumbilling_cycleFilter<$PrismaModel = never> = {
    equals?: $Enums.billing_cycle | Prisma.Enumbilling_cycleFieldRefInput<$PrismaModel>;
    in?: $Enums.billing_cycle[] | Prisma.ListEnumbilling_cycleFieldRefInput<$PrismaModel>;
    notIn?: $Enums.billing_cycle[] | Prisma.ListEnumbilling_cycleFieldRefInput<$PrismaModel>;
    not?: Prisma.NestedEnumbilling_cycleFilter<$PrismaModel> | $Enums.billing_cycle;
};
export type NestedEnumpricing_typeWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.pricing_type | Prisma.Enumpricing_typeFieldRefInput<$PrismaModel>;
    in?: $Enums.pricing_type[] | Prisma.ListEnumpricing_typeFieldRefInput<$PrismaModel>;
    notIn?: $Enums.pricing_type[] | Prisma.ListEnumpricing_typeFieldRefInput<$PrismaModel>;
    not?: Prisma.NestedEnumpricing_typeWithAggregatesFilter<$PrismaModel> | $Enums.pricing_type;
    _count?: Prisma.NestedIntFilter<$PrismaModel>;
    _min?: Prisma.NestedEnumpricing_typeFilter<$PrismaModel>;
    _max?: Prisma.NestedEnumpricing_typeFilter<$PrismaModel>;
};
export type NestedEnumbilling_cycleWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.billing_cycle | Prisma.Enumbilling_cycleFieldRefInput<$PrismaModel>;
    in?: $Enums.billing_cycle[] | Prisma.ListEnumbilling_cycleFieldRefInput<$PrismaModel>;
    notIn?: $Enums.billing_cycle[] | Prisma.ListEnumbilling_cycleFieldRefInput<$PrismaModel>;
    not?: Prisma.NestedEnumbilling_cycleWithAggregatesFilter<$PrismaModel> | $Enums.billing_cycle;
    _count?: Prisma.NestedIntFilter<$PrismaModel>;
    _min?: Prisma.NestedEnumbilling_cycleFilter<$PrismaModel>;
    _max?: Prisma.NestedEnumbilling_cycleFilter<$PrismaModel>;
};
export type NestedEnumreview_targetFilter<$PrismaModel = never> = {
    equals?: $Enums.review_target | Prisma.Enumreview_targetFieldRefInput<$PrismaModel>;
    in?: $Enums.review_target[] | Prisma.ListEnumreview_targetFieldRefInput<$PrismaModel>;
    notIn?: $Enums.review_target[] | Prisma.ListEnumreview_targetFieldRefInput<$PrismaModel>;
    not?: Prisma.NestedEnumreview_targetFilter<$PrismaModel> | $Enums.review_target;
};
export type NestedEnumreview_targetWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.review_target | Prisma.Enumreview_targetFieldRefInput<$PrismaModel>;
    in?: $Enums.review_target[] | Prisma.ListEnumreview_targetFieldRefInput<$PrismaModel>;
    notIn?: $Enums.review_target[] | Prisma.ListEnumreview_targetFieldRefInput<$PrismaModel>;
    not?: Prisma.NestedEnumreview_targetWithAggregatesFilter<$PrismaModel> | $Enums.review_target;
    _count?: Prisma.NestedIntFilter<$PrismaModel>;
    _min?: Prisma.NestedEnumreview_targetFilter<$PrismaModel>;
    _max?: Prisma.NestedEnumreview_targetFilter<$PrismaModel>;
};
export type NestedEnumuser_roleFilter<$PrismaModel = never> = {
    equals?: $Enums.user_role | Prisma.Enumuser_roleFieldRefInput<$PrismaModel>;
    in?: $Enums.user_role[] | Prisma.ListEnumuser_roleFieldRefInput<$PrismaModel>;
    notIn?: $Enums.user_role[] | Prisma.ListEnumuser_roleFieldRefInput<$PrismaModel>;
    not?: Prisma.NestedEnumuser_roleFilter<$PrismaModel> | $Enums.user_role;
};
export type NestedEnumuser_roleWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.user_role | Prisma.Enumuser_roleFieldRefInput<$PrismaModel>;
    in?: $Enums.user_role[] | Prisma.ListEnumuser_roleFieldRefInput<$PrismaModel>;
    notIn?: $Enums.user_role[] | Prisma.ListEnumuser_roleFieldRefInput<$PrismaModel>;
    not?: Prisma.NestedEnumuser_roleWithAggregatesFilter<$PrismaModel> | $Enums.user_role;
    _count?: Prisma.NestedIntFilter<$PrismaModel>;
    _min?: Prisma.NestedEnumuser_roleFilter<$PrismaModel>;
    _max?: Prisma.NestedEnumuser_roleFilter<$PrismaModel>;
};
export type NestedEnumuser_statusFilter<$PrismaModel = never> = {
    equals?: $Enums.user_status | Prisma.Enumuser_statusFieldRefInput<$PrismaModel>;
    in?: $Enums.user_status[] | Prisma.ListEnumuser_statusFieldRefInput<$PrismaModel>;
    notIn?: $Enums.user_status[] | Prisma.ListEnumuser_statusFieldRefInput<$PrismaModel>;
    not?: Prisma.NestedEnumuser_statusFilter<$PrismaModel> | $Enums.user_status;
};
export type NestedEnumuser_statusWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.user_status | Prisma.Enumuser_statusFieldRefInput<$PrismaModel>;
    in?: $Enums.user_status[] | Prisma.ListEnumuser_statusFieldRefInput<$PrismaModel>;
    notIn?: $Enums.user_status[] | Prisma.ListEnumuser_statusFieldRefInput<$PrismaModel>;
    not?: Prisma.NestedEnumuser_statusWithAggregatesFilter<$PrismaModel> | $Enums.user_status;
    _count?: Prisma.NestedIntFilter<$PrismaModel>;
    _min?: Prisma.NestedEnumuser_statusFilter<$PrismaModel>;
    _max?: Prisma.NestedEnumuser_statusFilter<$PrismaModel>;
};
