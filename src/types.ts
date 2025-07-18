/* eslint-disable @typescript-eslint/no-explicit-any */
interface IBaseStoreItem {
  price: number;
  description: string;
}

export type IGenericStoreItem = IBaseStoreItem & Record<string, any>;

interface IItemPropertyDisplay<T> {
  label: string;
  key: Extract<keyof T, string>;
  displayFormatter?: (data: any) => string;
}

export interface IItemDisplayConfig<T extends IGenericStoreItem> {
  labelGenerator: (item: T) => string;
  propertyDisplayList: IItemPropertyDisplay<T>[];
}

export type IGenericStoreItemConfig = IItemDisplayConfig<any>;

export interface Car extends IBaseStoreItem {
  manufacturer: string;
  model: string;
  color: string;
  year: number;
  engine: string;
  horsepower: number;
}
