"use client";

import { SaveOutlined } from "@ant-design/icons";
import { css } from "@emotion/css";
import { Button, Flex, Typography } from "antd";
import { useParams } from "next/navigation";

import { ChartSourceBar, ChartSourceControl, ChartSourceView } from "@/feature";
import { useCreateChartStore, useDataStore } from "@/store";
import { useEffect } from "react";
import { Chart } from "@/types";
import toast from "react-hot-toast";
import { columns } from "@/feature/chart/components/chart-source-bar/mock-data";

export default function EditChartPage() {
  const params = useParams();
  const { charts, updateChart } = useDataStore();
  const { data, setData, setDraftColumns, clearData } = useCreateChartStore();

  const chartId = (params?.chartId as string).replaceAll("_", " ");

  const currentChart = charts.find((chart) => chart.name === chartId);

  const onSave = () => {
    updateChart({
      ...currentChart,
      options: data.options,
    } as Chart);

    toast.success("Chart updated successfully");
  };

  useEffect(() => {
    if (!currentChart) return;

    setData({
      ...currentChart,
      key: currentChart.chart,
    });

    if (currentChart.chart === "table") {
      const keys = currentChart.options?.columns?.map((column: any) => {
        return {
          ...columns.find((col) => col.name === column.key),
          key: column.key,
        };
      });

      setDraftColumns(keys);
    }

    return () => clearData();
  }, [clearData, currentChart, setData, setDraftColumns]);

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
            {chartId}
          </Typography.Title>
          <Button
            icon={<SaveOutlined />}
            type="primary"
            onClick={() => onSave()}
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
          <ChartSourceControl isEditor />
          <ChartSourceView />
        </Flex>
      </Flex>
    </>
  );
}
