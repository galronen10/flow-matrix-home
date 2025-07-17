/* eslint-disable @typescript-eslint/no-explicit-any */
interface IBaseStoreItem {
  price: number;
}

export type IGenericStoreItem = IBaseStoreItem & Record<string, any>;

interface IItemPropertyDisplay<T> {
  label: string;
  key: Extract<keyof T, string>;
}

export interface IItemDisplayConfig<T extends IGenericStoreItem> {
  labelProperties: Extract<keyof T, string>[];
  propertyDisplayList: IItemPropertyDisplay<T>[];
}

export type IGenericStoreItemConfig = IItemDisplayConfig<any>;

export interface IItemDetailsConfig<T extends IGenericStoreItem> {
  labelGenerator: (item: T) => string;
  propertyDisplayList: IItemPropertyDisplay<T>[];
  descriptionProperty: Extract<keyof T, string>;
}

export type IGenericItemDetailsConfig = IItemDetailsConfig<any>;

export interface Car extends IBaseStoreItem {
  manufacturer: string;
  model: string;
  color: string;
  year: number;
  engine: string;
  horsepower: number;
  description: string;
}
