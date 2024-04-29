import { Flex, Typography } from "antd";
import { DatabaseOutlined } from "@ant-design/icons";
import { MoreOutlined } from "@ant-design/icons";
import { css } from "@emotion/css";

export const DataContainer = () => {
  return (
    <Flex
      align="center"
      justify="space-between"
      className={css`
        border-bottom: 1px solid rgb(224, 224, 224);
        padding: 16px 8px 16px 16px;
      `}
      gap={8}
    >
      <DatabaseOutlined style={{ fontSize: 24 }} />
      <Typography.Text
        style={{ margin: 0 }}
        className={css`
          flex: 1 1 100%;
          display: inline-block;
          background-color: rgb(240, 240, 240);
          padding: 8px;
          border-radius: 4px;
          text-align: center;
          text-overflow: ellipsis;
          white-space: nowrap;
          overflow: hidden;
        `}
      >
        public.FCC 2018 Survey
      </Typography.Text>
      <MoreOutlined style={{ fontSize: 24, cursor: "pointer" }} />
    </Flex>
  );
};
