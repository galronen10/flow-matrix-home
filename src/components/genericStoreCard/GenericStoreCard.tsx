import React from 'react';
import './GenericStoreCard.css';
import type { IGenericStoreItemConfig, IGenericStoreItem } from '../../types';

interface props {
  item: IGenericStoreItem;
  itemDisplayConfig: IGenericStoreItemConfig;
  onClick?: () => void;
}

export const GenericStoreCard: React.FC<props> = ({
  item,
  itemDisplayConfig,
  onClick,
}) => {
  const displayLabel: string = itemDisplayConfig.labelProperties
    .map((key) => item[key])
    .join(' ');

  return (
    <div
      className="item-card clickable"
      onClick={onClick}
      tabIndex={0}
      role="button"
    >
      <h2>{displayLabel}</h2>

      {itemDisplayConfig.propertyDisplayList.map((propDisplay) => (
        <p>{`${propDisplay.label}: ${item[propDisplay.key]}`}</p>
      ))}

      <span className="price-badge">${item.price.toLocaleString()}</span>
    </div>
  );
};
