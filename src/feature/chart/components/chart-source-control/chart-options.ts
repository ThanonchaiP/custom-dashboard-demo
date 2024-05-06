export interface ChartOptionsType {
  orientation?: Partial<Orientation>;
  title?: Partial<Title>;
  options?: Partial<Options>;
  query?: Partial<Query>;
}

export interface Query {
  columns: boolean;
}

export interface Orientation {
  layout: boolean;
}

export interface Title {
  xAxis: XAxis;
  yAxis: YAxis;
}

export interface XAxis {
  title: boolean;
  margin: boolean;
  position?: boolean;
}

export interface YAxis {
  title: boolean;
  margin: boolean;
  position: boolean;
}

export interface Options {
  sortBy: boolean;
  sortAscending: boolean;
  background: boolean;
  color: boolean;
  seriesStyle: boolean;
  showValue: boolean;
  groupMode: boolean;
  area: boolean;
  minorTicks: boolean;
  dataZoom: boolean;
  legend: Legend;
  xAxis: OptionXAxis;
  yAxis: OptionYAxis;
  percentage: boolean;
  pieSeries: {
    labelType: boolean;
    format: boolean;
    showLabel: boolean;
    labelLine: boolean;
    outerRadius: boolean;
    innerRadius: boolean;
  };
}

export interface Legend {
  type: boolean;
  show: boolean;
  orientation: boolean;
  layout: boolean;
}

export interface OptionXAxis {
  format: boolean;
  rotate: boolean;
  currentFormat: boolean;
  bounds: boolean;
}

export interface OptionYAxis {
  format: boolean;
  rotate: boolean;
  currentFormat: boolean;
  bounds: boolean;
}

export const chartOptionSchema = {
  bar: {
    orientation: {
      layout: true,
    },
    title: {
      xAxis: {
        title: true,
        margin: true,
      },
      yAxis: {
        title: true,
        margin: true,
        position: true,
      },
    },
    options: {
      sortBy: true,
      sortAscending: true,
      background: true,
      color: true,
      groupMode: true,
      showValue: true,
      minorTicks: true,
      dataZoom: true,
      legend: {
        type: true,
        show: true,
        orientation: true,
        layout: true,
      },
      xAxis: {
        format: true,
        rotate: true,
        currentFormat: true,
        bounds: true,
      },
      yAxis: {
        format: true,
        rotate: true,
        currentFormat: true,
        bounds: true,
      },
    },
  },
  line: {
    title: {
      xAxis: {
        title: true,
        margin: true,
      },
      yAxis: {
        title: true,
        margin: true,
        position: true,
      },
    },
    options: {
      sortBy: true,
      sortAscending: true,
      background: true,
      color: true,
      showValue: true,
      minorTicks: true,
      dataZoom: true,
      seriesStyle: true,
      area: true,
      legend: {
        type: true,
        show: true,
        orientation: true,
        layout: true,
      },
      xAxis: {
        format: true,
        rotate: true,
        currentFormat: true,
        bounds: true,
      },
      yAxis: {
        format: true,
        rotate: true,
        currentFormat: true,
        bounds: true,
      },
    },
  },
  area: {
    title: {
      xAxis: {
        title: true,
        margin: true,
      },
      yAxis: {
        title: true,
        margin: true,
        position: true,
      },
    },
    options: {
      sortBy: true,
      sortAscending: true,
      background: true,
      color: true,
      groupMode: true,
      showValue: true,
      seriesStyle: true,
      area: true,
      minorTicks: true,
      dataZoom: true,
      legend: {
        type: true,
        show: true,
        orientation: true,
        layout: true,
      },
      xAxis: {
        format: true,
        rotate: true,
        currentFormat: true,
        bounds: true,
      },
      yAxis: {
        format: true,
        rotate: true,
        currentFormat: true,
        bounds: true,
      },
    },
  },
  pie: {
    options: {
      color: true,
      percentage: true,
      legend: {
        type: true,
        show: true,
        orientation: true,
        layout: true,
      },
      pieSeries: {
        labelType: true,
        format: true,
        showLabel: true,
        labelLine: true,
        outerRadius: true,
        innerRadius: true,
      },
    },
  },
  table: {
    query: {
      columns: true,
    },
  },
} as Record<string, ChartOptionsType>;
