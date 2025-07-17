import React from 'react';
import './CarCard.css';
import type { Car } from '../types';

interface CarCardProps {
  car: Car;
  onClick?: () => void;
}

const CarCard: React.FC<CarCardProps> = ({ car, onClick }) => {
  return (
    <div
      className="car-card clickable"
      onClick={onClick}
      tabIndex={0}
      role="button"
    >
      <h2>
        {car.manufacturer} {car.model}
      </h2>
      <p>Color: {car.color}</p>
      <span className="price-badge">${car.price.toLocaleString()}</span>
    </div>
  );
};

export default CarCard;
