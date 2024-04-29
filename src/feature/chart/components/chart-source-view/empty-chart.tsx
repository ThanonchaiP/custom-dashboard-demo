import { css } from "@emotion/css";
import { Empty, Flex } from "antd";

export const EmptyChart = () => {
  return (
    <Flex
      align="center"
      justify="center"
      className={css`
        width: 100%;
        height: 100%;
      `}
    >
      <Empty />
    </Flex>
  );
};
