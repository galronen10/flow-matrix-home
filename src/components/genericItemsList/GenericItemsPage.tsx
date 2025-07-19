import React, { useState } from 'react';
import './GenericItemsPage.css';
import type { IGenericStoreItem, IGenericCatalogItemConfig } from '../../types';
import { GenericStoreCard } from '../genericStoreCard';
import { FilterSortBar } from '../filterSortBar/FilterSortBar';
import { Pagination } from '@mui/material';

interface props {
  items: IGenericStoreItem[];
  displayConfig: IGenericCatalogItemConfig;
  onClick?: (item: IGenericStoreItem) => void;
}

const itemsPerPage = 10;

export const GenericItemsList: React.FC<props> = ({
  displayConfig,
  items,
  onClick,
}) => {
  const [search, setSearch] = useState('');
  const [selectedSort, setSelectedSort] = useState<string>('');
  const [page, setPage] = useState(1);

  const pageCount = Math.ceil(items.length / itemsPerPage);

  // const filtered = items
  //   .filter((item) => item.name.toLowerCase().includes(search.toLowerCase()))
  //   .sort((a, b) => {
  //     if (selectedSort === 'name') return a.name.localeCompare(b.name);
  //     if (selectedSort === 'date')
  //       return new Date(b.date).getTime() - new Date(a.date).getTime();
  //     return 0;
  //   });

  return (
    <>
      {' '}
      <FilterSortBar
        search={search}
        selectedSort={selectedSort}
        displayConfig={displayConfig}
        onSearchChange={setSearch}
        onSortChange={setSelectedSort}
      />
      <div className="catalog">
        {items.map((item, idx: number) => (
          <GenericStoreCard
            key={idx}
            item={item}
            onClick={onClick ? () => onClick(item) : undefined}
            itemDisplayConfig={displayConfig}
          />
        ))}
      </div>
      <Pagination
        page={page}
        count={pageCount}
        onChange={(_, value) => setPage(value)}
        color="primary"
        sx={{ alignSelf: 'center', display: 'flex', justifyContent: 'center' }}
      />
    </>
  );
};
