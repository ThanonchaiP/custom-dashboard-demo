import { Collapse } from "antd";
import { ChartSourceBarColumn } from "./chart-source-bar-column";

export const ChartSourceMetric = () => {
  return (
    <Collapse
      ghost
      expandIconPosition="end"
      defaultActiveKey={["columns"]}
      items={[
        {
          key: "metrics",
          label: <>Metrics</>,
          children: <p></p>,
        },
        {
          key: "columns",
          label: "Columns",
          children: <ChartSourceBarColumn />,
        },
      ]}
    />
  );
};
