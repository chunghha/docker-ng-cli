import { Action } from '@ngrx/store';

export enum FilterActions {
	ADD_FILTER = '[FILTER] Add Filter',
	REMOVE_FILTER = '[FILTER] Remove Filter'
}

export class AddFilter implements Action {
	readonly type = FilterActions.ADD_FILTER;
	constructor(public payload: string) {}
}

// tslint:disable-next-line:max-classes-per-file
export class RemoveFilter implements Action {
	readonly type = FilterActions.REMOVE_FILTER;
	constructor() {}
}

export type FilterType = AddFilter | RemoveFilter;
