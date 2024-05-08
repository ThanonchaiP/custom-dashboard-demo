export const getOrientation = (legend?: Record<string, unknown>) => {
  if (!legend) return undefined;

  if ("top" in legend && "right" in legend) return "top";
  else if ("bottom" in legend && "right" in legend) return "bottom";
  else if ("left" in legend && "top" in legend) return "left";
  else if ("right" in legend && "bottom" in legend) return "right";
  else return undefined;
};

const getSerieStyle = (options: any) => {
  let result = {
    style: undefined,
    label: { show: false },
    stack: "",
  } as Record<string, any>;

  let serie = options?.series?.[0];

  //get style
  if (!serie) result.style = "line";

  const isStep = serie?.step;
  if (isStep) result.style = `step-${isStep}`;

  const isSmooth = serie?.smooth;
  if (isSmooth) result.style = "smooth";

  //get label
  result.label = serie?.label ?? undefined;

  //get group mode
  if (serie?.stack === "total") {
    result.stack = "total";
  }

  if (serie?.areaStyle) {
    result.areaStyle = {
      ...serie.areaStyle,
    };
  }

  return result;
};

export const convertChartOptionToForm = (options: any) => {
  let legend = {
    ...options?.legend,
    orientation: getOrientation(options?.legend),
  };
  let xAxis = options?.xAxis;
  let yAxis = options?.yAxis;

  return {
    legend,
    xAxis,
    yAxis,
    layout: options?.layout,
    dataZoom: options?.dataZoom ?? [],
    minorTick: yAxis?.minorTick ?? false,
    color: options?.color,
    series: {
      ...getSerieStyle(options),
    },
  };
};
