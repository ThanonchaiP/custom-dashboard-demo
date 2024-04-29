"use client";

import { Button, Card, Dropdown, Flex, Typography } from "antd";
import _ from "lodash";
import { Layout, Layouts, Responsive, WidthProvider } from "react-grid-layout";
import React, { useState, useEffect } from "react";

import { css } from "@emotion/css";
import { useDashboardStore, useDataStore } from "@/store";
import { DashboardChartDrawer, DashboardElementItem } from "../feature";
import { MoreOutlined } from "@ant-design/icons";

import "react-grid-layout/css/styles.css";
import "react-resizable/css/styles.css";

const ResponsiveReactGridLayout = WidthProvider(Responsive);

export default function DragFromOutsideLayout() {
  const { clearAlreadyChart, removeAlreadyChart } = useDashboardStore();
  const { dashboard, setDashboard, clearDashboard, removeDashboardElement } =
    useDataStore();

  const [isEditing, setIsEditing] = useState(false);
  const [mounted, setMounted] = useState(false);

  const handleLayoutChange = (
    _: Layout[],
    newLayoutWithBreakpoint: Layouts
  ) => {
    setDashboard({ layouts: newLayoutWithBreakpoint });
  };

  const breakpointChangeHandler = (newBreakpoint: string, newCols: number) => {
    // @todo merge hacky way
    const oldLayout =
      dashboard.layouts[dashboard.currentBreakpoint] ||
      dashboard.layouts["lg"] ||
      dashboard.layouts["md"] ||
      dashboard.layouts["sm"] ||
      dashboard.layouts["xs"] ||
      dashboard.layouts["xxs"] ||
      [];
    setDashboard({
      currentBreakpoint: newBreakpoint,
      currentCols: newCols,
      currentLayout: dashboard.layouts[newBreakpoint] || oldLayout,
    });
  };

  const updateLayout = (newLayout: Layout[]) => {
    setDashboard({
      layouts: {
        ...dashboard.layouts,
        [dashboard.currentBreakpoint]: [...newLayout],
      },
      currentLayout: [...newLayout],
    });
  };

  const clearData = () => {
    clearDashboard();
    clearAlreadyChart();
  };

  useEffect(() => {
    setMounted(true);
  }, []);

  return (
    <>
      <Flex
        align="center"
        justify="space-between"
        className={css`
          padding: 16px;
          background-color: #fff;
          position: sticky;
          top: 0;
          left: 0;
          border-bottom: 1px solid rgb(224, 224, 224);
          z-index: 99;
        `}
      >
        <Typography.Title level={2} style={{ margin: 0 }}>
          Dashboard
        </Typography.Title>
        <Flex gap={16}>
          <Button type="primary" danger onClick={clearData}>
            CLEAR
          </Button>
          <Button
            type="primary"
            ghost
            onClick={() => setIsEditing((state) => !state)}
          >
            ADD CHART
          </Button>
        </Flex>
      </Flex>

      {dashboard.currentLayout.length > 0 && (
        <div
          className={css`
            padding-bottom: 24px;
          `}
        >
          <ResponsiveReactGridLayout
            rowHeight={30}
            style={{ flex: 1 }}
            cols={{ lg: 24, md: 12, sm: 6, xs: 3, xxs: 1 }}
            breakpoints={{ lg: 1200, md: 996, sm: 768, xs: 480, xxs: 0 }}
            useCSSTransforms={mounted}
            layouts={dashboard.layouts}
            onBreakpointChange={breakpointChangeHandler}
            onLayoutChange={handleLayoutChange}
            onResizeStop={updateLayout}
            onDragStop={updateLayout}
            draggableHandle=".ant-card-head-title"
          >
            {dashboard.currentLayout &&
              dashboard.currentLayout.map((panel) => (
                <Card
                  key={panel.i}
                  title={panel.i}
                  className={css`
                    overflow: hidden;

                    .ant-card-head-title {
                      cursor: move;
                    }

                    .ant-card-body {
                      height: calc(100% - 56px);
                      padding: 16px;
                    }
                  `}
                  extra={
                    <Dropdown
                      trigger={["click"]}
                      menu={{
                        items: [
                          { key: "edit", label: "Edit chart" },
                          {
                            key: "delete",
                            label: "Delete chart",
                            onClick: () => {
                              removeAlreadyChart(panel.i);
                              removeDashboardElement(panel.i);
                            },
                          },
                        ],
                      }}
                    >
                      <MoreOutlined
                        className={css`
                          font-size: 22px;
                        `}
                      />
                    </Dropdown>
                  }
                >
                  <DashboardElementItem panel={panel} />
                </Card>
              ))}
          </ResponsiveReactGridLayout>
        </div>
      )}

      <DashboardChartDrawer
        open={isEditing}
        onClose={() => setIsEditing(false)}
      />
    </>
  );
}
