import { css } from "@emotion/css";
import { Flex, Typography } from "antd";
import { VerticalAlignTopOutlined } from "@ant-design/icons";
import { DataContainer } from "./data-container";
import { useState } from "react";
import { ChartSourceMetric } from "./chart-source-metric";

export const ChartSourceBar = () => {
  const [hide, setHide] = useState(false);

  return (
    <>
      {hide ? (
        <div
          className={css`
            height: 100%;
            background-color: rgb(247, 247, 247);
            padding: 8px;
            width: 32px;
          `}
        >
          <VerticalAlignTopOutlined
            className={css`
              transform: rotate(90deg);
              color: #1677ff;
              cursor: pointer;
            `}
            onClick={() => setHide((prev) => !prev)}
          />
        </div>
      ) : (
        <Flex
          className={css`
            position: relative;
            user-select: auto;
            width: 300px;
            height: 100%;
            max-width: 33%;
            min-width: 300px;
            box-sizing: border-box;
            flex-shrink: 0;
            background-color: rgb(255, 255, 255);
            padding: 8px 0px;
            border-right: 1px solid rgb(224, 224, 224);
            display: flex;
            flex-direction: column;
            padding: 8px 0px;
            max-height: 100%;
          `}
        >
          <Flex
            align="center"
            justify="space-between"
            style={{ width: "100%", padding: "0 16px" }}
          >
            <Typography.Paragraph style={{ margin: 0 }}>
              Chart Source
            </Typography.Paragraph>
            <VerticalAlignTopOutlined
              className={css`
                transform: rotate(-90deg);
                color: #1677ff;
                cursor: pointer;
              `}
              onClick={() => setHide((prev) => !prev)}
            />
          </Flex>
          <DataContainer />
          <ChartSourceMetric />
        </Flex>
      )}
    </>
  );
};
