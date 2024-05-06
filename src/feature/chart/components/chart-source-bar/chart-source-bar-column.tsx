import { css } from "@emotion/css";
import { Flex, Typography } from "antd";
import { HolderOutlined } from "@ant-design/icons";

import { columns } from "./mock-data";
import { useCreateChartStore } from "@/store";

export const ChartSourceBarColumn = () => {
  const { setIsDragging, setSelectColumn } = useCreateChartStore();

  const handleOnDrag = (e: React.DragEvent, itemId: string) => {
    setIsDragging(true);
    setSelectColumn(columns.find((column) => column.name === itemId));
    e.dataTransfer.setData("columnId", itemId);
    e.dataTransfer.dropEffect = "move";
  };

  return (
    <>
      <Typography.Paragraph
        className={css`
          margin-bottom: 8px;
          font-size: 12px;
          color: rgb(178, 178, 178);
        `}
      >
        Showing 11 of 11
      </Typography.Paragraph>
      <Flex vertical gap={4}>
        {columns.map((column) => (
          <Flex
            key={column.name}
            align="center"
            justify="space-between"
            draggable
            onDragStart={(e) => handleOnDrag(e, column.name)}
            onDragEnd={() => {
              setIsDragging(false);
              setSelectColumn(undefined);
            }}
            className={css`
              padding: 5px 16px;
              cursor: pointer;
              background-color: #f7f7f7;
              border-radius: 4px;
              &:hover {
                background-color: #f0f0f0;
              }
            `}
          >
            <Typography.Text
              className={css`
                font-size: 12px;
                color: #333333;
                overflow: hidden;
                text-overflow: ellipsis;
                white-space: nowrap;
              `}
            >
              {column.name}
            </Typography.Text>
            <HolderOutlined />
          </Flex>
        ))}
      </Flex>
    </>
  );
};
