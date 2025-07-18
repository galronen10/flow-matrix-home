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
  return (
    <div
      className="item-card clickable"
      onClick={onClick}
      tabIndex={0}
      role="button"
    >
      <h2>{itemDisplayConfig.labelGenerator(item)}</h2>

      {itemDisplayConfig.propertyDisplayList.map((propDisplay) => {
        const dataDisplay: string =
          propDisplay.displayFormatter?.(item[propDisplay.key]) ??
          item[propDisplay.key];
        return <p>{`${propDisplay.label}: ${dataDisplay}`}</p>;
      })}

      <span className="price-badge">${item.price.toLocaleString()}</span>
    </div>
  );
};
