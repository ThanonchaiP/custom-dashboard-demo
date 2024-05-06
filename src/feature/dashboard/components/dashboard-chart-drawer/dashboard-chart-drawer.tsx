import { Button, Drawer, Flex, Input, Select } from "antd";
import { PlusOutlined } from "@ant-design/icons";
import { useDashboardStore, useDataStore } from "@/store";
import { css } from "@emotion/css";
import { ChartItem } from "./chart-item";
import { Chart } from "@/types";
import { useEffect } from "react";
import { Layout } from "react-grid-layout";
import { useRouter } from "next/navigation";
import orderBy from "lodash/orderBy";

type DashboardChartDrawerProps = {
  open: boolean;
  onClose: () => void;
};

export const DashboardChartDrawer = ({
  open,
  onClose,
}: DashboardChartDrawerProps) => {
  const router = useRouter();
  const { dashboard, charts, setDashboard } = useDataStore();
  const {
    selectedChart,
    alreadyChart,
    filters,
    setSelectedChart,
    setAlreadyChart,
    setFilters,
    clearFilters,
  } = useDashboardStore();

  const onSelecteChart = (chart: Chart) => {
    setSelectedChart(chart);
  };

  const findClosestToTopLeftSpaceAvailable = () => {
    return { x: 0, y: Infinity };
  };

  const onSubmit = () => {
    if (!selectedChart) return;

    const newPanelPositionXY = findClosestToTopLeftSpaceAvailable();

    const newPanel: Layout = {
      i: selectedChart.name,
      x: newPanelPositionXY.x,
      y: newPanelPositionXY.y,
      w: 12,
      h: 8,
      minW: 1,
      minH: 1,
      maxW: undefined,
      maxH: undefined,
      isDraggable: true,
      isResizable: true,
      isBounded: false,
      resizeHandles: ["se"],
      static: false,
    };

    const newLayout = [...dashboard.currentLayout, newPanel];
    setDashboard({
      layouts: { [dashboard.currentBreakpoint]: newLayout },
      currentLayout: newLayout,
    });

    setAlreadyChart(selectedChart.name);
    onClose();
  };

  const onSortBy = (sortBy: string) => {
    setFilters({ sortBy });
  };

  useEffect(() => {
    if (open) {
      clearFilters();
      setSelectedChart(undefined);
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [open]);

  return (
    <Drawer
      title="CHARTS"
      onClose={onClose}
      open={open}
      className={css`
        .ant-drawer-body {
          padding: 24px 0;
        }
      `}
      extra={
        <Button type="primary" onClick={onSubmit} disabled={!selectedChart}>
          SAVE
        </Button>
      }
    >
      <Flex justify="flex-end" style={{ padding: "0 24px" }}>
        <Button
          type="link"
          icon={<PlusOutlined />}
          onClick={() => router.push("/charts/add")}
        >
          CREATE CHART
        </Button>
      </Flex>
      <Flex gap={8} style={{ marginTop: 12, padding: "0 24px" }}>
        <Input
          placeholder="Filter charts"
          style={{ width: "50%" }}
          onChange={(e) => setFilters({ keyword: e.target.value })}
        />
        <Select
          defaultValue={"date"}
          onChange={(value) => onSortBy(value)}
          options={[
            { label: "Sort by recent", value: "date" },
            { label: "Sort by name", value: "name" },
            { label: "Sort by type", value: "key" },
            { label: "Sort by dataset", value: "dataset" },
          ]}
          style={{ width: "50%" }}
        />
      </Flex>

      <div
        className={css`
          position: relative;
          height: 688px;
          width: 374px;
          overflow: auto;
          will-change: transform;
          direction: ltr;
          margin-top: 38px;
        `}
      >
        <Flex
          vertical
          className={css`
            /* height: 9472px; */
            width: 100%;
          `}
        >
          {orderBy(
            charts.filter((item) =>
              item.name.toLowerCase().includes(filters.keyword.toLowerCase())
            ),
            [filters.sortBy],
            ["asc"]
          ).map((item) => (
            <ChartItem
              key={item.name}
              item={item}
              onSubmit={onSubmit}
              onSelecteChart={onSelecteChart}
              isAdded={alreadyChart.includes(item.name)}
              isSelected={selectedChart?.name === item.name}
            />
          ))}
        </Flex>
      </div>
    </Drawer>
  );
};
