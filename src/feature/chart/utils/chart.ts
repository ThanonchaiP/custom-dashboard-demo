export const getOrientation = (legend?: Record<string, unknown>) => {
  if (!legend) return undefined;

  if ("top" in legend && "right" in legend) return "top";
  else if ("bottom" in legend && "right" in legend) return "bottom";
  else if ("left" in legend && "top" in legend) return "left";
  else if ("right" in legend && "bottom" in legend) return "right";
  else return undefined;
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
  };

  // console.log("-----");

  // console.log({
  //   // ...options,
  //   legend,
  //   xAxis,
  //   yAxis,
  // });

  // console.log("==========================");
};
