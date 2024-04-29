export const seriesStyleOptions = {
  line: [
    { label: "Line", value: "line" },
    { label: "Smooth Line", value: "smooth" },
    { label: "Step - start", value: "step-start" },
    { label: "Step - middle", value: "step-middle" },
    { label: "Step - end", value: "step-end" },
  ],
} as Record<string, { label: string; value: string }[]>;

export const styleValues = {
  smooth: { smooth: true, step: undefined },
  line: { smooth: false, step: undefined },
  ["step-start"]: { step: "start", smooth: false },
  ["step-middle"]: { step: "middle", smooth: false },
  ["step-end"]: { step: "end", smooth: false },
} as Record<string, any>;
