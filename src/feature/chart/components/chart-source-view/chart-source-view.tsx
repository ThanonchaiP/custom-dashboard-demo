import { useCreateChartStore } from "@/store";
import { css } from "@emotion/css";
import { EmptyChart } from "./empty-chart";
import EChartsReact from "echarts-for-react";
import { Empty, Flex, Table } from "antd";
import { colorsScheme } from "@/mock-data/colors";
import { tableColumns, tableData } from "@/mock-data/table";

const CHART_LIST = ["line", "bar", "pie", "area"];

export const ChartSourceView = () => {
  const { data } = useCreateChartStore();

  const isChart = CHART_LIST.includes(data.key ?? "");

  if (!data.key) return <EmptyChart />;

  return (
    <div
      className={css`
        padding: 0 16px;
        flex: 1 1 0%;
        min-width: 512px;
        border-left: 1px solid rgb(224, 224, 224);
      `}
    >
      {isChart ? (
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
                //   // top: 40,
                //   // left: 40,
                //   // right: 40,
                //   // bottom: 90,
                // },
              } ?? {}
            }
            // option={{
            //   tooltip: {
            //     trigger: "item",
            //   },
            //   legend: {
            //     orient: "vertical",
            //     left: "left",
            //   },
            //   series: [
            //     {
            //       name: "Access From",
            //       type: "pie",
            //       minShowLabelAngle: 10,
            //       // radius: "60%",
            //       // radius: [0, 0],
            //       // radius: ["50%", "40%"],
            //       data: [
            //         { value: 1048, name: "Search Engine" },
            //         { value: 735, name: "Direct" },
            //         { value: 580, name: "Email" },
            //         { value: 484, name: "Union Ads" },
            //         { value: 300, name: "Video Ads" },
            //       ],
            //       labelLine: {
            //         show: false,
            //       },
            //       label: {
            //         show: true,
            //         // position: "inside",
            //         formatter: "{b}: {c} ({d}%)",
            //       },
            //       emphasis: {
            //         itemStyle: {
            //           // borderRadius: 10,
            //           // borderColor: "#fff",
            //           // borderWidth: 2,
            //           shadowBlur: 10,
            //           shadowOffsetX: 0,
            //           shadowColor: "rgba(0, 0, 0, 0.5)",
            //         },
            //       },
            //     },
            //   ],
            // }}
          />
        </Flex>
      ) : data.key === "table" ? (
        <Table
          rowKey="id"
          columns={tableColumns}
          dataSource={tableData}
          pagination={{ showSizeChanger: false }}
          style={{ margin: "24px 0" }}
        />
      ) : (
        <EmptyChart />
      )}
    </div>
  );
};
