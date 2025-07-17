import React from 'react';
import { GenericItemsPage } from '../genericItemsPage';
import {
  carDisplayConfig,
  carDetailsConfig,
} from '../../config/carDisplayConfig';
import cars from '../../config/cars';

export const App: React.FC = () => {
  return (
    <GenericItemsPage
      detailsConfig={carDetailsConfig}
      storeLabel="Car Store Catalog"
      displayConfig={carDisplayConfig}
      items={cars}
    />
  );
};
