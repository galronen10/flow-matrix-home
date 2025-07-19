import {
  createSelector,
  createSlice,
  type PayloadAction,
} from '@reduxjs/toolkit';
import type {
  IGenericCatalogItemConfig,
  IGenericItemConfig,
  IGenericStoreItem,
} from '../types';
import type { RootState } from './index';

type StoreState = {
  displayConfig: IGenericCatalogItemConfig;
  detailsConfig: IGenericItemConfig;
  storeLabel: string;
  selectedItem: IGenericStoreItem | null;
};

const defaultLabelGenerator = () => '';
const initialState: StoreState = {
  detailsConfig: {
    labelGenerator: defaultLabelGenerator,
    propertyDisplayList: [],
  },
  displayConfig: {
    sortConfig: {},
    filterConfig: {},
    labelGenerator: defaultLabelGenerator,
    propertyDisplayList: [],
  },
  selectedItem: null,
  storeLabel: '',
};

export const storeSlice = createSlice({
  name: 'store',
  initialState,
  reducers: {
    setStoreData: (
      _,
      action: PayloadAction<Omit<StoreState, 'selectedItem'>>,
    ) => ({ ...action.payload, selectedItem: null }),
    setSelectedItem: (state, action: PayloadAction<IGenericStoreItem>) => {
      state.selectedItem = action.payload;
    },
    clearSelectedItem: (state) => {
      state.selectedItem = null;
    },
  },
});

export const { clearSelectedItem, setSelectedItem, setStoreData } =
  storeSlice.actions;

// Root selector
const selectStore = (state: RootState) => state.store;

// 👉 selectedItem
export const selectSelectedItem = createSelector(
  [selectStore],
  (store) => store.selectedItem,
);

// 👉 storeLabel
export const selectStoreLabel = createSelector(
  [selectStore],
  (store) => store.storeLabel,
);

//
// --- displayConfig selectors ---
//
export const selectDisplayConfig = createSelector(
  [selectStore],
  (store) => store.displayConfig,
);

export const selectCardDisplayConfig = createSelector(
  [selectDisplayConfig],
  (config) => {
    // eslint-disable-next-line @typescript-eslint/no-unused-vars
    const { sortConfig, filterConfig, ...cardDisplayConfig } = config;

    return cardDisplayConfig;
  },
);

export const selectSortConfig = createSelector(
  [selectDisplayConfig],
  (config) => config.sortConfig,
);

export const selectFilterConfig = createSelector(
  [selectDisplayConfig],
  (config) => config.filterConfig,
);

//
// --- detailsConfig selectors ---
//
export const selectDetailsConfig = createSelector(
  [selectStore],
  (store) => store.detailsConfig,
);

export default storeSlice.reducer;
