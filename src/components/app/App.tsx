import React, { useEffect } from 'react';
import { GenericItemsPage } from '../genericItemsPage';
import { useAppDispatch } from '../../hooks';
import { setStoreData } from '../../store/storeSlice';
import { setItems } from '../../store/CatalogSlice';
import { StoreToggle } from '../storeToggle';
import { storeConfigMap } from '../../config/configMap';

export const App: React.FC = () => {
  const dispatch = useAppDispatch();

  useEffect(() => {
    const { detailsConfig, displayConfig, items, storeLabel } =
      storeConfigMap.cars;
    dispatch(
      setStoreData({
        detailsConfig,
        displayConfig,
        storeLabel,
      }),
    );
    dispatch(setItems(items));
  }, []);

  return (
    <>
      <StoreToggle />
      <GenericItemsPage />;
    </>
  );
};
