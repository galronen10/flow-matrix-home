import React, { useState } from 'react';
import './GenericDetailSidebar.css';
import type { IGenericItemDetailsConfig, IGenericStoreItem } from '../../types';

interface props {
  item: IGenericStoreItem;
  detailsConfig: IGenericItemDetailsConfig;
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

  const label = detailsConfig.labelGenerator(item);

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
        <h2>{label}</h2>
        <div className="item-detail-info">
          {detailsConfig.propertyDisplayList.map((propDisplay) => (
            <p>
              <strong>{propDisplay.label}:</strong> {item[propDisplay.key]}
            </p>
          ))}
        </div>
        <p className="item-description">
          {item[detailsConfig.descriptionProperty]}
        </p>
      </aside>
    </div>
  );
};
