import { FilterActions, FilterType } from '../actions/filter.action';

export interface FilterState {
  filter: string;
}

const initialState: FilterState = {
  filter: null
};

export function filterReducer(state: FilterState = initialState, action: FilterType): FilterState {
  switch (action.type) {
    case FilterActions.ADD_FILTER:
      return { ...state, filter: action.payload };
    case FilterActions.REMOVE_FILTER:
      return { ...state, filter: null };
    default:
      return state;
  }
};
