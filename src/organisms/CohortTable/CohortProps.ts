export interface DatoInterface {
  red: number;
  blue: number;
  green: number;
  opacity: number;
  bold?: boolean;
}

export interface ValorInterface {
  red: number;
  blue: number;
  green: number;
  opacity: number;
  format: null | string;
}

export interface CellClickInterface {
  value: number;
  valueIndex: number;
  columnId: number;
  column: {
    label: string;
    values: number[];
  };
}

export interface CohortData {
  cohorts: {
    label: string;
    values: string[];
  }[];
  data: {
    label: string;
    values: number[];
  }[];
}

export interface CohortInterface {
  data: CohortData;
  cellClick?: (columnDetails: CellClickInterface) => void | undefined;
  cellMouseEnter?: (columnDetails: CellClickInterface) => void | undefined;
  compare?: boolean;
  format?: null | 'percent' | 'currency';
}
