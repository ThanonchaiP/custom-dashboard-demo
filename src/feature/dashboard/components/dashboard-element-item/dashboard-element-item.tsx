import { useDataStore } from "@/store";
import { css } from "@emotion/css";
import { Flex, Spin } from "antd";
import EChartsReact from "echarts-for-react";
import { Layout } from "react-grid-layout";
import { useEffect, useState } from "react";

type DashboardElementItemProps = {
  panel: Layout;
};

export const DashboardElementItem = ({ panel }: DashboardElementItemProps) => {
  const { charts } = useDataStore();

  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    setTimeout(() => {
      setIsLoading(false);
    }, 300);
  }, []);

  return (
    <>
      {isLoading ? (
        <Flex
          className={css`
            height: 100%;
          `}
          align="center"
          justify="center"
        >
          <Spin />
        </Flex>
      ) : (
        <EChartsReact
          className={css`
            height: 100% !important;
            width: 100% !important;
          `}
          notMerge
          lazyUpdate
          option={charts.find((item) => item.name === panel.i)?.options ?? {}}
        />
      )}
    </>
  );
};
