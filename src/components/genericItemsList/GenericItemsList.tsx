import React, { useEffect, useState } from 'react';
import './GenericItemsList.css';
import { useSelector } from 'react-redux';
import { Pagination } from '@mui/material';
import { FilterSortBar } from '../filterSortBar';
import { GenericStoreCard } from '../genericStoreCard';
import { selectFilteredItems } from '../../store/CatalogSlice';
import { itemsPerPage } from '../../types';

export const GenericItemsList: React.FC = () => {
  const [selectedPage, setSelectedPage] = useState<number>(1);

  const items = useSelector(selectFilteredItems);

  const pageCount = Math.ceil(items.length / itemsPerPage);

  useEffect(() => {
    setSelectedPage(1);
  }, [items]);
  const selectPageNum = (_: unknown, page: number) => {
    setSelectedPage(page);
  };

  const itemsForPage = () => {
    const start = (selectedPage - 1) * itemsPerPage;

    return items.slice(start, start + itemsPerPage);
  };

  return (
    <>
      <FilterSortBar />
      <div className="catalog">
        {itemsForPage().map((item, idx: number) => (
          <GenericStoreCard key={idx} item={item} />
        ))}
      </div>
      <Pagination
        page={selectedPage}
        count={pageCount}
        onChange={selectPageNum}
        color="primary"
        sx={{ alignSelf: 'center', display: 'flex', justifyContent: 'center' }}
      />
    </>
  );
};
