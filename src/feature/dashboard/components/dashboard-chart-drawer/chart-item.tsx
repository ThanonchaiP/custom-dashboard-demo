import { dictionaryCharts } from "@/mock-data";
import { useDashboardStore } from "@/store";
import { Chart } from "@/types";
import { css } from "@emotion/css";
import { Card, Flex, Typography } from "antd";
import dayjs from "dayjs";
import relativeTime from "dayjs/plugin/relativeTime";
dayjs.extend(relativeTime);

type ChartItemProps = {
  item: Chart;
  isAdded?: boolean;
  isSelected?: boolean;
  onSubmit?: () => void;
  onSelecteChart: (chart: Chart) => void;
};

export const ChartItem = ({
  item,
  isAdded,
  isSelected,
  onSubmit,
  onSelecteChart,
}: ChartItemProps) => {
  const onClick = () => {
    if (isAdded || isSelected) return;

    onSelecteChart(item);
  };

  return (
    <Card
      className={css`
        .ant-card-body {
          padding: 12px;
        }

        cursor: ${isAdded ? "not-allowed" : "pointer"};
        opacity: ${isAdded ? 0.4 : 1};
        border: 1px solid rgb(224, 224, 224);
        margin: 0px 12px 12px;
        white-space: nowrap;
        overflow: hidden;
        border-radius: 4px;

        border-color: ${isSelected ? "#1890ff" : "rgb(224, 224, 224)"};

        &:hover {
          background-color: #f7f7f7;
        }
      `}
      onClick={onClick}
      onDoubleClick={() => {
        onClick();
        setTimeout(() => {
          onSubmit?.();
        }, 300);
      }}
    >
      <Flex gap={16}>
        <div
          className={css`
            background-image: url("https://zos.alipayobjects.com/rmsportal/jkjgkEfvpUPVyRjUImniVslZfWPnJuuZ.png");
            background-size: cover;
            background-position: center top;
            display: inline-block;
            height: 86px;
            width: 144px;
            margin: 1px 1px 0px;
          `}
        />
        <div>
          <Typography.Text strong ellipsis style={{ marginBottom: 8 }}>
            {item.name}
          </Typography.Text>

          <Flex vertical>
            <Flex gap={12} align="center">
              <Typography.Text
                className={css`
                  font-size: 12px;
                  color: rgb(102, 102, 102);
                  width: 57px;
                `}
              >
                Type :
              </Typography.Text>
              <Typography.Text
                className={css`
                  white-space: nowrap;
                  overflow: hidden;
                  text-overflow: ellipsis;
                  display: block;
                  font-size: 12px;
                  color: #323232;
                `}
              >
                {dictionaryCharts?.[item.chart as string] ?? item.chart}
              </Typography.Text>
            </Flex>
            <Flex gap={12} align="center">
              <Typography.Text
                className={css`
                  font-size: 12px;
                  width: 57px;
                  color: rgb(102, 102, 102);
                `}
              >
                Dataset :
              </Typography.Text>
              <Typography.Text
                className={css`
                  white-space: nowrap;
                  overflow: hidden;
                  text-overflow: ellipsis;
                  display: block;
                  font-size: 12px;
                  color: #323232;
                `}
              >
                {item.dataset}
              </Typography.Text>
            </Flex>
            <Flex gap={12} align="center">
              <Typography.Text
                className={css`
                  font-size: 12px;
                  width: 57px;
                  color: rgb(102, 102, 102);
                `}
              >
                Modified :
              </Typography.Text>

              <Typography.Text
                className={css`
                  white-space: nowrap;
                  overflow: hidden;
                  text-overflow: ellipsis;
                  display: block;
                  font-size: 12px;
                  color: #323232;
                `}
              >
                {dayjs(item.date).fromNow()}
              </Typography.Text>
            </Flex>
          </Flex>
        </div>
      </Flex>
    </Card>
  );
};
