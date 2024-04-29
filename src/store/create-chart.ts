import { ChartType } from "@/types";
import { create } from "zustand";

type Data = {
  key?: ChartType;
  options?: any;
  dataset?: string;
};

type CreateChartStore = {
  data: Data;
  setData: (data: Data) => void;
  setOptions: (options: any) => void;
  clearData: () => void;
};

const initialData: Data = {
  key: undefined,
  options: undefined,
  dataset: "public.FCC 2018 Survey",
};

export const useCreateChartStore = create<CreateChartStore>((set, get) => ({
  data: initialData,
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
  clearData: () => {
    set({ data: initialData });
  },
}));
