import { Chart } from "@/types";
import { Layout } from "react-grid-layout";
import { create } from "zustand";
import { persist, createJSONStorage } from "zustand/middleware";

type DashboardState = {
  currentBreakpoint: string;
  currentCols: number;
  layouts: { [breakpoint: string]: Layout[] };
  currentLayout: Layout[];
};

type DataStore = {
  charts: Chart[];
  dashboard: DashboardState;
  addChart: (chart: Chart) => void;
  setDashboard: (dashboard: Partial<DashboardState>) => void;
  removeChart: (name: string) => void;
  removeDashboardElement: (name: string) => void;
  clearDashboard: () => void;
};

const initialDashboardState = {
  currentBreakpoint: "lg",
  currentCols: 24,
  currentLayout: [],
  layouts: {},
};

export const useDataStore = create(
  persist<DataStore>(
    (set, get) => ({
      charts: [],
      dashboard: initialDashboardState,
      addChart: (chart: Chart) => {
        set({ charts: [...get().charts, chart] });
      },
      removeChart: (name: string) => {
        set({ charts: get().charts.filter((chart) => chart.name !== name) });
      },
      setDashboard: (dashboard: Partial<DashboardState>) => {
        set({
          dashboard: {
            ...get().dashboard,
            ...dashboard,
          },
        });
      },
      removeDashboardElement: (name: string) => {
        const newcurrentLayout = get().dashboard.currentLayout.filter(
          (layout) => layout.i !== name
        );

        const newLayout: Record<string, any> = {};

        Object.entries(get().dashboard.layouts).forEach(([key, value]) => {
          const newValue = value.filter((layout) => layout.i !== name);

          newLayout[key] = newValue;
        });

        set({
          dashboard: {
            ...get().dashboard,
            currentLayout: newcurrentLayout,
            layouts: newLayout,
          },
        });
      },
      clearDashboard: () => {
        set({ dashboard: initialDashboardState });
      },
    }),
    {
      name: "data-storage", // name of the item in the storage (must be unique)
      storage: createJSONStorage(() => localStorage), // (optional) by default, 'localStorage' is used
    }
  )
);
