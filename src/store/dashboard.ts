import { Chart } from "@/types";
import { create } from "zustand";
import { persist, createJSONStorage } from "zustand/middleware";

type Filter = {
  keyword: string;
  sortBy: string;
};

type DashboardStore = {
  selectedChart?: Chart;
  alreadyChart: string[];
  filters: Filter;
  setSelectedChart: (chart?: Chart) => void;
  setFilters: (filters: Partial<Filter>) => void;
  setAlreadyChart: (chart: string) => void;
  clearAlreadyChart: () => void;
  clearFilters: () => void;
  removeAlreadyChart: (chart: string) => void;
};

const initialDashboardState = {
  selectedChart: undefined,
  alreadyChart: [],
  filters: {
    keyword: "",
    sortBy: "date",
  },
};

export const useDashboardStore = create(
  persist<DashboardStore>(
    (set, get) => ({
      ...initialDashboardState,
      setFilters: (filters: Partial<Filter>) =>
        set({ filters: { ...get().filters, ...filters } }),
      setSelectedChart: (chart?: Chart) => set({ selectedChart: chart }),
      setAlreadyChart: (chart: string) =>
        set({ alreadyChart: [...get().alreadyChart, chart] }),
      removeAlreadyChart: (chart: string) => {
        set({
          alreadyChart: get().alreadyChart.filter((item) => item !== chart),
        });
      },
      clearAlreadyChart: () => set({ alreadyChart: [] }),
      clearFilters: () => set({ filters: initialDashboardState.filters }),
    }),
    {
      name: "dashboard-storage", // name of the item in the storage (must be unique)
      storage: createJSONStorage(() => localStorage), // (optional) by default, 'localStorage' is used
    }
  )
);
