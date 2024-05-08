export const chartSource = {};

export const chartOptions = {
  bar: {
    tooltip: {
      trigger: "axis",
      axisPointer: {
        type: "shadow",
      },
    },
    legend: {
      show: true,
      right: 0,
      top: 10,
      orient: "horizontal",
      type: "scroll",
    },
    xAxis: {
      type: "category",
      data: ["2010", "2011", "2012", "2013", "2014"],
      nameLocation: "middle",
    },
    yAxis: {
      type: "value",
    },
    color: "vintage",
    series: [
      {
        name: "Forest",
        type: "bar",
        stack: "total",
        barGap: 0,
        label: "labelOption1",
        emphasis: {
          focus: "series",
        },
        data: [320, 332, 301, 334, 390],
      },
      {
        name: "Steppe",
        type: "bar",
        stack: "total",
        label: "labelOption2",
        emphasis: {
          focus: "series",
        },
        data: [220, 182, 191, 234, 290],
      },
      {
        name: "Desert",
        type: "bar",
        stack: "total",
        label: "labelOption3",
        emphasis: {
          focus: "series",
        },
        data: [150, 232, 201, 154, 190],
      },
      {
        name: "Wetland",
        type: "bar",
        stack: "total",
        label: "labelOption4",
        emphasis: {
          focus: "series",
        },
        data: [98, 77, 101, 99, 40],
      },
    ],
  },
  line: {
    tooltip: {
      trigger: "axis",
      axisPointer: {
        type: "shadow",
      },
    },
    legend: {
      show: true,
      right: 0,
      top: 10,
      orient: "horizontal",
      type: "scroll",
    },
    xAxis: {
      type: "category",
      data: ["Mon", "Tue", "Wed", "Thu", "Fri", "Sat", "Sun"],
      nameLocation: "middle",
      name: "",
      boundaryGap: false,
    },
    yAxis: {
      name: "",
      type: "value",
    },
    color: "vintage",
    series: [
      {
        name: "Test",
        data: [150, 230, 224, 218, 135, 147, 260],
        type: "line",
      },
      {
        name: "Test2",
        data: [250, 130, 324, 418, 235, 147, 460],
        type: "line",
      },
    ],
  },
  pie: {
    tooltip: {
      trigger: "item",
    },
    legend: {
      orient: "horizontal",
      left: "right",
    },
    color: "vintage",
    series: [
      {
        name: "Access From",
        type: "pie",
        radius: "50%",
        data: [
          { value: 1048, name: "Search Engine" },
          { value: 735, name: "Direct" },
          { value: 580, name: "Email" },
          { value: 484, name: "Union Ads" },
          { value: 300, name: "Video Ads" },
        ],
        emphasis: {
          itemStyle: {
            shadowBlur: 10,
            shadowOffsetX: 0,
            shadowColor: "rgba(0, 0, 0, 0.5)",
          },
        },
      },
    ],
  },
  area: {
    tooltip: {
      trigger: "axis",
      axisPointer: {
        type: "cross",
        label: {
          backgroundColor: "#6a7985",
        },
      },
    },
    legend: { left: "right" },
    grid: {
      left: "3%",
      right: "4%",
      bottom: "6%",
      containLabel: true,
    },
    xAxis: {
      type: "category",
      boundaryGap: false,
      data: ["Mon", "Tue", "Wed", "Thu", "Fri", "Sat", "Sun"],
      nameLocation: "middle",
    },

    yAxis: { type: "value" },
    color: "vintage",
    series: [
      {
        name: "Email",
        type: "line",
        stack: "Total",
        areaStyle: {},
        emphasis: {
          focus: "series",
        },
        data: [120, 132, 101, 134, 90, 230, 210],
      },
      {
        name: "Union Ads",
        type: "line",
        stack: "Total",
        areaStyle: {},
        emphasis: {
          focus: "series",
        },
        data: [220, 182, 191, 234, 290, 330, 310],
      },
      {
        name: "Video Ads",
        type: "line",
        stack: "Total",
        areaStyle: {},
        emphasis: {
          focus: "series",
        },
        data: [150, 232, 201, 154, 190, 330, 410],
      },
      {
        name: "Direct",
        type: "line",
        stack: "Total",
        areaStyle: {},
        emphasis: {
          focus: "series",
        },
        data: [320, 332, 301, 334, 390, 330, 320],
      },
      {
        name: "Search Engine",
        type: "line",
        stack: "Total",
        label: {
          show: true,
          position: "top",
        },
        areaStyle: {},
        emphasis: {
          focus: "series",
        },
        data: [820, 932, 901, 934, 1290, 1330, 1320],
      },
    ],
  },
  table: {
    columns: [
      {
        title: "name",
        dataIndex: "name",
        key: "name",
      },
      {
        title: "age",
        dataIndex: "age",
        key: "age",
      },
      {
        title: "address",
        dataIndex: "address",
        key: "address",
      },
    ],
    dataSource: Array.from({ length: 100 }, (_, i) => ({
      id: i,
      name: `Edward King ${i}`,
      age: 32,
      address: `London, Park Lane no. ${i}`,
      year: new Date().getFullYear(),
      platform: `PC-${i}`,
      publisher: `Microsoft`,
    })),
  },
} as Record<string, any>;

export const dictionaryCharts = {
  bar: "Bar Chart",
  line: "Line Chart",
  pie: "Pie Chart",
  area: "Area Chart",
  table: "Table",
} as Record<string, string>;
