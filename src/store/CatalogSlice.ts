import {
  createSelector,
  createSlice,
  type PayloadAction,
} from '@reduxjs/toolkit';
import type { IGenericStoreItem } from '../types';
import type { RootState } from './index';

type CatalogState = {
  items: IGenericStoreItem[];
  sortField: string;
  page: number;
  filter: {
    field: string;
    value: string;
  };
};

const initialState: CatalogState = {
  filter: { field: '', value: '' },
  items: [],
  page: 1,
  sortField: '',
};

export const catalogSlice = createSlice({
  name: 'catalog',
  initialState,
  reducers: {
    setItems: (state, action: PayloadAction<IGenericStoreItem[]>) => {
      state.items = action.payload;
    },
    setSortField: (state, action: PayloadAction<string>) => {
      state.sortField = action.payload;
      state.page = 1;
    },
    setFilterField: (state, action: PayloadAction<string>) => {
      state.filter = { ...state.filter, field: action.payload };
      state.page = 1;
    },
    setFilterValue: (state, action: PayloadAction<string>) => {
      state.filter = { ...state.filter, value: action.payload };
      state.page = 1;
    },
    setPage: (state, action: PayloadAction<number>) => {
      state.page = action.payload;
    },
    clearFilters: (state) => ({ ...initialState, items: state.items }),
  },
});

export const {
  clearFilters,
  setFilterField,
  setFilterValue,
  setPage,
  setSortField,
  setItems,
} = catalogSlice.actions;

const selectCatalogState = (state: RootState) => state.catalog;

export const selectItems = createSelector(
  [selectCatalogState],
  (catalog) => catalog.items,
);

export const selectSortField = createSelector(
  [selectCatalogState],
  (catalog) => catalog.sortField,
);

export const selectPage = createSelector(
  [selectCatalogState],
  (catalog) => catalog.page,
);

export const selectFilter = createSelector(
  [selectCatalogState],
  (catalog) => catalog.filter,
);

export const selectFilteredItems = createSelector(
  [selectItems, selectFilter],
  (items, filter) => {
    if (!filter.value) return items;
    return items.filter((item) =>
      String(item[filter.field as keyof IGenericStoreItem])
        .toLowerCase()
        .includes(filter.value.toLowerCase()),
    );
  },
);

export default catalogSlice.reducer;
