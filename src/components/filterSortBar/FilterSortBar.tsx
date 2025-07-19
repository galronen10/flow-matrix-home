import React from 'react';
import { ModFieldSelect } from './modFieldSelect';
import { SearchInput } from './SearchInput';
import type { IGenericCatalogItemConfig } from '../../types';
import { Stack, Button } from '@mui/material';

type FilterSortBarProps = {
  search: string;
  selectedSort: string;
  displayConfig: IGenericCatalogItemConfig;
  onSearchChange: (search: string) => void;
  onSortChange: (sort: string) => void;
  onClearFilters?: () => void;
};

export const FilterSortBar: React.FC<FilterSortBarProps> = ({
  search,
  selectedSort,
  displayConfig,
  onSearchChange,
  onSortChange,
  onClearFilters,
}) => {
  const clearAll = () => {
    onSearchChange('');
    onSortChange('');
    onClearFilters?.();
  };

  return (
    <Stack
      direction="row"
      spacing={2}
      alignItems="center"
      justifyContent="center"
      sx={{ flexWrap: 'wrap', padding: 3 }}
    >
      <ModFieldSelect
        selectedOption={selectedSort}
        modConfig={displayConfig.filterConfig}
        onChange={onSortChange}
        isFilter
      />
      <SearchInput value={search} onChange={onSearchChange} />
      <ModFieldSelect
        selectedOption={selectedSort}
        modConfig={displayConfig.sortConfig}
        onChange={onSortChange}
      />
      <Button variant="outlined" color="error" onClick={clearAll}>
        Clear Filters
      </Button>
    </Stack>
  );
};
