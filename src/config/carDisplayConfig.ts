import type { Car, IItemDetailsConfig, IItemDisplayConfig } from '../types';

export const carDisplayConfig: IItemDisplayConfig<Car> = {
  labelProperties: ['manufacturer', 'model'],
  propertyDisplayList: [{ label: 'Color', key: 'color' }],
};

export const carDetailsConfig: IItemDetailsConfig<Car> = {
  labelGenerator: (car: Car) =>
    `${car.manufacturer} ${car.model} (${car.year})`,
  propertyDisplayList: [
    { label: 'Color', key: 'color' },
    { label: 'Engine', key: 'engine' },
    { label: 'Horsepower', key: 'horsepower' },
    { label: 'Price', key: 'price' },
  ],
  descriptionProperty: 'description',
};
