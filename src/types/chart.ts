export type ChartType =
  | "line"
  | "bar"
  | "pie"
  | "table"
  | "area"
  | "number"
  | undefined;

export type Chart = {
  chart: ChartType;
  name: string;
  dataset?: string;
  options: any;
  date?: string;
};

export type Column = {
  name: string;
  type: string;
  key: string;
};
