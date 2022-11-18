import React from 'react';

import { Column, ColumnApi, GridApi, ICellEditorParams } from 'ag-grid-community';

import { ButtonIcon } from '@talend/design-system';

import {
	CUSTOM_FIELD_DISPLAY_NAME,
	QUALITY_EMPTY_KEY,
	QUALITY_INVALID_KEY,
	QUALITY_VALID_KEY,
} from '../constants';

// Will get typed later on?

export type Schema = {
	fields: any[];
};

export type Sample = {
	schema: Schema;
	data: any[];
};

export type AvroField = {
	name: string;
	doc: string;
	[CUSTOM_FIELD_DISPLAY_NAME]?: string;
	type: any;
	[otherProp: string]: unknown;
};

export interface Quality {
	empty: number;
	invalid: number;
	valid: number;
}

export type QualityIndex =
	| typeof QUALITY_INVALID_KEY
	| typeof QUALITY_EMPTY_KEY
	| typeof QUALITY_VALID_KEY;

export interface TypeInfo {
	type: string;
	typeLabel: string;
	semanticTypeId?: string;
	semanticTypeLabel?: string;
	logicalType?: string;
}

export type CellRendererParams = TypeInfo & {
	avroRenderer: Record<string, any>;
	avro: TypeInfo;
};

export type SemanticType = {
	type: string;
};

export type CellEditorParams = {
	getSemanticType(semanticType: string): Promise<SemanticType>;
	getSemanticTypeSuggestions(semanticTypeId: string, search: string): Promise<string[]>;
	onSubmit(
		value: string,
		applyToAll: boolean,
		cellParams: Pick<ICellEditorParams, 'data' | 'rowIndex' | 'column' | 'value'>,
	): void;
};

export type HeaderClickParams = {
	event: React.MouseEvent<HTMLDivElement, MouseEvent>;
	column: Column;
};

export type HeaderComponentParams = TypeInfo & {
	description?: string;
	required?: boolean;
	quality?: Quality;
	isLoading?: boolean;
	draftType?: string;
	menuProps?: Omit<Parameters<typeof ButtonIcon>[0], 'icon' | 'size'> & {
		'data-feature'?: string;
	};
	nbAppliedDqRules?: number;
	qualityBarProps?: any;
	onFocus?(params: HeaderClickParams): void;
};

export interface AgGridCellValue {
	name: string;
	value: string;
}

export type GridContext = {
	selectedColumns: string[];
};

export type GridRef = {
	api: GridApi;
	columnApi: ColumnApi;
	context: GridContext;
};

export type { ColDef } from 'ag-grid-community';
