import { Form, FormInstance, Input, Select, Typography } from "antd";

import { Title } from "../chart-source-control/chart-options";
import { chartTitleMarginOptions, chartTitlePositionOptions } from "./options";
import { useDebouncedState } from "@mantine/hooks";
import { useEffect } from "react";
import { useCreateChartStore } from "@/store";

type ChartTitleProps = {
  data?: Partial<Title>;
  form: FormInstance;
};

export const ChartTitle = ({ data, form }: ChartTitleProps) => {
  const { data: dataStore, setOptions } = useCreateChartStore();

  const [xAxisTitle, setXAxisTitle] = useDebouncedState("", 500);
  const [yAxisTitle, setYAxisTitle] = useDebouncedState("", 500);

  useEffect(() => {
    setOptions({
      xAxis: {
        ...dataStore.options.xAxis,
        name: xAxisTitle,
      },
      yAxis: {
        ...dataStore.options.yAxis,
        name: yAxisTitle,
      },
    });
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [xAxisTitle, yAxisTitle]);

  return (
    <>
      {data?.xAxis && (
        <>
          <Typography.Text style={{ fontSize: 12 }} strong>
            X Axis
          </Typography.Text>
          {data.xAxis.title && (
            <Form.Item label="X Axis Title">
              <Input onChange={(value) => setXAxisTitle(value.target.value)} />
            </Form.Item>
          )}
          {data.yAxis?.margin && (
            <Form.Item label="X Axis Bottom Margin" name={["xAxis", "nameGap"]}>
              <Select
                placeholder="Search..."
                options={chartTitleMarginOptions}
              />
            </Form.Item>
          )}
        </>
      )}

      {data?.yAxis && (
        <>
          <Typography.Text style={{ fontSize: 12 }} strong>
            Y Axis
          </Typography.Text>
          {data.yAxis.title && (
            <Form.Item label="Y Axis Title">
              <Input onChange={(value) => setYAxisTitle(value.target.value)} />
            </Form.Item>
          )}
          {data.yAxis?.margin && (
            <Form.Item label="Y Axis Bottom Margin" name={["yAxis", "nameGap"]}>
              <Select
                allowClear
                placeholder="Search..."
                options={chartTitleMarginOptions}
              />
            </Form.Item>
          )}
          {data.yAxis.position && (
            <Form.Item
              label="Y Axis Title Position"
              name={["yAxis", "nameLocation"]}
            >
              <Select
                placeholder="Search..."
                options={chartTitlePositionOptions}
              />
            </Form.Item>
          )}
        </>
      )}
    </>
  );
};
