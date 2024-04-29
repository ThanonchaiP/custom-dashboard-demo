import { useCreateChartStore } from "@/store";
import { css } from "@emotion/css";
import { EmptyChart } from "./empty-chart";
import EChartsReact from "echarts-for-react";
import { Flex } from "antd";
import { colorsScheme } from "@/mock-data/colors";

export const ChartSourceView = () => {
  const { data } = useCreateChartStore();

  return (
    <div
      className={css`
        padding: 0 16px;
        flex: 1 1 0%;
        min-width: 512px;
        border-left: 1px solid rgb(224, 224, 224);
      `}
    >
      {data.key ? (
        <Flex
          vertical
          className={css`
            height: calc(60%);
            padding: 16px 0;
          `}
        >
          <EChartsReact
            className={css`
              height: 100% !important;
              width: 100% !important;
            `}
            lazyUpdate
            notMerge
            option={
              {
                ...data?.options,
                color: data.options?.color
                  ? colorsScheme[data.options.color]
                  : colorsScheme["vintage"],
                // grid: {
                //   top: 40,
                //   left: 40,
                //   right: 40,
                //   // bottom: 90,
                // },
              } ?? {}
            }
            // option={{
            //   tooltip: {
            //     trigger: "axis",
            //     axisPointer: {
            //       type: "shadow",
            //     },
            //   },
            //   dataZoom: [
            //     {
            //       show: true,
            //       bottom: 0,
            //       // realtime: true,
            //       // start: 30,
            //       // end: 70,
            //       // xAxisIndex: [0, 1],
            //     },
            //     // {
            //     //   type: "inside",
            //     //   realtime: true,
            //     //   start: 30,
            //     //   end: 70,
            //     //   xAxisIndex: [0, 1],
            //     // },
            //   ],
            // legend: {
            //   show: true,
            //   right: 0,
            //   top: 10,
            //   // padding: [5, 5, 5, 5],
            //   orient: "vertical",
            //   type: "scroll",
            // },
            //   xAxis: {
            //     type: "category",
            //     data: ["Mon", "Tue", "Wed", "Thu", "Fri", "Sat", "Sun"],
            //     name: "X-Axissss",
            //     boundaryGap: false,
            //     nameLocation: "middle",
            //     nameGap: 50,
            //     axisLabel: {
            //       rotate: 45,
            //     },
            //     // minorTick: {
            //     //   show: true,
            //     // },
            //   },
            //   yAxis: {
            //     type: "value",
            //     name: "Y-AxissssA",
            //     nameLocation: "end",
            //     nameGap: 50,
            //     minorTick: {
            //       show: true,
            //     },
            //   },
            //   // color: ["#1890ff", "#f5222d"],
            //   series: [
            //     {
            //       name: "Email",
            //       type: "line",
            //       // stack: "Total",
            //       areaStyle: {},
            //       emphasis: {
            //         focus: "series",
            //       },
            //       data: [120, 132, 101, 134, 90, 230, 210],
            //     },
            //     {
            //       name: "Union Ads",
            //       type: "line",
            //       // stack: "Total",
            //       areaStyle: {},
            //       // emphasis: {
            //       //   focus: "series",
            //       // },
            //       data: [220, 182, 191, 234, 290, 330, 310],
            //     },
            //     {
            //       name: "Video Ads",
            //       type: "line",
            //       // stack: "Total",
            //       areaStyle: {},
            //       // emphasis: {
            //       //   focus: "series",
            //       // },
            //       data: [150, 232, 201, 154, 190, 330, 410],
            //     },
            //     {
            //       name: "Direct",
            //       type: "line",
            //       // stack: "Total",
            //       areaStyle: {},
            //       // emphasis: {
            //       //   focus: "series",
            //       // },
            //       data: [320, 332, 301, 334, 390, 330, 320],
            //     },
            //     {
            //       name: "Search Engine",
            //       type: "line",
            //       // stack: "Total",
            //       label: {
            //         show: true,
            //         position: "top",
            //       },
            //       areaStyle: {},
            //       // emphasis: {
            //       //   focus: "series",
            //       // },
            //       data: [820, 932, 901, 934, 1290, 1330, 1320],
            //     },
            //   ],
            // }}
          />
        </Flex>
      ) : (
        <EmptyChart />
      )}
    </div>
  );
};
