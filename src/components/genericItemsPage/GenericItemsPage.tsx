import React, { useState } from 'react';
import './GenericItemsPage.css';
import type {
  IGenericItemConfig,
  IGenericStoreItem,
  IGenericCatalogItemConfig,
} from '../../types';
import { GenericDetailSidebar } from '../genericDetailsSideBar';
import { GenericItemsList } from '../genericItemsList';

interface props {
  items: IGenericStoreItem[];
  displayConfig: IGenericCatalogItemConfig;
  detailsConfig: IGenericItemConfig;
  storeLabel: string;
}
export const GenericItemsPage: React.FC<props> = ({
  displayConfig,
  items,
  storeLabel,
  detailsConfig,
}) => {
  const [selectedItem, setSelectedItem] = useState<IGenericStoreItem | null>(
    null,
  );

  return (
    <div className="App">
      <h1 className="storeLabel">{storeLabel}</h1>
      <GenericItemsList
        displayConfig={displayConfig}
        items={items}
        onClick={(item) => setSelectedItem(item)}
      />
      {selectedItem && (
        <GenericDetailSidebar
          item={selectedItem}
          detailsConfig={detailsConfig}
          onClose={() => setSelectedItem(null)}
        />
      )}
    </div>
  );
};
