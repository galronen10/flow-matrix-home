import React, { useState } from 'react';
import type { Car } from '../types';
import './CarDetailSidebar.css';

interface CarDetailSidebarProps {
  car: Car;
  onClose: () => void;
}

const ANIMATION_DURATION = 250; // ms

const CarDetailSidebar: React.FC<CarDetailSidebarProps> = ({
  car,
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
        className={`car-detail-sidebar${closing ? ' closing' : ''}`}
        onClick={(e) => e.stopPropagation()}
      >
        <button className="close-btn" onClick={handleClose}>
          &times;
        </button>
        <h2>
          {car.manufacturer} {car.model} ({car.year})
        </h2>
        <div className="car-detail-info">
          <p>
            <strong>Color:</strong> {car.color}
          </p>
          <p>
            <strong>Engine:</strong> {car.engine}
          </p>
          <p>
            <strong>Horsepower:</strong> {car.horsepower} hp
          </p>
          <p>
            <strong>Price:</strong> ${car.price.toLocaleString()}
          </p>
        </div>
        <p className="car-description">{car.description}</p>
      </aside>
    </div>
  );
};

export default CarDetailSidebar;
