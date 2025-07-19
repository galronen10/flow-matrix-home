import React, { useEffect } from 'react';
import { GenericItemsPage } from '../genericItemsPage';
import {
  carDisplayConfig,
  carDetailsConfig,
} from '../../config/carDisplayConfig';
import cars from '../../config/cars';
import { useAppDispatch } from '../../hooks';
import { setStoreData } from '../../store/storeSlice';
import { setItems } from '../../store/catalogSlice';

export const App: React.FC = () => {
  const dispatch = useAppDispatch();

  useEffect(() => {
    dispatch(
      setStoreData({
        detailsConfig: carDetailsConfig,
        displayConfig: carDisplayConfig,
        storeLabel: 'Car Store Catalog',
      }),
    );
    dispatch(setItems(cars));
  }, []);
  return <GenericItemsPage />;
};
