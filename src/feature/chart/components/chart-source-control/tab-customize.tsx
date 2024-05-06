import { useCreateChartStore } from "@/store";
import { css } from "@emotion/css";
import { Collapse, Form } from "antd";
import { chartOptionSchema } from "./chart-options";
import { ChartOrientation } from "../chart-orientation";
import { ChartTitle } from "../chart-title";
import { ChartCustomizeOption } from "../chart-customize-option";
import { styleValues } from "@/mock-data/options";
import { useEffect } from "react";
import { convertChartOptionToForm } from "../../utils/chart";

export const TabCustomize = () => {
  const { data, setOptions } = useCreateChartStore();
  const currentChart = (data.key ?? "") as string;

  const [form] = Form.useForm();

  const optionSchema = chartOptionSchema?.[currentChart];
  const optionKeys = Object?.keys(optionSchema ?? {});

  const onFormChange = (value: any) => {
    const key = Object.keys(value)[0];

    if (["xAxis", "yAxis"].includes(key)) {
      setOptions({
        [key]: {
          ...data.options[key],
          ...value[key],
        },
      });
    } else if (key === "legend") {
      let newLegend = {
        ...data.options[key],
        ...value[key],
      };

      if (value[key].orientation) {
        const position = value[key].orientation;
        let newOrientation = {};
        switch (position) {
          case "top":
            newOrientation = {
              right: 0,
              top: 0,
              orient: "horizontal",
            };
            delete newLegend?.left;
            delete newLegend?.bottom;
            break;
          case "bottom":
            newOrientation = {
              right: 0,
              bottom: 0,
              orient: "horizontal",
            };
            delete newLegend?.left;
            delete newLegend?.top;
            break;
          case "left":
            newOrientation = {
              left: 0,
              top: 0,
              orient: "vertical",
            };
            delete newLegend?.right;
            delete newLegend?.bottom;
            break;
          case "right":
            newOrientation = {
              right: 0,
              top: 0,
              orient: "vertical",
            };
            delete newLegend?.left;
            delete newLegend?.bottom;
            break;
          default:
            break;
        }

        newLegend = {
          ...newLegend,
          ...newOrientation,
        };

        delete newLegend?.orientation;
      }

      setOptions({ [key]: { ...newLegend } });
    } else if (key === "minorTick") {
      setOptions({
        xAxis: {
          ...data.options.xAxis,
          ...value,
        },
        yAxis: {
          ...data.options.yAxis,
          ...value,
        },
      });
    } else if (key === "pieSeries") {
      setOptions({
        series: data.options?.series.map((item: any) => {
          let radius = ["56%", "30%"];

          if (value[key]?.outerRadius) {
            radius[0] = `${value[key].outerRadius}%`;
          }
          if (value[key]?.innerRadius) {
            radius[1] = `${value[key].innerRadius}%`;
          }

          return {
            ...item,
            ...value[key],
            radius,
          };
        }),
      });
    } else if (key === "series") {
      setOptions({
        series: data.options.series.map((item: any, index: number) => {
          let newSeries = {
            ...item,
            ...value[key],
          };

          if (value[key].style) {
            const style = value[key].style;
            newSeries = {
              ...newSeries,
              ...(styleValues?.[style] ?? undefined),
            };
            delete newSeries?.style;
          }

          if (value[key].areaStyle) {
            const areaStyle = value[key].areaStyle;

            if ("opacity" in areaStyle) {
              newSeries = {
                ...newSeries,
                areaStyle: {
                  show: true,
                  ...areaStyle,
                },
              };
            } else if (value[key].areaStyle.show === false) {
              delete newSeries?.areaStyle;
            }
          }

          // if (
          //   value[key].label &&
          //   data.key === "area" &&
          //   index !== data.options.series.length - 1
          // ) {
          //   delete newSeries?.label;
          // }

          return newSeries;
        }),
      });
    } else if (key === "layout") {
      setOptions({
        layout: value.layout,
        xAxis: data.options.yAxis,
        yAxis: data.options.xAxis,
      });
    } else {
      setOptions(value);
    }
  };

  useEffect(() => {
    // form.resetFields();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [data.key]);

  useEffect(() => {
    form.setFieldsValue({
      ...(convertChartOptionToForm(data.options) ?? {}),
    });
    // form.setFieldsValue({
    //   legend: {
    //     ...data.options?.legend,
    //     orientation: getOrientation(data.options?.legend),
    //   },
    // });
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [data.key]);

  if (!currentChart || !optionSchema) return null;

  return (
    <Form
      layout="vertical"
      form={form}
      onValuesChange={(value) => onFormChange(value)}
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
        defaultActiveKey={["orientation", "title", "options"]}
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
            key: "orientation",
            label: <>Chart Orientation</>,
            children: <ChartOrientation data={optionSchema.orientation} />,
          },
          {
            key: "title",
            label: "Chart Title",
            children: <ChartTitle data={optionSchema.title} form={form} />,
          },
          {
            key: "options",
            label: "Chart Options",
            children: (
              <ChartCustomizeOption
                data={optionSchema.options}
                chart={data.key}
              />
            ),
          },
        ].filter((item) => optionKeys.includes(item.key))}
      />
    </Form>
  );
};
