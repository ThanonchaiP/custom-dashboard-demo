"use client";

import { Button, Flex, Typography } from "antd";
import { SaveOutlined } from "@ant-design/icons";
import { css } from "@emotion/css";
import { useToggle } from "@mantine/hooks";
import { useCreateChartStore } from "@/store";
import { useEffect } from "react";
import {
  ChartSourceBar,
  ChartSourceConfirmModal,
  ChartSourceControl,
  ChartSourceView,
} from "@/feature/chart";

export default function AddChartsPage() {
  const [toggle, setToggle] = useToggle();
  const { data, clearData } = useCreateChartStore();

  useEffect(() => clearData(), [clearData]);

  return (
    <>
      <Flex vertical style={{ height: "100%" }}>
        <Flex
          align="center"
          justify="space-between"
          style={{
            padding: "16px",
            background: "#fff",
          }}
        >
          <Typography.Title level={2} style={{ margin: 0 }}>
            Untitled
          </Typography.Title>
          <Button
            icon={<SaveOutlined />}
            type="primary"
            onClick={() => setToggle()}
            disabled={!data.key && !data.options}
          >
            SAVE
          </Button>
        </Flex>
        <Flex
          className={css`
            background: rgb(255, 255, 255);
            text-align: left;
            position: relative;
            width: 100%;
            height: 100%;
            max-height: 100%;
            min-height: 0px;
            display: flex;
            flex: 1 1 0%;
            flex-wrap: nowrap;
            border-top: 1px solid rgb(224, 224, 224);
          `}
        >
          <ChartSourceBar />
          <ChartSourceControl />
          <ChartSourceView />
        </Flex>
      </Flex>

      <ChartSourceConfirmModal open={toggle} onClose={setToggle} />
    </>
  );
}
