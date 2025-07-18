import React, { useState } from 'react';
import './GenericDetailSidebar.css';
import type { IGenericStoreItem, IGenericStoreItemConfig } from '../../types';

interface props {
  item: IGenericStoreItem;
  detailsConfig: IGenericStoreItemConfig;
  onClose: () => void;
}

const ANIMATION_DURATION = 250; // ms

export const GenericDetailSidebar: React.FC<props> = ({
  item,
  detailsConfig,
  onClose,
}) => {
  const [closing, setClosing] = useState(false);

  const handleClose = () => {
    setClosing(true);
    setTimeout(() => {
      setClosing(false);
      onClose();
    }, ANIMATION_DURATION);
  };

  return (
    <div
      className={`sidebar-overlay${closing ? ' closing' : ''}`}
      onClick={handleClose}
    >
      <aside
        className={`item-detail-sidebar${closing ? ' closing' : ''}`}
        onClick={(e) => e.stopPropagation()}
      >
        <button className="close-btn" onClick={handleClose}>
          &times;
        </button>
        <h2>{detailsConfig.labelGenerator(item)}</h2>
        <div className="item-detail-info">
          {detailsConfig.propertyDisplayList.map((propDisplay) => {
            const dataDisplay: string =
              propDisplay.displayFormatter?.(item[propDisplay.key]) ??
              item[propDisplay.key];

            return (
              <p>
                <strong>{propDisplay.label}:</strong> {dataDisplay}
              </p>
            );
          })}
        </div>
        <p className="item-description">{item.description}</p>
      </aside>
    </div>
  );
};
