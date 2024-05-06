import { ChartType, Column } from "@/types";
import { create } from "zustand";

type Data = {
  key?: ChartType;
  options?: any;
  columns?: Column[];
  dataset?: string;
};

type ColumnStore = {
  selectedColumn?: Column;
  isDragging: boolean;
  data: Column[];
};

type CreateChartStore = {
  data: Data;
  column: ColumnStore;
  setData: (data: Data) => void;
  setDataColumn: (column: Column) => void;
  setDraftColumn: (column: Column) => void;
  setDraftColumns: (columns: Column[]) => void;
  removeDraftColumn: (column: Column) => void;
  setSelectColumn: (column?: Column) => void;
  setIsDragging: (isDragging: boolean) => void;
  setOptions: (options: any) => void;
  clearData: () => void;
};

const initialData: Data = {
  key: undefined,
  options: undefined,
  columns: [],
  dataset: "public.FCC 2018 Survey",
};

const initialColumn = {
  selectedColumn: undefined,
  isDragging: false,
  data: [
    {
      name: "name",
      type: "string",
      key: "column",
    },
    {
      name: "age",
      type: "string",
      key: "column",
    },
    {
      name: "address",
      type: "string",
      key: "column",
    },
  ],
};

export const useCreateChartStore = create<CreateChartStore>((set, get) => ({
  data: initialData,
  column: initialColumn,
  setData: (data) => {
    set({ data });
  },
  setOptions: (options) => {
    set((state) => ({
      data: {
        ...state.data,
        options: {
          ...get().data.options,
          ...options,
        },
      },
    }));
  },
  setSelectColumn: (column) => {
    set((state) => ({
      column: {
        ...state.column,
        selectedColumn: column,
      },
    }));
  },
  setDataColumn: (column) => {
    set((state) => ({
      data: {
        ...state.data,
        columns: [...(get().data.columns ?? []), column],
      },
    }));
  },
  setIsDragging: (isDragging) => {
    set((state) => ({
      column: {
        ...state.column,
        isDragging,
      },
    }));
  },
  setDraftColumn: (column) => {
    set((state) => ({
      data: {
        ...state.data,
        options: {
          ...state.data.options,
          columns: [
            ...(state.data.options?.columns ?? []),
            {
              title: column.name,
              dataIndex: column.name,
              key: column.name,
            },
          ],
        },
      },
      column: {
        selectedColumn: undefined,
        isDragging: false,
        data: [...(state.column.data ?? []), column],
      },
    }));
  },
  setDraftColumns: (columns) => {
    set((state) => ({
      data: {
        ...state.data,
        options: {
          ...state.data.options,
          columns: columns.map((item) => ({
            title: item.name,
            dataIndex: item.name,
            key: item.name,
          })),
        },
      },
      column: {
        ...state.column,
        data: columns,
      },
    }));
  },
  removeDraftColumn: (column) => {
    set((state) => ({
      data: {
        ...state.data,
        options: {
          ...state.data.options,
          columns: state.data.options?.columns?.filter(
            (item: any) => item.key !== column.name
          ),
        },
      },
      column: {
        ...state.column,
        data: state.column.data.filter((item) => item.name !== column.name),
      },
    }));
  },
  clearData: () => {
    set({ data: initialData });
  },
}));
