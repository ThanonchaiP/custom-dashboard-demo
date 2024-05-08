import { Collapse, Flex, Form, Tooltip } from "antd";
import { css } from "@emotion/css";
import { useCreateChartStore } from "@/store";
import { ChartType } from "@/types";
import { chartOptions } from "@/mock-data";
import { charts } from "../chart-source-control/options";
import { TabQuery } from "./components/tab-query";
import { TabQueryTable } from "./components/tab-query-table";
import { chartOptionSchema } from "../chart-source-control/chart-options";

type TabDataProps = {
  isEditor?: boolean;
};

export const TabData = ({ isEditor = false }: TabDataProps) => {
  const { data: store, setData } = useCreateChartStore();

  const currentChart = (store.key ?? "") as string;
  const optionSchema = chartOptionSchema?.[currentChart];
  const optionKeys = Object?.keys(optionSchema ?? {});

  const onChangeChart = (chart: ChartType) => {
    setData({
      key: chart,
      // options: isEditor
      //   ? store.options
      //   : chartOptions?.[chart as string] ?? undefined,
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

      <Form
        layout="vertical"
        // form={form}
        // onValuesChange={(value) => onFormChange(value)}
        className={css`
          .ant-form-item {
            margin-bottom: 12px !important;
          }

          .ant-form-item-label label {
            color: #666666;
            font-size: 12px;
            text-transform: uppercase;
          }

          .ant-form-item-label {
            padding: 0;
            text-transform: uppercase;
          }
        `}
      >
        <Collapse
          ghost
          expandIconPosition="end"
          defaultActiveKey={["query"]}
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
              label: "Query",
              children:
                currentChart === "table" ? (
                  <TabQueryTable querySchema={optionSchema.query} />
                ) : (
                  <TabQuery />
                ),
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
          ].filter((item) => optionKeys.includes(item.key))}
        />
      </Form>
    </Flex>
  );
};
