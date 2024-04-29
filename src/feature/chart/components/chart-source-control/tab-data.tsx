import { Collapse, Flex, Tooltip } from "antd";
import { css } from "@emotion/css";
import { charts } from "./options";
import { useCreateChartStore } from "@/store";
import { ChartType } from "@/types";
import { chartOptions } from "@/mock-data";

export const TabData = () => {
  const { data: store, setData } = useCreateChartStore();

  const onChangeChart = (chart: ChartType) => {
    setData({
      key: chart,
      options: chartOptions?.[chart as string] ?? undefined,
      dataset: "public.FCC 2018 Survey",
    });
  };

  return (
    <Flex vertical>
      <Flex
        align="center"
        justify="space-evenly"
        className={css`
          padding: 12px 16px 16px;
          font-size: 22px;
          flex-grow: 1;
          border-bottom: 1px solid #f0f0f0;
        `}
      >
        {charts.map((chart) => (
          <Tooltip key={chart.id} title={chart.label}>
            <div
              className={css`
                svg {
                  color: ${store?.key === chart.id ? "#1890ff" : "#616161"};
                  cursor: pointer;
                  &:hover {
                    color: #1890ff;
                  }
                }
              `}
              onClick={() => onChangeChart(chart.id as ChartType)}
            >
              {chart.icon}
            </div>
          </Tooltip>
        ))}
      </Flex>
      <Collapse
        ghost
        expandIconPosition="end"
        className={css`
          .ant-collapse-item-active {
            .ant-collapse-content-box {
              border-bottom: 1px solid #f0f0f0;
            }
            .ant-collapse-header {
              border-bottom: 1px solid transparent;
            }
          }

          .ant-collapse-header {
            border-bottom: 1px solid #f0f0f0;
          }
        `}
        items={[
          {
            key: "query",
            label: <>Query</>,
            children: <p></p>,
          },
          {
            key: "advancedAnalytics",
            label: "Advanced analytics",
            children: <p></p>,
          },
          {
            key: "annotationsAndLayers",
            label: "Annotations and Layers",
            children: <p></p>,
          },
          {
            key: "predictiveAnalytics",
            label: "Predictive Analytics",
            children: <p></p>,
          },
        ]}
      />
    </Flex>
  );
};
