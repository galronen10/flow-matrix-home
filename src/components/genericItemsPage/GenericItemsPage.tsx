import React, { useState } from 'react';
import './GenericItemsPage.css';
import type { IGenericStoreItemConfig, IGenericStoreItem } from '../../types';
import { GenericStoreCard } from '../genericStoreCard';
import { GenericDetailSidebar } from '../genericDetailsSideBar';

interface props {
  items: IGenericStoreItem[];
  displayConfig: IGenericStoreItemConfig;
  detailsConfig: IGenericStoreItemConfig;
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
      <div className="catalog">
        {items.map((item, idx: number) => (
          <GenericStoreCard
            key={idx}
            item={item}
            onClick={() => setSelectedItem(item)}
            itemDisplayConfig={displayConfig}
          />
        ))}
      </div>
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
