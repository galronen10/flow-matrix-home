import React, { useState } from 'react';
import './App.css';
import '../styles/main.css';
import cars from '../config/cars';
import CarCard from './CarCard';
import type { Car } from '../types';
import CarDetailSidebar from './CarDetailSidebar';

const CarsPage: React.FC = () => {
  const [selectedCar, setSelectedCar] = useState<Car | null>(null);

  return (
    <div className="App">
      <h1>Car Store Catalog</h1>
      <div className="catalog">
        {cars.map((car: Car, idx: number) => (
          <CarCard key={idx} car={car} onClick={() => setSelectedCar(car)} />
        ))}
      </div>
      {selectedCar && (
        <CarDetailSidebar
          car={selectedCar}
          onClose={() => setSelectedCar(null)}
        />
      )}
    </div>
  );
};

export default CarsPage;
