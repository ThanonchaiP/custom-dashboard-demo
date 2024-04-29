import { Checkbox, Form, Select, Slider, Typography } from "antd";
import { Options } from "../chart-source-control/chart-options";
import { ChartColorFormItem } from "./chart-color-form-item";
import { seriesStyleOptions } from "@/mock-data/options";

type ChartCustomizeOptionProps = {
  data?: Partial<Options>;
  chart?: string;
};

export const ChartCustomizeOption = ({
  data,
  chart = "",
}: ChartCustomizeOptionProps) => {
  return (
    <>
      <Typography.Text style={{ fontSize: 12 }} strong>
        Series Order
      </Typography.Text>
      {data?.sortBy && (
        <>
          <Form.Item label="Sort Series By">
            <Select options={[]} placeholder="Select..." />
          </Form.Item>
          <Checkbox
            style={{ fontSize: 12, color: "#666666", marginBottom: 12 }}
          >
            SORT SERIES ASCENDING
          </Checkbox>
        </>
      )}

      {data?.color && <ChartColorFormItem />}

      {data?.seriesStyle && (
        <Form.Item
          label="Series Style"
          name={["series", "style"]}
          initialValue={"line"}
        >
          <Select
            options={seriesStyleOptions?.[chart] ?? []}
            placeholder="Select..."
          />
        </Form.Item>
      )}

      {data?.showValue && (
        <Form.Item name={["series", "label", "show"]} valuePropName="checked">
          <Checkbox
            style={{
              fontSize: 12,
              color: "#666666",
              marginBottom: 12,
              marginBlockEnd: 0,
            }}
          >
            SHOW VALUE
          </Checkbox>
        </Form.Item>
      )}

      {data?.groupMode && (
        <Form.Item label="Group Mode">
          <Select
            options={[
              { label: "Stacked", value: "stacked" },
              { label: "Grouped", value: "grouped" },
            ]}
            placeholder="Select..."
          />
        </Form.Item>
      )}

      {data?.area && (
        <>
          <Form.Item
            name={["series", "areaStyle", "show"]}
            valuePropName="checked"
          >
            <Checkbox
              style={{
                fontSize: 12,
                color: "#666666",
                marginBottom: 12,
                marginBlockEnd: 0,
              }}
            >
              AREA CHART
            </Checkbox>
          </Form.Item>

          <Form.Item
            noStyle
            shouldUpdate={(prevValues, currentValues) =>
              prevValues.series?.areaStyle?.show !==
              currentValues.series?.areaStyle?.show
            }
          >
            {({ getFieldValue }) =>
              getFieldValue(["series", "areaStyle", "show"]) && (
                <Form.Item
                  label="AREA CHART OPACITY"
                  name={["series", "areaStyle", "opacity"]}
                  initialValue={0.2}
                >
                  <Slider min={0} max={1} step={0.1} />
                </Form.Item>
              )
            }
          </Form.Item>
        </>
      )}

      {data?.minorTicks && (
        <Form.Item name={["minorTick", "show"]} valuePropName="checked">
          <Checkbox
            style={{
              fontSize: 12,
              color: "#666666",
              marginBottom: 12,
              marginBlockEnd: 0,
            }}
          >
            MINOR TICKS
          </Checkbox>
        </Form.Item>
      )}

      {data?.dataZoom && (
        <Form.Item valuePropName="checked" name={["dataZoom", 0, "show"]}>
          <Checkbox
            style={{ fontSize: 12, color: "#666666", marginBottom: 12 }}
          >
            DATA ZOOM
          </Checkbox>
        </Form.Item>
      )}
      {data?.legend && (
        <>
          <Typography.Text style={{ fontSize: 12 }} strong>
            Legend
          </Typography.Text>
          {data.legend.show && (
            <Form.Item valuePropName="checked" name={["legend", "show"]}>
              <Checkbox
                style={{
                  fontSize: 12,
                  color: "#666666",
                  marginBottom: 12,
                  marginBlockEnd: 0,
                }}
              >
                SHOW LEGEND
              </Checkbox>
            </Form.Item>
          )}
          {data.legend.type && (
            <Form.Item label="Type" name={["legend", "type"]}>
              <Select
                options={[
                  { label: "Plain", value: "plain" },
                  { label: "Scroll", value: "scroll" },
                ]}
                placeholder="Select..."
              />
            </Form.Item>
          )}
          {data.legend.orientation && (
            <Form.Item label="Orientation" name={["legend", "orientation"]}>
              <Select
                options={[
                  { label: "Top", value: "top" },
                  { label: "Bottom", value: "bottom" },
                  { label: "Left", value: "left" },
                  { label: "Right", value: "right" },
                ]}
                placeholder="Select..."
              />
            </Form.Item>
          )}
          {/* {data.legend.layout && (
            <Form.Item label="Layout">
              <Select
                options={[
                  { label: "Horizontal", value: "horizontal" },
                  { label: "Vertical", value: "vertical" },
                ]}
                placeholder="Select..."
              />
            </Form.Item>
          )} */}

          {data.xAxis && (
            <>
              <Typography.Text style={{ fontSize: 12 }} strong>
                X Axis
              </Typography.Text>

              {data.xAxis.format && (
                <Form.Item
                  label="Format"
                  initialValue={"auto"}
                  name={["xAxis", "format"]}
                >
                  <Select
                    options={[{ label: "Adaptive formatting", value: "auto" }]}
                    placeholder="Select..."
                  />
                </Form.Item>
              )}
              {data.xAxis.rotate && (
                <Form.Item
                  label="ROTATE X AXIS LABEL"
                  name={["xAxis", "axisLabel", "rotate"]}
                  initialValue={0}
                >
                  <Select
                    options={[
                      { label: "0°", value: 0 },
                      { label: "45°", value: 45 },
                      { label: "90°", value: 90 },
                    ]}
                  />
                </Form.Item>
              )}
            </>
          )}
        </>
      )}
    </>
  );
};
