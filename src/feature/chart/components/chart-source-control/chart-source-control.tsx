import { css } from "@emotion/css";
import { Tabs } from "antd";
import { TabData } from "./tab-data";
import { TabCustomize } from "./tab-customize";

export const ChartSourceControl = () => {
  return (
    <div
      className={css`
        position: relative;
        user-select: auto;
        width: 350px;
        height: 100%;
        max-width: 33%;
        min-width: 320px;
        box-sizing: border-box;
        flex-shrink: 0;
        align-self: flex-start;
        padding: 0px;
        max-height: 100%;
        overflow: visible;
        border-right: 1px solid rgb(224, 224, 224);
      `}
    >
      <Tabs
        className={css`
          height: 100%;

          .ant-tabs-nav {
            width: 100% !important;
          }

          .ant-tabs-tab {
            display: block;
            flex: 1;
            text-align: center;
          }

          .ant-tabs-nav > div:nth-of-type(1) {
            display: unset !important;
            width: 100% !important;
          }

          .ant-tabs-content-holder {
            overflow-y: scroll !important;
            overflow: auto;
          }
        `}
        defaultActiveKey="data"
        items={[
          {
            key: "data",
            label: "DATA",
            children: <TabData />,
          },
          {
            key: "customize",
            label: "CUSTOMIZE",
            children: <TabCustomize />,
          },
        ]}
      />
    </div>
  );
};
