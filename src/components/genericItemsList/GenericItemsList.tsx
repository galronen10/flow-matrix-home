import React from 'react';
import './GenericItemsList.css';
import { GenericStoreCard } from '../genericStoreCard';
import { FilterSortBar } from '../filterSortBar/FilterSortBar';
import { Pagination } from '@mui/material';
import { selectItems, selectPage, setPage } from '../../store/catalogSlice';
import { useSelector } from 'react-redux';
import { useAppDispatch } from '../../hooks';

const itemsPerPage = 10;

export const GenericItemsList: React.FC = () => {
  const items = useSelector(selectItems);
  const selectedPage = useSelector(selectPage);
  const dispatch = useAppDispatch();

  const pageCount = Math.ceil(items.length / itemsPerPage);

  const selectPageNum = (_: unknown, page: number) => {
    dispatch(setPage(page));
  };

  return (
    <>
      {' '}
      <FilterSortBar />
      <div className="catalog">
        {items.map((item, idx: number) => (
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
