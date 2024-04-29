import { Collapse } from "antd";

export const ChartSourceMetric = () => {
  return (
    <Collapse
      ghost
      expandIconPosition="end"
      items={[
        {
          key: "metrics",
          label: <>Metrics</>,
          children: <p></p>,
        },
        {
          key: "columns",
          label: "Columns",
          children: <p></p>,
        },
      ]}
    />
  );
};
