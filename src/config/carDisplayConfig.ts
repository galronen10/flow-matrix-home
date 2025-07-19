import type {
  Car,
  IBasicItemDisplayConfig,
  ICatalogStoreItemConfig,
} from '../types';

export const carDisplayConfig: ICatalogStoreItemConfig<Car> = {
  labelGenerator: (car: Car) => `${car.manufacturer} ${car.model}`,
  propertyDisplayList: [{ label: 'Color', key: 'color' }],
  filterConfig: {},
  sortConfig: {},
};

export const carDetailsConfig: IBasicItemDisplayConfig<Car> = {
  labelGenerator: (car: Car) =>
    `${car.manufacturer} ${car.model} (${car.year})`,
  propertyDisplayList: [
    { label: 'Color', key: 'color' },
    { label: 'Engine', key: 'engine' },
    { label: 'Horsepower', key: 'horsepower' },
    {
      label: 'Price',
      key: 'price',
      displayFormatter: (data: number) => `$${data.toLocaleString()}`,
    },
  ],
};
