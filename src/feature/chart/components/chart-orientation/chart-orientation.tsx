import { Form, Segmented } from "antd";

import { Orientation } from "../chart-source-control/chart-options";

type ChartOrientationProps = {
  data?: Partial<Orientation>;
};

export const ChartOrientation = ({ data }: ChartOrientationProps) => {
  return (
    <>
      {data?.layout && (
        <Form.Item label="Layout" name="layout" initialValue="vertical">
          <Segmented<string> options={["vertical", "horizontal"]} />
        </Form.Item>
      )}
    </>
  );
};
