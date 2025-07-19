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

export interface IBasicItemDisplayConfig<T extends IGenericStoreItem> {
  labelGenerator: (item: T) => string;
  propertyDisplayList: IItemPropertyDisplay<T>[];
}

export type IGenericItemConfig = IBasicItemDisplayConfig<any>;

type IModifyConfig<T> = Partial<
  Record<
    Extract<keyof T, string>,
    {
      label: string;
      optionFunc?: (a: any, b?: any) => number;
    }
  >
>;

export type IGenericModifyConfig = IModifyConfig<any>;
export interface ICatalogStoreItemConfig<T extends IGenericStoreItem>
  extends IBasicItemDisplayConfig<T> {
  sortConfig: IModifyConfig<T>;
  filterConfig: IModifyConfig<T>;
}

export type IGenericCatalogItemConfig = ICatalogStoreItemConfig<any>;

export interface Car extends IBaseStoreItem {
  manufacturer: string;
  model: string;
  color: string;
  year: number;
  engine: string;
  horsepower: number;
}
