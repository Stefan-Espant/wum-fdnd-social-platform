// Code generated by Slice Machine. DO NOT EDIT.

import type * as prismic from '@prismicio/client';

type Simplify<T> = { [KeyType in keyof T]: T[KeyType] };

type MemberDocumentDataSlicesSlice = MemberInfoSlice;

/**
 * Content for Member documents
 */
interface MemberDocumentData {
	/**
	 * image field in *Member*
	 *
	 * - **Field Type**: Image
	 * - **Placeholder**: *None*
	 * - **API ID Path**: member.image
	 * - **Tab**: Main
	 * - **Documentation**: https://prismic.io/docs/field#image
	 */
	image: prismic.ImageField<never>;

	/**
	 * firstName field in *Member*
	 *
	 * - **Field Type**: Text
	 * - **Placeholder**: *None*
	 * - **API ID Path**: member.firstname
	 * - **Tab**: Main
	 * - **Documentation**: https://prismic.io/docs/field#key-text
	 */
	firstname: prismic.KeyTextField;

	/**
	 * lastName field in *Member*
	 *
	 * - **Field Type**: Text
	 * - **Placeholder**: *None*
	 * - **API ID Path**: member.lastname
	 * - **Tab**: Main
	 * - **Documentation**: https://prismic.io/docs/field#key-text
	 */
	lastname: prismic.KeyTextField;

	/**
	 * link field in *Member*
	 *
	 * - **Field Type**: Link
	 * - **Placeholder**: *None*
	 * - **API ID Path**: member.link
	 * - **Tab**: Main
	 * - **Documentation**: https://prismic.io/docs/field#link-content-relationship
	 */
	link: prismic.LinkField;

	/**
	 * Slice Zone field in *Member*
	 *
	 * - **Field Type**: Slice Zone
	 * - **Placeholder**: *None*
	 * - **API ID Path**: member.slices[]
	 * - **Tab**: Main
	 * - **Documentation**: https://prismic.io/docs/field#slices
	 */
	slices: prismic.SliceZone<MemberDocumentDataSlicesSlice>;
}

/**
 * Member document from Prismic
 *
 * - **API ID**: `member`
 * - **Repeatable**: `true`
 * - **Documentation**: https://prismic.io/docs/custom-types
 *
 * @typeParam Lang - Language API ID of the document.
 */
export type MemberDocument<Lang extends string = string> = prismic.PrismicDocumentWithUID<
	Simplify<MemberDocumentData>,
	'member',
	Lang
>;

type NieuwsDocumentDataSlicesSlice = NieuwsInfoSlice;

/**
 * Content for Nieuws documents
 */
interface NieuwsDocumentData {
	/**
	 * Slice Zone field in *Nieuws*
	 *
	 * - **Field Type**: Slice Zone
	 * - **Placeholder**: *None*
	 * - **API ID Path**: nieuws.slices[]
	 * - **Tab**: Main
	 * - **Documentation**: https://prismic.io/docs/field#slices
	 */
	slices: prismic.SliceZone<NieuwsDocumentDataSlicesSlice>;
}

/**
 * Nieuws document from Prismic
 *
 * - **API ID**: `nieuws`
 * - **Repeatable**: `true`
 * - **Documentation**: https://prismic.io/docs/custom-types
 *
 * @typeParam Lang - Language API ID of the document.
 */
export type NieuwsDocument<Lang extends string = string> = prismic.PrismicDocumentWithUID<
	Simplify<NieuwsDocumentData>,
	'nieuws',
	Lang
>;

type SquadDocumentDataSlicesSlice = SquadInfoSlice;

/**
 * Content for Squad documents
 */
interface SquadDocumentData {
	/**
	 * Slice Zone field in *Squad*
	 *
	 * - **Field Type**: Slice Zone
	 * - **Placeholder**: *None*
	 * - **API ID Path**: squad.slices[]
	 * - **Tab**: Main
	 * - **Documentation**: https://prismic.io/docs/field#slices
	 */
	slices: prismic.SliceZone<SquadDocumentDataSlicesSlice>;
}

/**
 * Squad document from Prismic
 *
 * - **API ID**: `squad`
 * - **Repeatable**: `true`
 * - **Documentation**: https://prismic.io/docs/custom-types
 *
 * @typeParam Lang - Language API ID of the document.
 */
export type SquadDocument<Lang extends string = string> = prismic.PrismicDocumentWithUID<
	Simplify<SquadDocumentData>,
	'squad',
	Lang
>;

type ToolDocumentDataSlicesSlice = ToolInfoSlice;

/**
 * Content for Tool documents
 */
interface ToolDocumentData {
	/**
	 * Slice Zone field in *Tool*
	 *
	 * - **Field Type**: Slice Zone
	 * - **Placeholder**: *None*
	 * - **API ID Path**: tool.slices[]
	 * - **Tab**: Main
	 * - **Documentation**: https://prismic.io/docs/field#slices
	 */
	slices: prismic.SliceZone<ToolDocumentDataSlicesSlice>;
}

/**
 * Tool document from Prismic
 *
 * - **API ID**: `tool`
 * - **Repeatable**: `true`
 * - **Documentation**: https://prismic.io/docs/custom-types
 *
 * @typeParam Lang - Language API ID of the document.
 */
export type ToolDocument<Lang extends string = string> = prismic.PrismicDocumentWithUID<
	Simplify<ToolDocumentData>,
	'tool',
	Lang
>;

type ToolsDocumentDataSlicesSlice = SingleToolSlice;

/**
 * Content for Tools documents
 */
interface ToolsDocumentData {
	/**
	 * Slice Zone field in *Tools*
	 *
	 * - **Field Type**: Slice Zone
	 * - **Placeholder**: *None*
	 * - **API ID Path**: tools.slices[]
	 * - **Tab**: Main
	 * - **Documentation**: https://prismic.io/docs/field#slices
	 */
	slices: prismic.SliceZone<ToolsDocumentDataSlicesSlice>;
}

/**
 * Tools document from Prismic
 *
 * - **API ID**: `tools`
 * - **Repeatable**: `true`
 * - **Documentation**: https://prismic.io/docs/custom-types
 *
 * @typeParam Lang - Language API ID of the document.
 */
export type ToolsDocument<Lang extends string = string> = prismic.PrismicDocumentWithUID<
	Simplify<ToolsDocumentData>,
	'tools',
	Lang
>;

export type AllDocumentTypes =
	| MemberDocument
	| NieuwsDocument
	| SquadDocument
	| ToolDocument
	| ToolsDocument;

/**
 * Primary content in *MemberInfo → Primary*
 */
export interface MemberInfoSliceDefaultPrimary {
	/**
	 * image field in *MemberInfo → Primary*
	 *
	 * - **Field Type**: Image
	 * - **Placeholder**: *None*
	 * - **API ID Path**: member_info.primary.image
	 * - **Documentation**: https://prismic.io/docs/field#image
	 */
	image: prismic.ImageField<never>;

	/**
	 * firstName field in *MemberInfo → Primary*
	 *
	 * - **Field Type**: Text
	 * - **Placeholder**: *None*
	 * - **API ID Path**: member_info.primary.firstname
	 * - **Documentation**: https://prismic.io/docs/field#key-text
	 */
	firstname: prismic.KeyTextField;

	/**
	 * lastName field in *MemberInfo → Primary*
	 *
	 * - **Field Type**: Text
	 * - **Placeholder**: *None*
	 * - **API ID Path**: member_info.primary.lastname
	 * - **Documentation**: https://prismic.io/docs/field#key-text
	 */
	lastname: prismic.KeyTextField;

	/**
	 * link field in *MemberInfo → Primary*
	 *
	 * - **Field Type**: Link
	 * - **Placeholder**: *None*
	 * - **API ID Path**: member_info.primary.link
	 * - **Documentation**: https://prismic.io/docs/field#link-content-relationship
	 */
	link: prismic.LinkField;
}

/**
 * Default variation for MemberInfo Slice
 *
 * - **API ID**: `default`
 * - **Description**: Default
 * - **Documentation**: https://prismic.io/docs/slice
 */
export type MemberInfoSliceDefault = prismic.SharedSliceVariation<
	'default',
	Simplify<MemberInfoSliceDefaultPrimary>,
	never
>;

/**
 * Slice variation for *MemberInfo*
 */
type MemberInfoSliceVariation = MemberInfoSliceDefault;

/**
 * MemberInfo Shared Slice
 *
 * - **API ID**: `member_info`
 * - **Description**: MemberInfo
 * - **Documentation**: https://prismic.io/docs/slice
 */
export type MemberInfoSlice = prismic.SharedSlice<'member_info', MemberInfoSliceVariation>;

/**
 * Primary content in *NieuwsInfo → Primary*
 */
export interface NieuwsInfoSliceDefaultPrimary {
	/**
	 * titleBefore field in *NieuwsInfo → Primary*
	 *
	 * - **Field Type**: Text
	 * - **Placeholder**: *None*
	 * - **API ID Path**: nieuws_info.primary.titlebefore
	 * - **Documentation**: https://prismic.io/docs/field#key-text
	 */
	titlebefore: prismic.KeyTextField;

	/**
	 * titleAfter field in *NieuwsInfo → Primary*
	 *
	 * - **Field Type**: Text
	 * - **Placeholder**: *None*
	 * - **API ID Path**: nieuws_info.primary.titleafter
	 * - **Documentation**: https://prismic.io/docs/field#key-text
	 */
	titleafter: prismic.KeyTextField;

	/**
	 * subtitle field in *NieuwsInfo → Primary*
	 *
	 * - **Field Type**: Text
	 * - **Placeholder**: *None*
	 * - **API ID Path**: nieuws_info.primary.subtitle
	 * - **Documentation**: https://prismic.io/docs/field#key-text
	 */
	subtitle: prismic.KeyTextField;
}

/**
 * Default variation for NieuwsInfo Slice
 *
 * - **API ID**: `default`
 * - **Description**: Default
 * - **Documentation**: https://prismic.io/docs/slice
 */
export type NieuwsInfoSliceDefault = prismic.SharedSliceVariation<
	'default',
	Simplify<NieuwsInfoSliceDefaultPrimary>,
	never
>;

/**
 * Slice variation for *NieuwsInfo*
 */
type NieuwsInfoSliceVariation = NieuwsInfoSliceDefault;

/**
 * NieuwsInfo Shared Slice
 *
 * - **API ID**: `nieuws_info`
 * - **Description**: NieuwsInfo
 * - **Documentation**: https://prismic.io/docs/slice
 */
export type NieuwsInfoSlice = prismic.SharedSlice<'nieuws_info', NieuwsInfoSliceVariation>;

/**
 * Primary content in *SingleTool → Items*
 */
export interface SingleToolSliceDefaultItem {
	/**
	 * tool field in *SingleTool → Items*
	 *
	 * - **Field Type**: Content Relationship
	 * - **Placeholder**: *None*
	 * - **API ID Path**: single_tool.items[].tool
	 * - **Documentation**: https://prismic.io/docs/field#link-content-relationship
	 */
	tool: prismic.ContentRelationshipField;
}

/**
 * Default variation for SingleTool Slice
 *
 * - **API ID**: `default`
 * - **Description**: Default
 * - **Documentation**: https://prismic.io/docs/slice
 */
export type SingleToolSliceDefault = prismic.SharedSliceVariation<
	'default',
	Record<string, never>,
	Simplify<SingleToolSliceDefaultItem>
>;

/**
 * Slice variation for *SingleTool*
 */
type SingleToolSliceVariation = SingleToolSliceDefault;

/**
 * SingleTool Shared Slice
 *
 * - **API ID**: `single_tool`
 * - **Description**: SingleTool
 * - **Documentation**: https://prismic.io/docs/slice
 */
export type SingleToolSlice = prismic.SharedSlice<'single_tool', SingleToolSliceVariation>;

/**
 * Primary content in *SquadInfo → Primary*
 */
export interface SquadInfoSliceDefaultPrimary {
	/**
	 * name field in *SquadInfo → Primary*
	 *
	 * - **Field Type**: Text
	 * - **Placeholder**: *None*
	 * - **API ID Path**: squad_info.primary.name
	 * - **Documentation**: https://prismic.io/docs/field#key-text
	 */
	name: prismic.KeyTextField;
}

/**
 * Primary content in *SquadInfo → Items*
 */
export interface SquadInfoSliceDefaultItem {
	/**
	 * member field in *SquadInfo → Items*
	 *
	 * - **Field Type**: Content Relationship
	 * - **Placeholder**: *None*
	 * - **API ID Path**: squad_info.items[].member
	 * - **Documentation**: https://prismic.io/docs/field#link-content-relationship
	 */
	member: prismic.ContentRelationshipField<'member'>;
}

/**
 * Default variation for SquadInfo Slice
 *
 * - **API ID**: `default`
 * - **Description**: Default
 * - **Documentation**: https://prismic.io/docs/slice
 */
export type SquadInfoSliceDefault = prismic.SharedSliceVariation<
	'default',
	Simplify<SquadInfoSliceDefaultPrimary>,
	Simplify<SquadInfoSliceDefaultItem>
>;

/**
 * Slice variation for *SquadInfo*
 */
type SquadInfoSliceVariation = SquadInfoSliceDefault;

/**
 * SquadInfo Shared Slice
 *
 * - **API ID**: `squad_info`
 * - **Description**: SquadInfo
 * - **Documentation**: https://prismic.io/docs/slice
 */
export type SquadInfoSlice = prismic.SharedSlice<'squad_info', SquadInfoSliceVariation>;

/**
 * Primary content in *ToolInfo → Primary*
 */
export interface ToolInfoSliceDefaultPrimary {
	/**
	 * name field in *ToolInfo → Primary*
	 *
	 * - **Field Type**: Text
	 * - **Placeholder**: *None*
	 * - **API ID Path**: tool_info.primary.name
	 * - **Documentation**: https://prismic.io/docs/field#key-text
	 */
	name: prismic.KeyTextField;

	/**
	 * link field in *ToolInfo → Primary*
	 *
	 * - **Field Type**: Link
	 * - **Placeholder**: *None*
	 * - **API ID Path**: tool_info.primary.link
	 * - **Documentation**: https://prismic.io/docs/field#link-content-relationship
	 */
	link: prismic.LinkField;

	/**
	 * image field in *ToolInfo → Primary*
	 *
	 * - **Field Type**: Image
	 * - **Placeholder**: *None*
	 * - **API ID Path**: tool_info.primary.image
	 * - **Documentation**: https://prismic.io/docs/field#image
	 */
	image: prismic.ImageField<never>;

	/**
	 * description field in *ToolInfo → Primary*
	 *
	 * - **Field Type**: Text
	 * - **Placeholder**: *None*
	 * - **API ID Path**: tool_info.primary.description
	 * - **Documentation**: https://prismic.io/docs/field#key-text
	 */
	description: prismic.KeyTextField;
}

/**
 * Default variation for ToolInfo Slice
 *
 * - **API ID**: `default`
 * - **Description**: Default
 * - **Documentation**: https://prismic.io/docs/slice
 */
export type ToolInfoSliceDefault = prismic.SharedSliceVariation<
	'default',
	Simplify<ToolInfoSliceDefaultPrimary>,
	never
>;

/**
 * Slice variation for *ToolInfo*
 */
type ToolInfoSliceVariation = ToolInfoSliceDefault;

/**
 * ToolInfo Shared Slice
 *
 * - **API ID**: `tool_info`
 * - **Description**: ToolInfo
 * - **Documentation**: https://prismic.io/docs/slice
 */
export type ToolInfoSlice = prismic.SharedSlice<'tool_info', ToolInfoSliceVariation>;

declare module '@prismicio/client' {
	interface CreateClient {
		(
			repositoryNameOrEndpoint: string,
			options?: prismic.ClientConfig
		): prismic.Client<AllDocumentTypes>;
	}

	namespace Content {
		export type {
			MemberDocument,
			MemberDocumentData,
			MemberDocumentDataSlicesSlice,
			NieuwsDocument,
			NieuwsDocumentData,
			NieuwsDocumentDataSlicesSlice,
			SquadDocument,
			SquadDocumentData,
			SquadDocumentDataSlicesSlice,
			ToolDocument,
			ToolDocumentData,
			ToolDocumentDataSlicesSlice,
			ToolsDocument,
			ToolsDocumentData,
			ToolsDocumentDataSlicesSlice,
			AllDocumentTypes,
			MemberInfoSlice,
			MemberInfoSliceDefaultPrimary,
			MemberInfoSliceVariation,
			MemberInfoSliceDefault,
			NieuwsInfoSlice,
			NieuwsInfoSliceDefaultPrimary,
			NieuwsInfoSliceVariation,
			NieuwsInfoSliceDefault,
			SingleToolSlice,
			SingleToolSliceDefaultItem,
			SingleToolSliceVariation,
			SingleToolSliceDefault,
			SquadInfoSlice,
			SquadInfoSliceDefaultPrimary,
			SquadInfoSliceDefaultItem,
			SquadInfoSliceVariation,
			SquadInfoSliceDefault,
			ToolInfoSlice,
			ToolInfoSliceDefaultPrimary,
			ToolInfoSliceVariation,
			ToolInfoSliceDefault
		};
	}
}
