import { ActionReducer, ActionReducerMap, MetaReducer } from '@ngrx/store';
import { storeFreeze } from 'ngrx-store-freeze';

import { environment } from '../../environments/environment';
import { FilterState, filterReducer } from './reducers/filter.reducer';

export interface AppState {
	filter: FilterState;
}

export const reducers: ActionReducerMap<AppState> = {
	filter: filterReducer
};

// console.log all actions
export function logger(reducer: ActionReducer<AppState>): ActionReducer<AppState> {
	return (state: AppState, action: any): any => {
		const result = reducer(state, action);
		/* eslint-disable no-console */
		console.groupCollapsed(action.type);
		console.log('prev state', state);
		console.log('action', action);
		console.log('next state', result);
		console.groupEnd();
		/* eslint-enable no-console */

		return result;
	};
}

/**
 * By default, @ngrx/store uses combineReducers with the reducer map to compose
 * the root meta-reducer. To add more meta-reducers, provide an array of meta-reducers
 * that will be composed to form the root meta-reducer.
 */
export const metaReducers: MetaReducer<AppState>[] = !environment.production ? [logger, storeFreeze] : [];
